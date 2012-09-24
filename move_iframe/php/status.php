<?php
include("timestamp.php");
include("../params.php");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Content-type:text/html");
$con = mysql_connect($db_adress,$db_user,$db_pas);
$RETRY_COUNT=1000;
$RETRY_DELAY=10000;
$SEARCH_RECALL=200;//atpakalskats

$t=$_GET["t"];
$en=$_GET["en"];

function need2know($arr){
	$der=array("name","x","y","z","dx","dy","dz","vstartdate","v");
	foreach($arr as $dax=>$value){
	if(in_array($dax,$der)){$need[$dax]=$arr[$dax];}
	}
return $need;
}
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db($db_db, $con);

if($t==null){$result = mysql_query("SELECT * FROM $db_moving");
while($row = mysql_fetch_array($result)){
	$rez[]=need2know($row);  
}
}else
{//retrying
$n=0;$rez_count=0;$t-=$SEARCH_RECALL;
while(($n<$RETRY_COUNT)&&($rez_count==0)){
$n++;
$result = mysql_query("SELECT * FROM $db_moving WHERE vstartdate >= $t");
while($row = mysql_fetch_array($result)){
	$rez_count++;
	$rez[]=need2know($row);  
}
//echo "a\n";
flush();
usleep($RETRY_DELAY);}
if($rez_count==0){die('TIMEOUT');}
}

//var_dump($rez);
if($en=="a"){
 foreach($rez as $value){
 if(is_array($value)){ $tmp[]=implode(",",$value);}else{$tmp[]=$value;} 
 /*var_dump($tmp);*/}
 //var_dump($rez);
 $sendable = implode("@",$tmp);
 //var_dump($rez);
}else
{$sendable = json_encode($rez);}

echo "<script>";
echo "_recieve(\"$sendable\")";
echo "</script>";

mysql_close($con);
?>