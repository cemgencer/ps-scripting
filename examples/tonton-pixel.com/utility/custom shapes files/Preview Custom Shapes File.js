﻿/*

<javascriptresource>
<name>Preview Custom Shapes File...</name>
<about>"Preview Custom Shapes File" v2.1

Graphically preview a custom shapes file (.csh) or a custom shapes preferences file (CustomShapes.psp) in a new image document.

Utility script using the "JSON Action Manager" scripting library.
© 2011-2015 Michel MARIANI.
</about>
<menu>automate</menu>
<category>JSON Action Manager Custom Shapes Files Utility</category>
</javascriptresource>

*/

//------------------------------------------------------------------------------
// File: Preview Custom Shapes File.js
// Version: 2.1
// Release Date: 2015-07-24
// Copyright: © 2011-2015 Michel MARIANI <http://www.tonton-pixel.com/blog/>
// Licence: GPL <http://www.gnu.org/licenses/gpl.html>
//------------------------------------------------------------------------------
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	 See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.	 If not, see <http://www.gnu.org/licenses/>.
//------------------------------------------------------------------------------
// Version History:
//  2.1:
//  - Used new version 4.4.1 of scripting library modules.
//  2.0:
//  - Fixed missing local variables.
//  - Replaced background layer with solid color fill layer when using shape
//    layers.
//  - Used new version 4.4 of of scripting library modules.
//  1.9:
//  - Used new version 4.3 of jamHelpers scripting library module.
//  1.8:
//  - Added use of suspend history.
//  - Improved speed of setting File Info.
//  1.7:
//  - Fixed generation of presets folder name.
//  - Replaced decodeURI () with File.decode () for the sake of consistency.
//  - Used new version 4.1 of jamShapes scripting library module.
//  1.6:
//  - Used new version 4.0 of scripting library modules.
//  1.5:
//  - Used new version of scripting library modules.
//  1.4:
//  - Used new version of scripting library modules.
//  1.3:
//	- Added document file info: generation parameters and time statistics.
//  1.2:
//	- Improved performance by delaying the full parsing after dialog exit.
//  - Used path instead of selection to draw the optional grid.
//	1.1:
//	- Added user-interface dialog.
//	1.0:
//	- Initial release.
//------------------------------------------------------------------------------

// jamEngine.jsxinc v4.4.1 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}
// jamHelpers.jsxinc v4.4 (minified)
if(typeof jamHelpers!=='object') {var jamHelpers={};(function() {jamHelpers.toColorObject=function(color) {var colorObject;if(color.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"book":case"name":typedValue=["<string>",localize(value)];break;case"bookKey":typedValue=["<data>",value];break;case"bookID":typedValue=["<integer>",value];break;case"a":case"b":case"black":case"blue":case"brightness":case"cyan":case"gray":case"green":case"luminance":case"magenta":case"red":case"saturation":case"yellowColor":typedValue=["<double>",value];break;case"hue":typedValue=["<unitDouble>",["angleUnit",value]];break;case"color":var colorClass;if((("book"in value)&&("name"in value))||(("bookID"in value)&&("bookKey"in value))) {colorClass="bookColor";} else if(("cyan"in value)&&("magenta"in value)&&("yellowColor"in value)&&("black"in value)) {colorClass="CMYKColorClass";} else if("gray"in value) {colorClass="grayscale";} else if(("hue"in value)&&("saturation"in value)&&("brightness"in value)) {colorClass="HSBColorClass";} else if(("luminance"in value)&&("a"in value)&&("b"in value)) {colorClass="labColor";} else if(("red"in value)&&("green"in value)&&("blue"in value)) {colorClass="RGBColor";} typedValue=["<object>",[colorClass,restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} colorObject=restoreDesc({"color":color})["color"];} else if(color.constructor===Array) {var colorClass=color[0];switch(jamEngine.uniIdStrToId(colorClass)) {case jamEngine.uniIdStrToId("bookColor"):switch(color[1].length) {case 2:if(typeof color[1][0]==='string') {colorObject=["<object>",["bookColor",{"book":["<string>",color[1][0]],"name":["<string>",color[1][1]]}]];} else if(typeof color[1][0]==='number') {colorObject=["<object>",["bookColor",{"bookID":["<integer>",color[1][0]],"bookKey":["<data>",color[1][1]]}]];} break;case 4:colorObject=["<object>",["bookColor",{"book":["<string>",color[1][0]],"name":["<string>",color[1][1]],"bookID":["<integer>",color[1][2]],"bookKey":["<data>",color[1][3]]}]];break;} break;case jamEngine.uniIdStrToId("CMYKColorClass"):colorObject=["<object>",["CMYKColorClass",{"cyan":["<double>",color[1][0]],"magenta":["<double>",color[1][1]],"yellowColor":["<double>",color[1][2]],"black":["<double>",color[1][3]]}]];break;case jamEngine.uniIdStrToId("grayscale"):colorObject=["<object>",["grayscale",{"gray":["<double>",(color[1].constructor===Array)?color[1][0]:color[1]]}]];break;case jamEngine.uniIdStrToId("HSBColorClass"):colorObject=["<object>",["HSBColorClass",{"hue":["<unitDouble>",["angleUnit",color[1][0]]],"saturation":["<double>",color[1][1]],"brightness":["<double>",color[1][2]]}]];break;case jamEngine.uniIdStrToId("labColor"):colorObject=["<object>",["labColor",{"luminance":["<double>",color[1][0]],"a":["<double>",color[1][1]],"b":["<double>",color[1][2]]}]];break;case jamEngine.uniIdStrToId("RGBColor"):colorObject=["<object>",["RGBColor",{"red":["<double>",color[1][0]],"green":["<double>",color[1][1]],"blue":["<double>",color[1][2]]}]];break;default:throw new Error("[jamHelpers.toColorObject] Unrecognized color class: "+colorClass);break;}} return colorObject;};jamHelpers.fromColorObject=function(colorObject,explicit) {var color;if(explicit) {color=jamEngine.simplifyObject(colorObject);} else {var normalizedColorObject=jamEngine.normalizeJsonItem(colorObject,{meaningfulIds:true,parseFriendly:true});var colorClass=normalizedColorObject[1][0];var colorDesc=normalizedColorObject[1][1];switch(colorClass) {case"bookColor":var book=colorDesc["book"][1];var name=colorDesc["name"][1];if(("bookID"in colorDesc)&&("bookKey"in colorDesc)) {var bookID=colorDesc["bookID"][1];var bookKey=colorDesc["bookKey"][1];color=[colorClass,[book,name,bookID,bookKey]];} else {color=[colorClass,[book,name]];} break;case"CMYKColorClass":var cyan=colorDesc["cyan"][1];var magenta=colorDesc["magenta"][1];var yellowColor=colorDesc["yellowColor"][1];var black=colorDesc["black"][1];color=[colorClass,[cyan,magenta,yellowColor,black]];break;case"grayscale":var gray=colorDesc["gray"][1];color=[colorClass,[gray]];break;case"HSBColorClass":var hue=colorDesc["hue"][1][1];var saturation=colorDesc["saturation"][1];var brightness=colorDesc["brightness"][1];color=[colorClass,[hue,saturation,brightness]];break;case"labColor":var luminance=colorDesc["luminance"][1];var a=colorDesc["a"][1];var b=colorDesc["b"][1];color=[colorClass,[luminance,a,b]];break;case"RGBColor":var red=colorDesc["red"][1];var green=colorDesc["green"][1];var blue=colorDesc["blue"][1];color=[colorClass,[red,green,blue]];break;default:throw new Error("[jamHelpers.fromColorObject] Unrecognized color class: "+colorClass);break;}} return color;};jamHelpers.nameToColorObject=function(setName,colorName) {return this.toColorObject(jamColors.nameToColor(setName,colorName));};jamHelpers.hexToColorObject=function(hexColorString) {return this.toColorObject(["RGBColor",jamColors.hexToRgb(hexColorString)]);};jamHelpers.hexFromColorObject=function(colorObject,noSign,lowercase) {var color=this.fromColorObject(colorObject);return(color[0]==="RGBColor")?jamColors.rgbToHex(color[1],noSign,lowercase):null;};jamHelpers.toGradientObject=function(gradient) {var gradientObject;if(gradient.constructor===Object) {var that=this;function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"showTransparency":case"vectorColor":typedValue=["<boolean>",value];break;case"name":typedValue=["<string>",localize(value)];break;case"gradientForm":typedValue=["<enumerated>",["gradientForm",value]];break;case"type":typedValue=["<enumerated>",["colorStopType",value]];break;case"colorSpace":typedValue=["<enumerated>",["colorSpace",value]];break;case"location":case"midpoint":case"randomSeed":case"smoothness":typedValue=["<integer>",value];break;case"interpolation":typedValue=["<double>",value];break;case"opacity":typedValue=["<unitDouble>",["percentUnit",value]];break;case"colors":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["colorStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"transparency":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["transparencyStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"minimum":case"maximum":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;case"color":typedValue=that.toColorObject(value);break;case"gradient":typedValue=["<object>",["gradientClassEvent",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} gradientObject=restoreDesc({"gradient":gradient})["gradient"];} else if(gradient.constructor===Array) {var gradientObj={};var gradientName=gradient[0];if(gradientName) {gradientObj["name"]=["<string>",gradientName];} var gradientForm=gradient[1];gradientObj["gradientForm"]=["<enumerated>",["gradientForm",gradientForm]];switch(jamEngine.uniIdStrToId(gradientForm)) {case jamEngine.uniIdStrToId("customStops"):gradientObj["interpolation"]=["<double>",gradient[2]];var colorStops=gradient[3];var colorsArr=[];for(var i=0;i<colorStops.length;i++) {var colorStopObj={};colorStopObj["location"]=["<integer>",colorStops[i][0]];colorStopObj["midpoint"]=["<integer>",colorStops[i][1]];var type=colorStops[i][2];colorStopObj["type"]=["<enumerated>",["colorStopType",type]];switch(jamEngine.uniIdStrToId(type)) {case jamEngine.uniIdStrToId("userStop"):colorStopObj["color"]=this.toColorObject(colorStops[i][3]);break;case jamEngine.uniIdStrToId("backgroundColor"):case jamEngine.uniIdStrToId("foregroundColor"):break;default:throw new Error("[jamHelpers.toGradientObject] Unrecognized color stop type: "+type);break;} colorsArr.push(["<object>",["colorStop",colorStopObj]]);} gradientObj["colors"]=["<list>",colorsArr];var transparencyStops=gradient[4];if(typeof transparencyStops!=='undefined') {var transparencyArr=[];for(var j=0;j<transparencyStops.length;j++) {var transparencyStopObj={};transparencyStopObj["location"]=["<integer>",transparencyStops[j][0]];transparencyStopObj["midpoint"]=["<integer>",transparencyStops[j][1]];transparencyStopObj["opacity"]=["<unitDouble>",["percentUnit",transparencyStops[j][2]]];transparencyArr.push(["<object>",["transparencyStop",transparencyStopObj]]);} gradientObj["transparency"]=["<list>",transparencyArr];} break;case jamEngine.uniIdStrToId("colorNoise"):gradientObj["randomSeed"]=["<integer>",gradient[2]];gradientObj["showTransparency"]=["<boolean>",gradient[3]];gradientObj["vectorColor"]=["<boolean>",gradient[4]];gradientObj["smoothness"]=["<integer>",gradient[5]];var colorSpace=gradient[6];gradientObj["colorSpace"]=["<enumerated>",["colorSpace",colorSpace]];switch(jamEngine.uniIdStrToId(colorSpace)) {case jamEngine.uniIdStrToId("RGBColor"):case jamEngine.uniIdStrToId("HSBColorEnum"):case jamEngine.uniIdStrToId("labColor"):break;default:throw new Error("[jamHelpers.toGradientObject] Unrecognized color space: "+colorSpace);break;} gradientObj["minimum"]=this.toIntegerList(gradient[7]);gradientObj["maximum"]=this.toIntegerList(gradient[8]);break;default:throw new Error("[jamHelpers.toGradientObject] Unrecognized gradient form: "+gradientForm);break;} gradientObject=["<object>",["gradientClassEvent",gradientObj]];} return gradientObject;};jamHelpers.fromGradientObject=function(gradientObject,explicit) {var gradient;if(explicit) {gradient=jamEngine.simplifyObject(gradientObject);} else {gradient=[];var normalizedGradientObject=jamEngine.normalizeJsonItem(gradientObject,{meaningfulIds:true,parseFriendly:true});var gradientDesc=normalizedGradientObject[1][1];var name=gradientDesc["name"];gradient.push((name)?name[1]:null);var gradientForm=gradientDesc["gradientForm"][1][1];gradient.push(gradientForm);switch(gradientForm) {case"customStops":gradient.push(gradientDesc["interpolation"][1]);var colors=gradientDesc["colors"][1];var colorStops=[];for(var i=0;i<colors.length;i++) {var colorStop=colors[i][1][1];var colorStopArr=[];colorStopArr.push(colorStop["location"][1]);colorStopArr.push(colorStop["midpoint"][1]);var type=colorStop["type"][1][1];colorStopArr.push(type);switch(type) {case"userStop":colorStopArr.push(this.fromColorObject(colorStop["color"]));break;case"backgroundColor":case"foregroundColor":break;default:throw new Error("[jamHelpers.fromGradientObject] Unrecognized color stop type: "+type);break;} colorStops.push(colorStopArr);} gradient.push(colorStops);var transparency=gradientDesc["transparency"][1];var transparencyStops=[];for(var j=0;j<transparency.length;j++) {var transparencyStop=transparency[j][1][1];var transparencyStopArr=[];transparencyStopArr.push(transparencyStop["location"][1]);transparencyStopArr.push(transparencyStop["midpoint"][1]);transparencyStopArr.push(transparencyStop["opacity"][1][1]);transparencyStops.push(transparencyStopArr);} gradient.push(transparencyStops);break;case"colorNoise":gradient.push(gradientDesc["randomSeed"][1]);gradient.push(gradientDesc["showTransparency"][1]);gradient.push(gradientDesc["vectorColor"][1]);gradient.push(gradientDesc["smoothness"][1]);var colorSpace=gradientDesc["colorSpace"][1][1] gradient.push(colorSpace);switch(colorSpace) {case"RGBColor":case"HSBColorEnum":case"labColor":break;default:throw new Error("[jamHelpers.fromGradientObject] Unrecognized color space: "+colorSpace);break;} gradient.push(this.fromIntegerList(gradientDesc["minimum"]));gradient.push(this.fromIntegerList(gradientDesc["maximum"]));break;default:throw new Error("[jamHelpers.fromGradientObject] Unrecognized gradient form: "+gradientForm);break;}} return gradient;};jamHelpers.toCurvesAdjustmentList=function(curvesAdjustmentsArr) {var curvesAdjustmentListArr=[];for(var i=0;i<curvesAdjustmentsArr.length;i++) {var curvesAdjustment=curvesAdjustmentsArr[i];var channel=["<reference>",[["channel",["<enumerated>",["channel",curvesAdjustment[0]]]]]];var info=curvesAdjustment[1];var type=info[0];var points=info[1];var pointArr=[];switch(jamEngine.uniIdStrToId(type)) {case jamEngine.uniIdStrToId("mapping"):for(var j=0;j<points.length;j++) {pointArr.push(["<integer>",points[j]]);} var mapping=["<list>",pointArr];curvesAdjustmentListArr.push(["<object>",["curvesAdjustment",{"channel":channel,"mapping":mapping}]]);break;case jamEngine.uniIdStrToId("curve"):for(var j=0;j<points.length;j++) {var point=["<object>",["point",{"horizontal":["<double>",points[j][0]],"vertical":["<double>",points[j][1]]}]];pointArr.push(point);} var curve=["<list>",pointArr];curvesAdjustmentListArr.push(["<object>",["curvesAdjustment",{"channel":channel,"curve":curve}]]);break;default:throw new Error("[jamHelpers.toCurvesAdjustmentList] Unrecognized curve type");break;}} return["<list>",curvesAdjustmentListArr];};jamHelpers.toHueSatAdjustmentV2List=function(hueSatAdjustmentsArr) {var hueSatAdjustmentListArr=[];for(var i=0;i<hueSatAdjustmentsArr.length;i++) {var hueSatAdjustmentArr=hueSatAdjustmentsArr[i];var hueSatAdjustmentObj;if((hueSatAdjustmentArr.length===3)&&(i===0)) {hueSatAdjustmentObj={"hue":["<integer>",hueSatAdjustmentArr[0]],"saturation":["<integer>",hueSatAdjustmentArr[1]],"lightness":["<integer>",hueSatAdjustmentArr[2]]};} else if(hueSatAdjustmentArr.length===(1+4+3)) {hueSatAdjustmentObj={"localRange":["<integer>",hueSatAdjustmentArr[0]],"beginRamp":["<integer>",hueSatAdjustmentArr[1]],"beginSustain":["<integer>",hueSatAdjustmentArr[2]],"endSustain":["<integer>",hueSatAdjustmentArr[3]],"endRamp":["<integer>",hueSatAdjustmentArr[4]],"hue":["<integer>",hueSatAdjustmentArr[5]],"saturation":["<integer>",hueSatAdjustmentArr[6]],"lightness":["<integer>",hueSatAdjustmentArr[7]]};} hueSatAdjustmentListArr.push(["<object>",["hueSatAdjustmentV2",hueSatAdjustmentObj]]);} return["<list>",hueSatAdjustmentListArr];};jamHelpers.toBlendRangeList=function(blendRanges) {var blendRangeListArr=[];var blendRangeObject;for(var i=0;i<blendRanges.length;i++) {var blendRange=blendRanges[i];if(blendRange.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;case"srcBlackMin":case"srcBlackMax":case"srcWhiteMin":case"srcWhiteMax":case"destBlackMin":case"destBlackMax":case"destWhiteMin":case"destWhiteMax":typedValue=["<integer>",value];break;case"blendRange":typedValue=["<object>",["blendRange",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} blendRangeObject=restoreDesc({"blendRange":blendRange})["blendRange"];} else if(blendRange.constructor===Array) {blendRangeObject=["<object>",["blendRange",{"channel":["<reference>",[["channel",["<enumerated>",["channel",blendRange[0]]]]]],"srcBlackMin":["<integer>",blendRange[1]],"srcBlackMax":["<integer>",blendRange[2]],"srcWhiteMin":["<integer>",blendRange[3]],"srcWhiteMax":["<integer>",blendRange[4]],"destBlackMin":["<integer>",blendRange[5]],"destBlackMax":["<integer>",blendRange[6]],"destWhiteMin":["<integer>",blendRange[7]],"destWhiteMax":["<integer>",blendRange[8]]}]];} blendRangeListArr.push(blendRangeObject);} return["<list>",blendRangeListArr];};jamHelpers.fromBlendRangeList=function(blendRangeList,explicit) {var blendRanges;if(explicit) {var replaceChannelHook=function(desc,key,getDefaultValue) {var replacedValue=undefined;if(key==="channel") {var value=getDefaultValue(desc,key);replacedValue=value[0]["channel"];} return replacedValue;};blendRanges=jamEngine.simplifyList(blendRangeList,replaceChannelHook);} else {blendRanges=[];var normalizedBlendRangeList=jamEngine.normalizeJsonItem(blendRangeList,{meaningfulIds:true,parseFriendly:true});for(index=0;index<normalizedBlendRangeList[1].length;index++) {var blendRange=normalizedBlendRangeList[1][index][1][1];var blendRangeArr=[blendRange["channel"][1][0][1][1][1],blendRange["srcBlackMin"][1],blendRange["srcBlackMax"][1],blendRange["srcWhiteMin"][1],blendRange["srcWhiteMax"][1],blendRange["destBlackMin"][1],blendRange["destBlackMax"][1],blendRange["destWhiteMin"][1],blendRange["destWhiteMax"][1]];blendRanges.push(blendRangeArr);}} return blendRanges;};jamHelpers.toIntegerList=function(integersArr) {var integerListArr=[];for(var i=0;i<integersArr.length;i++) {integerListArr.push(["<integer>",integersArr[i]]);} return["<list>",integerListArr];};jamHelpers.fromIntegerList=function(integerList) {var normalizedIntegerList=jamEngine.normalizeJsonItem(integerList,{meaningfulIds:true,parseFriendly:true});var integersArr=[];var integers=normalizedIntegerList[1];for(var i=0;i<integers.length;i++) {integersArr.push(integers[i][1]);} return integersArr;};function toUnitDouble(value,unit) {return(typeof unit==='undefined')?["<double>",value]:["<unitDouble>",[unit,value]];} jamHelpers.toPointObject=function(pointArr) {var data=pointArr[0];var unit=pointArr[1];var pointObject=["<object>",["point",{"horizontal":toUnitDouble(data[0],unit),"vertical":toUnitDouble(data[1],unit)}]];return pointObject;};jamHelpers.toPointList=function(pointsArr) {var data=pointsArr[0];var unit=pointsArr[1];var pointListArr=[];for(var i=0;i<data.length;i++) {pointListArr.push (["<object>",["point",{"horizontal":toUnitDouble(data[i][0],unit),"vertical":toUnitDouble(data[i][1],unit)}]]);} return["<list>",pointListArr];};jamHelpers.fromPointList=function(pointList) {var pointsArr=[];var normalizedPointList=jamEngine.normalizeJsonItem(pointList,{meaningfulIds:true,parseFriendly:true});var data=[];var unit;function getValue(coordinate) {var value;switch(coordinate[0]) {case"<unitDouble>":unit=coordinate[1][0];value=coordinate[1][1];break;case"<double>":unit=undefined;value=coordinate[1];break;} return value;} var pointListArr=normalizedPointList[1];for(var i=0;i<pointListArr.length;i++) {data.push([getValue(pointListArr[i][1][1]["horizontal"]),getValue(pointListArr[i][1][1]["vertical"])]);} pointsArr.push(data);if(unit) {pointsArr.push(unit);} return pointsArr;};jamHelpers.toOffsetObject=function(offsetArr) {var data=offsetArr[0];var unit=offsetArr[1];var offsetObject=["<object>",["offset",{"horizontal":toUnitDouble(data[0],unit),"vertical":toUnitDouble(data[1],unit)}]];return offsetObject;};jamHelpers.toRectangleObject=function(rectangleArr) {var data=rectangleArr[0];var unit=rectangleArr[1];var rectangleObj={"left":toUnitDouble(data[0],unit),"top":toUnitDouble(data[1],unit),"right":toUnitDouble(data[2],unit),"bottom":toUnitDouble(data[3],unit)};if(data.length===5) {rectangleObj["radius"]=toUnitDouble(data[4],unit);} return["<object>",["rectangle",rectangleObj]];};jamHelpers.toEllipseObject=function(ellipseArr) {var data=ellipseArr[0];var unit=ellipseArr[1];var ellipseObject=["<object>",["ellipse",{"left":toUnitDouble(data[0],unit),"top":toUnitDouble(data[1],unit),"right":toUnitDouble(data[2],unit),"bottom":toUnitDouble(data[3],unit)}]];return ellipseObject;};jamHelpers.toCustomShapeObject=function(customShapeArr) {var data=customShapeArr[0];var unit=customShapeArr[1];var customShapeObject=["<object>",["customShape",{"name":["<string>",data[0]],"left":toUnitDouble(data[1],unit),"top":toUnitDouble(data[2],unit),"right":toUnitDouble(data[3],unit),"bottom":toUnitDouble(data[4],unit)}]];return customShapeObject;};jamHelpers.toCurvePointList=function(curvePoints) {var curvePointListArr=[];var curvePointObject;for(var i=0;i<curvePoints.length;i++) {var curvePoint=curvePoints[i];if(curvePoint.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"continuity":typedValue=["<boolean>",value];break;case"horizontal":case"vertical":typedValue=["<double>",value];break;case"curvePoint":typedValue=["<object>",["curvePoint",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} curvePointObject=restoreDesc({"curvePoint":curvePoint})["curvePoint"];} else if(curvePoint.constructor===Array) {switch(curvePoint.length) {case 2:curvePointObject=["<object>",["curvePoint",{"horizontal":["<double>",curvePoint[0]],"vertical":["<double>",curvePoint[1]]}]];break;case 3:curvePointObject=["<object>",["curvePoint",{"horizontal":["<double>",curvePoint[0]],"vertical":["<double>",curvePoint[1]],"continuity":["<boolean>",curvePoint[2]]}]];break;}} curvePointListArr.push(curvePointObject);} return["<list>",curvePointListArr];};jamHelpers.fromCurvePointList=function(curvePointList,explicit) {var curvePoints;if(explicit) {curvePoints=jamEngine.simplifyList(curvePointList);} else {curvePoints=[];var normalizedCurvePointList=jamEngine.normalizeJsonItem(curvePointList,{meaningfulIds:true,parseFriendly:true});for(index=0;index<normalizedCurvePointList[1].length;index++) {var curvePoint=normalizedCurvePointList[1][index][1][1];var curvePointArr=[curvePoint["horizontal"][1],curvePoint["vertical"][1]];if("continuity"in curvePoint) {curvePointArr.push(curvePoint["continuity"][1]);} curvePoints.push(curvePointArr);}} return curvePoints;};jamHelpers.toRationalPointList=function(rationalPointsArr) {var data=rationalPointsArr[0];var unit=rationalPointsArr[1];var rationalPointListArr=[];for(var i=0;i<data.length;i++) {rationalPointListArr.push (["<object>",["rationalPoint",{"horizontal":toUnitDouble(data[i][0],unit),"vertical":toUnitDouble(data[i][1],unit)}]]);} return["<list>",rationalPointListArr];};jamHelpers.toPathComponentList=function(pathComponents) {var pathComponentList;if(pathComponents.constructor===Object) {var unit;if("unit"in pathComponents) {unit=pathComponents["unit"];} var data=pathComponents["pathComponents"];function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"closedSubpath":case"smooth":case"windingFill":typedValue=["<boolean>",value];break;case"shapeOperation":typedValue=["<enumerated>",["shapeOperation",value]];break;case"horizontal":case"vertical":typedValue=toUnitDouble(value,unit);break;case"anchor":case"backward":case"forward":typedValue=["<object>",["point",restoreDesc(value)]];break;case"subpathListKey":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["subpathsList",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"points":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["pathPoint",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"pathComponents":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["pathComponent",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} pathComponentList=restoreDesc({"pathComponents":data})["pathComponents"];} else if(pathComponents.constructor===Array) {var pathComponentListArr=[];var data=pathComponents[0];var unit=pathComponents[1];for(var i=0;i<data.length;i++) {var shapeOperation=data[i][0];var subpaths=data[i][1];var windingFill=data[i][2];var subpathArr=[];for(var j=0;j<subpaths.length;j++) {var points=subpaths[j][0];var closedSubpath=subpaths[j][1];var pointArr=[];for(var k=0;k<points.length;k++) {var point=points[k];switch(point.length) {case 1:pointArr.push (["<object>",["pathPoint",{"anchor":["<object>",["point",{"horizontal":toUnitDouble(point[0][0],unit),"vertical":toUnitDouble(point[0][1],unit)}]]}]]);break;case 3:case 4:pointArr.push (["<object>",["pathPoint",{"anchor":["<object>",["point",{"horizontal":toUnitDouble(point[0][0],unit),"vertical":toUnitDouble(point[0][1],unit)}]],"forward":["<object>",["point",{"horizontal":toUnitDouble(point[1][0],unit),"vertical":toUnitDouble(point[1][1],unit)}]],"backward":["<object>",["point",{"horizontal":toUnitDouble(point[2][0],unit),"vertical":toUnitDouble(point[2][1],unit)}]],"smooth":["<boolean>",point[3]||false]}]]);break;}} var subpath={};if(closedSubpath) {subpath["closedSubpath"]=["<boolean>",closedSubpath];} subpath["points"]=["<list>",pointArr];subpathArr.push(["<object>",["subpathsList",subpath]]);} var pathComponent={};pathComponent["shapeOperation"]=["<enumerated>",["shapeOperation",shapeOperation]];if(windingFill) {pathComponent["windingFill"]=["<boolean>",windingFill];} pathComponent["subpathListKey"]=["<list>",subpathArr];pathComponentListArr.push(["<object>",["pathComponent",pathComponent]]);} pathComponentList=["<list>",pathComponentListArr];} return pathComponentList;};jamHelpers.fromPathComponentList=function(pathComponentList,explicit) {var pathComponents;if(explicit) {pathComponents={};var unit;var done=false;function getUnitHook(desc,key) {if(!done) {if(key==="horizontal") {var value=desc[key];if(value[0]==="<unitDouble>") {unit=value[1][0];} done=true;}} return undefined;} pathComponents["pathComponents"]=jamEngine.simplifyList(pathComponentList,getUnitHook);if(unit) {pathComponents["unit"]=unit;}} else {pathComponents=[];var normalizedPathComponentList=jamEngine.normalizeJsonItem(pathComponentList,{meaningfulIds:true,parseFriendly:true});var data=[];var unit;function getValue(coordinate) {var value;switch(coordinate[0]) {case"<unitDouble>":unit=coordinate[1][0];value=coordinate[1][1];break;case"<double>":unit=undefined;value=coordinate[1];break;} return value;} var pathComponentListArr=normalizedPathComponentList[1];for(var i=0;i<pathComponentListArr.length;i++) {var pathComponent=pathComponentListArr[i][1][1];var shapeOperation=pathComponent["shapeOperation"][1][1];var windingFill=("windingFill"in pathComponent)?pathComponent["windingFill"][1]:false;var subpathsArr=[];var subpathListArr=pathComponent["subpathListKey"][1];for(var j=0;j<subpathListArr.length;j++) {var subpathsList=subpathListArr[j][1][1];var closedSubpath=("closedSubpath"in subpathsList)?subpathsList["closedSubpath"][1]:false;var pathPointsArr=[];var pointsArr=subpathsList["points"][1];for(var k=0;k<pointsArr.length;k++) {var pathPoint=pointsArr[k][1][1];var pathPointArr=[];var anchor=pathPoint["anchor"][1][1];pathPointArr.push([getValue(anchor["horizontal"]),getValue(anchor["vertical"])]);if("forward"in pathPoint) {var forward=pathPoint["forward"][1][1];pathPointArr.push([getValue(forward["horizontal"]),getValue(forward["vertical"])]);} if("backward"in pathPoint) {var backward=pathPoint["backward"][1][1];pathPointArr.push([getValue(backward["horizontal"]),getValue(backward["vertical"])]);} var smooth=("smooth"in pathPoint)?pathPoint["smooth"][1]:false;if(smooth) {pathPointArr.push(smooth);} pathPointsArr.push(pathPointArr);} var subpathArr=[];subpathArr.push(pathPointsArr);if(closedSubpath) {subpathArr.push(closedSubpath);} subpathsArr.push(subpathArr);} var pathComponentArr=[];pathComponentArr.push(shapeOperation);pathComponentArr.push(subpathsArr);if(windingFill) {pathComponentArr.push(windingFill);} data.push(pathComponentArr);} pathComponents.push(data);if(unit) {pathComponents.push(unit);}} return pathComponents;};}());}
// jamJSON.jsxinc v4.4 (minified)
if(typeof jamJSON!=='object') {var jamJSON={};(function() {var state;var stack;var container;var key;var value;var escapes={'\\':'\\','"':'"','/':'/','t':'\t','n':'\n','r':'\r','f':'\f','b':'\b'};var action={'{':{go:function() {stack.push({state:'ok'});container={};state='firstokey';},ovalue:function() {stack.push({container:container,state:'ocomma',key:key});container={};state='firstokey';},firstavalue:function() {stack.push({container:container,state:'acomma'});container={};state='firstokey';},avalue:function() {stack.push({container:container,state:'acomma'});container={};state='firstokey';}},'}':{firstokey:function() {var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},ocomma:function() {var pop=stack.pop();container[key]=value;value=container;container=pop.container;key=pop.key;state=pop.state;}},'[':{go:function() {stack.push({state:'ok'});container=[];state='firstavalue';},ovalue:function() {stack.push({container:container,state:'ocomma',key:key});container=[];state='firstavalue';},firstavalue:function() {stack.push({container:container,state:'acomma'});container=[];state='firstavalue';},avalue:function() {stack.push({container:container,state:'acomma'});container=[];state='firstavalue';}},']':{firstavalue:function() {var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},acomma:function() {var pop=stack.pop();container.push(value);value=container;container=pop.container;key=pop.key;state=pop.state;}},':':{colon:function() {if(container.hasOwnProperty(key)) {throw new SyntaxError("[jamJSON.parse] Duplicate key: “"+key+"”");} state='ovalue';}},',':{ocomma:function() {container[key]=value;state='okey';},acomma:function() {container.push(value);state='avalue';}},'true':{go:function() {value=true;state='ok';},ovalue:function() {value=true;state='ocomma';},firstavalue:function() {value=true;state='acomma';},avalue:function() {value=true;state='acomma';}},'false':{go:function() {value=false;state='ok';},ovalue:function() {value=false;state='ocomma';},firstavalue:function() {value=false;state='acomma';},avalue:function() {value=false;state='acomma';}},'null':{go:function() {value=null;state='ok';},ovalue:function() {value=null;state='ocomma';},firstavalue:function() {value=null;state='acomma';},avalue:function() {value=null;state='acomma';}}};var number={go:function() {state='ok';},ovalue:function() {state='ocomma';},firstavalue:function() {state='acomma';},avalue:function() {state='acomma';}};var string={go:function() {state='ok';},firstokey:function() {key=value;state='colon';},okey:function() {key=value;state='colon';},ovalue:function() {state='ocomma';},firstavalue:function() {state='acomma';},avalue:function() {state='acomma';}};var commentFunc=function(){};function debackslashify(text) {return text.replace(/\\(?:u(.{4})|([^u]))/g,function(a,b,c){return(b)?String.fromCharCode(parseInt(b,16)):escapes[c];});} jamJSON.parse=function(text,validate,allowComments) {if(validate) {var tx=/^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+\-]?[0-9]+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;var txc=/^[\x20\t\n\r]*(?:(\/(?:\/.*|\*(?:.|[\r\n])*?\*\/))|([,:\[\]{}]|true|false|null)|(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+\-]?[0-9]+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;var r;var i;var actionFunc;state='go';stack=[];try {while(true) {i=(allowComments)?1:0;r=(allowComments)?txc.exec(text):tx.exec(text);if(!r) {break;} if(allowComments&&r[1]) {actionFunc=commentFunc;} else if(r[i+1]) {actionFunc=action[r[i+1]][state];} else if(r[i+2]) {value=+r[i+2];actionFunc=number[state];} else {value=debackslashify(r[i+3]);actionFunc=string[state];} if(actionFunc) {actionFunc();text=text.slice(r[0].length);} else {break;}}} catch(e) {state=e;} if(state!=='ok'||/[^\x20\t\n\r]/.test(text)) {throw state instanceof SyntaxError?state:new SyntaxError("[jamJSON.parse] Invalid JSON");} return value;} else {return eval('('+text+')');}};var escapable=/[\\\"\x00-\x1F\x7F-\x9F\u00AD\u0600-\u0604\u070F\u17B4\u17B5\u200C-\u200F\u2028-\u202F\u2060-\u206F\uFEFF\uFFF0-\uFFFF]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};var gap;var indent;var prefixIndent;function quote(string) {escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return(typeof c==='string')?c:'\\u'+('0000'+a.charCodeAt(0).toString(16).toUpperCase()).slice(-4);})+'"':'"'+string+'"';} function str(value) {var i;var k;var v;var mind=gap;var partial;switch(typeof value) {case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value) {return'null';} gap+=indent;partial=[];if(value.constructor===Array) {for(i=0;i<value.length;i++) {partial[i]=str(value[i]);} v=(partial.length===0)?(gap?'[\n'+prefixIndent+mind+']':'[ ]'):(gap?'[\n'+prefixIndent+gap+partial.join(',\n'+prefixIndent+gap)+'\n'+prefixIndent+mind+']':'[ '+partial.join(', ')+' ]');gap=mind;return v;} else {for(k in value) {if(value.hasOwnProperty(k)) {v=str(value[k]);if(v) {partial.push(quote(k)+(gap&&((v.charAt(0)==='{')||(v.charAt(0)==='['))?':\n'+prefixIndent+gap:': ')+v);}}} v=(partial.length===0)?(gap?'{\n'+prefixIndent+mind+'}':'{ }'):(gap?'{\n'+prefixIndent+gap+partial.join(',\n'+prefixIndent+gap)+'\n'+prefixIndent+mind+'}':'{ '+partial.join(', ')+' }');gap=mind;return v;} default:throw new SyntaxError("[jamJSON.stringify] Invalid JSON");}} jamJSON.stringify=function(value,space,prefix) {var i;gap='';indent='';prefixIndent='';if(typeof space==='number') {for(i=0;i<space;i++) {indent+=' ';}} else if(typeof space==='string') {indent=space;} if(typeof prefix==='number') {for(i=0;i<prefix;i++) {prefixIndent+=' ';}} else if(typeof prefix==='string') {prefixIndent=prefix;} return prefixIndent+str(value);};}());}
// jamShapes.jsxinc v4.4 (minified)
if(typeof jamShapes!=='object') {var jamShapes={};(function() {jamShapes.isCustomShapesFile=function(file) {return(file.type==='8BCS')||file.name.match(/\.csh$/i);};jamShapes.isCustomShapesPrefsFile=function(file) {return file.name.match(/^CustomShapes.psp$/i);};jamShapes.dataFromCustomShapesFile=function(shapesFile,shapeIndex) {function skipBytes(file,byteCount) {file.seek(byteCount,1);} function readBEInt(file,byteCount) {var bytes=file.read(byteCount);var intValue=0;for(var index=0;index<byteCount;index++) {intValue=(intValue<<8)+bytes.charCodeAt(index);} return intValue;} function readBytes(file,byteCount) {return file.read(byteCount);} function readPascalString(file) {var stringLength=readBEInt(file,1);return readBytes(file,stringLength);} function readUnicodeStringWithPadding(file) {var unicodeString="";var unicodeLength=readBEInt(file,4);for(var index=0;index<unicodeLength;index++) {var unicodeChar=readBEInt(file,2);if(unicodeChar!==0) {unicodeString+=String.fromCharCode(unicodeChar);}} if((unicodeLength%2)!==0) {skipBytes(file,2);} return unicodeString;} function readSignedBEInt32(file) {var intValue=readBEInt(file,4);return(intValue<0x80000000)?intValue:(intValue-0x100000000);} function readSignedBEFixed32(file) {return readSignedBEInt32(file)/0x1000000;} var file;if(typeof shapesFile==='string') {file=new File(shapesFile);} else if(shapesFile instanceof File) {file=shapesFile;} else {throw new Error('[jamShapes.dataFromCustomShapesFile] Invalid argument');} var selectorStrings=["closedLength","closedLinked","closedUnlinked","openLength","openLinked","openUnlinked","pathFill","clipboard","initialFill"];var fileData;if(file.open("r")) {try {file.encoding='BINARY';var magicNumber=file.read(4);if(magicNumber==='cush') {var fileVersion=readBEInt(file,4);if(fileVersion===2) {fileData={};fileData["fileVersion"]=fileVersion;var customShapes=[];var customShapeCount=readBEInt(file,4);for(var customShapeIndex=0;customShapeIndex<customShapeCount;customShapeIndex++) {var customShape={};customShape["name"]=localize(readUnicodeStringWithPadding(file));var unknown=jamUtils.dataToHexaString(readBytes(file,4));var dataLength=readBEInt(file,4);var dataStart=file.tell();customShape["ID"]=readPascalString(file);if((typeof shapeIndex==='undefined')||(shapeIndex===customShapeIndex)) {var top=readSignedBEInt32(file);var left=readSignedBEInt32(file);var bottom=readSignedBEInt32(file);var right=readSignedBEInt32(file);customShape["bounds"]=[top,left,bottom,right];var pathRecords=[];var pathRecordCount=Math.floor((dataStart+dataLength-file.tell())/(2+8+8+8));for(var pathRecordIndex=0;pathRecordIndex<pathRecordCount;pathRecordIndex++) {var pathRecord=[];var selector=readBEInt(file,2);if((selector>=0)&&(selector<selectorStrings.length)) {pathRecord.push(selectorStrings[selector]);} else {throw new Error("[jamShapes.dataFromCustomShapesFile] Unknown selector: "+selector);} switch(selector) {case 6:pathRecord.push(null);skipBytes(file,24);break;case 8:pathRecord.push(readBEInt(file,2));skipBytes(file,24-2);break;case 0:case 3:pathRecord.push(readBEInt(file,2));skipBytes(file,24-2);break;case 1:case 2:case 4:case 5:pathRecord.push ([[readSignedBEFixed32(file),readSignedBEFixed32(file)],[readSignedBEFixed32(file),readSignedBEFixed32(file)],[readSignedBEFixed32(file),readSignedBEFixed32(file)]]);break;default:pathRecord.push(null);skipBytes(file,24);break;} pathRecords.push(pathRecord);} customShape["pathRecords"]=pathRecords;} file.seek(dataStart+dataLength,0);customShapes.push(customShape);} fileData["customShapes"]=customShapes;} else {fileData="Unrecognized custom shapes file version: "+fileVersion;}} else {fileData="Unrecognized custom shapes file magic number: '"+magicNumber+"'";}} catch(e) {fileData=e.message;} finally {file.close();}} else {fileData="Cannot open file";} return fileData;};jamShapes.debugMode=false;jamShapes.pathComponentsFromCustomShape=function(customShape,shapeOperation,bounds,constrainProportions) {var rectangle=bounds[0];var unit=bounds[1];var left=rectangle[0];var top=rectangle[1];var right=rectangle[2];var bottom=rectangle[3];var width=right-left;var height=bottom-top;if(constrainProportions) {var adjustmentFactor=1;if((typeof unit!=='undefined')&&(jamEngine.uniIdStrToId(unit)===jamEngine.uniIdStrToId("percentUnit"))) {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescObj=jamEngine.jsonGet([{"document":["<enumerated>",["ordinal","first"]]}]);jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;adjustmentFactor=resultDescObj["width"][1][1]/resultDescObj["height"][1][1];} var boundsRatio=(width/height)*adjustmentFactor;var shapeWidth=customShape["bounds"][3]-customShape["bounds"][1];var shapeHeight=customShape["bounds"][2]-customShape["bounds"][0];var shapeRatio=shapeWidth/shapeHeight;if(shapeRatio>boundsRatio) {shapeHeight=(width/shapeRatio)*adjustmentFactor;top+=(height-shapeHeight)/2;height=shapeHeight;} else {shapeWidth=(height*shapeRatio)/adjustmentFactor;left+=(width-shapeWidth)/2;width=shapeWidth;}} var subpaths=[];if(this.debugMode) {var subpath=[[[left,top]],[[left+width,top]],[[left+width,top+height]],[[left,top+height]]];subpaths.push([subpath,true]);} else {var pathRecords=customShape["pathRecords"];var subLength=0;for(var pathRecordIndex=0;pathRecordIndex<pathRecords.length;pathRecordIndex++) {var pathRecord=pathRecords[pathRecordIndex];var selector=pathRecord[0];var data=pathRecord[1];switch(selector) {case"closedLength":case"openLength":subLength=data;var closedSubpath=(selector==="closedLength");var subpath=[];break;case"closedLinked":case"closedUnlinked":case"openLinked":case"openUnlinked":var backward=[left+(data[0][1]*width),top+(data[0][0]*height)];var anchor=[left+(data[1][1]*width),top+(data[1][0]*height)];var forward=[left+(data[2][1]*width),top+(data[2][0]*height)];var smooth=(selector==="closedLinked")||(selector==="openLinked");subpath.push([anchor,forward,backward,smooth]);if(--subLength===0) {subpaths.push([subpath,closedSubpath]);} break;}}} var pathComponentsArr=[[[shapeOperation,subpaths]]];if(unit) {pathComponentsArr.push(unit);} return pathComponentsArr;};}());}
// jamUtils.jsxinc v4.4 (minified)
if(typeof jamUtils!=='object') {var jamUtils={};(function() {jamUtils.toDistanceUnit=function(amount,amountBasePerInch) {return(amount/amountBasePerInch)*72.0;};jamUtils.fromDistanceUnit=function(amount,amountBasePerInch) {return(amount/72.0)*amountBasePerInch;};jamUtils.fontExists=function(fontPostScriptName) {var useDOM=true;var found=false;if(useDOM) {for(var i=0;i<app.fonts.length;i++) {if(app.fonts[i].postScriptName===fontPostScriptName) {found=true;break;}}} else {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescriptorObj=jamEngine.jsonGet ([["property",["<property>","fontList"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var fontPostScriptNameArr=resultDescriptorObj["fontList"][1][1]["fontPostScriptName"][1];for(var i=0;i<fontPostScriptNameArr.length;i++) {if(fontPostScriptNameArr[i][1]===fontPostScriptName) {found=true;break;}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;} return found;};jamUtils.loadAction=function(action,actionSet,actionsFilePath) {try {jamEngine.jsonGet([["action",["<name>",action]],["actionSet",["<name>",actionSet]]]);var found=true;} catch(e) {var found=false;} if(!found) {jamEngine.jsonPlay("open",{"target":["<path>",actionsFilePath]});}};jamUtils.loadActionSet=function(actionSet,actionsFilePath) {try {jamEngine.jsonGet([["actionSet",["<name>",actionSet]]]);var found=true;} catch(e) {var found=false;} if(!found) {jamEngine.jsonPlay("open",{"target":["<path>",actionsFilePath]});}};jamUtils.loadPreset=function(presetProperty,presetName,presetFilePath) {var useDOM=false;var useOpen=true;var classes={"brush":"brush","colors":"color","gradientClassEvent":"gradientClassEvent","style":"styleClass","pattern":"'PttR'","shapingCurve":"shapingCurve","customShape":"customShape","toolPreset":"toolPreset"};var presetClass=classes[presetProperty];var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var found=false;var resultDescriptorObj=jamEngine.jsonGet ([["property",["<property>","presetManager"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var presetManagerArr=resultDescriptorObj["presetManager"][1];for(var i=0;i<presetManagerArr.length;i++) {var presets=presetManagerArr[i][1];if(presets[0]===presetClass) {var presetsArr=presets[1]["name"][1];for(var j=0;j<presetsArr.length;j++) {if(presetsArr[j][1]===presetName) {found=true;break;}} break;}} if(!found) {if(useDOM) {app.load(new File(presetFilePath));} else if(useOpen) {jamEngine.jsonPlay("open",{"target":["<path>",presetFilePath]});} else {jamEngine.jsonPlay ("set",{"target":["<reference>",[["property",["<property>",presetProperty]],["application",["<enumerated>",["ordinal","targetEnum"]]]]],"to":["<path>",presetFilePath],"append":["<boolean>",true]});}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;};function getFileObject(file) {var fileObject;if(file instanceof File) {fileObject=file;} else if(typeof file==='string') {fileObject=new File(file);} else {throw new Error('[jamUtils getFileObject] Invalid argument');} return fileObject;} jamUtils.readTextFile=function(textFile) {var text=null;var file=getFileObject(textFile);if(file.open("r")) {text=file.read();file.close();} return text;};jamUtils.readJsonFile=function(jsonFile) {return jamJSON.parse(this.readTextFile(jsonFile),true);};jamUtils.writeTextFile=function(textFile,text) {var file=getFileObject(textFile);if(file.open('w','TEXT')) {file.encoding='UTF-8';file.lineFeed='unix';file.write('\uFEFF');file.write(text);file.close();}};jamUtils.writeJsonFile=function(jsonFile,data,space) {this.writeTextFile(jsonFile,jamJSON.stringify(data,space));};jamUtils.cloneData=function(data) {var clone;if(data===null) {clone=data;} else if(data.constructor===Object) {clone={};for(var k in data) {if(data.hasOwnProperty(k)) {clone[k]=this.cloneData(data[k]);}}} else if(data.constructor===Array) {clone=[];for(var i=0;i<data.length;i++) {clone.push(this.cloneData(data[i]));}} else {clone=data;} return clone;};jamUtils.mergeData=function(data,defaultData) {for(var k in defaultData) {if(defaultData.hasOwnProperty(k)) {if(k in data) {if((defaultData[k]!==null)&&(defaultData[k].constructor===Object)) {data[k]=this.mergeData(data[k],defaultData[k]);}} else {data[k]=this.cloneData(defaultData[k]);}}} return data;};var jsonCustomOptionsStringKey="jsonCustomOptions";jamUtils.getCustomOptions=function(signature,defaultOptions) {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=false;try {var resultObj=jamEngine.classIdAndActionDescriptorToJson(jamEngine.uniIdStrToId(signature),app.getCustomOptions(signature));var customOptions=jamJSON.parse(resultObj["<descriptor>"][jsonCustomOptionsStringKey]["<string>"],true)} catch(e) {var customOptions={};} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;return this.mergeData(customOptions,defaultOptions);};jamUtils.putCustomOptions=function(signature,customOptions,persistent) {var descriptorObj={};descriptorObj[jsonCustomOptionsStringKey]=["<string>",jamJSON.stringify(customOptions)];app.putCustomOptions(signature,jamEngine.jsonToActionDescriptor(descriptorObj),persistent);};jamUtils.eraseCustomOptions=function(signature) {app.eraseCustomOptions(signature);};jamUtils.dataToHexaString=function(dataString,lowercase) {var hexaDigits=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];var hexaString="";var length=dataString.length;for(var index=0;index<length;index++) {var dataByte=dataString.charCodeAt(index);if((dataByte>=0x00)&&(dataByte<=0xFF)) {hexaString+=hexaDigits[(dataByte&0xF0)>>4]+hexaDigits[dataByte&0x0F];} else {throw new Error("[jamUtils.dataToHexaString] Invalid data string");}} if(lowercase) {hexaString=hexaString.toLowerCase();} return hexaString;};jamUtils.hexaToDataString=function(hexaString) {var dataString="";var length=hexaString.length;if(((length%2)===0)&&(/^[0-9A-Fa-f]*$/.test(hexaString))) {for(var index=0;index<length;index+=2) {var byteString=hexaString.slice(index,index+2);dataString+=String.fromCharCode(parseInt(byteString,16));}} else {throw new Error("[jamUtils.hexaToDataString] Invalid hexa string");} return dataString;};}());}

//------------------------------------------------------------------------------

var customShapesFile = null;
var customShapes = null;
var cellCount;
var cellRows;
var docWidth;
var docHeight;
var signature = "json-action-manager-preview-custom-shapes-file-options";
var presetsFolderPath = app.path + '/' + Folder.encode (localize ("$$$/ApplicationPresetsFolder/Presets=Presets"));
var backgroundName = "Background";
var whiteColor = [ "grayscale", [ 0 ] ];
var gridName = "Grid";
var gridColor = [ "grayscale", [ 100 ] ];
var gridOpacity = 50;
var shapeColor = [ "grayscale", [ 100 ] ];
var docResolution = 72;
var defaultOptions =
{
	customShapesFileName: null,
	useShapeLayers: true,
	showGrid: true,
	cellColumns: 8,
	cellSize: 64,
	cellSpacing: 1,
	cellPaddingPercent: 5
};

//------------------------------------------------------------------------------

function numberString (number, string)
{
	return "" + number + " " + string + (number > 1 ? "s" : "");
}

//------------------------------------------------------------------------------

function elapsedTimeString (milliSeconds)
{
	var seconds = Math.floor (milliSeconds / 1000);
	var timeString;
	if (seconds < 1)
	{
		timeString = "less than 1 second";
	}
	else
	{
		var minutes =  Math.floor (seconds / 60);
		if (minutes < 1)
		{
			timeString = numberString (seconds, "second");
		}
		else
		{
			seconds = Math.floor (seconds % 60);
			timeString = numberString (minutes, "minute") + ( seconds > 0 ? " " + numberString (seconds, "second") : "");
		}
	}
	return timeString;
}

//------------------------------------------------------------------------------

function displayDialog ()
{
	function isCshFile (f)
	{
		return jamShapes.isCustomShapesFile (f) || jamShapes.isCustomShapesPrefsFile (f);
	}
	function updateInfo ()
	{
		cellCount = customShapes.length;
		cellRows = Math.floor ((cellCount - 1) / customOptions.cellColumns) + 1;
		docWidth = (customOptions.cellColumns * (customOptions.cellSpacing + customOptions.cellSize)) + customOptions.cellSpacing;
		docHeight = (cellRows * (customOptions.cellSpacing + customOptions.cellSize)) + customOptions.cellSpacing;
		cellsText.text = "" + customOptions.cellColumns + " x " + cellRows + " = " + numberString (customOptions.cellColumns * cellRows, "cell");
		sizeText.text = "" + docWidth + " x " + docHeight + " pixels";
		showGridCheckbox.enabled = customOptions.cellSpacing > 0;
	}
	function updateDialog ()
	{
		if (customShapes === null)
		{
			fileName.text = "<None>";
			fileName.helpTip = "Click the Choose... button";
			shapesText.text = "";
			cellsText.text = "";
			sizeText.text = "";
			resolutionText.text = "";
			fileName.enabled = false;
			superGroup.enabled = false;
			okButton.enabled = false;
		}
		else
		{
			fileName.enabled = true;
			fileName.text = File.decode (customShapesFile.name);
			fileName.helpTip = customShapesFile.fsName;
			shapesText.text = numberString (customShapes.length, "shape");
			updateInfo ();
			resolutionText.text = "(" + docResolution + " dpi)";
			superGroup.enabled = true;
			okButton.enabled = true;
		}
	}
	var dialog = new Window ('dialog', "Preview Custom Shapes File");
	dialog.orientation = "column";
	var fileGroup = dialog.add ('group');
	fileGroup.alignment = "left";
	fileGroup.orientation = "row";
	fileGroup.alignChildren = [ "fill", "center" ];
	fileGroup.add ('statictext', undefined, "Custom Shapes File:");
	var fileName = fileGroup.add ('edittext', undefined, "", { readonly: true });
	fileName.characters = 28;
	var chooseFileButton = fileGroup.add ('button', undefined, "Choose...");
	chooseFileButton.helpTip = "Choose a custom shapes file";
	chooseFileButton.onClick = function ()
	{
		var cshFilter =
			(File.fs === "Macintosh") ?
				function (f) { return (f instanceof Folder) || isCshFile (f) } :
				"Custom Shapes Files:*.csh,Custom Shapes Preferences File:CustomShapes.psp,All Files:*.*";
		var presetFile = (customShapesFile !== null) ? customShapesFile : new Folder (presetsFolderPath);
		var inFile = presetFile.openDlg ("Choose a custom shapes file:", cshFilter);
		if (inFile !== null)
		{
			var inFileData = jamShapes.dataFromCustomShapesFile (inFile, -1)
			if (typeof inFileData === 'string')
			{
				alert (inFileData + "\n" + "Custom shapes file: “" + File.decode (inFile.name) + "”");
			}
			else
			{
				customShapesFile = inFile;
				customShapes = inFileData["customShapes"];
			}
			updateDialog ();
		}
	};
	var superGroup = dialog.add ('group');
	superGroup.orientation = "row";
	superGroup.alignment = "fill";
	var optionsGroup = superGroup.add ('group');
	optionsGroup.orientation = "column";
	optionsGroup.alignment = "left";
	var checkboxesGroup = optionsGroup.add ('group');
	checkboxesGroup.orientation = "row";
	checkboxesGroup.alignment = "fill";
	checkboxesGroup.alignChildren = [ "fill", "center" ];
	var useShapeLayersCheckbox = checkboxesGroup.add ('checkbox', undefined, 'Use Shape Layers');
	useShapeLayersCheckbox.value = customOptions.useShapeLayers;
	useShapeLayersCheckbox.onClick = function () { customOptions.useShapeLayers = this.value; };
	var showGridCheckbox = checkboxesGroup.add ('checkbox', undefined, 'Show Grid');
	showGridCheckbox.value = customOptions.showGrid;
	showGridCheckbox.onClick = function () { customOptions.showGrid = this.value; };
	var cellColumnsGroup = optionsGroup.add ('group');
	cellColumnsGroup.orientation = "row";
	cellColumnsGroup.alignment = "fill";
	cellColumnsGroup.add ("statictext", undefined, 'Columns:');
	var cellColumnsSlider = cellColumnsGroup.add ("slider", undefined, customOptions.cellColumns, 1, 32);
	cellColumnsSlider.size = [ 128, 16 ];
	cellColumnsSlider.onChanging = function ()
	{
		cellColumnsText.text = customOptions.cellColumns = Math.floor (this.value);
		updateInfo ();
	};
	var cellColumnsText = cellColumnsGroup.add ("edittext", undefined, customOptions.cellColumns, { readonly: true });
	cellColumnsText.characters = 4;
	cellColumnsGroup.add ("statictext", undefined, 'cells');
	var cellSizeGroup = optionsGroup.add ('group');
	cellSizeGroup.orientation = "row";
	cellSizeGroup.alignment = "fill";
	cellSizeGroup.add ("statictext", undefined, 'Cell Size:');
	var cellSizeSlider = cellSizeGroup.add ("slider", undefined, Math.floor (Math.log (customOptions.cellSize) / Math.log (2)), 5, 10);
	cellSizeSlider.size = [ 128, 16 ];
	cellSizeSlider.onChanging = function ()
	{
		cellSizeText.text = customOptions.cellSize = Math.floor (Math.pow (2, Math.round (this.value)));
		updateInfo ();
	};
	cellSizeSlider.onChange = function ()
	{
		this.value = Math.floor (Math.log (customOptions.cellSize) / Math.log (2));
	};
	var cellSizeText = cellSizeGroup.add ("edittext", undefined, customOptions.cellSize, { readonly: true });
	cellSizeText.characters = 4;
	cellSizeGroup.add ("statictext", undefined, 'pixels');
	var cellSpacingGroup = optionsGroup.add ('group');
	cellSpacingGroup.orientation = "row";
	cellSpacingGroup.alignment = "fill";
	cellSpacingGroup.add ("statictext", undefined, 'Cell Spacing:');
	var cellSpacingSlider = cellSpacingGroup.add ("slider", undefined, customOptions.cellSpacing, 0, 32);
	cellSpacingSlider.size = [ 128, 16 ];
	cellSpacingSlider.onChanging = function ()
	{
		cellSpacingText.text = customOptions.cellSpacing = Math.floor (this.value);
		updateInfo ();
	};
	var cellSpacingText = cellSpacingGroup.add ("edittext", undefined, customOptions.cellSpacing, { readonly: true });
	cellSpacingText.characters = 2;
	cellSpacingGroup.add ("statictext", undefined, 'pixels');
	var cellPaddingGroup = optionsGroup.add ('group');
	cellPaddingGroup.orientation = "row";
	cellPaddingGroup.alignment = "fill";
	cellPaddingGroup.add ("statictext", undefined, 'Cell Padding:');
	var cellPaddingSlider = cellPaddingGroup.add ("slider", undefined, customOptions.cellPaddingPercent, 1, 49);
	cellPaddingSlider.size = [ 128, 16 ];
	cellPaddingSlider.onChanging = function ()
	{
		cellPaddingText.text = customOptions.cellPaddingPercent = Math.floor (this.value);
	};
	var cellPaddingText = cellPaddingGroup.add ("edittext", undefined, customOptions.cellPaddingPercent, { readonly: true });
	cellPaddingText.characters = 2;
	cellPaddingGroup.add ("statictext", undefined, '%');
	var infoFrame = superGroup.add ('panel', undefined, "Preview Info", { borderStyle: "etched" })
	infoFrame.alignment = [ "fill", "fill" ];
	infoFrame.alignChildren = [ "fill", "center" ];
	var shapesText = infoFrame.add ('statictext', undefined, "");
	var cellsText = infoFrame.add ('statictext', undefined, "");
	var sizeText = infoFrame.add ('statictext', undefined, "");
	var resolutionText = infoFrame.add ('statictext', undefined, "");
	var buttonsGroup = dialog.add ('group');
	buttonsGroup.alignment = [ "right", "bottom" ];
	buttonsGroup.orientation = "row";
	buttonsGroup.alignChildren = "fill";
	var cancelButton = buttonsGroup.add ('button', undefined, 'Cancel', { name: "cancel" });
	cancelButton.onClick = function ()
	{
		dialog.close (false);
	};
	var okButton = buttonsGroup.add ('button', undefined, 'OK', { name: "ok" });
	okButton.onClick = function ()
	{
		customOptions.customShapesFileName = (customShapesFile !== null) ? customShapesFile.fsName : null;
		dialog.close (true);
	};
	dialog.onShow = function ()
	{
		if (customOptions.customShapesFileName)
		{
			var inFile = new File (customOptions.customShapesFileName);
			if (inFile.exists && isCshFile (inFile))
			{
				var inFileData = jamShapes.dataFromCustomShapesFile (inFile, -1);
				if (typeof inFileData === 'string')
				{
					alert (inFileData + "\n" + "Custom shapes file: “" + File.decode (inFile.name) + "”");
				}
				else
				{
					customShapesFile = inFile;
					customShapes = inFileData["customShapes"];
				}
			}
		}
		updateDialog ();
	};
	return dialog.show ();
}

//------------------------------------------------------------------------------

function drawGrid ()
{
	var left;
	var top;
	var right;
	var bottom;
	var gridPathComponents = [ ];
	for (var row = 0; row <= cellRows; row++)
	{
		left = 0;
		top = row * (customOptions.cellSpacing + customOptions.cellSize);
		right = docWidth;
		bottom = top + customOptions.cellSpacing;
		gridPathComponents.push ([ "add", [ [ [ [ [ left, top ] ], [ [ right, top ] ], [ [ right, bottom ] ], [ [ left, bottom ] ] ], true ] ] ]);
	}
	for (var column = 0; column <= customOptions.cellColumns; column++)
	{
		left = column * (customOptions.cellSpacing + customOptions.cellSize);
		top = 0;
		right = left + customOptions.cellSpacing;
		bottom = docHeight;
		gridPathComponents.push ([ "add", [ [ [ [ [ left, top ] ], [ [ right, top ] ], [ [ right, bottom ] ], [ [ left, bottom ] ] ], true ] ] ]);
	}
	jamEngine.jsonPlay
	(
		"set",
		{
			"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
			"to": jamHelpers.toPathComponentList ([ gridPathComponents, "pixelsUnit"])
		}
	);
	jamEngine.jsonPlay
	(
		"combine",
		{ "target": { "<reference>": [ { "path": { "<enumerated>": { "ordinal": "targetEnum" } } } ] } }
	);
	if (customOptions.useShapeLayers)
	{
		jamEngine.jsonPlay
		(
			"make",
			{
				"target": { "<reference>": [ { "contentLayer": { "<class>": null } } ] },
				"using":
				{
					"<object>":
					{
						"contentLayer":
						{
							"name": { "<string>": gridName },
							"opacity": { "<integer>": gridOpacity },
							"type":
							{
								"<object>":
								{
									"solidColorLayer":
									{
										"color": jamHelpers.toColorObject (gridColor)
									}
								}
							}
						}
					}
				}
			}
		);
	}
	else
	{
		jamEngine.jsonPlay
		(
			"make",
			{
				"target": { "<reference>": [ { "layer": { "<class>": null } } ] },
				"using":
				{
					"<object>":
					{
						"layer":
						{
							"name": { "<string>": gridName },
							"opacity": { "<integer>": gridOpacity }
						}
					}
				}
			}
		);
		jamEngine.jsonPlay
		(
			"fill",
			{
				"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
				"wholePath": { "<boolean>": true },
				"using": { "<enumerated>": { "fillContents": "color" } },
				"color": jamHelpers.toColorObject (gridColor),
				"opacity": { "<unitDouble>": { "percentUnit": 100 } },
				"mode": { "<enumerated>": { "blendMode": "normal" } },
				"radius": { "<unitDouble>": { "pixelsUnit": 0.0 } },
				"antiAlias": { "<boolean>": true }
			}
		);
	}
	jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
	if (!customOptions.showGrid)
	{
		jamEngine.jsonPlay
		(
			"hide",
			{
				"target": { "<reference>": [ { "layer": { "<enumerated>": { "ordinal": "targetEnum" } } } ] }
			}
		);
	}
}

//------------------------------------------------------------------------------

function drawShapes (layerName)
{
	if (customOptions.useShapeLayers)
	{
		jamEngine.jsonPlay
		(
			"make",
			{
				"target": { "<reference>": [ { "layerSection": { "<class>": null } } ] },
				"using": { "<object>": { "layerSection": { "name": { "<string>": layerName } } } }
			}
		);
	}
	else
	{
		jamEngine.jsonPlay
		(
			"make",
			{
				"target": { "<reference>": [ { "layer": { "<class>": null } } ] },
				"using": { "<object>": { "layer": { "name": { "<string>": layerName } } } }
			}
		);
	}
	var left;
	var top;
	var right;
	var bottom;
	var cellIndex = 0;
	for (var row = 0; row < cellRows; row++)
	{
		for (var column = 0; column < customOptions.cellColumns; column++)
		{
			if (cellIndex < cellCount)
			{
				left = customOptions.cellSpacing + (column * (customOptions.cellSize + customOptions.cellSpacing));
				top = customOptions.cellSpacing + (row * (customOptions.cellSize + customOptions.cellSpacing));
				right = left + customOptions.cellSize;
				bottom = top + customOptions.cellSize;
				var cellPadding = customOptions.cellSize * customOptions.cellPaddingPercent / 100;
				var pathComponents =
					jamShapes.pathComponentsFromCustomShape
					(
						customShapes[cellIndex],
						"add",
						[ [ left + cellPadding, top + cellPadding, right - cellPadding, bottom - cellPadding ], "pixelsUnit" ],
						true
					);
				jamEngine.jsonPlay
				(
					"set",
					{
						"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
						"to": jamHelpers.toPathComponentList (pathComponents)
					}
				);
				if (customOptions.useShapeLayers)
				{
					jamEngine.jsonPlay
					(
						"make",
						{
							"target": { "<reference>": [ { "contentLayer": { "<class>": null } } ] },
							"using":
							{
								"<object>":
								{
									"contentLayer":
									{
										"name": { "<string>": customShapes[cellIndex]["name"] },
										"type":
										{
											"<object>":
											{
												"solidColorLayer":
												{
													"color": jamHelpers.toColorObject (shapeColor)
												}
											}
										}
									}
								}
							}
						}
					);
				}
				else
				{
					jamEngine.jsonPlay
					(
						"fill",
						{
							"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
							"wholePath": { "<boolean>": true },
							"using": { "<enumerated>": { "fillContents": "color" } },
							"color": jamHelpers.toColorObject (shapeColor),
							"opacity": { "<unitDouble>": { "percentUnit": 100 } },
							"mode": { "<enumerated>": { "blendMode": "normal" } },
							"radius": { "<unitDouble>": { "pixelsUnit": 0.0 } },
							"antiAlias": { "<boolean>": true }
						}
					);
				}
			}
			cellIndex++;
		}
	}
	jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
}

//------------------------------------------------------------------------------

var appVersion = parseInt (app.version);
if (appVersion >= 10)	// CS3
{
	var customOptions = jamUtils.getCustomOptions (signature, defaultOptions);
	if (displayDialog ())
	{
		jamUtils.putCustomOptions (signature, customOptions, true);
		var beginDate = new Date ();
		customShapes = jamShapes.dataFromCustomShapesFile (customShapesFile)["customShapes"];
		var parsingDate = new Date ();
		if (customShapes)
		{
			var docName = File.decode (customShapesFile.name.replace (/\.(csh|psp)$/i, ''));
			jamEngine.jsonPlay
			(
				"make",
				{
					"new":
					{
						"<object>":
						{
							"document":
							{
								"name": { "<string>": docName },
								"mode": { "<class>": "RGBColorMode" },
								"width": { "<unitDouble>": { "distanceUnit": jamUtils.toDistanceUnit (docWidth, docResolution) } },
								"height": { "<unitDouble>": { "distanceUnit": jamUtils.toDistanceUnit (docHeight, docResolution) } },
								"resolution": { "<unitDouble>": { "densityUnit": docResolution } },
								"depth": { "<integer>": 8 },
								"fill": { "<enumerated>": { "fill": (customOptions.useShapeLayers ? "transparent" : "white") } },
								"profile": { "<string>": "sRGB IEC61966-2.1" }
							}
						}
					}
				}
			);
			if (customOptions.useShapeLayers)
			{
				jamEngine.jsonPlay
				(
					"make",
					{
						"target": { "<reference>": [ { "contentLayer": { "<class>": null } } ] },
						"using":
						{
							"<object>":
							{
								"contentLayer":
								{
									"name": { "<string>": backgroundName },
									"type":
									{
										"<object>":
										{
											"solidColorLayer":
											{
												"color": jamHelpers.toColorObject (whiteColor)
											}
										}
									}
								}
							}
						}
					}
				);
				try
				{
	    			jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "channel": { "<enumerated>": { "channel": "mask" } } } ] } });
	    		}
	    		catch (e)
	    		{
	    		}
			}
			if (customOptions.cellSpacing > 0)
			{
				app.activeDocument.suspendHistory ("Draw Grid", "drawGrid ();");
			}
			var layerName = docName  + ' ' + '(' + numberString (cellCount, 'shape') + ')';
			app.activeDocument.suspendHistory ("Draw Shapes", "drawShapes (layerName);");
			if (customOptions.useShapeLayers)
			{
				jamEngine.jsonPlay ("select", { "target": { "<reference>": [ { "layer": { "<name>": backgroundName } } ] } });
			}
			else
			{
				jamEngine.jsonPlay ("select", { "target": { "<reference>": [ { "backgroundLayer": { "<property>": "background" } } ] } });
			}
			var endDate = new Date ();
			//
			var title = docName;
			var author = "Generated by “Preview Custom Shapes File.js” © Michel MARIANI <http://www.tonton-pixel.com/blog/>"
			var description =
				numberString (customShapes.length, "shape") + "; " +
				customOptions.cellColumns + " x " + cellRows + " = " + numberString (customOptions.cellColumns * cellRows, "cell") + "; " +
				docWidth + " x " + docHeight + " pixels" + 
				" (" + docResolution + " dpi);" + "\r" +
				"parsing time: " + elapsedTimeString (parsingDate.getTime () - beginDate.getTime ()) + "; " +
				"drawing time: " + elapsedTimeString (endDate.getTime () - parsingDate.getTime ());
			jamEngine.jsonPlay
			(
				"set",
				{
					"target":
					{
						"<reference>":
						[
							{ "property": { "<property>": "fileInfo" } },
							{ "document": { "<enumerated>": { "ordinal": "targetEnum" } } }
						]
					},
					"to":
					{
						"<object>":
						{
							"fileInfo":
							{
								"objectName": { "<string>": title },
								"byline": { "<string>": author },
								"caption": { "<string>": description }
							}
						}
					}
				}
			);
		}
	}
}
else
{
	alert ("Sorry, this script requires Photoshop CS3 or later.");
}

//------------------------------------------------------------------------------

