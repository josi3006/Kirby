<?php
    $mail_to = 'info@KirbyAquatics.com'; 

    $name = $_POST['sender_name'];
    $mail_from = $_POST['sender_email'];
    $message = $_POST['sender_message'];

    $subject = 'K I R B Y contact from ' . $name;

    $body_message = 'Fromp: ' . $name . "\r\n";
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'Message: ' . $message;

    $headers = 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";

    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', '587');

    $mail_sent = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
        alert('Thanks for writing! Someone from Kirby will contact you shortly.');
        window.location = 'index.html';
        </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">

        alert('So sorry.  Something went wrong. Please email info@KirbyAquatics.com.  Thank you!');
        window.location = 'index.html';
    </script>
    <?php
    }
?>