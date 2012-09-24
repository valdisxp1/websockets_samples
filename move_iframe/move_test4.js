var xMV=new MOVE();
var timer,timer2;
var movedir="php/";
var all;
function loop1(){xMV.loop();alertDate();}
function loop(){timer=setTimeout("timeloop();",250);}
function timeloop(){xMV.loop();alertDate();timer=setTimeout("timeloop();",250);}
function alertDate(){document.all.time.innerHTML=xMV.getDate()+" "+new Date(xMV.getDate());}
/*function newItem(){
	all=document.all;
	name=all.n_name.value;
	document.all.here.innerHTML+="<div id="+"\"div_"+name+"\"></div>";
	tmp=new Object;
	tmp.name=name;
	tmp.x=all.n_x.value*1;
	tmp.y=all.n_y.value*1;
	tmp.z=all.n_z.value*1;
	tmp.dx=all.n_dx.value*1;
	tmp.dy=all.n_dy.value*1;
	tmp.dz=all.n_dz.value*1;
	tmp.v=all.n_v.value*1;
	tmp.vstartdate=all.n_vstartdate.value*1;
	xMV.newItem(name,tmp);
}*/ //not needed anymore
function init(){
	all=document.all;
	gx=new GRAFIX();
	gx.init("IFRAME",document.all.ir);
	//grafix end
xMV.setChangeEvent(function(oname,obj){
	where=document.all["div_"+oname];
	if(!where){
		document.all.here.innerHTML+="<div id="+"\"div_"+oname+"\"></div>";
		where=document.all["div_"+oname];}
	where.innerHTML="";
	where.innerHTML+="<b>"+obj.name+"</b><br>";
	where.innerHTML+="x= "+obj.start.x+" y= "+obj.start.y+" z= "+obj.start.z+" ";
	where.innerHTML+="dx= "+obj.norm.x+" dy= "+obj.norm.y+" dz= "+obj.norm.z+"<br>";
	where.innerHTML+="now_x= "+obj.now.x+"<br> now_y= "+obj.now.y+"<br> now_z= "+obj.now.z+"<br>";
	where.innerHTML+="v= "+obj.v;
	gx.Change(obj.name,obj);
	});
xMV.setNewItemEvent(function(oname,obj){
	document.all.here.innerHTML+="<div id="+"\"div_"+oname+"\"></div>";
	where=document.all["div_"+oname];
	where.innerHTML="";
	where.innerHTML+="<b>"+obj.name+"</b><br>";
	where.innerHTML+="x= "+obj.start.x+" y= "+obj.start.y+" z= "+obj.start.z+" ";
	where.innerHTML+="dx= "+obj.norm.x+" dy= "+obj.norm.y+" dz= "+obj.norm.z+"<br>";
	where.innerHTML+="now_x= "+obj.now.x+"<br> now_y= "+obj.now.y+"<br> now_z= "+obj.now.z+"<br>";
	where.innerHTML+="v= "+obj.v;
	gx.newItem(obj.name,obj);
	});
	all.datesync.contentDocument.location = movedir+"timesync.php";
	loop();
}
function listenLoop(){
	var url = /*movedir+*/"status.php?t="+xMV.getDate();
	console.log(url);
	all.recieve.contentDocument.location=url;
}

function _sync(seconds){
	xMV.setDate(seconds);
	listenStart();
}

function listenStart(){
	all.recieve.contentDocument.location="status.php";
}

function _recieve(text){
	console.log("status msg: "+text);
	xMV.makeAll(eval(text));
}
function send(){
	tmp=new Object;
	name=all.n_name.value;
	tmp.name=name;
	tmp.x=all.n_x.value;
	tmp.y=all.n_y.value;
	tmp.z=all.n_z.value;
	tmp.dx=all.n_dx.value;
	tmp.dy=all.n_dy.value;
	tmp.dz=all.n_dz.value;
	tmp.v=all.n_v.value;
	var url=movedir+"cdir_xyz.php?name="+tmp.name;
	url+="&x="+tmp.x+"&y="+tmp.y+"&z="+tmp.z;
	url+="&dx="+tmp.dx+"&dy="+tmp.dy+"&dz="+tmp.dz;
	url+="&v="+tmp.v;
	all.send.document.location=url;
}
function chdir(name,dx,dy,dz){
	var tprev=xMV.getCords(name);
	tmp=new Object;
	tmp.name=name;
	tmp.x=tprev.now.x;
	tmp.y=tprev.now.y;
	tmp.z=tprev.now.z;
	tmp.dx=dx;
	tmp.dy=dy;
	tmp.dz=dz;
	tmp.v=tprev.v;
	var url=movedir+"cdir_xyz.php?name="+tmp.name;
	url+="&x="+tmp.x+"&y="+tmp.y+"&z="+tmp.z;
	url+="&dx="+tmp.dx+"&dy="+tmp.dy+"&dz="+tmp.dz;
	url+="&v="+tmp.v;
	all.send.contentDocument.location=url;
}
function chspeed(name,v){
	var tprev=xMV.getCords(name);
	tmp=new Object;
	tmp.name=name;
	tmp.x=tprev.now.x;
	tmp.y=tprev.now.y;
	tmp.z=tprev.now.z;
	tmp.dx=tprev.norm.x;
	tmp.dy=tprev.norm.y;
	tmp.dz=tprev.norm.z;
	tmp.v=v;
	var url=movedir+"cdir_xyz.php?name="+tmp.name;
	url+="&x="+tmp.x+"&y="+tmp.y+"&z="+tmp.z;
	url+="&dx="+tmp.dx+"&dy="+tmp.dy+"&dz="+tmp.dz;
	url+="&v="+tmp.v;
	all.send.contentDocument.location=url;
}