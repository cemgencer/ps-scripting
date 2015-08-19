#target photoshop;
app.bringToFront();
////////////////////////////
// Photoshop CS4 or better
////////////////////////////
function main(){
if(!documents.length) return;
if(Number(app.version.match(/^\d+/)) <11){
   alert("Sorry but you need to have Photoshop CS4 or better");
   return;
    }
if (ExternalObject.AdobeXMPScript == undefined)  ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
var psNamespace = "http://ns.multilayersets/1.0/";
var psPrefix = "mlsets:";
XMPMeta.registerNamespace(psNamespace, psPrefix);
existingLayerPresets = [];
existingLayerPresets = getLayerArray().sort();
var layersSelected = getSelectedLayersIdx();
var layerIDs=[];
for(var s in layersSelected){
layerIDs.push(getIDX(layersSelected[s]));
}
layersSelected = layerIDs.toString();
var win = new Window( 'dialog', 'Selected Layers' ); 
g = win.graphics;
var myBrush = g.newBrush(g.BrushType.SOLID_COLOR, [0.99, 0.99, 0.99, 1]);
g.backgroundColor = myBrush;
win.p1= win.add("panel", undefined, undefined, {borderStyle:"black"}); 
win.g1 = win.p1.add('group');
win.g1.orientation = "row";
win.title = win.g1.add('statictext',undefined,'Selected Layers');
win.title.alignment="fill";
var g = win.title.graphics;
g.font = ScriptUI.newFont("Georgia","BOLDITALIC",22);
win.g5 =win.p1.add('group');
win.g5.orientation = "row";
win.g5.alignment='fill';
win.g5.spacing=10;
win.g5.st1 = win.g5.add('statictext',undefined,'Existing Presets');
win.g5.dd1 = win.g5.add('dropdownlist');
win.g5.dd1.preferredSize=[310,20];
for(var w in existingLayerPresets){
    var tmp=existingLayerPresets[w].split(',');
    win.g5.dd1.add('item',tmp[0]);
    }
win.g5.dd1.selection=0;
win.g10 =win.p1.add('group');
win.g10.orientation = "row";
win.g10.alignment='fill';
win.g10.spacing=10;
win.g10.bu1 = win.g10.add('button',undefined,'Remove Preset');
win.g10.bu1.preferredSize=[200,35];
win.g10.bu2 = win.g10.add('button',undefined,'Use Preset');
win.g10.bu2.preferredSize=[200,35];
win.g15 =win.p1.add('group');
win.g15.orientation = "row";
win.g15.alignment='fill';
win.g15.st1 = win.g15.add('statictext',undefined,'New Preset Name');
win.g20 =win.p1.add('group');
win.g20.orientation = "row";
win.g20.alignment='fill';
win.g20.spacing=10;
win.g20.et1 = win.g20.add('edittext');
win.g20.et1.preferredSize=[300,20];
win.g20.bu1 = win.g20.add('button',undefined,'Add New Preset');
win.g200 =win.p1.add('group');
win.g200.orientation = "row";
win.g200.bu1 = win.g200.add('button',undefined,'Cancel');
win.g200.bu1.preferredSize=[350,30];
win.g10.bu1.onClick=function(){
if(existingLayerPresets.length == 0) return;
existingLayerPresets.splice(win.g5.dd1.selection.index,1);
win.g5.dd1.removeAll();
for(var w in existingLayerPresets){
    var tmp=existingLayerPresets[w].split(',');
    win.g5.dd1.add('item',tmp[0]);
    }
win.g5.dd1.selection=0;
putLayerArray(existingLayerPresets);
    }
win.g10.bu2.onClick=function(){
if(existingLayerPresets.length == 0) return;
win.close(0);
var ar1 = existingLayerPresets[win.g5.dd1.selection.index].toString().split(',');
    selLayer(Number(ar1[1]),false);
    if(ar1.length >2){
        for(var e =2;e<ar1.length;e++){
            selLayer(Number(ar1[e]),true);
            }
        }
    }

win.g20.bu1.onClick=function(){
if(win.g20.et1.text == ''){
    alert("You need to enter a name for the new preset");
    return;
    }
win.close(0);
currentLayers = win.g20.et1.text + "," +layersSelected;
existingLayerPresets.push(currentLayers);
putLayerArray(existingLayerPresets);
    }
win.center();
win.show();
function getLayerArray(){
var xmp; 
var newLayerArray=[];
xmp = new XMPMeta( app.activeDocument.xmpMetadata.rawData );
var Count = xmp.countArrayItems(psNamespace, "LayerArray");
for(var i = 1;i <= Count;i++){
	newLayerArray.push(xmp.getArrayItem(psNamespace, "LayerArray", i).toString());
}
return newLayerArray;
 }
function putLayerArray(gArray){
var xmp; 
xmp = new XMPMeta( app.activeDocument.xmpMetadata.rawData ); 
xmp.deleteProperty(psNamespace, "LayerArray");		
 for(var g in gArray){
 xmp.appendArrayItem(psNamespace, "LayerArray", gArray[g].toString(), 0, XMPConst.ARRAY_IS_UNORDERED);
 }
app.activeDocument.xmpMetadata.rawData = xmp.serialize();
}
}
function selectLayerByIndex(index,add){ 
	add = (add == undefined)  ? add = false : add;
 var ref = new ActionReference();
    ref.putIndex(charIDToTypeID("Lyr "), index);
    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref );
	      if(add) desc.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "addToSelection" ) ); 
      desc.putBoolean( charIDToTypeID( "MkVs" ), false ); 
	  try{
    executeAction(charIDToTypeID("slct"), desc, DialogModes.NO );
}catch(e){}
};
function getLayerItemIndexByLayerID(id) { 
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" )); 
    ref.putIdentifier( charIDToTypeID( "Lyr " ), id ); 
	try{
    return executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ));
	}catch(e){return true;}
};
function selLayer(layerID,add){
var result =getLayerItemIndexByLayerID(layerID);
//alert(result);
if(result > 0){
    try{ 
    activeDocument.backgroundLayer;
    var bkGround = 1;
    }catch(e) {var bkGround = 0;}
	selectLayerByIndex(result - bkGround ,add);
	}else{
alert("Layer does not exist");		
		}
};
function getIDX(idx) { //returns Layer ID from index
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID("Prpr") , stringIDToTypeID( "layerID" )); 
    ref.putIndex( charIDToTypeID( "Lyr " ), idx ); 
    return executeActionGet(ref).getInteger(stringIDToTypeID( "layerID" ));
}
function getSelectedLayersIdx(){ 
      var selectedLayers = new Array; 
      var ref = new ActionReference(); 
      ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
      var desc = executeActionGet(ref); 
      if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){ 
         desc = desc.getList( stringIDToTypeID( 'targetLayers' )); 
          var c = desc.count 
          var selectedLayers = new Array(); 
          for(var i=0;i<c;i++){ 
            try{ 
               activeDocument.backgroundLayer; 
               selectedLayers.push(  desc.getReference( i ).getIndex() ); 
            }catch(e){ 
               selectedLayers.push(  desc.getReference( i ).getIndex()+1 ); 
            } 
          } 
       }else{ 
         var ref = new ActionReference(); 
         ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" )); 
         ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
         try{ 
            activeDocument.backgroundLayer; 
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1); 
         }catch(e){ 
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))); 
         } 
      } 
      return selectedLayers; 
};
main();