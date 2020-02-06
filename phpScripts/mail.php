<?php 

$to = 'blackrec1@gmail.com';
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];

$subject = 'Перезвонить клиенту';
$message = 'Имя: ' . $name . ', Номер телефона: ' . $phone . ', Комментарий: ' . $comment;

mail($to, $subject, $message);
