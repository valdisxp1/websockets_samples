var Robj=new Object;
var Komp=new Object;
var gflags=new Object;//1=true,0=false,2=whatever
function render_obj(){
	this.name="";
	this.pos=new cords();
	this.ofset=new cords();
	this.size=new cords();
	this.comp=new Object;//komponenti
	this.type="comp";//div/img/comp
	this.style=new Object;
	//style ref here
	/* bgcolor
	 * 
	 * 
	 * */
} 
function cords(){this.x=0;this.y=0;this.z=0;}
var area;
this.init=function(mode,a){
	if(mode=="IFRAME"){
		gflags.center=1;
		changeFunc=Change_IFRAME;
		newIFunc=newI_IFRAME;
		rLoopFunc=rLoop_IFRAME;
		area=a.contentDocument.all;
		a.contentDocument.write("<p id=\"here\"></p>");
	}else{}
};
var changeFunc=null;
this.Change=function(oname,obj){if(changeFunc!=null){changeFunc(oname,obj);}};
var newIFunc=null;
this.newItem=function(oname,obj){if(newIFunc!=null){newIFunc(oname,obj);}};
var rLoopFunc=null;
this.renderLoop=function(){if(rLoopFunc!=null){rLoopFunc();}};

function scale(x,y,z){}//TODO zoomscale here

function Change_IFRAME(oname,obj){
	var tx=obj.now.x*1,ty=obj.now.y*1,tz=obj.now.z*1;
	tx+=Robj[oname].ofset.x;
	ty+=Robj[oname].ofset.y;
	tz+=Robj[oname].ofset.z;
	Robj[oname].pos.x=tx;
	Robj[oname].pos.x=ty;
	Robj[oname].pos.x=tz;
	scale(tx,ty,tz);
	var type=Robj[oname].type;
	if(type=="div"){
		area["div_"+oname].style.left=tx+"px";
		area["div_"+oname].style.top=ty+"px";//z=ignored
		}
}
/*function newI_IFRAME(oname,obj){
	tflags=new Object;
	tflags.center=true;
	newI_IFRAME(oname,obj,tflags);
}*/
function newI_IFRAME(oname,obj,flags){
	if(flags==null){flags=new Object;}
	if(Robj[oname]==null){
	Robj[oname]=new render_obj();
	Robj[oname].name=oname;
	//test case start
	Robj[oname].size.x=100;
	Robj[oname].size.y=100;
	Robj[oname].size.z=100;
	Robj[oname].type="div";
	//test case end
	if(flags.center||gflags.center==1){//ja true
	Robj[oname].ofset.x=-Robj[oname].size.x/2; //punkts centraa
	Robj[oname].ofset.y=-Robj[oname].size.y/2;
	Robj[oname].ofset.z=-Robj[oname].size.z/2;}
	if(Robj[oname].type=="div"){
		area.here.innerHTML+="<div id=\"div_"+oname+"\"></div>";}
	area["div_"+oname].style.position="absolute";
	area["div_"+oname].style.width=Robj[oname].size.x;
	area["div_"+oname].style.height=Robj[oname].size.y;
	area["div_"+oname].style['background-color']="#b0c4de";}
	Change_IFRAME(oname,obj);
}
function rLoop_IFRAME(){
	
}
this.makeKomp=function(kname,obj){
	 Komp[name].name=obj.name;
	 Komp[name].type=obj.type;
	 
};
this.makeAllKomp=function(arr){
	for(var i=0;i<arr.length;i++){
		item=arr[i];name=item.name;
		this.makeKomp(name,item);
	}
};
this.getAnything=function(ko){return eval(ko);};//aizkomenteet
