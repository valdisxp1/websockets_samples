function MAJAX(){
var sockets=new Object;
var colects=new Object;
this.sockets=sockets;//aizkomentet
this.colects=colects;//aizkomentet
this.newsocket_sget=function(name,url,state4){
 s=new Object;
 s.state4=state4;
 s.url=url;
 s.mode="GET";
 this.newsocket(name,s);
};
this.newsocket=function(name,sock){//jauns sockets ar objektu
	sockets["s"+name]=new Object;
	sockets["s"+name].url=sock.url;// atstarpes atdala prioritashu rindu
	sockets["s"+name].state4=sock.state4;
	//sockets["s"+name].response=null;
	sockets["s"+name].enddate=null;
	sockets["s"+name].startdate=null;
	sockets["s"+name].mode=sock.mode;
	sockets["s"+name].colection=null;
};
this.runsocket=function (name){	
	sockets["s"+name].startdate=new Date();
if ((sockets["s"+name].X=GetXmlHttpObject())==null)
  {
  alert ("Your browser does not support AJAX!");
  return null;
  }else{//darbs
  	if(sockets["s"+name].mode=="GET"){
  	sockets["s"+name].X.onreadystatechange=function(){
  	if (sockets["s"+name].X.readyState==4)
     {
    sockets["s"+name].enddate=new Date(); 
   	//sockets["s"+name].response=sockets["s"+name].X.responseText;
   	sockets["s"+name].state4();
   	if(sockets["s"+name].colection!=null){
   		colection_sdone(name,sockets["s"+name].colection);}
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
//colections
this.newcolection=function(name,alldone){
	this.newcolection_e(name);
	colects["c"+name].alldone=alldone;
};
this.newcolection_e=function(name){
	colects["c"+name]= new Object;
	colects["c"+name].total=0;
	colects["c"+name].done=0;
	colects["c"+name].socks=new Object;
	colects["c"+name].alldone=null;//funkcija ko darit kas visi pabeidz
};
this.addsocket=function(sname,cname){
	//TODO!! multiref atkartota izsaukshana
	sockets["s"+sname].colection=cname;
	colects["c"+cname].total++;
	//colects["c"+cname].socks["s"+sname]=sockets["s"+sname];//OO pieja
	colects["c"+cname].socks["s"+sname]=sname;//neOO pieeja
};
this.runall=function(name){//paliast visus sockets kolekcijaa
	for(var i in colects["c"+name].socks){
		this.runsocket(colects["c"+name].socks[i]);
	}
};
function colection_sdone(sname,cname){//state4 kada socketa
	colects["c"+cname].done++;
	//alert(cname+" "+sname);
	if(colects["c"+cname].done==colects["c"+cname].total){colects["c"+cname].alldone();}
}
}