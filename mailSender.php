<?php

require 'class.phpmailer.php';

define('ADMIN_MAIL','ka_em@vp.pl');
define('ADMIN_NAME','Chris_G');

if($_SERVER['REQUEST_METHOD']=='POST'){
  if(!empty($_POST['name']) && !empty($_POST['mail'])&& !empty($_POST['msg'])){

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $msg = trim($_POST['msg']);

    $mail = new PHPMailer;

    $mail->addAddress(ADMIN_MAIL, ADMIN_NAME);

    $mail->setFrom($email, $name);

    $mail->Body = $msg;

    if (!$mail->send()) {

      $errorText = $mail->ErrorInfo; // pobieramy błąd z biblioteki
      // generujemy link przekierowania z przekazaniem przez GET komunikatu błędu
      $redirectLink = 'index.php?error=' . urlencode($errorText);
    } else {
      // wiadomość sie wysłała
      $successText = 'Mail was send';
      $redirectLink = 'index.php?success=' . urlencode($successText);
    }
    // przekierowanie
    header('Location: ' . $redirectLink);
  }
}
