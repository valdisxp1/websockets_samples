<?php
include("../params.php");
include("jscodeworker.php");
header("Content-type:application/javascript");//propper header
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");?>
<?php
$code="";
$i=$_GET["i"];
$v=$_GET["v"];
if($i=="n"){$code.="function MOVE(){\n";}
if(($v=="1.3")){
$code.=implode('', file('move/move.js'));
if($i=="n"){$code.="}\n";}
$out=jswork($code,$code_chop_1line,$code_chop_scope);
echo "$out";
}
?>