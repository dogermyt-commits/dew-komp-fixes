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

$to = 'serwis@dew-komp.pl';
$form = isset($data['form']) ? $data['form'] : 'unknown';

// Sanityzacja danych
$name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : 'Nie podano';
$message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';

// Walidacja
if (empty($name) || empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Imię i email są wymagane']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Nieprawidłowy adres email']);
    exit();
}

// Budowanie tematu i treści w zależności od formularza
if ($form === 'contact') {
    $subject = "DEW-Komp - Nowa wiadomość od: $name";
    $body = "=== NOWA WIADOMOŚĆ Z FORMULARZA KONTAKTOWEGO ===\n\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n\n";
    $body .= "Wiadomość:\n$message\n";
} elseif ($form === 'custom-offer') {
    $serviceType = isset($data['serviceType']) ? htmlspecialchars(strip_tags($data['serviceType'])) : 'Nie podano';
    $budget = isset($data['budget']) ? htmlspecialchars(strip_tags($data['budget'])) : 'Nie podano';
    $description = isset($data['description']) ? htmlspecialchars(strip_tags($data['description'])) : '';
    
    $subject = "DEW-Komp - Zapytanie o wycenę od: $name";
    $body = "=== ZAPYTANIE O OFERTĘ INDYWIDUALNĄ ===\n\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n";
    $body .= "Rodzaj usługi: $serviceType\n";
    $body .= "Budżet: $budget\n\n";
    $body .= "Opis potrzeb:\n$description\n";
} else {
    $subject = "DEW-Komp - Wiadomość od: $name";
    $body = "=== WIADOMOŚĆ ZE STRONY ===\n\n";
    $body .= "Formularz: $form\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n\n";
    $body .= "Treść:\n" . print_r($data, true) . "\n";
}

// Nagłówki emaila
$headers = "From: noreply@dew-komp.pl\r\n";
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
