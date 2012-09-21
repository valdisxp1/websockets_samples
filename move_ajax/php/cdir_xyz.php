<?php
include("timestamp.php");
include("../params.php");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Content-type:application/json");
$con = mysql_connect($db_adress,$db_user,$db_pas);
$name=$_GET["name"];
$v=$_GET["v"];
$x=$_GET["x"];
$y=$_GET["y"];
$z=$_GET["z"];
$dx=$_GET["dx"];
$dy=$_GET["dy"];
$dz=$_GET["dz"];
$V_MAX=1000;
$MAX_ERROR=1000;//ms
 //TODO tollerance
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db($db_db, $con);
if($name!=null){
if($v<0){$v=0-$v;}if($v>$V_MAX){$v=$V_MAX;}
$result = mysql_query("SELECT * FROM $db_moving WHERE name='$name'");
if($row = mysql_fetch_array($result)){
//TODO chek here
if(($v!=null)&&($x!=null)&&($y!=null)&&($z!=null)&&($dx!=null)&&($dy!=null)&&($dz!=null)){
	$time=timestamp();
	mysql_query("UPDATE $db_moving SET x=$x,y=$y,z=$z,dx=$dx,dy=$dy,dz=$dz,v=$v,vstartdate=$time WHERE name='$name'");
	echo "done";
}
}
}
mysql_close($con);
?>