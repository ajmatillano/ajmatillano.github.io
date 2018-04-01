<?php
  //Created by ajmatillano.com
  //Email information
  $to = "info@acasysproperties.com";
  $subject = "acasysproperties.com: Inquiry from " . strip_tags($_POST['cotactUsName']) . " via Contact Us";

  $headers = "From: " . strip_tags($_POST['contactUsEmail']) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($_POST['contactUsEmail']) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $senderEmail = $_REQUEST['contactUsEmail'];
  $senderName = $_REQUEST['cotactUsName'];
  $messageContent = $_REQUEST['contactUsMessage'];

  $message = '<html><body>';
  $message .= '<h2>An Inquiry Has Been Sent via Contact Us Page</h2>';
  $message .= '<h3>From:' . $senderName . '</h3>';
  $message .= '<h3>Email:' . $senderEmail . '</h3>';
  $message .= '<h3>Message:</h3>';
  $message .= '<p>' . $messageContent . '</p>';
  $message .= '<p><i>--Nothing Follows--</i></p>';
  $message .= '</body></html>';

  //send email
  mail($to, $subject, $message, $headers);
  //Email response
  echo "<script type=\"text/javascript\">
        alert('Thank you for contacting us! Your message has been sent to info@acasysproperties.com');
        window.location.href='contact_us.html';
        </script>";

?>
