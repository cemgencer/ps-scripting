//MB SkipToNext
#target Photoshop
main();
function main(){
var Prefs={};
try{
var desc1 = app.getCustomOptions(  '7452a7a0-8edf-11e0-91e4-0800200c9a66');
}catch(e){return;}
Prefs = eval(desc1.getString(0));
var Index = Number(Prefs.index);

if((Index +1) >= Prefs.fileList.length){
    alert("This is the last document!");
    return;
    }
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
Prefs.index++;
var desc1 = new ActionDescriptor();
desc1.putString(0, Prefs.toSource());
app.putCustomOptions( '7452a7a0-8edf-11e0-91e4-0800200c9a66', desc1, true );

open(Prefs.fileList[Number(Prefs.index)]);
if(Prefs.zoom) setZoomLevel(Number(Prefs.zoomFactor));
if(Prefs.useActionOnOpen) app.doAction(Prefs.action1.toString(), Prefs.actionSet1.toString());

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
}
