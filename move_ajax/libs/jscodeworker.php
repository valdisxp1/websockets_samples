<?php
function jswork($text,$d1l=true,$dsc=true){
if($d1l){
 //echo"\x2F*all 1liners removed*\x2F\n";
 $pos=0;$os=0;$rpos=0;
 while(($pos=strpos($text,"\x2F\x2F",$os))!==FALSE){
	$os=$pos;//$newline="\n";
	if(($rpos=strpos($text,"\n",$pos))===FALSE){$rpos=strlen($text);};
	//echo "\x2F*$pos $rpos*\x2F\n";
	$text=substr_replace($text,"\n",$pos,$rpos-$pos+1);}//zinu kaapeec
 }
if($dsc){
 //echo"\x2F*all more-liners removed*\x2F\n";
 $pos=0;$os=0;$rpos=0;
 while(($pos=strpos($text,"\x2F*",$os))!==FALSE){
	$os=$pos;//$newline="\n";
	if(($rpos=strpos($text,"*\x2F",$pos))===FALSE){$rpos=strlen($text);};
	//echo "\x2F*$pos $rpos*\x2F\n";
	$text=substr_replace($text,"",$pos,$rpos-$pos+2);}//zinu kaapeec
 }
return $text;}
?>