var xMV=new MOVE();
var sock;
var timer,timer2;
var movedir="php/";
var all=document.all;
function loop1(){xMV.loop();alertDate();}
function loop(){timer=setTimeout("timeloop();",250);}
function timeloop(){xMV.loop();alertDate();timer=setTimeout("timeloop();",250);}
function alertDate(){document.all.time.innerHTML=xMV.getDate()+" "+new Date(xMV.getDate());}
function init(){
	
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
	//TODO sync time like in the other examples
	xMV.setDate(new Date().getTime());
	loop();
}

function listen(author,text,date){
		console.log("status msg: "+text);
		var obj = parse(text);
		obj.vstartdate = date;
		xMV.makeAll([obj]);
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
	sock.push(jQuery.stringifyJSON({ author: "aaa", message: format(tmp) }));
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
	sock.push(jQuery.stringifyJSON({ author: "aaa", message: format(tmp) }));
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
	sock.push(jQuery.stringifyJSON({ author: "aaa", message: format(tmp) }));
}

function parse(str){
	var arr = str.split("@");
	var tmp = new Object;
	var i = 0;
	tmp.name=arr[i++];
	tmp.x=arr[i++];
	tmp.y=arr[i++];
	tmp.z=arr[i++];
	tmp.dx=arr[i++];
	tmp.dy=arr[i++];
	tmp.dz=arr[i++];
	tmp.v=arr[i++];
	return tmp;
}

function format(obj){
	var str=name+"@";
	str+=obj.x+"@"+obj.y+"@"+obj.z+"@";
	str+=obj.dx+"@"+obj.dy+"@"+obj.dz+"@";
	str+=obj.v;
	return str;
}

function passSocket(socket){
 sock = socket;
}