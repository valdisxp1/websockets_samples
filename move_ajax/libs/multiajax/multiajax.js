function MAJAX(){
var sockets=new Object;
//this.sockets=sockets;//aizkomentet
this.newsocket_sget=function(name,url,state4){
 s=new Object;
 s.state4=state4;
 s.url=url;
 s.mode="GET";
 this.newsocket(name,s);
};
this.newsocket=function(name,sock){//jauns sockets ar objektu
	sockets["s"+name]=new Object;
	sockets["s"+name].url=sock.url;
	sockets["s"+name].state4=sock.state4;
	//sockets["s"+name].response=null;
	sockets["s"+name].startdate=new Date();
	sockets["s"+name].enddate=null;	
if ((sockets["s"+name].X=GetXmlHttpObject())==null)
  {
  alert ("Your browser does not support AJAX!");
  return null;
  }else{//darbs
  	if(sock.mode=="GET"){
  	sockets["s"+name].X.onreadystatechange=function(){
  	if (sockets["s"+name].X.readyState==4)
     {
    sockets["s"+name].enddate=new Date(); 
   	//sockets["s"+name].response=sockets["s"+name].X.responseText;
   	sockets["s"+name].state4();
     }};
    sockets["s"+name].X.open("GET",sockets["s"+name].url,true);
    sockets["s"+name].X.send(null);
  		
  	}
  } 
};
this.clearsocket=function(name){sockets["s"+name]={"fail":true};};
this.getsocket=function(name){
var sock=sockets["s"+name];
return {"url":sock.url,
"responce":sock.responce,
"enddate":sock.enddate,
"startdate":sock.startdate};};
function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}
}