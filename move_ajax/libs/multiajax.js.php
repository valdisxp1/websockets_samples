<?php
include("../params.php");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Content-type:application/javascript");//propper header?>
<?php
$handle = fopen("multiajax/multiajax3.js", "rb");
$filesize=filesize("multiajax/multiajax3.js");
$contents = fread($handle, filesize("multiajax/multiajax3.js"));
fclose($handle);
echo $contents;
 ?>