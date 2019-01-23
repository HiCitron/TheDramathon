<?php
mail("info@nothing.com", 
	"[CONTACT US] ".$_POST["subject"],
	"Received ".date("l jS \of F Y h:i:s A")."\r\n".
	"From: ".$_POST["name"]."\r\n".
	"Mail: ".$_POST["email"]."\r\n\r\n".
	"Subject: ".$_POST["subject"]."\r\n\r\n".$_POST["content"]."\r\n");
header('Location: http://thedramathon.com/aboutus.html#contact');
?>