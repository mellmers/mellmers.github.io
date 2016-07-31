<?php

// CHANGE EMAIL ADDRESS ON LINE 54.

if(!$_POST) exit;

if (!defined('PHP_EOL')) define('PHP_EOL', "\r\n");

$formResult = array();
$captchaResult = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// Construct the Google verification API request link.
	$params = array();
	$params['secret'] = '6LcyxRcTAAAAABakVOh3H39RKBX-ZCCG-7wcHk1N'; // Secret key
	if (!empty($_POST) && isset($_POST['g-recaptcha-response'])) {
		$params['response'] = urlencode($_POST['g-recaptcha-response']);
	}
	$params['remoteip'] = $_SERVER['REMOTE_ADDR'];

	$params_string = http_build_query($params);
	$requestURL = 'https://www.google.com/recaptcha/api/siteverify?' . $params_string;

	// Get cURL resource
	$curl = curl_init();

	// Set some options
	curl_setopt_array($curl, array(
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL => $requestURL,
	));

	// Send the request
	$response = curl_exec($curl);
	// Close request to clear up some resources
	curl_close($curl);

	$response = @json_decode($response, true);

	if ($response['success'] === true) {
        $captchaResult = true;
	}
}

$name     	= $_POST['name'];
$address    = $_POST['address'];
$zip     	= $_POST['zip'];
$town     	= $_POST['town'];
$email    	= $_POST['email'];
$mobile		= $_POST['mobile'];
$phone		= $_POST['phone'];
$subject  	= $_POST['subject'];
$message 	= $_POST['message'];

$contact = '';

if($email !== '') {
	$contact = $email;
}
else if($mobile !== '') {
	$contact = $mobile;
}
else if($phone !== '') {
	$contact = $phone;
}

if(get_magic_quotes_gpc()) {
	$message = addslashes($message);
}

// Configuration option.
// Enter the email address that you want to emails to be sent to.
$receiver = 'moritz.ellmers@web.de';

$e_subject = "Anfrage von Webseite: $subject - $name <$contact>";

// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = 'Sie wurden von ' . $name . ' über das Kontaktformular kontaktiert. Folgende Nachricht wurde empfangen:' . PHP_EOL . PHP_EOL . PHP_EOL;
$e_content = "\"$message\"" . PHP_EOL . PHP_EOL . PHP_EOL;
$e_reply = $name . ' hat folgende Kontaktdaten hinterlegt: ' . PHP_EOL . PHP_EOL;
$e_reply .= $email !== '' ?  " $email " . PHP_EOL : '';
$e_reply .= $phone !== '' ?  " $phone " . PHP_EOL : '';
$e_reply .= $mobile !== '' ?  " $mobile " . PHP_EOL : '';
$e_reply .= $address !== '' ?  " $address " . PHP_EOL : '';
$e_reply .= $zip !== '' ?  " $zip " . PHP_EOL : '';
$e_reply .= $town !== '' ?  " $town " . PHP_EOL : '';

//. PHP_EOL . " $phone " . PHP_EOL . " $mobile \n $address \n $zip \n $town \"";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $contact" . PHP_EOL;
$headers .= "Reply-To: $contact" . PHP_EOL;
$headers .= 'MIME-Version: 1.0' . PHP_EOL;
$headers .= 'Content-type: text/plain; charset=utf-8' . PHP_EOL;
$headers .= 'Content-Transfer-Encoding: quoted-printable' . PHP_EOL;

if($captchaResult) {
	if (mail($receiver, $e_subject, $msg, $headers)) {
		$formResult['success'] = true;
	} else {
		$formResult['error'] = "E-Mail konnte nicht gesendet werden. Probiere es gleich noch einmal.";
	}
} else {
	$formResult['error'] = "Re-Captcha fehlerhaft - bist du ein Roboter?";
}

echo json_encode($formResult);