<?php

$recepient = "antonapraks@gmail.com";
$sitename = "EasyEnglish";

$name = trim($_POST["name"]);
$skype = trim($_POST["skype"]);
$email = trim($_POST["email"]);
$descr = trim($_POST["descr"]);
$message = "Имя: $name \nSkype: $skype \nEmail: $email \n Описание: $descr";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");