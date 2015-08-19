//MB Previous
#target Photoshop
main();
function main(){
var Prefs={};
try{
var desc1 = app.getCustomOptions(  '7452a7a0-8edf-11e0-91e4-0800200c9a66');
}catch(e){return;}
Prefs = eval(desc1.getString(0));
var Index = Number(Prefs.index);
if(documents.length){
var Name = app.activeDocument.name.replace(/\.[^\.]+$/, '');
var saveFile = decodeURI(Prefs.oFolder) +"/"+Name;
if(Prefs.useActionOnClose) app.doAction(Prefs.action2.toString(), Prefs.actionSet2.toString());
if(Prefs.saveAsTif){
    SaveTIFF(saveFile,Number(Prefs.Tifcomp))
}
if(Prefs.saveAsPsd){
    SavePSD(saveFile);
}
if(Prefs.saveAsPNG){
  saveAsPNG24SFW(saveFile);
}
if(Prefs.saveAsJpg){
   activeDocument.flatten();
  SaveJPEG(saveFile,(Number(Prefs.JpgQual)+1))  
}
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
if(Index == 0){
    alert("That was the first document!\rUse MB Next");
    return;
    }

Prefs.index--;
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
function SaveJPEG(saveFile, jpegQuality){
testExist("jpg");
var doc = activeDocument;
RemoveAlphaChannels();
if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) doc.bitsPerChannel = BitsPerChannelType.EIGHT;
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = jpegQuality; 
activeDocument.saveAs(new File(saveFile+".jpg"), jpgSaveOptions, true,Extension.LOWERCASE);
}
function SaveTIFF(saveFile,Comp){
testExist("tif");
tiffSaveOptions = new TiffSaveOptions(); 
tiffSaveOptions.embedColorProfile = true;
tiffSaveOptions.transparency=true;
tiffSaveOptions.interleaveChannels=true;
tiffSaveOptions.alphaChannels = false; 
switch (Number(Comp)){
    case 0 : tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW; break;
    case 1 : tiffSaveOptions.imageCompression = TIFFEncoding.TIFFZIP; break;
    case 2 : tiffSaveOptions.imageCompression = TIFFEncoding.JPEG; break;
    case 3 : tiffSaveOptions.imageCompression = TIFFEncoding.NONE; break;
    default : break;
}
activeDocument.saveAs(File(saveFile+".tif"), tiffSaveOptions, true, Extension.LOWERCASE); 
}
function SavePSD(saveFile){ 
testExist("psd");
psdSaveOptions = new PhotoshopSaveOptions(); 
psdSaveOptions.embedColorProfile = true; 
psdSaveOptions.alphaChannels = true;  
activeDocument.saveAs(File(saveFile+".psd"), psdSaveOptions, true, Extension.LOWERCASE); 
}
function saveAsPNG24SFW(saveFile) {
testExist("png");
    var desc3 = new ActionDescriptor();
        var desc4 = new ActionDescriptor();
        desc4.putEnumerated( charIDToTypeID('Op  '), charIDToTypeID('SWOp'), charIDToTypeID('OpSa') );
        desc4.putEnumerated( charIDToTypeID('Fmt '), charIDToTypeID('IRFm'), charIDToTypeID('PN24') );
        desc4.putBoolean( charIDToTypeID('Intr'), false );
        desc4.putBoolean( charIDToTypeID('Trns'), true );
        desc4.putBoolean( charIDToTypeID('Mtt '), false );
        desc4.putInteger( charIDToTypeID('MttR'), 255 );
        desc4.putInteger( charIDToTypeID('MttG'), 255 );
        desc4.putInteger( charIDToTypeID('MttB'), 255 );
        desc4.putBoolean( charIDToTypeID('SHTM'), false );
        desc4.putBoolean( charIDToTypeID('SImg'), true );
        desc4.putBoolean( charIDToTypeID('SSSO'), false );
            var list1 = new ActionList();
        desc4.putList( charIDToTypeID('SSLt'), list1 );
        desc4.putBoolean( charIDToTypeID('DIDr'), false );
        desc4.putPath( charIDToTypeID('In  '), new File( saveFile +".png" ) );
    desc3.putObject( charIDToTypeID('Usng'), stringIDToTypeID('SaveForWeb'), desc4 );
    executeAction( charIDToTypeID('Expr'), desc3, DialogModes.NO );
};
function testExist(EXT){
var tmpFile = File(saveFile +"."+EXT);
var tmpName = decodeURI(tmpFile.name).replace(/\.[^\.]+$/, '')+time()+"."+EXT;
if(tmpFile.exists) tmpFile.rename(tmpName);
}
function time(){
var date = new Date();
	var d  = date.getDate();
	var day = (d < 10) ? '0' + d : d;
	var m = date.getMonth() + 1;
	var month = (m < 10) ? '0' + m : m;
	var yy = date.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	var digital = new Date();
	var hours = digital.getHours();
	var minutes = digital.getMinutes();
	var seconds = digital.getSeconds();
	var amOrPm = "am";
	if (hours > 11) amOrPm = "pm";
	if (hours > 12) hours = hours - 12;
	if (hours == 0) hours = 12;
    if (hours <= 9) hours =  "0" + hours;
	if (minutes <= 9) minutes = "0" + minutes;
	if (seconds <= 9) seconds = "0" + seconds;
	todaysDate = "-" + hours + minutes + seconds + amOrPm;
	return todaysDate.toString();
};
function RemoveAlphaChannels() {
	var channels = app.activeDocument.channels;
	var channelCount = channels.length - 1;
	while ( channels[channelCount].kind != ChannelType.COMPONENT ) {
		channels[channelCount].remove();
		channelCount--;
	}
}
};
