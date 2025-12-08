<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Metoda nie dozwolona']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Nieprawidłowe dane']);
    exit();
}

// Sprawdzenie honeypot (ochrona antyspamowa)
$honeypot = isset($data['honeypot']) ? $data['honeypot'] : '';
if (!empty($honeypot)) {
    echo json_encode(['success' => true, 'message' => 'Wiadomość wysłana']);
    exit();
}

// Rate limiting - max 5 wiadomości dziennie z jednego IP
$ip = $_SERVER['REMOTE_ADDR'];
$rateLimitFile = sys_get_temp_dir() . '/sendmail_ratelimit_' . md5($ip) . '.json';
$today = date('Y-m-d');
$maxMessagesPerDay = 5;

$rateData = [];
if (file_exists($rateLimitFile)) {
    $rateData = json_decode(file_get_contents($rateLimitFile), true) ?: [];
}

// Reset jeśli nowy dzień
if (!isset($rateData['date']) || $rateData['date'] !== $today) {
    $rateData = ['date' => $today, 'count' => 0];
}

if ($rateData['count'] >= $maxMessagesPerDay) {
    echo json_encode(['success' => false, 'message' => 'Przekroczono limit wiadomości na dziś. Spróbuj ponownie jutro.']);
    exit();
}

// Zwiększ licznik
$rateData['count']++;
file_put_contents($rateLimitFile, json_encode($rateData));

$formType = isset($data['form']) ? $data['form'] : 'contact';

// Konfiguracja adresatów w zależności od formularza
if ($formType === 'custom-offer') {
    $to = 'serwis@dew-komp.pl';
} else {
    $to = 'kontakt@dew-komp.pl';
}

// Sanityzacja danych
$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? strip_tags(trim($data['phone'])) : 'Nie podano';

// Walidacja podstawowa
if (empty($name) || empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Imię i email są wymagane']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Nieprawidłowy adres email']);
    exit();
}

// Budowanie treści w zależności od typu formularza
if ($formType === 'custom-offer') {
    $serviceType = isset($data['serviceType']) ? strip_tags(trim($data['serviceType'])) : 'Nie podano';
    $budget = isset($data['budget']) ? strip_tags(trim($data['budget'])) : 'Nie podano';
    $description = isset($data['description']) ? strip_tags($data['description']) : '';
    
    if (empty($description)) {
        echo json_encode(['success' => false, 'message' => 'Opis jest wymagany']);
        exit();
    }
    
    $subject = "DEW-Komp - Zapytanie o wycenę od: $name";
    $body = "=== ZAPYTANIE O OFERTĘ INDYWIDUALNĄ ===\n\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n";
    $body .= "Rodzaj usługi: $serviceType\n";
    $body .= "Budżet: $budget\n\n";
    $body .= "Opis potrzeb:\n$description\n";
} else {
    $message = isset($data['message']) ? strip_tags($data['message']) : '';
    
    if (empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Wiadomość jest wymagana']);
        exit();
    }
    
    $subject = "DEW-Komp - Nowa wiadomość od: $name";
    $body = "=== NOWA WIADOMOŚĆ Z FORMULARZA KONTAKTOWEGO ===\n\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n\n";
    $body .= "Wiadomość:\n$message\n";
}

// Nagłówki emaila
$headers = "From: DEW-Komp <noreply@dew-komp.pl>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Wysyłka
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Wiadomość wysłana']);
} else {
    echo json_encode(['success' => false, 'message' => 'Błąd wysyłki. Spróbuj ponownie później.']);
}
?>
