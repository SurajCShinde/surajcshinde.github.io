<?php
if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$comments = $_POST['comments'];
	$to = "surajchshinde@gmail.com";
	$header = "From: $name <$email>";
	$message ="Name: $name \n \n E-mail: $email \n\n Subject: $subject\n\n Message: $comments";
	if (mail($to,$subject,$message,$headers)) {
	echo "Thanks for mail";
	}else{
		echo "Try again.";
	}
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Lonavala foods</title>
	</head>
	<body>
		<form action="" method="post" >
			
			<p>Name:<br>
				<input type="text" name="name">
			</p>
			<p>E-mail:<br>
				<input type="text" name="email">
			</p>
			<p>Subject:<br>
				<input type="text" name="subject">
			</p>
			<p>comments:<br>
				<textarea name="comments"></textarea>
			</p>
			<p><input type="submit" name="" value="Send"></p>
			
		</form>
	</body>
</html>
