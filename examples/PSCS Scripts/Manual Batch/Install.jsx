#target photoshop
function main(){
var newPath = decodeURI(WhoAmI().parent+"/Manual Batch");
var SCRIPTS_FOLDER =  decodeURI(app.path + '/' + localize("$$$/ScriptingSupport/InstalledScripts=Presets/Scripts"));
var testFile = new File(SCRIPTS_FOLDER + "/SecurityTest.txt");
testFile.open("w");
testFile.close();
if(!testFile.exists){
	alert("You must run Photoshop as Administrator to run this install script\rRight click on Photoshop and select Run as administrator");
	}else{
testFile.remove();
var actionList =getActionSets();
for(var d in actionList){
	var str = decodeURI(actionList[d]);
	if(str.match( /^Manual Batch/i)) unLoadAction(actionList[d]);
	}
var atnXML = new File(newPath+"/MB.xml");
var atnXMLout = new File(newPath+"/MB edited.xml");
var atnOut = new File(newPath+"/Manual Batch.atn");
if(atnOut.exists) atnOut.remove();
if(atnXMLout.exists) atnXMLout.remove();
atnXML.open("r");
var xmlFILE = atnXML.read();
atnXML.close();
xmlFILE = xmlFILE.replace (/replaceme/gi, SCRIPTS_FOLDER);
atnXMLout.open("w");
atnXMLout.write(xmlFILE);
atnXMLout.close();
eval('//@include "'+newPath+'/actionFileFromXML.jsx";\r');
var atnList =Folder(newPath).getFiles ("*.atn"); 
for(var y=0;y< atnList.length;y++){
	loadActionSets(atnList[y].fsName);
}
var scriptList =Folder(newPath).getFiles ("M*.jsx*");
for(var z=0;z< scriptList.length;z++){
scriptList[z].copy((Folder(SCRIPTS_FOLDER)+"/"+scriptList[z].name));
}
alert("Manual Batch is now ready to use");
}}
function WhoAmI() {
var where;
	try {var F = FO;
		}catch( err ) {where = File(err.fileName);}
	return where;
}
function loadActionSets(ActionSet){
var desc = new ActionDescriptor(); 
desc.putPath( charIDToTypeID( "null" ), new File( ActionSet)); 
executeAction( charIDToTypeID( "Opn " ), desc, DialogModes.NO ); 
}
function getActionSets() { 
cTID = function(s) { return app.charIDToTypeID(s); }; 
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

function unLoadAction(aSet){
var desc = new ActionDescriptor(); 
var ref = new ActionReference(); 
ref.putName( charIDToTypeID( "ASet" ), decodeURI(aSet)); 
desc.putReference( charIDToTypeID( "null" ), ref ); 
executeAction( charIDToTypeID( "Dlt " ), desc, DialogModes.NO );
};

main();
