//Manual Batch
#target photoshop
app.bringToFront();
if (app.version.match(/\d+/) <10){
    alert("Sorry but this script needs CS3 or better");
    }else{
main();
}
function main(){
var Prefs ={};
Prefs.fileList=[];
Prefs.iFolder='';
Prefs.oFolder='';
try{
  var desc1 = app.getCustomOptions('7452a7a0-8edf-11e0-91e4-0800200c9a66');
  alert("Outstanding documents exist!\rUse MB Next, MB Previous \rMB SkipToPrevious, MB SkipToNext\ror MB Reset");
  return;
}catch(e){setup()}
function setup(){
app.displayDialogs = DialogModes.NO;
var FileExtensions = "DNG,PSD,PDD,JPEG,JPG,JPE,GIF,BMP,RLE,DIB,TIF,CRW,NEF,RAF,ORF,CIN,DPX,EPS,PS,FLM,PSB,EXR,PCX,PDP," +
"PCD,RAW,PICT,PCT,PIC,PXR,PNG,TGA,VDA,ICB,VST,TIF,TIFF,WBM,DNG,SCT,PBM,CRW,CR2,DC2,DCR,NEF,MOS,MRW,X3F";
FileExtensions= FileExtensions.toUpperCase();
FileExtensions = FileExtensions.split(",");
FileExtensions= ReturnUniqueSortedList(FileExtensions);
var win = new Window( 'dialog', 'MB' ); 
g = win.graphics;
var myBrush = g.newBrush(g.BrushType.SOLID_COLOR, [0.99, 0.99, 0.99, 1]);
g.backgroundColor = myBrush;
win.p1= win.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.p1.preferredSize=[500,30];
win.g1 = win.p1.add('group');
win.g1.orientation = "row";
win.title = win.g1.add('statictext',undefined,'Manual Batch');
win.title.helpTip="Compliments of Paul MR";
win.title.alignment="fill";
var g = win.title.graphics;
g.font = ScriptUI.newFont("Georgia","BOLDITALIC",22);
win.g5 =win.p1.add('group');
win.g5.orientation = "row";
win.g5.alignment='fill';
win.g5.spacing=10;
win.g5.rb1 = win.g5.add('radiobutton',undefined,'Use Folder of Files');
win.g5.rb2 = win.g5.add('radiobutton',undefined,'Use Selected Bridge Files');
win.g5.rb3 = win.g5.add('radiobutton',undefined,'Use Files of Type');
win.g5.rb1.value=true;
win.g10 =win.p1.add('group');
win.g10.orientation = "row";
win.g10.alignment='fill';
win.g10.spacing=10;
win.g10.st1 = win.g10.add('statictext',undefined,'Files of Type');
win.g10.dd1 = win.g10.add('dropdownlist',undefined,FileExtensions);
win.g10.dd1.selection=16;
win.g15 =win.p1.add('group');
win.g15.orientation = "row";
win.g15.alignment='fill';
win.g15.spacing=10;
win.g15.st1 = win.g15.add('statictext',undefined,'Folder to Process');
win.g20 =win.p1.add('group');
win.g20.orientation = "row";
win.g20.alignment='fill';
win.g20.spacing=10;
win.g20.et1 = win.g20.add('edittext');
win.g20.et1.preferredSize=[350,20];
win.g20.et1.enabled=false;
win.g20.bu1 = win.g20.add('button',undefined,'Select Folder');
win.g20.bu1.onClick = function() {
 Prefs.iFolder = Folder.selectDialog("Please select folder with Files to process");	
	if(Prefs.iFolder !=null){
		win.g20.et1.text =  decodeURI(Prefs.iFolder.fsName);
	}
}
win.g10.dd1.enabled=false;
win.g5.rb2.onClick=function(){
    Prefs.fileList=[];
    if(win.g5.rb2.value){
        win.g20.bu1.enabled=false;
        win.g10.dd1.enabled=false;
        }else{
            win.g20.bu1.enabled=true;
            }
}
win.g5.rb1.onClick=function(){
    Prefs.fileList=[];
    if(win.g5.rb1.value) {
        win.g20.bu1.enabled=true;
         win.g10.dd1.enabled=false;
         }
}
win.g5.rb3.onClick=function(){
    Prefs.fileList=[];
    if(win.g5.rb3.value) {
        win.g20.bu1.enabled=true;
        win.g10.dd1.enabled=true;
        }
}
win.g25 =win.p1.add('group');
win.g25.orientation = "row";
win.g25.alignment='fill';
win.g25.spacing=10;
win.g25.st1 = win.g25.add('statictext',undefined,'Output Folder');
win.g30 =win.p1.add('group');
win.g30.orientation = "row";
win.g30.alignment='fill';
win.g30.spacing=10;
win.g30.et1 = win.g30.add('edittext');
win.g30.et1.preferredSize=[350,20];
win.g30.et1.enabled=false;
win.g30.bu1 = win.g30.add('button',undefined,'Select Folder');
win.g30.bu1.onClick = function() { 
 Prefs.oFolder = Folder.selectDialog("Please select Output folder");	
	if(Prefs.oFolder !=null){
		win.g30.et1.text =  decodeURI(Prefs.oFolder.fsName);
	}
}


win.p2= win.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.p2.preferredSize=[500,30];
win.g35 =win.p2.add('group');
win.g35.orientation = "row";
win.g35.alignment='fill';
win.g35.spacing=10;
win.g35.cb1 = win.g35.add('checkbox',undefined,'Zoom Document to Percentage');
win.g35.et1 = win.g35.add('edittext',undefined,'33');
win.g35.et1.preferredSize=[50,20];
win.g35.et1.onChanging = function() { 
  if (this.text.match(/[^\-\.\d]/)) { 
    this.text = this.text.replace(/[^\-\.\d]/g, ''); 
  } 
};
win.g35.et1.enabled=false;
win.g35.cb1.onClick=function(){
    if(win.g35.cb1.value){
        win.g35.et1.enabled=true;
        }else{
            win.g35.et1.enabled=false;
            }
}
win.g50 =win.p2.add('group');
win.g50.spacing=50;
win.g50.orientation = 'row';
win.g50.alignment="left";
win.g50.cb1=win.g50.add('checkbox',undefined,'Run Action on Open');
win.g51 =win.p2.add('group');
win.g51.dd1 = win.g51.add('dropdownlist');
win.g51.dd2 = win.g51.add('dropdownlist');
win.g51.dd1.enabled=false;
win.g51.dd2.enabled=false;
win.g51.dd1.preferredSize=[200,20];
win.g51.dd2.preferredSize=[200,20];
win.g50.cb1.onClick=function(){
    if(win.g50.cb1.value){
        win.g51.dd1.enabled=true;
        win.g51.dd2.enabled=true;
        }else{
            win.g51.dd1.enabled=false;
            win.g51.dd2.enabled=false;
            }
}
win.g55 =win.p2.add('group');
win.g55.spacing=50;
win.g55.orientation = 'row';
win.g55.alignment="left";
win.g55.cb1=win.g55.add('checkbox',undefined,'Run Action Before Close');
win.g56 =win.p2.add('group');
win.g56.dd1 = win.g56.add('dropdownlist');
win.g56.dd2 = win.g56.add('dropdownlist');
win.g56.dd1.enabled=false;
win.g56.dd2.enabled=false;
win.g56.dd1.preferredSize=[200,20];
win.g56.dd2.preferredSize=[200,20];
win.g55.cb1.onClick=function(){
    if(win.g55.cb1.value){
        win.g56.dd1.enabled=true;
        win.g56.dd2.enabled=true;
        }else{
            win.g56.dd1.enabled=false;
            win.g56.dd2.enabled=false;
            }
}
var actionSets = new Array();
actionSets = getActionSets();
for (var i=0,len=actionSets.length;i<len;i++) {
	win.g51.dd1.add ('item',  "" + actionSets[i]);    
    win.g56.dd1.add ('item',  "" + actionSets[i]);  
}; 
win.g51.dd1.selection=0;  
win.g56.dd1.selection=0; 
var actions = new Array();	
actions = getActions(actionSets[0]);
for (var i=0,len=actions.length;i<len;i++) {
	win.g51.dd2.add ('item', "" + actions[i]);  
    win.g56.dd2.add ('item',  "" + actions[i]); 
};
win.g51.dd2.selection=0;  
win.g56.dd2.selection=0;

win.g51.dd1.onChange = function() {
win.g51.dd2.removeAll();
actions = getActions(actionSets[parseInt(this.selection)]);
for (var i=0,len=actions.length;i<len;i++) {
	win.g51.dd2.add ('item', "" + actions[i]); 
	}
	win.g51.dd2.selection=0; 
};
win.g56.dd1.onChange = function() {
win.g56.dd2.removeAll();
actions = getActions(actionSets[parseInt(this.selection)]);
for (var i=0,len=actions.length;i<len;i++) {
	win.g56.dd2.add ('item', "" + actions[i]); 
	}
	win.g56.dd2.selection=0; 
};

win.p3= win.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.p3.preferredSize=[500,30];
win.g100 =win.p3.add('group');
win.g100.st1 = win.g100.add('statictext',undefined,'Save As File Type(s)');
win.g100.st1.graphics.font = ScriptUI.newFont("Georgia","BOLDITALIC",22);

win.g105 =win.p3.add('group');
win.g105.orientation = "row";
win.g105.alignment='fill';
win.g105.spacing=10;
win.g105.cb1 = win.g105.add('checkbox',undefined,'JPEG - Quality');
win.g105.dd1 = win.g105.add('dropdownlist');
for(var a =1;a<13;a++){
    win.g105.dd1.add('item',a);
}
win.g105.dd1.selection=11;
win.g105.cb2 = win.g105.add('checkbox',undefined,'TIF - Comp.');
var tiffOptions=["LZW","ZIP","JPG","None"];
win.g105.dd2 = win.g105.add('dropdownlist',undefined,tiffOptions);
win.g105.dd2.selection=0;
win.g105.cb3 = win.g105.add('checkbox',undefined,'PSD');
win.g105.cb4 = win.g105.add('checkbox',undefined,'PNG24');

win.p4= win.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.p4.preferredSize=[500,30];
win.g200 =win.p4.add('group');
win.g200.bu1 = win.g200.add('button',undefined,'Process');
win.g200.bu1.preferredSize=[200,35];
win.g200.bu2 = win.g200.add('button',undefined,'Cancel');
win.g200.bu2.preferredSize=[200,35];
win.g200.bu1.onClick=function(){
try{
if(win.g5.rb2.value){
 if (!BridgeTalk.isRunning("Bridge")) {
alert("Bridge is not running!");
return;
    }else{
   Prefs.fileList = GetFilesFromBridge();
   if(Prefs.fileList.length <1){
       alert("No Bridge Files have Been Selected!");
       return;
    }
try{
if(!Prefs.oFolder.exists){
    alert("You need to select an output folder!");
    return;
    }
}catch(e){
    alert("You need to select an output folder!");
    return;
    }
}
}
if(win.g5.rb1.value){
    if(!Prefs.iFolder.exists){
    alert("You need to select a folder to process!");
    return;
    }
    Prefs.fileList = Prefs.iFolder.getFiles(/\.(jpg|jpe|jpeg|gif|eps|dng|bmp|tif|tiff|psd|crw|cr2|rle|dib|cin|dpx|ps|pcd|pict|vda|icb|vst|wbm|sct|pbm|flm|psb|exr|pcx|pdp|nef|dcr|dc2|erf|raf|orf|tga|mrw|mos|srf|pic|pct|pxr|pdd|pef|png|x3f|raw)$/i);
if(Prefs.fileList.length <1){
       alert("No files exist in this folder!");
       return;
    }
if(!Prefs.oFolder.exists){
    alert("You need to select an output folder!");
    return;
    }
}
if(win.g5.rb3.value){
    if(!Prefs.iFolder.exists){
    alert("You need to select a folder to process!");
    return;
    }
var fileType = "\\."+win.g10.dd1.selection.text.toLowerCase()+"$";
var fileMask = new RegExp(fileType, "i");
Prefs.fileList= Prefs.iFolder.getFiles(fileMask);
if(Prefs.fileList.length <1){
       alert("No files exist in this folder!");
       return;
    }

if(!Prefs.oFolder.exists){
    alert("You need to select an output folder!");
    return;
    }
}
if(!win.g105.cb1.value &&  !win.g105.cb2.value && !win.g105.cb3.value && !win.g105.cb4.value){
    alert("No save filetype has been selected!");
    return;
    }

Prefs.index = 0;
Prefs.useActionOnOpen = win.g50.cb1.value;
Prefs.actionSet1 = win.g51.dd1.selection.text;
Prefs.action1 = win.g51.dd2.selection.text;
Prefs.useActionOnClose = win.g55.cb1.value;
Prefs.actionSet2 = win.g56.dd1.selection.text;
Prefs.action2 = win.g56.dd2.selection.text;
Prefs.zoom = win.g35.cb1.value;
Prefs.zoomFactor = Number(win.g35.et1.text);
Prefs.saveAsJpg = win.g105.cb1.value;
Prefs.JpgQual = Number(win.g105.dd1.selection.index);
Prefs.saveAsTif = win.g105.cb2.value;
Prefs.Tifcomp = Number(win.g105.dd2.selection.index); 
Prefs.saveAsPsd = win.g105.cb3.value;
Prefs.saveAsPNG = win.g105.cb4.value;

var desc1 = new ActionDescriptor();
desc1.putString(0, Prefs.toSource());
app.putCustomOptions( '7452a7a0-8edf-11e0-91e4-0800200c9a66', desc1, true );
win.close(1);
open(Prefs.fileList[Number(Prefs.index)]);
if(Prefs.zoom) setZoomLevel(Number(Prefs.zoomFactor));
if(Prefs.useActionOnOpen) app.doAction(Prefs.action1.toString(), Prefs.actionSet1.toString());
}catch(e){alert(e+" -"+e.line);}
}
win.center();
win.show();
    }//end setup
function setZoomLevel( zoom ) { 
    if(zoom < 1 ) zoom =1;
   var ref = new ActionReference(); 
   ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
   var getScrRes = executeActionGet(ref).getObjectValue(stringIDToTypeID('unitsPrefs')).getUnitDoubleValue(stringIDToTypeID('newDocPresetScreenResolution'))/72; 
   var docRes = activeDocument.resolution; 
   activeDocument.resizeImage( undefined, undefined, getScrRes/(zoom/100), ResampleMethod.NONE ); 
   var desc = new ActionDescriptor(); 
   ref = null;
   ref = new ActionReference(); 
   ref.putEnumerated( charIDToTypeID( "Mn  " ), charIDToTypeID( "MnIt" ), charIDToTypeID( 'PrnS' ) ); 
   desc.putReference( charIDToTypeID( "null" ), ref ); 
   executeAction( charIDToTypeID( "slct" ), desc, DialogModes.NO ); 
   activeDocument.resizeImage( undefined, undefined, docRes, ResampleMethod.NONE ); 
};
function ReturnUniqueSortedList(ArrayName,NotCaseSensitive){
var unduped = new Object;
for (var i in ArrayName.sort()) {   
if(NotCaseSensitive){
unduped[ArrayName[i].toLocaleLowerCase()] = ArrayName[i];
}else{
    unduped[ArrayName[i]] = ArrayName[i];
    }
}
var uniques = new Array;
for (var k in unduped) {
   uniques.push(unduped[k]);
   }
return uniques;
};
function getActionSets() { 
cTID = function(s) { return app.charIDToTypeID(s); }; 
sTID = function(s) { return app.stringIDToTypeID(s); }; 
  var i = 1; 
  var sets = [];  
  while (true) { 
    var ref = new ActionReference(); 
    ref.putIndex(cTID("ASet"), i); 
    var desc; 
    var lvl = $.level; 
    $.level = 0; 
    try { 
      desc = executeActionGet(ref); 
    } catch (e) { 
      break;   
    } finally { 
      $.level = lvl; 
    } 
    if (desc.hasKey(cTID("Nm  "))) { 
      var set = {}; 
      set.index = i; 
      set.name = desc.getString(cTID("Nm  ")); 
      set.toString = function() { return this.name; }; 
      set.count = desc.getInteger(cTID("NmbC")); 
      set.actions = []; 
      for (var j = 1; j <= set.count; j++) { 
        var ref = new ActionReference(); 
        ref.putIndex(cTID('Actn'), j); 
        ref.putIndex(cTID('ASet'), set.index); 
        var adesc = executeActionGet(ref); 
        var actName = adesc.getString(cTID('Nm  ')); 
        set.actions.push(actName); 
      } 
      sets.push(set); 
    } 
    i++; 
  } 
  return sets; 
}; 

function getActions(aset) {
cTID = function(s) { return app.charIDToTypeID(s); }; 
sTID = function(s) { return app.stringIDToTypeID(s); };
  var i = 1;
  var names = [];
  if (!aset) {
    throw "Action set must be specified";
  }  
  while (true) {
    var ref = new ActionReference();
    ref.putIndex(cTID("ASet"), i);
    var desc;
    try {
      desc = executeActionGet(ref);
    } catch (e) {
      break;   
    }
    if (desc.hasKey(cTID("Nm  "))) {
      var name = desc.getString(cTID("Nm  "));
      if (name == aset) {
        var count = desc.getInteger(cTID("NmbC"));
        var names = [];
        for (var j = 1; j <= count; j++) {
          var ref = new ActionReference();
          ref.putIndex(cTID('Actn'), j);
          ref.putIndex(cTID('ASet'), i);
          var adesc = executeActionGet(ref);
          var actName = adesc.getString(cTID('Nm  '));
          names.push(actName);
        }
        break;
      }
    }
    i++;
  }
  return names;
};
function GetFilesFromBridge() {
function script(){
var fL = app.document.selections;
var tF=[];
for(var a in fL){
    if(fL[a].type =='file'){
        tF.push(new File(encodeURI(fL[a].spec.fsName)));
        }
    }
return tF.toSource();
}
	var fileList;
		var bt = new BridgeTalk();
		bt.target = "bridge";
        bt.body = "var ftn = " + script.toSource() + "; ftn();";
		bt.onResult = function( inBT ) { fileList = eval( inBT.body ); }
		bt.onError = function( inBT ) { fileList = new Array(); }
		bt.send(8);
		bt.pump();
	if ( undefined == fileList ) fileList = new Array();
	return fileList; 
}
};