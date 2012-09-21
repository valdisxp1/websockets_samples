<?php
include("timestamp.php");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Content-type:application/json");
$time = timestamp();
echo "$time\n";
?>