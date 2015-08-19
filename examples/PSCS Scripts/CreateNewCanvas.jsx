#target Photoshop
app.bringToFront();
function main(){
var Ver =app.version.match(/\d+/);
if(Ver < 10) return;
var Prefs=new Object ();
Prefs.Canvas=[];
var PrefsFile = new File(Folder.userData +"/CreateNewCanvas.dat");
if(PrefsFile.exists){
PrefsFile.open('r');
Prefs=eval(PrefsFile.read());
PrefsFile.close();
    }
var win= new Window('dialog','Create Canvas');
win.orientation='stack';
win.pnl1 = win.add('panel', undefined,undefined, {borderStyle:"black"});
win.pnl1.preferredSize=[400,250];
win.pnl1.grp1 = win.pnl1.add('group');
win.pnl1.grp1.title = win.pnl1.grp1.add('statictext',undefined,'Create New Canvas');
win.pnl1.grp1.title.graphics.font = ScriptUI.newFont("Georgia", "Bold", 18);
win.pnl1.grp3 = win.pnl1.add('group');
win.pnl1.grp3.pnl1= win.pnl1.grp3.add('panel', undefined, undefined, {borderStyle:"black"});
win.pnl1.grp3.pnl1.preferredSize=[200,3];
win.pnl1.grp5 = win.pnl1.add('group');
win.pnl1.grp5.orientation='row';
win.pnl1.grp5.alignment='left';
win.pnl1.grp5.bu1 = win.pnl1.grp5.add('button',undefined,'Add New Canvas');
win.pnl1.grp5.bu1.onClick=function(){
   win.pnl1.visible=false; 
   win.pnl2.visible=true;
}
win.pnl1.grp10 = win.pnl1.add('group');
win.pnl1.grp10.orientation='row';
win.pnl1.grp10.alignment='left';
win.pnl1.canvas = win.pnl1.grp10.add('dropdownlist');
win.pnl1.canvas.preferredSize=[300,20];
for(var a in Prefs.Canvas){
    win.pnl1.canvas.add('item',Prefs.Canvas[a][0].toString());
    }
win.pnl1.canvas.selection=0;
win.pnl1.grp10.bu1 = win.pnl1.grp10.add('button',undefined,'Remove');
win.pnl1.grp10.bu1.onClick=function(){
    try{
    Prefs.Canvas.splice(win.pnl1.canvas.selection.index,1);
    win.pnl1.canvas.removeAll();
    for(var a in Prefs.Canvas){
    win.pnl1.canvas.add('item',Prefs.Canvas[a][0].toString());
    }
win.pnl1.canvas.selection=0;
PrefsFile.open('w');
PrefsFile.write(Prefs.toSource());
PrefsFile.close();
}catch(e){}
    }
win.pnl1.gp200 = win.pnl1.add('group');
win.pnl1.Create = win.pnl1.gp200.add('button',undefined,'Create');
win.pnl1.Create.preferredSize=[200,100];
win.pnl1.gp200.bu2 = win.pnl1.gp200.add('button',undefined,'Cancel');
win.pnl1.gp200.bu2.preferredSize=[200,100];
win.pnl1.Create.onClick=function(){
if(Prefs.Canvas.length<1) return;
win.close(1);
var strtRulerUnits = app.preferences.rulerUnits;   			 
var strtTypeUnits = app.preferences.typeUnits;   			 
app.preferences.rulerUnits = Units.PIXELS;   			 
app.preferences.typeUnits = TypeUnits.PIXELS;
var sel = win.pnl1.canvas.selection.index;
if(Number(Prefs.Canvas[sel][6]) == 0){
var ColourProfile="sRGB IEC61966-2.1";
}else{	
    var ColourProfile="Adobe RGB (1998)";
	}
if(Prefs.Canvas[sel][4] == "CMYK") ColourProfile = undefined;
try{
//////////// create document ///////////////////////
   var doc = app.documents.add(Math.round(Number(Prefs.Canvas[sel][1])), Math.round(Number(Prefs.Canvas[sel][2])),
   Number(Prefs.Canvas[sel][3]), "Untitled-"+(documents.length+1),
  eval("NewDocumentMode."+Prefs.Canvas[sel][4]),
   eval("DocumentFill."+Prefs.Canvas[sel][5]),1.0,
  BitsPerChannelType.EIGHT  ,ColourProfile);
Prefs.Canvas[sel][7] == "true" ? win.pnl3.grp10.gu1.value = true :  win.pnl3.grp10.gu1.value = false;
Prefs.Canvas[sel][8] == "true" ? win.pnl3.grp11.gu1.value = true :  win.pnl3.grp11.gu1.value = false;
Prefs.Canvas[sel][9] == "true" ? win.pnl3.grp12.gu1.value = true :  win.pnl3.grp12.gu1.value = false;
Prefs.Canvas[sel][10] == "true" ? win.pnl3.grp13.gu1.value = true :  win.pnl3.grp13.gu1.value = false;
Prefs.Canvas[sel][11] == "true" ? win.pnl3.grp14.cb1.value = true :  win.pnl3.grp14.cb1.value = false;
Prefs.GDrop0 = win.pnl3.grp10.dd1.selection = Number(Prefs.Canvas[sel][12]);
Prefs.GDrop1 = win.pnl3.grp11.dd1.selection = Number(Prefs.Canvas[sel][13]);
Prefs.GDrop2 = win.pnl3.grp12.dd1.selection = Number(Prefs.Canvas[sel][14]);
Prefs.GDrop3 = win.pnl3.grp13.dd1.selection = Number(Prefs.Canvas[sel][15]);
win.pnl3.grp10.et1.text = Number(Prefs.Canvas[sel][16]);
win.pnl3.grp11.et1.text = Number(Prefs.Canvas[sel][17]);
win.pnl3.grp12.et1.text = Number(Prefs.Canvas[sel][18]);
win.pnl3.grp13.et1.text = Number(Prefs.Canvas[sel][19]);
   }catch(e){alert(e + " - " + e.line);}
if(win.pnl3.grp14.cb1.value){
guideLine(50,'Hrzn','#Prc' );
guideLine(50,'Vrtc','#Prc' );
    }
var RES = Number(Prefs.Canvas[sel][3]);
var CM = RES/2.54;
var MM = RES/25.4;
var INCH = RES;
if(win.pnl3.grp10.gu1.value){
    switch(win.pnl3.grp10.dd1.selection.index){
        case 0 : createGuides(Number(Prefs.GEdit0) * CM);break;
        case 1 : createGuides(Number(Prefs.GEdit0) * INCH);break;
        case 2 : createGuides(Number(Prefs.GEdit0) * MM);break;
        case 3 : createGuides(Number(Prefs.GEdit0));break;
        case 4 : createGuides2(Number(Prefs.GEdit0));break;
        default : break;
        }
    }
if(win.pnl3.grp11.gu1.value){
        switch(win.pnl3.grp11.dd1.selection.index){
        case 0 : createGuides(Number(Prefs.GEdit1) * CM);break;
        case 1 : createGuides(Number(Prefs.GEdit1) * INCH);break;
        case 2 : createGuides(Number(Prefs.GEdit1) * MM);break;
        case 3 : createGuides(Number(Prefs.GEdit1));break;
        case 4 : createGuides2(Number(Prefs.GEdit1));break;
        default : break;
        }
    }
if(win.pnl3.grp12.gu1.value){
        switch(win.pnl3.grp12.dd1.selection.index){
        case 0 : createGuides(Number(Prefs.GEdit2) * CM);break;
        case 1 : createGuides(Number(Prefs.GEdit2) * INCH);break;
        case 2 : createGuides(Number(Prefs.GEdit2) * MM);break;
        case 3 : createGuides(Number(Prefs.GEdit2));break;
        case 4 : createGuides2(Number(Prefs.GEdit2));break;
        default : break;
        }
    }
if(win.pnl3.grp13.gu1.value){
        switch(win.pnl3.grp13.dd1.selection.index){
        case 0 : createGuides(Number(Prefs.GEdit3) * CM);break;
        case 1 : createGuides(Number(Prefs.GEdit3) * INCH);break;
        case 2 : createGuides(Number(Prefs.GEdit3) * MM);break;
        case 3 : createGuides(Number(Prefs.GEdit3));break;
        case 4 : createGuides2(Number(Prefs.GEdit3));break;
        default : break;
        }
    }
menuItem('FtOn'); 
app.preferences.rulerUnits = strtRulerUnits;  
app.preferences.typeUnits = strtTypeUnits;
app.purge(PurgeTarget.HISTORYCACHES);
}
win.pnl2 = win.add('panel', undefined, undefined, {borderStyle:"black"});
win.pnl2.preferredSize=[400,250];
win.pnl2.visible=false;
win.pnl2.grp5 = win.pnl2.add('group');
win.pnl2.grp5.st1 = win.pnl2.grp5.add('statictext',undefined,"Add New Canvas");
win.pnl2.grp5.st1.graphics.font = ScriptUI.newFont("Georgia", "Bold", 18);
win.pnl2.grp10 = win.pnl2.add('group');
win.pnl2.grp10.orientation='row';
win.pnl2.grp10.alignment='left';
win.pnl2.grp10.st1 = win.pnl2.grp10.add('statictext',undefined,'Description');
win.pnl2.desc = win.pnl2.grp10.add('edittext');
win.pnl2.desc.preferredSize=[250,20];
win.pnl2.grp15 = win.pnl2.add('group');
win.pnl2.grp15.orientation='row';
win.pnl2.grp15.alignment='left';
win.pnl2.grp15.st1 = win.pnl2.grp15.add('statictext',undefined,'Width');
win.pnl2.width = win.pnl2.grp15.add('edittext');
win.pnl2.width.preferredSize=[50,20];
win.pnl2.width.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
win.pnl2.grp15.st3 = win.pnl2.grp15.add('statictext',undefined,'Height');
var units =['CM','INCHES','MM','PIXELS','PERCENT'];
win.pnl2.height = win.pnl2.grp15.add('edittext');
win.pnl2.height.preferredSize=[50,20];
win.pnl2.height.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
win.pnl2.units = win.pnl2.grp15.add('dropdownlist',undefined,units);
win.pnl2.units.remove(4);
try{
win.pnl2.units.selection =Prefs.units;
}catch(e){win.pnl2.units.selection=0;};
win.pnl2.grp20 = win.pnl2.add('group');
win.pnl2.grp20.orientation='row';
win.pnl2.grp20.alignment='left';
win.pnl2.grp20.st1 = win.pnl2.grp20.add('statictext',undefined,'Resolution');
win.pnl2.res = win.pnl2.grp20.add('edittext',undefined,'300');
win.pnl2.res.preferredSize=[50,20];
win.pnl2.res.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
var Mode = ['RGB','CMYK'];
win.pnl2.mode = win.pnl2.grp20.add('dropdownlist',undefined,Mode);
try{
win.pnl2.mode.selection =Prefs.mode;
}catch(e){win.pnl2.mode.selection=0;};
var cClolour = ['White','Background','Transparent'];
win.pnl2.colour = win.pnl2.grp20.add('dropdownlist',undefined,cClolour);
try{
win.pnl2.colour.selection =Prefs.colour;
}catch(e){win.pnl2.colour.selection=0;};
win.pnl2.grp22 = win.pnl2.add('group');
var Profiles=["sRGB IEC61966-2.1","Adobe RGB (1998)"];
win.pnl2.profile = win.pnl2.grp22.add('dropdownlist',undefined,Profiles);
try{
win.pnl2.profile.selection =Prefs.profile;
}catch(e){win.pnl2.profile.selection=0;};
win.pnl2.grp22.bu3 = win.pnl2.grp22.add('button',undefined,'Set Guides');
win.pnl2.grp22.bu3.onClick=function(){
   win.pnl2.visible=false; 
   win.pnl3.visible=true;
}
win.pnl2.grp25 = win.pnl2.add('group');
win.pnl2.grp25.orientation='fill';
win.pnl2.grp25.alignment='fill';
win.pnl2.Add = win.pnl2.grp25.add('button',undefined,'Add Canvas');
win.pnl2.Add.preferredSize=[250,25];
win.pnl2.Add.onClick=function(){
    if(win.pnl2.desc.text == ''){
        alert("No description has been entered!");
        return;
        }
    if(win.pnl2.width.text == ''){
        alert("No width has been entered!");
        return;
        }
    if(win.pnl2.height.text == ''){
        alert("No height has been entered!");
        return;
        }
    if(win.pnl2.res.text == ''){
        alert("No resolution has been entered!");
        return;
        }
var RES = Number(win.pnl2.res.text);
var WIDTH = HEIGHT = 0;
Prefs.units=win.pnl2.units.selection.index;
switch(win.pnl2.units.selection.index){
    case 0 : WIDTH = (RES / 2.54) * Number(win.pnl2.width.text);
    HEIGHT = (RES / 2.54) * Number(win.pnl2.height.text); break; 
    case 1 : WIDTH = RES * Number(win.pnl2.width.text);
    HEIGHT = RES * Number(win.pnl2.height.text); break;
    case 2 : WIDTH = (RES / 25.4) * Number(win.pnl2.width.text);
    HEIGHT = (RES / 25.4) * Number(win.pnl2.height.text); break;
    case 3 : WIDTH = Number(win.pnl2.width.text);
    HEIGHT = Number(win.pnl2.height.text); break;
    default : break;
}
var MODE='';
Prefs.mode = win.pnl2.mode.selection.index;
switch(win.pnl2.mode.selection.index){
    case 0 : MODE = 'RGB'; break;
    case 1 : MODE = 'CMYK'; break;
    default : break;
}
var COLOUR ='';
Prefs.colour=win.pnl2.colour.selection.index;
switch(win.pnl2.colour.selection.index){
    case 0 : COLOUR ='WHITE'; break;
    case 1 : COLOUR ='BACKGROUNDCOLOR'; break;
    case 2 : COLOUR ='TRANSPARENT'; break;
    default : break;
}
var PROFILE = win.pnl2.profile.selection.index;
Prefs.profile = win.pnl2.profile.selection.index;
Prefs.Canvas.push([[win.pnl2.desc.text],[WIDTH],[HEIGHT],[RES],[MODE],[COLOUR],[PROFILE],
[win.pnl3.grp10.gu1.value],[win.pnl3.grp11.gu1.value],[win.pnl3.grp12.gu1.value],[win.pnl3.grp13.gu1.value],[win.pnl3.grp14.cb1.value],
[win.pnl3.grp10.dd1.selection.index],[win.pnl3.grp11.dd1.selection.index],[win.pnl3.grp12.dd1.selection.index],[win.pnl3.grp13.dd1.selection.index],
[Number(win.pnl3.grp10.et1.text)],[Number(win.pnl3.grp11.et1.text)],[Number(win.pnl3.grp12.et1.text)],[Number(win.pnl3.grp13.et1.text)]]);
win.pnl1.canvas.removeAll();
Prefs.Canvas.sort();
for(var a in Prefs.Canvas){
    win.pnl1.canvas.add('item',Prefs.Canvas[a][0].toString());
    }
win.pnl1.canvas.selection=0;
clearNewCanvas();
};
function clearNewCanvas(){
    win.pnl2.desc.text='';
    win.pnl2.width.text='';
    win.pnl2.height.text = '';
    }
win.pnl2.grp500 = win.pnl2.add('group');
win.pnl2.done = win.pnl2.grp500.add('button',undefined,'Done');
win.pnl2.done.preferredSize=[350,30];
win.pnl2.done.onClick=function(){
PrefsFile.open('w');
PrefsFile.write(Prefs.toSource());
PrefsFile.close();
   win.pnl2.visible=false; 
   win.pnl1.visible=true;
}
win.pnl3 = win.add('panel', undefined,undefined, {borderStyle:"black"});
win.pnl3.preferredSize=[400,250];
win.pnl3.visible=false;
win.pnl3.grp5 = win.pnl3.add('group');
win.pnl3.grp5.st1 = win.pnl3.grp5.add('statictext',undefined,"Set Guides");
win.pnl3.grp5.st1.graphics.font = ScriptUI.newFont("Georgia", "Bold", 18);
win.pnl3.grp10 = win.pnl3.add('group');
win.pnl3.grp10.orientation='row';
win.pnl3.grp10.alignment='left';
win.pnl3.grp10.gu1 = win.pnl3.grp10.add('checkbox',undefined,'Guides 1');
try{
win.pnl3.grp10.gu1.value = Prefs.Guide0;
}catch(e){}
win.pnl3.grp10.dd1 = win.pnl3.grp10.add('dropdownlist',undefined,units);
try{
 win.pnl3.grp10.dd1.selection = Number(Prefs.GDrop0);
 }catch(e){win.pnl3.grp10.dd1.selection =0;}
win.pnl3.grp10.et1 = win.pnl3.grp10.add('edittext');
win.pnl3.grp10.et1.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
if(Prefs.GEdit0 != undefined)  win.pnl3.grp10.et1.text = Prefs.GEdit0;
win.pnl3.grp10.et1.preferredSize=[50,20];
win.pnl3.grp10.gu1.onClick=function(){
    if(this.value){
        win.pnl3.grp10.dd1.enabled=true;
        win.pnl3.grp10.et1.enabled=true;
        }else{
            win.pnl3.grp10.dd1.enabled=false;
        win.pnl3.grp10.et1.enabled=false;
            }
   };
win.pnl3.grp10.gu1.onClick();
win.pnl3.grp11 = win.pnl3.add('group');
win.pnl3.grp11.orientation='row';
win.pnl3.grp11.alignment='left';
win.pnl3.grp11.gu1 = win.pnl3.grp11.add('checkbox',undefined,'Guides 2');
try{
win.pnl3.grp11.gu1.value = Prefs.Guide1;
}catch(e){}
win.pnl3.grp11.dd1 = win.pnl3.grp11.add('dropdownlist',undefined,units);
try{
 win.pnl3.grp11.dd1.selection = Number(Prefs.GDrop1);
 }catch(e){win.pnl3.grp11.dd1.selection =0;}
win.pnl3.grp11.et1 = win.pnl3.grp11.add('edittext');
if(Prefs.GEdit1 != undefined)  win.pnl3.grp11.et1.text = Prefs.GEdit1;
win.pnl3.grp11.et1.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
win.pnl3.grp11.et1.preferredSize=[50,20];
win.pnl3.grp11.gu1.onClick=function(){
    if(this.value){
        win.pnl3.grp11.dd1.enabled=true;
        win.pnl3.grp11.et1.enabled=true;
        }else{
            win.pnl3.grp11.dd1.enabled=false;
            win.pnl3.grp11.et1.enabled=false;
            }
   };
win.pnl3.grp11.gu1.onClick();
win.pnl3.grp12 = win.pnl3.add('group');
win.pnl3.grp12.orientation='row';
win.pnl3.grp12.alignment='left';
win.pnl3.grp12.gu1 = win.pnl3.grp12.add('checkbox',undefined,'Guides 3');
try{
win.pnl3.grp12.gu1.value = Prefs.Guide2;
}catch(e){}
win.pnl3.grp12.dd1 = win.pnl3.grp12.add('dropdownlist',undefined,units);
try{
 win.pnl3.grp12.dd1.selection = Number(Prefs.GDrop2);
 }catch(e){win.pnl3.grp12.dd1.selection =0;}
win.pnl3.grp12.et1 = win.pnl3.grp12.add('edittext');
if(Prefs.GEdit2 != undefined)  win.pnl3.grp12.et1.text = Prefs.GEdit2;
win.pnl3.grp12.et1.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
win.pnl3.grp12.et1.preferredSize=[50,20];
win.pnl3.grp12.gu1.onClick=function(){
    if(this.value){
        win.pnl3.grp12.dd1.enabled=true;
        win.pnl3.grp12.et1.enabled=true;
        }else{
            win.pnl3.grp12.dd1.enabled=false;
            win.pnl3.grp12.et1.enabled=false;
            }
   };
win.pnl3.grp12.gu1.onClick();
win.pnl3.grp13 = win.pnl3.add('group');
win.pnl3.grp13.orientation='row';
win.pnl3.grp13.alignment='left';
win.pnl3.grp13.gu1 = win.pnl3.grp13.add('checkbox',undefined,'Guides 4');
try{
win.pnl3.grp13.gu1.value = Prefs.Guide3;
}catch(e){}
win.pnl3.grp13.dd1 = win.pnl3.grp13.add('dropdownlist',undefined,units);
try{
 win.pnl3.grp13.dd1.selection = Number(Prefs.GDrop3);
 }catch(e){win.pnl3.grp13.dd1.selection =0;}
win.pnl3.grp13.et1 = win.pnl3.grp13.add('edittext');
if(Prefs.GEdit3 != undefined)  win.pnl3.grp13.et1.text = Prefs.GEdit3;
win.pnl3.grp13.et1.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
win.pnl3.grp13.et1.preferredSize=[50,20];
win.pnl3.grp13.gu1.onClick=function(){
    if(this.value){
        win.pnl3.grp13.dd1.enabled=true;
        win.pnl3.grp13.et1.enabled=true;
        }else{
            win.pnl3.grp13.dd1.enabled=false;
            win.pnl3.grp13.et1.enabled=false;
            }
   };
win.pnl3.grp13.gu1.onClick();
win.pnl3.grp14 = win.pnl3.add('group');
win.pnl3.grp14.orientation='row';
win.pnl3.grp14.alignment='left';
win.pnl3.grp14.cb1 = win.pnl3.grp14.add('checkbox',undefined,'50 Percent');
try{
win.pnl3.grp14.cb1.value = Prefs.Guide4;
}catch(e){}

win.pnl3.grp500 = win.pnl3.add('group');
win.pnl3.done = win.pnl3.grp500.add('button',undefined,'Done');
win.pnl3.done.preferredSize=[350,30];
win.pnl3.done.onClick=function(){
 try{
Prefs.Guide0 = win.pnl3.grp10.gu1.value;
Prefs.Guide1 = win.pnl3.grp11.gu1.value;
Prefs.Guide2 = win.pnl3.grp12.gu1.value;
Prefs.Guide3 = win.pnl3.grp13.gu1.value;
Prefs.Guide4 = win.pnl3.grp14.cb1.value;
Prefs.GDrop0 = win.pnl3.grp10.dd1.selection.index;
Prefs.GDrop1 = win.pnl3.grp11.dd1.selection.index;
Prefs.GDrop2 = win.pnl3.grp12.dd1.selection.index;
Prefs.GDrop3 = win.pnl3.grp13.dd1.selection.index;
Prefs.GEdit0 = Number(win.pnl3.grp10.et1.text);
Prefs.GEdit1 = Number(win.pnl3.grp11.et1.text);
Prefs.GEdit2 = Number(win.pnl3.grp12.et1.text);
Prefs.GEdit3 = Number(win.pnl3.grp13.et1.text);
}catch(e){alert(e + " - " + e.line); win.close(2);}
PrefsFile.open('w');
PrefsFile.write(Prefs.toSource());
PrefsFile.close();
   win.pnl3.visible=false; 
   win.pnl2.visible=true;
}
win.center();
win.show();
}
function createGuides(pixels){
var doc = activeDocument;
var rightguide =doc.width - pixels; 
var bottomguide =doc.height - pixels; 
var leftguide = pixels; 
var topguide = pixels; 
guideLine(topguide,"Hrzn",'#Pxl'); 
guideLine(bottomguide,"Hrzn",'#Pxl'); 
guideLine(rightguide,"Vrtc",'#Pxl'); 
guideLine(leftguide,"Vrtc",'#Pxl');
};
function createGuides2(percent){
var doc = activeDocument;
var rightguide =100 - percent; 
var bottomguide =100 - percent; 
var leftguide = percent; 
var topguide = percent; 
guideLine(topguide,"Hrzn",'#Prc' ); 
guideLine(bottomguide,"Hrzn",'#Prc' ); 
guideLine(rightguide,"Vrtc",'#Prc' ); 
guideLine(leftguide,"Vrtc",'#Prc' );
};
function menuItem(item) {
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putEnumerated( charIDToTypeID('Mn  '), charIDToTypeID('MnIt'), charIDToTypeID(item) );
    desc.putReference( charIDToTypeID('null'), ref );
    executeAction( charIDToTypeID('slct'), desc, DialogModes.NO );
};
function guideLine(position, type,unit) { 
    var desc = new ActionDescriptor();
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble( charIDToTypeID('Pstn'), charIDToTypeID(unit), position);
        desc2.putEnumerated( charIDToTypeID('Ornt'), charIDToTypeID('Ornt'), charIDToTypeID(type) );
    desc.putObject( charIDToTypeID('Nw  '), charIDToTypeID('Gd  '), desc2 );
    executeAction( charIDToTypeID('Mk  '), desc, DialogModes.NO );
}; 
main();