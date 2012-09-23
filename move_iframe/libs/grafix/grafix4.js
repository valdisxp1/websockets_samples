var Robj=new Object;
var Komp=new Object;
var gflags=new Object;//1=true,0=false,2=whatever
function komponets(){
	this.name="";
	this.rofset=new rcords();//relativi
	this.rofset.x=0.0;this.rofset.y=0.0;this.rofset.z=0.0;
	this.rsize=new rcords();
	this.comp=new Object;//komponenti
	this.type="comp";//div/img/comp
	this.style=new Object;
	//style ref here
	/* bgcolor
	 * 
	 * 
	 * */
}
function render_obj(){
	this.name="";
	this.pos=new cords();
	this.size=new cords();
	this.ofset=new cords();
	this.lookalike="default";
} 
function cords(){this.x=0;this.y=0;this.z=0;}
function rcords(){this.x=1.0;this.y=1.0;this.z=1.0;}
//var area;
this.init=function(mode,a){
	//default case
	tmp=new Object;
	this.makeKomp("default",tmp);
	//default case ends
	if(mode=="IFRAME"){
		gflags.center=0;
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
	kname=Robj[oname].lookalike;
	Robj[oname].pos.x=tx;
	Robj[oname].pos.x=ty;
	Robj[oname].pos.x=tz;
	scale(tx,ty,tz);
	tx+=Komp[kname].rofset.x*Robj[oname].size.x;
	ty+=Komp[kname].rofset.y*Robj[oname].size.y;
	tz+=Komp[kname].rofset.z*Robj[oname].size.z;
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
	
	if((flags.center==1)||(gflags.center==1)){//ja true
	Robj[oname].ofset.x=-Robj[oname].size.x/2; //punkts centraa
	Robj[oname].ofset.y=-Robj[oname].size.y/2;
	Robj[oname].ofset.z=-Robj[oname].size.z/2;}
	if(obj.look!=null){Robj[oname].lookalike=obj.look;}
	kname=Robj[oname].lookalike;
	if(Komp[kname].type=="div"){
		area.here.innerHTML+="<div id=\"div_"+oname+"\"></div>";}
		console.log(">> "+"div_"+oname);
	area["div_"+oname].style.position="absolute";
	area["div_"+oname].style.width=Robj[oname].size.x*Komp[kname].rsize.x;
	area["div_"+oname].style.height=Robj[oname].size.y*Komp[kname].rsize.y;
	}
	Change_IFRAME(oname,obj);
}
function rLoop_IFRAME(){
	
}
this.makeKomp=function(kname,obj){
	if(Komp[kname]==null){
	 Komp[kname]=new komponets();
	 Komp[kname].name=kname;
	 }
	 Komp[kname].type=obj.type;
	 if(obj.rsize==null){
		 Komp[kname].rsize.x=obj.rsizex;
		 Komp[kname].rsize.y=obj.rsizey;
		 Komp[kname].rsize.z=obj.rsizez;
	 }else{
		Komp[kname].rsize.x=obj.rsize.x;
	 	Komp[kname].rsize.y=obj.rsize.y;
	 	Komp[kname].rsize.z=obj.rsize.z;	 
	 }
	 if(obj.rofset==null){
		 Komp[kname].rofset.x=obj.rofsetx;
		 Komp[kname].rofset.y=obj.rofsety;
		 Komp[kname].rofset.z=obj.rofsetz;
	 }else{
		 Komp[kname].rofset.x=obj.rofset.x;
		 Komp[kname].rofset.y=obj.rofset.y;
		 Komp[kname].rofset.z=obj.rofset.z;	 
	 }
	 if(obj.style!=null){
		 Komp[kname].style=obj.style;
	 }
	 
};
this.makeAllKomp=function(arr){
	for(var i=0;i<arr.length;i++){
		item=arr[i];name=item.name;
		this.makeKomp(name,item);
	}
};
this.getAnything=function(ko){return eval(ko);};//aizkomenteet
