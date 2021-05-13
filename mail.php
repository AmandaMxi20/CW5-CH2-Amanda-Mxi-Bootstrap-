<?php //connecting your contact form to email using PHP
if(isset($_POST['name']))
$name =$_POST['name'];

if(isset($_POST['email']))
$email =$_POST['email'];

if(isset($_POST['message']))
$name =$_POST['message'];

if(isset($_POST['subject']))
$name =$_POST['subject'];

if($name=== ''){
    echo "name cannot be empty.";
    die();
}
if ($email=== ''){
    echo "email cannot be empty";
    die();
}else{
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        echo "Email form invalid. ";
        die();
    }
}
if ($subject=== ''){
    echo "subject cannot be empty";
    die();
}






$content="From:"$name \n Email: $email \n Message: $message";
$recipient = 'youremail@here.com';
$emailheader = "From: $email \r\n";

mail($recipient, $subject, $content, $emailheader) or die("Error!");
echo "Email sent!";
?>


