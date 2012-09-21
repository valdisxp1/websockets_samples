var vdate=null;
var vdiff=null;
var Mobj=new Object;
function moving_obj(){
 this.name="";
 this.start=new cords();
 this.vstartdate=0;
 this.norm=new cords();
 this.normLen=0;
 this.now=new cords();
 this.v=0;
 this.onChange=null;
}
function cords(){this.x=0;this.y=0;this.z=0;}
function calcpos(obj,_vdate){//TODO sadursmes
	k=(_vdate-obj.vstartdate)*obj.v/obj.normLen/1000;//ms->s
	//koificents
	obj.now.x=obj.start.x+k*obj.norm.x;
	obj.now.y=obj.start.y+k*obj.norm.y;
	obj.now.z=obj.start.z+k*obj.v*obj.norm.z;
}
this.loop=function(){
	for(var i in Mobj){
	vdate=(new Date()).valueOf()+vdiff;
		if(Mobj[i].v!=0){
		calcpos(Mobj[i],vdate);
		onAnyChange(i,Mobj[i]);}
	}
};
var onAnyChange=function(oname,obj){};
var onNewItem=function(oname,obj){};
this.makeAll=function(arr){
	for(var i=0;i<arr.length;i++){
		item=arr[i];name=item.name;
		this.newItem(name,item);
	}
};
this.remakeAll=function(arr){
	for(var i=0;i<arr.length;i++){
		item=arr[i];name=item.name;
		this.changeItem(name,item);
	}
};
this.newItem=function(name,obj){
	if(Mobj[name]==null){
	Mobj[name]=new moving_obj();
	this.changeItem(name,obj);
	onNewItem(name,Mobj[name]);
	}else{this.changeItem(name,obj);
	onAnyChange(name,Mobj[name]);}
};
this.changeItem=function(name,obj){
	    Mobj[name].name=obj.name;
		Mobj[name].start.x=obj.x*1;
		Mobj[name].start.y=obj.y*1;
		Mobj[name].start.z=obj.z*1;
		if(obj.v==0){//statiski objekti
		Mobj[name].now.x=obj.x*1;
		Mobj[name].now.y=obj.y*1;
		Mobj[name].now.z=obj.z*1;}
		Mobj[name].norm.x=obj.dx*1;
		Mobj[name].norm.y=obj.dy*1;
		Mobj[name].norm.z=obj.dz*1;
		Mobj[name].normLen=Math.sqrt(obj.dx*obj.dx+obj.dy*obj.dy+obj.dz*obj.dz);
		Mobj[name].v=obj.v*1;
		Mobj[name].vstartdate=obj.vstartdate*1;
};
this.getCords=function(name){return Mobj[name];};
this.setDate=function(d){if(vdate==null){vdate=d; vdiff=vdate-(new Date()).valueOf();}};
this.getDate=function(){return ((new Date()).valueOf()+vdiff);};
this.setChangeEvent=function(func){onAnyChange=func;};
this.setNewItemEvent=function(func){onNewItem=func;};
this.getAnything=function(ko){return eval(ko);};//aizkomenteet
this.getObject=function(name){return Mobj[name];};