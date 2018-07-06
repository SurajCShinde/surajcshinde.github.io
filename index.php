<?php
$to="surajchshinde@gmail.com";
$subject="Test mail";
$message="this is test mail";
$headers="From:shinde.suraj924@gmail.com";
if (mail($to,$subject,$message,$headers)) {
echo "Thanks for mail";
}else{
	echo "Try again.";
}

?>
