<?php
    $mail_to = 'info@KirbyAquatics.com'; // specify your email here

    // Assigning data from the $_POST array to variables
    $name = $_POST['sender_name'];
    $mail_from = $_POST['sender_email'];
    $message = $_POST['sender_message'];

    // Construct email subject
    $subject = 'K I R B Y contact from ' . $name;

    // Construct email body
    $body_message = 'From: ' . $name . "\r\n";
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'Message: ' . $message;

    // Construct email headers
    $headers = 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";

    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', '587');

    $mail_sent = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
        alert('Thank you for the message. We will contact you shortly.');
        window.location = window.history.back();

        </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please notify the site administrator info@kirbyaquatics.com');
        window.location = 'index.html';
    </script>
    <?php
    }
?>