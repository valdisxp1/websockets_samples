var xMV=new MOVE();
var socks=new MAJAX();
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
	socks.newsocket_sget("time",movedir+"timesync.php",function(){
		console.log("sync "+this.X.responseText);
		xMV.setDate(this.X.responseText*1);
	});
	socks.newsocket_sget("all",movedir+"status.php",function(){
		console.log("status msg: "+this.X.responseText);
		xMV.makeAll(eval(this.X.responseText));
	});
	socks.newcolection("sakums",function(){
		socks.newsocket_sget("sync",movedir+"status.php?t="+xMV.getDate(),function(){
			if((this.X.responseText+"")!="TIMEOUT"){xMV.makeAll(eval(this.X.responseText));}
			listenLoop();
	});
			listenLoop();
	});
	socks.addsocket("time","sakums");socks.addsocket("all","sakums");
	socks.runall("sakums");
	loop();
}
function listenLoop(){
	socks.runsocket("sync");
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
	url=movedir+"cdir_xyz.php?name="+tmp.name;
	url+="&x="+tmp.x+"&y="+tmp.y+"&z="+tmp.z;
	url+="&dx="+tmp.dx+"&dy="+tmp.dy+"&dz="+tmp.dz;
	url+="&v="+tmp.v;
	socks.newsocket_sget("send",url,function(){});
	socks.runsocket("send");
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
	url=movedir+"cdir_xyz.php?name="+tmp.name;
	url+="&x="+tmp.x+"&y="+tmp.y+"&z="+tmp.z;
	url+="&dx="+tmp.dx+"&dy="+tmp.dy+"&dz="+tmp.dz;
	url+="&v="+tmp.v;
	socks.newsocket_sget("send",url,function(){});
	socks.runsocket("send");
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
	url=movedir+"cdir_xyz.php?name="+tmp.name;
	url+="&x="+tmp.x+"&y="+tmp.y+"&z="+tmp.z;
	url+="&dx="+tmp.dx+"&dy="+tmp.dy+"&dz="+tmp.dz;
	url+="&v="+tmp.v;
	socks.newsocket_sget("send",url,function(){});
	socks.runsocket("send");
}