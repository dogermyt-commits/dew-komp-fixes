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

$formType = isset($data['form']) ? $data['form'] : 'contact';

// Różne adresy email w zależności od formularza
if ($formType === 'custom-offer') {
    $to = 'serwis@dew-komp.pl';
} else {
    $to = 'kontakt@dew-komp.pl';
}

// Sanityzacja danych
$name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : 'Nie podano';

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
    $serviceType = isset($data['serviceType']) ? htmlspecialchars(strip_tags($data['serviceType'])) : 'Nie podano';
    $budget = isset($data['budget']) ? htmlspecialchars(strip_tags($data['budget'])) : 'Nie podano';
    $description = isset($data['description']) ? htmlspecialchars(strip_tags($data['description'])) : '';
    
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
    $message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';
    
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
$headers = "From: DEW-Komp <serwis@dew-komp.pl>\r\n";
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
