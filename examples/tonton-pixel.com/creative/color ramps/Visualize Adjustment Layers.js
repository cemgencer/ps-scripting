﻿/*

<javascriptresource>
<name>Visualize Adjustment Layers...</name>
<about>"Visualize Adjustment Layers" v1.6

Create a specialized RGB document used to interactively visualize (as curves map, gradient map and color table) the effect of cumulated adjustment layers.

Creative script using the "JSON Action Manager" scripting library.
© 2014-2015 Michel MARIANI.
</about>
<menu>automate</menu>
<category>JSON Action Manager Color Ramps</category>
</javascriptresource>

*/

//------------------------------------------------------------------------------
// File: Visualize Adjustment Layers.js
// Version: 1.6
// Release Date: 2015-07-23
// Copyright: © 2014-2015 Michel MARIANI <http://www.tonton-pixel.com/blog/>
// Licence: GPL <http://www.gnu.org/licenses/gpl.html>
//------------------------------------------------------------------------------
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//------------------------------------------------------------------------------
// Version History:
//  1.6:
//  - Used new version 4.4.1 of scripting library modules.
//  1.5:
//  - Used new version 4.4 of scripting library modules.
//  1.4:
//  - Used new version 4.3 of jamHelpers scripting library module.
//  1.3:
//  - Fixed minor bug.
//  1.2:
//  - Added options dialog.
//  1.1:
//  - Removed use of suspend history for drawing grids, not necessary anymore.
//  - Added creation of history snapshot at the end to allow reset to default.
//  1.0:
//  - Initial release.
//------------------------------------------------------------------------------

// jamEngine.jsxinc v4.4.1 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}
// jamHelpers.jsxinc v4.4 (minified)
if(typeof jamHelpers!=='object') {var jamHelpers={};(function() {jamHelpers.toColorObject=function(color) {var colorObject;if(color.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"book":case"name":typedValue=["<string>",localize(value)];break;case"bookKey":typedValue=["<data>",value];break;case"bookID":typedValue=["<integer>",value];break;case"a":case"b":case"black":case"blue":case"brightness":case"cyan":case"gray":case"green":case"luminance":case"magenta":case"red":case"saturation":case"yellowColor":typedValue=["<double>",value];break;case"hue":typedValue=["<unitDouble>",["angleUnit",value]];break;case"color":var colorClass;if((("book"in value)&&("name"in value))||(("bookID"in value)&&("bookKey"in value))) {colorClass="bookColor";} else if(("cyan"in value)&&("magenta"in value)&&("yellowColor"in value)&&("black"in value)) {colorClass="CMYKColorClass";} else if("gray"in value) {colorClass="grayscale";} else if(("hue"in value)&&("saturation"in value)&&("brightness"in value)) {colorClass="HSBColorClass";} else if(("luminance"in value)&&("a"in value)&&("b"in value)) {colorClass="labColor";} else if(("red"in value)&&("green"in value)&&("blue"in value)) {colorClass="RGBColor";} typedValue=["<object>",[colorClass,restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} colorObject=restoreDesc({"color":color})["color"];} else if(color.constructor===Array) {var colorClass=color[0];switch(jamEngine.uniIdStrToId(colorClass)) {case jamEngine.uniIdStrToId("bookColor"):switch(color[1].length) {case 2:if(typeof color[1][0]==='string') {colorObject=["<object>",["bookColor",{"book":["<string>",color[1][0]],"name":["<string>",color[1][1]]}]];} else if(typeof color[1][0]==='number') {colorObject=["<object>",["bookColor",{"bookID":["<integer>",color[1][0]],"bookKey":["<data>",color[1][1]]}]];} break;case 4:colorObject=["<object>",["bookColor",{"book":["<string>",color[1][0]],"name":["<string>",color[1][1]],"bookID":["<integer>",color[1][2]],"bookKey":["<data>",color[1][3]]}]];break;} break;case jamEngine.uniIdStrToId("CMYKColorClass"):colorObject=["<object>",["CMYKColorClass",{"cyan":["<double>",color[1][0]],"magenta":["<double>",color[1][1]],"yellowColor":["<double>",color[1][2]],"black":["<double>",color[1][3]]}]];break;case jamEngine.uniIdStrToId("grayscale"):colorObject=["<object>",["grayscale",{"gray":["<double>",(color[1].constructor===Array)?color[1][0]:color[1]]}]];break;case jamEngine.uniIdStrToId("HSBColorClass"):colorObject=["<object>",["HSBColorClass",{"hue":["<unitDouble>",["angleUnit",color[1][0]]],"saturation":["<double>",color[1][1]],"brightness":["<double>",color[1][2]]}]];break;case jamEngine.uniIdStrToId("labColor"):colorObject=["<object>",["labColor",{"luminance":["<double>",color[1][0]],"a":["<double>",color[1][1]],"b":["<double>",color[1][2]]}]];break;case jamEngine.uniIdStrToId("RGBColor"):colorObject=["<object>",["RGBColor",{"red":["<double>",color[1][0]],"green":["<double>",color[1][1]],"blue":["<double>",color[1][2]]}]];break;default:throw new Error("[jamHelpers.toColorObject] Unrecognized color class: "+colorClass);break;}} return colorObject;};jamHelpers.fromColorObject=function(colorObject,explicit) {var color;if(explicit) {color=jamEngine.simplifyObject(colorObject);} else {var normalizedColorObject=jamEngine.normalizeJsonItem(colorObject,{meaningfulIds:true,parseFriendly:true});var colorClass=normalizedColorObject[1][0];var colorDesc=normalizedColorObject[1][1];switch(colorClass) {case"bookColor":var book=colorDesc["book"][1];var name=colorDesc["name"][1];if(("bookID"in colorDesc)&&("bookKey"in colorDesc)) {var bookID=colorDesc["bookID"][1];var bookKey=colorDesc["bookKey"][1];color=[colorClass,[book,name,bookID,bookKey]];} else {color=[colorClass,[book,name]];} break;case"CMYKColorClass":var cyan=colorDesc["cyan"][1];var magenta=colorDesc["magenta"][1];var yellowColor=colorDesc["yellowColor"][1];var black=colorDesc["black"][1];color=[colorClass,[cyan,magenta,yellowColor,black]];break;case"grayscale":var gray=colorDesc["gray"][1];color=[colorClass,[gray]];break;case"HSBColorClass":var hue=colorDesc["hue"][1][1];var saturation=colorDesc["saturation"][1];var brightness=colorDesc["brightness"][1];color=[colorClass,[hue,saturation,brightness]];break;case"labColor":var luminance=colorDesc["luminance"][1];var a=colorDesc["a"][1];var b=colorDesc["b"][1];color=[colorClass,[luminance,a,b]];break;case"RGBColor":var red=colorDesc["red"][1];var green=colorDesc["green"][1];var blue=colorDesc["blue"][1];color=[colorClass,[red,green,blue]];break;default:throw new Error("[jamHelpers.fromColorObject] Unrecognized color class: "+colorClass);break;}} return color;};jamHelpers.nameToColorObject=function(setName,colorName) {return this.toColorObject(jamColors.nameToColor(setName,colorName));};jamHelpers.hexToColorObject=function(hexColorString) {return this.toColorObject(["RGBColor",jamColors.hexToRgb(hexColorString)]);};jamHelpers.hexFromColorObject=function(colorObject,noSign,lowercase) {var color=this.fromColorObject(colorObject);return(color[0]==="RGBColor")?jamColors.rgbToHex(color[1],noSign,lowercase):null;};jamHelpers.toGradientObject=function(gradient) {var gradientObject;if(gradient.constructor===Object) {var that=this;function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"showTransparency":case"vectorColor":typedValue=["<boolean>",value];break;case"name":typedValue=["<string>",localize(value)];break;case"gradientForm":typedValue=["<enumerated>",["gradientForm",value]];break;case"type":typedValue=["<enumerated>",["colorStopType",value]];break;case"colorSpace":typedValue=["<enumerated>",["colorSpace",value]];break;case"location":case"midpoint":case"randomSeed":case"smoothness":typedValue=["<integer>",value];break;case"interpolation":typedValue=["<double>",value];break;case"opacity":typedValue=["<unitDouble>",["percentUnit",value]];break;case"colors":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["colorStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"transparency":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["transparencyStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"minimum":case"maximum":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;case"color":typedValue=that.toColorObject(value);break;case"gradient":typedValue=["<object>",["gradientClassEvent",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} gradientObject=restoreDesc({"gradient":gradient})["gradient"];} else if(gradient.constructor===Array) {var gradientObj={};var gradientName=gradient[0];if(gradientName) {gradientObj["name"]=["<string>",gradientName];} var gradientForm=gradient[1];gradientObj["gradientForm"]=["<enumerated>",["gradientForm",gradientForm]];switch(jamEngine.uniIdStrToId(gradientForm)) {case jamEngine.uniIdStrToId("customStops"):gradientObj["interpolation"]=["<double>",gradient[2]];var colorStops=gradient[3];var colorsArr=[];for(var i=0;i<colorStops.length;i++) {var colorStopObj={};colorStopObj["location"]=["<integer>",colorStops[i][0]];colorStopObj["midpoint"]=["<integer>",colorStops[i][1]];var type=colorStops[i][2];colorStopObj["type"]=["<enumerated>",["colorStopType",type]];switch(jamEngine.uniIdStrToId(type)) {case jamEngine.uniIdStrToId("userStop"):colorStopObj["color"]=this.toColorObject(colorStops[i][3]);break;case jamEngine.uniIdStrToId("backgroundColor"):case jamEngine.uniIdStrToId("foregroundColor"):break;default:throw new Error("[jamHelpers.toGradientObject] Unrecognized color stop type: "+type);break;} colorsArr.push(["<object>",["colorStop",colorStopObj]]);} gradientObj["colors"]=["<list>",colorsArr];var transparencyStops=gradient[4];if(typeof transparencyStops!=='undefined') {var transparencyArr=[];for(var j=0;j<transparencyStops.length;j++) {var transparencyStopObj={};transparencyStopObj["location"]=["<integer>",transparencyStops[j][0]];transparencyStopObj["midpoint"]=["<integer>",transparencyStops[j][1]];transparencyStopObj["opacity"]=["<unitDouble>",["percentUnit",transparencyStops[j][2]]];transparencyArr.push(["<object>",["transparencyStop",transparencyStopObj]]);} gradientObj["transparency"]=["<list>",transparencyArr];} break;case jamEngine.uniIdStrToId("colorNoise"):gradientObj["randomSeed"]=["<integer>",gradient[2]];gradientObj["showTransparency"]=["<boolean>",gradient[3]];gradientObj["vectorColor"]=["<boolean>",gradient[4]];gradientObj["smoothness"]=["<integer>",gradient[5]];var colorSpace=gradient[6];gradientObj["colorSpace"]=["<enumerated>",["colorSpace",colorSpace]];switch(jamEngine.uniIdStrToId(colorSpace)) {case jamEngine.uniIdStrToId("RGBColor"):case jamEngine.uniIdStrToId("HSBColorEnum"):case jamEngine.uniIdStrToId("labColor"):break;default:throw new Error("[jamHelpers.toGradientObject] Unrecognized color space: "+colorSpace);break;} gradientObj["minimum"]=this.toIntegerList(gradient[7]);gradientObj["maximum"]=this.toIntegerList(gradient[8]);break;default:throw new Error("[jamHelpers.toGradientObject] Unrecognized gradient form: "+gradientForm);break;} gradientObject=["<object>",["gradientClassEvent",gradientObj]];} return gradientObject;};jamHelpers.fromGradientObject=function(gradientObject,explicit) {var gradient;if(explicit) {gradient=jamEngine.simplifyObject(gradientObject);} else {gradient=[];var normalizedGradientObject=jamEngine.normalizeJsonItem(gradientObject,{meaningfulIds:true,parseFriendly:true});var gradientDesc=normalizedGradientObject[1][1];var name=gradientDesc["name"];gradient.push((name)?name[1]:null);var gradientForm=gradientDesc["gradientForm"][1][1];gradient.push(gradientForm);switch(gradientForm) {case"customStops":gradient.push(gradientDesc["interpolation"][1]);var colors=gradientDesc["colors"][1];var colorStops=[];for(var i=0;i<colors.length;i++) {var colorStop=colors[i][1][1];var colorStopArr=[];colorStopArr.push(colorStop["location"][1]);colorStopArr.push(colorStop["midpoint"][1]);var type=colorStop["type"][1][1];colorStopArr.push(type);switch(type) {case"userStop":colorStopArr.push(this.fromColorObject(colorStop["color"]));break;case"backgroundColor":case"foregroundColor":break;default:throw new Error("[jamHelpers.fromGradientObject] Unrecognized color stop type: "+type);break;} colorStops.push(colorStopArr);} gradient.push(colorStops);var transparency=gradientDesc["transparency"][1];var transparencyStops=[];for(var j=0;j<transparency.length;j++) {var transparencyStop=transparency[j][1][1];var transparencyStopArr=[];transparencyStopArr.push(transparencyStop["location"][1]);transparencyStopArr.push(transparencyStop["midpoint"][1]);transparencyStopArr.push(transparencyStop["opacity"][1][1]);transparencyStops.push(transparencyStopArr);} gradient.push(transparencyStops);break;case"colorNoise":gradient.push(gradientDesc["randomSeed"][1]);gradient.push(gradientDesc["showTransparency"][1]);gradient.push(gradientDesc["vectorColor"][1]);gradient.push(gradientDesc["smoothness"][1]);var colorSpace=gradientDesc["colorSpace"][1][1] gradient.push(colorSpace);switch(colorSpace) {case"RGBColor":case"HSBColorEnum":case"labColor":break;default:throw new Error("[jamHelpers.fromGradientObject] Unrecognized color space: "+colorSpace);break;} gradient.push(this.fromIntegerList(gradientDesc["minimum"]));gradient.push(this.fromIntegerList(gradientDesc["maximum"]));break;default:throw new Error("[jamHelpers.fromGradientObject] Unrecognized gradient form: "+gradientForm);break;}} return gradient;};jamHelpers.toCurvesAdjustmentList=function(curvesAdjustmentsArr) {var curvesAdjustmentListArr=[];for(var i=0;i<curvesAdjustmentsArr.length;i++) {var curvesAdjustment=curvesAdjustmentsArr[i];var channel=["<reference>",[["channel",["<enumerated>",["channel",curvesAdjustment[0]]]]]];var info=curvesAdjustment[1];var type=info[0];var points=info[1];var pointArr=[];switch(jamEngine.uniIdStrToId(type)) {case jamEngine.uniIdStrToId("mapping"):for(var j=0;j<points.length;j++) {pointArr.push(["<integer>",points[j]]);} var mapping=["<list>",pointArr];curvesAdjustmentListArr.push(["<object>",["curvesAdjustment",{"channel":channel,"mapping":mapping}]]);break;case jamEngine.uniIdStrToId("curve"):for(var j=0;j<points.length;j++) {var point=["<object>",["point",{"horizontal":["<double>",points[j][0]],"vertical":["<double>",points[j][1]]}]];pointArr.push(point);} var curve=["<list>",pointArr];curvesAdjustmentListArr.push(["<object>",["curvesAdjustment",{"channel":channel,"curve":curve}]]);break;default:throw new Error("[jamHelpers.toCurvesAdjustmentList] Unrecognized curve type");break;}} return["<list>",curvesAdjustmentListArr];};jamHelpers.toHueSatAdjustmentV2List=function(hueSatAdjustmentsArr) {var hueSatAdjustmentListArr=[];for(var i=0;i<hueSatAdjustmentsArr.length;i++) {var hueSatAdjustmentArr=hueSatAdjustmentsArr[i];var hueSatAdjustmentObj;if((hueSatAdjustmentArr.length===3)&&(i===0)) {hueSatAdjustmentObj={"hue":["<integer>",hueSatAdjustmentArr[0]],"saturation":["<integer>",hueSatAdjustmentArr[1]],"lightness":["<integer>",hueSatAdjustmentArr[2]]};} else if(hueSatAdjustmentArr.length===(1+4+3)) {hueSatAdjustmentObj={"localRange":["<integer>",hueSatAdjustmentArr[0]],"beginRamp":["<integer>",hueSatAdjustmentArr[1]],"beginSustain":["<integer>",hueSatAdjustmentArr[2]],"endSustain":["<integer>",hueSatAdjustmentArr[3]],"endRamp":["<integer>",hueSatAdjustmentArr[4]],"hue":["<integer>",hueSatAdjustmentArr[5]],"saturation":["<integer>",hueSatAdjustmentArr[6]],"lightness":["<integer>",hueSatAdjustmentArr[7]]};} hueSatAdjustmentListArr.push(["<object>",["hueSatAdjustmentV2",hueSatAdjustmentObj]]);} return["<list>",hueSatAdjustmentListArr];};jamHelpers.toBlendRangeList=function(blendRanges) {var blendRangeListArr=[];var blendRangeObject;for(var i=0;i<blendRanges.length;i++) {var blendRange=blendRanges[i];if(blendRange.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;case"srcBlackMin":case"srcBlackMax":case"srcWhiteMin":case"srcWhiteMax":case"destBlackMin":case"destBlackMax":case"destWhiteMin":case"destWhiteMax":typedValue=["<integer>",value];break;case"blendRange":typedValue=["<object>",["blendRange",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} blendRangeObject=restoreDesc({"blendRange":blendRange})["blendRange"];} else if(blendRange.constructor===Array) {blendRangeObject=["<object>",["blendRange",{"channel":["<reference>",[["channel",["<enumerated>",["channel",blendRange[0]]]]]],"srcBlackMin":["<integer>",blendRange[1]],"srcBlackMax":["<integer>",blendRange[2]],"srcWhiteMin":["<integer>",blendRange[3]],"srcWhiteMax":["<integer>",blendRange[4]],"destBlackMin":["<integer>",blendRange[5]],"destBlackMax":["<integer>",blendRange[6]],"destWhiteMin":["<integer>",blendRange[7]],"destWhiteMax":["<integer>",blendRange[8]]}]];} blendRangeListArr.push(blendRangeObject);} return["<list>",blendRangeListArr];};jamHelpers.fromBlendRangeList=function(blendRangeList,explicit) {var blendRanges;if(explicit) {var replaceChannelHook=function(desc,key,getDefaultValue) {var replacedValue=undefined;if(key==="channel") {var value=getDefaultValue(desc,key);replacedValue=value[0]["channel"];} return replacedValue;};blendRanges=jamEngine.simplifyList(blendRangeList,replaceChannelHook);} else {blendRanges=[];var normalizedBlendRangeList=jamEngine.normalizeJsonItem(blendRangeList,{meaningfulIds:true,parseFriendly:true});for(index=0;index<normalizedBlendRangeList[1].length;index++) {var blendRange=normalizedBlendRangeList[1][index][1][1];var blendRangeArr=[blendRange["channel"][1][0][1][1][1],blendRange["srcBlackMin"][1],blendRange["srcBlackMax"][1],blendRange["srcWhiteMin"][1],blendRange["srcWhiteMax"][1],blendRange["destBlackMin"][1],blendRange["destBlackMax"][1],blendRange["destWhiteMin"][1],blendRange["destWhiteMax"][1]];blendRanges.push(blendRangeArr);}} return blendRanges;};jamHelpers.toIntegerList=function(integersArr) {var integerListArr=[];for(var i=0;i<integersArr.length;i++) {integerListArr.push(["<integer>",integersArr[i]]);} return["<list>",integerListArr];};jamHelpers.fromIntegerList=function(integerList) {var normalizedIntegerList=jamEngine.normalizeJsonItem(integerList,{meaningfulIds:true,parseFriendly:true});var integersArr=[];var integers=normalizedIntegerList[1];for(var i=0;i<integers.length;i++) {integersArr.push(integers[i][1]);} return integersArr;};function toUnitDouble(value,unit) {return(typeof unit==='undefined')?["<double>",value]:["<unitDouble>",[unit,value]];} jamHelpers.toPointObject=function(pointArr) {var data=pointArr[0];var unit=pointArr[1];var pointObject=["<object>",["point",{"horizontal":toUnitDouble(data[0],unit),"vertical":toUnitDouble(data[1],unit)}]];return pointObject;};jamHelpers.toPointList=function(pointsArr) {var data=pointsArr[0];var unit=pointsArr[1];var pointListArr=[];for(var i=0;i<data.length;i++) {pointListArr.push (["<object>",["point",{"horizontal":toUnitDouble(data[i][0],unit),"vertical":toUnitDouble(data[i][1],unit)}]]);} return["<list>",pointListArr];};jamHelpers.fromPointList=function(pointList) {var pointsArr=[];var normalizedPointList=jamEngine.normalizeJsonItem(pointList,{meaningfulIds:true,parseFriendly:true});var data=[];var unit;function getValue(coordinate) {var value;switch(coordinate[0]) {case"<unitDouble>":unit=coordinate[1][0];value=coordinate[1][1];break;case"<double>":unit=undefined;value=coordinate[1];break;} return value;} var pointListArr=normalizedPointList[1];for(var i=0;i<pointListArr.length;i++) {data.push([getValue(pointListArr[i][1][1]["horizontal"]),getValue(pointListArr[i][1][1]["vertical"])]);} pointsArr.push(data);if(unit) {pointsArr.push(unit);} return pointsArr;};jamHelpers.toOffsetObject=function(offsetArr) {var data=offsetArr[0];var unit=offsetArr[1];var offsetObject=["<object>",["offset",{"horizontal":toUnitDouble(data[0],unit),"vertical":toUnitDouble(data[1],unit)}]];return offsetObject;};jamHelpers.toRectangleObject=function(rectangleArr) {var data=rectangleArr[0];var unit=rectangleArr[1];var rectangleObj={"left":toUnitDouble(data[0],unit),"top":toUnitDouble(data[1],unit),"right":toUnitDouble(data[2],unit),"bottom":toUnitDouble(data[3],unit)};if(data.length===5) {rectangleObj["radius"]=toUnitDouble(data[4],unit);} return["<object>",["rectangle",rectangleObj]];};jamHelpers.toEllipseObject=function(ellipseArr) {var data=ellipseArr[0];var unit=ellipseArr[1];var ellipseObject=["<object>",["ellipse",{"left":toUnitDouble(data[0],unit),"top":toUnitDouble(data[1],unit),"right":toUnitDouble(data[2],unit),"bottom":toUnitDouble(data[3],unit)}]];return ellipseObject;};jamHelpers.toCustomShapeObject=function(customShapeArr) {var data=customShapeArr[0];var unit=customShapeArr[1];var customShapeObject=["<object>",["customShape",{"name":["<string>",data[0]],"left":toUnitDouble(data[1],unit),"top":toUnitDouble(data[2],unit),"right":toUnitDouble(data[3],unit),"bottom":toUnitDouble(data[4],unit)}]];return customShapeObject;};jamHelpers.toCurvePointList=function(curvePoints) {var curvePointListArr=[];var curvePointObject;for(var i=0;i<curvePoints.length;i++) {var curvePoint=curvePoints[i];if(curvePoint.constructor===Object) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"continuity":typedValue=["<boolean>",value];break;case"horizontal":case"vertical":typedValue=["<double>",value];break;case"curvePoint":typedValue=["<object>",["curvePoint",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} curvePointObject=restoreDesc({"curvePoint":curvePoint})["curvePoint"];} else if(curvePoint.constructor===Array) {switch(curvePoint.length) {case 2:curvePointObject=["<object>",["curvePoint",{"horizontal":["<double>",curvePoint[0]],"vertical":["<double>",curvePoint[1]]}]];break;case 3:curvePointObject=["<object>",["curvePoint",{"horizontal":["<double>",curvePoint[0]],"vertical":["<double>",curvePoint[1]],"continuity":["<boolean>",curvePoint[2]]}]];break;}} curvePointListArr.push(curvePointObject);} return["<list>",curvePointListArr];};jamHelpers.fromCurvePointList=function(curvePointList,explicit) {var curvePoints;if(explicit) {curvePoints=jamEngine.simplifyList(curvePointList);} else {curvePoints=[];var normalizedCurvePointList=jamEngine.normalizeJsonItem(curvePointList,{meaningfulIds:true,parseFriendly:true});for(index=0;index<normalizedCurvePointList[1].length;index++) {var curvePoint=normalizedCurvePointList[1][index][1][1];var curvePointArr=[curvePoint["horizontal"][1],curvePoint["vertical"][1]];if("continuity"in curvePoint) {curvePointArr.push(curvePoint["continuity"][1]);} curvePoints.push(curvePointArr);}} return curvePoints;};jamHelpers.toRationalPointList=function(rationalPointsArr) {var data=rationalPointsArr[0];var unit=rationalPointsArr[1];var rationalPointListArr=[];for(var i=0;i<data.length;i++) {rationalPointListArr.push (["<object>",["rationalPoint",{"horizontal":toUnitDouble(data[i][0],unit),"vertical":toUnitDouble(data[i][1],unit)}]]);} return["<list>",rationalPointListArr];};jamHelpers.toPathComponentList=function(pathComponents) {var pathComponentList;if(pathComponents.constructor===Object) {var unit;if("unit"in pathComponents) {unit=pathComponents["unit"];} var data=pathComponents["pathComponents"];function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"closedSubpath":case"smooth":case"windingFill":typedValue=["<boolean>",value];break;case"shapeOperation":typedValue=["<enumerated>",["shapeOperation",value]];break;case"horizontal":case"vertical":typedValue=toUnitDouble(value,unit);break;case"anchor":case"backward":case"forward":typedValue=["<object>",["point",restoreDesc(value)]];break;case"subpathListKey":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["subpathsList",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"points":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["pathPoint",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"pathComponents":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["pathComponent",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} pathComponentList=restoreDesc({"pathComponents":data})["pathComponents"];} else if(pathComponents.constructor===Array) {var pathComponentListArr=[];var data=pathComponents[0];var unit=pathComponents[1];for(var i=0;i<data.length;i++) {var shapeOperation=data[i][0];var subpaths=data[i][1];var windingFill=data[i][2];var subpathArr=[];for(var j=0;j<subpaths.length;j++) {var points=subpaths[j][0];var closedSubpath=subpaths[j][1];var pointArr=[];for(var k=0;k<points.length;k++) {var point=points[k];switch(point.length) {case 1:pointArr.push (["<object>",["pathPoint",{"anchor":["<object>",["point",{"horizontal":toUnitDouble(point[0][0],unit),"vertical":toUnitDouble(point[0][1],unit)}]]}]]);break;case 3:case 4:pointArr.push (["<object>",["pathPoint",{"anchor":["<object>",["point",{"horizontal":toUnitDouble(point[0][0],unit),"vertical":toUnitDouble(point[0][1],unit)}]],"forward":["<object>",["point",{"horizontal":toUnitDouble(point[1][0],unit),"vertical":toUnitDouble(point[1][1],unit)}]],"backward":["<object>",["point",{"horizontal":toUnitDouble(point[2][0],unit),"vertical":toUnitDouble(point[2][1],unit)}]],"smooth":["<boolean>",point[3]||false]}]]);break;}} var subpath={};if(closedSubpath) {subpath["closedSubpath"]=["<boolean>",closedSubpath];} subpath["points"]=["<list>",pointArr];subpathArr.push(["<object>",["subpathsList",subpath]]);} var pathComponent={};pathComponent["shapeOperation"]=["<enumerated>",["shapeOperation",shapeOperation]];if(windingFill) {pathComponent["windingFill"]=["<boolean>",windingFill];} pathComponent["subpathListKey"]=["<list>",subpathArr];pathComponentListArr.push(["<object>",["pathComponent",pathComponent]]);} pathComponentList=["<list>",pathComponentListArr];} return pathComponentList;};jamHelpers.fromPathComponentList=function(pathComponentList,explicit) {var pathComponents;if(explicit) {pathComponents={};var unit;var done=false;function getUnitHook(desc,key) {if(!done) {if(key==="horizontal") {var value=desc[key];if(value[0]==="<unitDouble>") {unit=value[1][0];} done=true;}} return undefined;} pathComponents["pathComponents"]=jamEngine.simplifyList(pathComponentList,getUnitHook);if(unit) {pathComponents["unit"]=unit;}} else {pathComponents=[];var normalizedPathComponentList=jamEngine.normalizeJsonItem(pathComponentList,{meaningfulIds:true,parseFriendly:true});var data=[];var unit;function getValue(coordinate) {var value;switch(coordinate[0]) {case"<unitDouble>":unit=coordinate[1][0];value=coordinate[1][1];break;case"<double>":unit=undefined;value=coordinate[1];break;} return value;} var pathComponentListArr=normalizedPathComponentList[1];for(var i=0;i<pathComponentListArr.length;i++) {var pathComponent=pathComponentListArr[i][1][1];var shapeOperation=pathComponent["shapeOperation"][1][1];var windingFill=("windingFill"in pathComponent)?pathComponent["windingFill"][1]:false;var subpathsArr=[];var subpathListArr=pathComponent["subpathListKey"][1];for(var j=0;j<subpathListArr.length;j++) {var subpathsList=subpathListArr[j][1][1];var closedSubpath=("closedSubpath"in subpathsList)?subpathsList["closedSubpath"][1]:false;var pathPointsArr=[];var pointsArr=subpathsList["points"][1];for(var k=0;k<pointsArr.length;k++) {var pathPoint=pointsArr[k][1][1];var pathPointArr=[];var anchor=pathPoint["anchor"][1][1];pathPointArr.push([getValue(anchor["horizontal"]),getValue(anchor["vertical"])]);if("forward"in pathPoint) {var forward=pathPoint["forward"][1][1];pathPointArr.push([getValue(forward["horizontal"]),getValue(forward["vertical"])]);} if("backward"in pathPoint) {var backward=pathPoint["backward"][1][1];pathPointArr.push([getValue(backward["horizontal"]),getValue(backward["vertical"])]);} var smooth=("smooth"in pathPoint)?pathPoint["smooth"][1]:false;if(smooth) {pathPointArr.push(smooth);} pathPointsArr.push(pathPointArr);} var subpathArr=[];subpathArr.push(pathPointsArr);if(closedSubpath) {subpathArr.push(closedSubpath);} subpathsArr.push(subpathArr);} var pathComponentArr=[];pathComponentArr.push(shapeOperation);pathComponentArr.push(subpathsArr);if(windingFill) {pathComponentArr.push(windingFill);} data.push(pathComponentArr);} pathComponents.push(data);if(unit) {pathComponents.push(unit);}} return pathComponents;};}());}
// jamLayers.jsxinc v4.4 (minified)
if(typeof jamLayers!=='object') {var jamLayers={};(function() {function getObjectClass(object) {return(jamEngine.parseCompact(object))[0];} function toBlackAndWhite(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"using":typedValue=["<path>",value];break;case"useTint":typedValue=["<boolean>",value];break;case"blue":case"cyan":case"green":case"magenta":case"red":case"yellow":typedValue=["<integer>",value];break;case"tintColor":typedValue=jamHelpers.toColorObject(value);break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toBrightnessContrast(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"useLegacy":typedValue=["<boolean>",value];break;case"brightness":case"contrast":typedValue=["<integer>",value];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toChannelMixer(desc) {function restoreDesc(desc,hintData) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"using":typedValue=["<path>",value];break;case"monochromatic":typedValue=["<boolean>",value];break;case"black":case"blue":case"cyan":case"green":case"magenta":case"red":case"yellowColor":if(hintData) {typedValue=["<unitDouble>",[hintData,value]];} else {typedValue=["<object>",["channelMatrix",restoreDesc(value,"percentUnit")]];} break;case"gray":typedValue=["<object>",["channelMatrix",restoreDesc(value,"percentUnit")]];break;case"constant":typedValue=["<unitDouble>",[hintData,value]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toColorBalance(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"preserveLuminosity":typedValue=["<boolean>",value];break;case"shadowLevels":case"midtoneLevels":case"highlightLevels":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toCurves(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"using":typedValue=["<path>",value];break;case"horizontal":case"vertical":typedValue=["<double>",value];break;case"adjustment":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["curvesAdjustment",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"curve":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["point",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"mapping":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toExposure(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"using":typedValue=["<path>",value];break;case"exposure":case"gammaCorrection":case"offset":typedValue=["<double>",value];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toGradientMap(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"dither":case"reverse":typedValue=["<boolean>",value];break;case"gradient":typedValue=jamHelpers.toGradientObject(value);break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toHueSaturation(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"using":typedValue=["<path>",value];break;case"colorize":typedValue=["<boolean>",value];break;case"beginRamp":case"beginSustain":case"endRamp":case"endSustain":case"hue":case"lightness":case"localRange":case"saturation":typedValue=["<integer>",value];break;case"adjustment":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["hueSatAdjustmentV2",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toLevels(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"using":typedValue=["<path>",value];break;case"auto":case"autoBlackWhite":case"autoContrast":case"autoNeutrals":typedValue=["<boolean>",value];break;case"blackClip":case"gamma":case"whiteClip":typedValue=["<double>",value];break;case"input":case"output":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;case"adjustment":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["levelsAdjustment",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toPhotoFilter(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"preserveLuminosity":typedValue=["<boolean>",value];break;case"density":typedValue=["<integer>",value];break;case"color":typedValue=jamHelpers.toColorObject(value);break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toPosterize(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"levels":typedValue=["<integer>",value];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toSelectiveColor(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"using":typedValue=["<path>",value];break;case"colors":typedValue=["<enumerated>",["colors",value]];break;case"method":typedValue=["<enumerated>",["correctionMethod",value]];break;case"black":case"cyan":case"magenta":case"yellowColor":typedValue=["<unitDouble>",["percentUnit",value]];break;case"colorCorrection":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["colorCorrection",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toThreshold(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"level":typedValue=["<integer>",value];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toVibrance(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"vibrance":case"saturation":typedValue=["<integer>",value];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toGradient(desc) {function restoreDesc(desc,hintData) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"alignment":case"dither":case"reverse":typedValue=["<boolean>",value];break;case"angle":typedValue=["<unitDouble>",["angleUnit",value]];break;case"scale":typedValue=["<unitDouble>",["percentUnit",value]];break;case"horizontal":case"vertical":typedValue=["<unitDouble>",[hintData,value]];break;case"offset":typedValue=["<object>",["point",restoreDesc(value,"percentUnit")]];break;case"type":typedValue=["<enumerated>",["gradientType",value]];break;case"gradient":typedValue=jamHelpers.toGradientObject(value);break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toPattern(desc) {function restoreDesc(desc,hintData) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"align":typedValue=["<boolean>",value];break;case"ID":case"name":typedValue=["<string>",value];break;case"scale":typedValue=["<unitDouble>",["percentUnit",value]];break;case"horizontal":case"vertical":typedValue=["<double>",value];break;case"phase":typedValue=["<object>",["point",restoreDesc(value)]];break;case"pattern":typedValue=["<object>",["pattern",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} function toSolidColor(desc) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"color":typedValue=jamHelpers.toColorObject(value);break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc(desc);} jamLayers.toLayerTypeObject=function(layerType) {var result=null;var typeArr=jamEngine.parseCompact(layerType);var kind=typeArr[0];var desc=typeArr[1];var toAdjustmentFunctions={"blackAndWhite":toBlackAndWhite,"brightnessContrast":toBrightnessContrast,"channelMixer":toChannelMixer,"colorBalance":toColorBalance,"curves":toCurves,"exposure":toExposure,"gradientMapClass":toGradientMap,"hueSaturation":toHueSaturation,"invert":null,"levels":toLevels,"photoFilter":toPhotoFilter,"posterize":toPosterize,"selectiveColor":toSelectiveColor,"thresholdClassEvent":toThreshold,"vibrance":toVibrance,"gradientLayer":toGradient,"patternLayer":toPattern,"solidColorLayer":toSolidColor};if(kind in toAdjustmentFunctions) {result=(desc)?["<object>",[kind,(toAdjustmentFunctions[kind])(desc)]]:["<class>",kind];} return result;};jamLayers.toLayerObject=function(layer) {var that=this;function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"group":case"blendClipped":case"blendInterior":case"fillNeutral":case"layerMaskAsGlobalMask":case"protectAll":case"protectComposite":case"protectPosition":case"protectTransparency":case"transparencyShapesLayer":case"vectorMaskAsGlobalMask":typedValue=["<boolean>",value];break;case"name":typedValue=["<string>",value];break;case"srcBlackMin":case"srcBlackMax":case"srcWhiteMin":case"srcWhiteMax":case"destBlackMin":case"destBlackMax":case"destWhiteMin":case"destWhiteMax":typedValue=["<integer>",value];break;case"fillOpacity":case"opacity":case"userMaskDensity":case"vectorMaskDensity":typedValue=["<unitDouble>",["percentUnit",value]];break;case"userMaskFeather":case"vectorMaskFeather":typedValue=["<unitDouble>",["pixelsUnit",value]];break;case"mode":typedValue=["<enumerated>",["blendMode",value]];break;case"color":typedValue=["<enumerated>",["color",value]];break;case"knockout":typedValue=["<enumerated>",["knockout",value]];break;case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;case"layerLocking":typedValue=["<object>",["layerLocking",restoreDesc(value)]];break;case"blendRange":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["blendRange",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"channelRestrictions":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<enumerated>",["channel",value[i]]]);} typedValue=["<list>",restoredList];break;case"type":typedValue=that.toLayerTypeObject(value);break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} var layerClass=getObjectClass(layer);return["<object>",[layerClass,restoreDesc(layer[layerClass])]];};jamLayers.fromLayerObject=function(layerObject) {var layer={};function layerHook(desc,key,getDefaultValue) {var replacedValue=undefined;switch(key) {case"layerObject":case"type":if(desc[key][0]==="<object>") {replacedValue={};replacedValue[desc[key][1][0]]=getDefaultValue(desc,key);} else if(desc[key][0]==="<class>") {replacedValue={};replacedValue[desc[key][1]]=null;} break;case"channel":var value=getDefaultValue(desc,key);replacedValue=value[0]["channel"];break;} return replacedValue;} return jamEngine.simplifyObject(["<object>",["layerObject",{"layerObject":layerObject}]],layerHook)["layerObject"];};jamLayers.toLayerClassReference=function(layer) {return["<reference>",[[getObjectClass(layer),["<class>",null]]]];};jamLayers.makeLayer=function(layer,below) {var makeDesc={"target":this.toLayerClassReference(layer),"using":this.toLayerObject(layer)};if(below) {makeDesc["below"]=["<boolean>",below];} jamEngine.jsonPlay("make",makeDesc);};jamLayers.toLayerReference=function(layer) {return["<reference>",[[getObjectClass(layer),["<enumerated>",["ordinal","targetEnum"]]]]];};jamLayers.setLayerProperties=function(layerProperties) {var layer={"layer":layerProperties};var setDesc={"target":this.toLayerReference(layer),"to":this.toLayerObject(layer)};jamEngine.jsonPlay("set",setDesc);};jamLayers.toLayerTypeReference=function(layerType) {var layerTypeClasses={"blackAndWhite":"adjustmentLayer","brightnessContrast":"adjustmentLayer","channelMixer":"adjustmentLayer","colorBalance":"adjustmentLayer","curves":"adjustmentLayer","exposure":"adjustmentLayer","gradientMapClass":"adjustmentLayer","hueSaturation":"adjustmentLayer","invert":"adjustmentLayer","levels":"adjustmentLayer","photoFilter":"adjustmentLayer","posterize":"adjustmentLayer","selectiveColor":"adjustmentLayer","thresholdClassEvent":"adjustmentLayer","vibrance":"adjustmentLayer","gradientLayer":"contentLayer","patternLayer":"contentLayer","solidColorLayer":"contentLayer"};return["<reference>",[[layerTypeClasses[getObjectClass(layerType)],["<enumerated>",["ordinal","targetEnum"]]]]];};jamLayers.setLayerType=function(layerType) {var setDesc={"target":this.toLayerTypeReference(layerType),"to":this.toLayerTypeObject(layerType)};jamEngine.jsonPlay("set",setDesc);};jamLayers.groupLayer=function() {jamEngine.jsonPlay("groupEvent");};jamLayers.ungroupLayer=function() {jamEngine.jsonPlay("ungroup");};}());}
// jamStyles.jsxinc v4.4 (minified)
if(typeof jamStyles!=='object') {var jamStyles={};(function() {jamStyles.isStylesFile=function(file) {return(file.type==='8BSL')||file.name.match(/\.asl$/i);};jamStyles.isStylesPalette=function(file) {return file.name.match(/^Styles.psp$/i);};jamStyles.toLayerEffectsObject=function(layerEffects) {function restoreDesc(desc,hintData) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"align":case"antiAlias":case"antialiasGloss":case"continuity":case"dither":case"enabled":case"invert":case"invertTexture":case"layerConceals":case"linked":case"reverse":case"showTransparency":case"useGlobalAngle":case"useShape":case"useTexture":case"vectorColor":typedValue=["<boolean>",value];break;case"book":case"ID":case"name":typedValue=["<string>",localize(value)];break;case"bookKey":typedValue=["<data>",value];break;case"bookID":case"location":case"midpoint":case"randomSeed":case"smoothness":typedValue=["<integer>",value];break;case"a":case"b":case"black":case"blue":case"brightness":case"cyan":case"gray":case"green":case"interpolation":case"luminance":case"magenta":case"red":case"saturation":case"yellowColor":typedValue=["<double>",value];break;case"angle":case"hue":case"localLightingAngle":case"localLightingAltitude":typedValue=["<unitDouble>",["angleUnit",value]];break;case"chokeMatte":case"highlightOpacity":case"inputRange":case"noise":case"opacity":case"scale":case"shadingNoise":case"shadowOpacity":case"strengthRatio":case"textureDepth":typedValue=["<unitDouble>",["percentUnit",value]];break;case"blur":case"distance":case"size":case"softness":typedValue=["<unitDouble>",["pixelsUnit",value]];break;case"horizontal":case"vertical":typedValue=(hintData)?["<unitDouble>",[hintData,value]]:["<double>",value];break;case"type":var enumType;switch(value) {case"linear":case"radial":case"angle":case"reflected":case"diamond":case"shapeburst":enumType="gradientType";break;case"foregroundColor":case"backgroundColor":case"userStop":enumType="colorStopType";break;} typedValue=["<enumerated>",[enumType,value]];break;case"colorSpace":typedValue=["<enumerated>",["colorSpace",value]];break;case"gradientForm":typedValue=["<enumerated>",["gradientForm",value]];break;case"paintType":typedValue=["<enumerated>",["frameFill",value]];break;case"bevelDirection":typedValue=["<enumerated>",["bevelEmbossStampStyle",value]];break;case"bevelStyle":typedValue=["<enumerated>",["bevelEmbossStyle",value]];break;case"bevelTechnique":typedValue=["<enumerated>",["bevelTechnique",value]];break;case"glowTechnique":typedValue=["<enumerated>",["matteTechnique",value]];break;case"innerGlowSource":typedValue=["<enumerated>",["innerGlowSourceType",value]];break;case"style":typedValue=["<enumerated>",["frameStyle",value]];break;case"highlightMode":case"mode":case"shadowMode":typedValue=["<enumerated>",["blendMode",value]];break;case"bevelEmboss":case"chromeFX":case"dropShadow":case"frameFX":case"gradientFill":case"innerGlow":case"innerShadow":case"outerGlow":case"pattern":case"patternFill":case"solidFill":typedValue=["<object>",[key,restoreDesc(value)]];break;case"color":case"highlightColor":case"shadowColor":var colorClass;if((("book"in value)&&("name"in value))||(("bookID"in value)&&("bookKey"in value))) {colorClass="bookColor";} else if(("cyan"in value)&&("magenta"in value)&&("yellowColor"in value)&&("black"in value)) {colorClass="CMYKColorClass";} else if("gray"in value) {colorClass="grayscale";} else if(("hue"in value)&&("saturation"in value)&&("brightness"in value)) {colorClass="HSBColorClass";} else if(("luminance"in value)&&("a"in value)&&("b"in value)) {colorClass="labColor";} else if(("red"in value)&&("green"in value)&&("blue"in value)) {colorClass="RGBColor";} typedValue=["<object>",[colorClass,restoreDesc(value)]];break;case"gradient":typedValue=["<object>",["gradientClassEvent",restoreDesc(value)]];break;case"mappingShape":case"transparencyShape":typedValue=["<object>",["shapingCurve",restoreDesc(value)]];break;case"offset":typedValue=["<object>",["point",restoreDesc(value,"percentUnit")]];break;case"phase":typedValue=["<object>",["point",restoreDesc(value)]];break;case"minimum":case"maximum":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<integer>",value[i]]);} typedValue=["<list>",restoredList];break;case"colors":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["colorStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"transparency":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["transparencyStop",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"curve":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["curvePoint",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"layerEffects":typedValue=["<object>",["layerEffects",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc({"layerEffects":layerEffects})["layerEffects"];};jamStyles.fromLayerEffectsObject=function(layerEffectsObject) {return jamEngine.simplifyObject(layerEffectsObject);};jamStyles.toBlendOptionsObject=function(blendOptions) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;var restoredList;switch(key) {case"blendClipped":case"blendInterior":case"layerMaskAsGlobalMask":case"transparencyShapesLayer":case"vectorMaskAsGlobalMask":typedValue=["<boolean>",value];break;case"srcBlackMin":case"srcBlackMax":case"srcWhiteMin":case"srcWhiteMax":case"destBlackMin":case"destBlackMax":case"destWhiteMin":case"destWhiteMax":typedValue=["<integer>",value];break;case"fillOpacity":case"opacity":typedValue=["<unitDouble>",["percentUnit",value]];break;case"mode":typedValue=["<enumerated>",["blendMode",value]];break;case"knockout":typedValue=["<enumerated>",["knockout",value]];break;case"channel":typedValue=["<reference>",[["channel",["<enumerated>",["channel",value]]]]];break;case"blendRange":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<object>",["blendRange",restoreDesc(value[i])]]);} typedValue=["<list>",restoredList];break;case"channelRestrictions":restoredList=[];for(var i=0;i<value.length;i++) {restoredList.push(["<enumerated>",["channel",value[i]]]);} typedValue=["<list>",restoredList];break;case"blendOptions":typedValue=["<object>",["blendOptions",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc({"blendOptions":blendOptions})["blendOptions"];};jamStyles.fromBlendOptionsObject=function(blendOptionsObject) {var replaceChannelHook=function(desc,key,getDefaultValue) {var replacedValue=undefined;if(key==="channel") {var value=getDefaultValue(desc,key);replacedValue=value[0]["channel"];} return replacedValue;};return jamEngine.simplifyObject(blendOptionsObject,replaceChannelHook);};jamStyles.toDocumentModeObject=function(documentMode) {function restoreDesc(desc) {var restoredDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=desc[key];var typedValue=null;switch(key) {case"colorSpace":typedValue=["<enumerated>",["colorSpace",value]];break;case"depth":typedValue=["<integer>",value];break;case"documentMode":typedValue=["<object>",["documentMode",restoreDesc(value)]];break;} if(typedValue) {restoredDesc[key]=typedValue;}}} return restoredDesc;} return restoreDesc({"documentMode":documentMode})["documentMode"];};jamStyles.fromDocumentModeObject=function(documentModeObject) {return jamEngine.simplifyObject(documentModeObject);};function getDocumentMode() {var documentMode={};var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescObj;resultDescObj=jamEngine.jsonGet ([["property",["<property>","mode"]],["document",["<enumerated>",["ordinal","targetEnum"]]]]);documentMode["colorSpace"]=resultDescObj["mode"][1][1];resultDescObj=jamEngine.jsonGet ([["property",["<property>","depth"]],["document",["<enumerated>",["ordinal","targetEnum"]]]]);documentMode["depth"]=resultDescObj["depth"][1];jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;return documentMode;} function getDocumentResolution() {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescObj=jamEngine.jsonGet ([["property",["<property>","resolution"]],["document",["<enumerated>",["ordinal","targetEnum"]]]]);jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;return resultDescObj["resolution"][1][1];} jamStyles.setLayerStyle=function(layerStyleObj) {if(layerStyleObj&&(("blendOptions"in layerStyleObj)||("layerEffects"in layerStyleObj))) {var layerDesc={};if("blendOptions"in layerStyleObj) {defaultBlendOptionsObj={"mode":"normal","opacity":100,"fillOpacity":100,"channelRestrictions":[],"knockout":"none","blendInterior":false,"blendClipped":true,"transparencyShapesLayer":true,"layerMaskAsGlobalMask":false,"vectorMaskAsGlobalMask":false,"blendRange":[]};var documentMode=getDocumentMode();var channelRestrictions;var blendRangeChannels;switch(documentMode["colorSpace"]) {case"CMYKColorEnum":case"CMYK64":channelRestrictions=["cyan","magenta","yellow","black"];blendRangeChannels=["gray","cyan","magenta","yellow","black"];break;case"duotone":case"grayScale":case"gray16":channelRestrictions=["black"];blendRangeChannels=["black"];break;case"labColor":case"lab48":channelRestrictions=["lightness","a","b"];blendRangeChannels=["lightness","a","b"];break;case"RGBColor":case"RGB48":channelRestrictions=["red","green","blue"];blendRangeChannels=["gray","red","green","blue"];break;} defaultBlendOptionsObj["channelRestrictions"]=channelRestrictions;for(var i=0;i<blendRangeChannels.length;i++) {defaultBlendRangeObj={"channel":blendRangeChannels[i],"srcBlackMin":0,"srcBlackMax":0,"srcWhiteMin":255,"srcWhiteMax":255,"destBlackMin":0,"destBlackMax":0,"destWhiteMin":255,"destWhiteMax":255};defaultBlendOptionsObj["blendRange"].push(defaultBlendRangeObj);} var blendOptionsObj=jamUtils.mergeData(layerStyleObj["blendOptions"],defaultBlendOptionsObj);var blendOptionsDesc=this.toBlendOptionsObject(blendOptionsObj)[1][1];for(var key in blendOptionsDesc) {if(blendOptionsDesc.hasOwnProperty(key)) {layerDesc[key]=blendOptionsDesc[key];}}} var layerEffects;if("layerEffects"in layerStyleObj) {layerEffects=layerStyleObj["layerEffects"];layerDesc["layerEffects"]=this.toLayerEffectsObject(layerEffects);} jamEngine.jsonPlay ("set",{"target":["<reference>",[["layer",["<enumerated>",["ordinal","targetEnum"]]]]],"to":["<object>",["layer",layerDesc]]});if(layerEffects) {if("scale"in layerEffects) {this.scaleLayerEffects((getDocumentResolution()/72)/(layerEffects["scale"]/100)*100);}}} else {this.clearLayerStyle();}};function getPresetStylesCount() {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescObj=jamEngine.jsonGet ([["property",["<property>","presetManager"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var presetManagerArr=resultDescObj["presetManager"][1];var presetStylesCount;for(var i=0;i<presetManagerArr.length;i++) {var preset=presetManagerArr[i][1];if(preset[0]==="styleClass") {presetStylesCount=preset[1]["name"][1].length;break;}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;return presetStylesCount;} function isStyledLayer() {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var isLayer=false;try {var resultDescObj=jamEngine.jsonGet ([["property",["<property>","background"]],["layer",["<enumerated>",["ordinal","targetEnum"]]]]);isLayer=!resultDescObj["background"][1];} catch(e) {} var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;return isLayer;} jamStyles.getLayerStyle=function() {var layerStyleObj=null;if(isStyledLayer()) {var presetStylesCountBefore=getPresetStylesCount();var date=new Date();var tempStyleName="Temp-Layer-Style-"+date.getTime();jamEngine.jsonPlay ("make",{"target":["<reference>",[["style",["<class>",null]]]],"name":["<string>",tempStyleName],"using":["<reference>",[["layer",["<enumerated>",["ordinal","targetEnum"]]]]],"blendOptions":["<boolean>",true],"layerEffects":["<boolean>",true]});var presetStylesCount=getPresetStylesCount();if(presetStylesCount===(presetStylesCountBefore+1)) {var tempStylesFile=new File(Folder.temp+"/"+tempStyleName+".asl");jamEngine.jsonPlay ("set",{"target":["<path>",tempStylesFile.fsName],"to":["<list>",[["<reference>",[["style",["<index>",presetStylesCount]]]]]]});jamEngine.jsonPlay ("delete",{"target":["<list>",[["<reference>",[["style",["<index>",presetStylesCount]]]]]]});var tempStylesFileData=this.dataFromStylesFile(tempStylesFile);if(typeof tempStylesFileData==='string') {alert(tempStylesFileData+"\n"+"Styles file: “"+File.decode(tempStylesFile.name)+"”");} else {layerStyleObj=tempStylesFileData["styles"][0];if("name"in layerStyleObj) {delete layerStyleObj["name"];} if("ID"in layerStyleObj) {delete layerStyleObj["ID"];} if("documentMode"in layerStyleObj) {delete layerStyleObj["documentMode"];} if("layerEffects"in layerStyleObj) {var layerEffects=layerStyleObj["layerEffects"];if("masterFXSwitch"in layerEffects) {delete layerEffects["masterFXSwitch"];}}} if(arguments.length>0) {var extraInfo=arguments[0];if(extraInfo&&(extraInfo.constructor===Object)) {if("patterns"in extraInfo) {var tempStylesFilePatterns=this.patternsFromStylesFile(tempStylesFile);if(typeof tempStylesFilePatterns==='string') {alert(tempStylesFilePatterns+"\n"+"Styles file: “"+File.decode(tempStylesFile.name)+"”");} else {extraInfo["patterns"]=tempStylesFilePatterns;}}}} tempStylesFile.remove();}} return layerStyleObj;};jamStyles.copyLayerStyle=function() {try {jamEngine.jsonPlay("copyEffects",null);} catch(e) {}};jamStyles.pasteLayerStyle=function() {try {jamEngine.jsonPlay("pasteEffects",{});} catch(e) {}};jamStyles.clearLayerStyle=function() {try {jamEngine.jsonPlay ("disableLayerStyle",{"target":["<reference>",[["layer",["<enumerated>",["ordinal","targetEnum"]]]]]});} catch(e) {}};jamStyles.applyLayerStyle=function(styleName,merge) {var descriptor={"target":["<reference>",[["style",["<name>",styleName]]]],"to":["<reference>",[["layer",["<enumerated>",["ordinal","targetEnum"]]]]]};if((typeof merge!=='undefined')&&merge) {descriptor["merge"]=["<boolean>",merge];} jamEngine.jsonPlay("applyStyle",descriptor);};jamStyles.scaleLayerEffects=function(scale) {jamEngine.jsonPlay("scaleEffectsEvent",{"scale":["<unitDouble>",["percentUnit",scale]]});};jamStyles.removeLayerEffect=function(effect) {try {jamEngine.jsonPlay ("disableSingleFX",{"target":["<reference>",[[effect,["<class>",null]],["layer",["<enumerated>",["ordinal","targetEnum"]]]]]});} catch(e) {}};jamStyles.removeLayerEffects=function(effects) {for(var i=0;i<effects.length;i++) {this.removeLayerEffect(effects[i]);}};jamStyles.removeAllLayerEffects=function() {try {jamEngine.jsonPlay ("disableLayerFX",{"target":["<reference>",[["layer",["<enumerated>",["ordinal","targetEnum"]]]]]});} catch(e) {}};jamStyles.showHideLayerEffects=function(effects,show) {var references=[];for(var i=0;i<effects.length;i++) {references.push (["<reference>",[[effects[i],["<class>",null]],["layer",["<enumerated>",["ordinal","targetEnum"]]]]]);} try {jamEngine.jsonPlay((show)?"show":"hide",{"target":["<list>",references]},DialogModes.NO);} catch(e) {}};jamStyles.showHideLayerEffect=function(effect,show) {this.showHideLayerEffects([effect],show);};jamStyles.showHideAllLayerEffects=function(show) {this.showHideLayerEffects(["layerEffects"],show);};jamStyles.showHideAllDocumentEffects=function(show) {jamEngine.jsonPlay ("set",{"target":["<reference>",[["property",["<property>","layerFXVisible"]],["document",["<enumerated>",["ordinal","targetEnum"]]]]],"to":["<object>",["layerFXVisible",{"layerFXVisible":["<boolean>",show||false]}]]});};function setGlobalAngle(target,globalLightingAngle,globalAltitude) {var globalAngle={"globalLightingAngle":["<unitDouble>",["angleUnit",globalLightingAngle]]};if(typeof globalAltitude!=='undefined') {globalAngle["globalAltitude"]=["<unitDouble>",["angleUnit",globalAltitude]];} jamEngine.jsonPlay ("set",{"target":["<reference>",[["property",["<property>","globalAngle"]],[target,["<enumerated>",["ordinal","targetEnum"]]]]],"to":["<object>",["globalAngle",globalAngle]]});};jamStyles.setApplicationGlobalAngle=function(globalLightingAngle,globalAltitude) {setGlobalAngle("application",globalLightingAngle,globalAltitude);};jamStyles.setDocumentGlobalAngle=function(globalLightingAngle,globalAltitude) {setGlobalAngle("document",globalLightingAngle,globalAltitude);};function readBEInt(file,byteCount) {var bytes=file.read(byteCount);var intValue=0;for(var index=0;index<byteCount;index++) {intValue=(intValue<<8)+bytes.charCodeAt(index);} return intValue;} function readUnicodeString(file) {var unicodeString="";var unicodeLength=readBEInt(file,4);for(var index=0;index<unicodeLength;index++) {var unicodeChar=readBEInt(file,2);if(unicodeChar!==0) {unicodeString+=String.fromCharCode(unicodeChar);}} return unicodeString;} function readBytes(file,byteCount) {return file.read(byteCount);} function readPascalString(file) {var stringLength=readBEInt(file,1);return readBytes(file,stringLength);} jamStyles.dataFromStylesFile=function(stylesFile,includePatternsInfo) {var imageModes=["Bitmap","Grayscale","Indexed","RGB","CMYK",null,null,"Multichannel","Duotone","Lab"];var file;if(typeof stylesFile==='string') {file=new File(stylesFile);} else if(stylesFile instanceof File) {file=stylesFile;} else {throw new Error('[jamStyles.dataFromStylesFile] Invalid argument');} var fileData;if(file.open("r")) {try {file.encoding='BINARY';var formatVersion;if(this.isStylesPalette(file)) {formatVersion=2;} else if(this.isStylesFile(file)) {formatVersion=readBEInt(file,2);} if(formatVersion===2) {var magicNumber=file.read(4);if(magicNumber==='8BSL') {var subVersion=readBEInt(file,2);if(subVersion===3) {var patternsLength=readBEInt(file,4);var patternsEnd=file.tell()+patternsLength;if(includePatternsInfo) {var patterns=[];while(file.tell()<patternsEnd) {var pattern={};var patternLength=readBEInt(file,4);var patternEnd=file.tell()+patternLength;var patternVersion=readBEInt(file,4);pattern["version"]=patternVersion;if(patternVersion===1) {pattern["imageMode"]=imageModes[readBEInt(file,4)];pattern["height"]=readBEInt(file,2);pattern["width"]=readBEInt(file,2);pattern["name"]=readUnicodeString(file);pattern["ID"]=readPascalString(file);} else {pattern["error"]="Unsupported version";} patterns.push(pattern);file.seek(patternEnd+((4-(patternLength%4))%4),0);}} file.seek(patternsEnd,0);var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var actionDescriptor;var jsonDesc;var styles=[];var styleCount=readBEInt(file,4);for(var i=0;i<styleCount;i++) {var style={};var styleLength=readBEInt(file,4);var styleEnd=file.tell()+styleLength;actionDescriptor=jamActions.readActionDescriptor(file);jsonDesc=jamEngine.classIdAndActionDescriptorToJson(0,actionDescriptor)["<descriptor>"];style["name"]=jsonDesc["name"][1];style["ID"]=jsonDesc["ID"][1];actionDescriptor=jamActions.readActionDescriptor(file);jsonDesc=jamEngine.classIdAndActionDescriptorToJson(0,actionDescriptor)["<descriptor>"];if("documentMode"in jsonDesc) {style["documentMode"]=this.fromDocumentModeObject(jsonDesc["documentMode"]);} if("blendOptions"in jsonDesc) {style["blendOptions"]=this.fromBlendOptionsObject(jsonDesc["blendOptions"]);} if("layerEffects"in jsonDesc) {style["layerEffects"]=this.fromLayerEffectsObject(jsonDesc["layerEffects"]);} styles.push(style);file.seek(styleEnd,0);} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;fileData={};if(includePatternsInfo) {fileData["patterns"]=patterns;} fileData["styles"]=styles;} else {throw new Error("[jamStyles.dataFromStylesFile] Unrecognized styles file format! Sub-version: "+subVersion);}} else {throw new Error("[jamStyles.dataFromStylesFile] Unrecognized styles file format! Magic number: "+magicNumber);}} else {throw new Error("[jamStyles.dataFromStylesFile] Unrecognized styles file format! Format version: "+formatVersion);}} catch(e) {fileData=e.message;} finally {file.close();}} else {fileData="Cannot open file";} return fileData;};jamStyles.patternsFromStylesFile=function(stylesFile) {var file;if(typeof stylesFile==='string') {file=new File(stylesFile);} else if(stylesFile instanceof File) {file=stylesFile;} else {throw new Error('[jamStyles.patternsFromStylesFile] Invalid argument');} var patternsData;if(file.open("r")) {try {file.encoding='BINARY';var formatVersion;if(this.isStylesPalette(file)) {formatVersion=2;} else if(this.isStylesFile(file)) {formatVersion=readBEInt(file,2);} if(formatVersion===2) {var magicNumber=file.read(4);if(magicNumber==='8BSL') {var subVersion=readBEInt(file,2);if(subVersion===3) {var patternsLength=readBEInt(file,4);var patternsEnd=file.tell()+patternsLength;var patternsData=[];while(file.tell()<patternsEnd) {var patternLength=readBEInt(file,4);patternsData.push(readBytes(file,patternLength));file.seek((4-(patternLength%4))%4,1);}} else {throw new Error("[jamStyles.patternsFromStylesFile] Unrecognized styles file format! Sub-version: "+subVersion);}} else {throw new Error("[jamStyles.patternsFromStylesFile] Unrecognized styles file format! Magic number: "+magicNumber);}} else {throw new Error("[jamStyles.patternsFromStylesFile] Unrecognized styles file format! Format version: "+formatVersion);}} catch(e) {patternsData=e.message;} finally {file.close();}} else {patternsData="Cannot open file";} return patternsData;};jamStyles.patternsFileFromPatterns=function(patternsFile,patternsData) {var file;if(typeof patternsFile==='string') {file=new File(patternsFile);} else if(patternsFile instanceof File) {file=patternsFile;} else {throw new Error('[jamStyles.patternsFileFromPatterns] Invalid argument');} if(file.open('w','8BPT','8BIM')) {file.encoding="BINARY";file.write('8BPT');file.write('\x00\x01');var count=patternsData.length;file.write(String.fromCharCode((count>>24)&0xFF,(count>>16)&0xFF,(count>>8)&0xFF,count&0xFF));for(var index=0;index<count;index++) {file.write(patternsData[index]);} file.close();}};}());}
// jamUtils.jsxinc v4.4 (minified)
if(typeof jamUtils!=='object') {var jamUtils={};(function() {jamUtils.toDistanceUnit=function(amount,amountBasePerInch) {return(amount/amountBasePerInch)*72.0;};jamUtils.fromDistanceUnit=function(amount,amountBasePerInch) {return(amount/72.0)*amountBasePerInch;};jamUtils.fontExists=function(fontPostScriptName) {var useDOM=true;var found=false;if(useDOM) {for(var i=0;i<app.fonts.length;i++) {if(app.fonts[i].postScriptName===fontPostScriptName) {found=true;break;}}} else {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var resultDescriptorObj=jamEngine.jsonGet ([["property",["<property>","fontList"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var fontPostScriptNameArr=resultDescriptorObj["fontList"][1][1]["fontPostScriptName"][1];for(var i=0;i<fontPostScriptNameArr.length;i++) {if(fontPostScriptNameArr[i][1]===fontPostScriptName) {found=true;break;}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;} return found;};jamUtils.loadAction=function(action,actionSet,actionsFilePath) {try {jamEngine.jsonGet([["action",["<name>",action]],["actionSet",["<name>",actionSet]]]);var found=true;} catch(e) {var found=false;} if(!found) {jamEngine.jsonPlay("open",{"target":["<path>",actionsFilePath]});}};jamUtils.loadActionSet=function(actionSet,actionsFilePath) {try {jamEngine.jsonGet([["actionSet",["<name>",actionSet]]]);var found=true;} catch(e) {var found=false;} if(!found) {jamEngine.jsonPlay("open",{"target":["<path>",actionsFilePath]});}};jamUtils.loadPreset=function(presetProperty,presetName,presetFilePath) {var useDOM=false;var useOpen=true;var classes={"brush":"brush","colors":"color","gradientClassEvent":"gradientClassEvent","style":"styleClass","pattern":"'PttR'","shapingCurve":"shapingCurve","customShape":"customShape","toolPreset":"toolPreset"};var presetClass=classes[presetProperty];var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=true;var found=false;var resultDescriptorObj=jamEngine.jsonGet ([["property",["<property>","presetManager"]],["application",["<enumerated>",["ordinal","targetEnum"]]]]);var presetManagerArr=resultDescriptorObj["presetManager"][1];for(var i=0;i<presetManagerArr.length;i++) {var presets=presetManagerArr[i][1];if(presets[0]===presetClass) {var presetsArr=presets[1]["name"][1];for(var j=0;j<presetsArr.length;j++) {if(presetsArr[j][1]===presetName) {found=true;break;}} break;}} if(!found) {if(useDOM) {app.load(new File(presetFilePath));} else if(useOpen) {jamEngine.jsonPlay("open",{"target":["<path>",presetFilePath]});} else {jamEngine.jsonPlay ("set",{"target":["<reference>",[["property",["<property>",presetProperty]],["application",["<enumerated>",["ordinal","targetEnum"]]]]],"to":["<path>",presetFilePath],"append":["<boolean>",true]});}} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;};function getFileObject(file) {var fileObject;if(file instanceof File) {fileObject=file;} else if(typeof file==='string') {fileObject=new File(file);} else {throw new Error('[jamUtils getFileObject] Invalid argument');} return fileObject;} jamUtils.readTextFile=function(textFile) {var text=null;var file=getFileObject(textFile);if(file.open("r")) {text=file.read();file.close();} return text;};jamUtils.readJsonFile=function(jsonFile) {return jamJSON.parse(this.readTextFile(jsonFile),true);};jamUtils.writeTextFile=function(textFile,text) {var file=getFileObject(textFile);if(file.open('w','TEXT')) {file.encoding='UTF-8';file.lineFeed='unix';file.write('\uFEFF');file.write(text);file.close();}};jamUtils.writeJsonFile=function(jsonFile,data,space) {this.writeTextFile(jsonFile,jamJSON.stringify(data,space));};jamUtils.cloneData=function(data) {var clone;if(data===null) {clone=data;} else if(data.constructor===Object) {clone={};for(var k in data) {if(data.hasOwnProperty(k)) {clone[k]=this.cloneData(data[k]);}}} else if(data.constructor===Array) {clone=[];for(var i=0;i<data.length;i++) {clone.push(this.cloneData(data[i]));}} else {clone=data;} return clone;};jamUtils.mergeData=function(data,defaultData) {for(var k in defaultData) {if(defaultData.hasOwnProperty(k)) {if(k in data) {if((defaultData[k]!==null)&&(defaultData[k].constructor===Object)) {data[k]=this.mergeData(data[k],defaultData[k]);}} else {data[k]=this.cloneData(defaultData[k]);}}} return data;};var jsonCustomOptionsStringKey="jsonCustomOptions";jamUtils.getCustomOptions=function(signature,defaultOptions) {var saveMeaningfulIds=jamEngine.meaningfulIds;var saveParseFriendly=jamEngine.parseFriendly;jamEngine.meaningfulIds=true;jamEngine.parseFriendly=false;try {var resultObj=jamEngine.classIdAndActionDescriptorToJson(jamEngine.uniIdStrToId(signature),app.getCustomOptions(signature));var customOptions=jamJSON.parse(resultObj["<descriptor>"][jsonCustomOptionsStringKey]["<string>"],true)} catch(e) {var customOptions={};} jamEngine.meaningfulIds=saveMeaningfulIds;jamEngine.parseFriendly=saveParseFriendly;return this.mergeData(customOptions,defaultOptions);};jamUtils.putCustomOptions=function(signature,customOptions,persistent) {var descriptorObj={};descriptorObj[jsonCustomOptionsStringKey]=["<string>",jamJSON.stringify(customOptions)];app.putCustomOptions(signature,jamEngine.jsonToActionDescriptor(descriptorObj),persistent);};jamUtils.eraseCustomOptions=function(signature) {app.eraseCustomOptions(signature);};jamUtils.dataToHexaString=function(dataString,lowercase) {var hexaDigits=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];var hexaString="";var length=dataString.length;for(var index=0;index<length;index++) {var dataByte=dataString.charCodeAt(index);if((dataByte>=0x00)&&(dataByte<=0xFF)) {hexaString+=hexaDigits[(dataByte&0xF0)>>4]+hexaDigits[dataByte&0x0F];} else {throw new Error("[jamUtils.dataToHexaString] Invalid data string");}} if(lowercase) {hexaString=hexaString.toLowerCase();} return hexaString;};jamUtils.hexaToDataString=function(hexaString) {var dataString="";var length=hexaString.length;if(((length%2)===0)&&(/^[0-9A-Fa-f]*$/.test(hexaString))) {for(var index=0;index<length;index+=2) {var byteString=hexaString.slice(index,index+2);dataString+=String.fromCharCode(parseInt(byteString,16));}} else {throw new Error("[jamUtils.hexaToDataString] Invalid hexa string");} return dataString;};}());}

//------------------------------------------------------------------------------

function deleteLayerMask ()
{
	try
	{
		jamEngine.jsonPlay
		(
			"delete",
			{
				"target": { "<reference>": [ { "channel": { "<enumerated>": { "channel": "mask" } } } ] }
			}
		);
	}
	catch (e)
	{
	}
}

//------------------------------------------------------------------------------

function lockLayer ()
{
	jamEngine.jsonPlay
	(
		"set",
		{
			"target": { "<reference>": [ { "layer": { "<enumerated>": { "ordinal": "targetEnum" } } } ] },
			"to":
			{
				"<object>":
				{
					"layer":
					{
						"layerLocking": { "<object>": { "layerLocking": { "protectAll": { "<boolean>": true } } } }
					}
				}
			}
		}
	);
}

//------------------------------------------------------------------------------

function drawGrid (unitCount, size, top, left, gray, mode, show)
{
	var gridPadding = 1;
	var unit = size / unitCount;
	var gridPath = [ [ [ "add", [ ], true ] ], "pixelsUnit" ];
	for (var row = 0; row <= unitCount; row++)
	{
		var r = [ left - gridPadding, top + (row * unit) - gridPadding, left + size + gridPadding, top + (row * unit) + gridPadding ];
		gridPath[0][0][1].push ([ [ [ [ r[0], r[1] ] ], [ [ r[2], r[1] ] ], [ [ r[2], r[3] ] ], [ [ r[0], r[3] ] ] ], true ]);
	}
	for (var column = 0; column <= unitCount; column++)
	{
		var r = [ left + (column * unit) - gridPadding, top - gridPadding, left + (column * unit) + gridPadding, top + size + gridPadding ];
		gridPath[0][0][1].push ([ [ [ [ r[0], r[1] ] ], [ [ r[2], r[1] ] ], [ [ r[2], r[3] ] ], [ [ r[0], r[3] ] ] ], true ]);
	}
	jamEngine.jsonPlay
	(
		"set",
		{
			"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
			"to": jamHelpers.toPathComponentList (gridPath)
		}
	);
	jamLayers.makeLayer
	(
		{
			"contentLayer":
			{
				"name": "Grid " + unitCount + "x" + unitCount,
				"mode": mode,
				"type": { "solidColorLayer": { "color": { "gray": gray } } }
			}
		}
	);
	lockLayer ();
    jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
	if (!show)
	{
		hideLayer ();
	}
}

//------------------------------------------------------------------------------

function hideLayer ()
{
	jamEngine.jsonPlay
	(
		"hide",
		{
			"target": { "<reference>": [ { "layer": { "<enumerated>": { "ordinal": "targetEnum" } } } ] }
		}
	);
}

//------------------------------------------------------------------------------

function makeDefaultAdjustmentLayers ()
{
	var defaultGradientMap =
	{
		"gradient":
		{
			"name": "Black, White",
			"gradientForm": "customStops",
			"interpolation": 4096,
			"colors":
			[
				{ "location": 0, "midpoint": 50, "type": "userStop", "color": { "red": 0, "green": 0, "blue": 0 } },
				{ "location": 4096, "midpoint": 50, "type": "userStop", "color": { "red": 255, "green": 255, "blue": 255 } }
			]
		}
	};
	var adjustments =
	[
		{
			"name": "Brightness/Contrast",
			"type": { "brightnessContrast": null }
		},
		{
			"name": "Levels",
			"type": { "levels": null }
		},
		{
			"name": "Curves",
			"type": { "curves": null }
		},
		{
			"name": "Exposure",
			"type": { "exposure": null },
	        "minVersion": 9    // CS2
		},
		{
			"name": "Vibrance",
			"type": { "vibrance": null },
	        "minVersion": 11    // CS4
		},
		{
			"name": "Hue/Saturation",
			"type": { "hueSaturation": null }
		},
		{
			"name": "Color Balance",
			"type": { "colorBalance": null }
		},
		{
			"name": "Black & White",
			"type": { "blackAndWhite": null },
	        "minVersion": 10    // CS3
		},
		{
			"name": "Photo Filter",
			"type": { "photoFilter": null }
		},
		{
			"name": "Channel Mixer",
			"type": { "channelMixer": null }
		},
		{
			"name": "Invert",
			"type": { "invert": null }
		},
		{
			"name": "Posterize",
			"type": { "posterize": null }
		},
		{
			"name": "Threshold",
			"type": { "thresholdClassEvent": null }
		},
		{
			"name": "Gradient Map",
			"type": { "gradientMapClass": defaultGradientMap }
		},
		{
			"name": "Selective Color",
			"type": { "selectiveColor": null }
		}
	];
	var appVersion = parseInt (app.version);
	for (var index = adjustments.length - 1; index >= 0; index--)
	{
		var adjustment = adjustments[index];
		if (!(("minVersion" in adjustment) && (adjustment["minVersion"] > appVersion)))
		{
			jamLayers.makeLayer
			(
				{
					"adjustmentLayer":
					{
						"name": adjustment["name"],
						"type": adjustment["type"]
					}
				}
			);
			deleteLayerMask ();
			hideLayer ();
		}
	}
}

//------------------------------------------------------------------------------

function getOption (options, isRGBLayeredDocument)
{
	var appVersion = parseInt (app.version);
	var dialogWidth = 256;
	var dialogHeight = 256; // Dynamically adjusted anyway
	var dialogPadding = [ 15, 15 ];
	var panelPadding = [ 15, (appVersion > 8) ? 15 : 8 ];
	var buttonWidth = 80;
	var buttonHeight = 20;
	var buttonGap = 5;
	var extraGap = (appVersion > 8) ? 0 : 15;
	var dlg = new Window ('dialog', "Visualize Adjustment Layers Options", [ 0, 0, dialogWidth, dialogHeight ]);
	dlg.btnPnl = dlg.add ('panel', [ dialogPadding[0], dialogPadding[1], dialogWidth - dialogPadding[0], dialogHeight - dialogPadding[1] ], "Layer Set");
	var y = panelPadding[1] + extraGap;
	dlg.btnPnl.buttons = [ ];
	var i = 0;
	for (var option in options)
	{
		dlg.btnPnl.buttons[i] = dlg.btnPnl.add ('radiobutton', [ panelPadding[0], y, (dlg.btnPnl.bounds.right - dlg.btnPnl.bounds.left) - panelPadding[0], y + buttonHeight ], options[option]["text"]);
		dlg.btnPnl.buttons[i].helpTip = options[option]["helpTip"];
		dlg.btnPnl.buttons[i].name = option;
		if (option === "selected")
		{
			dlg.btnPnl.buttons[i].enabled = dlg.btnPnl.buttons[i].value = isRGBLayeredDocument;
		}
		else if (option === "default")
		{
			dlg.btnPnl.buttons[i].value = !isRGBLayeredDocument;
		}
		i++;
		y += buttonHeight + buttonGap;
	}
	dlg.btnPnl.bounds.bottom = dlg.btnPnl.bounds.top + y + panelPadding[1];
	dlg.bounds.bottom = dlg.bounds.top + dialogPadding[1] + (dlg.btnPnl.bounds.bottom - dlg.btnPnl.bounds.top) + dialogPadding[1] + buttonHeight + dialogPadding[1];
	dlg.cancelBtn = dlg.add ('button', [ dialogPadding[0], dlg.bounds.bottom - dialogPadding[1] - buttonHeight, dialogPadding[0] + buttonWidth, dlg.bounds.bottom - dialogPadding[1] ], 'Cancel', { name: "cancel" });
	dlg.cancelBtn.onClick = function () { this.parent.close (0); };
	dlg.OKBtn = dlg.add ('button', [ dlg.bounds.right - dialogPadding[0] - buttonWidth, dlg.bounds.bottom - dialogPadding[1] - buttonHeight, dlg.bounds.right - dialogPadding[0], dlg.bounds.bottom - dialogPadding[1] ], 'OK', { name: "ok" });
	dlg.OKBtn.onClick = function () { this.parent.close (1); };
	dlg.center ();
	var result = dlg.show ();
	if (result === 1)
	{
		var count = dlg.btnPnl.buttons.length;
		for (var i = 0; i < count; i++)
		{
			if (dlg.btnPnl.buttons[i].value)
			{
				option = dlg.btnPnl.buttons[i].name;
				break;
			}
		}
	}
	else
	{
		option = false;
	}
	return option;
}

//------------------------------------------------------------------------------

function main ()
{
	var bitsPerChannel = 16;	// 8 or 16
	var curvesSize = 256;
	var marginSize = 16;
	var frameSize = 1;
	var frameGray = 100;
	var curvesGridGray = 10;
	var colorTableGridGray = 0;
	var backgroundGray = 0;
	var gradientHeight = 48;
	var detailedGrid = false;
	var showColorTable = true;
	var colorProfile = "sRGB IEC61966-2.1"; 	// "none", "sRGB IEC61966-2.1", ...
	//
	jamEngine.meaningfulIds = true;
	jamEngine.parseFriendly = false;
	//
	var documentID = 0;
	if (app.documents.length > 0)
	{
		resultDescriptorObj = jamEngine.jsonGet
		(
			[
				{ "property": { "<property>": "mode" } },
				{ "document": { "<enumerated>": { "ordinal": "targetEnum" } } }
			]
		);
		var colorMode = resultDescriptorObj["mode"]["<enumerated>"]["colorSpace"];
		resultDescriptorObj = jamEngine.jsonGet
		(
			[
				{ "property": { "<property>": "numberOfLayers" } },
				{ "document": { "<enumerated>": { "ordinal": "targetEnum" } } }
			]
		);
		var layerCount = resultDescriptorObj["numberOfLayers"]["<integer>"];
		if (((colorMode === "RGBColor") || (colorMode === "RGB48")) && (layerCount > 0))
		{
			resultDescriptorObj = jamEngine.jsonGet
			(
				[
					{ "property": { "<property>": "documentID" } },
					{ "document": { "<enumerated>": { "ordinal": "targetEnum" } } }
				]
			);
			documentID = resultDescriptorObj["documentID"]["<integer>"];
		}
	}
	var options =
	{
		"default":
		{
			"text": "Default Adjustment Layers",
			"helpTip": "Set of default adjustment layers."
		},
		"custom":
		{
			"text": "Custom Adjustment Layers",
			"helpTip": "Empty layer set."
		},
		"selected":
		{
			"text": "Copy of Selected Layers",
			"helpTip": "Set of selected layers copied from the current document."
		}
	};
	var option = getOption (options, (documentID > 0));
	if (option)
	{
		var curvesTop = marginSize;
		var curvesBottom = curvesTop + curvesSize;
		var curvesLeft = marginSize;
		var curvesRight = curvesLeft + curvesSize;
		var gradientTop = curvesBottom + marginSize;
		var gradientBottom = gradientTop + gradientHeight;
		var gradientLeft = marginSize;
		var gradientRight = gradientLeft + curvesSize;
		var colorTableTop = gradientBottom + marginSize;
		var colorTableBottom = colorTableTop + curvesSize;
		var colorTableLeft = marginSize;
		var colorTableRight = colorTableLeft + curvesSize;
		var outerFrame =
		[
			[
				[
					"subtract",
					[
						[
							[
								[ [ curvesLeft - frameSize, curvesTop - frameSize ] ],
								[ [ curvesRight + frameSize, curvesTop - frameSize ] ],
								[ [ curvesRight + frameSize, curvesBottom + frameSize ] ],
								[ [ curvesLeft - frameSize, curvesBottom + frameSize ] ]
							],
							true
						],
						[
							[
								[ [ gradientLeft - frameSize, gradientTop - frameSize ] ],
								[ [ gradientRight + frameSize, gradientTop - frameSize ] ],
								[ [ gradientRight + frameSize, gradientBottom + frameSize ] ],
								[ [ gradientLeft - frameSize, gradientBottom + frameSize ] ]
							],
							true
						]
					]
				]
			],
			"pixelsUnit"
		];
		var colorTableOuterSubpath =
		[
			[
				[ [ colorTableLeft - frameSize, colorTableTop - frameSize ] ],
				[ [ colorTableRight + frameSize, colorTableTop - frameSize ] ],
				[ [ colorTableRight + frameSize, colorTableBottom + frameSize ] ],
				[ [ colorTableLeft - frameSize, colorTableBottom + frameSize ] ]
			],
			true
		];
		if (showColorTable)
		{
			outerFrame[0][0][1].push (colorTableOuterSubpath);
		}
		var curvesAndGradientVectorMask =
		[
			[
				[
					"add",
					[
						[
							[
								[ [ curvesLeft, curvesTop ] ],
								[ [ curvesRight, curvesTop ] ],
								[ [ curvesRight, curvesBottom ] ],
								[ [ curvesLeft, curvesBottom ] ]
							],
							true
						],
						[
							[
								[ [ gradientLeft, gradientTop ] ],
								[ [ gradientRight, gradientTop ] ],
								[ [ gradientRight, gradientBottom ] ],
								[ [ gradientLeft, gradientBottom ] ]
							],
							true
						]
					]
				]
			],
			"pixelsUnit"
		];
		var curvesVectorMask =
		[
			[
				[
					"add",
					[
						[
							[
								[ [ curvesLeft, curvesTop ] ],
								[ [ curvesRight, curvesTop ] ],
								[ [ curvesRight, curvesBottom ] ],
								[ [ curvesLeft, curvesBottom ] ]
							],
							true
						]
					]
				]
			],
			"pixelsUnit"
		];
		var colorTableVectorMask =
		[
			[
				[
					"add",
					[
						[
							[
								[ [ colorTableLeft, colorTableTop ] ],
								[ [ colorTableRight, colorTableTop ] ],
								[ [ colorTableRight, colorTableBottom ] ],
								[ [ colorTableLeft, colorTableBottom ] ]
							],
							true
						]
					]
				]
			],
			"pixelsUnit"
		];
		var width = marginSize + curvesSize + marginSize;
		var height = marginSize + curvesSize + marginSize + gradientHeight + marginSize + (showColorTable ? curvesSize + marginSize : 0);
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
							"name": { "<string>": "Visualize Adjustment Layers" },
							"mode": { "<class>": "RGBColorMode" },
							"width": { "<unitDouble>": { "distanceUnit": width } },
							"height": { "<unitDouble>": { "distanceUnit": height } },
							"resolution": { "<unitDouble>": { "densityUnit": 72 } },
							"depth": { "<integer>": bitsPerChannel },
							"fill": { "<enumerated>": { "fill": "transparent" } },
							"profile": { "<string>": colorProfile }
						}
					}
				}
			}
		);
		if (showColorTable)
		{
			jamEngine.jsonPlay
			(
				"set",
				{
					"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
					"to": jamHelpers.toPathComponentList (colorTableVectorMask)
				}
			);
			jamLayers.makeLayer
			(
				{
					"contentLayer":
					{
						"name": "Color Table (Rows)",
						"mode": "normal",
						"type":
						{
							"gradientLayer":
							{
								"type": "linear",
								"angle": -90,
								"scale": 100,
								"dither": false,
								"align": true,
								"gradient":
								{
									"name": "Linear Black to White",
									"gradientForm": "customStops",
									"interpolation": 0,
									"colors":
									[
										{
											"location": 0,
											"midpoint": 50,
											"type": "userStop",
											"color": { "red": 0, "green": 0, "blue": 0 }
										},
										{
											"location": 4080,	// 4096 * 255 / 256
											"midpoint": 50,
											"type": "userStop",
											"color": { "red": 255, "green": 255, "blue": 255 }
										}
									]
								}
							}
						}
					}
				}
			);
			lockLayer ();
			jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
			jamLayers.makeLayer
			(
				{
					"adjustmentLayer":
					{
						"name": "Posterize (16 Levels)",
						"mode": "normal",
						"group": true,
						"type":
						{
							"posterize":
							{
								"levels": 16
							}
						}
					}
				}
			);
			deleteLayerMask ();
			lockLayer ();
			jamLayers.makeLayer
			(
				{
					"adjustmentLayer":
					{
						"name": "Level Output (0 to 240)",
						"mode": "normal",
						"group": true,
						"type":
						{
							"levels":
							{
								"adjustment":
								[
									{
										"channel": "composite",
										"output": [ 0, 240 ]
									}
								]
							}
						}
					}
				}
			);
			deleteLayerMask ();
			lockLayer ();
			jamEngine.jsonPlay
			(
				"set",
				{
					"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
					"to": jamHelpers.toPathComponentList (colorTableVectorMask)
				}
			);
			jamLayers.makeLayer
			(
				{
					"contentLayer":
					{
						"name": "Color Table (Columns)",
						"mode": "linearDodge",	// Linear Dodge (Add)
						"type":
						{
							"gradientLayer":
							{
								"type": "linear",
								"angle": 0,
								"scale": 100,
								"dither": false,
								"align": true,
								"gradient":
								{
									"name": "Linear Black to White",
									"gradientForm": "customStops",
									"interpolation": 0,
									"colors":
									[
										{
											"location": 0,
											"midpoint": 50,
											"type": "userStop",
											"color": { "red": 0, "green": 0, "blue": 0 }
										},
										{
											"location": 4080,	// 4096 * 255 / 256
											"midpoint": 50,
											"type": "userStop",
											"color": { "red": 255, "green": 255, "blue": 255 }
										}
									]
								}
							}
						}
					}
				}
			);
			lockLayer ();
			jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
			jamLayers.makeLayer
			(
				{
					"adjustmentLayer":
					{
						"name": "Posterize (16 Levels)",
						"mode": "normal",
						"group": true,
						"type":
						{
							"posterize":
							{
								"levels": 16
							}
						}
					}
				}
			);
			deleteLayerMask ();
			lockLayer ();
			jamLayers.makeLayer
			(
				{
					"adjustmentLayer":
					{
						"name": "Level Output (0 to 15)",
						"mode": "normal",
						"group": true,
						"type":
						{
							"levels":
							{
								"adjustment":
								[
									{
										"channel": "composite",
										"output": [ 0, 15 ]
									}
								]
							}
						}
					}
				}
			);
			deleteLayerMask ();
			lockLayer ();
		}
		jamEngine.jsonPlay
		(
			"set",
			{
				"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
				"to": jamHelpers.toPathComponentList (curvesAndGradientVectorMask)
			}
		);
		jamLayers.makeLayer
		(
			{
				"contentLayer":
				{
					"name": "Input Generator",
					"mode": "normal",
					"type":
					{
						"gradientLayer":
						{
							"type": "linear",
							"angle": 0,
							"scale": 100,
							"dither": false,
							"align": true,
							"gradient":
							{
								"name": "Linear Black to White",
								"gradientForm": "customStops",
								"interpolation": 0,
								"colors":
								[
									{
										"location": 0,
										"midpoint": 50,
										"type": "userStop",
										"color": { "red": 0, "green": 0, "blue": 0 }
									},
									{
										"location": 4080,	// 4096 * 255 / 256
										"midpoint": 50,
										"type": "userStop",
										"color": { "red": 255, "green": 255, "blue": 255 }
									}
								]
							}
						}
					}
				}
			}
		);
		lockLayer ();
		jamEngine.jsonPlay
		(
			"set",
			{
				"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
				"to": jamHelpers.toPathComponentList (curvesVectorMask)
			}
		);
		jamLayers.makeLayer
		(
			{
				"contentLayer":
				{
					"name": "Output Generator",
					"mode": "difference",
					"type":
					{
						"gradientLayer":
						{
							"type": "linear",
							"angle": 90,
							"scale": 100,
							"dither": false,
							"align": true,
							"gradient":
							{
								"name": "Linear Black to White",
								"gradientForm": "customStops",
								"interpolation": 0,
								"colors":
								[
									{
										"location": 16,	// 4096 - (4096 * 255 / 256)
										"midpoint": 50,
										"type": "userStop",
										"color": { "red": 0, "green": 0, "blue": 0 }
									},
									{
										"location": 4096,
										"midpoint": 50,
										"type": "userStop",
										"color": { "red": 255, "green": 255, "blue": 255 }
									}
								]
							}
						}
					}
				}
			}
		);
		lockLayer ();
		jamEngine.jsonPlay ("select", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
		var compositeMapping = [ ];
		for (var index = 0; index < 256; index++)
		{
			compositeMapping.push (index > 0 ? 255 : 0);
		}
		jamLayers.makeLayer
		(
			{
				"adjustmentLayer":
				{
					"name": "Line Generator",
					"mode": "normal",
					"type":
					{
						"curves":
						{
							"adjustment":
							[
								{ "channel": "composite", "mapping": compositeMapping }
							]
						}
					}
				}
			}
		);
		lockLayer ();
		jamEngine.jsonPlay ("select", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
		jamLayers.makeLayer
		(
			{
				"adjustmentLayer":
				{
					"name": "Curve Color Shifter",
					"mode": "normal",
					"type":
					{
						"hueSaturation":
						{
							"adjustment":
							[
								{ "hue": 180, "saturation": 0, "lightness": 0 }
							]
						}
					}
				}
			}
		);
		lockLayer ();
		jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
		if (showColorTable)
		{
			drawGrid (16, curvesSize, colorTableTop, colorTableLeft, colorTableGridGray, "normal", true);
		}
		drawGrid (10, curvesSize, curvesTop, curvesLeft, curvesGridGray, "darken", detailedGrid);
		drawGrid (4, curvesSize, curvesTop, curvesLeft, curvesGridGray, "darken", !detailedGrid);
		jamEngine.jsonPlay
		(
			"set",
			{
				"target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] },
				"to": jamHelpers.toPathComponentList (outerFrame)
			}
		);
		jamLayers.makeLayer
		(
			{
				"contentLayer":
				{
					"name": "Frames",
					"mode": "normal",
					"type":
					{
						"solidColorLayer":
						{
							"color": { "gray": backgroundGray }
						}
					}
				}
			}
		);
		var layerStyleObj =
		{
			"blendOptions":
			{
			},
			"layerEffects":
			{
				"scale": 100,
				"frameFX":
				{
					"enabled": true,
					"style": "outsetFrame",
					"paintType": "solidColor",
					"size": frameSize,
					"color": { "gray": frameGray }
				},
				"innerShadow":
				{
					"enabled": true,
					"mode": "multiply",
					"color": { "red": 0, "green": 0, "blue": 0 },
					"opacity": 33,
					"localLightingAngle": 135,
					"useGlobalAngle": false,
					"distance": 5,
					"chokeMatte": 0,
					"blur": 5,
					"transparencyShape":
					{
						"name": "Linear",
						"curve":
						[
							{ "horizontal": 0, "vertical": 0 },
							{ "horizontal": 255, "vertical": 255 }
						]
					},
					"antiAlias": true,
					"noise": 0
				}
			}
		};
		jamStyles.setLayerStyle (layerStyleObj);
		lockLayer ();
		jamEngine.jsonPlay ("delete", { "target": { "<reference>": [ { "path": { "<property>": "workPath" } } ] } });
		jamEngine.jsonPlay
		(
			"select",
			{
				"target": { "<reference>": [ { "layer": { "<name>": "Input Generator" } } ] }
			}
		);
		var layerSetName = options[option]["text"];
		if (option === "selected")
		{
			jamEngine.jsonPlay
			(
				"make",
				{
					"target": { "<reference>": [ { "layerSection": { "<class>": null } } ] },
					"using": { "<object>": { "layerSection": { "name": { "<string>": layerSetName } } } }
				}
			);
			jamEngine.jsonPlay
			(
				"make",
				{
					"target": { "<reference>": [ { "layer": { "<class>": null } } ] },
					"using": { "<object>": { "layer": { "name": { "<string>": "Temporary Layer" } } } }
				}
			);
			resultDescriptorObj = jamEngine.jsonGet
			(
				[
					{ "property": { "<property>": "layerID" } },
					{ "layer": { "<enumerated>": { "ordinal": "targetEnum" } } }
				]
			);
			var tempLayerID = resultDescriptorObj["layerID"]["<integer>"];
			resultDescriptorObj = jamEngine.jsonGet
			(
				[
					{ "property": { "<property>": "documentID" } },
					{ "document": { "<enumerated>": { "ordinal": "targetEnum" } } }
				]
			);
			var currentDocumentID = resultDescriptorObj["documentID"]["<integer>"];
			jamEngine.jsonPlay
			(
				"select",
				{
					"target": { "<reference>": [ { "document": { "<identifier>": documentID } } ] }
				}
			);
			jamEngine.jsonPlay
			(
				"duplicate",
				{
					"target": { "<reference>": [ { "layer": { "<enumerated>": { "ordinal": "targetEnum" } } } ] },
					"to": { "<reference>": [ { "document": { "<identifier>": currentDocumentID } } ] }
				}
			);
			jamEngine.jsonPlay
			(
				"select",
				{
					"target": { "<reference>": [ { "document": { "<identifier>": currentDocumentID } } ] }
				}
			);
			jamEngine.jsonPlay
			(
				"delete",
				{
					"target": { "<reference>": [ { "layer": { "<identifier>": tempLayerID } } ] }
				}
			);
			jamEngine.jsonPlay
			(
				"select",
				{
					"target": { "<reference>": [ { "layerSection": { "<name>": layerSetName } } ] }
				}
			);
		}
		else
		{
			jamEngine.jsonPlay
			(
				"make",
				{
					"target": { "<reference>": [ { "layerSection": { "<class>": null } } ] },
					"using": { "<object>": { "layerSection": { "name": { "<string>": layerSetName } } } }
				}
			);
			if (option === "default")
			{
				makeDefaultAdjustmentLayers ();
			}
			jamEngine.jsonPlay
			(
				"select",
				{
					"target": { "<reference>": [ { "layerSection": { "<name>": layerSetName } } ] }
				}
			);
		}
		jamEngine.jsonPlay
		(
			"make",
			{
				"target": { "<reference>": [ { "snapshotClass": { "<class>": null } } ] },
				"from": { "<reference>": [ { "historyState": { "<property>": "currentHistoryState" } } ] },
				"name": { "<string>": "Revert" }
			}
		);
	}
}

//------------------------------------------------------------------------------

main ();

//------------------------------------------------------------------------------

