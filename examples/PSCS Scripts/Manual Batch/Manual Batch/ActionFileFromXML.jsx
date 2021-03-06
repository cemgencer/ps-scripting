//
// ActionFileFromXML.js
//   This script reads an ActionFile and converts it to XML.
//
// $Id$
// Copyright: (c)2007, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
//@show include
//
//
app;
//
//
// PSConstants
// Javascript definitions for Class, Enum, Event, Form, Key,
//    Type, and Unit symbols
//
//  $Id$
//
PSConstants = function PSConstants() {};
PSConstants.symbolTypes = new Object();
PSConstants.add = function(kind, name) {
  if (!name) { throw "Internal error PSConstants.add()"; }
  kind._name = name;
  kind._reverseName = new Object();
  kind._reverseSym = new Object();
  kind._add = function(name, sym) {
    if (!name || !sym) { throw "Internal error kind._add()"; }
    kind[name] = app.charIDToTypeID(sym);
    kind._reverseName[kind[name]] = name;
    kind._reverseSym[kind[name]] = sym;
  }

  PSConstants.symbolTypes[kind._name] = kind;
};
PSConstants.reverseNameLookup = function(id) {
  var tbl = PSConstants.symbolTypes;
  for (var name in tbl) {
    //writeln(id + " " + tbl + " " + name + " " + tbl[name]);
    var kind = tbl[name];
    var r = kind._reverseName[id];
    if (r) return r;
  }
  return undefined;
};
PSConstants.reverseSymLookup = function(id) {
  var tbl = PSConstants.symbolTypes;
  for (var name in tbl) {
    //writeln(id + " " + tbl + " " + name + " " + tbl[name]);
    var kind = tbl[name];
    var r = kind._reverseSym[id];
    if (r) return r;
  }
  return undefined;
};
PSConstants.reverseStringLookup = function(id) {
  return PSString._reverseSym[id];
};
// PSContants._massageName = function(name) {
//   name = name.replace(/\s/g, '');
//   return name;
// };
PSConstants.lookup = function(kname) {
  kname = kname.replace(/\s/g, '');
  var tbl = PSConstants.symbolTypes;
  for (var name in tbl) {
    //writeln(id + " " + tbl + " " + name + " " + tbl[name]);
    var kind = tbl[name];
    var r = kind[kname];
    if (r) return r;
  }
  return undefined;
};
PSConstants.lookupSym = function(kname) {
  kname = kname.replace(/\s/g, '');
  var id = PSConstants.lookup(kname);
  return !id ? undefined : PSConstants.reverseSymLookup(id);
};
PSConstants.list = function(kind) {
  var tbl = PSConstants.symbolTypes[kind._name];
  var lst = '';
  for (var name in tbl) {
    if (name.match(/^[A-Z]/)) {
      lst += (kind._name + '.' + name + " = \"" + kind[name] + "\";\r\n");
    }
  }
  return lst;
};
PSConstants.listAll = function() {
  var tbl = PSConstants.symbolTypes;
  var lst = '';
  for (var name in tbl) {
    var kind = tbl[name];
    lst += PSConstants.list(kind);
  }
  return lst;
};

PSClass = function PSClass() {}
PSConstants.add(PSClass, "Class");

PSEnum = function PSEnum() {}
PSConstants.add(PSEnum, "Enum");

PSEvent = function PSEvent() {}
PSConstants.add(PSEvent, "Event");

PSForm = function PSForm() {}
PSConstants.add(PSForm, "Form");

PSKey = function PSKey() {}
PSConstants.add(PSKey, "Key");

PSType = function PSType() {}
PSConstants.add(PSType, "Type");

PSUnit = function PSUnit() {}
PSConstants.add(PSUnit, "Unit");


PSString = function PSString() {};
PSConstants.add(PSString, "String");
PSString._add = function(name, sym) {
  if (!name) { throw "Internal error PSString._add()"; }
  if (!sym) sym = name;
  var kind = this;
  kind[name] = app.stringIDToTypeID(sym);
  kind._reverseName[kind[name]] = name;
  kind._reverseSym[kind[name]] = sym;
};


PSString._add("128BitFloatingPoint");
PSString._add("16BitsPerPixel");
PSString._add("1BitPerPixel");
PSString._add("2BitsPerPixel");
PSString._add("32BitsPerPixel");
PSString._add("32BitPreviewOptions");
PSString._add("3DSetGlobalAmbient", "set3DGlobalAmbient");
PSString._add("3DAddLayerFromFile", "add3DLayerFromFile");
PSString._add("3DUpdateSceneObjects", "updateSceneObjects");
PSString._add("3DLayerOpenTexture", "open3DLayerTexture");
PSString._add("3DSaveTextures", "save3DTextures");
PSString._add("3DExportLayer", "export3DModel");
PSString._add("3DLightsNewLight");
PSString._add("3DReloadLayer", "reload3DModel");
PSString._add("3DToggleTexture", "toggle3DTexture");
PSString._add("3DDoFinalRender", "doFinal3DRender");
PSString._add("3DToggleTextures", "toggle3DTextures");
PSString._add("3DSetState", "set3DState");
PSString._add("3DCreatePostcard", "create3DPostcard");
PSString._add("3DCreateTiledPainting", "create3DTiledPainting");
PSString._add("3DCreateVolume", "createVolume");
PSString._add("3DAntiAlias");
PSString._add("3DRenderUVWireframe", "renderUVWireframe");
PSString._add("3DRenderUVShaded", "renderUVShaded");
PSString._add("3DRenderUVNormalMap", "renderUVNormalMap");
PSString._add("3DRibbonEffect");
PSString._add("3DTransform");
//PSString._add("3DTransformObject", "do3DTransform");    // XXX changed CS4
PSString._add("3DTransformObject", "transform3DObject");
PSString._add("3DSetCamera", "set3DCamera");
PSString._add("3DSetObjectPosition", "set3DObjectPosition");
PSString._add("3DSetCrossSection", "set3DCrossSection");
PSString._add("3DSetLightMode", "set3DLightMode");
PSString._add("3DSetRenderMode", "set3DRenderMode");
PSString._add("3DSetEngine", "set3DEngine");
PSString._add("3DSetPaintType", "set3DPaintType");
PSString._add("3DSetTransferFunction", "set3DTransferFunction");
PSString._add("3DAdd3DView", "add3DView");
PSString._add("3DDelete3DView", "delete3DView");
PSString._add("3DAdd3DObjectPosition", "add3DObjectPosition");
PSString._add("3DDelete3DObjectPosition", "delete3DObjectPosition");
PSString._add("3DSetLightSwitch", "set3DLightSwitch");
PSString._add("3DSetLightPosition", "set3DLightPosition");
PSString._add("3DSetLightDirection", "set3DLightDirection");
PSString._add("3DSetLightType", "set3DLightType");
PSString._add("3DSetLightColor", "set3DLightColor");
PSString._add("3DSetLightHotspotAngle", "set3DLightHotspotAngle");
PSString._add("3DSetLightFalloffAngle", "set3DLightFalloffAngle");
PSString._add("3DSetLightInnerRadius", "set3DLightInnerRadius");
PSString._add("3DSetLightOuterRadius", "set3DLightOuterRadius");
PSString._add("3DSetLightIntensity", "set3DLightIntensity");
PSString._add("3DSetLightCastsShadowsSwitch", "set3DLightCastsShadowsSwitch");
PSString._add("3DSetLightAttenuationSwitch", "set3DLightAttenuationSwitch");
PSString._add("3DSetLightAttenuationType", "set3DLightAttenuationType");
PSString._add("3DSetLightAttenuationCoeff", "set3DLightAttenuationCoeff");
PSString._add("3DSetLightPointAtOrigin", "set3DLightPointAtOrigin");
PSString._add("3DSetLightMoveToCurrView", "set3DLightMoveToCurrView");
PSString._add("3DSetLightSoftShadows", "set3DLightSoftShadows");
PSString._add("3DSetMeshPosition", "set3DMeshPosition");
PSString._add("3DSetMeshDirection", "set3DMeshDirection");
PSString._add("3DSetMeshSwitch", "set3DMeshSwitch");
PSString._add("3DSetMeshShadowCatcher", "set3DMeshShadowCatcher");
PSString._add("3DSetMeshShadowCasting", "set3DMeshShadowCasting");
PSString._add("3DSetMeshShadowInvisible", "set3DMeshShadowInvisible");
PSString._add("3DSetMaterialSwitch", "set3DMaterialSwitch");
PSString._add("3DSetMaterialScalar", "set3DMaterialScalar");
PSString._add("3DSetMaterialColor", "set3DMaterialColor");
PSString._add("3DSetMaterialTexturePath", "set3DMaterialTexturePath");
PSString._add("3DSetMaterialTextureInfo", "set3DMaterialTextureInfo");
PSString._add("3DSetPaintFalloff", "set3DPaintFalloff");
PSString._add("3DHideAllSurfaces", "hideAll3DSelected");
PSString._add("3DHideTopSurface", "hideTop3DSelected");
PSString._add("3DHideEnclosedOnly", "hide3DEnclosedOnly");
PSString._add("3DRevealAll", "revealAll3D");
PSString._add("3DInvertVisible", "invert3DSelected");
PSString._add("3DPaintTypeDiffuse", "paint3DDiffuse");
PSString._add("3DPaintTypeEnvironment", "paint3DEnvironment");
PSString._add("3DPaintTypeBump", "paint3DBump");
PSString._add("3DPaintTypeSpecular", "paint3DSpecular");
PSString._add("3DPaintTypeOpacity", "paint3DOpacity");
PSString._add("3DPaintTypeShininess", "paint3DShininess");
PSString._add("3DPaintTypeSelfIllumination", "paint3DSelfIllumination");
PSString._add("3DPaintTypeReflection", "paint3DReflection");
PSString._add("3DPaintTypeNormal", "paint3DNormal");
PSString._add("3DPaintTypeCustom", "paint3DCustom");
PSString._add("3DRenderSettings", "renderSettings3D");
PSString._add("3DReparameterizeModel", "reparameterize3DModel");
PSString._add("3DRotateObjectTool", "3DObjectRotateTool");
PSString._add("3DRollObjectTool", "3DObjectRollTool");
PSString._add("3DPanObjectTool", "3DObjectPanTool");
PSString._add("3DSlideObjectTool", "3DObjectSlideTool");
PSString._add("3DScaleObjectTool", "3DObjectScaleTool");
PSString._add("3DRotateMeshTool", "3DMeshRotateTool");
PSString._add("3DRollMeshTool", "3DMeshRollTool");
PSString._add("3DPanMeshTool", "3DMeshPanTool");
PSString._add("3DSlideMeshTool", "3DMeshSlideTool");
PSString._add("3DScaleMeshTool", "3DMeshScaleTool");
PSString._add("3DRotateLightTool", "3DLightRotateTool");
PSString._add("3DRollLightTool", "3DLightRollTool");
PSString._add("3DPanLightTool", "3DLightPanTool");
PSString._add("3DSlideLightTool", "3DLightSlideTool");
PSString._add("3DOrbitCameraTool");
PSString._add("3DRollCameraTool");
PSString._add("3DPanCameraTool");
PSString._add("3DWalkCameraTool");
PSString._add("3DFOVTool");
PSString._add("3DPanelKey");
PSString._add("3DFromDepthPlane", "create3DFromDepthPlane");
PSString._add("3DFromDepthTwoSidedPlane", "create3DFromDepthTwoSidedPlane");
PSString._add("3DFromDepthCylinder", "create3DFromDepthCylinder");
PSString._add("3DFromDepthSphere", "create3DFromDepthSphere");
PSString._add("3DSet3DVisibility", "objectVisibilitySwitch");
PSString._add("3DDeleteObj", "objectDelete");
PSString._add("3DNewObj", "objectNew");
PSString._add("3DRenameObj", "objectRename");
PSString._add("3DAddLightsFromPreset", "add3DLightsFromPreset");
PSString._add("3DReplaceLightsFromPreset", "replace3DLightsFromPreset");
PSString._add("3DReplaceMaterialFromPreset", "replace3DMaterialFromPreset");
PSString._add("3DSaveLightsToPreset", "save3DLightsToPreset");
PSString._add("3DSaveMaterialToPreset", "save3DMaterialToPreset");
PSString._add("3DSelectPaintable", "select3DPaintable");
PSString._add("3DBrowseOnline", "browse3DOnline");
PSString._add("3DAutoHideLayers", "autoHide3D");
PSString._add("3DToggleGroundPlane");
PSString._add("3DToggleLightGuides");
PSString._add("3DNewPointLight");
PSString._add("3DNewSpotLight");
PSString._add("3DNewInfiniteLight");
PSString._add("3DAddLights");
PSString._add("3DReplaceLights");
PSString._add("3DSaveLightPreset");
PSString._add("3DDeleteLight");
PSString._add("3DReplaceMaterial");
PSString._add("3DSaveMaterialPreset");
PSString._add("4BitsPerPixel");
PSString._add("5000");
PSString._add("5500");
PSString._add("6500");
PSString._add("72Color");
PSString._add("72Gray");
PSString._add("7500");
PSString._add("8BitsPerPixel");
PSString._add("9300");
PSString._add("AddLayerFromFile", "addLayerFromFile");
PSString._add("AddLayerFromViewlessDoc", "addLayerFromViewlessDoc");
PSString._add("ADSBottoms");
PSString._add("ADSCentersH");
PSString._add("ADSCentersV");
PSString._add("ADSContent");
PSString._add("ADSHorizontal");
PSString._add("ADSLefts");
PSString._add("ADSRights");
PSString._add("ADSTops");
PSString._add("ADSVertical");
PSString._add("AEList");
PSString._add("AERecord");
PSString._add("AOLPreferences");
PSString._add("AppBar", "appBar");
PSString._add("AppContainer", "appContainer");
PSString._add("ASCII85");
PSString._add("ASCII");
PSString._add("AntialiasGloss", "antialiasGloss");
PSString._add("artSprayerTool");
PSString._add("average");
PSString._add("cameraRaw");
PSString._add("cameraRawJPEG");
PSString._add("cameraRawPrefs");
PSString._add("CIERGB");
PSString._add("CineonHalf");
PSString._add("CineonFull");
PSString._add("ClassCustomHSFPair", "classCustomHSFPair");
PSString._add("CloseActionsPanel", "closeActionsPanel");
PSString._add("CloseAdjustmentsPanel", "closeAdjustmentsPanel");
PSString._add("CloseAnimationPanel", "closeAnimationPanel");
PSString._add("CloseBrushesPanel", "closeBrushesPanel");
PSString._add("CloseChannelsPanel", "closeChannelsPanel");
PSString._add("CloseCharacterPanel", "closeCharacterPanel");
PSString._add("CloseCloneSourcePanel", "closeCloneSourcePanel");
PSString._add("CloseColorPanel", "closeColorPanel");
PSString._add("CloseHistogramPanel", "closeHistogramPanel");
PSString._add("CloseHistoryPanel", "closeHistoryPanel");
PSString._add("CloseInfoPanel", "closeInfoPanel");
PSString._add("CloseLayerCompsPanel", "closeLayerCompsPanel");
PSString._add("CloseLayersPanel", "closeLayersPanel");
PSString._add("CloseMaskPanel", "closeMaskPanel");
PSString._add("CloseMeasurementPanel", "closeMeasurementPanel");
PSString._add("CloseNavigatorPanel", "closeNavigatorPanel");
PSString._add("CloseParagraphPanel", "closeParagraphPanel");
PSString._add("ClosePathsPanel", "closePathsPanel");
PSString._add("CloseStylesPanel", "closeStylesPanel");
PSString._add("CloseSwatchesPanel", "closeSwatchesPanel");
PSString._add("CloseTimelinePanel", "closeTimelinePanel");
PSString._add("CloseToolPresetsPanel", "closeToolPresetsPanel");
PSString._add("Close3DPanel", "close3DPanel");
PSString._add("CloseActionsPanelGroup", "closeActionsPanelGroup");
PSString._add("CloseAdjustmentsPanelGroup", "closeAdjustmentsPanelGroup");
PSString._add("CloseAnimationPanelGroup", "closeAnimationPanelGroup");
PSString._add("CloseBrushesPanelGroup", "closeBrushesPanelGroup");
PSString._add("CloseChannelsPanelGroup", "closeChannelsPanelGroup");
PSString._add("CloseCharacterPanelGroup", "closeCharacterPanelGroup");
PSString._add("CloseCloneSourcePanelGroup", "closeCloneSourcePanelGroup");
PSString._add("CloseColorPanelGroup", "closeColorPanelGroup");
PSString._add("CloseHistogramPanelGroup", "closeHistogramPanelGroup");
PSString._add("CloseHistoryPanelGroup", "closeHistoryPanelGroup");
PSString._add("CloseInfoPanelGroup", "closeInfoPanelGroup");
PSString._add("CloseLayerCompsPanelGroup", "closeLayerCompsPanelGroup");
PSString._add("CloseLayersPanelGroup", "closeLayersPanelGroup");
PSString._add("CloseMaskPanelGroup", "closeMaskPanelGroup");
PSString._add("CloseMeasurementPanelGroup", "closeMeasurementPanelGroup");
PSString._add("CloseNavigatorPanelGroup", "closeNavigatorPanelGroup");
PSString._add("CloseParagraphPanelGroup", "closeParagraphPanelGroup");
PSString._add("ClosePathsPanelGroup", "closePathsPanelGroup");
PSString._add("CloseStylesPanelGroup", "closeStylesPanelGroup");
PSString._add("CloseSwatchesPanelGroup", "closeSwatchesPanelGroup");
PSString._add("CloseTimelinePanelGroup", "closeTimelinePanelGroup");
PSString._add("CloseToolPresetsPanelGroup", "closeToolPresetsPanelGroup");
PSString._add("CloseViewlessDocument", "closeViewlessDocument");
PSString._add("Close3DPanelGroup", "close3DPanelGroup");
PSString._add("CMYK64");
PSString._add("CMYKColorClass");
PSString._add("CMYKColorEnum");
PSString._add("CMYKColorMode");
PSString._add("CMYKSetupEngine");
PSString._add("CMYKSetup");
PSString._add("CMYKSpectrum");
PSString._add("CMYK");
PSString._add("colorModel");
PSString._add("color2Gray");
PSString._add("ContourCustom", "shapeCurveCustom");
PSString._add("ContourDouble", "shapeCurveDouble");
PSString._add("ContourGaussian", "shapeCurveGaussian");
PSString._add("ContourLinear", "shapeCurveLinear");
PSString._add("ContourSingle", "shapeCurveSingle");
PSString._add("Contour", "shapingCurve");
PSString._add("ContourTriple", "shapeCurveTriple");
PSString._add("ContourType", "shapeCurveType");
PSString._add("CustomHSFIsStd", "customHSFIsStd");
PSString._add("CustomHSFList", "customHSFList");
PSString._add("CustomHSFName", "customHSFName");
PSString._add("CustomHSFValue", "customHSFValue");
PSString._add("DCS");
PSString._add("DICOMFormat", "Dicom");
PSString._add("DSEncodingAuto", "dataSetEncodingAuto");
PSString._add("DSEncodingISOLatin1", "dataSetEncodingISOLatin1");
PSString._add("DSEncodingMacRoman", "dataSetEncodingMacRoman");
PSString._add("DSEncodingUTF8", "dataSetEncodingUTF8");
PSString._add("DSEncodingUTF16", "dataSetEncodingUTF16");
PSString._add("DSEncodingNative", "dataSetEncodingNative");
PSString._add("EPSGenericFormat");
PSString._add("EPSPICTPreview");
PSString._add("EPSPreview");
PSString._add("EPSTIFFPreview");
PSString._add("eraseAll");
PSString._add("EXIF");
PSString._add("FileBrowserBackgroundProcessing");
PSString._add("FileBrowserCacheSizeLimit");
PSString._add("FileBrowserCustomThumbSize");
PSString._add("FileBrowserFileSizeLimit");
PSString._add("FileBrowserHighQualityPreview");
PSString._add("FileBrowserMaintainSidecarFiles");
PSString._add("FileBrowserParseNonImageXMPMetadata");
PSString._add("FileBrowserParseVectorFiles");
PSString._add("FileBrowserPrefsClass");
PSString._add("FileBrowserPrefsEnum");
PSString._add("FileBrowserPrefsKey");
PSString._add("Film2k");
PSString._add("Film4k");
PSString._add("FPXCompressLossyJPEG");
PSString._add("FPXCompressNone");
PSString._add("FPXCompress");
PSString._add("FPXQuality");
PSString._add("FPXSize");
PSString._add("FPXView");
PSString._add("FSS");
PSString._add("FourDigit", "fourDigit");
PSString._add("GCR");
PSString._add("GIF89aExport");
PSString._add("GIFColorFileColorTable");
PSString._add("GIFColorFileColors");
PSString._add("GIFColorFileMicrosoftPalette");
PSString._add("GIFColorFileType");
PSString._add("GIFColorLimit");
PSString._add("GIFExportCaption");
PSString._add("GIFFormat");
PSString._add("GIFMaskChannelIndex");
PSString._add("GIFMaskChannelInverted");
PSString._add("GIFPaletteAdaptive");
PSString._add("GIFPaletteExact");
PSString._add("GIFPaletteFile");
PSString._add("GIFPaletteOther");
PSString._add("GIFPaletteSystem");
PSString._add("GIFPaletteType");
PSString._add("GIFRequiredColorSpaceIndexed");
PSString._add("GIFRequiredColorSpaceRGB");
PSString._add("GIFRequiredColorSpaceType");
PSString._add("GIFRowOrderInterlaced");
PSString._add("GIFRowOrderNormal");
PSString._add("GIFRowOrderType");
PSString._add("GIFTransparentColor");
PSString._add("GIFTransparentIndexBlue");
PSString._add("GIFTransparentIndexGreen");
PSString._add("GIFTransparentIndexRed");
PSString._add("GIFUseBestMatch");
PSString._add("GPUEnabled", "gpuEnabled");
PSString._add("Acrobat3dEngineEnabled", "acrobat3dEnabled");
PSString._add("OpenGLEnabled", "openglEnabled");
PSString._add("OpenGLAutoTune", "autoTune");
PSString._add("OpenGLAdvanced", "openglAdvanced");
PSString._add("OpenGLAdvancedEnabled", "glAdvancedEnabled");
PSString._add("OpenGLD2SEnabled", "openglD2SEnabled");
PSString._add("OpenGLCheckCompEnum", "gpuCheckerComposite");
PSString._add("OpenGLVBLSyncEnabled", "openglVBLSyncEnabled");
PSString._add("OpenGLAdvDTSEnabled", "openglAdvDTSEnabled");
PSString._add("OpenGLAdvImageEnabled", "openglAdvImageEnabled");
PSString._add("OpenGLBilerpEnabled", "openglBilerpEnabled");
PSString._add("OpenGLACEEnabled", "openglACEEnabled");
PSString._add("OpenGLPOTEnabled", "openglPOTEnabled");
PSString._add("OpenGLSimpleTextUploadsEnabled", "openglSimpleTextUploadsEnabled");
PSString._add("OpenGLDeepColorEnabled", "openglDeepColorEnabled");
PSString._add("OpenGLTuneSize", "openglTunedSize");
PSString._add("OpenGLCheckComp", "openglCheckerComposite");
PSString._add("OpenViewlessDocument", "openViewlessDocument");
PSString._add("HDTV");
PSString._add("HDTV1080p");
PSString._add("HDVHDTV720p");
PSString._add("HDV1080p");
PSString._add("HSBColorClass");
PSString._add("HSBColorEnum");
PSString._add("HSBColorMode");
PSString._add("HSLColor");
PSString._add("IBMPC");
PSString._add("ICCEngine");
PSString._add("ICCSetupName");
PSString._add("ICC");
PSString._add("ID");
PSString._add("IEEE32BitFloatingPoint");
PSString._add("IEEE64BitFloatingPoint");
PSString._add("JIS78Form");
PSString._add("JIS83Form");
PSString._add("JPEGFormat");
PSString._add("JPEGQuality");
PSString._add("JPEG");
PSString._add("lensCorrection");
PSString._add("LUTAnimation");
PSString._add("LZWCompression");
PSString._add("NTSCColors");
PSString._add("NTSC");
PSString._add("NTSCWidescreen");
PSString._add("OS2");
PSString._add("P22EBU");
PSString._add("PAL");
PSString._add("PDFExport");
PSString._add("PDFGenericFormat");
PSString._add("PICTFileFormat");
PSString._add("PICTResourceFormat");
PSString._add("PNGFilterAdaptive");
PSString._add("PNGFilterAverage");
PSString._add("PNGFilterNone");
PSString._add("PNGFilterPaeth");
PSString._add("PNGFilter");
PSString._add("PNGFilterSub");
PSString._add("PNGFilterUp");
PSString._add("PNGFormat");
PSString._add("PNGInterlaceAdam7");
PSString._add("PNGInterlaceNone");
PSString._add("PNGInterlaceType");
PSString._add("PixelScaleFactor", "pixelScaleFactor");
PSString._add("PromptedForColorSetup", "promptedForColorSetup");
PSString._add("ProtectAll", "protectAll");
PSString._add("ProtectComposite", "protectComposite");
PSString._add("ProtectNone", "protectNone");
PSString._add("ProtectPosition", "protectPosition");
PSString._add("ProtectTransparency", "protectTransparency");
PSString._add("PSOpenFileDialog");
PSString._add("QCSAverage");
PSString._add("QCSCorner0");
PSString._add("QCSCorner1");
PSString._add("QCSCorner2");
PSString._add("QCSCorner3");
PSString._add("QCSIndependent");
PSString._add("QCSSide0");
PSString._add("QCSSide1");
PSString._add("QCSSide2");
PSString._add("QCSSide3");
PSString._add("QDRectangle");
PSString._add("RGB48");
PSString._add("RGBBlendGamma");
PSString._add("RGBColorMode");
PSString._add("RGBColor");
PSString._add("RGBFloatColor");
PSString._add("RGBSetupClass");
PSString._add("RGBSetupSource");
PSString._add("RGBSetup");
PSString._add("RGBSpectrum");
PSString._add("RGB");
PSString._add("RLE");
PSString._add("SMPTEC");
PSString._add("TIFFFormat");
PSString._add("TIFF");
PSString._add("time");
PSString._add("UCA");
PSString._add("URL");
PSString._add("XMPMetadataAsUTF8");
PSString._add("ZoomView", "Zoomify");
PSString._add("a");
PSString._add("abbreviatedName");
PSString._add("aboutApp");
PSString._add("absColorimetric");
PSString._add("absolute");
PSString._add("accelerated");
PSString._add("accentedEdges");
PSString._add("actionData");
PSString._add("actionReference");
PSString._add("actionSet");
PSString._add("action");
PSString._add("activeFrameIndex");
PSString._add("activeFrameSetID");
PSString._add("actualPixels");
PSString._add("actualSize");
PSString._add("adaptCorrect");
PSString._add("adaptive");
PSString._add("addFilterMaskToSelection");
PSString._add("addKeyframe");
PSString._add("addKnotTool");
PSString._add("addLayerTogroupByDrag");
PSString._add("addNoise");
PSString._add("add");
PSString._add("addBlankVideoLayer");
PSString._add("addTo");
PSString._add("addToSelection");
PSString._add("addToSelectionContinuous");
PSString._add("addVideoLayer");
PSString._add("addressAttr");
PSString._add("addUserMaskToSelection");
PSString._add("addVectorMaskToSelection");
PSString._add("adjustImage");
PSString._add("adjustmentAddMask");
PSString._add("adjustmentAutoOptions");
PSString._add("adjustmentClip");
PSString._add("adjustmentClose");
PSString._add("adjustmentCloseGroup");
PSString._add("adjustmentComposite");
PSString._add("adjustmentDeletePreset");
PSString._add("adjustmentExpandedView");
PSString._add("adjustmentLayer");
PSString._add("adjustmentLoad");
PSString._add("adjustmentLoadPreset");
PSString._add("adjustmentOptions");
PSString._add("adjustmentReset");
PSString._add("adjustmentSave");
PSString._add("adjustmentSavePreset");
PSString._add("adjustmentShowClipping");
PSString._add("adjustment");
PSString._add("adobeOnlineHome");
PSString._add("adobeOnlineRegistration");
PSString._add("adobeOnlineUpdates");
PSString._add("adobeRGB1998");
PSString._add("airbrushEraser");
PSString._add("airbrushTool");
PSString._add("alias");
PSString._add("alignByAscent");
PSString._add("alignByCapHeight");
PSString._add("alignByLeading");
PSString._add("alignByMinimumValueRoman");
PSString._add("alignByMinimumValueAsian");
PSString._add("alignByXHeight");
PSString._add("alignDistributeSelector");
PSString._add("align");
PSString._add("alignGroup");
PSString._add("aligned");
PSString._add("alignment");
PSString._add("alignmentType");
PSString._add("allCaps");
PSString._add("allEnum");
PSString._add("allExcept");
PSString._add("allMeasurements");
PSString._add("allSmallCaps");
PSString._add("all");
PSString._add("allToolOptions");
PSString._add("allowSystemShortcuts");
PSString._add("allowUserModify");
PSString._add("alphaChannelOptionsClass");
PSString._add("alphaChannelOptions");
PSString._add("alphaChannels");
PSString._add("alphaInterpretation");
PSString._add("altTag");
PSString._add("alternate");
PSString._add("alternateLigatures");
PSString._add("altligature");
PSString._add("ambientBrightness");
PSString._add("ambientColor");
PSString._add("amountHigh");
PSString._add("amountLow");
PSString._add("amountMedium");
PSString._add("amount");
PSString._add("amplitudeMax");
PSString._add("amplitudeMin");
PSString._add("anchor");
PSString._add("anchorTime");
PSString._add("ancient");
PSString._add("angle1");
PSString._add("angle2");
PSString._add("angle3");
PSString._add("angle4");
PSString._add("angleDynamics");
PSString._add("angle");
PSString._add("angleUnit");
PSString._add("angledStrokes");
PSString._add("animationFrameActivate");
PSString._add("animationFrameClass");
PSString._add("animationFrameExtendSelection");
PSString._add("animationClass");
PSString._add("animationFrameList");
PSString._add("animationFrameDelay");
PSString._add("animationFrameReplace");
PSString._add("animationFrameReplaceType");
PSString._add("animationFrameReplaceDontDispose");
PSString._add("animationFrameReplaceDispose");
PSString._add("animationFrameReplaceAutoDispose");
PSString._add("animationFramesByDefault");
PSString._add("animationFramesContiguous");
PSString._add("animationFramesFromLayers");
PSString._add("animationFramesToLayers");
PSString._add("animationGoToNextFrame");
PSString._add("animationGoToPreviousFrame");
PSString._add("animationGoToFirstFrame");
PSString._add("animationGoToLastFrame");
PSString._add("animationPanelKey");
PSString._add("animationFXRefPoint");
PSString._add("animationImageMask");
PSString._add("animationKey");
PSString._add("animationLayerID");
PSString._add("animationLayerSettings");
PSString._add("animationLayerSpecific");
PSString._add("animationMatchLayer");
PSString._add("animationMatchLayerPosition");
PSString._add("animationMatchLayerVisibility");
PSString._add("animationMatchLayerStyle");
PSString._add("animationNewLayerPerFrame");
PSString._add("animationOldLayerSpecific", "_LSpec");
PSString._add("animationOptionsAuto");
PSString._add("animationOptionsHide");
PSString._add("animationOptionsShow");
PSString._add("animationFrameIDList");
PSString._add("animationLoopCount");
PSString._add("animationLoopEnum");
PSString._add("animationLoopForever");
PSString._add("animationLoopOnce");
PSString._add("animationLoopType");
PSString._add("animationOptimize");
PSString._add("animationOptByBounds");
PSString._add("animationOptByPixelRemoval");
PSString._add("animationPaletteOptions");
PSString._add("animationPasteFrames");
PSString._add("animationPasteFramesMethod");
PSString._add("animationPasteFramesOver");
PSString._add("animationPasteFramesBefore");
PSString._add("animationPasteFramesAfter");
PSString._add("animationPasteFramesReplace");
PSString._add("animationPasteFramesLink");
PSString._add("animationPictSize");
PSString._add("animationPropagate");
PSString._add("animationSelectAll");
PSString._add("animationShowNewLayersInFrames");
PSString._add("animationToFrame");
PSString._add("animationTween");
PSString._add("animationTweenWithNext");
PSString._add("animationTweenWithPrev");
PSString._add("animationTweenSel");
PSString._add("animationTweenAllLayers");
PSString._add("animationTweenSelLayers");
PSString._add("animationTweenNumFrames");
PSString._add("animationTweenPosition");
PSString._add("animationTweenOpacity");
PSString._add("animationTweenEffects");
PSString._add("animationUnifyPosition");
PSString._add("animationUnifyEffects");
PSString._add("animationUnifyVisibility");
PSString._add("animationVectorMask");
PSString._add("animationTrack");
PSString._add("animInterpStyle");
PSString._add("animKey");
PSString._add("anisotropic");
PSString._add("annotSound");
PSString._add("annotText");
PSString._add("annotType");
PSString._add("annotUnknown");
PSString._add("annotation");
PSString._add("antiAliasCrisp");
PSString._add("antiAliasHigh");
PSString._add("antiAliasLow");
PSString._add("antiAliasMedium");
PSString._add("antiAliasNone");
PSString._add("antiAliasSharp");
PSString._add("antiAliasSmooth");
PSString._add("antiAlias");
PSString._add("antiAliasStrong");
PSString._add("antiAliasType");
PSString._add("antiAliasedPICTAcquire");
PSString._add("any");
PSString._add("appParameters");
PSString._add("appendCopy");
PSString._add("append");
PSString._add("applSignature");
PSString._add("appleEvent");
PSString._add("appleRGB");
PSString._add("application");
PSString._add("applyComp");
PSString._add("applyImageEnum");
PSString._add("applyImageEvent");
PSString._add("applyimageStackPluginRenderer", "applyImageStackPluginRenderer");
PSString._add("applyLocking");
PSString._add("apply");
PSString._add("applyStyle");
PSString._add("areaSelector");
PSString._add("area");
PSString._add("aroundCenter");
PSString._add("arrange");
PSString._add("arrowhead");
PSString._add("artBox");
PSString._add("artBrushTool");
PSString._add("as");
PSString._add("ascenderAlignment");
PSString._add("askLayeredTIFF");
PSString._add("askMismatchOpening");
PSString._add("askMismatchPasting");
PSString._add("askMissing");
PSString._add("ask");
PSString._add("askWhenOpening");
PSString._add("aspectRatio");
PSString._add("assert");
PSString._add("assignProfile");
PSString._add("assumeOptions");
PSString._add("assumedCMYK");
PSString._add("assumedGray");
PSString._add("assumedProfile");
PSString._add("assumedRGB");
PSString._add("at");
PSString._add("ate1");
PSString._add("attachEMail");
PSString._add("authorName");
PSString._add("autoAdvanceSeconds");
PSString._add("autoAdvance");
PSString._add("autoBlackWhite");
PSString._add("autoBlendType");
PSString._add("autoCollapseDrawers");
PSString._add("autoContrast");
PSString._add("autoErase");
PSString._add("autoFixCorrect");
PSString._add("autoKern");
PSString._add("autoLeadingPercentage");
PSString._add("autoLeading");
PSString._add("autoNeutrals");
PSString._add("autoShowRevealStrips");
PSString._add("auto");
PSString._add("autoLaunchBridge");                 // XXX deprecated CS4
PSString._add("autoTCY");
PSString._add("autoUpdateFile", "autoUpdateFiles");
PSString._add("axis");
PSString._add("bMPFormat");
PSString._add("b");
PSString._add("backLight");
PSString._add("back");
PSString._add("backgroundColor");
PSString._add("backgroundEraserTool");
PSString._add("backgroundLayer");
PSString._add("backgroundLevel");
PSString._add("background");
PSString._add("backwardEnum");
PSString._add("backward");
PSString._add("balance");
PSString._add("basRelief");
PSString._add("baseName");
PSString._add("base");
PSString._add("baselineAlignment");
PSString._add("baselineDirection");
PSString._add("baselineShift");
PSString._add("baseline");
PSString._add("batchFromDroplet");
PSString._add("batchSourceType");
PSString._add("batch");
PSString._add("beepWhenDone");
PSString._add("beforeRunning");
PSString._add("beginRamp");
PSString._add("beginSustain");
PSString._add("behind");
PSString._add("below");
PSString._add("best");
PSString._add("better");
PSString._add("bevelDirection");
PSString._add("bevelEmbossStampStyle");
PSString._add("bevelEmboss");
PSString._add("bevelEmbossStyle");
PSString._add("bevelJoin");
PSString._add("bevelStyle");
PSString._add("bevelTechnique");
PSString._add("bicubic");
PSString._add("bicubicSmoother");
PSString._add("bicubicSharper");
PSString._add("bigNudgeH");
PSString._add("bigNudgeV");
PSString._add("bilateral", "surfaceBlur");
PSString._add("bilinear");
PSString._add("binary");
PSString._add("bitDepth1");
PSString._add("bitDepth24");
PSString._add("bitDepth4");
PSString._add("bitDepth8");
PSString._add("bitDepth");
PSString._add("bitmapMode");
PSString._add("bitmap");
PSString._add("blackAndWhite");
PSString._add("blackAndWhitePresetMode");
PSString._add("blackAndWhitePresetFileName");
PSString._add("blackBody");
PSString._add("blackClip");
PSString._add("blackGenerationCurve");
PSString._add("blackGeneration");
PSString._add("blackGenerationType");
PSString._add("blackIntensity");
PSString._add("blackLevel");
PSString._add("blackLimit");
PSString._add("black");
PSString._add("blacks");
PSString._add("blankFrameReader");
PSString._add("blast");
PSString._add("bleed");
PSString._add("bleedBox");
PSString._add("blendClipped");
PSString._add("blendInterior");
PSString._add("blendMode");
PSString._add("blendOptions");
PSString._add("blendRange");
PSString._add("blindsHorz");
PSString._add("blindsVert");
PSString._add("blockEraser");
PSString._add("blocks");
PSString._add("blueBlackPoint");
PSString._add("blueChannelCleanup");
PSString._add("blueFloat");
PSString._add("blueGamma");
PSString._add("blue");
PSString._add("blueWhitePoint");
PSString._add("blueX");
PSString._add("blueY");
PSString._add("blues");
PSString._add("blurEvent");
PSString._add("blurMethod");
PSString._add("blurMore");
PSString._add("blurQuality");
PSString._add("blur");
PSString._add("blurTool");
PSString._add("blurType");
PSString._add("bokmalNorwegianLanguage");
PSString._add("bold");
PSString._add("bolditalic");
PSString._add("bookColorKey", "bookKey");
PSString._add("bookColor");
PSString._add("bookID");
PSString._add("book");
PSString._add("boolean");
PSString._add("border");
PSString._add("borderThickness");
PSString._add("bothAxes");
PSString._add("both");
PSString._add("bottomEnum");
PSString._add("bottomRightPixelColor");
PSString._add("bottom");
PSString._add("bounds");
PSString._add("boundingBox");
PSString._add("box");
PSString._add("boxBlur", "boxblur");
PSString._add("boxIn");
PSString._add("boxOut");
PSString._add("brazilianPortugueseLanguage");
PSString._add("brightnessContrast");
PSString._add("brightnessEvent");
PSString._add("brightness");
PSString._add("bringToFront");
PSString._add("broadcastKey");
PSString._add("browserHeight");
PSString._add("browserWidth");
PSString._add("brushColorRed");
PSString._add("brushColorGreen");
PSString._add("brushColorBlue");
PSString._add("brushDarkRough");
PSString._add("brushDetail");
PSString._add("brushGroup");
PSString._add("brushLightRough");
PSString._add("brushPreset");
PSString._add("brushSimple");
PSString._add("brushSize");
PSString._add("brushSparkle");
PSString._add("brush");
PSString._add("brushType");
PSString._add("BrushTipDynamicsLock", "brushTipDynamicsLock");
PSString._add("brushWideBlurry");
PSString._add("brushWideSharp");
PSString._add("brushesAppend");
PSString._add("brushesDefine");
PSString._add("brushesDelete");
PSString._add("brushesLoad");
PSString._add("brushesNew");
PSString._add("brushesOptions");
PSString._add("brushesReset");
PSString._add("brushesSave");
PSString._add("brushes");
PSString._add("bucketTool");
PSString._add("buildNumber");
PSString._add("builtInContour", "builtInShapeCurve");
PSString._add("builtinProfile");
PSString._add("builtinProof");
PSString._add("builtin");
PSString._add("bulgarianLanguage");
PSString._add("bumpAmplitude");
PSString._add("bumpChannel");
PSString._add("burasagariNone");
PSString._add("burasagariStandard");
PSString._add("burasagari");
PSString._add("burasagariStrong");
PSString._add("burasagariType");
PSString._add("burnInH");
PSString._add("burnInM");
PSString._add("burnInS");
PSString._add("burnInTool");
PSString._add("buttCap");
PSString._add("buttonMode");
PSString._add("by");
PSString._add("byline");
PSString._add("bylineTitle");
PSString._add("byteOrder");
PSString._add("bwPresetKind");
PSString._add("bwPresetFileName");
PSString._add("cachePrefs");
PSString._add("calculation");
PSString._add("calculationType");
PSString._add("calculations");
PSString._add("calibrationBars");
PSString._add("cameraRotation");
PSString._add("canOpenByPhotoshop");
PSString._add("canadianFrenchLanguage");
PSString._add("canadianEnglishLanguage");
PSString._add("canvasBackgroundColors");
PSString._add("cancel");
PSString._add("canvasAttributes");
PSString._add("canvasColorMode");
PSString._add("canvasExtensionColor");
PSString._add("canvasExtensionColorType");
PSString._add("CanvasFrame", "canvasFrame");
PSString._add("canvasSize");
PSString._add("caption");
PSString._add("captionWriter");
PSString._add("cascade");
PSString._add("caseSensitive");
PSString._add("catalanLanguage");
PSString._add("category");
PSString._add("ccittFax");
PSString._add("cellSize");
PSString._add("centerAlignment");
PSString._add("centerCropMarks");
PSString._add("centerDocumentWindows");
PSString._add("centerGlow");
PSString._add("center");
PSString._add("centeredFrame");
PSString._add("chalkArea");
PSString._add("chalkCharcoal");
PSString._add("channelDenoise");
PSString._add("channelDenoiseParams");
PSString._add("channelMatrix");
PSString._add("channelMixer");
PSString._add("channelName");
PSString._add("channelOptions");
PSString._add("channelReference");
PSString._add("channelRestrictions");
PSString._add("channel");
PSString._add("channelsInterleaved");
PSString._add("channelsPaletteOptions");
PSString._add("channels");
PSString._add("char");
PSString._add("characterRotation");
PSString._add("charcoalAmount");
PSString._add("charcoalArea");
PSString._add("charcoal");
PSString._add("checkAll");
PSString._add("checkForBackgroundLayer");
PSString._add("checkForOpenDoc");
PSString._add("checkForRasterLayer");
PSString._add("checkForSelection");
PSString._add("checkForTextLayer");
PSString._add("checkForVectorLayer");
PSString._add("checkerboardLarge");
PSString._add("checkerboardMedium");
PSString._add("checkerboardNone");
PSString._add("checkerboardSize");
PSString._add("checkerboardSmall");
PSString._add("chineseLanguage");
PSString._add("chokeMatte");
PSString._add("chroma");
PSString._add("chromeFXClass");
PSString._add("chromeFX");
PSString._add("chrome");
PSString._add("city");
PSString._add("classBrowserFile");
PSString._add("classBrowser");
PSString._add("classColor");
PSString._add("classContour", "classFXShapeCurve");
PSString._add("classElement");
PSString._add("classExport");
PSString._add("classFormat");
PSString._add("classHueSatHueSatV2");
PSString._add("classImport");
PSString._add("classMode");
PSString._add("class");
PSString._add("classStringFormat");
PSString._add("classTextExport");
PSString._add("classTextImport");
PSString._add("clearAmount");
PSString._add("clearBrushControls");
PSString._add("clearEnum");
PSString._add("clearEvent");
PSString._add("clearGuides");
PSString._add("clearRecentFiles");
PSString._add("clearSlices");
PSString._add("clearStyle");
PSString._add("clearWarning");
PSString._add("clip");
PSString._add("clipboard");
PSString._add("clippingInfo");
PSString._add("clippingPathEPS");
PSString._add("clippingPathFlatness");
PSString._add("clippingPathIndex");
PSString._add("clippingPathInfo");
PSString._add("clippingPath");
PSString._add("cloneSource");
PSString._add("cloneSourceAutoHideOverlay");
PSString._add("cloneSourceInvertOverlay");
PSString._add("cloneSourceLockFrame");
PSString._add("cloneSourceResetTransform");
PSString._add("cloneSourceShowOverlay");
PSString._add("cloneSourceClipOverlay");
PSString._add("cloneSourceSource1");
PSString._add("cloneSourceSource2");
PSString._add("cloneSourceSource3");
PSString._add("cloneSourceSource4");
PSString._add("cloneSourceSource5");
PSString._add("cloneSourceToolOptions");
PSString._add("cloneStampTool");
PSString._add("closeAll");
PSString._add("closeQuickStart");
PSString._add("close");
PSString._add("closedSubpath");
PSString._add("clouds");
PSString._add("coarseDots");
PSString._add("colorBalance");
PSString._add("colorBurn");
PSString._add("colorCast");
PSString._add("colorChannel");
PSString._add("colorChannels");
PSString._add("colorCorrection");
PSString._add("colorDodge");
PSString._add("colorDynamicsLock");
PSString._add("colorHalftone");
PSString._add("colorIndicates");
PSString._add("colorManagement");
PSString._add("colorMatch");
PSString._add("colorMode");
PSString._add("colorNoise");
PSString._add("colorOverlay");
PSString._add("colorPalette");
PSString._add("colorPickerPrefsClass");
PSString._add("colorPickerPrefs");
PSString._add("colorRange");
PSString._add("colorReplacementBrushTool");
PSString._add("colorSamplerList");
PSString._add("colorSampler");
PSString._add("colorSamplerTool");
PSString._add("colorSettings");
PSString._add("colorSpace");
PSString._add("colorStop");
PSString._add("colorStopType");
PSString._add("color");
PSString._add("colorTable");
PSString._add("coloredPencil");
PSString._add("colorimetric");
PSString._add("colorize");
PSString._add("colorsList");
PSString._add("colors");
PSString._add("columnCount");
PSString._add("columnGutter");
PSString._add("columnWidth");
PSString._add("combine");
PSString._add("commandKey");
PSString._add("command");
PSString._add("comment");
PSString._add("commit");
PSString._add("commonIssues", "common");
PSString._add("comp");
PSString._add("compatible");
PSString._add("compensation");
PSString._add("component");
PSString._add("composite");
PSString._add("compression");
PSString._add("compsClass");
PSString._add("compsList");
PSString._add("compsPanelKey");
PSString._add("computedBrush");
PSString._add("concavity");
PSString._add("concise");
PSString._add("condition");
PSString._add("connectionForms");
PSString._add("consolidateAllTabs");
PSString._add("constant");
PSString._add("constrainProportions");
PSString._add("constrain");
PSString._add("constructionFOV");
PSString._add("contactSheet");
PSString._add("conteCrayon");
PSString._add("contentAware");
PSString._add("contentLayer");
PSString._add("content");
PSString._add("contextualLigatures");
PSString._add("contiguous");
PSString._add("continue");
PSString._add("continuity");
PSString._add("contourBrush");
PSString._add("contourEdge");
PSString._add("contract");
PSString._add("contrast");
PSString._add("convertKnotTool");
PSString._add("convertMode");
PSString._add("convert");
PSString._add("convertAnimation");
PSString._add("convertTimeline");
PSString._add("convertToCMYK");
PSString._add("convertToGray");
PSString._add("convertToLab");
PSString._add("convertToProfile");
PSString._add("convertToRGB");
PSString._add("convertToShape");
PSString._add("copyAsHTML");
PSString._add("copyBrushTexture");
PSString._add("copyEffects");
PSString._add("copyEvent");
PSString._add("copyKeyframes");
PSString._add("copyMerged");
PSString._add("copy");
PSString._add("copyToLayer");
PSString._add("copyrightNotice");
PSString._add("copyrightStatus");
PSString._add("copyright");
PSString._add("copyrightedWork");
PSString._add("cornerCropMarks");
PSString._add("corner");
PSString._add("correctionMethod");
PSString._add("countDynamics");
PSString._add("count");
PSString._add("countAuto");
PSString._add("countClear");
PSString._add("countAdd");
PSString._add("countDelete");
PSString._add("countMove");
PSString._add("countClass");
PSString._add("countColor");
PSString._add("countGroupVisible");
PSString._add("countGroupMarkerSize");
PSString._add("countGroupFontSize");
PSString._add("countRenameGroup");
PSString._add("countAddGroup");
PSString._add("countDeleteGroup");
PSString._add("countSetCurrentGroup");
PSString._add("countCustomColor");
PSString._add("countTool");
PSString._add("countryName");
PSString._add("coverDown");
PSString._add("coverRight");
PSString._add("crackBrightness");
PSString._add("crackDepth");
PSString._add("crackSpacing");
PSString._add("craquelure");
PSString._add("createDroplet");
PSString._add("createDuplicate");
PSString._add("createInterpolation");
PSString._add("createLayersFromLayerFX");
PSString._add("createWorkPath");
PSString._add("creatorAddr");
PSString._add("creatorAddrCity");
PSString._add("creatorAddrRegion");
PSString._add("creatorAddrPost", "creatorAddrPostCode");
PSString._add("creatorAddrCountry");
PSString._add("creatorPhone");
PSString._add("creatorEmail");
PSString._add("creatorURL");
PSString._add("credit");
PSString._add("croatianLanguage");
PSString._add("crop");
PSString._add("cropBox");
PSString._add("cropTo");
PSString._add("cropTool");
PSString._add("cross");
PSString._add("crosshatch");
PSString._add("crossover");
PSString._add("crystallize");
PSString._add("ctrlPPrint");
PSString._add("ctrlPSystemPrint");
PSString._add("ctrlShiftZEnum");
PSString._add("ctrlYEnum");
PSString._add("ctrlZEnum");
PSString._add("currentColors");
PSString._add("currentFrame");
PSString._add("currentHistoryState");
PSString._add("currentLayer");
PSString._add("currentLight");
PSString._add("current");
PSString._add("currentToolOptions");
PSString._add("cursorCrosshair");
PSString._add("cursorKind");
PSString._add("cursorShape");
PSString._add("curveFile");
PSString._add("curvePoint");
PSString._add("curve");
PSString._add("curvesAdjustment");
PSString._add("curvesDisplayOptions");
PSString._add("curvesPresetKind");
PSString._add("curvesPresetFileName");
PSString._add("curves");
PSString._add("customEnum");
PSString._add("customEnvelopeWarp");
PSString._add("customForced");
PSString._add("customMatte");
PSString._add("customPaletteClass");
PSString._add("customPalette");
PSString._add("customPattern");
PSString._add("customPhosphors");
PSString._add("customScaleFactor");
PSString._add("customShape");
PSString._add("customShapeTool");
PSString._add("cookieCutterTool");
PSString._add("customStops");
PSString._add("custom");
PSString._add("customWhitePoint");
PSString._add("cut");
PSString._add("cutToLayer");
PSString._add("cutout");
PSString._add("cylindrical");
PSString._add("cyan");
PSString._add("cyans");
PSString._add("cycleComp");
PSString._add("czechLanguage");
PSString._add("danishLanguage");
PSString._add("darkIntensity");
PSString._add("dark");
PSString._add("darkStrokes");
PSString._add("darkenOnly");
PSString._add("darken");
PSString._add("darkerColor");
PSString._add("darkness");
PSString._add("dashedLines");
PSString._add("dataPoints");
PSString._add("dataSetClass");
PSString._add("dataSetEncoding");
PSString._add("dataSetName");
PSString._add("dataSetNumberLeadingZeros");
PSString._add("dataSetNumber");
PSString._add("dateCreated");
PSString._add("datum");
PSString._add("ddmm");
PSString._add("ddmmyy");
PSString._add("deInterlace");
PSString._add("deinterlaceMethod");
PSString._add("dePosterize");
PSString._add("debugExecutionModeClass");
PSString._add("debugExecutionMode");
PSString._add("decimalStruct");
PSString._add("deepDepth");
PSString._add("deep");
PSString._add("defaultAppScript");
PSString._add("defaultFill");
PSString._add("defaultForm");
PSString._add("defaultStyle");
PSString._add("defaultTabWidth");
PSString._add("defaultWorkspace");
PSString._add("defineBrush");
PSString._add("defineCustomShape");
PSString._add("defineVariables");
PSString._add("definePattern");
PSString._add("defineSprayer");
PSString._add("definition");
PSString._add("defringe");
PSString._add("deleteAllAnnot");
PSString._add("deleteContained");
PSString._add("deleteFrame");
PSString._add("deleteKeyframe");
PSString._add("deleteKnotTool");
PSString._add("deleteMeasurements");
PSString._add("deleteScaleFactor");
PSString._add("deleteSelectedKeyframes");
PSString._add("deleteSelection");
PSString._add("delete");
PSString._add("deleteWorkspace");
PSString._add("denoise");
PSString._add("denoisePresets");
PSString._add("denominator");
PSString._add("density");
PSString._add("densityUnit");
PSString._add("deposterize");
PSString._add("depth");
PSString._add("desaturate");
PSString._add("descenderAlignment");
PSString._add("description");
PSString._add("deselect");
PSString._add("despeckle");
PSString._add("destBlackMax");
PSString._add("destBlackMin");
PSString._add("destWhiteMax");
PSString._add("destWhiteMin");
PSString._add("destinationMode");
PSString._add("detail");
PSString._add("detailed");
PSString._add("deviceCentral");
PSString._add("diameter");
PSString._add("diamond");
PSString._add("differenceClouds");
PSString._add("difference");
PSString._add("diffuseGlow");
PSString._add("diffuseMode");
PSString._add("diffuse");
PSString._add("diffusionDitherEnum");
PSString._add("diffusionDither");
PSString._add("diffusion");
PSString._add("dimension");
PSString._add("directSelectTool");
PSString._add("directionBalance");
PSString._add("direction");
PSString._add("disable");
PSString._add("disableLayerFX");
PSString._add("disableLayerStyle");
PSString._add("disableSingleFXEvent", "disableSingleFX");
PSString._add("discardVectorMask");
PSString._add("dispatcherID");
PSString._add("displaceFile");
PSString._add("displace");
PSString._add("displacementMap");
PSString._add("displayCursorsPreferences");
PSString._add("displayName");
PSString._add("displayPrefs");
PSString._add("disposeFrame");
PSString._add("dissolve");
PSString._add("distance");
PSString._add("distanceUnit");
PSString._add("distort");
PSString._add("distortion");
PSString._add("distribute");
PSString._add("distribution");
PSString._add("ditherAmount");
PSString._add("ditherPreserve");
PSString._add("ditherQuality");
PSString._add("dither");
PSString._add("divide");
PSString._add("documentID");
PSString._add("documentMode");
PSString._add("documentReference");
PSString._add("document");
PSString._add("documentTimelineSettings");
PSString._add("dodgeH");
PSString._add("dodgeM");
PSString._add("dodgeS");
PSString._add("dodgeTool");
PSString._add("dontRecord");
PSString._add("dotGainCurves");
PSString._add("dotGain");
PSString._add("dots");
PSString._add("downgradeProfile");
PSString._add("draft");
PSString._add("draw");
PSString._add("dropCapMultiplier");
PSString._add("dropShadow");
PSString._add("dryBrush");
PSString._add("dualBrush");
PSString._add("dualBrushLock");
PSString._add("duotoneInk");
PSString._add("duotoneMode");
PSString._add("duotone");
PSString._add("duplicateFrame");
PSString._add("duplicate");
PSString._add("duplication");
PSString._add("duration");
PSString._add("dustAndScratches");
PSString._add("dutchLanguage");
PSString._add("dutchLanguageOldRules", "kdutchLanguageOldRules");
PSString._add("DVCPRO720p");
PSString._add("DVCPRO1080p");
PSString._add("dynamicColorSliders");
PSString._add("eBUITU");
PSString._add("eMBoxStrikethroughOn");
PSString._add("easyTextSelection");
PSString._add("edgeBrightness");
PSString._add("edgeFidelity");
PSString._add("edgeGlow");
PSString._add("edgeIntensity");
PSString._add("edgeSimplicity");
PSString._add("edge");
PSString._add("edgeThickness");
PSString._add("edgeWidth");
PSString._add("editComment");
PSString._add("editDataSets");
PSString._add("editInImageReady");
PSString._add("editLogItems");
PSString._add("editLogItemsType");
PSString._add("editVariables");
PSString._add("effectBevel");
PSString._add("effectColorOverlay");
PSString._add("effectDropShadow");
PSString._add("effectGradientOverlay");
PSString._add("effectInnerGlow");
PSString._add("effectInnerShadow");
PSString._add("effectNone");
PSString._add("effectOuterGlow");
PSString._add("effectOverlay");
PSString._add("effectPatternOverlay");
PSString._add("effectSatin");
PSString._add("effect");
PSString._add("effectStroke");
PSString._add("elementReference");
PSString._add("element");
PSString._add("eliminateEvenFields");
PSString._add("eliminateOddFields");
PSString._add("ellipse");
PSString._add("ellipseTool");
PSString._add("embedCMYK");
PSString._add("embedFonts");
PSString._add("embedGray");
PSString._add("embedLab");
PSString._add("embedLayer");
PSString._add("embedProfiles");
PSString._add("embedRGB");
PSString._add("emboss");
PSString._add("emulsionDown");
PSString._add("enable");
PSString._add("enabled");
PSString._add("enableFloatingDocDocking");
PSString._add("enableFontFallback");
PSString._add("enableWariChu");
PSString._add("encoding");
PSString._add("endArrowhead");
PSString._add("endFrameNumber");
PSString._add("endIndent");
PSString._add("endRamp");
PSString._add("end");
PSString._add("endSustain");
PSString._add("endTime");
PSString._add("engine");
PSString._add("englishLanguage");
PSString._add("entireImage");
PSString._add("entryStatusInvalid", "invalid");
PSString._add("entryStatusIsDirectory", "isDirectory");
PSString._add("entryStatusIsFile", "isFile");
PSString._add("entryStatusIsVolume", "isVolume");
PSString._add("entryStatusNotProcessed", "notprocessed");
PSString._add("entryStatus");
PSString._add("entryStatusType");
PSString._add("enumerated");                   // XXX manual edit
PSString._add("envelopeWarpStyle", "envelopewarpStyle");
PSString._add("equalize");
PSString._add("eraseToHistory");
PSString._add("eraserKind");
PSString._add("eraserTool");
PSString._add("estonianLanguage");
PSString._add("even");
PSString._add("eventClassAttr");
PSString._add("eventIDAttr");
PSString._add("eventRecord");
PSString._add("eventSourceAttr");
PSString._add("exactPoints");
PSString._add("exact");
PSString._add("exchange");
PSString._add("excludeIntersection");
PSString._add("exclusion");
PSString._add("expand");
PSString._add("expertForm");
PSString._add("exportClipboard");
PSString._add("exportDataSet");
PSString._add("exportMeasurements");
PSString._add("export");
PSString._add("exportTimelineComments");
PSString._add("exposure");
PSString._add("extend");
PSString._add("extendedQuality");
PSString._add("extended");
PSString._add("extendKeyframeSelection");
PSString._add("extension");
PSString._add("extensionsQuery");
PSString._add("extractWorkArea");
PSString._add("extraLarge");
PSString._add("extrudeDepth");
PSString._add("extrudeMaskIncomplete");
PSString._add("extrudeRandom");
PSString._add("extrudeSize");
PSString._add("extrudeSolidFace");
PSString._add("extrude");
PSString._add("extrudeType");
PSString._add("eyeDropperSample");
PSString._add("eyeDropperSampleSheet");
PSString._add("eyeDropperSampleType");
PSString._add("eyedropperTool");
PSString._add("facet");
PSString._add("fade");
PSString._add("fadeTo");
PSString._add("fadeoutSteps");
PSString._add("falloff");
PSString._add("false");
PSString._add("faster");
PSString._add("feather");
PSString._add("fiberLength");
PSString._add("figureStyle");
PSString._add("fileBrowser");
PSString._add("fileCreator");
PSString._add("fileEnum");
PSString._add("fileInfo");
PSString._add("fileNamingComponent");
PSString._add("fileNamingComponents");
PSString._add("fileNamingRules");
PSString._add("fileReference");
PSString._add("fileSavePrefsClass");
PSString._add("fileSavePrefs");
PSString._add("file");
PSString._add("filesList");
PSString._add("fileType");
PSString._add("fillBack");
PSString._add("fillColor");
PSString._add("fillContents");
PSString._add("fillFirst");
PSString._add("fillFore");
PSString._add("fillInverse");
PSString._add("fillMode");
PSString._add("fillNeutral");
PSString._add("fillOpacity");
PSString._add("fillOverPrint");
PSString._add("fillSame");
PSString._add("fill");
PSString._add("fillflash");
PSString._add("filmGrain");
PSString._add("filterFX");
PSString._add("filterFXList");
PSString._add("filterFXStyle");
PSString._add("filterFXTrackID");
PSString._add("filterMaskDensity");
PSString._add("FilterMaskEnabled", "filterMaskEnable");
PSString._add("FilterMaskExtendWithWhite", "filterMaskExtendWithWhite");
PSString._add("filterMaskFeather");
PSString._add("FilterMaskLinked", "filterMaskLinked");
PSString._add("filterMaskOptions");
PSString._add("filterMask");
PSString._add("filter");
PSString._add("filterID");
PSString._add("findEdges");
PSString._add("findReplace");
PSString._add("find");
PSString._add("fineDots");
PSString._add("fingerpainting");
PSString._add("finnishLanguage");
PSString._add("firstBaselineMinimum");
PSString._add("firstIdle");
PSString._add("firstLineIndent");
PSString._add("first");
PSString._add("fitOnScreen");
PSString._add("fitPage");
PSString._add("fixed");
PSString._add("flagged");
PSString._add("flareCenter");
PSString._add("flashPixFormat");
PSString._add("flatness");
PSString._add("flattenImage");
PSString._add("flatten");
PSString._add("flick");
PSString._add("flip");
PSString._add("flipX");
PSString._add("flipY");
PSString._add("floatingPointPredictor", "floatPredictor");
PSString._add("floatAllWindows");
PSString._add("floatType");
PSString._add("floatUnit");
PSString._add("floatWindow");
PSString._add("flow");
PSString._add("focalLength");
PSString._add("focus");
PSString._add("folders");
PSString._add("fontCaps");
PSString._add("fontDesignAxes");
PSString._add("fontDesignAxesVectors");
PSString._add("fontFamilyName");
PSString._add("fontLargeName");
PSString._add("fontLargeSize");
PSString._add("fontList");
PSString._add("fontName");
PSString._add("fontPostScriptName");
PSString._add("fontScript");
PSString._add("fontSize");
PSString._add("fontSmallName");
PSString._add("fontSmallSize");
PSString._add("fontStyleName");
PSString._add("fontTechnology");
PSString._add("footageInfo");
PSString._add("footageInterpretation");
PSString._add("footageSize");
PSString._add("forcedColors");
PSString._add("forcedNoDebugger");
PSString._add("forceFormatOptions");
PSString._add("forceNotify");
PSString._add("foregroundColor");
PSString._add("foregroundLevel");
PSString._add("forceRecording");
PSString._add("format");
PSString._add("forwardEnum");
PSString._add("forward");
PSString._add("fractions");
PSString._add("fragment");
PSString._add("frameCount");
PSString._add("frameDelay");
PSString._add("frameDispose");
PSString._add("frameBaselineAlignment");
PSString._add("frameNumber");
PSString._add("frameFXClass");
PSString._add("frameFX");
PSString._add("frameFill");
PSString._add("frameFromVideo");
PSString._add("frameGlobalAngle");
PSString._add("frameGlobalAltitude");
PSString._add("frame");
PSString._add("frameID");
PSString._add("frameInfo");
PSString._add("frameRate");
PSString._add("frameSetID");
PSString._add("frameSkip");
PSString._add("frames");
PSString._add("frameStep");
PSString._add("frameStyle");
PSString._add("frameSets");
PSString._add("frameWidth");
PSString._add("freeTransformCenterState");
PSString._add("freeTransform");
PSString._add("freeformPenTool");
PSString._add("frequency");
PSString._add("fresco");
PSString._add("fromBuiltin");
PSString._add("fromMode");
PSString._add("from");
PSString._add("front");
PSString._add("fullDocument");
PSString._add("fullName");
PSString._add("fullSize");
PSString._add("fullWidthForm");
PSString._add("functionKey");
PSString._add("fuzziness");
PSString._add("gain");
PSString._add("gamma");
PSString._add("gammaCorrection");
PSString._add("gamutWarning");
PSString._add("gaussianBlur");
PSString._add("gaussianDistribution");
PSString._add("generalPreferences");
PSString._add("generalPrefs");
PSString._add("genieBrushTool");
PSString._add("geometryOnly");
PSString._add("geometryRecord");
PSString._add("geometryToolMode");
PSString._add("get");
PSString._add("glass");
PSString._add("glitterRight");
PSString._add("glitterDown");
PSString._add("glitterRDown");
PSString._add("globalAltitude");
PSString._add("globalAngle");
PSString._add("globalClass");
PSString._add("globalLightingAltitude", "globalAltitude");
PSString._add("globalLightingAngle");
PSString._add("globalLighting");
PSString._add("globalObject");
PSString._add("gloss");
PSString._add("glowAmount");
PSString._add("glowTechnique");
PSString._add("glowingEdges");
PSString._add("good");
PSString._add("gradientClassEvent");
PSString._add("gradientFill");
PSString._add("gradientForm");
PSString._add("gradientLayer");
PSString._add("gradientMapClass");
PSString._add("gradientMapEvent");
PSString._add("gradientOverlay");
PSString._add("gradient");
PSString._add("gradientTool");
PSString._add("gradientType");
PSString._add("grainClumped");
PSString._add("grainContrasty");
PSString._add("grainEnlarged");
PSString._add("grainHorizontal");
PSString._add("grainRegular");
PSString._add("grainSoft");
PSString._add("grainSpeckle");
PSString._add("grainSprinkles");
PSString._add("grainStippled");
PSString._add("grain");
PSString._add("grainType");
PSString._add("grainVertical");
PSString._add("graininess");
PSString._add("grainyDots");
PSString._add("graphicPen");
PSString._add("graphics");
PSString._add("gravityEffect");
PSString._add("gray16");
PSString._add("gray18");
PSString._add("gray22");
PSString._add("gray50");
PSString._add("grayBehavior");
PSString._add("grayFloat");
PSString._add("grayScaleRamp");
PSString._add("grayScale");
PSString._add("graySetup");
PSString._add("gray");
PSString._add("grayscaleMode");
PSString._add("grayscale");
PSString._add("grayscaleFloat");
PSString._add("greekLanguage");
PSString._add("greenBlackPoint");
PSString._add("greenFloat");
PSString._add("greenGamma");
PSString._add("green");
PSString._add("greenWhitePoint");
PSString._add("greenX");
PSString._add("greenY");
PSString._add("greens");
PSString._add("gridAlignment");
PSString._add("gridColor");
PSString._add("gridCustomColor");
PSString._add("gridMajor");
PSString._add("gridMinor");
PSString._add("gridStyle");
PSString._add("gridUnits");
PSString._add("groupEvent");
PSString._add("group");
PSString._add("groutWidth");
PSString._add("grow");
PSString._add("guideGridColor");
PSString._add("guideGridStyle");
PSString._add("guide");
PSString._add("guidesColor");
PSString._add("guidesCustomColor");
PSString._add("guidesGridPreferences");
PSString._add("guidesPrefs");
PSString._add("guides");
PSString._add("guidesStyle");
PSString._add("gutterWidth");
PSString._add("halfWidthForm");
PSString._add("halftoneFile");
PSString._add("halftoneScreen");
PSString._add("halftoneSize");
PSString._add("halftoneSpec");
PSString._add("handTool");
PSString._add("hangingRoman");
PSString._add("hardLight");
PSString._add("hardMix");
PSString._add("hardProof");
PSString._add("hardness");
PSString._add("hasAlpha");
PSString._add("hasMotion");
PSString._add("hasOptions", "hasoptions");
PSString._add("hasFilterMask");
PSString._add("hasUserMask");
PSString._add("hasVectorMask");
PSString._add("vectorMaskParams");
PSString._add("hdrOptions");
PSString._add("hdrToningMethodType");
PSString._add("header");
PSString._add("headline");
PSString._add("healFromDest2Src");
PSString._add("healFromSrc2Dest");
PSString._add("healJPEG");
PSString._add("healSelection");
PSString._add("healingBrushTool");
PSString._add("healingDirection");
PSString._add("heavy");
PSString._add("height");
PSString._add("help");
PSString._add("hidden");
PSString._add("hideAll");
PSString._add("hideCurrentPath");
PSString._add("hideSelection");
PSString._add("hide");
PSString._add("hideDocumentTabs");
PSString._add("highPass");
PSString._add("highQuality");
PSString._add("highQualityWarp");
PSString._add("high");
PSString._add("highlightArea");
PSString._add("highlightColor");
PSString._add("highlightLevels");
PSString._add("highlightMode");
PSString._add("highlightOpacity");
PSString._add("highlightStrength");
PSString._add("highlights");
PSString._add("histogramPaletteAllChannelsView");
PSString._add("histogramPaletteCompactView");
PSString._add("histogramPaletteExpandedView");
PSString._add("histogramPaletteShowChannelsInColor");
PSString._add("histogramPaletteShowStatistics");
PSString._add("histogramPaletteUncachedRefresh");
PSString._add("histogram");
PSString._add("historyBrushSource");
PSString._add("historyBrushTool");
PSString._add("historyLog");
PSString._add("historyPaletteOptions");
PSString._add("historyPreferences");
PSString._add("historyPrefsClass");
PSString._add("historyPrefs");
PSString._add("historyStateSource");
PSString._add("historyStateSourceType");
PSString._add("historyState");
PSString._add("historyStates");
PSString._add("history");
PSString._add("hold");
PSString._add("horizontalLocation");
PSString._add("horizontalOnly");
PSString._add("horizontalScale");
PSString._add("horizontal");
PSString._add("hostName");
PSString._add("hostVersion");
PSString._add("hours");
PSString._add("htmlText");
PSString._add("hueSatAdjustment");
PSString._add("hueSatAdjustmentV2");
PSString._add("hueSaturation");
PSString._add("hue");
PSString._add("huge");
PSString._add("hungarianLanguage");
PSString._add("hyphenateCapitalized");
PSString._add("hyphenateLimit");
PSString._add("hyphenatePostLength");
PSString._add("hyphenatePreLength");
PSString._add("hyphenate");
PSString._add("hyphenateWordSize");
PSString._add("hyphenationPreference");
PSString._add("hyphenationZone");
PSString._add("hyphen");
PSString._add("icelandicLanguage");
PSString._add("icfbottom");
PSString._add("icftop");
PSString._add("icon");
PSString._add("idle");
PSString._add("idleVM");
PSString._add("ignore");
PSString._add("illustratorPathsExport");
PSString._add("imageBalance");
PSString._add("imageCachePreferences");
PSString._add("imageCenter");
PSString._add("imageInterpolation");
PSString._add("imageLocation");
PSString._add("imagePoint");
PSString._add("imageReference");
PSString._add("imageSize");
PSString._add("imageStatistics");
PSString._add("image");
PSString._add("imageStack");
PSString._add("imageStackConvertSmartObject");
PSString._add("imageStackEditContents");
PSString._add("imageStackPlugin");
PSString._add("imageType");
PSString._add("importAnnots");
PSString._add("importDataSet", "importDataSets");
PSString._add("import");
PSString._add("importVideoToLayers");
PSString._add("impressionist");
PSString._add("inAPath");
PSString._add("in");
PSString._add("includeAnnotations");
PSString._add("includeAuthor");
PSString._add("includeCopyright");
PSString._add("includeDescription");
PSString._add("includeEXIFData");
PSString._add("includeExtension");
PSString._add("includeFilename");
PSString._add("includeTitle");
PSString._add("includeVectorData");
PSString._add("indent");
PSString._add("indexedColorMode");
PSString._add("indexedColor");
PSString._add("infoPaletteOptions");
PSString._add("infoPaletteToggleSamplers");
PSString._add("inherits");
PSString._add("inkBlack");
PSString._add("inkColors");
PSString._add("inkOutlines");
PSString._add("inkTransfer");
PSString._add("inks");
PSString._add("innerBevel");
PSString._add("innerGlowSource");
PSString._add("innerGlowSourceType");
PSString._add("innerGlow");
PSString._add("innerShadow");
PSString._add("inputMapRange");
PSString._add("inputRange");
PSString._add("input");
PSString._add("insertBlankFrame");
PSString._add("insetFrame");
PSString._add("inside");
PSString._add("integerChannel");
PSString._add("integer");
PSString._add("intellectualGenre");
PSString._add("intensity");
PSString._add("intent");
PSString._add("interactive");
PSString._add("interactLevelAttr");
PSString._add("interfaceBevelHighlight");
PSString._add("interfaceBevelShadow");
PSString._add("interfaceBlack");
PSString._add("interfaceBorder");
PSString._add("interfaceButtonDarkShadow");
PSString._add("interfaceButtonDownFill");
PSString._add("interfaceButtonUpFill");
PSString._add("interfaceColorBlue2");
PSString._add("interfaceColorBlue32");
PSString._add("interfaceColorGreen2");
PSString._add("interfaceColorGreen32");
PSString._add("interfaceColorRed2");
PSString._add("interfaceColorRed32");
PSString._add("interfaceColor");
PSString._add("interfaceIconFillActive");
PSString._add("interfaceIconFillDimmed");
PSString._add("interfaceIconFillSelected");
PSString._add("interfaceIconFrameActive");
PSString._add("interfaceIconFrameDimmed");
PSString._add("interfaceIconFrameSelected");
PSString._add("interfaceOWLPaletteFill");
PSString._add("interfacePaletteFill");
PSString._add("interfacePrefs");
PSString._add("interfaceRed");
PSString._add("interfaceToolTipBackground");
PSString._add("interfaceToolTipText");
PSString._add("interfaceTransparencyBackground");
PSString._add("interfaceTransparencyForeground");
PSString._add("interfaceWhite");
PSString._add("interlaceCreateType");
PSString._add("interlaceEliminateType");
PSString._add("interlace");
PSString._add("interpolationHold");
PSString._add("interpolationLinear");
PSString._add("interpolationMethod");
PSString._add("interpolation");
PSString._add("interpolationType");
PSString._add("interpretAlpha");
PSString._add("interpretation");
PSString._add("interpretFootage");
PSString._add("inTime");
PSString._add("intersectFilterMaskWithSelection");
PSString._add("intersect");
PSString._add("intersectUserMaskWithSelection");
PSString._add("intersectVectorMaskWithSelection");
PSString._add("intersectWith");
PSString._add("inverse");
PSString._add("invertAlpha");
PSString._add("invertMask");
PSString._add("invertSource2");
PSString._add("invert");
PSString._add("invertTexture");
PSString._add("iptcScene");
PSString._add("iptcSubjectCode");
PSString._add("isDirty");
PSString._add("isoCountryCode");
PSString._add("italianLanguage");
PSString._add("italic");
PSString._add("italics");
PSString._add("itemIndex");
PSString._add("japaneseAlternate");
PSString._add("japaneseLanguage");
PSString._add("japanese");
PSString._add("javaScriptMessage");
PSString._add("javaScriptOptions");
PSString._add("javaScriptOptionsClass");
PSString._add("javaScriptName");
PSString._add("javaScript");
PSString._add("javaScriptText");
PSString._add("jiDori");
PSString._add("jitter");
PSString._add("jobName");
PSString._add("jumpto");                                   // XXX deprecated CS4
PSString._add("jumptoDestination", "jumpToDestination");   // XXX deprecated CS4
PSString._add("justificationGlyphDesired");
PSString._add("justificationGlyphMaximum");
PSString._add("justificationGlyphMinimum");
PSString._add("justificationLetterDesired");
PSString._add("justificationLetterMaximum");
PSString._add("justificationLetterMinimum");
PSString._add("justificationWordDesired");
PSString._add("justificationWordMaximum");
PSString._add("justificationWordMinimum");
PSString._add("justifyAll");
PSString._add("justifyCenter");
PSString._add("justifyFull");
PSString._add("justifyLeft");
PSString._add("justifyRight");
PSString._add("kana");
PSString._add("keepProfile");
PSString._add("keepTogether");
PSString._add("kelvinCustomWhitePoint");
PSString._add("kelvin");
PSString._add("kernelProcessID");
PSString._add("kernelType");
PSString._add("kerningRange");
PSString._add("kerning");
PSString._add("keyboardCustomization");
PSString._add("customization");
PSString._add("browseAndClose");
PSString._add("browseFilters");
PSString._add("browseScripts");
PSString._add("keyboardPreferences");
PSString._add("keyword");
PSString._add("keywords");
PSString._add("kind");
PSString._add("kinsokuSetName");
PSString._add("knockoutBlocking");
PSString._add("knockout");
PSString._add("croatianLanguage");
PSString._add("kurikaeshiMojiShori");
PSString._add("lab48");
PSString._add("labColorMode");
PSString._add("labColor");
PSString._add("lab");
PSString._add("labels");
PSString._add("landscape");
PSString._add("largeDocumentFormat");
PSString._add("large");
PSString._add("lassoTool");
PSString._add("lastFilter");
PSString._add("last");
PSString._add("lastTransform");
PSString._add("layer3D");
PSString._add("layerCompression");
PSString._add("layerConceals");
PSString._add("layerEffects");
PSString._add("layerFXVisible");
PSString._add("layerID");
PSString._add("layerLocking");
PSString._add("layerMaskAsGlobalMask");
PSString._add("layerName");
PSString._add("layerOptions");
PSString._add("layerGroupContent", "layerSectionContent");
PSString._add("layerGroupEnd", "layerSectionEnd");
PSString._add("layerGroupStart", "layerSectionStart");
PSString._add("layerGroup", "layerSection");
PSString._add("layerGroupType", "layerSectionType");
PSString._add("layerGroupFromLinkedEvent", "layerSetFromLinkedEvent");
PSString._add("layerGroupFromSelectedEvent", "layerSetFromSelectedEvent");
PSString._add("layerTransformation");
PSString._add("groupLayersEvent");
PSString._add("ungroupLayersEvent");
PSString._add("latvianLanguage");
PSString._add("layer");
PSString._add("layersPaletteOptions");
PSString._add("layers");
PSString._add("layerTime");
PSString._add("layerXMP");
PSString._add("leAdobeOnlineWeb");
PSString._add("leHealingBrush");
PSString._add("leHelpContent");
PSString._add("leHelpSupport");
PSString._add("leSystemInfo");
PSString._add("leTutorials");
PSString._add("leUserForums");
PSString._add("leadingAbove");
PSString._add("leadingBelow");
PSString._add("leading");
PSString._add("leadingType");
PSString._add("leftAki");
PSString._add("leftPlugin");
PSString._add("left");
PSString._add("length");
PSString._add("lensBlur");
PSString._add("lensFlare");
PSString._add("lens");
PSString._add("levelBased");
PSString._add("level");
PSString._add("levelsAdjustment");
PSString._add("levels");
PSString._add("liftWorkArea");
PSString._add("ligature");
PSString._add("lightBlue");
PSString._add("lightDark");
PSString._add("lightDirBottomLeft");
PSString._add("lightDirBottomRight");
PSString._add("lightDirBottom");
PSString._add("lightDirLeft");
PSString._add("lightDirRight");
PSString._add("lightDirTopLeft");
PSString._add("lightDirTopRight");
PSString._add("lightDirTop");
PSString._add("lightDirection");
PSString._add("lightDirectional");
PSString._add("lightGray");
PSString._add("lightIntensity");
PSString._add("lightOmni");
PSString._add("lightroomBridgetalkID");
PSString._add("lightroomDocID");
PSString._add("lightroomSaveParams");
PSString._add("lightPosBottomLeft");
PSString._add("lightPosBottomRight");
PSString._add("lightPosBottom");
PSString._add("lightPosLeft");
PSString._add("lightPosRight");
PSString._add("lightPosTopLeft");
PSString._add("lightPosTopRight");
PSString._add("lightPosTop");
PSString._add("lightPosition");
PSString._add("lightRed");
PSString._add("lightSource");
PSString._add("lightSpot");
PSString._add("light");
PSString._add("lightType");
PSString._add("lightenGrout");
PSString._add("lightenOnly");
PSString._add("lighten");
PSString._add("lighterColor");
PSString._add("lightingEffects");
PSString._add("lightness");
PSString._add("limited");
PSString._add("lineCap");
PSString._add("lineClass");
PSString._add("lineDashOffset", "lineDashoffset");
PSString._add("lineDash");
PSString._add("lineJoin");
PSString._add("line");
PSString._add("lineTool");
PSString._add("lineWidth");
PSString._add("linearBurn");
PSString._add("linearDodge");
PSString._add("linearHeight");
PSString._add("linearLight");
PSString._add("linear");
PSString._add("lines");
PSString._add("link");
PSString._add("linkSelectedLayers");
PSString._add("linkEnable", "enableLayerLink");
PSString._add("linkDisable", "disableLayerLink");
PSString._add("linkToOtherEffects");
PSString._add("lithuanianLanguage");
PSString._add("selectAllLayers");
PSString._add("selectNoLayers");
PSString._add("selectSimilarLayers");
PSString._add("linkedLayerIDs");
PSString._add("linked");
PSString._add("hideLayers");
PSString._add("showAlteredVideo");
PSString._add("hideAlteredVideo");
PSString._add("showLayers");
PSString._add("localLightingAltitude");
PSString._add("localLightingAngle");
PSString._add("localRange");
PSString._add("locationReference");
PSString._add("location");
PSString._add("locked");
PSString._add("logicalLength");
PSString._add("logicalUnits");
PSString._add("log");
PSString._add("longFloat");
PSString._add("longInteger");
PSString._add("longLines");
PSString._add("longStrokes");
PSString._add("loop");
PSString._add("loopCount");
PSString._add("lowQuality");
PSString._add("low");
PSString._add("lowerCaseExtension");
PSString._add("lowerCaseSerial");
PSString._add("lowerCase");
PSString._add("lower");
PSString._add("luminance");
PSString._add("luminosity");
PSString._add("macPaintFormat");
PSString._add("macThumbnail");
PSString._add("macintosh");
PSString._add("macintoshSystem");
PSString._add("magenta");
PSString._add("magentas");
PSString._add("magicEraserTool");
PSString._add("magicPoint");
PSString._add("magicStampTool");
PSString._add("magicWandTool");
PSString._add("magneticLassoTool");
PSString._add("magnification");
PSString._add("magnitude");
PSString._add("makeAnimation");
PSString._add("makeFramesFromLayers");
PSString._add("makeLayersFromFrames");
PSString._add("makeShapeLayers");
PSString._add("make");
PSString._add("makeVisible");
PSString._add("manage");
PSString._add("manipulationFOV");
PSString._add("manual");
PSString._add("mapBlack");
PSString._add("mappingShape");
PSString._add("mapping");
PSString._add("marqueeEllipTool");
PSString._add("marqueeRectTool");
PSString._add("marqueeSingleColumnTool");
PSString._add("marqueeSingleRowTool");
PSString._add("maskIndicator");
PSString._add("maskParameters");
PSString._add("mask");
PSString._add("maskedAreas");
PSString._add("masterAdaptive");
PSString._add("masterDiameter");
PSString._add("masterFXSwitch");
PSString._add("masterPerceptual");
PSString._add("masterSelective");
PSString._add("matchColor");
PSString._add("matchLocation");
PSString._add("matchRotation");
PSString._add("matchZoomAndLocation");
PSString._add("matchZoom");
PSString._add("material");
PSString._add("matrix");
PSString._add("matteColor");
PSString._add("matte");
PSString._add("matteTechnique");
PSString._add("maxDOF");
PSString._add("maximizeCompatibility");
PSString._add("maximumEnum");
PSString._add("maximumQuality");
PSString._add("maximumStates");
PSString._add("maximum");
PSString._add("means");
PSString._add("measurementDataPoint");
PSString._add("measurementDataPointsCustom");
PSString._add("measurementLogAutoDisplayPalette");
PSString._add("measurementLogDataClass");
PSString._add("measurementLogDataPointClass");
PSString._add("measurementLogDataPointDataClass");
PSString._add("measurementLogDataPointDataTypeClass");
PSString._add("measurementLogDeleteSelected");
PSString._add("measurementLogDeselectAll");
PSString._add("measurementLogErrorClass");
PSString._add("measurementLogExportSelected");
PSString._add("measurementLogExtentClass");
PSString._add("measurementLogOptions");
PSString._add("measurementLogPanelKey");
PSString._add("measurementLogSelectAll");
PSString._add("measurementRange");
PSString._add("measurementRecordMeasurements");
PSString._add("measurementScale");
PSString._add("measurementScaleCustom");
PSString._add("measurementScaleDefault");
PSString._add("measurementScaleMarker");
PSString._add("measurementScaleMarkerColor");
PSString._add("measurementScaleMarkerLength");
PSString._add("measurementScaleMarkerDisplayTicks");
PSString._add("measurementScaleMarkerDisplayText");
PSString._add("measurementScaleMarkerTextPositionBottom");
PSString._add("measurementScaleMarkerLocationBottom");
PSString._add("measurementScaleMarkerLocationLeft");
PSString._add("measurementSource");
PSString._add("median");
PSString._add("mediaBox");
PSString._add("mediumBlue");
PSString._add("mediumDots");
PSString._add("mediumLines");
PSString._add("mediumQuality");
PSString._add("medium");
PSString._add("mediumStrokes");
PSString._add("memoryPreferences");
PSString._add("memoryUsagePercent");
PSString._add("menuCustomization");
PSString._add("menuItemClass");
PSString._add("menuItemType");
PSString._add("mergeAlignedLayers");
PSString._add("mergeChannels");
PSString._add("mergeLayers", "mergeLayersNew");
PSString._add("oldMergeLayers", "mergeLayers");
PSString._add("mergeSpotChannel");
PSString._add("merge");
PSString._add("mergeVisible");
PSString._add("mergedLayers");
PSString._add("merged");
PSString._add("meshPoints");
PSString._add("message");
PSString._add("method");
PSString._add("metadata");
PSString._add("metricsKern");
PSString._add("mezzotint");
PSString._add("mezzotintType");
PSString._add("middle");
PSString._add("midpoint");
PSString._add("midtoneLevels");
PSString._add("midtones");
PSString._add("mixerPresetKind");
PSString._add("mixerPresetFileName");
PSString._add("millimetersUnit");
PSString._add("minDepth", "minimumDepth");
PSString._add("minDiameter", "minimumDiameter");
PSString._add("minDigits");
PSString._add("minRoundness", "minimumRoundness");
PSString._add("minScale", "minimumScale");
PSString._add("minutes");
PSString._add("minimum");
PSString._add("mismatchCMYK");
PSString._add("mismatchGray");
PSString._add("mismatchRGB");
PSString._add("missedKeywordAttr");
PSString._add("miterJoin");
PSString._add("miterLimit");
PSString._add("mmdd");
PSString._add("mmddyy");
PSString._add("modeGray");
PSString._add("modeRGB");
PSString._add("mode");
PSString._add("mojiKumiName");
PSString._add("MojiKumiNone", "Photoshop6MojiKumiNone");
PSString._add("MojikumiTable1", "Photoshop6MojiKumiSet1");
PSString._add("MojikumiTable2", "Photoshop6MojiKumiSet2");
PSString._add("MojikumiTable3", "Photoshop6MojiKumiSet3");
PSString._add("MojikumiTable4", "Photoshop6MojiKumiSet4");
PSString._add("mojiZume");
PSString._add("monitorCompression");
PSString._add("monitorRGB");
PSString._add("monitorSetup");
PSString._add("monitor");
PSString._add("monochromatic");
PSString._add("monotone");
PSString._add("mosaicPlugin");
PSString._add("mosaic");
PSString._add("motionBlur");
PSString._add("moreAccurate");
PSString._add("move");
PSString._add("moveAllTime");
PSString._add("moveInTime");
PSString._add("moveKeyframes");
PSString._add("moveOutTime");
PSString._add("moveStartTime");
PSString._add("moveTo");
PSString._add("moveToolOnCommit");
PSString._add("moveTool");
PSString._add("moveWorkArea");
PSString._add("movieFrameReader");
PSString._add("MRUFolderSize");
PSString._add("multi72Color");
PSString._add("multi72Gray");
PSString._add("multiAdjustor");
PSString._add("multiNoCompositePS");
PSString._add("multichannelMode");
PSString._add("multichannel");
PSString._add("multiply");
PSString._add("muteVideo");
PSString._add("name");
PSString._add("navigatorPaletteOptions");
PSString._add("nearestNeighbor");
PSString._add("negative");
PSString._add("neonGlow");
PSString._add("negGaussClusters");
PSString._add("negGaussParams");
PSString._add("negGaussTolerance");
PSString._add("negSpaGaussTolerance");
PSString._add("netscapeGray");
PSString._add("neutralizeColor");
PSString._add("neutrals");
PSString._add("neverShowDebugger");
PSString._add("newDocPresetPrintResolution");
PSString._add("newDocPresetPrintScale");
PSString._add("newDocPresetScreenResolution");
PSString._add("newDocPresetScreenScale");
PSString._add("newFromClipboard");
PSString._add("newGuide");
PSString._add("newPlacedLayer");
PSString._add("new");
PSString._add("newView");
PSString._add("next");
PSString._add("nextFrame");
PSString._add("nextKeyframe");
PSString._add("nikon105");
PSString._add("nikon");
PSString._add("noBreak");
PSString._add("noCompositePS");
PSString._add("noImage");
PSString._add("noReference");
PSString._add("no");
PSString._add("noise");
PSString._add("noiseLock");
PSString._add("nonAffineTransform");
PSString._add("nonImageData");
PSString._add("nonLinear");
PSString._add("none");
PSString._add("noneUnit");
PSString._add("normalPath");
PSString._add("normal");
PSString._add("noteLocation");
PSString._add("notePaper");
PSString._add("notify");
PSString._add("NTSCDV");
PSString._add("NTSCDVWide");
PSString._add("NTSCD1");
PSString._add("NTSCD1Wide");
PSString._add("NTSCD1Square");
PSString._add("NTSCD1WideSquare");
PSString._add("null");
PSString._add("nullFrameReader");
PSString._add("numLights");
PSString._add("numberOfCacheLevels");
PSString._add("numberOfChannels");
PSString._add("numberOfChildren");
PSString._add("numberOfDocuments");
PSString._add("numberOfGenerators");
PSString._add("numberOfLayers");
PSString._add("numberOfLevels");
PSString._add("numberOfPaths");
PSString._add("numberOfRipples");
PSString._add("numberOfSiblings");
PSString._add("number");
PSString._add("numerator");
PSString._add("numericSequenceFrameReader");
PSString._add("numericSequenceSpec");
PSString._add("nynorskNorwegianLanguage");
PSString._add("objectName");
PSString._add("objectReference");
PSString._add("object");
PSString._add("obsoleteTextLayer");
PSString._add("oceanRipple");
PSString._add("odd");
PSString._add("off");
PSString._add("offset");
PSString._add("ok");
PSString._add("oldStyle");
PSString._add("oldText");
PSString._add("oldTextAge");
PSString._add("onACurve");
PSString._add("onError");
PSString._add("onOff");
PSString._add("on");
PSString._add("oneDigit");
PSString._add("opacityClass");
PSString._add("opacity");
PSString._add("opacityFloat");
PSString._add("openAs");
PSString._add("openAsSmartObject");
PSString._add("open");
PSString._add("openNewDocsAsTabs");
PSString._add("opticalKern");
PSString._add("optimized");
PSString._add("optionalKeywordAttr");
PSString._add("orange");
PSString._add("ordinal");
PSString._add("ordinals");
PSString._add("orientation");
PSString._add("originalAddressAttr");
PSString._add("originalHeader");
PSString._add("originalTransmissionReference");
PSString._add("ornaments");
PSString._add("otbaseline");
PSString._add("otherCursors");
PSString._add("outFromCenter");
PSString._add("outOfGamut");
PSString._add("outerBevel");
PSString._add("outerGlow");
PSString._add("output");
PSString._add("outsetFrame");
PSString._add("outside");
PSString._add("outTime");
PSString._add("overlap");
PSString._add("overlay");
PSString._add("overprintColors");
PSString._add("overrideNode");
PSString._add("overrideOpen");
PSString._add("overridePrinter");
PSString._add("overrideSave");
PSString._add("pInherits");
PSString._add("page");
PSString._add("pageFormat");
PSString._add("pageNumber");
PSString._add("pagePosCentered");
PSString._add("pagePosTopLeft");
PSString._add("pagePosition");
PSString._add("pageSetup");
PSString._add("paintDaubs");
PSString._add("paint");
PSString._add("paintDynamicsLock");
PSString._add("paintStroke");
PSString._add("paintType");
PSString._add("paintbrushEraser");
PSString._add("paintbrushTool");
PSString._add("paintingCursors");
PSString._add("PALD1DV");
PSString._add("PALD1DVWide");
PSString._add("PALD1DVSquare");
PSString._add("PALD1DVWideSquare");
PSString._add("palSecam");
PSString._add("paletteFile");
PSString._add("paletteKnife");
PSString._add("palette");
PSString._add("paletteBrightness");
PSString._add("panaVision");
PSString._add("panorama");
PSString._add("paperBrightness");
PSString._add("paperWhite");
PSString._add("paragraphStyleRange");
PSString._add("paragraphStyle");
PSString._add("parentID");
PSString._add("parentIndex");
PSString._add("parentName");
PSString._add("passThrough");
PSString._add("passwords");
PSString._add("pasteEffects");
PSString._add("pasteInto");
PSString._add("pasteKeyframes");
PSString._add("pasteNewDoc", "pasteNewDocument");
PSString._add("pasteOutside");
PSString._add("paste");
PSString._add("patchSelection");
PSString._add("patchwork");
PSString._add("pathClass");
PSString._add("pathComponentSelectTool");
PSString._add("pathComponent");
PSString._add("pathComponents");
PSString._add("pathContents");
PSString._add("pathKind");
PSString._add("pathName");
PSString._add("pathOperation");
PSString._add("pathPoint");
PSString._add("pathReference");
PSString._add("path");
PSString._add("pathTypeAlignTo");
PSString._add("pathTypeAlignment");
PSString._add("pathTypeEffect");
PSString._add("pathTypeSpacing");
PSString._add("pathsPaletteOptions");
PSString._add("patternDither");
PSString._add("patternFillClass");
PSString._add("patternFill");
PSString._add("patternKey");
PSString._add("patternLayer");
PSString._add("patternOverlay");
PSString._add("patternStampTool");
PSString._add("pattern");
PSString._add("pauseForAudio");
PSString._add("pause");
PSString._add("pdfxStandard");
PSString._add("pdfx1a2001");
PSString._add("pdfx1a2003");
PSString._add("pdfx32001");
PSString._add("pdfx32003");
PSString._add("pdfx42007");                 // XXX deprecated CS4
PSString._add("pdfx42008");
PSString._add("pdfCompatibilityLevel");
PSString._add("pdf13");
PSString._add("pdf14");
PSString._add("pdf15");
PSString._add("pdf16");
PSString._add("pdf17");
PSString._add("pdfPreserveEditing");
PSString._add("pdfEmbedThumbnails");
PSString._add("pdfOptimizeForWeb");
PSString._add("pdfViewAfterSave");
PSString._add("pdfSubsetFontThreshold");
PSString._add("pdfDownSample");
PSString._add("pdfDownsampleResolution");
PSString._add("pdfThresholdResolution");
PSString._add("pdfTileSize");
PSString._add("pdfCompressionType");
PSString._add("pdfConvert16To8");
PSString._add("pdfPrinterTrimMarks");
PSString._add("pdfPrinterRegistrationMarks");
PSString._add("pdfPrinterColorBars");
PSString._add("pdfPrinterPageInfo");
PSString._add("pdfPrinterMarkType");
PSString._add("pdfMarkWeight");
PSString._add("pdfMarkOffset");
PSString._add("pdfTopBleed");
PSString._add("pdfBottomBleed");
PSString._add("pdfLeftBleed");
PSString._add("pdfRightBleed");
PSString._add("pdfColorConversion");
PSString._add("pdfDestinationProfileDescription");
PSString._add("pdfIncludeProfile");
PSString._add("pdfOutputCondition");
PSString._add("pdfOutputConditionIdentifier");
PSString._add("pdfRegistryName");
PSString._add("pdfRequireOpenPassword");
PSString._add("pdfOpenPassword");
PSString._add("pdfRequirePermissionPassword");
PSString._add("pdfPermissionPassword");
PSString._add("pdfPrintingAllowed");
PSString._add("pdfChangesAllowed");
PSString._add("pdfEnableCopying");
PSString._add("pdfEnableReaders");
PSString._add("pdfEnablePlaintextMetadata");
PSString._add("pdfPresetFilename");
PSString._add("pdfSelection");
PSString._add("penTool");
PSString._add("pencilEraser");
PSString._add("pencilTool");
PSString._add("pencilWidth");
PSString._add("percentUnit");
PSString._add("perceptual");
PSString._add("performance");
PSString._add("persistentScreenMode");
PSString._add("perspectiveIndex");
PSString._add("perspective");
PSString._add("phase");
PSString._add("photoBinAutoHide");
PSString._add("phosphorsCustomPhosphors");
PSString._add("phosphors");
PSString._add("photoFilter");
PSString._add("photocopy");
PSString._add("photomerge");
PSString._add("photoshop20Format");
PSString._add("photoshop35Format");
PSString._add("photoshopDCS2Format");
PSString._add("photoshopDCSFormat");
PSString._add("photoshopEPSFormat");
PSString._add("photoshopPDFFormat");
PSString._add("photoshopPicker");
PSString._add("pickCMYK");
PSString._add("pickGray");
PSString._add("pickHSB");
PSString._add("pickLab");
PSString._add("pickOptions");
PSString._add("pickRGB");
PSString._add("pickWeb");
PSString._add("pickerID");
PSString._add("pickerKind");
PSString._add("pickerKindType");
PSString._add("pickingForeground");
PSString._add("picturePackage");
PSString._add("pillowEmboss");
PSString._add("pinLight");
PSString._add("pinch");
PSString._add("pixelDoubling");
PSString._add("pixelLength");
PSString._add("pixelHeight");
PSString._add("pixelPaintFormat");
PSString._add("pixelPaintSize1");
PSString._add("pixelPaintSize2");
PSString._add("pixelPaintSize3");
PSString._add("pixelPaintSize4");
PSString._add("pixelPaintSize");
PSString._add("pixel");
PSString._add("pixelWidth");
PSString._add("pixelsAcross");
PSString._add("pixelsDown");
PSString._add("pixelsUnit");
PSString._add("placeEnum");
PSString._add("placeEvent");
PSString._add("placeMeasurementScaleMarker");
PSString._add("placed");
PSString._add("placedLayerMakeCopy");
PSString._add("placedLayerEditContents");
PSString._add("placedLayerExportContents");
PSString._add("placedLayerReplaceContents");
PSString._add("planar");
PSString._add("plaster");
PSString._add("plasticWrap");
PSString._add("platform");
PSString._add("play");
PSString._add("playbackOptions");
PSString._add("pluginFolder");
PSString._add("pluginPicker");
PSString._add("pluginPrefs");
PSString._add("pluginsScratchDiskPreferences");
PSString._add("point16");
PSString._add("point");
PSString._add("pointillize");
PSString._add("points");
PSString._add("pointsUnit");
PSString._add("polar");
PSString._add("polarToRect");
PSString._add("policyCMYK");
PSString._add("policyGray");
PSString._add("policyRGB");
PSString._add("policy");
PSString._add("polishLanguage");
PSString._add("polySelTool");
PSString._add("polygon");
PSString._add("polygonTool");
PSString._add("pondRipples");
PSString._add("posGaussClusters");
PSString._add("posGaussParams");
PSString._add("posGaussTolerance");
PSString._add("posSpaGaussTolerance");
PSString._add("position");
PSString._add("postScriptColor");
PSString._add("posterEdges");
PSString._add("posterization");
PSString._add("posterize");
PSString._add("power");
PSString._add("preciseMatte");
PSString._add("precise");
PSString._add("predefinedColors");
PSString._add("preferBuiltin");
PSString._add("preferEnhancedTIFF");
PSString._add("preferXMPFromACR");
PSString._add("preferencesClass");
PSString._add("preferencesFolder");
PSString._add("preferences");
PSString._add("preferredKinsokuOrder");
PSString._add("prefix");
PSString._add("premultipliedBlack");
PSString._add("premultipliedColor");
PSString._add("premultipliedWhite");
PSString._add("presentation");
PSString._add("fullpath", "fullPath");
PSString._add("preserveAdditional");
PSString._add("preserveLuminosity");
PSString._add("preserve");
PSString._add("preserveTransparency");
PSString._add("presetManagerCommand", "presetManager");
PSString._add("preset");
PSString._add("presetFileMode");
PSString._add("presetFileName");
PSString._add("presetFileSpec");
PSString._add("presetKind");
PSString._add("presetKindEnum");
PSString._add("presetKindType");
PSString._add("presetKindCustom");
PSString._add("presetKindDefault");
PSString._add("presetKindFactory");
PSString._add("presetKindUserDefined");
PSString._add("pressure");
PSString._add("previewBlack");
PSString._add("previewCMYKEnum");
PSString._add("previewCMYK");
PSString._add("previewCMYKType");
PSString._add("previewCMY");
PSString._add("previewCyan");
PSString._add("previewFullSize");
PSString._add("previewIcon");
PSString._add("previewMacThumbnail");
PSString._add("previewMagenta");
PSString._add("previewOff");
PSString._add("preview");
PSString._add("previewWinThumbnail");
PSString._add("previewYellow");
PSString._add("previewsQuery");
PSString._add("previous");
PSString._add("previousFrame");
PSString._add("previousKeyframe");
PSString._add("primaries");
PSString._add("printColorHandling");
PSString._add("printCopies");
PSString._add("printCurrentPrinter");
PSString._add("printKeys");
PSString._add("printKeysType");
PSString._add("printNotManaged");
PSString._add("printOptions");
PSString._add("printPhotoshopManaged", "photoshopManaged");
PSString._add("printPrintersList", "printerList");
PSString._add("printPrinterManaged", "printerManaged");
PSString._add("printResolution", "printerResolution");
PSString._add("printSeparations");
PSString._add("printSettings");
PSString._add("printSize");
PSString._add("printSizeUnits");
PSString._add("print");
PSString._add("printToFit");
PSString._add("printingInksSetup");
PSString._add("processSerialNumber");
PSString._add("profileMismatch");
PSString._add("profileSetup");
PSString._add("profile");
PSString._add("profileToProfile");
PSString._add("projection");
PSString._add("proofBlack");
PSString._add("proofCMYK");
PSString._add("proofCMY");
PSString._add("proofCustom");
PSString._add("proofCyan");
PSString._add("proofDeuteranopia");
PSString._add("proofInkBlack");
PSString._add("proofMacintosh");
PSString._add("proofMagenta");
PSString._add("proofMonitor");
PSString._add("proofPaperWhite");
PSString._add("proofProtanopia");
PSString._add("proofSetup");
PSString._add("proofWindows");
PSString._add("proofYellow");
PSString._add("property");
PSString._add("proportionalLining");
PSString._add("proportionalMetrics");
PSString._add("proportionalNumbers");
PSString._add("proportionalOldStyle");
PSString._add("proportionalWidthForm");
PSString._add("protectTexture");
PSString._add("protectTextureLock");
PSString._add("provinceState");
PSString._add("publicDomain");
PSString._add("purgeItem");
PSString._add("purge");
PSString._add("purity");
PSString._add("purple");
PSString._add("pushIn");
PSString._add("pushOutFirst");
PSString._add("pushOut");
PSString._add("pushDown");
PSString._add("pushRight");
PSString._add("KinsokuNone", "None");
PSString._add("KinsokuHard", "Hard");
PSString._add("KinsokuSoft", "Soft");
PSString._add("pyramids");
PSString._add("quadCenterState");
PSString._add("quadCorner0");
PSString._add("quadCorner1");
PSString._add("quadCorner2");
PSString._add("quadCorner3");
PSString._add("quadrilateral");
PSString._add("quadtone");
PSString._add("quality");
PSString._add("quarterWidthForm");
PSString._add("queryAlways");
PSString._add("queryAsk");
PSString._add("queryNever");
PSString._add("queryState");
PSString._add("quickFix");
PSString._add("quickMask");
PSString._add("quickSelectAutoEnhance", "autoEnhance");
PSString._add("quickSelectBrushSize");
PSString._add("quickSelectSampleAllLayers");
PSString._add("quickSelectMode");
PSString._add("quickSelectSpread");
PSString._add("quickSelectStickiness");
PSString._add("quickSelectTool");
PSString._add("quit");
PSString._add("radialBlur");
PSString._add("radial");
PSString._add("radialDistort");
PSString._add("radius");
PSString._add("rainbowEffect");
PSString._add("randomSeed");
PSString._add("random");
PSString._add("range");
PSString._add("rasterizeAll");
PSString._add("rasterizeContent");
PSString._add("rasterizeImageStack");
PSString._add("rasterizeItem");
PSString._add("rasterizeLayer");
PSString._add("rasterizeLinked");
PSString._add("rasterizePlaced");
PSString._add("rasterizeShape");
PSString._add("rasterize");
PSString._add("rasterizeTypeLayer");
PSString._add("rasterizeVectorMask");
PSString._add("rasterizeVideo");
PSString._add("ratio");
PSString._add("rational");
PSString._add("rationalPoint");
PSString._add("rawData");
PSString._add("rawFormat");
PSString._add("recapture");
PSString._add("recentFiles");
PSString._add("record");
PSString._add("recordMeasurements");
PSString._add("rect16");
PSString._add("rect");
PSString._add("rectToPolar");
PSString._add("rectangle");
PSString._add("rectangleTool");
PSString._add("redBlackPoint");
PSString._add("redEyeTool");
PSString._add("redFloat");
PSString._add("redGamma");
PSString._add("redEyeTool");
PSString._add("red");
PSString._add("redWhitePoint");
PSString._add("redX");
PSString._add("redY");
PSString._add("redo");
PSString._add("redoType");
PSString._add("redrawComplete");
PSString._add("reds");
PSString._add("refineEdgeChoke");
PSString._add("refineEdgeContrast", "refineEdgeBorderContrast");
PSString._add("refineEdgeFeatherRadius");
PSString._add("refineEdgeSmooth");
PSString._add("refineEdgeRadius", "refineEdgeBorderRadius");
PSString._add("refineSelectionEdge");
PSString._add("reflected");
PSString._add("regionCode");
PSString._add("registrationMarks");
PSString._add("relative");
PSString._add("relief");
PSString._add("reloadFrame");
PSString._add("removeBlackMatte");
PSString._add("removeFromSelection");
PSString._add("removeJPEGArtifact");
PSString._add("removeLayerMask");
PSString._add("removeWhiteMatte");
PSString._add("rename");
PSString._add("renderFidelity");
PSString._add("renderSceneReferred");
PSString._add("repeatEdgePixels");
PSString._add("repeat");
PSString._add("repeatLock");
PSString._add("replaceColor");
PSString._add("replaceExisting");
PSString._add("replaceFootage");
PSString._add("replace");
PSString._add("replaceSubstitutes");
PSString._add("resample");
PSString._add("resetFromComp");
PSString._add("resetPalettes");
PSString._add("resetMenus");
PSString._add("resetShortcuts");
PSString._add("resetScaleFactor");
PSString._add("reset");
PSString._add("resetDocumentFormat", "resetDocumentFormatStr");
PSString._add("resize");
PSString._add("resizePastePlace");
PSString._add("resizeWindowsOnZoom");
PSString._add("resolution");
PSString._add("resourceID");
PSString._add("response");
PSString._add("restoreAllFrames");
PSString._add("restoreFrame");
PSString._add("retainHeader");
PSString._add("reticulation");
PSString._add("returnIDAttr");
PSString._add("revealAll");
PSString._add("revealCurrentPath");
PSString._add("revealSelection");
PSString._add("reverse");
PSString._add("revert");
PSString._add("rightAki");
PSString._add("right");
PSString._add("rightsUsage");
PSString._add("rippleMagnitude");
PSString._add("rippleSize");
PSString._add("ripple");
PSString._add("rollover");
PSString._add("romanRotationInVertical");
PSString._add("roman");
PSString._add("romanianLanguage");
PSString._add("rotateAll");
PSString._add("rotateEventEnum");
PSString._add("rotate");
PSString._add("rotated");
PSString._add("rotateTool");
PSString._add("rotoscopingPreferences");
PSString._add("roughPastels");
PSString._add("roundCap");
PSString._add("roundJoin");
PSString._add("round");
PSString._add("roundedRectangleTool");
PSString._add("roundnessDynamics");
PSString._add("roundness");
PSString._add("rowCount");
PSString._add("rowGutter");
PSString._add("rowMajorOrder");
PSString._add("ruby");
PSString._add("rulerCm");
PSString._add("rulerInches");
PSString._add("rulerMm");
PSString._add("rulerOriginH");
PSString._add("rulerOriginV");
PSString._add("rulerPercent");
PSString._add("rulerPicas");
PSString._add("rulerPixels");
PSString._add("rulerPoints");
PSString._add("rulerTool");
PSString._add("rulerUnits");
PSString._add("rumanianLanguage");
PSString._add("russianLanguage");
PSString._add("sInt16");
PSString._add("sInt32");
PSString._add("sInt64");
PSString._add("sMFloat");
PSString._add("sMInt");
PSString._add("sRGB");
PSString._add("sample3x3");
PSString._add("sample5x5");
PSString._add("samplePoint");
PSString._add("sampledBlur", "shapeBlur");
PSString._add("sampledBrush");
PSString._add("sampledData");
PSString._add("saturate");
PSString._add("saturation");
PSString._add("saturationTool");
PSString._add("saveAndClose");
PSString._add("saveComposite");
PSString._add("saveForWeb");
PSString._add("saveHistoryTo");
PSString._add("saveHistoryToType");
PSString._add("savePaletteLocations");
PSString._add("savePaths");
PSString._add("savePyramids");
PSString._add("save");
PSString._add("saveTransparency");
PSString._add("saveWorkspace");
PSString._add("saved");
PSString._add("savingFilesPreferences");
PSString._add("saving");
PSString._add("scaleEffectsEvent");
PSString._add("scaleEffects");
PSString._add("scaleHorizontal");
PSString._add("scaleKeyframes");
PSString._add("scale");
PSString._add("scaleStyles");
PSString._add("scaleVertical");
PSString._add("scaling");
PSString._add("scans");
PSString._add("scatterDynamics");
PSString._add("scatterDynamicsLock");
PSString._add("scatter");
PSString._add("sceneCollage");
PSString._add("scitexCTFormat");
PSString._add("scratchDisks");
PSString._add("screenCircle");
PSString._add("screenDot");
PSString._add("screenFile");
PSString._add("screenLine");
PSString._add("screenMode");
PSString._add("screenModeFullScreen");
PSString._add("screenModeFullScreenWithMenubar");
PSString._add("screenModeMaximized");              // XXX deprecated CS4
PSString._add("screenModeStandard");
PSString._add("screen");
PSString._add("screenType");
PSString._add("seconds");
PSString._add("sectionH");
PSString._add("select");
PSString._add("selectedAreas");
PSString._add("selectedItems");
PSString._add("selectedLayer");
PSString._add("selectedMeasurements");
PSString._add("selectedSourceAreas");
PSString._add("selectionBrushTool");
PSString._add("selectionClass");
PSString._add("selectionEnum");
PSString._add("selectionMode");
PSString._add("selectionModifier");
PSString._add("selectionModifierType");
PSString._add("selectionOrder");
PSString._add("selection");
PSString._add("selectiveColor");
PSString._add("selective");
PSString._add("selectKeyframe");
PSString._add("selectLinkedLayers");
PSString._add("separationSetup");
PSString._add("separationTables");
PSString._add("separations");
PSString._add("sequence");
PSString._add("serbianLanguage");
PSString._add("serialString");
PSString._add("sessionID");
PSString._add("session");
PSString._add("set");
PSString._add("setCurrentTime");
PSString._add("shade");
PSString._add("shadingIntensity");
PSString._add("shadingNoise");
PSString._add("shadingShape");
PSString._add("shadowColor");
PSString._add("shadowIntensity");
PSString._add("shadowLevels");
PSString._add("shadowMode");
PSString._add("shadowOpacity");
PSString._add("shadows");
PSString._add("shallow");
PSString._add("shapeClass");
PSString._add("shapeOperation");
PSString._add("shape");
PSString._add("shapeburst");
PSString._add("shareMyScreen");
PSString._add("sharpenEdges");
PSString._add("sharpenMore");
PSString._add("sharpen");
PSString._add("sharpenTool");
PSString._add("sharpness");
PSString._add("shearEd");
PSString._add("shearPoints");
PSString._add("shearSt");
PSString._add("shear");
PSString._add("sheetStyle");
PSString._add("shiftKey");
PSString._add("shiftKeyToolSwitch");
PSString._add("shortFloat");
PSString._add("shortInteger");
PSString._add("shortLines");
PSString._add("shortNames");
PSString._add("shortStrokes");
PSString._add("showAll");
PSString._add("showBBox");
PSString._add("showCJKFeatures");
PSString._add("enableFontFallback");              // XXX deprecated CS4
PSString._add("showComboFXPalette");
PSString._add("showDirectories");
PSString._add("showEffectsPalette");
PSString._add("showEnglishFontNames");
PSString._add("showFileBrowserPalette");
PSString._add("showFiltersPalette");
PSString._add("showHelpPalette");
PSString._add("showHideOptions");
PSString._add("showHistogramPalette");
PSString._add("showHistoryPalette");
PSString._add("showInfoPalette");
PSString._add("showLayersPalette");
PSString._add("showMenuColors");
PSString._add("showMoreOptions");
PSString._add("showNavigatorPalette");
PSString._add("showNone");
PSString._add("showPaletteBin");
PSString._add("showQuickStartPalette");
PSString._add("showRecipesPalette");
PSString._add("showSearchPalette");
PSString._add("showSliceNumbers");
PSString._add("show");
PSString._add("showStylesPalette");
PSString._add("showSwatchesPalette");
PSString._add("showToolTips");
PSString._add("showTransparency");
PSString._add("sides");
PSString._add("similar");
PSString._add("simplifyLayer");
PSString._add("single72Color");
PSString._add("single72Gray");
PSString._add("singleColumn");
PSString._add("singleNoCompositePS");
PSString._add("singleRow");
PSString._add("singleWordJustification");
PSString._add("size");
PSString._add("sizeSelector");
PSString._add("skewEffect");
PSString._add("skew");
PSString._add("skinTone");
PSString._add("sliceBGColor", "sliceBackgroundColor");
PSString._add("sliceBGType", "sliceBackgroundType");
PSString._add("sliceColor");
PSString._add("sliceFromLayer");
PSString._add("sliceImageType");
PSString._add("sliceSelectTool");
PSString._add("slice");
PSString._add("sliceTool");
PSString._add("sliceType");
PSString._add("slicesAcross");
PSString._add("slicesDown");
PSString._add("slopeLimitMatte");
PSString._add("slot");
PSString._add("slovakLanguage");
PSString._add("slovenianLanguage");
PSString._add("smallCaps");
PSString._add("small");
PSString._add("smartBlurModeEdgeOnly");
PSString._add("smartBlurModeNormal");
PSString._add("smartBlurModeOverlayEdge");
PSString._add("smartBlurMode");
PSString._add("smartBlurQualityHigh");
PSString._add("smartBlurQualityLow");
PSString._add("smartBlurQualityMedium");
PSString._add("smartBlurQuality");
PSString._add("smartBlur");
PSString._add("smartFilterEnableAll");
PSString._add("smartGuidesColor");
PSString._add("smartGuidesCustomColor");
PSString._add("smartObject");
PSString._add("smartQuotes");
PSString._add("smartSharpenPresets");
PSString._add("smartSharpen");
PSString._add("smoothCorners");
PSString._add("smoothIndents");
PSString._add("smooth");
PSString._add("smoothing");
PSString._add("smoothingLock");
PSString._add("smoothness");
PSString._add("smudgeStick");
PSString._add("smudgeTool");
PSString._add("snapAll");
PSString._add("snapNone");
PSString._add("snap");
PSString._add("snapToDocBounds");
PSString._add("snapToGrid");
PSString._add("snapToGuides");
PSString._add("snapToLayerBounds");
PSString._add("snapToSlices");
PSString._add("snapshotClass");
PSString._add("snapshotEnum");
PSString._add("snapshotInitial");
PSString._add("softLight");
PSString._add("softMatte");
PSString._add("softness");
PSString._add("solarize");
PSString._add("solid");
PSString._add("solidColorLayer");
PSString._add("solidColor");
PSString._add("solidFill");
PSString._add("soundAnnotTool");
PSString._add("source2");
PSString._add("sourceFolder");
PSString._add("sourceImport");
PSString._add("sourceMode");
PSString._add("sourceModeType");
PSString._add("sourceOpenFiles");
PSString._add("source");
PSString._add("spaceAfter");
PSString._add("spaceBefore");
PSString._add("space");
PSString._add("spacing");
PSString._add("spanishLanguage");
PSString._add("spatter");
PSString._add("specialInstructions");
PSString._add("spectrum");
PSString._add("spellCheck");
PSString._add("spherical");
PSString._add("spherizeMode");
PSString._add("spherize");
PSString._add("spin");
PSString._add("splitChannels");
PSString._add("splitHorizontalIn");
PSString._add("splitHorizontalOut");
PSString._add("splitVerticalIn");
PSString._add("splitVerticalOut");
PSString._add("splitVideoLayer");
PSString._add("sponge");
PSString._add("spotColorChannel");
PSString._add("spotColor");
PSString._add("spotHealingBrushTool");
PSString._add("spot");
PSString._add("sprayRadius");
PSString._add("sprayedStrokes");
PSString._add("squareCap");
PSString._add("squareSize");
PSString._add("squareScaleFactor");
PSString._add("square");
PSString._add("srcBlackMax");
PSString._add("srcBlackMin");
PSString._add("srcWhiteMax");
PSString._add("srcWhiteMin");
PSString._add("stackWithOriginal");
PSString._add("stagger");
PSString._add("stainedGlass");
PSString._add("stairStepEffect");
PSString._add("stampIn");
PSString._add("stampOut");
PSString._add("stamp");
PSString._add("standardDeviations");
PSString._add("standardFrenchLanguage");
PSString._add("standardGermanLanguage");
PSString._add("germanLanguageReformed1996");
PSString._add("oldGermanLanguage");
PSString._add("standardPortugueseLanguage");
PSString._add("standard");
PSString._add("star");
PSString._add("startArrowhead");
PSString._add("startFrameNumber");
PSString._add("startIndent");
PSString._add("start");
PSString._add("startTime");
PSString._add("state");
PSString._add("stdA");
PSString._add("stdB");
PSString._add("stdC");
PSString._add("stdE");
PSString._add("stdTrackID");
PSString._add("stepByStep");
PSString._add("stop");
PSString._add("straight");
PSString._add("strengthPlugin");
PSString._add("strengthRatio");
PSString._add("strength");
PSString._add("stretchToFit");
PSString._add("strikethroughOff");
PSString._add("strikethrough");
PSString._add("stringChannel");
PSString._add("stringClassFormat");
PSString._add("stringCompensation");
PSString._add("stringFSS");
PSString._add("stringInteger");
PSString._add("strokeColor");
PSString._add("strokeDetail");
PSString._add("strokeDirHorizontal");
PSString._add("strokeDirLeftDiag");
PSString._add("strokeDirRightDiag");
PSString._add("strokeDirVertical");
PSString._add("strokeDirection");
PSString._add("strokeDirectionType");
PSString._add("strokeEmboss");
PSString._add("strokeLength");
PSString._add("strokeLocation");
PSString._add("strokeOverPrint");
PSString._add("strokePressure");
PSString._add("strokeSize");
PSString._add("stroke");
PSString._add("strokeWidth");
PSString._add("strokebehavior");
PSString._add("styleBrush");
PSString._add("styleClass");
PSString._add("stylePreset");
PSString._add("style");
PSString._add("stylesAppend");
PSString._add("stylesDelete");
PSString._add("stylesDetailView");
PSString._add("stylesLoad");
PSString._add("stylesNew");
PSString._add("stylesReset");
PSString._add("stylesSave");
PSString._add("stylesSmallTextView");
PSString._add("stylesSmallThumbnailView");
PSString._add("styles");
PSString._add("stylesTextThumbnailView");
PSString._add("stylesTextView");
PSString._add("stylesThumbnailView");
PSString._add("stylisticAlternates");
PSString._add("stylusIsColor");
PSString._add("stylusIsOpacity");
PSString._add("stylusIsPressure");
PSString._add("stylusIsSize");
PSString._add("subScript");
PSString._add("subpathListKey");
PSString._add("subpath");
PSString._add("subpathsList");
PSString._add("subsample");
PSString._add("substitutesUsed");
PSString._add("subtractFilterMaskFromSelection");
PSString._add("subtractFrom");
PSString._add("subtract");
PSString._add("subtractUserMaskFromSelection");
PSString._add("subtractVectorMaskFromSelection");
PSString._add("suffix");
PSString._add("sumie");
PSString._add("superScript");
PSString._add("supplementalCategories");
PSString._add("suppressOpenOptions");
PSString._add("suppressWarnings");
PSString._add("swash");
PSString._add("swatchExchangeFile");
PSString._add("swatchesAppend");
PSString._add("swatchesNew");
PSString._add("swatchesReplace");
PSString._add("swatchesReset");
PSString._add("swatchesSave");
PSString._add("swatchesTextThumbnailView");
PSString._add("swatchesThumbnailView");
PSString._add("swatchesLargeThumbnailView");
PSString._add("swatchesLargeListView");
PSString._add("swedishLanguage");
PSString._add("swissGermanLanguage");
PSString._add("swissGermanLanguageOldRules");
PSString._add("syntheticBold");
PSString._add("syntheticItalic");
PSString._add("syntheticStyle");
PSString._add("systemCall");
PSString._add("systemCMYK");
PSString._add("systemGray");
PSString._add("systemInfo");
PSString._add("systemMetrics");
PSString._add("systemPalette");
PSString._add("systemPicker");
PSString._add("systemRGB");
PSString._add("tRange");
PSString._add("tabStops");
PSString._add("tables");
PSString._add("tabularLining");
PSString._add("tabularOldStyle");
PSString._add("takeMergedSnapshot");
PSString._add("takeSnapshot");
PSString._add("targaFormat");
PSString._add("targetChannels");
PSString._add("targetEnum");
PSString._add("targetID");
PSString._add("targetLayers");
PSString._add("targetPathIndex");
PSString._add("targetPath");
PSString._add("target");
PSString._add("tcyLeftRight");
PSString._add("tcyUpDown");
PSString._add("template");
PSString._add("texTypeBlocks");
PSString._add("texTypeBrick");
PSString._add("texTypeBurlap");
PSString._add("texTypeCanvas");
PSString._add("texTypeFrosted");
PSString._add("texTypeSandstone");
PSString._add("texTypeTinyLens");
PSString._add("textAllCaps");
PSString._add("textAnnotTool");
PSString._add("textBurasagari");
PSString._add("textClickPoint");
PSString._add("textData");
PSString._add("textEveryLineComposer");
PSString._add("textFauxBold");
PSString._add("textFauxItalic");
PSString._add("textFile");
PSString._add("textFractionalWidths");
PSString._add("textGridding");
PSString._add("textHyphenation");
PSString._add("textJustification");
PSString._add("textKey");
PSString._add("textLanguage");
PSString._add("textLayer");
PSString._add("textLigatures");
PSString._add("textNewTextMode");
PSString._add("textNewTextOrientation");
PSString._add("textNoBreak");
PSString._add("textOidashi");
PSString._add("textOikomi");
PSString._add("textOldStyle");
PSString._add("textOrientation");
PSString._add("textParagraph");
PSString._add("textRotateHankaku");
PSString._add("textShape");
PSString._add("textSingleLineComposer");
PSString._add("textSmallCaps");
PSString._add("text");
PSString._add("textStrikethrough");
PSString._add("textStyleRange");
PSString._add("textStyle");
PSString._add("textSubscript");
PSString._add("textSuperscript");
PSString._add("textTValue");
PSString._add("textTateChuuYoko");
PSString._add("textToolCharacterOptions");
PSString._add("textToolOptions");
PSString._add("textToolParagraphOptions");
PSString._add("textType");
PSString._add("textUnderline");
PSString._add("textureBlendMode");
PSString._add("textureCoverage");
PSString._add("textureDepthDynamics");
PSString._add("textureDepth");
PSString._add("textureFile");
PSString._add("textureFill");
PSString._add("textureScale");
PSString._add("texture");
PSString._add("textureType");
PSString._add("textureInteractionLock");
PSString._add("texturizer");
PSString._add("textWarp");
PSString._add("thirdWidthForm");
PSString._add("threeDigit");
PSString._add("thresholdClassEvent");
PSString._add("thresholdEnum");
PSString._add("threshold");
PSString._add("thumbnail");
PSString._add("tileNumber");
PSString._add("tileOffset");
PSString._add("tilePlugin");
PSString._add("tileSize");
PSString._add("tile");
PSString._add("tiles");
PSString._add("tileVertically");
PSString._add("tiltScale");
PSString._add("timecode");
PSString._add("timeDenominator");
PSString._add("timelinePanelKey");
PSString._add("timeline");
PSString._add("timelineDeleteKeyframes");
PSString._add("timelineEnableShortcutKeys");
PSString._add("timelineKeyframeInterpolationLinear");
PSString._add("timelineKeyframeInterpolationHold");
PSString._add("timelineSelectAllKeyframes");
PSString._add("timelineSelectNoKeyframes");
PSString._add("timelineCopyKeyframes");
PSString._add("timelinePasteKeyframes");
PSString._add("timelineSetStartOfWorkArea");
PSString._add("timelineSetEndOfWorkArea");
PSString._add("timelineGoToTime");
PSString._add("timelineGoToNextFrame");
PSString._add("timelineGoToPreviousFrame");
PSString._add("timelineGoToFirstFrame");
PSString._add("timelineGoToLastFrame");
PSString._add("timelineGoToWorkAreaStart");
PSString._add("timelineGoToWorkAreaEnd");
PSString._add("timelineAllowFrameSkipping");
PSString._add("timelineMoveLayerInPoint");
PSString._add("timelineMoveLayerEndPoint");
PSString._add("timelineTrimLayerStart");
PSString._add("timelineTrimLayerEnd");
PSString._add("timelineTrimDocumentDuration");
PSString._add("timelineSplitLayer");
PSString._add("timelineLiftWorkArea");
PSString._add("timelineExtractWorkArea");
PSString._add("timelineMakeFramesFromLayers");
PSString._add("timelineFlattenFramesIntoLayers");
PSString._add("timelineEditTimelineComment");
PSString._add("timelineDocumentSettings");
PSString._add("timelineConvertToFrames");
PSString._add("timelineOnionSkinSettings");
PSString._add("timelineEnableOnionSkins");
PSString._add("timelineShowAllLayers");
PSString._add("timelineShowFavoriteLayers");
PSString._add("timelineShowSetFavoriteLayers");
PSString._add("timelinePaletteOptions");
PSString._add("timeNumerator");
PSString._add("timeOffset");
PSString._add("timeString");
PSString._add("timeoutAttr");
PSString._add("tintColor");
PSString._add("tintFilter");
PSString._add("title");
PSString._add("titling");
PSString._add("toBuiltin");
PSString._add("toLinked");
PSString._add("toMode");
PSString._add("toNextWholeSecond");
PSString._add("toPathBottom");
PSString._add("toPathCenter");
PSString._add("toPathTop");
PSString._add("to");
PSString._add("toggle3DPanel");
PSString._add("toggle3DAxis");
PSString._add("toggleActionsPalette");
PSString._add("toggleAdjustmentPalette");
PSString._add("toggleAnimationPalette");
PSString._add("toggleAnnotationPalette");
PSString._add("toggleAnnots");
PSString._add("toggleAutoSlices");
PSString._add("toggleBlackPreview");
PSString._add("toggleBrushStylerPalette");
PSString._add("toggleBrushesExpandedView");
PSString._add("toggleBrushesPalette");
PSString._add("toggleCloneSourcePalette");
PSString._add("toggleCMYKPreview");
PSString._add("toggleCMYPreview");
PSString._add("toggleChannelsPalette");
PSString._add("toggleCharacterPalette");
PSString._add("toggleColorPalette");
PSString._add("toggleComboFXPalette");
PSString._add("toggleCompsPalette");
PSString._add("toggleControlCenter");
PSString._add("toggleCount");
PSString._add("toggleCyanPreview");
PSString._add("toggleEdges");
PSString._add("toggleEffectsPalette");
PSString._add("toggleFileBrowserPalette");
PSString._add("toggleFiltersPalette");
PSString._add("toggleGamutWarning");
PSString._add("toggleGrid");
PSString._add("toggleGuides");
PSString._add("toggleHintsPalette");
PSString._add("toggleHistogramPalette");
PSString._add("toggleHistoryPalette");
PSString._add("toggleInfoPalette");
PSString._add("toggleKeyframeSelection");
PSString._add("toggleLayerMask");
PSString._add("toggleLayersPalette");
PSString._add("toggleLockGuides");
PSString._add("toggleLockSlices");
PSString._add("toggleMagentaPreview");
PSString._add("toggleMaskPalette");
PSString._add("toggleMeasurementLogPalette");
PSString._add("toggleNavigatorPalette");
PSString._add("toggleOptionsPalette");
PSString._add("toggleOthers");
PSString._add("togglePalettes");
PSString._add("toggleParagraphPalette");
PSString._add("togglePathsPalette");
PSString._add("togglePaths");
PSString._add("togglePixelGrid");
PSString._add("toggleProofColors");
PSString._add("toggleProofVideo");
PSString._add("toggleQuickMaskMode");
PSString._add("toggleQuickStartPalette");
PSString._add("toggleRGBMacPreview");
PSString._add("toggleRGBUncompensatedPreview");
PSString._add("toggleRGBWindowsPreview");
PSString._add("toggleRecipesPalette");
PSString._add("toggleRulers");
PSString._add("toggleSearchPalette");
PSString._add("toggleShortcutsPalette");
PSString._add("toggleShowExtras");
PSString._add("toggleLayerEdges");
PSString._add("toggleSlices");
PSString._add("toggleSmartGuides");
PSString._add("toggleSnapToGrid");
PSString._add("toggleSnapToGuides");
PSString._add("toggleStatusBar");
PSString._add("toggleStylesPalette");
PSString._add("toggleSwatchesPalette");
PSString._add("toggleTextLayerType");
PSString._add("toggleToolPresetsPalette");
PSString._add("toggleToolsPalette");
PSString._add("toggleVectorMask");
PSString._add("toggleYellowPreview");
PSString._add("tolerance");
PSString._add("toolPreset");
PSString._add("toolRefineEdgeBorderContrast");
PSString._add("toolRefineEdgeBorderRadius");
PSString._add("toolRefineEdgeChoke");
PSString._add("toolRefineEdgeFeatherRadius");
PSString._add("toolRefineEdgePreviewMode");
PSString._add("toolRefineEdgePreviewState");
PSString._add("toolRefineEdgeSmooth");
PSString._add("tool");
PSString._add("topLeftPixelColor");
PSString._add("top");
PSString._add("tornEdges");
PSString._add("totalLimit");
PSString._add("totalPages");
PSString._add("traceContour");
PSString._add("trackID");
PSString._add("tracking");
PSString._add("traditionalForm");
PSString._add("transactionIDAttr");
PSString._add("transferFunction");
PSString._add("transferPoint");
PSString._add("transferSpecClass");
PSString._add("transferSpec");
PSString._add("transform");
PSString._add("transition");
PSString._add("translation");
PSString._add("transparencyEnum");
PSString._add("transparencyGamutPreferences");
PSString._add("transparencyGridColors");
PSString._add("transparencyGridColorsType");
PSString._add("transparencyGridSize");
PSString._add("transparencyGrid");
PSString._add("transparencyPrefs");
PSString._add("transparencyShape");
PSString._add("transparencyShapesLayer");
PSString._add("transparencyStop");
PSString._add("transparency");
PSString._add("transparentIndex");
PSString._add("transparent");
PSString._add("transparentWhites");
PSString._add("trap");
PSString._add("trimBasedOn");
PSString._add("trim");
PSString._add("trimBox");
PSString._add("trimDocumentToWorkArea");
PSString._add("trinitron");
PSString._add("tritone");
PSString._add("true");
PSString._add("tsume");
PSString._add("turkishLanguage");
PSString._add("tutorials");
PSString._add("twirl");
PSString._add("twist");
PSString._add("twoDigit");
PSString._add("tx");
PSString._add("ty");
PSString._add("typeClassModeOrClassMode");
PSString._add("typeCreateMaskTool");
PSString._add("typeCreateOrEditTool");
PSString._add("typeID");
PSString._add("type");
PSString._add("TypeCanvasColorType", "canvasColorType");
PSString._add("TypeCanvasFrameStyle", "canvasFrameStyle");
PSString._add("TypeCanvasScreenMode", "canvasScreenMode");
PSString._add("typeUnits");
PSString._add("typeVerticalCreateMaskTool");
PSString._add("typeVerticalCreateOrEditTool");
PSString._add("typeFrameDispose");
PSString._add("uIBitmap");
PSString._add("uICMYK");
PSString._add("uIDuotone");
PSString._add("uIGrayscale");
PSString._add("uIIndexed");
PSString._add("uILab");
PSString._add("uIMultichannel");
PSString._add("uIRGB");
PSString._add("uInt32");
PSString._add("ukenglishLanguage");
PSString._add("ukrainianLanguage", "ukranianLanguage");
PSString._add("uncoverDown");
PSString._add("uncoverRight");
PSString._add("undefinedArea");
PSString._add("underlineOff");
PSString._add("underlineOffset");
PSString._add("underlineOnLeftInVertical");
PSString._add("underlineOnRightInVertical");
PSString._add("underline");
PSString._add("underpainting");
PSString._add("underscore");
PSString._add("undoEnum");
PSString._add("undoEvent");
PSString._add("ungroup");
PSString._add("uniformDistribution");
PSString._add("uniform");
PSString._add("unitsPrefs");
PSString._add("unitsRulersPreferences");
PSString._add("unitTest");
PSString._add("unix");
PSString._add("unlink");
PSString._add("unlinkSelectedLayers");
PSString._add("unmarked");
PSString._add("unsharpMask");
PSString._add("unspecifiedColor");
PSString._add("untitled");
PSString._add("uOrder");
PSString._add("update");
PSString._add("updateLayouts");
PSString._add("updatePlacedLayer");
PSString._add("upperCaseExtension");
PSString._add("upperCaseSerial");
PSString._add("upperCase");
PSString._add("upper");
PSString._add("upperY");
PSString._add("urgency");
PSString._add("useAccurateScreens");
PSString._add("useAdditionalPlugins");
PSString._add("useAppearance");
PSString._add("useBrushGroup");
PSString._add("useCacheForHistograms");
PSString._add("useColorDynamics");
PSString._add("useCurves");
PSString._add("useDefault");
PSString._add("useDualBrush");
PSString._add("useField");
PSString._add("useFirstColumn");
PSString._add("useGlobalAngle");
PSString._add("useGrayscaleToolbarIcon");
PSString._add("useICCProfile");
PSString._add("useLegacy");
PSString._add("useMask");
PSString._add("usePaintDynamics");
PSString._add("usePosition");
PSString._add("useScatter");
PSString._add("useShape");
PSString._add("useTabletTabGroupAppearance");
PSString._add("useTextOutlines");
PSString._add("useTexture");
PSString._add("useTipDynamics");
PSString._add("useTint");
PSString._add("useVisibility");
PSString._add("userDefined");
PSString._add("userMaskDensity");
PSString._add("userMaskFeather");
PSString._add("vectorMaskClass");
PSString._add("vectorMaskDensity");
PSString._add("vectorMaskFeather");
PSString._add("vibrance");
PSString._add("userMaskEnabled");
PSString._add("userMaskLinked");
PSString._add("userMaskOptions");
PSString._add("userStop");
PSString._add("user");
PSString._add("using");
PSString._add("vMPreferences");
PSString._add("validAtPosition");
PSString._add("valueList");
PSString._add("value");
PSString._add("variableClass");
PSString._add("variations");
PSString._add("vector0");
PSString._add("vector1");
PSString._add("vectorColor");
PSString._add("vectorData");
PSString._add("vectorMaskAsGlobalMask");
PSString._add("vectorMaskCurrentPath");
PSString._add("vectorMaskEnabled");
PSString._add("vectorMaskHideAll");
PSString._add("vectorMaskLinked");
PSString._add("vectorMaskRevealAll");
PSString._add("vectorMask");
PSString._add("verbose");
PSString._add("versionFix");
PSString._add("versionMajor");
PSString._add("versionMinor");
PSString._add("version");
PSString._add("verticalLeftToRight");
PSString._add("verticalLocation");
PSString._add("verticalOnly");
PSString._add("verticalScale");
PSString._add("vertical");
PSString._add("verticalUnderlineLeft");
PSString._add("verticalUnderlinePosition");
PSString._add("verticalUnderlineRight");
PSString._add("video");
PSString._add("videoAlpha");
PSString._add("videoExport");
PSString._add("videoField");
PSString._add("videoLayer");
PSString._add("videoNextFrame");
PSString._add("videoPreviousFrame");
PSString._add("vignette");
PSString._add("violet");
PSString._add("visibleChannels");
PSString._add("visible");
PSString._add("vividLight");
PSString._add("vOrder");
PSString._add("wait");
PSString._add("wariChuAutoJustify");
PSString._add("wariChuCenterJustify");
PSString._add("wariChuCount");
PSString._add("wariChuFullJustifyLastLineCenter");
PSString._add("wariChuFullJustifyLastLineFull");
PSString._add("wariChuFullJustifyLastLineLeft");
PSString._add("wariChuFullJustifyLastLineRight");
PSString._add("wariChuJustification");
PSString._add("wariChuLeftJustify");
PSString._add("wariChuLineGap");
PSString._add("wariChuOrphan");
PSString._add("wariChuRightJustify");
PSString._add("wariChuScale");
PSString._add("wariChuSize");
PSString._add("wariChuWidow");
PSString._add("warpArcLower");
PSString._add("warpArc");
PSString._add("warpArcUpper");
PSString._add("warpArch");
PSString._add("warpBulge");
PSString._add("warpCustom");
PSString._add("warpFish");
PSString._add("warpFisheye");
PSString._add("warpFlag");
PSString._add("warpInflate");
PSString._add("warpNone");
PSString._add("warpPerspectiveOther");
PSString._add("warpPerspective");
PSString._add("warpRise");
PSString._add("warpRotate");
PSString._add("warpShellLower");
PSString._add("warpShellUpper");
PSString._add("warpSqueeze");
PSString._add("warp");
PSString._add("warpStyle");
PSString._add("warpTwist");
PSString._add("warpValue");
PSString._add("warpWave");
PSString._add("watchSuspension");
PSString._add("waterPaper");
PSString._add("watercolor");
PSString._add("watermark");
PSString._add("waveSine");
PSString._add("waveSquare");
PSString._add("wave");
PSString._add("waveTriangle");
PSString._add("waveType");
PSString._add("wavelengthMax");
PSString._add("wavelengthMin");
PSString._add("webPhotoGallery");
PSString._add("webPhotoGallery");
PSString._add("webSafeRamp");
PSString._add("web");
PSString._add("welcomeScreen");
PSString._add("wetEdges");
PSString._add("wetEdgesLock");
PSString._add("what");
PSString._add("whichEffect");
PSString._add("whichEffectType");
PSString._add("whiteClip");
PSString._add("whiteIntensity");
PSString._add("whiteIsHigh");
PSString._add("whiteLevel");
PSString._add("whitePoint");
PSString._add("white");
PSString._add("whites");
PSString._add("wholePath");
PSString._add("wholeWord");
PSString._add("wideGamutRGB");
PSString._add("widePhosphors");
PSString._add("width");
PSString._add("wildCard");
PSString._add("winThumbnail");
PSString._add("windMethod");
PSString._add("wind");
PSString._add("windingFill");
PSString._add("windows");
PSString._add("windowsSystem");
PSString._add("wipeDown");
PSString._add("wipeLeft");
PSString._add("wipeRight");
PSString._add("wipeUp");
PSString._add("with");
PSString._add("withStream");
PSString._add("workInTime");
PSString._add("workOutTime");
PSString._add("workPathIndex");
PSString._add("workPath");
PSString._add("workingCMYK");
PSString._add("workingGray");
PSString._add("workingRGB");
PSString._add("workingSpaceCode");
PSString._add("workingSpot");
PSString._add("workspaceDefaultFolder");
PSString._add("workspaceMenu");
PSString._add("workspace");
PSString._add("wrapAround");
PSString._add("wrapPath");
PSString._add("wrap");
PSString._add("xHeightStrikethroughOn");
PSString._add("x");
PSString._add("xYYColor");
PSString._add("xor");
PSString._add("xx");
PSString._add("xy");
PSString._add("y");
PSString._add("yellowColor");
PSString._add("yellow");
PSString._add("yellows");
PSString._add("yesNo");
PSString._add("yes");
PSString._add("yx");
PSString._add("yy");
PSString._add("yyddmm");
PSString._add("yymmdd");
PSString._add("yyyymmdd");
PSString._add("zigZag");
PSString._add("zigZagType");
PSString._add("zip");
PSString._add("zoomIn");
PSString._add("zoomOut");
PSString._add("zoom");
PSString._add("zoomTool");
PSString._add("zoomWithScrollWheel");
PSString._add("PreferSmallFontType", "preferSmallPaletteFontType");
PSString._add("PreferMediumFontType", "preferMediumPaletteFontType");
PSString._add("PreferLargeFontType", "preferLargePaletteFontType");
PSString._add("showFontPreviews");
PSString._add("fontPreviewsSize");
PSString._add("typePreferences");
PSString._add("newDocument");
PSString._add("workflow");
PSString._add("workflowIsManaged");
PSString._add("workflowURL");
PSString._add("checkIn");
PSString._add("checkOut");
PSString._add("undoCheckOut");
PSString._add("uploadToServer");
PSString._add("downloadFromServer");
PSString._add("addToWorkflow");
PSString._add("workflowOptions");
PSString._add("openFromWorkflow");
PSString._add("verifyState");
PSString._add("logoffAllServers");
PSString._add("workOffline");
PSString._add("workgroupServers");
PSString._add("workgroupOptionsKey");
PSString._add("workflowIsOwned");
PSString._add("workflowLockedLocally");
PSString._add("workflowEditOffline");
PSString._add("workflowIsCurrent");
PSString._add("workflowIsModified");
PSString._add("WorkflowEnabledPref", "workflowEnabled");
PSString._add("WorkflowUpdatePref", "workflowUpdatePref");
PSString._add("WorkflowCheckoutPref", "workflowCheckoutPref");
PSString._add("assetManagementEnabled");
PSString._add("autoFixCorrect");
PSString._add("hdrToningType1", "hdrtype1");
PSString._add("hdrToningType2", "hdrtype2");
PSString._add("hdrToningType3", "hdrtype3");
PSString._add("hdrToningType4", "hdrtype4");
PSString._add("hdrToningType5", "hdrtype5");
PSString._add("hdrToningType6", "hdrtype6");

PSClass._add("Action", "Actn");
PSClass._add("ActionSet", "ASet");
PSClass._add("Adjustment", "Adjs");
PSClass._add("AdjustmentLayer", "AdjL");
PSClass._add("AirbrushTool", "AbTl");
PSClass._add("AlphaChannelOptions", "AChl");
PSClass._add("AntiAliasedPICTAcquire", "AntA");
PSClass._add("Application", "capp");
PSClass._add("Arrowhead", "cArw");
PSClass._add("Assert", "Asrt");
PSClass._add("AssumedProfile", "AssP");
PSClass._add("BMPFormat", "BMPF");
PSClass._add("BackgroundLayer", "BckL");
PSClass._add("BevelEmboss", "ebbl");
PSClass._add("BitmapMode", "BtmM");
PSClass._add("BlendRange", "Blnd");
PSClass._add("BlurTool", "BlTl");
PSClass._add("BookColor", "BkCl");
PSClass._add("BrightnessContrast", "BrgC");
PSClass._add("Brush", "Brsh");
PSClass._add("BurnInTool", "BrTl");
PSClass._add("CachePrefs", "CchP");
PSClass._add("CMYKColor", "CMYC");
PSClass._add("CMYKColorMode", "CMYM");
PSClass._add("CMYKSetup", "CMYS");
PSClass._add("Calculation", "Clcl");
PSClass._add("Channel", "Chnl");
PSClass._add("ChannelMatrix", "ChMx");
PSClass._add("ChannelMixer", "ChnM");
PSClass._add("CineonFormat", "SDPX");
PSClass._add("ClippingInfo", "Clpo");
PSClass._add("ClippingPath", "ClpP");
PSClass._add("CloneStampTool", "ClTl");
PSClass._add("Color", "Clr ");
PSClass._add("ColorBalance", "ClrB");
PSClass._add("ColorCorrection", "ClrC");
PSClass._add("ColorPickerPrefs", "Clrk");
PSClass._add("ColorSampler", "ClSm");
PSClass._add("ColorStop", "Clrt");
PSClass._add("Command", "Cmnd");
PSClass._add("Curves", "Crvs");
PSClass._add("CurvePoint", "CrPt");
PSClass._add("CustomPalette", "Cstl");
PSClass._add("CurvesAdjustment", "CrvA");
PSClass._add("CustomPhosphors", "CstP");
PSClass._add("CustomWhitePoint", "CstW");
PSClass._add("DicomFormat", "Dicm");
PSClass._add("DisplayPrefs", "DspP");
PSClass._add("Document", "Dcmn");
PSClass._add("DodgeTool", "DdTl");
PSClass._add("DropShadow", "DrSh");
PSClass._add("DuotoneInk", "DtnI");
PSClass._add("DuotoneMode", "DtnM");
PSClass._add("EPSGenericFormat", "EPSG");
PSClass._add("EPSPICTPreview", "EPSC");
PSClass._add("EPSTIFFPreview", "EPST");
PSClass._add("Element", "Elmn");
PSClass._add("Ellipse", "Elps");
PSClass._add("EraserTool", "ErTl");
PSClass._add("Export", "Expr");
PSClass._add("FileInfo", "FlIn");
PSClass._add("FileSavePrefs", "FlSv");
PSClass._add("FlashPixFormat", "FlsP");
PSClass._add("FontDesignAxes", "FntD");
PSClass._add("Format", "Fmt ");
PSClass._add("FrameFX", "FrFX");
PSClass._add("Contour", "FxSc");
PSClass._add("GeneralPrefs", "GnrP");
PSClass._add("GIF89aExport", "GF89");
PSClass._add("GIFFormat", "GFFr");
PSClass._add("GlobalAngle", "gblA");
PSClass._add("Gradient", "Grdn");
PSClass._add("GradientFill", "Grdf");
PSClass._add("GradientMap", "GdMp");
PSClass._add("GradientTool", "GrTl");
PSClass._add("GraySetup", "GrSt");
PSClass._add("Grayscale", "Grsc");
PSClass._add("GrayscaleMode", "Grys");
PSClass._add("Guide", "Gd  ");
PSClass._add("GuidesPrefs", "GdPr");
PSClass._add("HalftoneScreen", "HlfS");
PSClass._add("HalftoneSpec", "Hlfp");
PSClass._add("HSBColor", "HSBC");
PSClass._add("HSBColorMode", "HSBM");
PSClass._add("HistoryBrushTool", "HBTl");
PSClass._add("HistoryPrefs", "CHsP");
PSClass._add("HistoryState", "HstS");
PSClass._add("HueSatAdjustment", "HStA");
PSClass._add("HueSatAdjustmentV2", "Hst2");
PSClass._add("HueSaturation", "HStr");
PSClass._add("IFFFormat", "IFFF");
PSClass._add("IllustratorPathsExport", "IlsP");
PSClass._add("ImagePoint", "ImgP");
PSClass._add("Import", "Impr");
PSClass._add("IndexedColorMode", "IndC");
PSClass._add("InkTransfer", "InkT");
PSClass._add("InnerGlow", "IrGl");
PSClass._add("InnerShadow", "IrSh");
PSClass._add("InterfaceColor", "IClr");
PSClass._add("Invert", "Invr");
PSClass._add("JPEGFormat", "JPEG");
PSClass._add("LabColor", "LbCl");
PSClass._add("LabColorMode", "LbCM");
PSClass._add("Layer", "Lyr ");
PSClass._add("LayerEffects", "Lefx");
PSClass._add("LayerFXVisible", "lfxv");
PSClass._add("Levels", "Lvls");
PSClass._add("LevelsAdjustment", "LvlA");
PSClass._add("LightSource", "LghS");
PSClass._add("Line", "Ln  ");
PSClass._add("MacPaintFormat", "McPn");
PSClass._add("MagicEraserTool", "MgEr");
PSClass._add("MagicPoint", "Mgcp");
PSClass._add("Mask", "Msk ");
PSClass._add("MenuItem", "Mn  ");
PSClass._add("Mode", "Md  ");
PSClass._add("MultichannelMode", "MltC");
PSClass._add("ObsoleteTextLayer", "TxLy");
PSClass._add("Offset", "Ofst");
PSClass._add("Opacity", "Opac");
PSClass._add("OuterGlow", "OrGl");
PSClass._add("PDFGenericFormat", "PDFG");
PSClass._add("PICTFileFormat", "PICF");
PSClass._add("PICTResourceFormat", "PICR");
PSClass._add("PNGFormat", "PNGF");
PSClass._add("PageSetup", "PgSt");
PSClass._add("PaintbrushTool", "PbTl");
PSClass._add("Path", "Path");
PSClass._add("PathComponent", "PaCm");
PSClass._add("PathPoint", "Pthp");
PSClass._add("Pattern", "PttR");
PSClass._add("PatternStampTool", "PaTl");
PSClass._add("PencilTool", "PcTl");
PSClass._add("Photoshop20Format", "Pht2");
PSClass._add("Photoshop35Format", "Pht3");
PSClass._add("PhotoshopDCS2Format", "PhD2");
PSClass._add("PhotoshopDCSFormat", "PhD1");
PSClass._add("PhotoshopEPSFormat", "PhtE");
PSClass._add("PhotoshopPDFFormat", "PhtP");
PSClass._add("Pixel", "Pxel");
PSClass._add("PixelPaintFormat", "PxlP");
PSClass._add("PluginPrefs", "PlgP");
PSClass._add("Point", "Pnt ");
PSClass._add("Point16", "Pnt1");
PSClass._add("Polygon", "Plgn");
PSClass._add("Posterize", "Pstr");
PSClass._add("Preferences", "GnrP");
PSClass._add("ProfileSetup", "PrfS");
PSClass._add("Property", "Prpr");
PSClass._add("Range", "Rang");
PSClass._add("Rect16", "Rct1");
PSClass._add("RGBColor", "RGBC");
PSClass._add("RGBColorMode", "RGBM");
PSClass._add("RGBSetup", "RGBt");
PSClass._add("RawFormat", "Rw  ");
PSClass._add("Rectangle", "Rctn");
PSClass._add("SaturationTool", "SrTl");
PSClass._add("ScitexCTFormat", "Sctx");
PSClass._add("Selection", "csel");
PSClass._add("SelectiveColor", "SlcC");
PSClass._add("ShapingCurve", "ShpC");
PSClass._add("SharpenTool", "ShTl");
PSClass._add("SingleColumn", "Sngc");
PSClass._add("SingleRow", "Sngr");
PSClass._add("BackgroundEraserTool", "SETl");
PSClass._add("SolidFill", "SoFi");
PSClass._add("ArtHistoryBrushTool", "ABTl");
PSClass._add("SmudgeTool", "SmTl");
PSClass._add("Snapshot", "SnpS");
PSClass._add("SpotColorChannel", "SCch");
PSClass._add("Style", "StyC");
PSClass._add("SubPath", "Sbpl");
PSClass._add("TIFFFormat", "TIFF");
PSClass._add("TargaFormat", "TrgF");
PSClass._add("TextLayer", "TxLr");
PSClass._add("TextStyle", "TxtS");
PSClass._add("TextStyleRange", "Txtt");
PSClass._add("Threshold", "Thrs");
PSClass._add("Tool", "Tool");
PSClass._add("TransferSpec", "Trfp");
PSClass._add("TransferPoint", "DtnP");
PSClass._add("TransparencyPrefs", "TrnP");
PSClass._add("TransparencyStop", "TrnS");
PSClass._add("UnitsPrefs", "UntP");
PSClass._add("UnspecifiedColor", "UnsC");
PSClass._add("Version", "Vrsn");
PSClass._add("WebdavPrefs", "Wdbv");
PSClass._add("XYYColor", "XYYC");
PSClass._add("ChromeFX", "ChFX");
PSClass._add("BackLight", "BakL");
PSClass._add("FillFlash", "FilF");
PSClass._add("ColorCast", "ColC");

PSEnum._add("Add", "Add ");
PSEnum._add("AmountHigh", "amHi");
PSEnum._add("AmountLow", "amLo");
PSEnum._add("AmountMedium", "amMd");
PSEnum._add("AntiAliasNone", "Anno");
PSEnum._add("AntiAliasLow", "AnLo");
PSEnum._add("AntiAliasMedium", "AnMd");
PSEnum._add("AntiAliasHigh", "AnHi");
PSEnum._add("AntiAliasCrisp", "AnCr");
PSEnum._add("AntiAliasStrong", "AnSt");
PSEnum._add("AntiAliasSmooth", "AnSm");
PSEnum._add("AppleRGB", "AppR");
PSEnum._add("ASCII", "ASCI");
PSEnum._add("AskWhenOpening", "AskW");
PSEnum._add("Bicubic", "Bcbc");
PSEnum._add("Binary", "Bnry");
PSEnum._add("MonitorSetup", "MntS");
PSEnum._add("16BitsPerPixel", "16Bt");
PSEnum._add("1BitPerPixel", "OnBt");
PSEnum._add("2BitsPerPixel", "2Bts");
PSEnum._add("32BitsPerPixel", "32Bt");
PSEnum._add("4BitsPerPixel", "4Bts");
PSEnum._add("5000", "5000");
PSEnum._add("5500", "5500");
PSEnum._add("6500", "6500");
PSEnum._add("72Color", "72Cl");
PSEnum._add("72Gray", "72Gr");
PSEnum._add("7500", "7500");
PSEnum._add("8BitsPerPixel", "EghB");
PSEnum._add("9300", "9300");
PSEnum._add("AbsColorimetric", "AClr");
PSEnum._add("ADSBottoms", "AdBt");
PSEnum._add("ADSCentersH", "AdCH");
PSEnum._add("ADSCentersV", "AdCV");
PSEnum._add("ADSHorizontal", "AdHr");
PSEnum._add("ADSLefts", "AdLf");
PSEnum._add("ADSRights", "AdRg");
PSEnum._add("ADSTops", "AdTp");
PSEnum._add("ADSVertical", "AdVr");
PSEnum._add("AboutApp", "AbAp");
PSEnum._add("Absolute", "Absl");
PSEnum._add("ActualPixels", "ActP");
PSEnum._add("Adaptive", "Adpt");
PSEnum._add("AdjustmentOptions", "AdjO");
PSEnum._add("AirbrushEraser", "Arbs");
PSEnum._add("All", "Al  ");
PSEnum._add("Amiga", "Amga");
PSEnum._add("Angle", "Angl");
PSEnum._add("Any", "Any ");
PSEnum._add("ApplyImage", "AplI");
PSEnum._add("AroundCenter", "ArnC");
PSEnum._add("Arrange", "Arng");
PSEnum._add("Ask", "Ask ");
PSEnum._add("Back", "Back");
PSEnum._add("Background", "Bckg");
PSEnum._add("BackgroundColor", "BckC");
PSEnum._add("Backward", "Bckw");
PSEnum._add("Behind", "Bhnd");
PSEnum._add("Best", "Bst ");
PSEnum._add("Better", "Dthb");
PSEnum._add("Bilinear", "Blnr");
PSEnum._add("BitDepth1", "BD1 ");
PSEnum._add("BitDepth16", "BD16");
PSEnum._add("BitDepth24", "BD24");
PSEnum._add("BitDepth32", "BD32");
PSEnum._add("BitDepth4", "BD4 ");
PSEnum._add("BitDepth8", "BD8 ");
PSEnum._add("BitDepthA1R5G5B5", "1565");
PSEnum._add("BitDepthR5G6B5", "x565");
PSEnum._add("BitDepthX4R4G4B4", "x444");
PSEnum._add("BitDepthA4R4G4B4", "4444");
PSEnum._add("BitDepthX8R8G8B8", "x888");
PSEnum._add("Bitmap", "Btmp");
PSEnum._add("Black", "Blck");
PSEnum._add("BlackAndWhite", "BanW");
PSEnum._add("BlackBody", "BlcB");
PSEnum._add("Blacks", "Blks");
PSEnum._add("BlockEraser", "Blk ");
PSEnum._add("Blast", "Blst");
PSEnum._add("Blocks", "Blks");
PSEnum._add("Blue", "Bl  ");
PSEnum._add("Blues", "Bls ");
PSEnum._add("Bottom", "Bttm");
PSEnum._add("BrushDarkRough", "BrDR");
PSEnum._add("BrushesAppend", "BrsA");
PSEnum._add("BrushesDefine", "BrsD");
PSEnum._add("BrushesDelete", "Brsf");
PSEnum._add("BrushesLoad", "Brsd");
PSEnum._add("BrushesNew", "BrsN");
PSEnum._add("BrushesOptions", "BrsO");
PSEnum._add("BrushesReset", "BrsR");
PSEnum._add("BrushesSave", "Brsv");
PSEnum._add("BrushLightRough", "BrsL");
PSEnum._add("BrushSimple", "BrSm");
PSEnum._add("BrushSize", "BrsS");
PSEnum._add("BrushSparkle", "BrSp");
PSEnum._add("BrushWideBlurry", "BrbW");
PSEnum._add("BrushWideSharp", "BrsW");
PSEnum._add("Builtin", "Bltn");
PSEnum._add("BurnInH", "BrnH");
PSEnum._add("BurnInM", "BrnM");
PSEnum._add("BurnInS", "BrnS");
PSEnum._add("ButtonMode", "BtnM");
PSEnum._add("CIERGB", "CRGB");
PSEnum._add("WidePhosphors", "Wide");
PSEnum._add("WideGamutRGB", "WRGB");
PSEnum._add("CMYK", "CMYK");
PSEnum._add("CMYK64", "CMSF");
PSEnum._add("CMYKColor", "ECMY");
PSEnum._add("Calculations", "Clcl");
PSEnum._add("Cascade", "Cscd");
PSEnum._add("Center", "Cntr");
PSEnum._add("CenterGlow", "SrcC");
PSEnum._add("CenteredFrame", "CtrF");
PSEnum._add("ChannelOptions", "ChnO");
PSEnum._add("ChannelsPaletteOptions", "ChnP");
PSEnum._add("CheckerboardNone", "ChcN");
PSEnum._add("CheckerboardSmall", "ChcS");
PSEnum._add("CheckerboardMedium", "ChcM");
PSEnum._add("CheckerboardLarge", "ChcL");
PSEnum._add("Clear", "Clar");
PSEnum._add("ClearGuides", "ClrG");
PSEnum._add("Clipboard", "Clpb");
PSEnum._add("ClippingPath", "ClpP");
PSEnum._add("CloseAll", "ClsA");
PSEnum._add("CoarseDots", "CrsD");
PSEnum._add("Color", "Clr ");
PSEnum._add("ColorBurn", "CBrn");
PSEnum._add("ColorDodge", "CDdg");
PSEnum._add("ColorMatch", "ClMt");
PSEnum._add("ColorNoise", "ClNs");
PSEnum._add("Colorimetric", "Clrm");
PSEnum._add("Composite", "Cmps");
PSEnum._add("ConvertToCMYK", "CnvC");
PSEnum._add("ConvertToGray", "CnvG");
PSEnum._add("ConvertToLab", "CnvL");
PSEnum._add("ConvertToRGB", "CnvR");
PSEnum._add("CreateDuplicate", "CrtD");
PSEnum._add("CreateInterpolation", "CrtI");
PSEnum._add("Cross", "Crs ");
PSEnum._add("CurrentLayer", "CrrL");
PSEnum._add("Custom", "Cst ");
PSEnum._add("CustomPattern", "Cstm");
PSEnum._add("CustomStops", "CstS");
PSEnum._add("Cyan", "Cyn ");
PSEnum._add("Cyans", "Cyns");
PSEnum._add("Dark", "Drk ");
PSEnum._add("Darken", "Drkn");
PSEnum._add("DarkenOnly", "DrkO");
PSEnum._add("DashedLines", "DshL");
PSEnum._add("Desaturate", "Dstt");
PSEnum._add("Diamond", "Dmnd");
PSEnum._add("Difference", "Dfrn");
PSEnum._add("Diffusion", "Dfsn");
PSEnum._add("DiffusionDither", "DfnD");
PSEnum._add("DisplayCursorsPreferences", "DspC");
PSEnum._add("Dissolve", "Dslv");
PSEnum._add("Distort", "Dstr");
PSEnum._add("DodgeH", "DdgH");
PSEnum._add("DodgeM", "DdgM");
PSEnum._add("DodgeS", "DdgS");
PSEnum._add("Dots", "Dts ");
PSEnum._add("Draft", "Drft");
PSEnum._add("Duotone", "Dtn ");
PSEnum._add("EBUITU", "EBT ");
PSEnum._add("EdgeGlow", "SrcE");
PSEnum._add("EliminateEvenFields", "ElmE");
PSEnum._add("EliminateOddFields", "ElmO");
PSEnum._add("Ellipse", "Elps");
PSEnum._add("Emboss", "Embs");
PSEnum._add("Exact", "Exct");
PSEnum._add("Exclusion", "Xclu");
PSEnum._add("FPXCompressLossyJPEG", "FxJP");
PSEnum._add("FPXCompressNone", "FxNo");
PSEnum._add("Faster", "Dthf");
PSEnum._add("File", "Fle ");
PSEnum._add("FileInfo", "FlIn");
PSEnum._add("FillBack", "FlBc");
PSEnum._add("FillFore", "FlFr");
PSEnum._add("FillInverse", "FlIn");
PSEnum._add("FillSame", "FlSm");
PSEnum._add("FineDots", "FnDt");
PSEnum._add("First", "Frst");
PSEnum._add("FirstIdle", "FrId");
PSEnum._add("FitOnScreen", "FtOn");
PSEnum._add("ForegroundColor", "FrgC");
PSEnum._add("Forward", "Frwr");
PSEnum._add("FreeTransform", "FrTr");
PSEnum._add("Front", "Frnt");
PSEnum._add("FullDocument", "FllD");
PSEnum._add("FullSize", "FlSz");
PSEnum._add("GaussianDistribution", "Gsn ");
PSEnum._add("GIFColorFileColorTable", "GFCT");
PSEnum._add("GIFColorFileColors", "GFCF");
PSEnum._add("GIFColorFileMicrosoftPalette", "GFMS");
PSEnum._add("GIFPaletteAdaptive", "GFPA");
PSEnum._add("GIFPaletteExact", "GFPE");
PSEnum._add("GIFPaletteOther", "GFPO");
PSEnum._add("GIFPaletteSystem", "GFPS");
PSEnum._add("GIFRequiredColorSpaceIndexed", "GFCI");
PSEnum._add("GIFRequiredColorSpaceRGB", "GFRG");
PSEnum._add("GIFRowOrderInterlaced", "GFIN");
PSEnum._add("GIFRowOrderNormal", "GFNI");
PSEnum._add("GeneralPreferences", "GnrP");
PSEnum._add("Good", "Gd  ");
PSEnum._add("GradientFill", "GrFl");
PSEnum._add("GrainClumped", "GrnC");
PSEnum._add("GrainContrasty", "GrCn");
PSEnum._add("GrainEnlarged", "GrnE");
PSEnum._add("GrainHorizontal", "GrnH");
PSEnum._add("GrainRegular", "GrnR");
PSEnum._add("GrainSoft", "GrSf");
PSEnum._add("GrainSpeckle", "GrSp");
PSEnum._add("GrainSprinkles", "GrSr");
PSEnum._add("GrainStippled", "GrSt");
PSEnum._add("GrainVertical", "GrnV");
PSEnum._add("GrainyDots", "GrnD");
PSEnum._add("Graphics", "Grp ");
PSEnum._add("Gray", "Gry ");
PSEnum._add("Gray16", "GryX");
PSEnum._add("Gray18", "Gr18");
PSEnum._add("Gray22", "Gr22");
PSEnum._add("Gray50", "Gr50");
PSEnum._add("GrayScale", "Gryc");
PSEnum._add("Grayscale", "Grys");
PSEnum._add("Green", "Grn ");
PSEnum._add("Greens", "Grns");
PSEnum._add("GuidesGridPreferences", "GudG");
PSEnum._add("HDTV", "HDTV");
PSEnum._add("HSBColor", "HSBl");
PSEnum._add("HSLColor", "HSLC");
PSEnum._add("HalftoneFile", "HlfF");
PSEnum._add("HalftoneScreen", "HlfS");
PSEnum._add("HardLight", "HrdL");
PSEnum._add("Heavy", "Hvy ");
PSEnum._add("HideAll", "HdAl");
PSEnum._add("HideSelection", "HdSl");
PSEnum._add("High", "High");
PSEnum._add("HighQuality", "Hgh ");
PSEnum._add("Highlights", "Hghl");
PSEnum._add("Histogram", "Hstg");
PSEnum._add("History", "Hsty");
PSEnum._add("HistoryPaletteOptions", "HstO");
PSEnum._add("HistoryPreferences", "HstP");
PSEnum._add("Horizontal", "Hrzn");
PSEnum._add("HorizontalOnly", "HrzO");
PSEnum._add("Hue", "H   ");
PSEnum._add("IBMPC", "IBMP");
PSEnum._add("ICC", "ICC ");
PSEnum._add("Icon", "Icn ");
PSEnum._add("IdleVM", "IdVM");
PSEnum._add("Ignore", "Ignr");
PSEnum._add("Image", "Img ");
PSEnum._add("ImageCachePreferences", "ImgP");
PSEnum._add("IndexedColor", "Indl");
PSEnum._add("InfoPaletteOptions", "InfP");
PSEnum._add("InfoPaletteToggleSamplers", "InfT");
PSEnum._add("InnerBevel", "InrB");
PSEnum._add("InsetFrame", "InsF");
PSEnum._add("Inside", "Insd");
PSEnum._add("JPEG", "JPEG");
PSEnum._add("JustifyAll", "JstA");
PSEnum._add("JustifyFull", "JstF");
PSEnum._add("KeepProfile", "KPro");
PSEnum._add("KeyboardPreferences", "KybP");
PSEnum._add("Lab", "Lab ");
PSEnum._add("Lab48", "LbCF");
PSEnum._add("LabColor", "LbCl");
PSEnum._add("Large", "Lrg ");
PSEnum._add("Last", "Lst ");
PSEnum._add("LastFilter", "LstF");
PSEnum._add("LayerOptions", "LyrO");
PSEnum._add("LayersPaletteOptions", "LyrP");
PSEnum._add("Left", "Left");
PSEnum._add("LevelBased", "LvlB");
PSEnum._add("Light", "Lgt ");
PSEnum._add("LightBlue", "LgtB");
PSEnum._add("LightDirBottom", "LDBt");
PSEnum._add("LightDirBottomLeft", "LDBL");
PSEnum._add("LightDirBottomRight", "LDBR");
PSEnum._add("LightDirLeft", "LDLf");
PSEnum._add("LightDirRight", "LDRg");
PSEnum._add("LightDirTop", "LDTp");
PSEnum._add("LightDirTopLeft", "LDTL");
PSEnum._add("LightDirTopRight", "LDTR");
PSEnum._add("LightGray", "LgtG");
PSEnum._add("LightDirectional", "LghD");
PSEnum._add("LightenOnly", "LghO");
PSEnum._add("LightOmni", "LghO");
PSEnum._add("LightPosBottom", "LPBt");
PSEnum._add("LightPosBottomLeft", "LPBL");
PSEnum._add("LightPosBottomRight", "LPBr");
PSEnum._add("LightPosLeft", "LPLf");
PSEnum._add("LightPosRight", "LPRg");
PSEnum._add("LightPosTop", "LPTp");
PSEnum._add("LightPosTopLeft", "LPTL");
PSEnum._add("LightPosTopRight", "LPTR");
PSEnum._add("LightRed", "LgtR");
PSEnum._add("LightSpot", "LghS");
PSEnum._add("Lighten", "Lghn");
PSEnum._add("Lightness", "Lght");
PSEnum._add("Line", "Ln  ");
PSEnum._add("Lines", "Lns ");
PSEnum._add("Linear", "Lnr ");
PSEnum._add("Linked", "Lnkd");
PSEnum._add("LongLines", "LngL");
PSEnum._add("LongStrokes", "LngS");
PSEnum._add("Low", "Low ");
PSEnum._add("Lower", "Lwr ");
PSEnum._add("LowQuality", "Lw  ");
PSEnum._add("Luminosity", "Lmns");
PSEnum._add("Maya", "Maya");
PSEnum._add("MacThumbnail", "McTh");
PSEnum._add("Macintosh", "Mcnt");
PSEnum._add("MacintoshSystem", "McnS");
PSEnum._add("Magenta", "Mgnt");
PSEnum._add("Magentas", "Mgnt");
PSEnum._add("Mask", "Msk ");
PSEnum._add("MaskedAreas", "MskA");
PSEnum._add("MasterAdaptive", "MAdp");
PSEnum._add("MasterPerceptual", "MPer");
PSEnum._add("MasterSelective", "MSel");
PSEnum._add("Maximum", "Mxmm");
PSEnum._add("MaximumQuality", "Mxm ");
PSEnum._add("Medium", "Mdim");
PSEnum._add("MediumBlue", "MdmB");
PSEnum._add("MediumQuality", "Mdm ");
PSEnum._add("MediumDots", "MdmD");
PSEnum._add("MediumLines", "MdmL");
PSEnum._add("MediumStrokes", "MdmS");
PSEnum._add("MemoryPreferences", "MmrP");
PSEnum._add("MergeChannels", "MrgC");
PSEnum._add("Merged", "Mrgd");
PSEnum._add("MergedLayers", "Mrg2");
PSEnum._add("MergedLayersOld", "MrgL");
PSEnum._add("Middle", "Mddl");
PSEnum._add("Midtones", "Mdtn");
PSEnum._add("ModeGray", "MdGr");
PSEnum._add("ModeRGB", "MdRG");
PSEnum._add("Monitor", "Moni");
PSEnum._add("Monotone", "Mntn");
PSEnum._add("Multi72Color", "72CM");
PSEnum._add("Multi72Gray", "72GM");
PSEnum._add("Multichannel", "Mlth");
PSEnum._add("MultiNoCompositePS", "NCmM");
PSEnum._add("Multiply", "Mltp");
PSEnum._add("NavigatorPaletteOptions", "NvgP");
PSEnum._add("NearestNeighbor", "Nrst");
PSEnum._add("NetscapeGray", "NsGr");
PSEnum._add("Neutrals", "Ntrl");
PSEnum._add("NewView", "NwVw");
PSEnum._add("Next", "Nxt ");
PSEnum._add("Nikon", "Nkn ");
PSEnum._add("Nikon105", "Nkn1");
PSEnum._add("No", "N   ");
PSEnum._add("NoCompositePS", "NCmp");
PSEnum._add("None", "None");
PSEnum._add("Normal", "Nrml");
PSEnum._add("NormalPath", "NrmP");
PSEnum._add("NTSC", "NTSC");
PSEnum._add("OS2", "OS2 ");
PSEnum._add("Off", "Off ");
PSEnum._add("On", "On  ");
PSEnum._add("OpenAs", "OpAs");
PSEnum._add("Orange", "Orng");
PSEnum._add("OutFromCenter", "OtFr");
PSEnum._add("OutOfGamut", "OtOf");
PSEnum._add("OuterBevel", "OtrB");
PSEnum._add("Outside", "Otsd");
PSEnum._add("OutsetFrame", "OutF");
PSEnum._add("Overlay", "Ovrl");
PSEnum._add("PaintbrushEraser", "Pntb");
PSEnum._add("PencilEraser", "Pncl");
PSEnum._add("P22EBU", "P22B");
PSEnum._add("PNGFilterAdaptive", "PGAd");
PSEnum._add("PNGFilterAverage", "PGAv");
PSEnum._add("PNGFilterNone", "PGNo");
PSEnum._add("PNGFilterPaeth", "PGPt");
PSEnum._add("PNGFilterSub", "PGSb");
PSEnum._add("PNGFilterUp", "PGUp");
PSEnum._add("PNGInterlaceAdam7", "PGIA");
PSEnum._add("PNGInterlaceNone", "PGIN");
PSEnum._add("PagePosCentered", "PgPC");
PSEnum._add("PagePosTopLeft", "PgTL");
PSEnum._add("PageSetup", "PgSt");
PSEnum._add("PalSecam", "PlSc");
PSEnum._add("PanaVision", "PnVs");
PSEnum._add("PathsPaletteOptions", "PthP");
PSEnum._add("Pattern", "Ptrn");
PSEnum._add("PatternDither", "PtnD");
PSEnum._add("Perceptual", "Perc");
PSEnum._add("Perspective", "Prsp");
PSEnum._add("PhotoshopPicker", "Phtk");
PSEnum._add("PickCMYK", "PckC");
PSEnum._add("PickGray", "PckG");
PSEnum._add("PickHSB", "PckH");
PSEnum._add("PickLab", "PckL");
PSEnum._add("PickOptions", "PckO");
PSEnum._add("PickRGB", "PckR");
PSEnum._add("PillowEmboss", "PlEb");
PSEnum._add("PixelPaintSize1", "PxS1");
PSEnum._add("PixelPaintSize2", "PxS2");
PSEnum._add("PixelPaintSize3", "PxS3");
PSEnum._add("PixelPaintSize4", "PxS4");
PSEnum._add("Place", "Plce");
PSEnum._add("PlaybackOptions", "PbkO");
PSEnum._add("PluginPicker", "PlgP");
PSEnum._add("PluginsScratchDiskPreferences", "PlgS");
PSEnum._add("PolarToRect", "PlrR");
PSEnum._add("PondRipples", "PndR");
PSEnum._add("Precise", "Prc ");
PSEnum._add("PreciseMatte", "PrBL");
PSEnum._add("PreviewOff", "PrvO");
PSEnum._add("PreviewCMYK", "PrvC");
PSEnum._add("PreviewCyan", "Prvy");
PSEnum._add("PreviewMagenta", "PrvM");
PSEnum._add("PreviewYellow", "PrvY");
PSEnum._add("PreviewBlack", "PrvB");
PSEnum._add("PreviewCMY", "PrvN");
PSEnum._add("Previous", "Prvs");
PSEnum._add("Primaries", "Prim");
PSEnum._add("PrintSize", "PrnS");
PSEnum._add("PrintingInksSetup", "PrnI");
PSEnum._add("Purple", "Prp ");
PSEnum._add("Pyramids", "Pyrm");
PSEnum._add("QCSAverage", "Qcsa");
PSEnum._add("QCSCorner0", "Qcs0");
PSEnum._add("QCSCorner1", "Qcs1");
PSEnum._add("QCSCorner2", "Qcs2");
PSEnum._add("QCSCorner3", "Qcs3");
PSEnum._add("QCSIndependent", "Qcsi");
PSEnum._add("QCSSide0", "Qcs4");
PSEnum._add("QCSSide1", "Qcs5");
PSEnum._add("QCSSide2", "Qcs6");
PSEnum._add("QCSSide3", "Qcs7");
PSEnum._add("Quadtone", "Qdtn");
PSEnum._add("QueryAlways", "QurA");
PSEnum._add("QueryAsk", "Qurl");
PSEnum._add("QueryNever", "QurN");
PSEnum._add("Repeat", "Rpt ");
PSEnum._add("RGB", "RGB ");
PSEnum._add("RGB48", "RGBF");
PSEnum._add("RGBColor", "RGBC");
PSEnum._add("Radial", "Rdl ");
PSEnum._add("Random", "Rndm");
PSEnum._add("RectToPolar", "RctP");
PSEnum._add("Red", "Rd  ");
PSEnum._add("RedrawComplete", "RdCm");
PSEnum._add("Reds", "Rds ");
PSEnum._add("Reflected", "Rflc");
PSEnum._add("Relative", "Rltv");
PSEnum._add("RepeatEdgePixels", "RptE");
PSEnum._add("RevealAll", "RvlA");
PSEnum._add("RevealSelection", "RvlS");
PSEnum._add("Revert", "Rvrt");
PSEnum._add("Right", "Rght");
PSEnum._add("Rotate", "Rtte");
PSEnum._add("RotoscopingPreferences", "RtsP");
PSEnum._add("Round", "Rnd ");
PSEnum._add("RulerCm", "RrCm");
PSEnum._add("RulerInches", "RrIn");
PSEnum._add("RulerPercent", "RrPr");
PSEnum._add("RulerPicas", "RrPi");
PSEnum._add("RulerPixels", "RrPx");
PSEnum._add("RulerPoints", "RrPt");
PSEnum._add("AdobeRGB1998", "SMPT");
PSEnum._add("SMPTEC", "SMPC");
PSEnum._add("SRGB", "SRGB");
PSEnum._add("Sample3x3", "Smp3");
PSEnum._add("Sample5x5", "Smp5");
PSEnum._add("SamplePoint", "SmpP");
PSEnum._add("Saturate", "Str ");
PSEnum._add("Saturation", "Strt");
PSEnum._add("Saved", "Sved");
PSEnum._add("SaveForWeb", "Svfw");
PSEnum._add("SavingFilesPreferences", "SvnF");
PSEnum._add("Scale", "Scl ");
PSEnum._add("Screen", "Scrn");
PSEnum._add("ScreenCircle", "ScrC");
PSEnum._add("ScreenDot", "ScrD");
PSEnum._add("ScreenLine", "ScrL");
PSEnum._add("SelectedAreas", "SlcA");
PSEnum._add("Selection", "Slct");
PSEnum._add("Selective", "Sele");
PSEnum._add("SeparationSetup", "SprS");
PSEnum._add("SeparationTables", "SprT");
PSEnum._add("Shadows", "Shdw");
PSEnum._add("ContourLinear", "sp01");
PSEnum._add("ContourGaussian", "sp02");
PSEnum._add("ContourSingle", "sp03");
PSEnum._add("ContourDouble", "sp04");
PSEnum._add("ContourTriple", "sp05");
PSEnum._add("ContourCustom", "sp06");
PSEnum._add("ShortLines", "ShrL");
PSEnum._add("ShortStrokes", "ShSt");
PSEnum._add("Single72Color", "72CS");
PSEnum._add("Single72Gray", "72GS");
PSEnum._add("SingleNoCompositePS", "NCmS");
PSEnum._add("Skew", "Skew");
PSEnum._add("SlopeLimitMatte", "Slmt");
PSEnum._add("Small", "Sml ");
PSEnum._add("SmartBlurModeEdgeOnly", "SBME");
PSEnum._add("SmartBlurModeNormal", "SBMN");
PSEnum._add("SmartBlurModeOverlayEdge", "SBMO");
PSEnum._add("SmartBlurQualityHigh", "SBQH");
PSEnum._add("SmartBlurQualityLow", "SBQL");
PSEnum._add("SmartBlurQualityMedium", "SBQM");
PSEnum._add("Snapshot", "Snps");
PSEnum._add("SolidColor", "SClr");
PSEnum._add("SoftLight", "SftL");
PSEnum._add("SoftMatte", "SfBL");
PSEnum._add("Spectrum", "Spct");
PSEnum._add("Spin", "Spn ");
PSEnum._add("SpotColor", "Spot");
PSEnum._add("Square", "Sqr ");
PSEnum._add("Stagger", "Stgr");
PSEnum._add("StampIn", "In  ");
PSEnum._add("StampOut", "Out ");
PSEnum._add("Standard", "Std ");
PSEnum._add("StdA", "StdA");
PSEnum._add("StdB", "StdB");
PSEnum._add("StdC", "StdC");
PSEnum._add("StdE", "StdE");
PSEnum._add("StretchToFit", "StrF");
PSEnum._add("StrokeDirHorizontal", "SDHz");
PSEnum._add("StrokeDirLeftDiag", "SDLD");
PSEnum._add("StrokeDirRightDiag", "SDRD");
PSEnum._add("StrokeDirVertical", "SDVt");
PSEnum._add("StylesAppend", "SlsA");
PSEnum._add("StylesDelete", "Slsf");
PSEnum._add("StylesLoad", "Slsd");
PSEnum._add("StylesNew", "SlsN");
PSEnum._add("StylesReset", "SlsR");
PSEnum._add("StylesSave", "Slsv");
PSEnum._add("Subtract", "Sbtr");
PSEnum._add("SwatchesAppend", "SwtA");
PSEnum._add("SwatchesReplace", "Swtp");
PSEnum._add("SwatchesReset", "SwtR");
PSEnum._add("SwatchesSave", "SwtS");
PSEnum._add("SystemPicker", "SysP");
PSEnum._add("Tables", "Tbl ");
PSEnum._add("Target", "Trgt");
PSEnum._add("TargetPath", "Trgp");
PSEnum._add("TexTypeBlocks", "TxBl");
PSEnum._add("TexTypeBrick", "TxBr");
PSEnum._add("TexTypeBurlap", "TxBu");
PSEnum._add("TexTypeCanvas", "TxCa");
PSEnum._add("TexTypeFrosted", "TxFr");
PSEnum._add("TexTypeSandstone", "TxSt");
PSEnum._add("TexTypeTinyLens", "TxTL");
PSEnum._add("Threshold", "Thrh");
PSEnum._add("Thumbnail", "Thmb");
PSEnum._add("TIFF", "TIFF");
PSEnum._add("Tile", "Tile");
PSEnum._add("ToggleActionsPalette", "TglA");
PSEnum._add("ToggleBlackPreview", "TgBP");
PSEnum._add("ToggleBrushesPalette", "TglB");
PSEnum._add("ToggleCMYKPreview", "TglC");
PSEnum._add("ToggleCMYPreview", "TgCM");
PSEnum._add("ToggleChannelsPalette", "Tglh");
PSEnum._add("ToggleColorPalette", "Tglc");
PSEnum._add("ToggleCyanPreview", "TgCP");
PSEnum._add("ToggleEdges", "TglE");
PSEnum._add("ToggleGamutWarning", "TglG");
PSEnum._add("ToggleGrid", "TgGr");
PSEnum._add("ToggleGuides", "Tgld");
PSEnum._add("ToggleHistoryPalette", "TglH");
PSEnum._add("ToggleInfoPalette", "TglI");
PSEnum._add("ToggleLayerMask", "TglM");
PSEnum._add("ToggleLayersPalette", "Tgly");
PSEnum._add("ToggleLockGuides", "TglL");
PSEnum._add("ToggleMagentaPreview", "TgMP");
PSEnum._add("ToggleNavigatorPalette", "TglN");
PSEnum._add("ToggleOptionsPalette", "TglO");
PSEnum._add("TogglePaths", "TglP");
PSEnum._add("TogglePathsPalette", "Tglt");
PSEnum._add("ToggleRGBMacPreview", "TrMp");
PSEnum._add("ToggleRGBWindowsPreview", "TrWp");
PSEnum._add("ToggleRGBUncompensatedPreview", "TrUp");
PSEnum._add("ToggleRulers", "TglR");
PSEnum._add("ToggleSnapToGrid", "TgSn");
PSEnum._add("ToggleSnapToGuides", "TglS");
PSEnum._add("ToggleStatusBar", "Tgls");
PSEnum._add("ToggleStylesPalette", "TgSl");
PSEnum._add("ToggleSwatchesPalette", "Tglw");
PSEnum._add("ToggleToolsPalette", "TglT");
PSEnum._add("ToggleYellowPreview", "TgYP");
PSEnum._add("Top", "Top ");
PSEnum._add("Transparency", "Trsp");
PSEnum._add("TransparencyGamutPreferences", "TrnG");
PSEnum._add("Transparent", "Trns");
PSEnum._add("Trinitron", "Trnt");
PSEnum._add("Tritone", "Trtn");
PSEnum._add("UIBitmap", "UBtm");
PSEnum._add("UICMYK", "UCMY");
PSEnum._add("UIDuotone", "UDtn");
PSEnum._add("UIGrayscale", "UGry");
PSEnum._add("UIIndexed", "UInd");
PSEnum._add("UILab", "ULab");
PSEnum._add("UIMultichannel", "UMlt");
PSEnum._add("UIRGB", "URGB");
PSEnum._add("Undo", "Und ");
PSEnum._add("Uniform", "Unfm");
PSEnum._add("UniformDistribution", "Unfr");
PSEnum._add("UnitsRulersPreferences", "UntR");
PSEnum._add("Upper", "Upr ");
PSEnum._add("UserStop", "UsrS");
PSEnum._add("VMPreferences", "VMPr");
PSEnum._add("Vertical", "Vrtc");
PSEnum._add("VerticalOnly", "VrtO");
PSEnum._add("Violet", "Vlt ");
PSEnum._add("WaveSine", "WvSn");
PSEnum._add("WaveSquare", "WvSq");
PSEnum._add("WaveTriangle", "WvTr");
PSEnum._add("Web", "Web ");
PSEnum._add("White", "Wht ");
PSEnum._add("Whites", "Whts");
PSEnum._add("WinThumbnail", "WnTh");
PSEnum._add("Wind", "Wnd ");
PSEnum._add("Windows", "Win ");
PSEnum._add("WindowsSystem", "WndS");
PSEnum._add("Wrap", "Wrp ");
PSEnum._add("WrapAround", "WrpA");
PSEnum._add("WorkPath", "WrkP");
PSEnum._add("Yellow", "Yllw");
PSEnum._add("YellowColor", "Ylw ");
PSEnum._add("Yellows", "Ylws");
PSEnum._add("Yes", "Ys  ");
PSEnum._add("Zip", "ZpEn");
PSEnum._add("Zoom", "Zm  ");
PSEnum._add("ZoomIn", "ZmIn");
PSEnum._add("ZoomOut", "ZmOt");

PSEvent._add("3DTransform", "TdT ");
PSEvent._add("Average", "Avrg");
PSEvent._add("ApplyStyle", "ASty");
PSEvent._add("Assert", "Asrt");
PSEvent._add("AccentedEdges", "AccE");
PSEvent._add("Add", "Add ");
PSEvent._add("AddNoise", "AdNs");
PSEvent._add("AddTo", "AddT");
PSEvent._add("Align", "Algn");
PSEvent._add("All", "All ");
PSEvent._add("AngledStrokes", "AngS");
PSEvent._add("ApplyImage", "AppI");
PSEvent._add("BasRelief", "BsRl");
PSEvent._add("Batch", "Btch");
PSEvent._add("BatchFromDroplet", "BtcF");
PSEvent._add("Blur", "Blr ");
PSEvent._add("BlurMore", "BlrM");
PSEvent._add("Border", "Brdr");
PSEvent._add("Brightness", "BrgC");
PSEvent._add("CanvasSize", "CnvS");
PSEvent._add("ChalkCharcoal", "ChlC");
PSEvent._add("ChannelMixer", "ChnM");
PSEvent._add("Charcoal", "Chrc");
PSEvent._add("Chrome", "Chrm");
PSEvent._add("Clear", "Cler");
PSEvent._add("Close", "Cls ");
PSEvent._add("Clouds", "Clds");
PSEvent._add("ColorBalance", "ClrB");
PSEvent._add("ColorHalftone", "ClrH");
PSEvent._add("ColorRange", "ClrR");
PSEvent._add("ColoredPencil", "ClrP");
PSEvent._add("ConteCrayon", "CntC");
PSEvent._add("Contract", "Cntc");
PSEvent._add("ConvertMode", "CnvM");
PSEvent._add("Copy", "copy");
PSEvent._add("CopyEffects", "CpFX");
PSEvent._add("CopyMerged", "CpyM");
PSEvent._add("CopyToLayer", "CpTL");
PSEvent._add("Craquelure", "Crql");
PSEvent._add("CreateDroplet", "CrtD");
PSEvent._add("Crop", "Crop");
PSEvent._add("Crosshatch", "Crsh");
PSEvent._add("Crystallize", "Crst");
PSEvent._add("Curves", "Crvs");
PSEvent._add("Custom", "Cstm");
PSEvent._add("Cut", "cut ");
PSEvent._add("CutToLayer", "CtTL");
PSEvent._add("Cutout", "Ct  ");
PSEvent._add("DarkStrokes", "DrkS");
PSEvent._add("DeInterlace", "Dntr");
PSEvent._add("DefinePattern", "DfnP");
PSEvent._add("Defringe", "Dfrg");
PSEvent._add("Delete", "Dlt ");
PSEvent._add("Desaturate", "Dstt");
PSEvent._add("Deselect", "Dslc");
PSEvent._add("Despeckle", "Dspc");
PSEvent._add("DifferenceClouds", "DfrC");
PSEvent._add("Diffuse", "Dfs ");
PSEvent._add("DiffuseGlow", "DfsG");
PSEvent._add("DisableLayerFX", "dlfx");
PSEvent._add("Displace", "Dspl");
PSEvent._add("Distribute", "Dstr");
PSEvent._add("Draw", "Draw");
PSEvent._add("DryBrush", "DryB");
PSEvent._add("Duplicate", "Dplc");
PSEvent._add("DustAndScratches", "DstS");
PSEvent._add("Emboss", "Embs");
PSEvent._add("Equalize", "Eqlz");
PSEvent._add("Exchange", "Exch");
PSEvent._add("Expand", "Expn");
PSEvent._add("Export", "Expr");
PSEvent._add("Jumpto", "Jpto");             // XXX deprecated CS4
PSEvent._add("Extrude", "Extr");
PSEvent._add("Facet", "Fct ");
PSEvent._add("Fade", "Fade");
PSEvent._add("Feather", "Fthr");
PSEvent._add("Fibers", "Fbrs");
PSEvent._add("Fill", "Fl  ");
PSEvent._add("FilmGrain", "FlmG");
PSEvent._add("Filter", "Fltr");
PSEvent._add("FindEdges", "FndE");
PSEvent._add("FlattenImage", "FltI");
PSEvent._add("Flip", "Flip");
PSEvent._add("Fragment", "Frgm");
PSEvent._add("Fresco", "Frsc");
PSEvent._add("GaussianBlur", "GsnB");
PSEvent._add("Get", "getd");
PSEvent._add("Glass", "Gls ");
PSEvent._add("GlowingEdges", "GlwE");
PSEvent._add("Gradient", "Grdn");
PSEvent._add("GradientMap", "GrMp");
PSEvent._add("Grain", "Grn ");
PSEvent._add("GraphicPen", "GraP");
PSEvent._add("Group", "GrpL");
PSEvent._add("Grow", "Grow");
PSEvent._add("HalftoneScreen", "HlfS");
PSEvent._add("Hide", "Hd  ");
PSEvent._add("HighPass", "HghP");
PSEvent._add("HSBHSL", "HsbP");
PSEvent._add("HueSaturation", "HStr");
PSEvent._add("ImageSize", "ImgS");
PSEvent._add("Import", "Impr");
PSEvent._add("InkOutlines", "InkO");
PSEvent._add("Intersect", "Intr");
PSEvent._add("IntersectWith", "IntW");
PSEvent._add("Inverse", "Invs");
PSEvent._add("Invert", "Invr");
PSEvent._add("LensFlare", "LnsF");
PSEvent._add("Levels", "Lvls");
PSEvent._add("LightingEffects", "LghE");
PSEvent._add("Link", "Lnk ");
PSEvent._add("Make", "Mk  ");
PSEvent._add("Maximum", "Mxm ");
PSEvent._add("Median", "Mdn ");
PSEvent._add("MergeLayers", "Mrg2");
PSEvent._add("MergeLayersOld", "MrgL");
PSEvent._add("MergeSpotChannel", "MSpt");
PSEvent._add("MergeVisible", "MrgV");
PSEvent._add("Mezzotint", "Mztn");
PSEvent._add("Minimum", "Mnm ");
PSEvent._add("Mosaic", "Msc ");
PSEvent._add("MotionBlur", "MtnB");
PSEvent._add("Move", "move");
PSEvent._add("NTSCColors", "NTSC");
PSEvent._add("NeonGlow", "NGlw");
PSEvent._add("Next", "Nxt ");
PSEvent._add("NotePaper", "NtPr");
PSEvent._add("Notify", "Ntfy");
PSEvent._add("OceanRipple", "OcnR");
PSEvent._add("Offset", "Ofst");
PSEvent._add("Open", "Opn ");
PSEvent._add("PaintDaubs", "PntD");
PSEvent._add("PaletteKnife", "PltK");
PSEvent._add("Paste", "past");
PSEvent._add("PasteEffects", "PaFX");
PSEvent._add("PasteInto", "PstI");
PSEvent._add("PasteOutside", "PstO");
PSEvent._add("Patchwork", "Ptch");
PSEvent._add("Photocopy", "Phtc");
PSEvent._add("Pinch", "Pnch");
PSEvent._add("Place", "Plc ");
PSEvent._add("Plaster", "Plst");
PSEvent._add("PlasticWrap", "PlsW");
PSEvent._add("Play", "Ply ");
PSEvent._add("Pointillize", "Pntl");
PSEvent._add("Polar", "Plr ");
PSEvent._add("PosterEdges", "PstE");
PSEvent._add("Posterize", "Pstr");
PSEvent._add("Previous", "Prvs");
PSEvent._add("Print", "Prnt");
PSEvent._add("ProfileToProfile", "PrfT");
PSEvent._add("Purge", "Prge");
PSEvent._add("Quit", "quit");
PSEvent._add("RadialBlur", "RdlB");
PSEvent._add("Rasterize", "Rstr");
PSEvent._add("RasterizeTypeSheet", "RstT");
PSEvent._add("RemoveBlackMatte", "RmvB");
PSEvent._add("RemoveLayerMask", "RmvL");
PSEvent._add("RemoveWhiteMatte", "RmvW");
PSEvent._add("Rename", "Rnm ");
PSEvent._add("ReplaceColor", "RplC");
PSEvent._add("Reset", "Rset");
PSEvent._add("Reticulation", "Rtcl");
PSEvent._add("Revert", "Rvrt");
PSEvent._add("Ripple", "Rple");
PSEvent._add("Rotate", "Rtte");
PSEvent._add("RoughPastels", "RghP");
PSEvent._add("Save", "save");
PSEvent._add("Select", "slct");
PSEvent._add("SelectiveColor", "SlcC");
PSEvent._add("Set", "setd");
PSEvent._add("SharpenEdges", "ShrE");
PSEvent._add("Sharpen", "Shrp");
PSEvent._add("SharpenMore", "ShrM");
PSEvent._add("Shear", "Shr ");
PSEvent._add("Show", "Shw ");
PSEvent._add("Similar", "Smlr");
PSEvent._add("SmartBlur", "SmrB");
PSEvent._add("Smooth", "Smth");
PSEvent._add("SmudgeStick", "SmdS");
PSEvent._add("Solarize", "Slrz");
PSEvent._add("Spatter", "Spt ");
PSEvent._add("Spherize", "Sphr");
PSEvent._add("SplitChannels", "SplC");
PSEvent._add("Sponge", "Spng");
PSEvent._add("SprayedStrokes", "SprS");
PSEvent._add("StainedGlass", "StnG");
PSEvent._add("Stamp", "Stmp");
PSEvent._add("Stop", "Stop");
PSEvent._add("Stroke", "Strk");
PSEvent._add("Subtract", "Sbtr");
PSEvent._add("SubtractFrom", "SbtF");
PSEvent._add("Sumie", "Smie");
PSEvent._add("TakeMergedSnapshot", "TkMr");
PSEvent._add("TakeSnapshot", "TkSn");
PSEvent._add("TextureFill", "TxtF");
PSEvent._add("Texturizer", "Txtz");
PSEvent._add("Threshold", "Thrs");
PSEvent._add("Tiles", "Tls ");
PSEvent._add("TornEdges", "TrnE");
PSEvent._add("TraceContour", "TrcC");
PSEvent._add("Transform", "Trnf");
PSEvent._add("Trap", "Trap");
PSEvent._add("Twirl", "Twrl");
PSEvent._add("Underpainting", "Undr");
PSEvent._add("Undo", "undo");
PSEvent._add("Ungroup", "Ungr");
PSEvent._add("Unlink", "Unlk");
PSEvent._add("UnsharpMask", "UnsM");
PSEvent._add("Variations", "Vrtn");
PSEvent._add("Wait", "Wait");
PSEvent._add("WaterPaper", "WtrP");
PSEvent._add("Watercolor", "Wtrc");
PSEvent._add("Wave", "Wave");
PSEvent._add("Wind", "Wnd ");
PSEvent._add("ZigZag", "ZgZg");
PSEvent._add("BackLight", "BacL");
PSEvent._add("FillFlash", "FilE");
PSEvent._add("ColorCast", "ColE");
PSEvent._add("OpenUntitled", "OpnU");

PSForm._add("Class", "Clss");
PSForm._add("Enumerated", "Enmr");
PSForm._add("Identifier", "Idnt");
PSForm._add("Index", "indx");
PSForm._add("Offset", "rele");
PSForm._add("Property", "prop");

PSKey._add("3DAntiAlias", "Alis");
PSKey._add("Adjustment", "Adjs");
PSKey._add("Aligned", "Algd");
PSKey._add("Alignment", "Algn");
PSKey._add("AllPS", "All ");
PSKey._add("AllExcept", "AllE");
PSKey._add("AllToolOptions", "AlTl");
PSKey._add("AlphaChannelOptions", "AChn");
PSKey._add("AlphaChannels", "AlpC");
PSKey._add("AmbientBrightness", "AmbB");
PSKey._add("AmbientColor", "AmbC");
PSKey._add("Amount", "Amnt");
PSKey._add("AmplitudeMax", "AmMx");
PSKey._add("AmplitudeMin", "AmMn");
PSKey._add("Anchor", "Anch");
PSKey._add("Angle", "Angl");
PSKey._add("Angle1", "Ang1");
PSKey._add("Angle2", "Ang2");
PSKey._add("Angle3", "Ang3");
PSKey._add("Angle4", "Ang4");
PSKey._add("AntiAlias", "AntA");
PSKey._add("Append", "Appe");
PSKey._add("Apply", "Aply");
PSKey._add("Area", "Ar  ");
PSKey._add("Arrowhead", "Arrw");
PSKey._add("As", "As  ");
PSKey._add("AssetBin", "Asst");
PSKey._add("AssumedCMYK", "AssC");
PSKey._add("AssumedGray", "AssG");
PSKey._add("AssumedRGB", "AssR");
PSKey._add("At", "At  ");
PSKey._add("Auto", "Auto");
PSKey._add("AutoContrast", "AuCo");
PSKey._add("AutoErase", "Atrs");
PSKey._add("AutoKern", "AtKr");
PSKey._add("AutoUpdate", "AtUp");
PSKey._add("ShowMenuColors", "SwMC");
PSKey._add("Axis", "Axis");
PSKey._add("Background", "Bckg");
PSKey._add("BackgroundColor", "BckC");
PSKey._add("BackgroundLevel", "BckL");
PSKey._add("Backward", "Bwd ");
PSKey._add("Balance", "Blnc");
PSKey._add("BaselineShift", "Bsln");
PSKey._add("BeepWhenDone", "BpWh");
PSKey._add("BeginRamp", "BgnR");
PSKey._add("BeginSustain", "BgnS");
PSKey._add("BevelDirection", "bvlD");
PSKey._add("BevelEmboss", "ebbl");
PSKey._add("BevelStyle", "bvlS");
PSKey._add("BevelTechnique", "bvlT");
PSKey._add("BigNudgeH", "BgNH");
PSKey._add("BigNudgeV", "BgNV");
PSKey._add("BitDepth", "BtDp");
PSKey._add("Black", "Blck");
PSKey._add("BlackClip", "BlcC");
PSKey._add("BlackGeneration", "Blcn");
PSKey._add("BlackGenerationCurve", "BlcG");
PSKey._add("BlackIntensity", "BlcI");
PSKey._add("BlackLevel", "BlcL");
PSKey._add("BlackLimit", "BlcL");
PSKey._add("Bleed", "Bld ");
PSKey._add("BlendRange", "Blnd");
PSKey._add("Blue", "Bl  ");
PSKey._add("BlueBlackPoint", "BlBl");
PSKey._add("BlueGamma", "BlGm");
PSKey._add("BlueWhitePoint", "BlWh");
PSKey._add("BlueX", "BlX ");
PSKey._add("BlueY", "BlY ");
PSKey._add("Blur", "blur");
PSKey._add("BlurMethod", "BlrM");
PSKey._add("BlurQuality", "BlrQ");
PSKey._add("Book", "Bk  ");
PSKey._add("BorderThickness", "BrdT");
PSKey._add("Bottom", "Btom");
PSKey._add("Brightness", "Brgh");
PSKey._add("BrushDetail", "BrsD");
PSKey._add("Brushes", "Brsh");
PSKey._add("BrushSize", "BrsS");
PSKey._add("BrushType", "BrsT");
PSKey._add("BumpAmplitude", "BmpA");
PSKey._add("BumpChannel", "BmpC");
PSKey._add("By", "By  ");
PSKey._add("Byline", "Byln");
PSKey._add("BylineTitle", "BylT");
PSKey._add("ByteOrder", "BytO");
PSKey._add("CachePrefs", "CchP");
PSKey._add("ChokeMatte", "Ckmt");
PSKey._add("CloneSource", "ClnS");
PSKey._add("CMYKSetup", "CMYS");
PSKey._add("Calculation", "Clcl");
PSKey._add("CalibrationBars", "Clbr");
PSKey._add("Caption", "Cptn");
PSKey._add("CaptionWriter", "CptW");
PSKey._add("Category", "Ctgr");
PSKey._add("CellSize", "ClSz");
PSKey._add("Center", "Cntr");
PSKey._add("CenterCropMarks", "CntC");
PSKey._add("ChalkArea", "ChlA");
PSKey._add("Channel", "Chnl");
PSKey._add("ChannelMatrix", "ChMx");
PSKey._add("ChannelName", "ChnN");
PSKey._add("Channels", "Chns");
PSKey._add("ChannelsInterleaved", "ChnI");
PSKey._add("CharcoalAmount", "ChAm");
PSKey._add("CharcoalArea", "ChrA");
PSKey._add("ChromeFX", "ChFX");
PSKey._add("City", "City");
PSKey._add("ClearAmount", "ClrA");
PSKey._add("ClippingPath", "ClPt");
PSKey._add("ClippingPathEPS", "ClpP");
PSKey._add("ClippingPathFlatness", "ClpF");
PSKey._add("ClippingPathIndex", "ClpI");
PSKey._add("ClippingPathInfo", "Clpg");
PSKey._add("ClosedSubpath", "Clsp");
PSKey._add("Color", "Clr ");
PSKey._add("ColorChannels", "Clrh");
PSKey._add("ColorCorrection", "ClrC");
PSKey._add("ColorIndicates", "ClrI");
PSKey._add("ColorManagement", "ClMg");
PSKey._add("ColorPickerPrefs", "Clrr");
PSKey._add("ColorTable", "ClrT");
PSKey._add("Colorize", "Clrz");
PSKey._add("Colors", "Clrs");
PSKey._add("ColorsList", "ClrL");
PSKey._add("ColorSpace", "ClrS");
PSKey._add("ColumnWidth", "ClmW");
PSKey._add("CommandKey", "CmdK");
PSKey._add("Compensation", "Cmpn");
PSKey._add("Compression", "Cmpr");
PSKey._add("Concavity", "Cncv");
PSKey._add("Condition", "Cndt");
PSKey._add("Constant", "Cnst");
PSKey._add("Constrain", "Cnst");
PSKey._add("ConstrainProportions", "CnsP");
PSKey._add("ConstructionFOV", "Cfov");
PSKey._add("Contiguous", "Cntg");
PSKey._add("Continue", "Cntn");
PSKey._add("Continuity", "Cnty");
PSKey._add("Contrast", "Cntr");
PSKey._add("Convert", "Cnvr");
PSKey._add("Copy", "Cpy ");
PSKey._add("Copyright", "Cpyr");
PSKey._add("CopyrightNotice", "CprN");
PSKey._add("CornerCropMarks", "CrnC");
PSKey._add("Count", "Cnt ");
PSKey._add("CountryName", "CntN");
PSKey._add("CrackBrightness", "CrcB");
PSKey._add("CrackDepth", "CrcD");
PSKey._add("CrackSpacing", "CrcS");
PSKey._add("CreateLayersFromLayerFX", "blfl");
PSKey._add("Credit", "Crdt");
PSKey._add("Crossover", "Crss");
PSKey._add("Current", "Crnt");
PSKey._add("CurrentHistoryState", "CrnH");
PSKey._add("CurrentLight", "CrnL");
PSKey._add("CurrentToolOptions", "CrnT");
PSKey._add("Curve", "Crv ");
PSKey._add("CurveFile", "CrvF");
PSKey._add("Custom", "Cstm");
PSKey._add("CustomForced", "CstF");
PSKey._add("CustomMatte", "CstM");
PSKey._add("CustomPalette", "CstP");
PSKey._add("Cyan", "Cyn ");
PSKey._add("DarkIntensity", "DrkI");
PSKey._add("Darkness", "Drkn");
PSKey._add("DateCreated", "DtCr");
PSKey._add("Datum", "Dt  ");
PSKey._add("DCS", "DCS ");
PSKey._add("Definition", "Dfnt");
PSKey._add("Density", "Dnst");
PSKey._add("Depth", "Dpth");
PSKey._add("DestBlackMax", "Dstl");
PSKey._add("DestBlackMin", "DstB");
PSKey._add("DestinationMode", "DstM");
PSKey._add("DestWhiteMax", "Dstt");
PSKey._add("DestWhiteMin", "DstW");
PSKey._add("Detail", "Dtl ");
PSKey._add("Diameter", "Dmtr");
PSKey._add("DiffusionDither", "DffD");
PSKey._add("Direction", "Drct");
PSKey._add("DirectionBalance", "DrcB");
PSKey._add("DisplaceFile", "DspF");
PSKey._add("DisplacementMap", "DspM");
PSKey._add("DisplayPrefs", "DspP");
PSKey._add("Distance", "Dstn");
PSKey._add("Distortion", "Dstr");
PSKey._add("Distribution", "Dstr");
PSKey._add("Dither", "Dthr");
PSKey._add("DitherAmount", "DthA");
PSKey._add("DitherPreserve", "Dthp");
PSKey._add("DitherQuality", "Dthq");
PSKey._add("DocumentID", "DocI");
PSKey._add("DotGain", "DtGn");
PSKey._add("DotGainCurves", "DtGC");
PSKey._add("DPXFormat", "DPXf");
PSKey._add("DropShadow", "DrSh");
PSKey._add("Duplicate", "Dplc");
PSKey._add("DynamicColorSliders", "DnmC");
PSKey._add("Edge", "Edg ");
PSKey._add("EdgeBrightness", "EdgB");
PSKey._add("EdgeFidelity", "EdgF");
PSKey._add("EdgeIntensity", "EdgI");
PSKey._add("EdgeSimplicity", "EdgS");
PSKey._add("EdgeThickness", "EdgT");
PSKey._add("EdgeWidth", "EdgW");
PSKey._add("Effect", "Effc");
PSKey._add("EmbedProfiles", "EmbP");
PSKey._add("EmbedCMYK", "EmbC");
PSKey._add("EmbedGray", "EmbG");
PSKey._add("EmbedLab", "EmbL");
PSKey._add("EmbedRGB", "EmbR");
PSKey._add("EmulsionDown", "EmlD");
PSKey._add("Enabled", "enab");
PSKey._add("Encoding", "Encd");
PSKey._add("End", "End ");
PSKey._add("EndArrowhead", "EndA");
PSKey._add("EndRamp", "EndR");
PSKey._add("EndSustain", "EndS");
PSKey._add("Engine", "Engn");
PSKey._add("EraserKind", "ErsK");
PSKey._add("EraseToHistory", "ErsT");
PSKey._add("ExactPoints", "ExcP");
PSKey._add("Export", "Expr");
PSKey._add("ExportClipboard", "ExpC");
PSKey._add("Exposure", "Exps");
PSKey._add("Extend", "Extd");
PSKey._add("Extension", "Extn");
PSKey._add("ExtensionsQuery", "ExtQ");
PSKey._add("ExtrudeDepth", "ExtD");
PSKey._add("ExtrudeMaskIncomplete", "ExtM");
PSKey._add("ExtrudeRandom", "ExtR");
PSKey._add("ExtrudeSize", "ExtS");
PSKey._add("ExtrudeSolidFace", "ExtF");
PSKey._add("ExtrudeType", "ExtT");
PSKey._add("EyeDropperSample", "EyDr");
PSKey._add("FadeoutSteps", "FdtS");
PSKey._add("FadeTo", "FdT ");
PSKey._add("Falloff", "FlOf");
PSKey._add("FPXCompress", "FxCm");
PSKey._add("FPXQuality", "FxQl");
PSKey._add("FPXSize", "FxSz");
PSKey._add("FPXView", "FxVw");
PSKey._add("Feather", "Fthr");
PSKey._add("FiberLength", "FbrL");
PSKey._add("File", "File");
PSKey._add("FileCreator", "FlCr");
PSKey._add("FileInfo", "FlIn");
PSKey._add("FileReference", "FilR");
PSKey._add("FileSavePrefs", "FlSP");
PSKey._add("FilesList", "flst");
PSKey._add("FileType", "FlTy");
PSKey._add("Fill", "Fl  ");
PSKey._add("FillColor", "FlCl");
PSKey._add("FillNeutral", "FlNt");
PSKey._add("FilterLayerRandomSeed", "FlRs");
PSKey._add("FilterLayerPersistentData", "FlPd");
PSKey._add("Fingerpainting", "Fngr");
PSKey._add("FlareCenter", "FlrC");
PSKey._add("Flatness", "Fltn");
PSKey._add("Flatten", "Fltt");
PSKey._add("FlipVertical", "FlpV");
PSKey._add("Focus", "Fcs ");
PSKey._add("Folders", "Fldr");
PSKey._add("FontDesignAxes", "FntD");
PSKey._add("FontDesignAxesVectors", "FntV");
PSKey._add("FontName", "FntN");
PSKey._add("FontScript", "Scrp");
PSKey._add("FontStyleName", "FntS");
PSKey._add("FontTechnology", "FntT");
PSKey._add("ForcedColors", "FrcC");
PSKey._add("ForegroundColor", "FrgC");
PSKey._add("ForegroundLevel", "FrgL");
PSKey._add("Format", "Fmt ");
PSKey._add("Forward", "Fwd ");
PSKey._add("FrameFX", "FrFX");
PSKey._add("FrameWidth", "FrmW");
PSKey._add("FreeTransformCenterState", "FTcs");
PSKey._add("Frequency", "Frqn");
PSKey._add("From", "From");
PSKey._add("FromBuiltin", "FrmB");
PSKey._add("FromMode", "FrmM");
PSKey._add("FunctionKey", "FncK");
PSKey._add("Fuzziness", "Fzns");
PSKey._add("GamutWarning", "GmtW");
PSKey._add("GCR", "GCR ");
PSKey._add("GeneralPrefs", "GnrP");
PSKey._add("GIFColorFileType", "GFPT");
PSKey._add("GIFColorLimit", "GFCL");
PSKey._add("GIFExportCaption", "GFEC");
PSKey._add("GIFMaskChannelIndex", "GFMI");
PSKey._add("GIFMaskChannelInverted", "GFMV");
PSKey._add("GIFPaletteFile", "GFPF");
PSKey._add("GIFPaletteType", "GFPL");
PSKey._add("GIFRequiredColorSpaceType", "GFCS");
PSKey._add("GIFRowOrderType", "GFIT");
PSKey._add("GIFTransparentColor", "GFTC");
PSKey._add("GIFTransparentIndexBlue", "GFTB");
PSKey._add("GIFTransparentIndexGreen", "GFTG");
PSKey._add("GIFTransparentIndexRed", "GFTR");
PSKey._add("GIFUseBestMatch", "GFBM");
PSKey._add("Gamma", "Gmm ");
PSKey._add("GlobalAngle", "gblA");
PSKey._add("GlobalLightingAngle", "gagl");
PSKey._add("Gloss", "Glos");
PSKey._add("GlowAmount", "GlwA");
PSKey._add("GlowTechnique", "GlwT");
PSKey._add("Gradient", "Grad");
PSKey._add("GradientFill", "Grdf");
PSKey._add("Grain", "Grn ");
PSKey._add("GrainType", "Grnt");
PSKey._add("Graininess", "Grns");
PSKey._add("Gray", "Gry ");
PSKey._add("GrayBehavior", "GrBh");
PSKey._add("GraySetup", "GrSt");
PSKey._add("Green", "Grn ");
PSKey._add("GreenBlackPoint", "GrnB");
PSKey._add("GreenGamma", "GrnG");
PSKey._add("GreenWhitePoint", "GrnW");
PSKey._add("GreenX", "GrnX");
PSKey._add("GreenY", "GrnY");
PSKey._add("GridColor", "GrdC");
PSKey._add("GridCustomColor", "Grds");
PSKey._add("GridMajor", "GrdM");
PSKey._add("GridMinor", "Grdn");
PSKey._add("GridStyle", "GrdS");
PSKey._add("GridUnits", "Grdt");
PSKey._add("Group", "Grup");
PSKey._add("GroutWidth", "GrtW");
PSKey._add("GrowSelection", "GrwS");
PSKey._add("Guides", "Gdes");
PSKey._add("GuidesColor", "GdsC");
PSKey._add("GuidesCustomColor", "Gdss");
PSKey._add("GuidesStyle", "GdsS");
PSKey._add("GuidesPrefs", "GdPr");
PSKey._add("GutterWidth", "GttW");
PSKey._add("HalftoneFile", "HlfF");
PSKey._add("HalftoneScreen", "HlfS");
PSKey._add("HalftoneSpec", "Hlfp");
PSKey._add("HalftoneSize", "HlSz");
PSKey._add("Hardness", "Hrdn");
PSKey._add("Header", "Hdr ");
PSKey._add("Headline", "Hdln");
PSKey._add("Height", "Hght");
PSKey._add("HostName", "HstN");
PSKey._add("HighlightArea", "HghA");
PSKey._add("HighlightColor", "hglC");
PSKey._add("HighlightLevels", "HghL");
PSKey._add("HighlightMode", "hglM");
PSKey._add("HighlightOpacity", "hglO");
PSKey._add("HighlightStrength", "HghS");
PSKey._add("HistoryBrushSource", "HstB");
PSKey._add("HistoryPrefs", "HstP");
PSKey._add("HistoryStateSource", "HsSS");
PSKey._add("HistoryStates", "HsSt");
PSKey._add("Horizontal", "Hrzn");
PSKey._add("HorizontalScale", "HrzS");
PSKey._add("HostVersion", "HstV");
PSKey._add("Hue", "H   ");
PSKey._add("ICCEngine", "ICCE");
PSKey._add("ICCSetupName", "ICCt");
PSKey._add("ID", "Idnt");
PSKey._add("Idle", "Idle");
PSKey._add("ImageBalance", "ImgB");
PSKey._add("Import", "Impr");
PSKey._add("Impressionist", "Imps");
PSKey._add("In", "In  ");
PSKey._add("Inherits", "c@#^");
PSKey._add("InkColors", "InkC");
PSKey._add("Inks", "Inks");
PSKey._add("InnerGlow", "IrGl");
PSKey._add("InnerGlowSource", "glwS");
PSKey._add("InnerShadow", "IrSh");
PSKey._add("Input", "Inpt");
PSKey._add("InputBlackPoint", "kIBP");
PSKey._add("InputMapRange", "Inmr");
PSKey._add("InputRange", "Inpr");
PSKey._add("InputWhitePoint", "kIWP");
PSKey._add("Intensity", "Intn");
PSKey._add("Intent", "Inte");
PSKey._add("InterfaceBevelHighlight", "IntH");
PSKey._add("InterfaceBevelShadow", "Intv");
PSKey._add("InterfaceBlack", "IntB");
PSKey._add("InterfaceBorder", "Intd");
PSKey._add("InterfaceButtonDarkShadow", "Intk");
PSKey._add("InterfaceButtonDownFill", "Intt");
PSKey._add("InterfaceButtonUpFill", "InBF");
PSKey._add("InterfaceColorBlue2", "ICBL");
PSKey._add("InterfaceColorBlue32", "ICBH");
PSKey._add("InterfaceColorGreen2", "ICGL");
PSKey._add("InterfaceColorGreen32", "ICGH");
PSKey._add("InterfaceColorRed2", "ICRL");
PSKey._add("InterfaceColorRed32", "ICRH");
PSKey._add("InterfaceIconFillActive", "IntI");
PSKey._add("InterfaceIconFillDimmed", "IntF");
PSKey._add("InterfaceIconFillSelected", "Intc");
PSKey._add("InterfaceIconFrameActive", "Intm");
PSKey._add("InterfaceIconFrameDimmed", "Intr");
PSKey._add("InterfaceIconFrameSelected", "IntS");
PSKey._add("InterfacePaletteFill", "IntP");
PSKey._add("InterfaceRed", "IntR");
PSKey._add("InterfaceWhite", "IntW");
PSKey._add("InterfaceToolTipBackground", "IntT");
PSKey._add("InterfaceToolTipText", "ITTT");
PSKey._add("InterfaceTransparencyForeground", "ITFg");
PSKey._add("InterfaceTransparencyBackground", "ITBg");
PSKey._add("Interlace", "Intr");
PSKey._add("InterlaceCreateType", "IntC");
PSKey._add("InterlaceEliminateType", "IntE");
PSKey._add("Interpolation", "Intr");
PSKey._add("InterpolationMethod", "IntM");
PSKey._add("Invert", "Invr");
PSKey._add("InvertMask", "InvM");
PSKey._add("InvertSource2", "InvS");
PSKey._add("InvertTexture", "InvT");
PSKey._add("IsDirty", "IsDr");
PSKey._add("ItemIndex", "ItmI");
PSKey._add("JPEGQuality", "JPEQ");
PSKey._add("Kerning", "Krng");
PSKey._add("Keywords", "Kywd");
PSKey._add("Kind", "Knd ");
PSKey._add("LZWCompression", "LZWC");
PSKey._add("Labels", "Lbls");
PSKey._add("Landscape", "Lnds");
PSKey._add("LastTransform", "LstT");
PSKey._add("LayerEffects", "Lefx");
PSKey._add("LayerFXVisible", "lfxv");
PSKey._add("Layer", "Lyr ");
PSKey._add("LayerID", "LyrI");
PSKey._add("LayerName", "LyrN");
PSKey._add("Layers", "Lyrs");
PSKey._add("Leading", "Ldng");
PSKey._add("Left", "Left");
PSKey._add("Length", "Lngt");
PSKey._add("TermLength", "Lngt");
PSKey._add("Lens", "Lns ");
PSKey._add("Level", "Lvl ");
PSKey._add("Levels", "Lvls");
PSKey._add("LightDark", "LgDr");
PSKey._add("LightDirection", "LghD");
PSKey._add("LightIntensity", "LghI");
PSKey._add("LightPosition", "LghP");
PSKey._add("LightSource", "LghS");
PSKey._add("LightType", "LghT");
PSKey._add("LightenGrout", "LghG");
PSKey._add("Lightness", "Lght");
PSKey._add("Line", "Line");
PSKey._add("LinkedLayerIDs", "LnkL");
PSKey._add("LocalLightingAngle", "lagl");
PSKey._add("LocalLightingAltitude", "Lald");
PSKey._add("LocalRange", "LclR");
PSKey._add("Location", "Lctn");
PSKey._add("Log", "Log ");
PSKey._add("Logarithmic", "kLog");
PSKey._add("LowerCase", "LwCs");
PSKey._add("Luminance", "Lmnc");
PSKey._add("LUTAnimation", "LTnm");
PSKey._add("Magenta", "Mgnt");
PSKey._add("MakeVisible", "MkVs");
PSKey._add("ManipulationFOV", "Mfov");
PSKey._add("MapBlack", "MpBl");
PSKey._add("Mapping", "Mpng");
PSKey._add("MappingShape", "MpgS");
PSKey._add("Material", "Mtrl");
PSKey._add("Matrix", "Mtrx");
PSKey._add("MatteColor", "MttC");
PSKey._add("Maximum", "Mxm ");
PSKey._add("MaximumStates", "MxmS");
PSKey._add("MemoryUsagePercent", "MmrU");
PSKey._add("Merge", "Mrge");
PSKey._add("Merged", "Mrgd");
PSKey._add("Message", "Msge");
PSKey._add("Method", "Mthd");
PSKey._add("MezzotintType", "MztT");
PSKey._add("Midpoint", "Mdpn");
PSKey._add("MidtoneLevels", "MdtL");
PSKey._add("Minimum", "Mnm ");
PSKey._add("MismatchCMYK", "MsmC");
PSKey._add("MismatchGray", "MsmG");
PSKey._add("MismatchRGB", "MsmR");
PSKey._add("Mode", "Md  ");
PSKey._add("Monochromatic", "Mnch");
PSKey._add("MoveTo", "MvT ");
PSKey._add("Name", "Nm  ");
PSKey._add("Negative", "Ngtv");
PSKey._add("New", "Nw  ");
PSKey._add("Noise", "Nose");
PSKey._add("NonImageData", "NnIm");
PSKey._add("NonLinear", "NnLn");
PSKey._add("NumLights", "Nm L");
PSKey._add("Number", "Nmbr");
PSKey._add("NumberOfCacheLevels", "NCch");
PSKey._add("NumberOfChannels", "NmbO");
PSKey._add("NumberOfChildren", "NmbC");
PSKey._add("NumberOfDocuments", "NmbD");
PSKey._add("NumberOfGenerators", "NmbG");
PSKey._add("NumberOfLayers", "NmbL");
PSKey._add("NumberOfLevels", "NmbL");
PSKey._add("NumberOfPaths", "NmbP");
PSKey._add("NumberOfRipples", "NmbR");
PSKey._add("NumberOfSiblings", "NmbS");
PSKey._add("ObjectName", "ObjN");
PSKey._add("Offset", "Ofst");
PSKey._add("On", "On  ");
PSKey._add("Opacity", "Opct");
PSKey._add("Optimized", "Optm");
PSKey._add("Orientation", "Ornt");
PSKey._add("OriginalHeader", "OrgH");
PSKey._add("OriginalTransmissionReference", "OrgT");
PSKey._add("OtherCursors", "OthC");
PSKey._add("OuterGlow", "OrGl");
PSKey._add("Output", "Otpt");
PSKey._add("OutputBlackPoint", "kOBP");
PSKey._add("OutputWhitePoint", "kOWP");
PSKey._add("OverprintColors", "OvrC");
PSKey._add("OverrideOpen", "OvrO");
PSKey._add("OverridePrinter", "ObrP");
PSKey._add("OverrideSave", "Ovrd");
PSKey._add("PaintCursorKind", "PnCK");
PSKey._add("ParentIndex", "PrIn");
PSKey._add("ParentName", "PrNm");
PSKey._add("PNGFilter", "PNGf");
PSKey._add("PNGInterlaceType", "PGIT");
PSKey._add("PageFormat", "PMpf");
PSKey._add("PageNumber", "PgNm");
PSKey._add("PageSetup", "PgSt");
PSKey._add("PagePosition", "PgPs");
PSKey._add("PaintingCursors", "PntC");
PSKey._add("PaintType", "PntT");
PSKey._add("Palette", "Plt ");
PSKey._add("PaletteFile", "PltF");
PSKey._add("PaperBrightness", "PprB");
PSKey._add("Path", "Path");
PSKey._add("PathContents", "PthC");
PSKey._add("PathName", "PthN");
PSKey._add("Pattern", "Pttn");
PSKey._add("PencilWidth", "Pncl");
PSKey._add("PerspectiveIndex", "Prsp");
PSKey._add("Phosphors", "Phsp");
PSKey._add("PickerID", "PckI");
PSKey._add("PickerKind", "Pckr");
PSKey._add("PixelPaintSize", "PPSz");
PSKey._add("Platform", "Pltf");
PSKey._add("PluginFolder", "PlgF");
PSKey._add("PluginPrefs", "PlgP");
PSKey._add("Points", "Pts ");
PSKey._add("Position", "Pstn");
PSKey._add("Posterization", "Pstr");
PSKey._add("PostScriptColor", "PstS");
PSKey._add("PredefinedColors", "PrdC");
PSKey._add("PreferBuiltin", "PrfB");
PSKey._add("PreserveAdditional", "PrsA");
PSKey._add("PreserveLuminosity", "PrsL");
PSKey._add("PreserveTransparency", "PrsT");
PSKey._add("Pressure", "Prs ");
PSKey._add("Preferences", "Prfr");
PSKey._add("Preview", "Prvw");
PSKey._add("PreviewCMYK", "PrvK");
PSKey._add("PreviewFullSize", "PrvF");
PSKey._add("PreviewIcon", "PrvI");
PSKey._add("PreviewMacThumbnail", "PrvM");
PSKey._add("PreviewWinThumbnail", "PrvW");
PSKey._add("PreviewsQuery", "PrvQ");
PSKey._add("PrintSettings", "PMps");
PSKey._add("ProfileSetup", "PrfS");
PSKey._add("ProvinceState", "PrvS");
PSKey._add("Quality", "Qlty");
PSKey._add("ExtendedQuality", "EQlt");
PSKey._add("QuickMask", "QucM");
PSKey._add("RGBSetup", "RGBS");
PSKey._add("Radius", "Rds ");
PSKey._add("RandomSeed", "RndS");
PSKey._add("Ratio", "Rt  ");
PSKey._add("RecentFiles", "Rcnf");
PSKey._add("Red", "Rd  ");
PSKey._add("RedBlackPoint", "RdBl");
PSKey._add("RedGamma", "RdGm");
PSKey._add("RedWhitePoint", "RdWh");
PSKey._add("RedX", "RdX ");
PSKey._add("RedY", "RdY ");
PSKey._add("RegistrationMarks", "RgsM");
PSKey._add("Relative", "Rltv");
PSKey._add("Relief", "Rlf ");
PSKey._add("RenderFidelity", "Rfid");
PSKey._add("Resample", "Rsmp");
PSKey._add("ResizeWindowsOnZoom", "RWOZ");
PSKey._add("Resolution", "Rslt");
PSKey._add("ResourceID", "RsrI");
PSKey._add("Response", "Rspn");
PSKey._add("RetainHeader", "RtnH");
PSKey._add("Reverse", "Rvrs");
PSKey._add("Right", "Rght");
PSKey._add("RippleMagnitude", "RplM");
PSKey._add("RippleSize", "RplS");
PSKey._add("Rotate", "Rtt ");
PSKey._add("Roundness", "Rndn");
PSKey._add("RulerOriginH", "RlrH");
PSKey._add("RulerOriginV", "RlrV");
PSKey._add("RulerUnits", "RlrU");
PSKey._add("Saturation", "Strt");
PSKey._add("SaveAndClose", "SvAn");
PSKey._add("SaveComposite", "SvCm");
PSKey._add("SavePaletteLocations", "PltL");
PSKey._add("SavePaths", "SvPt");
PSKey._add("SavePyramids", "SvPy");
PSKey._add("Saving", "Svng");
PSKey._add("Scale", "Scl ");
PSKey._add("ScaleHorizontal", "SclH");
PSKey._add("ScaleVertical", "SclV");
PSKey._add("Scaling", "Scln");
PSKey._add("Scans", "Scns");
PSKey._add("ScratchDisks", "ScrD");
PSKey._add("ScreenFile", "ScrF");
PSKey._add("ScreenType", "ScrT");
PSKey._add("ShadingIntensity", "ShdI");
PSKey._add("ShadingNoise", "ShdN");
PSKey._add("ShadingShape", "ShdS");
PSKey._add("ContourType", "ShpC");
PSKey._add("SerialString", "SrlS");
PSKey._add("Separations", "Sprt");
PSKey._add("ShadowColor", "sdwC");
PSKey._add("ShadowIntensity", "ShdI");
PSKey._add("ShadowLevels", "ShdL");
PSKey._add("ShadowMode", "sdwM");
PSKey._add("ShadowOpacity", "sdwO");
PSKey._add("Shape", "Shp ");
PSKey._add("Sharpness", "Shrp");
PSKey._add("ShearEd", "ShrE");
PSKey._add("ShearPoints", "ShrP");
PSKey._add("ShearSt", "ShrS");
PSKey._add("ShiftKey", "ShfK");
PSKey._add("ShiftKeyToolSwitch", "ShKT");
PSKey._add("ShortNames", "ShrN");
PSKey._add("ShowEnglishFontNames", "ShwE");
PSKey._add("ShowToolTips", "ShwT");
PSKey._add("ShowTransparency", "ShTr");
PSKey._add("SizeKey", "Sz  ");
PSKey._add("Skew", "Skew");
PSKey._add("SmartBlurMode", "SmBM");
PSKey._add("SmartBlurQuality", "SmBQ");
PSKey._add("Smooth", "Smoo");
PSKey._add("Smoothness", "Smth");
PSKey._add("SnapshotInitial", "SnpI");
PSKey._add("SoftClip", "SfCl");
PSKey._add("Softness", "Sftn");
PSKey._add("SmallFontType", "Sfts");
PSKey._add("OldSmallFontType", "Sftt");
PSKey._add("SolidFill", "SoFi");
PSKey._add("Source", "Srce");
PSKey._add("Source2", "Src2");
PSKey._add("SourceMode", "SrcM");
PSKey._add("Spacing", "Spcn");
PSKey._add("SpecialInstructions", "SpcI");
PSKey._add("SpherizeMode", "SphM");
PSKey._add("Spot", "Spot");
PSKey._add("SprayRadius", "SprR");
PSKey._add("SquareSize", "SqrS");
PSKey._add("SrcBlackMax", "Srcl");
PSKey._add("SrcBlackMin", "SrcB");
PSKey._add("SrcWhiteMax", "Srcm");
PSKey._add("SrcWhiteMin", "SrcW");
PSKey._add("Start", "Strt");
PSKey._add("StartArrowhead", "StrA");
PSKey._add("State", "Stte");
PSKey._add("Strength", "srgh");
PSKey._add("StrengthRatio", "srgR");
PSKey._add("StrokeDetail", "StDt");
PSKey._add("StrokeDirection", "SDir");
PSKey._add("StrokeLength", "StrL");
PSKey._add("StrokePressure", "StrP");
PSKey._add("StrokeSize", "StrS");
PSKey._add("StrokeWidth", "StrW");
PSKey._add("Style", "Styl");
PSKey._add("Styles", "Stys");
PSKey._add("StylusIsPressure", "StlP");
PSKey._add("StylusIsColor", "StlC");
PSKey._add("StylusIsOpacity", "StlO");
PSKey._add("StylusIsSize", "StlS");
PSKey._add("SubPathList", "SbpL");
PSKey._add("SupplementalCategories", "SplC");
PSKey._add("SystemInfo", "SstI");
PSKey._add("SystemPalette", "SstP");
PSKey._add("TargetPath", "Trgp");
PSKey._add("TargetPathIndex", "TrgP");
PSKey._add("Text", "Txt ");
PSKey._add("TextClickPoint", "TxtC");
PSKey._add("TextData", "TxtD");
PSKey._add("TextStyle", "TxtS");
PSKey._add("TextStyleRange", "Txtt");
PSKey._add("Texture", "Txtr");
PSKey._add("TextureCoverage", "TxtC");
PSKey._add("TextureFile", "TxtF");
PSKey._add("TextureType", "TxtT");
PSKey._add("Threshold", "Thsh");
PSKey._add("TileNumber", "TlNm");
PSKey._add("TileOffset", "TlOf");
PSKey._add("TileSize", "TlSz");
PSKey._add("Title", "Ttl ");
PSKey._add("To", "T   ");
PSKey._add("ToBuiltin", "TBl ");
PSKey._add("ToLinked", "ToLk");
PSKey._add("ToMode", "TMd ");
PSKey._add("ToggleOthers", "TglO");
PSKey._add("Tolerance", "Tlrn");
PSKey._add("Top", "Top ");
PSKey._add("TotalLimit", "TtlL");
PSKey._add("Tracking", "Trck");
PSKey._add("TransferSpec", "TrnS");
PSKey._add("TransparencyGrid", "TrnG");
PSKey._add("TransferFunction", "TrnF");
PSKey._add("Transparency", "Trns");
PSKey._add("TransparencyGridColors", "TrnC");
PSKey._add("TransparencyGridSize", "TrnG");
PSKey._add("TransparencyPrefs", "TrnP");
PSKey._add("TransparencyShape", "TrnS");
PSKey._add("TransparentIndex", "TrnI");
PSKey._add("TransparentWhites", "TrnW");
PSKey._add("Twist", "Twst");
PSKey._add("Type", "Type");
PSKey._add("UCA", "UC  ");
PSKey._add("UnitsPrefs", "UntP");
PSKey._add("URL", "URL ");
PSKey._add("UndefinedArea", "UndA");
PSKey._add("Underline", "Undl");
PSKey._add("Untitled", "Untl");
PSKey._add("UpperY", "UppY");
PSKey._add("Urgency", "Urgn");
PSKey._add("UseAccurateScreens", "AcrS");
PSKey._add("UseAdditionalPlugins", "AdPl");
PSKey._add("UseCacheForHistograms", "UsCc");
PSKey._add("UseCurves", "UsCr");
PSKey._add("UseDefault", "UsDf");
PSKey._add("UseGlobalAngle", "uglg");
PSKey._add("UseICCProfile", "UsIC");
PSKey._add("UseMask", "UsMs");
PSKey._add("UserMaskEnabled", "UsrM");
PSKey._add("UserMaskLinked", "Usrs");
PSKey._add("LinkEnable", "lnkE");
PSKey._add("Using", "Usng");
PSKey._add("Value", "Vl  ");
PSKey._add("Variance", "Vrnc");
PSKey._add("Vector0", "Vct0");
PSKey._add("Vector1", "Vct1");
PSKey._add("VectorColor", "VctC");
PSKey._add("VersionFix", "VrsF");
PSKey._add("VersionMajor", "VrsM");
PSKey._add("VersionMinor", "VrsN");
PSKey._add("Vertical", "Vrtc");
PSKey._add("VerticalScale", "VrtS");
PSKey._add("VideoAlpha", "Vdlp");
PSKey._add("Visible", "Vsbl");
PSKey._add("WatchSuspension", "WtcS");
PSKey._add("Watermark", "watr");
PSKey._add("WaveType", "Wvtp");
PSKey._add("WavelengthMax", "WLMx");
PSKey._add("WavelengthMin", "WLMn");
PSKey._add("WebdavPrefs", "WbdP");
PSKey._add("WetEdges", "Wtdg");
PSKey._add("What", "What");
PSKey._add("WhiteClip", "WhtC");
PSKey._add("WhiteIntensity", "WhtI");
PSKey._add("WhiteIsHigh", "WhHi");
PSKey._add("WhiteLevel", "WhtL");
PSKey._add("WhitePoint", "WhtP");
PSKey._add("WholePath", "WhPt");
PSKey._add("Width", "Wdth");
PSKey._add("WindMethod", "WndM");
PSKey._add("With", "With");
PSKey._add("WorkPath", "WrPt");
PSKey._add("WorkPathIndex", "WrkP");
PSKey._add("Yellow", "Ylw ");
PSKey._add("ZigZagType", "ZZTy");
PSKey._add("Lighter", "Ligh");
PSKey._add("Darker", "Dark");
PSKey._add("StartUpInPrefs", "Stup");
PSKey._add("LegacySerialString", "lSNs");

PSType._add("ActionReference", "#Act");
PSType._add("ActionData", "ActD");
PSType._add("AlignDistributeSelector", "ADSt");
PSType._add("Alignment", "Alg ");
PSType._add("Amount", "Amnt");
PSType._add("AntiAlias", "Annt");
PSType._add("AreaSelector", "ArSl");
PSType._add("AssumeOptions", "AssO");
PSType._add("BevelEmbossStampStyle", "BESs");
PSType._add("BevelEmbossStyle", "BESl");
PSType._add("BitDepth", "BtDp");
PSType._add("BlackGeneration", "BlcG");
PSType._add("BlendMode", "BlnM");
PSType._add("BlurMethod", "BlrM");
PSType._add("BlurQuality", "BlrQ");
PSType._add("BrushType", "BrsT");
PSType._add("BuiltinProfile", "BltP");
PSType._add("BuiltInContour", "BltC");
PSType._add("CMYKSetupEngine", "CMYE");
PSType._add("Calculation", "Clcn");
PSType._add("Channel", "Chnl");
PSType._add("ChannelReference", "#ChR");
PSType._add("CheckerboardSize", "Chck");
PSType._add("ClassColor", "#Clr");
PSType._add("ClassElement", "#ClE");
PSType._add("ClassExport", "#Cle");
PSType._add("ClassFormat", "#ClF");
PSType._add("ClassHueSatHueSatV2", "#HsV");
PSType._add("ClassImport", "#ClI");
PSType._add("ClassMode", "#ClM");
PSType._add("ClassStringFormat", "#ClS");
PSType._add("ClassTextExport", "#CTE");
PSType._add("ClassTextImport", "#ClT");
PSType._add("Color", "Clr ");
PSType._add("ColorChannel", "#ClC");
PSType._add("ColorPalette", "ClrP");
PSType._add("ColorSpace", "ClrS");
PSType._add("ColorStopType", "Clry");
PSType._add("Colors", "Clrs");
PSType._add("Compensation", "Cmpn");
PSType._add("ContourEdge", "CntE");
PSType._add("Convert", "Cnvr");
PSType._add("CorrectionMethod", "CrcM");
PSType._add("CursorKind", "CrsK");
PSType._add("DCS", "DCS ");
PSType._add("DeepDepth", "DpDp");
PSType._add("Depth", "Dpth");
PSType._add("DiffuseMode", "DfsM");
PSType._add("Direction", "Drct");
PSType._add("DisplacementMap", "DspM");
PSType._add("Distribution", "Dstr");
PSType._add("Dither", "Dthr");
PSType._add("DitherQuality", "Dthq");
PSType._add("DocumentReference", "#DcR");
PSType._add("EPSPreview", "EPSP");
PSType._add("ElementReference", "#ElR");
PSType._add("Encoding", "Encd");
PSType._add("EraserKind", "ErsK");
PSType._add("ExtrudeRandom", "ExtR");
PSType._add("ExtrudeType", "ExtT");
PSType._add("EyeDropperSample", "EyDp");
PSType._add("FPXCompress", "FxCm");
PSType._add("Fill", "Fl  ");
PSType._add("FillColor", "FlCl");
PSType._add("FillContents", "FlCn");
PSType._add("FillMode", "FlMd");
PSType._add("ForcedColors", "FrcC");
PSType._add("FrameFill", "FrFl");
PSType._add("FrameStyle", "FStl");
PSType._add("GIFColorFileType", "GFPT");
PSType._add("GIFPaletteType", "GFPL");
PSType._add("GIFRequiredColorSpaceType", "GFCS");
PSType._add("GIFRowOrderType", "GFIT");
PSType._add("GlobalClass", "GlbC");
PSType._add("GlobalObject", "GlbO");
PSType._add("GradientType", "GrdT");
PSType._add("GradientForm", "GrdF");
PSType._add("GrainType", "Grnt");
PSType._add("GrayBehavior", "GrBh");
PSType._add("GuideGridColor", "GdGr");
PSType._add("GuideGridStyle", "GdGS");
PSType._add("HistoryStateSource", "HstS");
PSType._add("HorizontalLocation", "HrzL");
PSType._add("ImageReference", "#ImR");
PSType._add("InnerGlowSource", "IGSr");
PSType._add("IntegerChannel", "#inC");
PSType._add("Intent", "Inte");
PSType._add("InterlaceCreateType", "IntC");
PSType._add("InterlaceEliminateType", "IntE");
PSType._add("Interpolation", "Intp");
PSType._add("Kelvin", "Klvn");
PSType._add("KelvinCustomWhitePoint", "#Klv");
PSType._add("Lens", "Lns ");
PSType._add("LightDirection", "LghD");
PSType._add("LightPosition", "LghP");
PSType._add("LightType", "LghT");
PSType._add("LocationReference", "#Lct");
PSType._add("MaskIndicator", "MskI");
PSType._add("MatteColor", "MttC");
PSType._add("MatteTechnique", "BETE");
PSType._add("MenuItem", "MnIt");
PSType._add("Method", "Mthd");
PSType._add("MezzotintType", "MztT");
PSType._add("Mode", "Md  ");
PSType._add("Notify", "Ntfy");
PSType._add("Object", "Objc");
PSType._add("ObjectReference", "obj ");
PSType._add("OnOff", "OnOf");
PSType._add("Ordinal", "Ordn");
PSType._add("Orientation", "Ornt");
PSType._add("PNGFilter", "PNGf");
PSType._add("PNGInterlaceType", "PGIT");
PSType._add("PagePosition", "PgPs");
PSType._add("PathKind", "PthK");
PSType._add("PathReference", "#PtR");
PSType._add("Phosphors", "Phsp");
PSType._add("PhosphorsCustomPhosphors", "#Phs");
PSType._add("PickerKind", "PckK");
PSType._add("PixelPaintSize", "PPSz");
PSType._add("Platform", "Pltf");
PSType._add("Preview", "Prvw");
PSType._add("PreviewCMYK", "Prvt");
PSType._add("ProfileMismatch", "PrfM");
PSType._add("PurgeItem", "PrgI");
PSType._add("QuadCenterState", "QCSt");
PSType._add("Quality", "Qlty");
PSType._add("QueryState", "QurS");
PSType._add("RGBSetupSource", "RGBS");
PSType._add("RawData", "tdta");
PSType._add("RippleSize", "RplS");
PSType._add("RulerUnits", "RlrU");
PSType._add("ScreenType", "ScrT");
PSType._add("Shape", "Shp ");
PSType._add("SmartBlurMode", "SmBM");
PSType._add("SmartBlurQuality", "SmBQ");
PSType._add("SourceMode", "Cndn");
PSType._add("SpherizeMode", "SphM");
PSType._add("State", "Stte");
PSType._add("StringClassFormat", "#StC");
PSType._add("StringChannel", "#sth");
PSType._add("StringCompensation", "#Stm");
PSType._add("StringFSS", "#Stf");
PSType._add("StringInteger", "#StI");
PSType._add("StrokeDirection", "StrD");
PSType._add("StrokeLocation", "StrL");
PSType._add("TextureType", "TxtT");
PSType._add("TransparencyGridColors", "Trnl");
PSType._add("TransparencyGridSize", "TrnG");
PSType._add("TypeClassModeOrClassMode", "#TyM");
PSType._add("UndefinedArea", "UndA");
PSType._add("UnitFloat", "UntF");
PSType._add("Urgency", "Urgn");
PSType._add("UserMaskOptions", "UsrM");
PSType._add("ValueList", "VlLs");
PSType._add("VerticalLocation", "VrtL");
PSType._add("WaveType", "Wvtp");
PSType._add("WindMethod", "WndM");
PSType._add("YesNo", "YsN ");
PSType._add("ZigZagType", "ZZTy");

PSUnit._add("Angle", "#Ang");
PSUnit._add("Density", "#Rsl");
PSUnit._add("Distance", "#Rlt");
PSUnit._add("None", "#Nne");
PSUnit._add("Percent", "#Prc");
PSUnit._add("Pixels", "#Pxl");
PSUnit._add("Millimeters", "#Mlm");
PSUnit._add("Points", "#Pnt");

// this fixes the part where "target" whacks/collides-with "null"
PSString._add("Null", "null");

PSConstants.test = function() {
// this really isn't any kind of test yet...
  print('name   = ' + PSClass._name);
  print('action = ' + PSClass.Action);
  print('reverse of ' + PSClass.Action + " = " +
      PSConstants.reverseNameLookup(PSClass.Action));
  print(PSConstants.listAll());
};

"PSConstants.js";
// EOF
//
// Stream.js
// This file contains code necessary for reading and writing binary data with
// reasonably good performance. There is a lot that can be done to improve this
// but it works well enough for current purposes
//
// $Id$
// Copyright: (c)2007, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
Stream = function(str) {
  var self = this;
  self.str = (str ? str : []); // the actual bytes
  self.ptr = 0;                // the current index into the stream
  self.byteOrder = Stream.DEFAULT_BYTEORDER;   // or Stream.LITTLE_ENDIAN
};
Stream.prototype.typename = "Stream";

Stream.BIG_ENDIAN = "BE";
Stream.LITTLE_ENDIAN = "LE";
Stream.DEFAULT_BYTEORDER = Stream.BIG_ENDIAN;

Stream.RcsId = "$Revision$";

Stream.throwError = function(e) {
  throw e;
};

Stream.EOF = -1;

//
// some code for reading and writing files
//
Stream.writeToFile = function(fptr, str) {
  var file = Stream.convertFptr(fptr);
  file.open("w") || Stream.throwError("Unable to open output file \"" +
                                      file + "\".\r" + file.error);
  file.encoding = 'BINARY';
  file.write(str);
  file.close();
};
Stream.readFromFile = function(fptr) {
  var file = Stream.convertFptr(fptr);
  file.open("r") || Stream.throwError("Unable to open input file \"" +
                                      file + "\".\r" + file.error);
  file.encoding = 'BINARY';
  var str = '';
  str = file.read(file.length);
  file.close();
  return str;
};
Stream.readStream = function(fptr) {
  var str = new Stream();
  str.str = Stream.readFromFile(fptr);
  return str;
};
Stream.convertFptr = function(fptr) {
  var f;
  if (fptr.constructor == String) {
    f = File(fptr);
  } else if (fptr instanceof File || fptr instanceof Folder) {
    f = fptr;
  } else {
    throw "Bad file \"" + fptr + "\" specified.";
  }
  return f;
};

//
// Convert the Stream to a String. Probably not the best choice of names here
//
Stream.prototype.toStream = function() {
  return this.str.join("");
};

Stream.prototype.seek = function(ptr, mode) {
  var self = this;
  var index;

  if (mode == undefined) {
    mode = 0;
  }

  if (mode == 0) {
    index = ptr;
  } else if (mode == 1) {
    index = self.ptr + ptr;
  } else if (mode == 2) {
    index = self.str.length - ptr;
  } else {
    throw "Bad seek mode.";
  }

  if (index < 0 || index > this.str.length) {
    throw "Attempt to seek in Stream out of range.";
  }
  self.ptr = index;
};
Stream.prototype.tell = function() {
  return this.ptr;
};
Stream.prototype.eof = function() {
  return this.ptr == this.str.length;
};
Stream.prototype.length = function() {
  return this.str.length;
};

//
// Write parts into the Stream
//
Stream.prototype.writeByte = function(b) {
  var self = this;
  self.str[self.ptr++] = String.fromCharCode(b);
  return self;
};
Stream.prototype.writeChar = function(c) {
  var self = this;
  self.str[self.ptr++] = c.charCodeAt(0);
  return self;
};
Stream.prototype.writeUnicodeChar = function(c) {
  var self = this;
  self.writeInt16(c.charCodeAt(0));
  return self;
};

Stream.prototype.writeInt16 = function(w) {
  var self = this;
  self.writeByte((w >> 8) & 0xFF);
  self.writeByte(w & 0xFF);
  return self;
};
Stream.prototype.writeWord = function(w) {
  var self = this;
  self.writeByte((w >> 24) & 0xFF);
  self.writeByte((w >> 16) & 0xFF);
  self.writeByte((w >> 8) & 0xFF);
  self.writeByte(w & 0xFF);
  return self;
};
Stream.prototype.writeDouble = function(d) {
  var self = this;
  var str = IEEE754.doubleToBin(d);
  self.writeRaw(str);
};
Stream.prototype.writeRaw = function(s) {
  var self = this;
  for (var i = 0; i < s.length; i++) {
    //self.writeByte(s.charCodeAt(0));
    self.str[self.ptr++] = String.fromCharCode(s.charCodeAt(i));
  }
};
Stream.prototype.writeString = function(s) {
  var self = this;
  for (var i = 0; i < s.length; i++) {
    //self.writeChar(s[i]);
    self.str[self.ptr++] = s[i];
  }
};
Stream.prototype.writeAscii = function(s) {
  var self = this;
  self.writeWord(s.length);
  for (var i = 0; i < s.length; i++) {
    //self.writeChar(s[i]);
    self.str[self.ptr++] = s[i];
  }
};
Stream.prototype.writeUnicode = function(s) {
  var self = this;
  self.writeWord(s.length + 1);
  for (var i = 0; i < s.length; i++) {
    //self.writeUnicodeChar(s[i]);
    self.writeInt16(s.charCodeAt(i));
  }
  self.writeInt16(0);  // null pad
};
Stream.prototype.writeUnicodeString = function(s) {
  var self = this;
  for (var i = 0; i < s.length; i++) {
    self.writeInt16(s.charCodeAt(i));
  }
  self.writeInt16(0);  // null pad
};
Stream.prototype.writeBoolean = function(b) {
  var self = this;
  self.writeByte(b ? 1 : 0);
};

//
// Read parts from the Stream
//
Stream.prototype.readByte = function() {
  var self = this;
  if (self.ptr >= self.str.length) {
    return Stream.EOF;
  }
  var c = self.str.charCodeAt(self.ptr++);
  return c;
};
Stream.prototype.readSignedByte = function() {
  b = this.readByte();
  if (b > 0x7F) {
    b = 0xFFFFFF00^sb;
  };
  return sb;
};
Stream.prototype.readByteChar = function() {
  var b = this.readByte();
  if (b != Stream.EOF) {
    b = String.fromCharCode(b);
  }
  return b;
};
Stream.prototype.readChar = function() {
  var self = this;
  if (self.ptr >= self.str.length) {
    return Stream.EOF;
  }
  var c = self.str.charAt(self.ptr++);
  return c;
};
Stream.prototype.readUnicodeChar = function() {
  var self = this;
  var i = self.readInt16();
  return String.fromCharCode(i);
};

Stream.prototype.readInt16 = function() {
  var self = this;
  var hi = self.readByte();
  var lo = self.readByte();
  if (self.byteOrder == Stream.BIG_ENDIAN) {
    return (hi << 8) + lo;
  } else {
    return (lo << 8) + hi;
  }
};
Stream.prototype.readShort = Stream.prototype.readInt16;

Stream.prototype.readSignedInt16 = function() {
  var i = this.readInt16();
  if(i > 0x7FFF){
    i = 0xFFFF0000^i;
  };
  return ss;
};
Stream.prototype.readSignedShort = Stream.prototype.readSignedInt16;

Stream.prototype.readWord = function() {
  var self = this;
  var hi = self.readInt16();
  var lo = self.readInt16();
  if (self.byteOrder == Stream.BIG_ENDIAN) {
    return (hi << 16) + lo;
  } else {
    return (lo << 16) + hi;
  }
};
Stream.prototype.readSignedWord = function() {
  var w = this.readWord();
  if(w > 0x7FFFFFFF){
    w = 0x00000000^sl;
  }
  return w;
};

Stream.prototype.readRaw = function(len) {
  var self = this;
  var ar = [];
  for (var i = 0; i < len; i++) {
    ar[i] = String.fromCharCode(self.readByte());
  }
  return ar.join("");
};
Stream.prototype.readDouble = function() {
  var self = this;
  var bin = self.readRaw(8);
  var v = IEEE754.binToDouble(bin);
  return v;
};

Stream.prototype.readString = function(len) {
  var self = this;
  var s = '';
  for (var i = 0; i < len; i++) {
    s += self.readChar();
  }
  return s;
};
Stream.prototype.readAscii = function() {
  var self = this;
  var len = self.readWord();
  return self.readString(len);
};
Stream.prototype.readUnicode = function(readPad) {
  var self = this;

  var len = self.readWord();
  if (readPad != false) {
    len--;
  }
  var s = '';
  for (var i = 0; i < len; i++) {
    //s += self.readUnicodeChar();
    var uc = self.readInt16();
    if (uc != 0) {
      s += String.fromCharCode(uc);
    }
  }
  if (readPad != false) {
    self.readInt16(); // null pad
  }
  return s;
};
Stream.prototype.readUnicodeZ = function() {
  return this.readUnicode(true);
};
Stream.prototype.readBoolean = function(b) {
  var self = this;
  return self.readByte() != 0;
};

Stream.prototype.toHex = function(start, len) {
  var self = this;
  if (start == undefined) {
    start = self.ptr;
    len = 16;
  }
  if (len == undefined) {
    len = start;
    start = self.ptr;
  }
  var s = self.str.slice(start, start+len);
  if (self.str instanceof Array) {
    s = s.join("");
  }
  return Stream.binToHex(s, true);
};
Stream.binToHex = function(s, whitespace) {
  function hexDigit(d) {
    if (d < 10) return d.toString();
    d -= 10;
    return String.fromCharCode('A'.charCodeAt(0) + d);
  }
  var str = '';
  s = s.toString();

  for (var i = 0; i < s.length; i++) {
    if (i) {
      if (whitespace == true) {
        if (!(i & 0xf)) {
          str += '\n';
        } else if (!(i & 3)) {
          str += ' ';
        }
      }
    }
    var ch = s.charCodeAt(i);
    str += hexDigit(ch >> 4) + hexDigit(ch & 0xF);
  }
  return str;
};


Stream.prototype.dump = function(len) {
  return Stream.binToHex(this.str.slice(this.ptr, this.ptr + (len || 32)),
                         true);
};
Stream.prototype.rdump = function(start, len) {
  return Stream.binToHex(this.str.slice(start, start + (len || 32)),
                         true);
};
Stream.prototype.dumpAscii = function(len) {
  return this.str.slice(this.ptr, this.ptr + (len || 32)).replace(/\W/g, '.');
};

"Stream.js";
// EOF

//
// stdlib.js
//   This file contains a collection of utility routines that I've
//   written, borrowed, rewritten, and occasionally tested and
//   documented.
//
//   Most of this stuff is photoshop specific. I'll break out the parts
//   that aren't sometime in the future.
//
// $Id$
// Copyright: (c)2008, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
//@show include
//
//

//================================== misc ====================================
//
// Some shorthand functions for TypeID conversion
//
cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };
xTID = function(s) {
  if (s == undefined) {
    if (isCS3() || isCS4()) {
      Stdlib.log("undefined id detected at: " + $.stack);
    } else {
      Stdlib.log("undefined id detected");
    }
  }

  if (s.constructor == Number) {
    return s;
  }
  if (s.constructor == String) {
    if (s.length > 0) {
      if (s.length != 4) return sTID(s);
      try { return cTID(s); } catch (e) { return sTID(s); }
    }
  }
  Error.runtimeError(19, "s");  // Bad Argument
};

//
// This reverses the mapping from a TypeID to something readable.
// If PSConstants.js has been included, the string returned is even
// more readable
//
id2char = function(s) {
  if (isNaN(Number(s))){
    return '';
  }
  var v;

  // Use every mechanism available to map the typeID
  var lvl = $.level;
  $.level = 0;
  try {
    if (!v) {
      try { v = PSConstants.reverseNameLookup(s); } catch (e) {}
    }
    if (!v) {
      try { v = PSConstants.reverseSymLookup(s); } catch (e) {}
    }
    if (!v) {
      try { v = app.typeIDToCharID(s); } catch (e) {}
    }
    if (!v) {
      try { v = app.typeIDToStringID(s); } catch (e) {}
    }
  } catch (e) {
  }
  $.level = lvl;
  if (!v) {
    v = Stdlib.numberToAscii(s); 
  }
  return v ? v : s;
};
id2charId = function(s) {
  if (isNaN(Number(s))){
    return '';
  }
  var v;

  // Use every mechanism available to map the typeID
  var lvl = $.level;
  $.level = 0;
  try {
    if (!v) {
      try { v = PSConstants.reverseSymLookup(s); } catch (e) {}
    }
    if (!v) {
      try { v = app.typeIDToCharID(s); } catch (e) {}
    }
    if (!v) {
      try { v = PSConstants.reverseNameLookup(s); } catch (e) {}
    }
    if (!v) {
      try { v = app.typeIDToStringID(s); } catch (e) {}
    }
  } catch (e) {
  }
  $.level = lvl;
  if (!v) {
    v = Stdlib.numberToAscii(s); 
  }
  return v ? v : s;
};
// deprecated
id2name = function(s) {
  return id2char(s);
};

if (!$.evalFile) {
  // only CS3 defines global and evalFile
  global = this;
} else {
  global = $.global;
}

isPhotoshop = function() {
  return !!app.name.match(/photoshop/i);
};
isBridge = function() {
  return !!app.name.match(/bridge/i);
};
isInDesign = function() {
  return !!app.name.match(/indesign/i);
};

//
// Simple checks for photoshop version
//
var psVersion;
try {
  var lvl = $.level;
  $.level = 0;
  psVersion = app.version;

 } catch (e) {
  psVersion = version;

 } finally {
   $.level = lvl;
   delete lvl;
}

// see XBridgeTalk for more comprehensive isCSX handling
// if (!global["isCS3"]) {
//   isCS3 = function()  { return psVersion.match(/^10\./) != null; };
// }
// if (!global["isCS2"]) {
//   isCS2 = function()  { return psVersion.match(/^9\./) != null; };
// }
isCS4 = function()  { return psVersion.match(/^11\./) != null; };
isCS3 = function()  { return psVersion.match(/^10\./) != null; };
isCS2 = function()  { return psVersion.match(/^9\./) != null; };
isCS  = function()  { return psVersion.match(/^8\./) != null; };
isPS7 = function()  { return psVersion.match(/^7\./) != null; };

if (isPS7()) {  // this does not work for eval-includes
  app = this;
}

isWindows = function() {
  return $.os.match(/windows/i);
};
isMac = function() {
  return !isWindows();
};

// this makes PS7 compatibility a bit easier
function getUnitValue(u) { return (u.value != undefined) ? u.value : u; }

//
//=============================== Stdlib =====================================
// This is the name space for utility functions. This should probably be
// broken up into smaller classes

Stdlib = function Stdlib() {};

Stdlib.RcsId = "$Id$";

Stdlib.ERROR_CODE = 9001;
Stdlib.IO_ERROR_CODE = 9002;

//================================= language =================================
//
// throwError
//     throw an exception where you would normally have an
//     expression e.g.
//        var f = File("~/start.ini");
//        f.open("r") || Stdlib.throwError(f.error);
//
Stdlib.throwError = function(e) {
  throw e;
};
throwError = Stdlib.throwError;


Stdlib.quit = function(interactive) {
  // no interactive support yet...
  executeAction(cTID('quit'), new ActionDescriptor(), DialogModes.NO);
};

//
// createObject
//
Stdlib.createObject = function(cls, attrs) {
  var obj = new cls();
  for (var v in attrs) {
    obj[v] = attrs[v];
  }
  return obj;
};

//
// for when you really, really have to wipe-out an object
//
Stdlib.clearObject = function(obj) {
  for (var idx in obj) {
    delete obj[idx];
  }
  return obj;
};

Stdlib.copyFromTo = function(from, to) {
  if (!from || !to) {
    return;
  }
  for (var idx in from) {
    var v = from[idx];
    if (typeof v != 'function') {
        to[idx] = v;
    }
  }
};

Stdlib.randomElement = function(ary) {
  return ary[Math.floor(Math.random(ary.length) * ary.length)];
};

Stdlib.popRandomElement = function(ar) {
  if (ar.length == 0) {
    return undefined;
  }
  if (ar.length == 1) {
    var el = ar[0];
    ar.length = 0;
    return el;
  }
  var idx = Math.floor(Math.random(ar.length) * ar.length);
  var el = ar[idx];
  ar.splice(idx, 1);
  return el;
};


//
// This is one way of getting an environment variable. This is deprecated
// in CS2.
//
Stdlib.getenv = function(key) {
  key = key.toUpperCase();
  if (Stdlib.env != undefined) {
    return key ? Stdlib.env[key]: Stdlib.env;
  }
  Stdlib.env = new Object();

  var f = new File(Folder.temp + "/getenv.bat");
  f.open("w");
  f.writeln("set > env.txt");
  f.writeln("rename env.txt env.dat");
  f.close();
  f.execute();
  var o;

  var maxCount = 100;
  while (maxCount--) {
    // lets take a brief pause here....
    // 10000 seems about right on my box...
    // need to loop this and port to CS2
    Stdlib.pause(10000);
    o = new File("env.dat");
    if (o.exists) {
      break;
    }
    o = undefined
  }
  if (!o) {
    Error.runtimeError(33); // internal error
  }
  o.open("r");
  var s = o.read();
  o.close();

  f.remove();
  o.remove();

  var envlist = s.split("\n");

  for (var i =0; i < envlist.length; i++) {
    var x = envlist[i].split("=");
    Stdlib.env[x[0].toUpperCase()] = x[1];
  }

  return key ? Stdlib.env[key]: Stdlib.env;
};

//
// runScript
//     load and execute an external script. use the standard
//     xscripts search path if the name is not absolute
//
Stdlib.IncludePathFile = "IncludePath.js";  // deprecated...

Stdlib.runScript = function(name) {
  Stdlib.runScriptByName(name,
                         (name.charAt(0) == '/') ?
                         null : Stdlib.IncludePathFile);
};

Stdlib.runScriptByName = function(name, path) {
  var str = "//@include \"" + name + "\";\r";
  if (path) {
    str = "//@include \"" + path + "\";\r" + str;
  }
  eval(str); // can't do this at top-level so some scoping problems
             // are inevitable
  return true;
};

//
// Thanks to Rags Gardner and Bob Stucky
// news://adobeforums.com:119/3bbff2b9.3@webcrossing.la2eafNXanI
//
Stdlib.getScriptFolder = function() { 
  return Stdlib.getScriptFile().parent;
};
Stdlib.getScriptFileName = function() {
  var f = Stdlib.getScriptFile();
  return (f ? f.absoluteURI : '');
};

Stdlib.getScriptFile = function() {
  if (isCS() || isPS7()) {
    return undefined;
  }

  // this behaves oddly in the presence of @include files in CS3
  var dbLevel = $.level;
  $.level = 0;
  var path = undefined;

  try {
    some_undefined_variable;
  } catch (e) {
    path = e.fileName;
  }

  $.level = dbLevel;

  return new File(path);
};

// thanks to Andrew Hall
Stdlib.btRunScript = function(script, btapp) {
  if (!btapp) { btapp = BridgeTalk.appSpecifier; }

  BridgeTalk.bringToFront(btapp);

  var bt = new BridgeTalk();
  bt.target = btapp;
  bt.body = "//@include \"" + script + "\";\r\n";
  bt.send();
};
Stdlib.btExec = function(code, btapp) {
  if (!btapp) { btapp = BridgeTalk.appSpecifier; }

  BridgeTalk.bringToFront(btapp);

  var bt = new BridgeTalk();
  bt.target = btapp;
  bt.body = code;
  bt.send();
};

//XXX experimental DO NOT USE
Stdlib.restartScript = function() {
  Stdlib.btRunScript(Stdlib.getScriptFileName());
};

try {
Stdlib.PRESETS_FOLDER = 
  new Folder(app.path + '/' +
             localize("$$$/ApplicationPresetsFolder/Presets=Presets"));

Stdlib.ADOBE_PRESETS_FOLDER = Stdlib.PRESETS_FOLDER;

Stdlib.USER_PRESETS_FOLDER =
    new Folder(Folder.userData + '/' +
               localize("$$$/private/AdobeSystemFolder/Adobe=Adobe") + '/' +
               localize("$$$/private/FolderNames/AdobePhotoshopProductVersionFolder") + '/' +
               localize("$$$/private/FolderName/UserPresetsFolder/Presets=Presets"));
    
Stdlib.SCRIPTS_FOLDER =
  new Folder(app.path + '/' +
             localize("$$$/ScriptingSupport/InstalledScripts=Presets/Scripts"));
} catch (e) {
}

Stdlib._getPreferencesFolder = function() {
  var userData = Folder.userData;

  if (!userData || !userData.exists) {
    userData = Folder("~");
  }

  var folder = new Folder(userData + "/xtools");

  if (!folder.exists) {
    folder.create();
  }

  return folder;
};

Stdlib.PREFERENCES_FOLDER = Stdlib._getPreferencesFolder();

//
// Format a Date object into a proper ISO 8601 date string
//
Stdlib.toISODateString = function(date, timeDesignator, dateOnly, precision) {
  if (!date) date = new Date();
  var str = '';
  if (timeDesignator == undefined) { timeDesignator = 'T' };
  function _zeroPad(val) { return (val < 10) ? '0' + val : val; }
  if (date instanceof Date) {
    str = (date.getFullYear() + '-' +
           _zeroPad(date.getMonth()+1,2) + '-' +
           _zeroPad(date.getDate(),2));
    if (!dateOnly) {
      str += (timeDesignator +
              _zeroPad(date.getHours(),2) + ':' +
              _zeroPad(date.getMinutes(),2) + ':' +
              _zeroPad(date.getSeconds(),2));
      if (precision && typeof(precision) == "number") {
        var ms = date.getMilliseconds();
        if (ms) {
          var millis = _zeroPad(ms.toString(),precision);
          var s = millis.slice(0, Math.min(precision, millis.length));
          str += "." + s;
        }
      }
    }
  }
  return str;
};

//
// Make it a Date object method
//
Date.prototype.toISODateString = function(timeDesignator, dateOnly, precision) {
  return Stdlib.toISODateString(this, timeDesignator, dateOnly, precision);
};
Date.prototype.toISOString = Date.prototype.toISODateString;


Stdlib.testISODate = function() {
  var strs = ["2006-09-01",
              "1997-07-16T19:20",
              "1997-07-16T19:20Z",
              "1997-07-16T19:20+01:00",
              "2006-09-01T16:33:26",
              "2006-09-01 16:33:26",
              "2006:09:01 16:33:26",
              "1997-07-16T19:20:30",
              "1997-07-16T19:20:30Z",
              "1997-07-16T19:20:30-01:00",
              "1997-07-16T19:20:30.45",
              "1997-07-16T19:20:30.45Z",
              "1997-07-16T19:20:30.45+01:05"];

  for (var i = 0; i < strs.length; i++) {
    var s = strs[i];
    alert(s + " :: " + Stdlib.parseISODateString(s).toISODateString('T', false, 2));
  }
};

// xmp = new XMPData(doc); Stdlib.parseISODateString(xmp.get('createdate'))
Stdlib.parseISODateString = function(str) {
  if (!str) {
    return undefined;
  }
  // \d{4}(:|-)\d{2}(:-)\d{2}( |T).\d{2}:\d{2}:\d{2}(Z|((\-\+)\d{2}:\d{2}))?

  // Date portion /^(\d{4}).?(\d{2}).?(\d{2})/
  // Divider ( |T)
  var date = undefined;
  //$.level = 1; debugger;
  if (str.length >= 10 && str.length <= 35) {

    // we are assuming that this date is formatted correctly
    var utc = str.endsWith('Z');

    // handle the data portion e.g. 2006-06-08 or 2006:06:08 or 20060680
    var m = str.match(/^(\d{4}).?(\d{2}).?(\d{2})/);

    if (m) {
      var date = new Date();
      if (utc) {
        date.setUTCFullYear(Number(m[1]),
                            Number(m[2])-1,
                            Number(m[3]));
        date.setUTCHours(0, 0, 0);
        date.setUTCMilliseconds(0);

      } else {
        date.setFullYear(Number(m[1]),
                         Number(m[2])-1,
                         Number(m[3]));
        date.setHours(0, 0, 0);
        date.setMilliseconds(0);
      }


      // handle the time portion e.g. 12:15:02
      // or 12:15:02-06:00 or 12:15:02Z or 12:15:02.25Z or 12:15:02.25+10:30
      if (str.length > 10) {
        m = str.match(/( |T)(\d{2}):(\d{2})(?::(\d{2})(\.\d+)?)?(?:(Z)|(\-|\+)(\d{2}):(\d{2}))?$/);

        if (m) {
          var hours = Number(m[2]);
          var mins = Number(m[3]);

          var nstr = str.slice(m.index);

          var secs = (m[4] ? Number(m[4]) : 0);
          var ms = 0;
          if (m[5]) {
            ms = Number("0" + m[5]) * 1000;
          }

          var z = (m[6] == 'Z');
          // assert(z == utc);

          if (utc) {
            date.setUTCHours(hours, mins, secs);
            date.setUTCMilliseconds(ms);

          } else {
            date.setHours(hours, mins, secs);
            date.setMilliseconds(ms);
          }

          if (m[6] || (m[7] && m[8] && m[9])) {
            var tzd = (z ? 'Z' : m[7] + m[8] + ':' + m[9]);
            date.tzd = tzd;
          }

        } else {
          date = undefined;
        }
      }
    }
  }

  return date;
};

Stdlib.binToHex = function(s, whitespace) {
  function hexDigit(d) {
    if (d < 10) return d.toString();
    d -= 10;
    return String.fromCharCode('A'.charCodeAt(0) + d);
  }
  var str = '';

  if (s.constructor != String) {
    s = s.toString();
  }

  for (var i = 0; i < s.length; i++) {
    if (i) {
      if (whitespace == true) {
        if (!(i & 0xf)) {
          str += '\r\n';
        } else if (!(i & 3)) {
          str += ' ';
        }
      }
    }
    var ch = s.charCodeAt(i) & 0xFF;  // check for unicode here...
    str += hexDigit(ch >> 4) + hexDigit(ch & 0xF);
  }
  return str;
};
Stdlib.hexToBin = function(h) {
  function binMap(n) {
    if (n.match(/[0-9]/)) return parseInt(n);
    return parseInt((n.charCodeAt(0) - 'A'.charCodeAt(0)) + 10);
  }

  h = h.toUpperCase().replace(/\s/g, '');
  var bytes = '';

  for (var i = 0; i < h.length/2; i++) {
    var hi = h.charAt(i * 2);
    var lo = h.charAt(i * 2 + 1);
    var b = (binMap(hi) << 4) + binMap(lo);
    bytes += String.fromCharCode(b);
  }
  return bytes;
};
Stdlib.hexToJS = function(h) {
  var str = '';
  var blockSize = 64;
  var blockCnt = (h.length/blockSize).toFixed();

  for (var i = 0; i < blockCnt; i++) {
    var ofs = i * blockSize;
    str += "  \"" + h.slice(ofs, ofs + blockSize) + "\" +\n";
  }

  str += "  \"" + h.slice(blockCnt * blockSize) + "\"\n";
  return str;
};
Stdlib.shortToHex = function(w) {
  function sfcc(c) { return String.fromCharCode(c); }
  var bytes = [sfcc((w >> 8) & 0xFF),
               sfcc(w & 0xFF)];
  return Stdlib.binToHex(bytes.join(""));
};
Stdlib.longToHex = function(w) {
  function sfcc(c) { return String.fromCharCode(c); }
  var bytes = [sfcc((w >> 24) & 0xFF),
               sfcc((w >> 16) & 0xFF),
               sfcc((w >> 8) & 0xFF),
               sfcc(w & 0xFF)];
  return Stdlib.binToHex(bytes.join(""));
};
Stdlib.hexToLong = function(h) {
  function cca(s, i) { return s.charCodeAt(i); }
  var bytes = Stdlib.hexToBin(h);

  return ((cca(bytes, 0) << 24) +
          (cca(bytes, 1) << 16) +
          (cca(bytes, 2) << 8) +
          cca(bytes, 3));
};

Stdlib.hexTest = function() {
  var f = new File("/c/work/xxx.asl");
  var s = Stdlib.readFromFile(f, 'BINARY');
  var h = Stdlib.binToHex(s);
  var js = Stdlib.hexToJS(h);

  //alert(h.slice(0, 132));
  //alert(js.slice(0, 132));
  eval(" xxx = " + js);
  alert(xxx == h);
  
  var f = new File("/c/work/xxx2.asl");
  Stdlib.writeToFile(f, Stdlib.hexToBin(xxx), 'BINARY');
};

Stdlib.numberToAscii = function(n) {
  if (isNaN(n)) {
    return n;
  }
  var str = '';
  str += String.fromCharCode(n >> 24);
  str += String.fromCharCode((n >> 16) & 0xFF);
  str += String.fromCharCode((n >> 8) & 0xFF);
  str += String.fromCharCode(n & 0xFF);

  return str.match(/^\w{4}$/) ? str : n;
};

//
//==================================== Strings ===============================
//


String.prototype.contains = function(sub) {
  return this.indexOf(sub) != -1;
};

String.prototype.containsWord = function(str) {
  return this.match(new RegExp("\\b" + str + "\\b")) != null;
};

String.prototype.endsWith = function(sub) {
  return this.length >= sub.length &&
    this.slice(this.length - sub.length) == sub;
};

String.prototype.reverse = function() {
  var ar = this.split('');
  ar.reverse();
  return ar.join('');
};

String.prototype.startsWith = function(sub) {
  return this.indexOf(sub) == 0;
};

String.prototype.trim = function() {
  return this.replace(/^[\s]+|[\s]+$/g, '');
};
String.prototype.ltrim = function() {
  return this.replace(/^[\s]+/g, '');
};
String.prototype.rtrim = function() {
  return this.replace(/[\s]+$/g, '');
};


//
// Trim leading and trailing whitepace from a string
//
Stdlib.trim = function(value) {
   return value.replace(/^[\s]+|[\s]+$/g, '');
};

Array.contains = function(ar, el) {
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] == el) {
      return true;
    }
  }
  return false;
};
if (!Array.prototype.contains) {
  Array.prototype.contains = function(el) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == el) {
        return true;
      }
    }
    return false;
  };
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(el) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == el) {
        return i;
      }
    }
    return -1;
  };
}
if (!Array.prototype.lastIndexOf) {
  Array.prototype.indexOf = function(el) {
    for (var i = this.length-1; i >= 0; i--) {
      if (this[i] == el) {
        return i;
      }
    }
  return -1;
  };
}



// Array.prototype.iterate = function(ftn) {
//   for (var i = 0; i < this.length; i++) {
//     ftn(this[i]);
//   }
// };

// Array.prototype.grep = function(re, ftn, prop) {
//   for (var i = 0; i < this.length; i++) {
//     if (prop) {
//       if (this[i][prop].match(re)) {
//         ftn(re);
//       }
//     } else {
//       if (this[i].match(re)) {
//         ftn(re);
//       }
//     }
//   }
// };

//
//============================= File Utilities ===============================
//

throwFileError = function(f, msg) {
  if (msg == undefined) {
    msg = '';
  }
  Error.runtimeError(Stdlib.IO_ERROR_CODE,
                     "IOError: " + msg + " \"" + f + "\": " +
                     f.error + '.');
};

//
// Return a File or Folder object given one of:
//    A File or Folder Object
//    A string literal or a String object that refers to either
//    a File or Folder
//
Stdlib.convertFptr = function(fptr) {
  var f;
  if (fptr.constructor == String) {
    f = File(fptr);

  } else if (fptr instanceof File || fptr instanceof Folder) {
    f = fptr;

  } else {
    Error.runtimeError(19, "fptr");
  }
  return f;
};

Stdlib.createFileSelect = function(str) {
  if (isWindows()) {
    return str;
  }

  if (!str.constructor == String) {
    return str;
  }

  var exts = [];
  var rex = /\*\.(\*|[\w]+)(.*)/;
  var m;
  while (m = rex.exec(str)) {
    exts.push(m[1].toLowerCase());
    str = m[2];
  }

  function macSelect(f) {
    var name = decodeURI(f.absoluteURI).toLowerCase();
    var _exts = macSelect.exts;

    // alert(name);

    while (f.alias) { 
      f = f.resolve(); 
      if (f == null) {
        return false; 
      }
    } 

    if (f instanceof Folder) {
      return true;
    }

    for (var i = 0; i < _exts.length; i++) {
      var ext = _exts[i];
      if (ext == '.*') {
        return true;
      }
      if (name.match(RegExp("\\." + ext + "$", "i")) != null) {
        return true;
      }
    }
    return false;
  }

  macSelect.exts = exts;
  return macSelect;
};

//
// Open a dialog to prompt the user to select a file.
// An initial file or folder can optionally be specified
// Change the current directory reference if we it
// seems appropriate.
//
//  var file = Stdlib.selectFileOpen("Choose a file to open",
//                                   "JPEG Files: *.jpg", "/c/tmp")
//  var file = Stdlib.selectFileSave("Choose a file to save",
//                                "JPEG Files: *.jpg", File("/c/tmp/tmp.jpg"))
//
Stdlib.selectFileOpen = function(prompt, select, start) {
  return Stdlib._selectFile(prompt, select, start, true);
};
Stdlib.selectFileSave = function(prompt, select, start) {
  return Stdlib._selectFile(prompt, select, start, false);
};
Stdlib.selectFile = Stdlib.selectFileOpen;

Stdlib._selectFile = function(prompt, select, start, open) {
  var file;

  if (!prompt) {
    prompt = 'Select a file';
  }

  if (start) {
    start = Stdlib.convertFptr(start);
  }

  var classFtn = (open ? File.openDialog : File.saveDialog);

  if (!start) {
    file = classFtn(prompt, select);

  } else {
    if (start instanceof Folder) {
      while (start && !start.exists) {
        start = start.parent;
      }

      var files = start.getFiles(select);
      if (!files || files.length == 0) {
        files = start.getFiles();
      }
      for (var i = 0; i < files.length; i++) {
        if (files[i] instanceof File) {
          start = files[i];
          break;
        }
      }
      if (start instanceof Folder) {
        start = new File(start + "/file.ext");
      }
    }

    if (start instanceof File) {
      var instanceFtn = (open ? "openDlg" : "saveDlg");

      if (instanceFtn in start) {
        file = start[instanceFtn](prompt, select);

      } else {
        try {
          if (start.exists) {
            Folder.current = start.parent;
          }
        } catch (e) {
        }
        file = classFtn(prompt, select);
      }
    } else {
      file = Folder.selectDialog(prompt); 
//       Folder.current = start;
//       file = classFtn(prompt, select);
    }
  }

  if (file) {
    Folder.current = file.parent;
  }
  return file;
};

Stdlib.selectFolder = function(prompt, start) {
  var folder;

  if (!prompt) {
    prompt = 'Select a folder';
  }
  if (start) {
    start = Stdlib.convertFptr(start);
    while (start && !start.exists) {
      start = start.parent;
    }
  }

  if (!start) {
    folder = Folder.selectDialog(prompt);

  } else {
    if (start instanceof File) {
      start = start.parent;
    }

    if (start.selectDlg) {   // for CS2
      folder = start.selectDlg(prompt);

    } else {               // for CS
      var preset = Folder.current;
      if (start.exists) {
        preset = start;
      }
      folder = Folder.selectDialog(prompt, preset);
    }
  }
  return folder;
};

Stdlib.ImageFileExtsComplete = 
  "8bps,3ds,ai3,ai4,ai5,ai6,ai7,ai8,ai,arw,bmp,cin,cr2,crw,dae,dc2,dc3,dcr," +
  "dib,dic,dng,dpx,eps,epsf,epsp,erf,exr,fido,flm,gif,hdr,hrr," +
  "icb,jpeg?,jpg,kdc,kmz,m4v,mef,mfw,mos,mov,mp4,mpeg,mrw,nef,obj,orf,pam," +
  "pbm,pcd,pct,pcx,pdd,pdf,pdp,pef,pict?,png,pnm," +
  "ps(d|b)?,pxr,raf,raw,rgbe,rle,sct,sdpx,sr2,srf,tga,tiff?,u3d,vda,vst," +
  "wbmp?,x3f,xyze";

Stdlib.ImageFileExtsCompleteRE =
  new RegExp("\\.(" +
             Stdlib.ImageFileExtsComplete.replace(/,/g, '|') + ")$", 'i');

Stdlib.ImageFileExtsCommon = 
  "psd,pdd,jpeg?,jpg,png,8bps,gif,bmp,rle,dib,tiff?,raw,dng,crw,cr2,nef,raf,orf";

Stdlib.ImageFileExtsCommonRE =
  new RegExp("\\.(" +
             Stdlib.ImageFileExtsCommon.replace(/,/g, '|')
             + ")$", 'i');

// 3rf,ciff,cs1,k25
Stdlib.RawImageFileExts =
  "arw,cr2,crw,dcr,dng,erf,kdc,mos,mef,mrw,nef,orf,pef,raf,raw," +
  "sr2,srf,x3f";

Stdlib.RawImageFileExtsRE =
  new RegExp("\\.(" +
             Stdlib.RawImageFileExts.replace(/,/g, '|')
             + ")$", 'i');

Stdlib.isImageFile = function(fstr) {
  return fstr.toString().match(Stdlib.ImageFileExtsCommonRE) != null;
};
Stdlib.isRawImageFile = function(fstr) {
  return fstr.toString().match(Stdlib.RawImageFileExtsRE) != null;
};

// deprecated
Stdlib.isPSFileType = Stdlib.isImageFile;


//
// Sort an array of files in XP's 'intuitive' sort order
// so that files like [x1.jpg,x2.jpg,x10.jpg,x20.jpg] are
// ordered in numerical sequence
//
Stdlib.XPFileSort = function(list) {
  var rex = /(\d+)\./;

  function xpCmp(a, b) {
    var ap = a.name.match(rex);
    var bp = b.name.match(rex);
    if (ap != null && bp != null) {
      return toNumber(ap[1]) - toNumber(bp[1]);
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return list.sort(xpCmp);
};

//
// Adds RegExp support and avoids PS7/CS bug in Folder.getFiles()
// usage:
//    getFiles(folder);
//    getFiles(folder, "*.jpg");
//    getFiles(folder, /\.jpg$/);
//    getFiles(folder, function(f) { return f instanceof Folder; });
//
Stdlib.getFiles = function(folder, mask) {
  var files = [];

  folder = Stdlib.convertFptr(folder);

  if (folder.alias) {
    folder = folder.resolve();
  }

  //Stdlib.fullStop();
  var getF;
  if (Folder.prototype._getFiles) {
    getF = function(f, m) { return f._getFiles(m); }
  } else {
    getF = function(f, m) { return f.getFiles(m); }
  }

  if (mask instanceof RegExp) {
    var allFiles = getF(folder);
    for (var i = 0; i < allFiles.length; i = i + 1) {
      var f = allFiles[i];
      if (decodeURI(f.absoluteURI).match(mask)) {
        files.push(f);
      }
    }
  } else if (typeof mask == "function") {
    var allFiles = getF(folder);
    for (var i = 0; i < allFiles.length; i = i + 1) {
      var f = allFiles[i];
      if (mask(f)) {
        files.push(f);
      }
    }
  } else {
    files = getF(folder, mask);
  }

  return files;
};

//
// Install an adaptor to that our getFiles code will be invoked when
// Folder.getFiles is called. The difficulty here is that we need to retain
// a handle to the original implementation so that we can invoke it from
// our version and that this code may be executed multiple times.
//
Stdlib.getFiles.install = function() {
  if (!Folder.prototype._getFiles) {
     // save the original getFiles
    Folder.prototype._getFiles = Folder.prototype.getFiles;
    // slide in an adaptor for our version
    Folder.prototype.getFiles = function(mask) {
      return Stdlib.getFiles(this, mask);
    }
  }
};
//
// Remove our adaptor and restore the original Folder.getFiles method
//
Stdlib.getFiles.uninstall = function() {
  if (Folder.prototype._getFiles) {
    // restore the original getFiles
    Folder.prototype.getFiles = Folder.prototype._getFiles;
    // delete our adaptor
    delete Folder.protoype._getFiles;
  }
};

Stdlib.getFolders = function(folder) {
  if (folder.alias) {
    folder = folder.resolve();
  }
  var folders = Stdlib.getFiles(folder,
                                function(f) { return f instanceof Folder; });
  return folders;
};

Stdlib.getFiles.install();   // install our version of Folder.getFiles

Stdlib.findFiles = function(folder, mask) {
  if (folder.alias) {
    folder = folder.resolve();
  }
  var files = Stdlib.getFiles(folder, mask);
  var folders = Stdlib.getFolders(folder);

  for (var i = 0; i < folders.length; i++) {
    var f = folders[i];
    var ffs = Stdlib.findFiles(f, mask);
    // files.concat(ffs); This occasionally fails for some unknown reason (aka
    // interpreter Bug) so we do it manually instead
    while (ffs.length > 0) {
      files.push(ffs.shift());
    }
  }
  return files;
};

Stdlib.findImageFiles = function(folder) {
  return Stdlib.findFiles(folder, Stdlib.ImageFileExtsCommonRE);
};

Folder.prototype.findFiles = function(mask) {
  return Stdlib.findFiles(this, mask);
};

Stdlib.getImageFiles = function(folder, recursive, complete) {
  if (folder.alias) {
    folder = folder.resolve();
  }

  if (recursive == undefined) recursive = false;
  if (complete == undefined) complete = false;
  var mask = (complete ?
              Stdlib.ImageFileExtsCompleteRE : Stdlib.ImageFileExtsCommonRE);
  if (recursive) {
    return Stdlib.findFiles(folder, mask);
  } else {
    return Stdlib.getFiles(folder, mask);
  }
};

Stdlib.grep = function(folder, rex, frex, recursive) {
  if (folder.alias) {
    folder = folder.resolve();
  }

  if (frex == undefined) {
    frex = /.*/;
  }
  var files = (!!recursive ?
               Stdlib.findFiles(folder, frex) :
               Stdlib.getFiles(folder, frex));

  var hits = [];
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file instanceof File) {
      var str = Stdlib.readFromFile(file);
      if (str.match(rex)) {
        hits.push(file);
      }
    }
  }
  return hits;
};

//
// Returns null if the match or a string if they don't
// Useful for testing but not much else
//
Stdlib.compareFiles = function(f1, f2) {
  if (!(f1 instanceof File)) f1 = new File(f1);
  if (!(f2 instanceof File)) f2 = new File(f2);

  if (!f1.exists || !f2.exists) {
    return "File(s) do not exist.";
  }
  if (f1.length != f2.length) {
    return "Files are different sizes.";
  }

  try {
    f1.open("r") || throwFileError(f1, "Unable to open input file ");
    f1.encoding = 'BINARY';
    f2.open("r") || throwFileError(f2, "Unable to open input file ");
    f2.encoding = 'BINARY';

  } finally {
    try { f1.close(); } catch (e) {}
    try { f2.close(); } catch (e) {}
  }

  while (!f1.eof && !f2.eof && (f1.read(1) == f2.read(1))) {
    // do nothing
  }
  if (!(f1.eof && f2.eof)) {
    return "File contents do not match.";
  }
  return null;
};

Stdlib.writeToFile = function(fptr, str, encoding, lineFeed) {
  var xfile = Stdlib.convertFptr(fptr);

  xfile.open("w") || throwFileError(xfile, "Unable to open output file ");
  if (encoding) {
    xfile.encoding = encoding;
  }

  if (lineFeed) {
    xfile.lineFeed = lineFeed;
  }

  if (isPS7() && encoding == 'BINARY') {
    xfile.lineFeed = 'unix';

    var pos = 0;
    var cr = '\r';
    var next;
    while ((next = str.indexOf(cr, pos)) != -1) {
      xfile.write(str.substring(pos, next));
      xfile.lineFeed = 'mac';
      xfile.write(cr);
      xfile.lineFeed = 'unix';
      pos = next + 1;
    }
    if (pos < str.length) {
      xfile.write(str.substring(pos));
    }
  } else {
    xfile.write(str);
  }
  xfile.close();
};

Stdlib.readFromFile = function(fptr, encoding, lineFeed) {
  var file = Stdlib.convertFptr(fptr);
  file.open("r") || throwFileError(file, "Unable to open input file ");
  if (encoding) {
    file.encoding = encoding;
  }
  if (lineFeed) {
    file.lineFeed = lineFeed;
  }
  var str = file.read();
  file.close();
  return str;
};

Stdlib.INI_ENCODING = "LATIN1";

Stdlib.toIniString = function(obj) {
  var str = '';
  for (var idx in obj) {
    if (idx.charAt(0) == '_') {         // private stuff
      continue;
    }
    if (idx == 'typename') {
      continue;
    }
    var val = obj[idx];

    if (val == undefined) {
      val = '';
    }

    if (val.constructor == String ||
        val.constructor == Number ||
        val.constructor == Boolean ||
        typeof(val) == "object") {
      str += (idx + ": " + val.toString() + "\n");
    }
  }
  return str;
};
Stdlib.fromIniString = function(str, obj) {
  if (!obj) {
    obj = {};
  }
  var lines = str.split(/[\r\n]+/);

  var rexp = new RegExp(/([^:]+):(.*)$/);

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line || line.charAt(0) == '#') {
      continue;
    }
    var ar = rexp.exec(line);
    if (!ar) {
      alert("Bad line in config file: \"" + line + "\"");
      return;
    }
    obj[ar[1].trim()] = ar[2].trim();
  }
  return obj;
};
Stdlib.readIniFile = function(fptr, obj) {
  if (!obj) {
    obj = {};
  }
  fptr = Stdlib.convertFptr(fptr);
  if (!fptr.exists) {
    return obj;
  }
  if (fptr.open("r", "TEXT", "????")) {
    fptr.lineFeed = "unix";
    fptr.encoding = Stdlib.INI_ENCODING;
    var str = fptr.read();
    fptr.close(); 
    return Stdlib.fromIniString(str, obj);
  }
  return obj;
};

Stdlib.readIniValue = function(fptr, nm) {
  var obj = Stdlib.readIniFile(fptr);
  return obj[nm];
};

Stdlib.writeIniValue = function(fptr, nm, val) {
  var obj = {};
  obj[nm] = val;
  Stdlib.updateIniFile(fptr, obj);
};

Stdlib.writeIniFile = function(fptr, obj, header) {
  var str = (header != undefined) ? header : '';

  str += Stdlib.toIniString(obj);

  var file = Stdlib.convertFptr(fptr);
  file.open("w", "TEXT", "????");
  file.encoding = Stdlib.INI_ENCODING;
  file.lineFeed = "unix";
  file.write(str);
  file.close();
};

Stdlib.updateIniFile = function(fptr, ini) {
  if (!ini || !fptr) {
    return;
  }
  var file = Stdlib.convertFptr(fptr);

  // we can only update the file if it exists
  var update = file.exists;
  var str = '';

  if (update) {
    file.open("r", "TEXT", "????");
    fptr.encoding = Stdlib.INI_ENCODING;
    file.lineFeed = "unix";
    str = file.read();
    file.close();
    
    for (var idx in ini) {
      if (idx.charAt(0) == '_') {         // private stuff
        continue;
      }
      if (idx == "noUI") {
        continue;
      }
      if (idx == "typename") {
        continue;
      }

      var val = ini[idx];

      if (typeof(val) == "undefined") {
        val = '';
      }
      
      if (typeof val == "string" ||
          typeof val == "number" ||
          typeof val == "boolean" ||
          typeof val == "object") {
        idx += ':';
        var re = RegExp('^' + idx, 'm');

        if (re.test(str)) {
          re = RegExp('^' + idx + '[^\n]*', 'm');
          str = str.replace(re, idx + ' ' + val);
        } else {
          str += '\n' + idx + ' ' + val;
        }
      }
    }
  } else {
    // write out a new ini file
    for (var idx in ini) {
      if (idx.charAt(0) == '_') {         // private stuff
        continue;
      }
      if (idx == "noUI") {
        continue;
      }
      if (idx == "typename") {
        continue;
      }
      var val = ini[idx];
      
      if (typeof val == "string" ||
          typeof val == "number" ||
          typeof val == "boolean" ||
          typeof val == "object") {
        str += (idx + ": " + val.toString() + "\n");
      }
    }
  }

  if (str) {
    file.open("w", "TEXT", "????");
    fptr.encoding = Stdlib.INI_ENCODING;
    file.lineFeed = "unix";
    file.write(str);
    file.close();
  }

  return ini;
};

Stdlib.xmlFromIni = function(ini, arg) {
  var xml;

  if (ini == undefined) {
    Error.runtimeError(2, "ini"); // isUndefined
  }

  if (arg) {
    if (arg.constructor.name == 'String') {
      xml = new XML('<' + arg + '></' + arg + '>');
    } else if (arg instanceof XML) {
      xml = arg;
    } else {
      Error.runtimeError(1243); // bad arg 2
    }
  } else {
    xml = new XML('Ini');
  }

  for (var idx in ini) {
    if (idx.charAt(0) == '_') {         // private stuff
      continue;
    }
    if (idx == "noUI") {
      continue;
    }
    if (idx == "typename") {
      continue;
    }
    var val = ini[idx];

    if (typeof val == "string" ||
        typeof val == "number" ||
        typeof val == "boolean" ||
        typeof val == "object") {
      xml[idx] = val;
    }
  }

  return xml;
};

Stdlib.iniFromXML = function(xml, ini) {
  if (!xml) {
    Error.runtimeError(2, "xml");
  }
  if (!ini) {
    ini = {};
  }

  var els = xml.elements();

  for (var i = 0; i < els.length(); i++) {
    var el = els[i];
    ini[el.name()] = el.toString();
  }

  return ini;
};

Stdlib.readXMLFile = function(fptr) {
  var file = Stdlib.convertFptr(fptr);
  if (!file.exists) {
    Error.runtimeError(48); // File/Folder does not exist
//     throw "Cannot find file: " + file.toUIString();
  }

  file.encoding = "UTF8";
  file.lineFeed = "unix";
  file.open("r", "TEXT", "????");
  var str = file.read();
  file.close();

  return new XML(str);
};

Stdlib.writeXMLFile = function(fptr, xml) {
  if (!(xml instanceof XML)) {
    Error.runtimeError(19, "xml"); // "Bad XML parameter";
  }
  var file = Stdlib.convertFptr(fptr);
  file.encoding = "UTF8";
  file.open("w", "TEXT", "????");
  // unicode signature, this is UTF16 but will convert to UTF8 "EF BB BF"
  file.write("\uFEFF"); 
  file.lineFeed = "unix";
  file.write(xml.toXMLString());
  file.close();
};

//
// If the CSV string has headers (default) an array of objects
// is returned using the headers as property names.
// If the CSV string does not have headers, an array of rows (Arrays)
// is returned
//
Stdlib.fromCSVString = function(str, ar, hasHeaders) {
  return Stdlib.fromCharSVString(str, ',', ar, hasHeaders);
};
Stdlib.readCSVFile = function(fptr, ar, hasHeaders) {
  return Stdlib.readCharSVFile(fptr, ',', ar, hasHeaders);
};
Stdlib.fromTSVString = function(str, ar, hasHeaders) {
  return Stdlib.fromCharSVString(str, '\t', ar, hasHeaders);
};
Stdlib.readTSVFile = function(fptr, ar, hasHeaders) {
  return Stdlib.readCharSVFile(fptr, '\t', ar, hasHeaders);
};
Stdlib.fromCharSVString = function(str, ch, ar, hasHeaders) {
  hasHeaders = !!hasHeaders;
  if (!ar) {
    ar = [];
  }
  var lines = str.split(/\r|\n/);
  if (lines.length == 0) {
    return ar;
  }

  // This doesn't work '([^",]+)|"((?:[^"]|"")*)"|,(?=(,|$))';
  var rexStr = '([^",]+)|"((?:[^"]|"")*)"|^,';

  if (ch != ',') {
    rexStr = rexStr.replace(/,/g, ch);
  }

  var rexp = new RegExp(rexStr);
  function parseCSVLine(line, ch) {
    var parts = [];
    line = line.trim();
    var res;

    while (line.length && (res = line.match(rexp)) != null) {
      if (res[1] || res[2]) {
        if (res[1]) {
          parts.push(res[1]);
        } else {
          parts.push(res[2].replace(/""/g, '"'));
        }
        line = line.slice(res[0].length + res.index);
        if (line[0] == ch) {
          line = line.slice(1);
        }
      } else {
        while (true) {
          if (line[0] == ch) {
            parts.push('');
            line = line.slice(1);
            continue;
          }
          if (line.startsWith('""')) {
            parts.push('');
            line = line.slice(2);
            if (line[0] == ch) {
              line = line.slice(1);
            }
            continue;
          }
          break;
        }
      }
    }
    return parts;
  }

  var headers = [];
  if (hasHeaders) {
    var line = lines[0].trim();
    headers = parseCSVLine(line, ch);
    lines.shift();
  }
  ar.headers = headers;

  if (lines.length == 0) {
    return ar;
  }

  for (var i = 0; i < lines.length; i++) {
    var row = parseCSVLine(lines[i], ch);
    if (row.length == 0) {
      continue;
    }

    if (hasHeaders) {
      var obj = new Object();
      for (var j = 0; j < row.length; j++) {
        if (headers[j]) {
          obj[headers[j]] = row[j] || '';
        } else {
          obj[j] = row[j] || '';
        }
      }
      ar.push(obj);

    } else {
      ar.push(row);
    }
  }
  return ar;
};
Stdlib.readCharSVFile = function(fptr, ch, ar, hasHeaders) {
  if (!ar) {
    ar = [];
  }
  fptr = Stdlib.convertFptr(fptr);
  if (!fptr.exists) {
    return ar;
  }
  var str = Stdlib.readFromFile(fptr);
  return Stdlib.fromCharSVString(str, ch, ar, hasHeaders);
};

// XXX This is untested
Stdlib.writeCSVFile = function(fptr, content, headers) {

 function arrayAsCSV(ar) {
    var str = '';
    for (var i = 0; i < ar.length; i++) {
      var v = ar[i];
      if (!isNumber(v)) {
        v = '\"' + v.replace(/"/g, '\"\"') + '\"';
        //");// needed for emacs syntax hilighting
        
      }
      str += v;
      if (i+1 != ar.length) {
        str += ',';
      }
    }

   return str;
  }

  fptr = Stdlib.convertFptr(fptr);
  
  if (!fptr.open("w", "TEXT", "????")) {
    Error.runtimeError(Stdlib.IO_ERROR_CODE,
                       "IOError: unable to open file \"" + fptr + "\": " +
                       fptr.error + '.');
  }
  
  if (headers) {
    fptr.writeln(arrayAsCSV(headers));
  }

  for (var i = 0; i < content.length; i++) {
    var row = content[i];
    fptr.writeln(arrayAsCSV(row));
  }

  fptr.close();
};


//
// The interactive parameter is not fully implemented
//
Stdlib.createFolder = function(fptr, interactive) {
  if (!fptr) {
    Error.runtimeError(19, "fptr");  // Bad Argument
  }

  if (fptr.constructor == String) {
    fptr = new Folder(fptr);
  }

  // XXX this needs testing
  if ((!fptr.exists || (fptr.parent && !fptr.parent.exists)) && interactive) {
    var f = (fptr instanceof File) ? fptr.parent : fptr;
    if (!confirm(f.toUIString() + " does not exist. Create?")) {
      return false;
    }
  }

  if (fptr instanceof File) {
    return Stdlib.createFolder(fptr.parent);
  }
  if (fptr.exists) {
    return true;
  }
  if (fptr.parent && !fptr.parent.exists) {
    if (!Stdlib.createFolder(fptr.parent)) {
      return false;
    }
  }
  return fptr.create();
};

Stdlib.log = function(msg) {
  var file;

  if (!Stdlib.log.enabled) {
    return;
  }

  if (!Stdlib.log.filename) {
    return;
  }

//   if (Stdlib.log.filename.endsWith(".ini")) {
//     debugger;
//     throw "Bad log file name";
//   }

  if (!Stdlib.log.fptr) {
    file = new File(Stdlib.log.filename);
    if (Stdlib.log.append && file.exists) {
      if (!file.open("e", "TEXT", "????"))  {
        Error.runtimeError(Stdlib.IO_ERROR_CODE,
                           "Unable to open log file(1) " +
                           file + ": " + file.error);
      }
      file.seek(0, 2); // jump to the end of the file

    } else {
      if (!file.open("w", "TEXT", "????")) {
        if (!file.open("e", "TEXT", "????")) {
          Error.runtimeError(Stdlib.IO_ERROR_CODE,
                             "Unable to open log file(2) " +
                             file + ": " +  file.error);
        }
        file.seek(0, 0); // jump to the beginning of the file
      }
    }
    Stdlib.log.fptr = file;

  } else {
    file = Stdlib.log.fptr;
    if (!file.open("e", "TEXT", "????"))  {
      Error.runtimeError(Stdlib.IO_ERROR_CODE,
                         "Unable to open log file(3) " +
                         file + ": " + file.error);
    }
    file.seek(0, 2); // jump to the end of the file
  }

  if (isMac()) {
    file.lineFeed = "Unix";
  }

  if (Stdlib.log.encoding) {
    file.encoding = Stdlib.log.encoding;
  }

  if (msg) {
    msg.toString();
  }
  
  if (!file.writeln(new Date().toISODateString() + " - " + msg)) {
    Error.runtimeError(Stdlib.IO_ERROR_CODE,
                       "Unable to write to log file(4) " +
                       file + ": " + file.error);
  }
  
  file.close();
};
Stdlib.log.filename = undefined; //"~/logfile.txt";
Stdlib.log.enabled = false;
Stdlib.log.append = false;
Stdlib.log.setFile = function(filename, encoding) {
  Stdlib.log.filename = filename;
  Stdlib.log.enabled = filename != undefined;
  Stdlib.log.encoding = encoding;
  Stdlib.log.fptr = undefined;
};
Stdlib.log.setFilename = Stdlib.log.setFile;

//
// Thanks to Bob Stucky for this...
//
Stdlib.exceptionMessage = function(e) {
  var str = '';
  var fname = (!e.fileName ? '???' : decodeURI(e.fileName));
  str += "   Message: " + e.message + '\n';
  str += "   File: " + fname + '\n';
  str += "   Line: " + (e.line || '???') + '\n';
  str += "   Error Name: " + e.name + '\n';
  str += "   Error Number: " + e.number + '\n';

  if (e.source) {
    var srcArray = e.source.split("\n");
    var a = e.line - 10;
    var b = e.line + 10;
    var c = e.line - 1;
    if (a < 0) {
      a = 0;
    }
    if (b > srcArray.length) {
      b = srcArray.length;
    }
    for ( var i = a; i < b; i++ ) {
      if ( i == c ) {
        str += "   Line: (" + (i + 1) + ") >> " + srcArray[i] + '\n';
      } else {
        str += "   Line: (" + (i + 1) + ")    " + srcArray[i] + '\n';
      }
    }
  }

  if ($.stack) {
    str += '\n' + $.stack + '\n';
  }

  return str;
};

Stdlib.logException = function(e, msg, doAlert) {
  if (!Stdlib.log.enabled) {
    return;
  }

  if (doAlert == undefined) {
    doAlert = false;

    if (msg == undefined) {
      msg = '';
    } else if (isBoolean(msg)) {
      doAlert = msg;
      msg = '';
    }
  }

  doAlert = !!doAlert;

  var str = ((msg || '') + "\n" +
             "==============Exception==============\n" +
             Stdlib.exceptionMessage(e) +
             "==============End Exception==============\n");

  Stdlib.log(str);

  if (doAlert) {
    str += ("\r\rMore information can be found in the file:\r" +
            "    " + Stdlib.log.fptr.toUIString());

    alert(str);
  }
};


//
//========================= Photoshop - General ==============================
//

//
// Return an item called 'name' from the specified container.
// This works for the "magic" on PS containers like Documents.getByName(),
// for instance. However this returns null if an index is not found instead
// of throwing an exception.
//
// The 'name' argument can also be a regular expression.
// If 'all' is set to true, it will return all matches
//
Stdlib.getByName = function(container, name, all) {
  // check for a bad index
  if (!name) {
    Error.runtimeError(2, "name"); // "'undefined' is an invalid name/index");
  }

  var matchFtn;

  if (name instanceof RegExp) {
    matchFtn = function(s1, re) { return s1.match(re) != null; }
  } else {
    matchFtn = function(s1, s2) { return s1 == s2;  }
  }

  var obj = [];

  for (var i = 0; i < container.length; i++) {
    if (matchFtn(container[i].name, name)) {
      if (!all) {
        return container[i];     // there can be only one!
      }
      obj.push(container[i]);    // add it to the list
    }
  }

  return all ? obj : undefined;
};

//
// Returns all items in the container with the specified name.
//
Stdlib.getAllByName = function(container, name) {
  return Stdlib.getByName(container, name, true);
};

Stdlib.getByProperty = function(container, prop, value, all) {
  // check for a bad index
  if (prop == undefined) {
    Error.runtimeError(2, "prop");
  }
  if (value == undefined) {
    Error.runtimeError(2, "value");
  }
  var matchFtn;

  if (value instanceof RegExp) {
    matchFtn = function(s1, re) { return s1.match(re) != null; }
  } else {
    matchFtn = function(s1, s2) { return s1 == s2;  }
  }

  var obj = [];

  for (var i = 0; i < container.length; i++) {
    if (matchFtn(container[i][prop], value)) {
      if (!all) {
        return container[i];     // there can be only one!
      }
      obj.push(container[i]);    // add it to the list
    }
  }

  return all ? obj : undefined;
};

//
// Stdlib.getByFunction
//   Return an element (or elements) of the container where the match function
//     returns 'true'
//
// Stdlib.getByFunction(doc.artLayers, function(layer) {
//   return layer.name.length > 10; }, true)
//
Stdlib.getByFunction = function(container, matchFtn, all) {
  // check for a match function
  if (!matchFtn) {
    Error.runtimeError(2, "matchFtn"); //"'undefined' is an invalid function"
  }

  if (typeof matchFtn != "function") {
    Error(19, "matchFtn"); // Bad arg "A match function must be specified"
  }

  var obj = [];

  for (var i = 0; i < container.length; i++) {
    if (matchFtn(container[i])) {
      if (!all) {
        return container[i];     // there can be only one!
      }
      obj.push(container[i]);    // add it to the list
    }
  }

  return all ? obj : undefined;
};

Stdlib.setPropertyValues = function(container, prop, value) {
  // check for a bad index
  if (prop == undefined) {
    Error.runtimeError(2, "prop");
  }
  if (value == undefined) {
    Error.runtimeError(2, "value");
  }
  var matchFtn;

  var obj = [];

  for (var i = 0; i < container.length; i++) {
    container[i][prop] = value;
  }

  return;
};


Stdlib.sortByName = function(ary) {
  function nameCmp(a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return ary.sort(nameCmp);
};


// makeActive
// Make the object (regardless of class) the 'active' one. Currently, this
// works for documents and layers. The one that was active before this call
// is returned
//
Stdlib.makeActive = function(obj) {
  var prev = undefined;

  if (!obj) {
    return undefined;
  }

  if (obj.typename == "Document") {
    prev = app.activeDocument;
    if (obj != prev) {
      app.activeDocument = obj;
    }
  } else if (obj.typename.match(/Layer/)) {
    var doc = obj.parent;
    while (!(doc.typename == "Document") && doc) {
      doc = doc.parent;
    }
    if (!doc) {
      Error.runtimeError(19, "obj"); // "Bad Layer object specified"
    }
    prev = doc.activeLayer;
    if (obj != prev) {
      doc.activeLayer = obj;
    }
  }

  return prev;
};

//
// ScriptingListener code operates on the "active" document.
// There are times, however, when that is _not_ what I want.
// This wrapper will make the specified document the active
// document for the duration of the ScriptingListener code and
// swaps in the previous active document as needed
//
Stdlib.wrapLC = function(doc, ftn) {
  var ad = app.activeDocument;
  if (doc) {
    if (ad != doc) {
      app.activeDocument = doc;
    }
  } else {
    doc = ad;
  }

  var res = undefined;
  try {
    res = ftn(doc);
  } finally {
    if (ad && app.activeDocument != ad) {
      app.activeDocument = ad;
    }
  }

  return res;
};

//
// The same as wrapLC except it permits specifying a layer
//
Stdlib.wrapLCLayer = function(doc, layer, ftn) {
  var ad = app.activeDocument;
  if (doc) {
    if (ad != doc) {
      app.activeDocument = doc;
    }
  } else {
    doc = ad;
  }
  
  var al = doc.activeLayer;
  var alvis = al.visible;

  if (layer && doc.activeLayer != layer) {
    doc.activeLayer = layer;
  } else {
    layer = doc.activeLayer;
  }

  var res = undefined;

  try {
    res = ftn(doc, layer);

  } finally {
    if (doc.activeLayer != al) {
      doc.activeLayer = al;
    }
    if (!doc.activeLayer.isBackgroundLayer) {
      doc.activeLayer.visible = alvis;
    }

    if (app.activeDocument != ad) {
      app.activeDocument = ad;
    }
  }

  return res;
};

//
// Invoke a Photoshop Event with no arguments
//
Stdlib.doEvent = function(doc, eid, interactive, noDesc) {
  var id;

  if (doc != undefined && eid == undefined) {
    if (doc.constructor == Number) {
      eid = doc.valueOf();
    } else if (doc.constructor == String) {
      eid = doc;
    }
    doc = undefined;
  }

  if (!eid) {
    Error.runtimeError(8600); // Event key is missing "No event id specified");
  }

  if (eid.constructor != Number) {
    if (eid.length < 4) {
      // "Event id must be at least 4 characters long"
      Error.runtimeError(19, "eventID");
    }

    if (eid.length == 4) {
      id = cTID(eid);
    } else {
      id = sTID(eid);
    }
  } else {
    id  = eid;
  }

  interactive = interactive == true;
  noDesc = noDesc == true;

  function _ftn() {
    var dmode = (interactive ? DialogModes.ALL : DialogModes.NO);
    var desc = (noDesc ? undefined : new ActionDescriptor());
    return app.executeAction(id, desc, dmode);
  }

  if (doc) {
    return Stdlib.wrapLC(doc, _ftn);
  } else {
    return _ftn(id);
  }
};

//
// Select/invoke a menu item
//
Stdlib.doMenuItem = function(item, interactive) {
  var desc = new ActionDescriptor();
  var ref = new ActionReference();

  if (item.constructor == String) {
    item = xTID(item);
  }

//  ref.putEnumerated(PSClass.MenuItem, PSType.MenuItem, item);
  ref.putEnumerated(cTID("Mn  "), cTID("MnIt"), item);
  desc.putReference(cTID("null"), ref);

  var lvl = $.level;
  $.level = 0;
  try {
    var mode = (interactive != true ? DialogModes.NO : DialogModes.ALL);
//     executeAction(PSString.select, desc, mode);
    executeAction(sTID("select"), desc, mode);
  } catch (e) {
    $.level = lvl;
    if (e.number != 8007) { // if not "User cancelled"
      throw e;
    } else {
      return false;
    }
  }
  $.level = lvl;

  return true;
};

Stdlib._print = function() {
  var dialogMode = DialogModes.NO;
  var desc1 = new ActionDescriptor();
  desc1.putBoolean(cTID('PstS'), true);
  desc1.putEnumerated(cTID('Inte'), cTID('Inte'), cTID('Clrm'));
  executeAction(cTID('Prnt'), desc1, dialogMode);
};


//
// Select a tool from the tool palette
//   PSString.addKnotTool
//   PSString.artBrushTool
//   PSString.bucketTool
//   PSString.colorReplacementBrushTool
//   PSString.colorSamplerTool
//   PSString.convertKnotTool
//   PSString.cropTool
//   PSString.customShapeTool
//   PSString.deleteKnotTool
//   PSString.directSelectTool
//   PSString.ellipseTool
//   PSString.eyedropperTool
//   PSString.freeformPenTool
//   PSString.handTool
//   PSString.lassoTool
//   PSString.lineTool
//   PSString.magicStampTool
//   PSString.magicWandTool
//   PSString.magneticLassoTool
//   PSString.marqueeEllipTool
//   PSString.marqueeRectTool
//   PSString.marqueeSingleColumnTool
//   PSString.marqueeSingleRowTool
//   PSString.measureTool
//   PSString.moveTool
//   PSString.pathComponentSelectTool
//   PSString.penTool
//   PSString.polySelTool
//   PSString.polygonTool
//   PSString.rectangleTool
//   PSString.redEyeTool
//   PSString.roundedRectangleTool
//   PSString.sliceSelectTool
//   PSString.sliceTool
//   PSString.soundAnnotTool
//   PSString.spotHealingBrushTool
//   PSString.textAnnotTool 
//   PSString.typeCreateMaskTool
//   PSString.typeCreateOrEditTool
//   PSString.typeVerticalCreateMaskTool
//   PSString.typeVerticalCreateOrEditTool
//   PSString.zoomTool
//
//   PSClass.ArtHistoryBrushTool
//   PSClass.BackgroundEraserTool
//   PSClass.BlurTool
//   PSClass.BurnInTool
//   PSClass.CloneStampTool
//   PSClass.DodgeTool
//   PSClass.EraserTool
//   PSClass.GradientTool
//   PSClass.HistoryBrushTool
//   PSClass.MagicEraserTool
//   PSClass.PaintbrushTool
//   PSClass.PatternStampTool
//   PSClass.PencilTool
//   PSClass.SaturationTool
//   PSClass.SharpenTool
//   PSClass.SmudgeTool
//
Stdlib.selectTool = function(tool) {

  if (!Stdlib.selectTool.map) {
    var map = {};
    map[ToolType.ARTHISTORYBRUSH] = cTID('ABTl'); // ArtHistoryBrushTool;
    map[ToolType.BACKGROUNDERASER] = cTID('SETl'); // BackgroundEraserTool;
    map[ToolType.BLUR] = cTID('BlTl'); // BlurTool;
    map[ToolType.BRUSH] = cTID('PbTl'); // PaintbrushTool;
    map[ToolType.BURN] = cTID('BrTl'); // BurnInTool;
    map[ToolType.CLONESTAMP] = cTID('ClTl'); // CloneStampTool;
    map[ToolType.COLORREPLACMENTTOOL] = sTID('colorReplacementTool');
    map[ToolType.DODGE] = cTID('DdTl'); // DodgeTool;
    map[ToolType.ERASER] = cTID('ErTl'); // EraserTool;
    map[ToolType.HEALINGBRUSH] = sTID('magicStampTool');
    map[ToolType.HISTORYBRUSH] = cTID('HBTl'); // HistoryBrushTool;
    map[ToolType.PATTERNSTAMP] = cTID('PaTl'); // PatternStampTool;
    map[ToolType.PENCIL] = cTID('PcTl'); // PencilTool;
    map[ToolType.SHARPEN] = cTID('ShTl'); // SharpenTool;
    map[ToolType.SMUDGE] = cTID('SmTl'); // SmudgeTool;
    Stdlib.selectTool.map = map;
  }

  var toolID;

  if (tool.toString().startsWith('ToolType')) {
    var tid = Stdlib.selectTool.map[tool];

    if (tid == undefined) {
      var ttype = {};
      ttype._name = tool.substring(9);
      ttype.toString = function() {
        return "ToolType." + this._name.toUpperCase();
      }
      ToolType[ttype._name] = ttype;
      
      Stdlib.selectTool.map[ToolType[ttype._name]] = xTID(ttype._name);
      tid = Stdlib.selectTool.map[tool];
    }
    toolID = tid;

  } else {
    toolID = xTID(tool);
  }

  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putClass(tool);
  desc.putReference(cTID('null'), ref);
  executeAction(PSEvent.Select, desc, DialogModes.NO);
};

Stdlib.zoomIn = function() {
  Stdlib.doMenuItem("ZmIn");
};
Stdlib.zoomOut = function() {
  Stdlib.doMenuItem("ZmOt");
};
Stdlib.zoomActualPixels = function() {
  Stdlib.doMenuItem("ActP");
};
Stdlib.zoomFitOnScreen = function() {
  Stdlib.doMenuItem("FtOn");
};
Stdlib.zoomPrintSize = function() {
  Stdlib.doMenuItem("PrnS");
};

Stdlib.resetSwatches = function() {
  var desc26 = new ActionDescriptor();
  var ref16 = new ActionReference();
  ref16.putProperty( cTID('Clr '), cTID('Clrs') );
  desc26.putReference( cTID('null'), ref16 );
  executeAction( cTID('Rset'), desc26, DialogModes.NO );
};


//
//================================== Document =================================
//

//
// Create a new document with the name, mode, etc..., specified
//
Stdlib.newDocument = function(name, mode, width, height, resolution,
                              depth, colorProfile) {

// Stdlib.newDocument("bbb.psd", "RGBM", 250, 500, 72, 16)

  function _ftn(name, mode, width, height, resolution, depth) {
    var desc = new ActionDescriptor();
    desc.putString(cTID("Nm  "), name);
    desc.putClass(cTID("Md  "), cTID(mode));
    desc.putUnitDouble(cTID("Wdth"), cTID("#Rlt"), width);
    desc.putUnitDouble(cTID("Hght"), cTID("#Rlt"), height);
    desc.putUnitDouble(cTID("Rslt"), cTID("#Rsl"), resolution);
    desc.putDouble(sTID("pixelScaleFactor"), 1.000000 );
    desc.putEnumerated(cTID("Fl  "), cTID("Fl  "), cTID("Wht "));
    desc.putInteger(cTID("Dpth"), depth );
    desc.putString(sTID("profile"), colorProfile);

    var mkdesc = new ActionDescriptor();
    mkdesc.putObject(cTID("Nw  "), cTID("Dcmn"), desc);
    executeAction(cTID("Mk  "), mkdesc, DialogModes.NO );
  }

  if (!colorProfile) {
    colorProfile = ColorProfileNames.SRGB;
  }

  _ftn(name, mode, width, height, resolution, depth);
  return app.activeDocument;
};

Stdlib.newDocumentFromClipboard = function(name) {
  function _newDoc() {
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    if (name) {
      desc3.putString( cTID('Nm  '), "Name-XXX" );
    }
    desc3.putString( sTID('preset'), "Clipboard" );
    desc2.putObject( cTID('Nw  '), cTID('Dcmn'), desc3 );
    executeAction( cTID('Mk  '), desc2, DialogModes.NO );
  };

  function _paste() {
    var desc = new ActionDescriptor();   // AntiAlias
    desc.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
    executeAction(cTID("past"), desc, DialogModes.NO);
  }

  _newDoc();
  _paste();

  return app.activeDocument;
};

//
// Stdlib.getObjectProperty
//   Return the value of a PS object's properties from the underlying
//     ActionDescriptor-based definition.
//   Returns 'undefined' if the property's value cannot be determined
//   This api currently only works on Application, Document, and
//   Layer-family objects.
//   Lower level apis make it possible to access other kinds of objects.
//
// Examples:
// var str = Stdlib.getObjectProperty(0, "Nm  ", "Lyr ")
// var bool = Stdlib.getObjectProperty(doc.activeLayer, "Vsbl", "Lyr ")
// var str = Stdlib.getObjectProperty(doc, 'Ttl ');
// var file = Stdlib.getObjectProperty(app, 'Path');
// var clrDesc = Stdlib.getObjectProperty(app, 'FrgC');
//
Stdlib.getObjectProperty = function(obj, prop, typ) {
  var val = Stdlib._getObjProperty(obj, prop, typ);

  return (val ? val.value : undefined);
};

// Stdlib.getObjectPropertyType
//   For UnitDouble, return the type
//   For Object, return the classId
//   For Enumerated, return the enumerationTypeId
//   All else, return undefined
//
Stdlib.getObjectPropertyType = function(obj, prop, typ) {
  var val = Stdlib._getObjProperty(obj, prop, typ);

  return (val ? val.type : undefined);
};
//
// Stdlib._getObjProperty
//   Returns an object with value and (optional) type of the property.
//   The 'typ' can be used when accessing an object type that this
//   function does not already understand
//
Stdlib._getObjProperty = function(obj, prop, typ) {
  var propId;
  var otyp;

  function _ftn(obj, propId, otyp) {
    var ref = new ActionReference();
    ref.putProperty(cTID("Prpr"), propId);

    if (typeof(obj) == "number") {
      ref.putIndex(cTID(otyp), obj);
    } else {
      ref.putEnumerated(cTID(otyp), cTID("Ordn"), cTID("Trgt") );
    }

    var desc;
    try {
      desc = executeActionGet(ref);
    } catch (e) {
      return undefined;
    } 
    var val = {};

    if (desc.hasKey(propId)) {
      var typ = desc.getType(propId);
      switch (typ) {
        case DescValueType.ALIASTYPE:
          val.value = desc.getPath(propId); break;
        case DescValueType.BOOLEANTYPE:
          val.value = desc.getBoolean(propId); break;
        case DescValueType.CLASSTYPE:
          val.value = desc.getClass(propId); break;
        case DescValueType.DOUBLETYPE:
          val.value = desc.getDouble(propId); break;
        case DescValueType.ENUMERATEDTYPE:  
          val.value = desc.getEnumeratedValue(propId);
          val.type = desc.getEnumeratedType(propId);
          break;o
        case DescValueType.INTEGERTYPE:
          val.value = desc.getInteger(propId); break;
        case DescValueType.LISTTYPE:
          val.value = desc.getList(propId); break;
        case DescValueType.OBJECTTYPE:
          val.value = desc.getObjectValue(propId);
          val.type = desc.getObjectType(propId);
          break;
        case DescValueType.RAWTYPE:
          val.value = desc.getData(propId); break;
        case DescValueType.REFERENCETYPE:
          val.value = desc.getReference(propId); break;
        case DescValueType.STRINGTYPE:
          val.value = desc.getString(propId); break;
        case DescValueType.UNITDOUBLE:
          val.value = desc.getUnitDoubleValue(propId);
          val.type = desc.getUnitDoubleType(propId);
          break;
      }
    }
    return val;
  }

  if (obj == undefined) {
    Error.runtimeError(2, "object");
  }
  if (prop == undefined) {
    Error.runtimeError(2, "property");
  }

  if (prop.constructor == String) {
    propId = xTID(prop);
  } else if (prop.constructor == Number) {
    propId = prop;
  } else {
    Error.runtimeError(19, "property");
  }

  var val; // {value: undefind, type: undefined}

  //$.level = 1; debugger;

  if (app.documents.length > 0) {
    var o_doc = app.activeDocument;   // active doc before this function
    var o_layer = o_doc.activeLayer;  // active layer before this function
  }

  if (typeof(obj) == "object") {
    if (typ == "Dcmn" || obj.typename == "Document") {
      otyp = "Dcmn";
      if (app.activeDocument != obj) {
        o_doc = app.activeDocument;
        app.activeDocument = obj;
      }

    } else if (typ == "Lyr " || obj.typename == "ArtLayer"
               || obj.typename == "LayerSet") {
      otyp = "Lyr ";
      var layer = obj;
      while(layer.parent != undefined &&
            layer.parent.typename != "Document") {
        layer = layer.parent;
      }
      if (app.activeDocument != layer.parent) {
        app.activeDocument = layer.parent;
      }
      if (layer.parent.activeLayer != layer) {
        layer.parent.activeLayer = layer;
      }
        
    } else if (typ == "capp" || obj.typename == "Application") {
      otyp = "capp";

    } else {
      Error.runtimeError(55, prop);
//       throw ("Unable to get property from " +
//              (obj.typename ? obj.typename : "unknown") +
//              " type of object.");
    }
  } else if (typeof(obj) == "number") {
    if (!typ) {
      Error.runtimeError(55, prop);
//       throw ("Unable to get property from unknown type of object");
    }
    if (typ != "Lyr " && typ != "Dcmn") {
      Error.runtimeError(9001,
                         "Indexed app operations are not yet supported.");
    }
    otyp = typ;
  }

  var val = _ftn(obj, propId, otyp);

  if (app.documents.length > 0) {
    if (o_doc.activeLayer != o_layer) {
      o_doc.activeLayer = o_layer;
    }
    if (app.activeDocument != o_doc) {
      app.activeDocument = o_doc;
    }
  }

  return val;
};

Stdlib.getLayerProperty = function(index, propSym) {
  return Stdlib.getObjectProperty(index, propSym, 'Lyr ');
};
Stdlib.getDocumentProperty = function(index, propSym) {
  return Stdlib.getObjectProperty(index, propSym, 'Dcmn');
};
Stdlib.getApplicationProperty = function(propSym) {
  return Stdlib.getObjectProperty(app, propSym);
};

//
// Duplicate an existing document and use the name specified.
// Optionally merge the layers
//
Stdlib.duplicateDocument = function(doc, name, merged) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
    desc.putReference(cTID("null"), ref );

    if (name) {
      desc.putString(cTID("Nm  "), name);
    }
    if (merged == true) {
      desc.putBoolean(cTID("Mrgd"), true);
    }
    executeAction(cTID("Dplc"), desc, DialogModes.NO );
    return app.activeDocument;
  }

  return Stdlib.wrapLC(doc, _ftn);
};

Stdlib.getDocumentDescriptor = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated( cTID("Dcmn"),
                       cTID("Ordn"),
                       cTID("Trgt") );  //activeDoc
    return executeActionGet(ref);
  }

  return Stdlib.wrapLC(doc, _ftn);
};

Stdlib.getDocumentIndex = function(doc) {
  return Stdlib.getDocumentProperty(doc, cTID('ItmI'));
};


Stdlib.isDocumentNew = function(doc){
  var desc = Stdlib.getDocumentDescriptor(doc);
  var rc = true;
  if (desc.hasKey(cTID("FilR"))) {  //FileReference
    var path = desc.getPath(cTID("FilR"));
    if (path) {
      rc = (path.absoluteURI.length == 0);
    }
  }
  return rc;
};

Stdlib.hasBackground = function(doc) {
   return doc.layers[doc.layers.length-1].isBackgroundLayer;

//   // Mike Hale's version...
//   function _ftn() {
//     var ref = new ActionReference();
//     ref.putProperty(cTID("Prpr"), cTID("Bckg"));
//     //bottom Layer/background
//     ref.putEnumerated(cTID("Lyr "),cTID("Ordn"),cTID("Back"));
//     var desc =  executeActionGet(ref);
//     var res = desc.getBoolean(cTID("Bckg"));
//     return res;
//   }; 

//   return Stdlib.wrapLC(doc, _ftn);


//   // or
//   try {
//     doc.backgroundLayer;
//     return true;
//   } catch (e) {
//     return false;
//   }
};
Stdlib.hasBackgroundLayer = Stdlib.hasBackground;

//
// Returns true if the file is an open document
//
Stdlib.isDocumentOpen = function(file) {
  if (file && (app.documents.length > 0)) {
    var doc = Stdlib.getByName(app.documents, file.name) 
    if (doc) {
      return file == doc.fullName;
    }
  }
  return false;
};

Stdlib.getDocumentName = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putProperty(cTID('Prpr'), cTID('FilR'));
    ref.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Trgt'));
    var desc = executeActionGet(ref);
    return desc.hasKey(cTID('FilR')) ? desc.getPath(cTID('FilR')) : undefined;
  }
  return Stdlib.wrapLC(doc, _ftn);
};
Stdlib.getDocumentFile = function(doc) {
  return Stdlib.getDocumentName(doc);
};

//
// Revert the document, or active document if one isn't specified
//
Stdlib.revertDocument = function(doc) {
  Stdlib.doEvent(doc, "Rvrt");
};

Stdlib.isLandscapeMode = function(obj) {
  var ru = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
  
  var rc = obj.width.value > obj.height.value;
  app.preferences.rulerUnits = ru;
  return rc;
};
Stdlib.isPortraitMode = function(obj) {
  var ru = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
  
  var rc = obj.width.value < obj.height.value;
  app.preferences.rulerUnits = ru;
  return rc;
};
Stdlib.isSquareMode = function(obj) {
  var ru = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
  
  var rc = obj.width.value == obj.height.value;
  app.preferences.rulerUnits = ru;
  return rc;
};

Stdlib.validateUnitValue = function(str, bu, ru) {
  var self = this;

  if (str instanceof UnitValue) {
    return str;
  }

  if (bu && bu instanceof Document) {
    var doc = bu;
    ru = doc.width.type;
    bu = UnitValue(1/doc.resolution, ru);

  } else {
    if (!ru) {
      ru = Stdlib.getDefaultRulerUnitsString();
    }
    if (!bu) {
      UnitValue.baseUnit = UnitValue(1/72, ru);
    }
  }
  str = str.toString();

  var zero = new UnitValue("0 " + ru);
  var un = zero;
  if (!str.match(/[a-z%]+/)) {
    str += ' ' + ru.units;
  }
  un = new UnitValue(str);

  if (isNaN(un.value) || un.type == '?') {
    return undefined;
  }

  if (un.value == 0) {
    un = zero;
  }

  return un;
};

//
// Pops open a standard File Open Dialog and returns a Document or
// null if none is selected
// This is primarily for PS7 which does not have File.openDialog
//
Stdlib.openDialogPS7 = function(folder) {
  return Stdlib.selectImageFile(folder);
}

//
// selectImageFile will open a dialog on the folder it chooses,
// totally ignoring the default.
//
Stdlib.selectImageFile = function(file) {
  var ad;
  var doc = undefined;

  if (documents.length) {
    ad = app.activeDocument;
  }

  if (!file) {
    file = Folder.current;
  } else {
    file = Stdlib.convertFptr(file);
    if (!file.exists) {
      file = file.parent;
    }
  }
  if (file instanceof Folder) {
    var files = Stdlib.getImageFiles(file, false, true);
    if (files.length > 0) {
      file = files[0];
    } else {
      file = new File(file + "/untitled.psd");
    }
  }

  try {
    var desc = new ActionDescriptor();
    Folder.current = file.parent;
    desc.putPath( cTID('null'), file); 
    executeAction(cTID("Opn "), desc, DialogModes.ALL);

  } catch (e) {
    throw e;
  }

  if (ad != app.activeDocument) {
    doc = app.activeDocument;
  }

  return doc;
};

//
// Paste the contents of the clipboard into the doc with antialias off
//
Stdlib.pasteInto = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();   // AntiAlias
    desc.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
    executeAction(cTID("PstI"), desc, DialogModes.NO);
  }
  Stdlib.wrapLC(doc, _ftn);
};


//
// Make it a Document object method
//
// Document.prototype.revert = function() {
//   Stdlib.revertDocument(this);
// };

//============================= History  ===============================
//
// Thanks to Andrew Hall for the idea
// Added named snapshot support
//
Stdlib.takeSnapshot = function(doc, sname) {
  function _ftn() {
    var desc = new ActionDescriptor();  // Make

    var sref = new ActionReference();   // Snapshot
    sref.putClass(cTID("SnpS"));
    desc.putReference(cTID("null"), sref);

    var fref = new ActionReference();    // Current History State
    fref.putProperty(cTID("HstS"), cTID("CrnH"));
    desc.putReference(cTID("From"), fref );

    if (sname) {                         // Named snapshot
      desc.putString(cTID("Nm  "), sname);
    }
    
    desc.putEnumerated(cTID("Usng"), cTID("HstS"), cTID("FllD"));
    executeAction(cTID("Mk  "), desc, DialogModes.NO );
  }

  Stdlib.wrapLC(doc, _ftn);
};

//
// Revert to named snapshot
//
Stdlib.revertToSnapshot = function(doc, sname) {
  function _ftn() {
    if (!sname) {
      return Stdlib.revertToLastSnapshot(doc);
    }
    var state = Stdlib.getByName(doc.historyStates, sname);
    if (state) {
      doc.activeHistoryState = state;
      return true;
    }
    return false;
  }
  return Stdlib.wrapLC(doc, _ftn);
};

//
// Revert to the last auto-named snapshot
//
Stdlib.revertToLastSnapshot = function(doc) {
  function _ftn() {
    var states = Stdlib.getByName(doc.historyStates, /^Snapshot /, true);
    if (states.length > 0) {
      doc.activeHistoryState = states.pop();
      return true;
    }
    return false;
  }
  return Stdlib.wrapLC(doc, _ftn);
};

Stdlib.deleteSnapshot = function(doc, name) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName(cTID('SnpS'), name);
    desc.putReference(cTID('null'), ref);
    executeAction(cTID('Dlt '), desc, DialogModes.NO ); 
  }
  return Stdlib.wrapLC(doc, _ftn);

//   function _deleteCurrent() {
//     var ref = new ActionReference();
//     ref.putProperty(cTID("HstS"), cTID("CrnH"));

//     var desc = new ActionDescriptor();
//     desc.putReference(cTID("null"), ref );
//     executeAction(cTID("Dlt "), desc, DialogModes.NO );
//   };

//   var state = doc.activeHistoryState;
//   if (!Stdlib.revertToSnapshot(doc, name)) {
//     return false;
//   }
//   try {
//     _deleteCurrent(doc, name);
//   } finally {
//     var level = $.level;
//     try { 
//       $.level = 0;
//       doc.activeHistoryState = state;
//     } catch (e) {
//     }
//     $.level = level;
//   }
//   return true;
};

Stdlib.hist = function(dir) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("HstS"), cTID("Ordn"), cTID(dir));
    desc.putReference(cTID("null"), ref);
    executeAction(cTID("slct"), desc, DialogModes.NO);
  }

  _ftn();
};
Stdlib.undo = function () {
  Stdlib.hist("Prvs");
};
Stdlib.redo = function () {
  Stdlib.hist("Nxt ");
};
Stdlib.Undo = function () {
  Stdlib.doEvent("undo");
};
Stdlib.Redo = function () {
  Stdlib.doEvent(sTID('redo'));
};



//
//================================== Layers ===================================
//
Stdlib.convertTextLayerToShape = function(doc, layer) {
  function _ftn() {
    if (layer.kind != LayerKind.TEXT) {
      Error.runtimeError(8177);  // Layer is not a text layer
//       throw "Cannot convert non-text layers to shapes.";
    }

    var desc = new ActionDescriptor();
    var cref = new ActionReference();
    cref.putClass( sTID('contentLayer') );
    desc.putReference( cTID('null'), cref );
    var lref = new ActionReference();
    lref.putEnumerated( cTID('TxLr'), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('Usng'), lref );
    executeAction( cTID('Mk  '), desc, DialogModes.NO );
  }
  Stdlib.makeActive(doc);
  Stdlib.makeActive(layer);
  _ftn();
  return doc.activeLayer;
};
Stdlib.copyLayerToDocument = function(doc, layer, otherDoc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var fref = new ActionReference();
    fref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('null'), fref);
    var tref = new ActionReference();
    tref.putName(cTID('Dcmn'), otherDoc.name);
    desc.putReference(cTID('T   '), tref);
    desc.putInteger(cTID('Vrsn'), 2 );
    executeAction(cTID('Dplc'), desc, DialogModes.NO);
  };

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.convertToSmartLayer = function(doc, layer) {
  function _ftn() {
    Stdlib.doEvent(sTID('newPlacedLayer'));
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.getSmartObjectType = function(doc, layer) {

  function _ftn() {
    var type = undefined;
    var ref = new ActionReference();
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), sTID('Trgt') );
    var desc = executeActionGet(ref);
    if (desc.hasKey(sTID('smartObject'))){// is smart object?
      var desc = executeActionGet(ref);
      var smObj = desc.getObjectValue(sTID('smartObject'));
      var place = smObj.getEnumerationValue(sTID('placed'));
      type = id2char(place);
    }
  }

  var typ = Stdlib.wrapLCLayer(doc, layer, _ftn);

  return typ;
};

Stdlib.editSmartObject = function(doc, layer) {
  function _ftn() {
    var id21 = sTID( "placedLayerEditContents" );
    var desc7 = new ActionDescriptor();
    executeAction( id21, desc7, DialogModes.NO );
  }
  Stdlib.makeActive(doc);
  Stdlib.makeActive(layer);
  _ftn();
  return app.activeDocument;
};

Stdlib.updateSmartLayer = function(doc, layer) {
  function _ftn() {
    executeAction(sTID('updatePlacedLayer'), undefined, DialogModes.NO);
  };

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

//
// Traverse the all layers, including nested layers, executing
// the specified function. Traversal can happen in both directions.
//
Stdlib.traverseLayers = function(doc, ftn, reverse, layerSets) {

  function _traverse(doc, layers, ftn, reverse, layerSets) {
    var ok = true;
    for (var i = 1; i <= layers.length && ok != false; i++) {
      var index = (reverse == true) ? layers.length-i : i - 1;
      var layer = layers[index];

      if (layer.typename == "LayerSet") {
        if (layerSets) {
          ok = ftn(doc, layer);
        }
        if (ok) {
          ok = _traverse(doc, layer.layers, ftn, reverse, layerSets);
        }
      } else {
        ok = ftn(doc, layer);
        try {
          if (app.activeDocument != doc) {
            app.activeDocument = doc;
          }
        } catch (e) {
        }
      }
    }
    return ok;
  };

  return _traverse(doc, doc.layers, ftn, reverse, layerSets);
};

Stdlib.getLayersList = function(doc, reverse, layerSets) {
  function _ftn(doc, layer) {
    _ftn.list.push(layer);
    return true;
  };

  _ftn.list = [];
  Stdlib.traverseLayers(doc, _ftn, reverse, layerSets);

  var lst = _ftn.list;
  _ftn.list = undefined;
  return lst;
};

Stdlib.getVisibleLayers = function(doc) {
  var layers = Stdlib.getLayersList(doc);
  return Stdlib.getByProperty(layers, "visible", true, true);
};

Stdlib._setSelLayerVis = function(doc, state) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var list = new ActionList();
    var ref = new ActionReference();

    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    list.putReference(ref);
    desc.putList(cTID('null'),  list);

    executeAction(cTID(state), desc, DialogModes.NO);
  }
  Stdlib.wrapLC(doc, _ftn);
};
Stdlib.hideSelectedLayers = function(doc) {
  Stdlib._setSelectLayerVis(doc, 'Hd  ');
};
Stdlib.showSelectedLayers = function(doc) {
  Stdlib._setSelectLayerVis(doc, 'Shw ');
};

Stdlib._setOtherLayerVis = function(doc, layer, state) {
  function _extendLayerSelectionToIndex(doc, index) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex(cTID('Lyr '), index);
    desc.putReference(cTID('null'), ref);
    desc.putEnumerated(sTID('selectionModifier'),
                       sTID('selectionModifierType'),
                       sTID('addToSelectionContinuous'));
    desc.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc, DialogModes.NO);
  };

  var top = doc.layers[0];
  var lvis = layer.visible;
  var lidx = Stdlib.getLayerIndex(doc, layer);
  var bottom = doc.layers[doc.layers.length-1];

  doc.activeLayer = top;
  var bidx = Stdlib.getLayerIndex(doc, bottom);
  _extendLayerSelectionToIndex(doc, bidx);
  Stdlib._setSelLayerVis(state);
  Stdlib.selectLayerByIndex(doc, lidx);
  layer.visible = lvis;
};

Stdlib.showOtherLayers = function(doc, layer) {
  Stdlib._setOtherLayerVis(doc, layer, 'Shw ');
};

Stdlib.hideOtherLayers = function(doc, layer) {
  Stdlib._setOtherLayerVis(doc, layer, 'Hd  ');
};


Stdlib.findLayer = function(doc, layerName) {
  function _findLayer(doc, layer) {
    if (_findLayer.matchFtn(layer.name, _findLayer.layerName)) {
      _findLayer.layer = layer;
      return false;
    }
    return true;
  }

  var matchFtn;

  if (layerName instanceof RegExp) {
    matchFtn = function(s1, re) { return s1.match(re) != null; }
  } else {
    matchFtn = function(s1, s2) { return s1 == s2;  }
  }

  _findLayer.matchFtn = matchFtn;
  _findLayer.layerName = layerName;
  Stdlib.traverseLayers(doc, _findLayer, false, true);
  return _findLayer.layer;
};


// Ex: layers = Stdlib.findLayerByProperty(doc, "visible", true, true);
Stdlib.findLayerByProperty = function(doc, prop, val, all) {

  function _findLayer(doc, layer) {
    if (_findLayer.matchFtn(layer[_findLayer.property], _findLayer.value)) {

      if (_findLayer.all) {
        _findLayer.result.push(layer);
        return true;

      } else {
        _findLayer.result = layer;
        return false;
      }
    }
    return true;
  }

  var _matchFtn;

  if (val instanceof RegExp) {
    _matchFtn = function(s1, re) { return s1.match(re) != null; }
  } else {
    _matchFtn = function(s1, s2) { return s1 == s2;  }
  }

  _findLayer.matchFtn = _matchFtn;
  _findLayer.property = prop;
  _findLayer.value = val;
  _findLayer.all = all;
  if (all) {
    _findLayer.result = [];
  }

  Stdlib.traverseLayers(doc, _findLayer, false, true);
  return _findLayer.result;
};


Stdlib.isLayerEmpty = function(doc, layer) {
  if (!doc) {
    doc = app.activeDocument;
  }
  if (!layer) {
    layer = doc.activeLayer;
  }

  return parseInt(layer.bounds.toString().replace(/\D/g,"")) == 0;
};

Stdlib.mergeVisible = function(doc) {
  Stdlib.doEvent(doc, "MrgV");  // "MergeVisible"
};

Stdlib.mergeLayers = function(doc, layers) {
  if (layers) {
    Stdlib.selectLayers(doc, layers);
  }
  Stdlib.doEvent(doc, "Mrg2");  // "MergeLayers"
}

Stdlib.previousLayer = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Bckw') );
    desc.putReference( cTID('null'), ref );
    desc.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc, DialogModes.NO );
  }
  var layer = doc.activeLayer;
  try {
    var lvl = $.level;
    $.level = 0;
    var idx = Stdlib.getActiveLayerIndex(doc);
    Stdlib.wrapLC(doc, _ftn);
    var idx2 = Stdlib.getActiveLayerIndex(doc);

    if (idx2 > idx) {
      layer = doc.activeLayer;
    } else {
      doc.activeLayer = layer;
      layer = undefined;
    }

  } catch (e) {

  } finally {
   $.level = lvl;
   delete lvl;
  }
  return layer;
};

Stdlib.nextLayer = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Frwr') );
    desc.putReference( cTID('null'), ref );
    desc.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc, DialogModes.NO );
  }
  var layer = doc.activeLayer;
  try {
    var lvl = $.level;
    $.level = 0;
    var idx = Stdlib.getActiveLayerIndex(doc);
    Stdlib.wrapLC(doc, _ftn);
    var idx2 = Stdlib.getActiveLayerIndex(doc);

    if (idx2 > idx) {
      layer = doc.activeLayer;
    } else {
      doc.activeLayer = layer;
      layer = undefined;
    }

  } catch (e) {
    //$.level = 1; debugger;

  } finally {
   $.level = lvl;
   delete lvl;
  }
  return layer;
};


//
// Copy the styles from the current layer into the styles clipboard
//
Stdlib.copyStyles = function(doc, ignoreError) {
  if (ignoreError == true) {
    var lvl = $.level;
    $.level = 0;
    var rc = false;
    try {
      Stdlib.doEvent(doc, "CpFX");
      rc = true;
    } // "CopyEffects";
    catch (e) {}
    $.level = lvl; 
    return rc;
  } else {
    Stdlib.doEvent(doc, "CpFX"); // "CopyEffects";
  }
};

//
// Paste the styles from the styles clipboard into the current layer
//
Stdlib.pasteStyles = function(doc, layer, ignoreError) {
  if (ignoreError == true) {
    var lvl = $.level;
    $.level = 0;
    var rc = false;
    try {
      Stdlib.pasteStyles(doc, layer, false);
      rc = true;
    }
    catch (e) {}
    $.level = lvl;
    return rc;

  } else {
    var prev;
    if (layer) {
      prev = Stdlib.makeActive(layer);
    }
    Stdlib.doEvent(doc, "PaFX"); // "PasteEffects";
    if (prev) {
      Stdlib.makeActive(prev);
    }
  }
};

Stdlib.hasEffects = function(doc, layer) {
  var hasEffects = true;
  var lvl = $.level;
  try {
    $.level = 0;
    Stdlib.copyEffects(doc, layer);
  } catch (e) {
    hasEffects = false;
  } finally {
    $.level = lvl;
  }
  return hasEffects;
};
Stdlib.hasLayerStyles = Stdlib.hasEffects;

Stdlib.clearEffects = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    executeAction( sTID('disableLayerStyle'), desc, DialogModes.NO );
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.clearLayerStyles = Stdlib.clearEffects;

Stdlib.copyEffects = function(doc, layer) {
  var prev;
  if (layer) {
    prev = Stdlib.makeActive(layer);
  }
  Stdlib.doEvent(doc, "CpFX"); // "CopyEffects";
  if (prev) {
    Stdlib.makeActive(prev);
  }
};
Stdlib.pasteEffects = function(doc, layer) {
  var prev;
  if (layer) {
    prev = Stdlib.makeActive(layer);
  }
  Stdlib.doEvent(doc, "PaFX"); // "PasteEffects";
  if (prev) {
    Stdlib.makeActive(prev);
  }
};
Stdlib._setEffectsViz = function(doc, layer, id) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var list = new ActionList();
    var ref = new ActionReference();
    ref.putClass(cTID('Lefx'));
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    list.putReference(ref);
    desc.putList(cTID('null'), list);
    executeAction(cTID(id), desc, DialogModes.NO);
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.hideLayerEffects = function(doc, layer) {
  Stdlib._setEffectsViz(doc, layer, 'Hd  ');
};
Stdlib.hideLayerStyles = Stdlib.hideEffects = Stdlib.hideLayerEffects;
Stdlib.showLayerEffects = function(doc, layer) {
  Stdlib._setEffectsViz(doc, layer, 'Shw ');
};
Stdlib.showLayerStyles = Stdlib.showEffects = Stdlib.showLayerEffects;

//
// Stdlib.layerEffectsVisible(doc, doc.activeLayer);
//
Stdlib.layerEffectsVisible = function(doc, layer) {
  var al = doc.activeLayer;
  if (al != layer) {
    doc.activeLayer = layer;
  }
  var desc = Stdlib.getLayerDescriptor(doc, layer);
  var id = cTID('lfxv');
  var visible = desc.hasKey(id) && desc.getBoolean(id);

  if (al != layer) {
    doc.activeLayer = al;
  }

  return visible;
};

Stdlib.applyLayerStyleInteractive = function(doc, layer, ldesc) {
  return Stdlib.applyLayerStyle(doc, layer, ldesc, true);
};

Stdlib.applyLayerStyle = function(doc, layer, ldesc, interactive) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putProperty(cTID('Prpr'), cTID('Lefx') );
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference(cTID('null'), ref);

    if (!ldesc) {
      ldesc = new ActionDescriptor();
    }
    desc.putObject(cTID('T   '), cTID('Lefx'), ldesc);

    var xdesc = undefined;
    var mode = (interactive ? DialogModes.ALL : DialogModes.NO);
    try {
      xdesc = executeAction(cTID('setd'), desc, mode);
    } catch (e) {
      if (e.number != 8007) { // if not "User cancelled"
        throw e;
      }
    }
    return xdesc;
  }

  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};



//
// Create a new document from the specified layer with the given name
//
Stdlib.makeDocFromLayer = function(doc, layer, docName) {
  function _ftn() {
    var desc = new ActionDescriptor();     // Make

    var dref = new ActionReference();      // Document
    dref.putClass(cTID("Dcmn"));
    desc.putReference(cTID("null"), dref);

    desc.putString(cTID("Nm  "), docName);  // Name

    var lref = new ActionReference();       // Layer
    lref.putName( cTID("Lyr "), layer.name);
    desc.putReference(cTID("Usng"), lref);

    executeAction(cTID("Mk  "), desc, DialogModes.NO);
  }

  // wrapLC is not used because we want to return the new
  // document from this function
  if (doc) {
    app.activeDocument = doc;
  } else {
    doc = app.activeDocument;
  }
  if (layer) {
    doc.activeLayer = layer;
  } else {
    layer = doc.activeLayer;
  }
  _ftn();
  return app.activeDocument;
};

Stdlib.getDocumentFromLayer = function(layer) {
  while(layer.parent != undefined && layer.parent.typename != "Document") {
    layer = layer.parent;
  }
  return layer.parent;
};

// from discussions with Mike Hale
Stdlib.hasLayerMask = function(doc, layer) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    var desc = executeActionGet(ref);
    return desc.hasKey(cTID("UsrM"));
  }
  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};


//
// Remove the mask from the layer. Apply the mask if 'apply' is true
//
Stdlib.removeLayerMask = function(doc, layer, apply) {
  function _ftn() {
    var desc = new ActionDescriptor();     // Delete

    var ref = new ActionReference();       // Mask Channel
    ref.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
    desc.putReference(cTID("null"), ref);

    apply = (apply == true);
    desc.putBoolean(cTID("Aply"), apply);  // Apply Mask

    executeAction(cTID("Dlt "), desc, DialogModes.NO);
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.removeMask = Stdlib.removeLayerMask;  // backwards compatibility

Stdlib.applyLayerMask = function(doc, layer) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Chnl'), cTID('Ordn'), cTID('Trgt') );
    
    var desc = new ActionDescriptor();
    desc.putReference( cTID('null'), ref );
    desc.putBoolean( cTID('Aply'), true );
    
    executeAction( cTID('Dlt '), desc, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.selectLayerMask = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();

    ref.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
    desc.putReference(cTID("null"), ref);
    desc.putBoolean(cTID("MkVs"), false );
    executeAction(cTID("slct"), desc, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.selectLayerMaskEdit = function(doc, layer) {
  function _ftn() {
    var desc11 = new ActionDescriptor();
        var ref8 = new ActionReference();
        ref8.putEnumerated( cTID('Chnl'), cTID('Ordn'), cTID('Trgt') );
    desc11.putReference( cTID('null'), ref8 );
    desc11.putBoolean( cTID('MkVs'), true );
    executeAction( cTID('slct'), desc11, DialogModes.NO );
  };
  Stdlib.selectLayerMask(doc, layer);
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.createLayerMask = function(doc, layer, fromSelection) {
  function _ftn() {
    var desc = new ActionDescriptor();
    desc.putClass(cTID("Nw  "), cTID("Chnl"));
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
    desc.putReference(cTID("At  "), ref);
    if (fromSelection == true) {
      desc.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlS"));
    } else {
      desc.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
    }
    executeAction(cTID("Mk  "), desc, DialogModes.NO);
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.isLayerMaskEnabled = function(doc, layer) {
  var desc = Stdlib.getLayerDescriptor(doc, layer);
  return (desc.hasKey(cTID("UsrM")) && desc.getBoolean(cTID("UsrM")));
};

Stdlib.disableLayerMask = function(doc, layer) {
  Stdlib.setLayerMaskEnabledState(doc, layer, false);
};
Stdlib.enableLayerMask = function(doc, layer) {
  Stdlib.setLayerMaskEnabledState(doc, layer, true);
};
Stdlib.setLayerMaskEnabledState = function(doc, layer, state) {
  function _ftn() {
    var desc = new ActionDescriptor();

    var ref = new ActionReference();
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('null'), ref );

    var tdesc = new ActionDescriptor();
    tdesc.putBoolean(cTID('UsrM'), state);
    desc.putObject(cTID('T   '), cTID('Lyr '), tdesc);

    executeAction(cTID('setd'), desc, DialogModes.NO );
  }
  if (state == undefined) {
    state = false;
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.createClippingMask = function(doc, layer) {

  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    executeAction( cTID('GrpL'), desc, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};


Stdlib.releaseClippingMask = function(doc, layer) {

  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    executeAction( cTID('Ungr'), desc, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.hasClippingMask = function(doc, layer) {
  return Stdlib.getLayerProperty(layer, 'Grup');
};

Stdlib.isClippingMask = function(doc, layer) {
  var rc = false;
  try {
    var idx = Stdlib.getLayerIndex(doc, layer);
    Stdlib.selectLayerByIndex(doc, idx+1);
    var rc = Stdlib.getLayerProperty(doc.activeLayer, 'Grup');
    doc.activeLayer = layer;
  } catch (e) {
  }

  return rc;
};

Stdlib.rotateLayer = function(doc, layer, angle) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    desc.putReference(cTID("null"), ref);
    desc.putUnitDouble(cTID("Angl"), cTID("#Ang"), angle);
    executeAction(cTID("Rtte"), desc, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.rotateLayerAround = function(doc, layer, angle, x, y) {
  angle = Number(angle);
  if (isNaN(angle)) {
    Error.runtimeError(19, "angle");  // BadArgument
  }
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    desc.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsi') );
    var ldesc = new ActionDescriptor();
    ldesc.putUnitDouble( cTID('Hrzn'), cTID('#Pxl'), x );
    ldesc.putUnitDouble( cTID('Vrtc'), cTID('#Pxl'), y );
    desc.putObject( cTID('Pstn'), cTID('Pnt '), ldesc );
    desc.putUnitDouble( cTID('Angl'), cTID('#Ang'), angle );
    executeAction( cTID('Trnf'), desc, DialogModes.NO );
  };

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};


// Stdlib.moveLayerContent(doc, doc.activeLayer, -25, -25);
Stdlib.moveLayerContent = function(doc, layer, dx, dy) {
  function _ftn() {
    var idx = Stdlib.getActiveLayerIndex(doc);
    Stdlib.moveLayerContentByIndex(doc, idx, dx, dy);
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.moveLayerContentByIndex = function(doc, idx, dx, dy) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex(cTID('Lyr '), idx);
    desc.putReference(cTID('null'), ref );
    var pdesc = new ActionDescriptor();
    pdesc.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), dx);
    pdesc.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), dy);
    desc.putObject(cTID('T   '), cTID('Ofst'), pdesc);
    executeAction(cTID('move'), desc, DialogModes.NO);
  }

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.freeTransform = function(doc, layer) {
//   Stdlib.doMenuItem(PSEnum.FreeTransform, true);
  Stdlib.doMenuItem(cTID("FrTr"), true);
};

Stdlib.transformScale = function(doc, layer, linked) {
  //   doc.activeLayer = layer;
  //   Stdlib.doMenuItem(cTID("Scl "), true);
  function _ftn() {
    var desc = new ActionDescriptor();
    var lref = new ActionReference();
    lref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    desc.putReference(cTID("null"), lref);
    desc.putEnumerated(cTID("FTcs"), cTID("QCSt"), cTID("Qcsa"));
    if (linked == true) {
      desc.putBoolean(cTID("Lnkd"), true );
    }

    var lvl = $.level;
    $.level = 0;
    try {
      executeAction(cTID("Trnf"), desc, DialogModes.ALL);
    } catch (e) {
      $.level = lvl;
      if (e.number != 8007) { // if not "User cancelled"
        throw e;
      }
    }
    $.level = lvl;
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};



// Stdlib.transformLayer(doc, doc.activeLayer, Stdlib.getMaskBounds(doc, doc.activeLayer))

Stdlib.getLayerBounds = function(doc, layer) {
  var ru = app.preferences.rulerUnits;

  try {
    app.preferences.rulerUnits = Units.PIXELS;

    var reenable = false;
    var st;
    if (Stdlib.hasLayerMask(doc, layer) &&
        Stdlib.isLayerMaskEnabled(doc, layer)) {
      st = doc.activeHistoryState;
      Stdlib.disableLayerMask(doc, layer);
      reenable = true;
    }
    
    var lbnds = layer.bounds;

    // fix this to modify the history state
    if (reenable) {
      Stdlib.enableLayerMask(doc, layer);
    }
    for (var i = 0; i < 4; i++) {
      lbnds[i] = lbnds[i].value;
    }

  } finally {
    app.preferences.rulerUnits = ru;
  }

  return lbnds;
};


// function ftn1() {
//   function cTID(s) { return app.charIDToTypeID(s); };
//   function sTID(s) { return app.stringIDToTypeID(s); };

//     var desc74 = new ActionDescriptor();
//     desc74.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
//         var desc75 = new ActionDescriptor();
//         desc75.putUnitDouble( cTID('Hrzn'), cTID('#Pxl'), -2700.000000 );
//         desc75.putUnitDouble( cTID('Vrtc'), cTID('#Pxl'), -1350.000000 );
//     desc74.putObject( cTID('Ofst'), cTID('Ofst'), desc75 );
//     desc74.putUnitDouble( cTID('Wdth'), cTID('#Prc'), 18.181818 );
//     desc74.putUnitDouble( cTID('Hght'), cTID('#Prc'), 35.601266 );
//     executeAction( cTID('Trnf'), desc74, DialogModes.NO );
// };

Stdlib.transformLayer = function(doc, layer, bnds, orient) {
  var lbnds = Stdlib.getLayerBounds(doc, layer);

  var newW = bnds[2]-bnds[0];
  var newH = bnds[3]-bnds[1];
  var oldW = lbnds[2]-lbnds[0];
  var oldH = lbnds[3]-lbnds[1];

  var hrzn = bnds[0] - (lbnds[0] - (newW-oldW)/2);
  var vrtc = bnds[1] - (lbnds[1] - (newH-oldH)/2);

  var prc;
  if (orient.toLowerCase() == 'horz') {
    vprc = hprc = (newW/oldW) * 100;
  } else if (orient == 'both') {
    hprc = (newW/oldW) * 100;
    vprc = (newH/oldH) * 100;
  } else {
    vprc = hprc = (newH/oldH) * 100;
  }

  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    desc.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
    var ldesc = new ActionDescriptor();
    ldesc.putUnitDouble( cTID('Hrzn'), cTID('#Pxl'), hrzn );
    ldesc.putUnitDouble( cTID('Vrtc'), cTID('#Pxl'), vrtc );
    desc.putObject( cTID('Ofst'), cTID('Ofst'), ldesc );
    desc.putUnitDouble( cTID('Wdth'), cTID('#Prc'), hprc );
    desc.putUnitDouble( cTID('Hght'), cTID('#Prc'), vprc );
//     desc.putUnitDouble( cTID('Angl'), cTID('#Ang'), angle );
    executeAction( cTID('Trnf'), desc, DialogModes.NO );
  };

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.rasterizeLayer = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    executeAction( sTID('rasterizeLayer'), desc, DialogModes.NO );
  };
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

// Stdlib.rotateLayer = function(doc, layer, angle) {
//   angle = Number(angle);
//   if (isNaN(angle)) {
//     Error.runtimeError(19, "angle");  // BadArgument
//   }
//   function _ftn() {
//     var desc = new ActionDescriptor();
//     var ref = new ActionReference();
//     ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
//     desc.putReference( cTID('null'), ref10 );
//     desc.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
//     var ldesc = new ActionDescriptor();
//     ldesc.putUnitDouble( cTID('Hrzn'), cTID('#Pxl'), 0 );
//     ldesc.putUnitDouble( cTID('Vrtc'), cTID('#Pxl'), 0 );
//     desc.putObject( cTID('Ofst'), cTID('Ofst'), ldesc );
//     desc.putUnitDouble( cTID('Angl'), cTID('#Ang'), angle );
//     executeAction( cTID('Trnf'), desc, DialogModes.NO );
//   };

//   Stdlib.wrapLCLayer(doc, layer, _ftn);
// };


Stdlib.convertToLayer = function(doc, layer) {
  // layer.rasterize(RasterizeType.ENTIRELAYER);
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('null'), ref);
    desc.putEnumerated(cTID('What'), sTID('rasterizeItem'), sTID('placed'));
    executeAction(sTID('rasterizeLayer'), desc, DialogModes.NO);
  };
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.placeImage = function(doc, layer, file) {
  Stdlib.makeActive(doc);
  Stdlib.makeActive(layer);

  function _ftn() {
    var desc = new ActionDescriptor();
    desc.putPath( cTID('null'), file);
    desc.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
        var ldesc = new ActionDescriptor();
        ldesc.putUnitDouble( cTID('Hrzn'), cTID('#Pxl'), 0.000000 );
        ldesc.putUnitDouble( cTID('Vrtc'), cTID('#Pxl'), 0.000000 );
    desc.putObject( cTID('Ofst'), cTID('Ofst'), ldesc );
    executeAction( cTID('Plc '), desc, DialogModes.NO );
  }

  _ftn();

  return doc.activeLayer;
};



// Stdlib.transformInteractive = function() {
//   var desc = new ActionDescriptor();
//   var ref = new ActionReference();
//   ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
//   desc.putReference( cTID('null'), ref );
//   desc.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
//   desc.putBoolean( cTID('Lnkd'), true );
//   executeAction( cTID('Trnf'), desc, DialogModes.ALL );
// };


Stdlib.deleteAllHiddenLayers = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), sTID("hidden"));
    var dltDesc = new ActionDescriptor();
    dltDesc.putReference(cTID("null"), ref);
    executeAction(cTID("Dlt "), dltDesc, DialogModes.NO);
  }
  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.hideAllLayers = function(doc) {
  var als = Stdlib.getLayersList(doc, false, true);
  for (var i = 0; i < als.length; i++) {
    als[i].visible = false;
  }
};
Stdlib.showAllLayers = function(doc) {
  var als = Stdlib.getLayersList(doc, false, true);
  for (var i = 0; i < als.length; i++) {
    als[i].visible = true;
  }
};

Stdlib.hideSelectedLayers = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var list = new ActionList();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    list.putReference( ref );
    desc.putList( cTID('null'), list );
    executeAction( cTID('Hd  '), desc, DialogModes.NO );
  }
  Stdlib.wrapLC(doc, _ftn);
};
Stdlib.showSelectedLayers = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var list = new ActionList();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    list.putReference( ref );
    desc.putList( cTID('null'), list );
    executeAction( cTID('Shw '), desc, DialogModes.NO );
  }
  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.newGroupFromLayers = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putClass( sTID('layerSection') );
    desc.putReference( cTID('null'), ref );
    var lref = new ActionReference();
    lref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('From'), lref);
    executeAction( cTID('Mk  '), desc, DialogModes.NO );
  };
  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.getLayerNameByIndex = function(doc, idx) {
  var ref = new ActionReference();
  ref.putProperty(cTID("Prpr"), cTID( "Nm  " ));
  ref.putIndex(cTID( "Lyr " ), idx);
  return executeActionGet(ref).getString(cTID( "Nm  " ));
};
Stdlib.setLayerName = function(doc, idx, nm) {
  var desc = new ActionDescriptor();

  var ref = new ActionReference();
  ref.putIndex(cTID('Lyr '), idx);
  desc.putReference(cTID('null'), ref);

  var nmdesc = new ActionDescriptor();
  nmdesc.putString(cTID('Nm  '), nm);
  desc.putObject(cTID('T   '), cTID('Lyr '), nmdesc);

  executeAction(cTID('setd'), desc, DialogModes.NO);
};

Stdlib.getActiveLayerIndex = function(doc) {
  return Stdlib.getLayerIndex(doc, doc.activeLayer);
};
Stdlib.getActiveLayerDescriptor = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    return executeActionGet(ref);
  }
  return Stdlib.wrapLC(doc, _ftn);
};

Stdlib.getLayerIndex = function(doc, layer, dontWrap) {
  var idx = Stdlib.getLayerProperty(layer, 'ItmI');
  return Stdlib.hasBackground(doc) ? idx-1 : idx;
};


Stdlib.getLayerID = function(doc, layer) {
  var d = Stdlib.getLayerDescriptor(doc, layer);
  return d.getInteger(cTID('LyrI'));
};

Stdlib.getLayerType = function(doc, layer) {
  var idx = Stdlib.getLayerIndex(doc, layer);
  return Stdlib.getLayerTypeByIndex(doc, idx);
};
Stdlib.getLayerTypeByIndex = function(doc, idx) {
  var ref = new ActionReference();
  ref.putProperty(cTID("Prpr") , sTID("layerSection"));
  ref.putIndex(cTID( "Lyr " ), idx);
  return executeActionGet(ref).getEnumerationValue(sTID('layerSection'));
};

Stdlib.isLayerSelected = function(doc, layer) {
  var selLayers = Stdlib.getSelectedLayers(doc, true);
  return sel.contains(layer);
};

Stdlib.deleteSelectedLayers = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    executeAction( cTID('Dlt '), desc, DialogModes.NO );
  };

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.selectLayer = function(doc, layer, append) {
  if (isCS()) {
    doc.activeLayer = layer;

  } else {
    Stdlib.selectLayerByIndex(doc,
                              Stdlib.getLayerIndex(doc, layer, true),
                              append);
  }
};
Stdlib.selectLayers = function(doc, layers, append) {
  var idxs = [];
  var vis = [];
  var avis = doc.activeLayer.visible;
  for (var i = 0; i < layers.length; i++) {
    var l = layers[i];
    vis[i] = l.visible;
    idxs.push(Stdlib.getLayerIndex(doc, l));
  }
  Stdlib.selectLayersByIndex(doc, idxs, append);
  for (var i = 0; i < layers.length; i++) {
    layers[i].visible = vis[i];
  }
  doc.activeLayer.visible = avis;
};
Stdlib.selectLayerByName = Stdlib.selectLayer;

// 1-based indexing
Stdlib.selectLayerByIndex = function(doc, index, append) {
  if (append) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex( cTID('Lyr '), index );
    desc.putReference( cTID('null'), ref );
    desc.putEnumerated( sTID('selectionModifier'),
                        sTID('selectionModifierType'),
                        sTID('addToSelection') );
    desc.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc, DialogModes.NO );

  } else {
    var ref = new ActionReference();
    ref.putIndex(cTID("Lyr "), index);
    var desc = new ActionDescriptor();
    desc.putReference(cTID("null"), ref );
    executeAction(cTID("slct"), desc, DialogModes.NO );
  }
};
Stdlib.selectLayersByIndex = function(doc, idxs, append) {
  if (!idxs || idxs.length == 0) {
    return;
  }
  idxs = idxs.slice(0);
  if (append != true) {
    Stdlib.selectLayerByIndex(doc, idxs.pop());
  }

  while (idxs.length) {
    Stdlib.selectLayerByIndex(doc, idxs.pop(), true);
  } 
};

Stdlib.deselectLayer = function(doc, layer) {
  if (isCS()) {
    return;
  }

  Stdlib.deselectLayerByIndex(doc, Stdlib.getLayerIndex(doc, layer, true));
};
Stdlib.deselectLayers = function(doc, layers) {
  if (isCS()) {
    return;
  }

  var idxs = [];
  var vis = [];
  for (var i = 0; i < layers.length; i++) {
    var l = layers[i];
    vis[i] = l.visible;
    idxs.push(Stdlib.getLayerIndex(doc, l));
  }
  Stdlib.deselectLayersByIndex(doc, idxs);
};

Stdlib.deselectLayerByIndex = function(doc, index) {
  if (isCS()) {
    return;
  }
  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putIndex(cTID('Lyr '), index);
  desc.putReference(cTID('null'), ref);
  desc.putEnumerated(sTID('selectionModifier'),
                     sTID('selectionModifierType'),
                     sTID('removeFromSelection'));
  desc.putBoolean(cTID('MkVs'), false);
  executeAction(cTID('slct'), desc, DialogModes.NO);
};
Stdlib.deselectLayersByIndex = function(doc, idxs) {
  if (isCS()) {
    return;
  }

  if (!idxs || idxs.length == 0) {
    return;
  }
  idxs = idxs.slice(0);

  while (idxs.length) {
    Stdlib.deselectLayerByIndex(doc, idxs.pop());
  } 
};


Stdlib.getLayerBoundsByIndex = function(doc, idx) {
  var desc = Stdlib.getLayerDescriptorByIndex(doc, idx);
  var bdesc = desc.getObjectValue(sTID('bounds'));

  var bnds = [];
  bnds.push(bdesc.getUnitDoubleValue(cTID('Left')));
  bnds.push(bdesc.getUnitDoubleValue(cTID('Top '))); 
  bnds.push(bdesc.getUnitDoubleValue(cTID('Rght')));
  bnds.push(bdesc.getUnitDoubleValue(cTID('Btom')));
  return bnds;
};

Stdlib.getLayerOpacityByIndex = function(doc, idx) {
  var desc = Stdlib.getLayerDescriptorByIndex(doc, idx);
  return desc.getInteger(cTID('Opct'));
};


Stdlib.selectLayerByIdentifier = function(doc, id) {
  var ref = new ActionReference();
  ref.putIdentifier(cTID("Lyr "), id);
  var desc = new ActionDescriptor();
  desc.putReference(cTID("null"), ref );
  executeAction(cTID("slct"), desc, DialogModes.NO );
};

Stdlib.hasBG = function(doc) {
  try {
    var bgref = new ActionReference();
    bgref.putIndex(cTID("Lyr "), 0);
    executeActionGet(ref);
    return true;
  } catch (e) {
    return false;
  }
}

// 1-based indexing...
Stdlib.getLayerDescriptorByIndex = function(doc, index) {
  var ref = new ActionReference();
  // assume that the index has already been adjusted
//   var hasBG = Stdlib.hasBackground(doc); // need something better here
//   if (hasBG) {
//     index--;
//   }

  ref.putIndex(cTID( "Lyr " ), index);
  return executeActionGet(ref);
};

Stdlib.getLayerDescriptor = function(doc, layer, dontWrap) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    return executeActionGet(ref)
  };

  if (dontWrap) {
    Stdlib.makeActive(doc);
    Stdlib.makeActive(layer);
    return _ftn();
  } else {
    return Stdlib.wrapLCLayer(doc, layer, _ftn); 
  }
};

Stdlib.getVectorMaskDescriptor = function(doc, layer) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Path'), cTID('Path'), sTID('vectorMask') );
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    return executeActionGet(ref)
  };

  return Stdlib.wrapLCLayer(doc, layer, _ftn); 
};

Stdlib.getPathDescriptor = function(doc, layer, name) {
  var totalPaths = doc.pathItems.length;
  var pathCount = 0;

  var pdesc;

  if (name == "WorkPath") {
    var ref = new ActionReference();
    ref.putProperty(cTID("Path"), cTID("WrPt"));
    pdesc = app.executeActionGet(ref);

  } else {
    for (var i = 1; i <= totalPaths; i++) {
      // try normal paths
      try {
        var ref = new ActionReference();
        ref.putIndex(cTID("Path"), i);
        var desc = app.executeActionGet(ref);

        var pname = desc.getString(cTID('PthN'));
        if (pname == name) {
          pdesc = desc;
          break;
        }

      } catch (e) {
        break;
      }
    }
  }

  return pdesc;
};

//
// Select either the Transparency or Mask Channel
//    kind - "Trsp" or "Msk "
//
Stdlib.loadSelection = function(doc, layer, kind, invert) {
  function _ftn() {
    var desc = new ActionDescriptor();   // Set

    var cref = new ActionReference();    // Channel Selection
    cref.putProperty(cTID("Chnl"), cTID("fsel"));
    desc.putReference(cTID("null"), cref);

    var tref = new ActionReference(); // Channel Kind ("Trsp" or "Msk ")
    tref.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID(kind));
    desc.putReference(cTID("T   "), tref);
    if (invert == true) {
      desc.putBoolean(cTID("Invr"), true);
    }
    executeAction(cTID("setd"), desc, DialogModes.NO);
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.selectTransparencyChannel = function(doc, layer, invert) {
  Stdlib.loadSelection(doc, layer, "Trsp", invert);
};
Stdlib.selectMaskChannel = function(doc, layer, invert) {
  Stdlib.loadSelection(doc, layer, "Msk ", invert);
};

Stdlib.saveNamedSelection = function(doc, layer, name) {
  function _ftn() {
    var desc47 = new ActionDescriptor();
    var ref33 = new ActionReference();
    ref33.putProperty( cTID('Chnl'), cTID('fsel') );
    desc47.putReference( cTID('null'), ref33 );
    desc47.putString( cTID('Nm  '), name);
    executeAction( cTID('Dplc'), desc47, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.selectNamedSelection = function(doc, layer, name) {
  function _ftn() {
    var desc49 = new ActionDescriptor();
    var ref35 = new ActionReference();
    ref35.putName( cTID('Chnl'), name );
    desc49.putReference( cTID('null'), ref35 );
    executeAction( cTID('slct'), desc49, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.loadNamedSelection = function(doc, layer, name, invert) {
  function _ftn() {
    var desc = new ActionDescriptor();   // Set

    var cref = new ActionReference();    // Channel Selection
    cref.putProperty(cTID("Chnl"), cTID("fsel"));
    desc.putReference(cTID("null"), cref);

    var tref = new ActionReference();
    tref.putName(cTID("Chnl"), name);
    desc.putReference(cTID("T   "), tref);
    if (invert == true) {
      desc.putBoolean(cTID("Invr"), true);
    }
    executeAction(cTID("setd"), desc, DialogModes.NO);
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.deleteNamedSelection = function(doc, layer, name) {
  function _ftn() {
    Stdlib.selectNamedSelection(doc, layer, name);
    var desc43 = new ActionDescriptor();
    var ref29 = new ActionReference();
    ref29.putEnumerated( cTID('Chnl'), cTID('Ordn'), cTID('Trgt') );
    desc43.putReference( cTID('null'), ref29 );
    executeAction( cTID('Dlt '), desc43, DialogModes.NO );
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};


//
// From Mike Hale:
// After you use Stdlib (or scriptlistner) to load the transparency channel
// as a selection you will need to apply a threshold to the selection to
// remove the semi-transparent pixels from the selection.

// activeDocument.quickMaskMode = true;
//     var desc = new ActionDescriptor();
//     desc.putInteger( charIDToTypeID( "Lvl " ), 1 );
// executeAction( charIDToTypeID( "Thrs" ), desc, DialogModes.NO );
// activeDocument.quickMaskMode = false;
//

Stdlib.getMaskBounds = function(doc, layer) {
  function _ftn() {
    var st = doc.activeHistoryState;
    Stdlib.selectMaskChannel(doc, layer);
    var bnds = Stdlib.getSelectionBounds(doc);
    doc.activeHistoryState = st;
    return bnds;
  }

//   Stdlib.undo(doc);
//   //executeAction(cTID("undo"), new ActionDescriptor(), DialogModes.NO);

  var bnds = Stdlib.wrapLCLayer(doc, layer, _ftn);

  return bnds;
};

Stdlib.appendMaskToSelection = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
    desc.putReference(cTID("null"), ref);
    desc.putBoolean(cTID("MkVs"), false);
    executeAction(cTID("slct"), desc, DialogModes.NO );

    desc = new ActionDescriptor();
    ref = new ActionReference();
    ref.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
    desc.putReference(cTID("null"), ref );

    var cref = new ActionReference();
    cref.putProperty(cTID("Chnl"), cTID("fsel"));
    desc.putReference(cTID("T   "), cref);
    executeAction(cTID("Add "), desc, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};


//
// link/unlink the image and mask
//
Stdlib.isLayerMaskLinked = function(doc, layer) {
  var desc = Stdlib.getLayerDescriptor(doc, layer);
  return (desc.hasKey(cTID("Usrs")) && desc.getBoolean(cTID("Usrs")));
};

Stdlib._linkMask = function(doc, layer, linkOn) {
  function _ftn() {
    var desc = new ActionDescriptor();

    var lref = new ActionReference();
    lref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    desc.putReference(cTID("null"), lref);

    var ldesc = new ActionDescriptor();
    ldesc.putBoolean(cTID("Usrs"), linkOn);

    desc.putObject(cTID("T   "), cTID("Lyr "), ldesc);
    executeAction(cTID("setd"), desc, DialogModes.NO);
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.unlinkLayerMask = function(doc, layer) {
  Stdlib._linkMask(doc, layer, false);
};
Stdlib.unlinkMask = Stdlib.unlinkLayerMask;

Stdlib.linkLayerMask = function(doc, layer) {
  Stdlib._linkMask(doc, layer, true);
};
Stdlib.linkMask = Stdlib.linkLayerMask;

Stdlib.unlinkSelectedLayers = function(doc) {
  // Stdlib.doMenuItem(sTID("unlinkSelectedLayers"));
  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
  desc.putReference( cTID('null'), ref );
  executeAction( sTID('unlinkSelectedLayers'), desc, DialogModes.NO );
};
Stdlib.unlinkLayers = function(doc, layers) {
  for (var i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var v = layer.visibile;
    layer.unlink();
    layer.visibile = v;
  }
};
Stdlib.linkSelectedLayers = function(doc) {
  // Stdlib.doMenuItem(sTID("linkSelectedLayers"));

  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
  desc.putReference( cTID('null'), ref );
  executeAction( sTID('linkSelectedLayers'), desc, DialogModes.NO );
};
Stdlib.linkLayers = function(doc, layers) {
  var base = layers[0];
  base.unlink();
  for (var i = 1; i < layers.length; i++) {
    var layer = layers[i];
    var v = layer.visible;
    layer.unlink();
    layer.link(base);
    layer.visible = v;
  }
};

Stdlib.selectLinkedLayers = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    var desc = new ActionDescriptor();
    executeAction(sTID("selectLinkedLayers"), desc, DialogModes.NO);
  }

  Stdlib.wrapLC(doc, _ftn);
};
Stdlib.getLinkedLayers = function(doc, layer) {
  var selLayers;
  selLayers = layer.linkedLayers.slice(0);

  if (selLayers) {
    selLayers.unshift(layer);

    var layers = [];
    var allLayers = Stdlib.getLayersList(doc);
    for (var i = 0; i < allLayers.length; i++) {
      var l = allLayers[i];
      if (selLayers.contains(l)) {
        layers.push(l);
      }
    }
    selLayers = layers;

  } else {
    selLayers = [layer];
  }
  return selLayers;
};

Stdlib.getSelectedLayers = function(doc, layerSets) {
  var layers = Stdlib.getLayersList(doc, undefined, layerSets);
  var visible = [];
  var selLayers = [];

  if (isCS() || isPS7()) {
    return [ doc.activeLayer ];
  }

  if (doc.layers.length == 1 && Stdlib.hasBackgroundLayer(doc)) {
    return [ doc.backgroundLayer ];
  }

  for (var i = 0; i < layers.length; i++) {
    var l = layers[i];
    visible[i] = l.visible;
    l.visible = false;
  }
  Stdlib.showSelectedLayers(doc);
  for (var i = 0; i < layers.length; i++) {
    var l = layers[i];
    if (l.visible) {
      selLayers.push(l);
    }
    l.visible = visible[i];
  }

  return selLayers;
};

// Stdlib.insertImageIntoMask(doc, doc.activeLayer, "/c/tmp/1.jpg");

Stdlib.insertImageIntoMask = function(doc, layer, file, fit) {
  if (!Stdlib.hasLayerMask(doc, layer)) {
    Error.runtimeError(9001, "A Layer mask is required for this operation.");
  }

  Stdlib.selectMaskChannel(doc, layer);
  Stdlib.insertImageIntoSelection(doc, layer, file, fit);
  doc.selection.deselect();
};

Stdlib.insertImageIntoSelection = function(doc, layer, im, fit) {
  var imageDoc;
  var imageFile;

  if (im instanceof Document) {
    imageDoc = im;
  } else {
    imageFile = Stdlib.convertFptr(im);
  }

  if (fit == undefined) fit = true;

  if (!Stdlib.hasSelection(doc)) {
    Error.runtimeError(8152); // "A selection is required for this operation.")
  }

  if (!imageDoc) {
    if (!imageFile.exists) {
      alert('Image ' + imageFile + ' does not exist.');
      return;
    }
    imageDoc = app.open(imageFile);

  } else {
    app.activeDocument = imageDoc;
    imageDoc = imageDoc.duplicate();
  }

//   imageDoc.flatten();

  app.activeDocument = doc;

  var ru = app.preferences.rulerUnits;
  try {
    app.preferences.rulerUnits = Units.PIXELS;

    var lname = layer.name;

    // XXX app.activeDocument = doc;

    var bnds = Stdlib.getSelectionBounds(doc);

    // resize the image doc based on the selection bounds
    var width = bnds[2] - bnds[0];
    var height = bnds[3] - bnds[1];

    if (fit) {
      // change the res
      app.activeDocument = imageDoc;
      imageDoc.resizeImage(undefined, undefined, doc.resolution,
                           ResampleMethod.NONE);
      Stdlib.fitImage(imageDoc, width, height);

    } else {
      // fit to the shortest side (image will crop)
      var dwidth = imageDoc.width.value;
      var dheight = imageDoc.height.value;
    
      var ratio = height/width;
      var dratio = dheight/dwidth;
      
      if (dratio > ratio) {
        height = undefined;
      } else {
        width = undefined;
      }
      app.activeDocument = imageDoc;
      imageDoc.resizeImage(width, height, doc.resolution,
                           ResampleMethod.BICUBIC);
    }
    
    imageDoc.selection.selectAll();
    if (imageDoc.layers.length > 1) {
      imageDoc.selection.copy(true);
    } else {
      imageDoc.selection.copy();
    }

    app.activeDocument = doc;
    doc.activeLayer = layer;

    var hasStyles = Stdlib.hasLayerStyles(doc, layer);
    if (hasStyles) {
      Stdlib.copyStyles(doc);
    }

    if (!Stdlib.hasSelection(doc)) {
      Stdlib.selectBounds(doc, bnds);
    }

    Stdlib.pasteInto(doc);
    layer.remove();
    layer = doc.activeLayer;
    layer.name = lname;

    if (hasStyles) {
      Stdlib.pasteStyles(doc);
    }

  } catch (e) {
    alert("Internal error: " + e + '@' + e.line);

  } finally {
    app.preferences.rulerUnits = ru;
    try { imageDoc.close(SaveOptions.DONOTSAVECHANGES); } catch (e) {}
  }
};

Stdlib.insertImageIntoSelectionAsSmartObject = function(doc, layer, im, fit) {
  app.activeDocument = doc;
  doc.activeLayer = layer;
  var imageFile = Stdlib.convertFptr(im);

  if (fit == undefined) fit = true;

  if (!Stdlib.hasSelection(doc)) {
    Error.runtimeError(8152); // "A selection is required for this operation."
  }

  if (!imageFile.exists) {
    Error.runtimeError(48); // 'Image ' + imageFile + ' does not exist.'
  }

  var ru = app.preferences.rulerUnits;
  var rez = doc.resolution;

  try {
    if (rez != 72) {
      doc.resizeImage(undefined, undefined, 72, ResampleMethod.NONE);
    }

    app.preferences.rulerUnits = Units.PIXELS;

    var hasStyles = Stdlib.hasLayerStyles(doc, layer);
    if (hasStyles) {
      Stdlib.copyStyles(doc, layer);
    }

    var lname = layer.name;

    var bnds = Stdlib.getSelectionBounds(doc);

    var imageLayer; // = doc.artLayers.add();
    imageLayer = Stdlib.placeImage(doc, layer, imageFile);

    // resize the image doc based on the selection bounds
    var width = bnds[2] - bnds[0];
    var height = bnds[3] - bnds[1];

    var lbnds = Stdlib.getLayerBounds(doc, imageLayer);
    var lw = lbnds[2] - lbnds[0];
    var lh = lbnds[3] - lbnds[1];

    var ratio = height/width;
    var lratio = lh/lw;


    if (fit || fit.toString().toLowerCase() == 'fit') {
      // change the res
      // XXX app.activeDocument = imageDoc;
//       imageDoc.resizeImage(undefined, undefined, doc.resolution,
//                            ResampleMethod.NONE);
//       Stdlib.fitImage(imageDoc, width, height);

    } else {
      // fit to the shortest side (image will crop)

      var prc = 100 * (bnds[2]-bnds[0])/lw;
      
      if (dratio > ratio) {
        height = undefined;
      } else {
        width = undefined;
      }
      app.activeDocument = imageDoc;
      imageDoc.resizeImage(width, height, doc.resolution,
                           ResampleMethod.BICUBIC);
    }

    layer.resize(prc, prc);

    var deltaX = bnds[0]-lbnds[0];
    var deltaY = bnds[1]-lbnds[1];

    //Stdlib.mergeLayers(doc, imageLayer);
    
    if (hasStyles) {
      Stdlib.pasteStyles(doc);
    }
    $.level = lvl;

  } catch (e) {
    alert("Internal error: " + e + '@' + e.line);

  } finally {
    app.preferences.rulerUnits = ru;
    if (rez != 72) {
      doc.resizeImage(undefined, undefined, rez, ResampleMethod.NONE);
    }
  }
};

Stdlib.resizeCanvas = function(doc, w, h, color, relative) {
  var hsb = color.hsb;
  var desc168 = new ActionDescriptor();
  if (toBoolean(relative)) {
    desc168.putBoolean(cTID('Rltv'), toBoolean(relative));
  }
  desc168.putUnitDouble( cTID('Wdth'), cTID('#Pxl'), w);
  desc168.putUnitDouble( cTID('Hght'), cTID('#Pxl'), h);
  desc168.putEnumerated( cTID('Hrzn'), cTID('HrzL'), cTID('Cntr') );
  desc168.putEnumerated( cTID('Vrtc'), cTID('VrtL'), cTID('Cntr') );
  if (color) {
    desc168.putEnumerated( sTID('canvasExtensionColorType'),
                           sTID('canvasExtensionColorType'),
                           cTID('Clr ') );
    var desc169 = new ActionDescriptor();
    desc169.putUnitDouble( cTID('H   '), cTID('#Ang'), hsb.hue );
    desc169.putDouble( cTID('Strt'), hsb.saturation );
    desc169.putDouble( cTID('Brgh'), hsb.brightness );
    desc168.putObject( sTID('canvasExtensionColor'), cTID('HSBC'), desc169 );
  }
  executeAction( cTID('CnvS'), desc168, DialogModes.NO );
};

_ResizeOptions = function() {
  var self = this;

  self.width = 1024;
  self.weight = 1024;
  self.constrain = true;
  self.scaleStyles = true;
  self.resample = true;
  self.resampleMethod = ResampleMethod.BICUBIC;
};

Stdlib._resizeImage = function(doc, opts) {

  //
  function _ftn() {
    // resample, constrain
    var desc71 = new ActionDescriptor();
    desc71.putUnitDouble( cTID('Wdth'), cTID('#Pxl'), opts.width);
    desc71.putBoolean( sTID('scaleStyles'), opts.scaleStyles );
    desc71.putBoolean( cTID('CnsP'), true );
    desc71.putEnumerated( cTID('Intr'), cTID('Intp'), cTID('Bcbc') );
    executeAction( cTID('ImgS'), desc71, DialogModes.NO );

    // no resample
    var id307 = charIDToTypeID( "ImgS" );
    var desc77 = new ActionDescriptor();
    var id308 = charIDToTypeID( "Wdth" );
    var id309 = charIDToTypeID( "#Rlt" );
    desc77.putUnitDouble( id308, id309, 477.217685 );
    executeAction( id307, desc77, DialogModes.NO );

    // resample, no constrain, no scale
    var desc84 = new ActionDescriptor();
    desc84.putUnitDouble( cTID('Wdth'), cTID('#Pxl'), 1024.000000 );
    desc84.putUnitDouble( cTID('Hght'), cTID('#Rlt'), 468.936026 );
    desc84.putEnumerated( cTID('Intr'), cTID('Intp'), cTID('Bcbc') );
    executeAction( cTID('ImgS'), desc84, DialogModes.NO );

  }

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.PSfitImage = function(width, height) {
  var desc = new ActionDescriptor();
  desc.putUnitDouble( cTID('Wdth'), cTID('#Pxl'), width );
  desc.putUnitDouble( cTID('Hght'), cTID('#Pxl'), height );
    
  var fitId = sTID('3caa3434-cb67-11d1-bc43-0060b0a13dc4');
  return executeAction(fitId , desc, DialogModes.NO );
};
Stdlib.fitImage = function(doc, width, height, resample) {
  if (false) {
  }

  if (true) {
    Stdlib.resizeImage(doc, width, height, true, resample);
  }
};

Stdlib.resizeImage = function(doc, width, height, constrained, resample) {
  function _ftn() {
    if (constrained == undefined) {
      constrained = true;
    }

    if (resample == undefined) {
      resample = ResampleMethod.BICUBIC;
    }

    var w = doc.width.value;
    var h = doc.height.value;
    var rez = doc.resolution;

    if (w == width && h == height) {
      return;
    }
    doc.resizeImage(undefined, undefined, 72, ResampleMethod.NONE);

    if (constrained) {
      var dratio = h/w;
      var ratio = height/width;

      if (dratio > ratio) {
        width = undefined;
      } else {
        height = undefined;
      }
    }

    doc.resizeImage(width, height, 72, resample);
    
    doc.resizeImage(undefined, undefined, rez, ResampleMethod.NONE);
  };

  var ru = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;

  Stdlib.wrapLC(doc, _ftn);

  app.preferences.rulerUnits = ru;
};


//
//================================ Selections ===============================
//

//
// Crop on the current selection
//
Stdlib.crop = function(doc) {
  Stdlib.doEvent(doc, "Crop"); // "Crop";
};


Stdlib.cropBounds = function(doc, bnds) {
  Stdlib.selectBounds(doc, bnds);
  Stdlib.crop(doc);
  doc.selection.deselect();
};

//
// Do an interactive crop. Use the bounds specified or the current selection
// if no bounds are specified
//
Stdlib.interactiveCrop = function(doc, bnds) {
  var cropDesc = new ActionDescriptor();
  var toDesc = new ActionDescriptor();
  toDesc.putUnitDouble( PSKey.Top, PSUnit.Pixels, bnds[0] );
  toDesc.putUnitDouble( PSKey.Left, PSUnit.Pixels, bnds[1] );
  toDesc.putUnitDouble( PSKey.Bottom, PSUnit.Pixels, bnds[2] );
  toDesc.putUnitDouble( PSKey.Right, PSUnit.Pixels, bnds[3] );
  cropDesc.putObject( PSKey.To, PSClass.Rectangle, toDesc );
  cropDesc.putUnitDouble( PSKey.Angle, PSUnit.Angle, 0.000000 );
  cropDesc.putUnitDouble( PSKey.Width, PSUnit.Pixels, 0.000000 );
  cropDesc.putUnitDouble( PSKey.Height, PSUnit.Pixels, 0.000000 );
  cropDesc.putUnitDouble( PSKey.Resolution, PSUnit.Density, 0.000000 );

  try {
    executeAction( PSEvent.Crop, cropDesc, DialogModes.ALL );
  } catch (e) {
    if (e.number != 8007) { // if not "User cancelled"
      throw e;
    }
    return false;
  }
  return true;
};

//
// Transform the current selection
//
Stdlib.transformSelection = function(doc) {
  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putProperty(cTID("Chnl"), cTID("fsel"));
  desc.putReference(cTID("null"), ref);
  executeAction(cTID("Trnf"), desc, DialogModes.ALL);
};

// ????
Stdlib.freeTransformSelection = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Mn  "), cTID("MnIt"), cTID("FrTr"));
    desc.putReference(cTID("null"), ref);
    app.executeAction(cTID("slct"), desc, DialogModes.NO );
//     app.executeAction(cTID("FrTr"),
//                              new ActionDescriptor(),
//                              DialogModes.NO);
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};


Stdlib.magicWand = function(doc, x, y, tol, aa, cntg) {
  function _ftn() {
    var desc = new ActionDescriptor();

    // Selection
    var ref = new ActionReference();
    ref.putProperty(cTID("Chnl"), cTID("fsel"));
    desc.putReference(cTID("null"), ref);

    // Point
    var pdesc = new ActionDescriptor();
    pdesc.putUnitDouble(cTID("Hrzn"), cTID("#Pxl"), x);
    pdesc.putUnitDouble(cTID("Vrtc"), cTID("#Pxl"), y);
    desc.putObject(cTID("T   "), cTID("Pnt "), pdesc);

    // Tolerance
    if (tol != undefined) {
      desc.putInteger(cTID("Tlrn"), tol);
    }

    // Anti-alias
    desc.putBoolean(cTID("AntA"), !!aa);

    // Contiguous
    desc.putBoolean(cTID("Cntg"), !!cntg);
    
    executeAction(cTID("setd"), desc, DialogModes.NO);
  }

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.selectSimilar = function(doc, tol, aa) {
  function _ftn() {
    var desc = new ActionDescriptor();

    // Selection
    var ref = new ActionReference();
    ref.putProperty(cTID("Chnl"), cTID("fsel"));
    desc.putReference(cTID("null"), ref);

    // Tolerance
    if (tol != undefined) {
      desc.putInteger(cTID("Tlrn"), tol);
    }

    // Anti-alias - defaults to true
    desc.putBoolean(cTID("AntA"), aa != false);

    executeAction(cTID("Smlr"), desc, DialogModes.NO);
  }

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.selectBounds = function(doc, b, type, feather, antialias) {
  function _ftn () {
    doc.selection.select([[ b[0], b[1] ],
                          [ b[2], b[1] ],
                          [ b[2], b[3] ],
                          [ b[0], b[3] ]],
                         type, feather, antialias);
  }
  if (feather == undefined) {
    feather = 0;
  }
  if (antialias == undefined) {
    antialias = false;
  }
  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.computeSelectionBoundsLS = function(doc) {
  var bnds = [];
  var ru = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;

  var oldLayer = doc.activeLayer;
  try {
    var layerSetRef = doc.layerSets.add();
    var layerRef = layerSetRef.artLayers.add();
    doc.activeLayer = layerRef;
    doc.selection.fill( app.foregroundColor);
    bnds = layerSetRef.bounds;
    layerSetRef.remove();
  } finally {
    doc.activeLayer = oldLayer;
    app.preferences.rulerUnits = ru;
  }

  return bnds;
};

Stdlib.computeSelectionBounds = function(doc) {
  var bnds = [];

  var dbgLevel = $.level;
  try {
    $.level = 0;
    doc.selection.makeWorkPath();
  } catch (e) {
    $.level = dbgLevel;
    return bnds;
  }
  $.level = dbgLevel;

  try {
    var pis = doc.pathItems; // should be doc.pathItems.getByName("WorkPath");
    if (pis.length > 0) {
      for (var i = 0; i < pis.length; i++) {
        var spis = pis[i].subPathItems;
        for (var j = 0; j < spis.length; j++) {
          var pps = spis[j].pathPoints;
          for (var k = 0; k < pps.length; k++) {
            var anchor = pps[k].anchor;
            if (bnds.length == 0) {
              bnds[0] = bnds[2] = anchor[0];
              bnds[1] = bnds[3] = anchor[1];
            } else {
              if (anchor[0] < bnds[0]) {
                bnds[0] = anchor[0];
              } else if (anchor[0] > bnds[2]) {
                bnds[2] = anchor[0];
              }
              if (anchor[1] < bnds[1]) {
                bnds[1] = anchor[1];
              } else if (anchor[1] > bnds[3]) {
                bnds[3] = anchor[1];
              }
            }
          }
        }
      }
    }
  } finally {
    Stdlib.undo();
  }

  return bnds;
};

Stdlib.computeSelectionBoundsPS7 = function(doc) {
  var bnds = [];

  Stdlib.makeWorkPath(doc);

  try {
    var pis = Stdlib.getPathItems(doc);

    for (var i = 0; i < pis.count; i++) {
      var spis = pis.getObjectValue(i).getList(sTID("subpathListKey"));
      var pps = spis.getObjectValue(0).getList(sTID('points'));
      
      for (var j = 0; j < pps.count; j++) {
        var anchorObj = pps.getObjectValue(j).getObjectValue(sTID("anchor"));
        var anchor = [anchorObj.getUnitDoubleValue(sTID('horizontal')),
                      anchorObj.getUnitDoubleValue(sTID('vertical'))];
        if (bnds.length == 0) {
          bnds[0] = bnds[2] = anchor[0];
          bnds[1] = bnds[3] = anchor[1];
        } else {
          if (anchor[0] < bnds[0]) {
            bnds[0] = anchor[0];
          } else if (anchor[0] > bnds[2]) {
            bnds[2] = anchor[0];
          }
          if (anchor[1] < bnds[1]) {
            bnds[1] = anchor[1];
          } else if (anchor[1] > bnds[3]) {
            bnds[3] = anchor[1];
          }
        }
      }
    }
  } finally {
    Stdlib.undo();
  }

  return bnds;
};

Stdlib.getSelectionBounds = function(doc) {
  function _ftn() {
    var l = doc.artLayers.add();

    doc.selection.fill(app.foregroundColor);
    
    var bnds = l.bounds;
    var hs = doc.historyStates;
  
    if (hs[hs.length-2].name == "Layer Order") {
      doc.activeHistoryState = hs[hs.length-4];
    } else {
      doc.activeHistoryState = hs[hs.length-3];
    }
  
    for (var i = 0; i < bnds.length; i++) {
      bnds[i] = bnds[i].value;
    }
    return bnds;
  }

  return Stdlib.wrapLCLayer(doc, doc.activeLayer, _ftn);
};

// assumes that 0,0 is a background pixel
Stdlib.selectBackground = function(doc, layer) {
  Stdlib.hideAllLayers(doc);
  layer.visible = true;
  Stdlib.magicWand(doc, 0, 0);
  Stdlib.selectSimilar(doc);
  doc.selection.invert();
};


Stdlib.hasSelection = function(doc) {
  var res = false;
  var as = doc.activeHistoryState;
  doc.selection.deselect();
  if (as != doc.activeHistoryState) {
    res = true;
    doc.activeHistoryState = as;
  }
  return res;
};

// This only returns one selected region. If the selection is disjoint,
// another function will have to be implemented
Stdlib.computeSelectionRegion = function(doc) {
  var bnds = [];

  var dbgLevel = $.level;
  try {
    $.level = 0;
    doc.selection.makeWorkPath();
  } catch (e) {
    $.level = dbgLevel;
    return bnds;
  }
  $.level = dbgLevel;

  try {
    var path = doc.pathItems["Work Path"];
    var subPathItems = path.subPathItems;

    for (var i = 0; i < subPathItems.length; i++) {
      var subPath = subPathItems[i];
      var points = subPath.pathPoints;
      for (var j = 0; j < points.length; j++) {
        var point = points[j];
        bnds.push(point.anchor);
      }
    }
  } finally {
    Stdlib.undo();
  }

  return bnds;
};

Stdlib.centerCanvasOnSelection = function(doc) {
  if (!Stdlib.hasSelection(doc)) {
    Error.runtimeError(8152); // "A selection is required for this operation."
  }

  var ru = app.preferences.rulerUnits;
  try {
    app.preferences.rulerUnits = Units.PIXELS;

    var bnds = Stdlib.getSelectionBounds(doc);
    var selX = (bnds[0]+bnds[2])/2;
    var selY = (bnds[1]+bnds[3])/2;

    var docX = doc.width.value/2;
    var docY = doc.height.value/2;

    doc.activeLayer.translate(docX-selX, docY-selY);
    doc.selection.translateBoundary(docX-selX, docY-selY);

  } finally {
    app.preferences.rulerUnits = ru;
  }
};

Stdlib.centerLayer = function(doc, layer) {
  var ru = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
  try {
    var bnds = Stdlib.getLayerBounds(doc, layer);
    var layerW = bnds[2]-bnds[0];
    var layerH = bnds[3]-bnds[1];
    var docW = doc.width.value;
    var docH = doc.height.value;
    var x = (docW/2) - (layerW/2);
    var y = (docH/2) - (layerH/2);
    var deltaX = x - bnds[0];
    var deltaY = y - bnds[1];

    layer.translate(deltaX, deltaY);

  } finally {
    app.preferences.rulerUnits = ru;
  }
};


//============================== Vector Mask ==========================

Stdlib._doVectorMask = function(doc, layer, prop, state) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    var desc54 = new ActionDescriptor();
    desc54.putBoolean( xTID(prop), state );
    desc.putObject( cTID('T   '), cTID('Lyr '), desc54 );
    executeAction( cTID('setd'), desc, DialogModes.NO );
  };

  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.disableVectorMask = function(doc, layer) {
  Stdlib._doVectorMask(doc, layer, 'vectorMaskEnabled', false );
};
Stdlib.enableVectorMask = function(doc, layer) {
  Stdlib._doVectorMask(doc, layer, 'vectorMaskEnabled', true);
};
Stdlib.unlinkVectorMask = function(doc, layer) {
  Stdlib._doVectorMask(doc, layer, 'vectorMaskLinked', false );
};
Stdlib.linkVectorMask = function(doc, layer) {
  Stdlib._doVectorMask(doc, layer, 'vectorMaskLinked', true );
};

Stdlib.hasVectorMask = function(doc, layer) {
  var lvl = $.level;
  $.level = 0;
  var rc = false;
  try {
    var st = doc.activeHistoryState;
    Stdlib.linkVectorMask(doc, layer);
    if (doc.activeHistoryState != st) {
      doc.activeHistoryState = st;
    }
    rc = true;
  } catch (e) {
  } finally {
    $.level = lvl;
  }

  return rc;
};

Stdlib.isVectorMaskEnabled = function(doc, layer) {
  var rc = false;

  if (Stdlib.hasVectorMask(doc, layer)) {
    try {
      var st = doc.activeHistoryState;
      Stdlib.enableVectorMask(doc, layer);
      if (doc.activeHistoryState == st) {
        rc = true;
      } else {
        doc.activeHistoryState = st;
      }
    } catch (e) {
    } finally {
      $.level = lvl;
    }
  }

  return rc;
};

Stdlib.rasterizeVectorMask = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref );
    desc.putEnumerated( cTID('What'),
                        sTID('rasterizeItem'),
                        sTID('vectorMask') );
    executeAction( sTID('rasterizeLayer'), desc, DialogModes.NO );
  };

  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.selectVectorMask = function(doc, layer) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID('Path'), cTID('Path'), sTID('vectorMask'));
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('null'), ref);
    return executeAction(cTID('slct'), desc, DialogModes.NO);
  }
  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.deselectVectorMask = Stdlib.deselectActivePath;

Stdlib.loadVectorMaskSelection = function(doc, layer) {
  function _ftn() {
    var desc8 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putProperty( cTID('Chnl'), cTID('fsel') );
    desc8.putReference( cTID('null'), ref4 );
    var ref5 = new ActionReference();
    ref5.putEnumerated( cTID('Path'), cTID('Path'), sTID('vectorMask') );
    ref5.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    desc8.putReference( cTID('T   '), ref5 );
    desc8.putBoolean( cTID('AntA'), true );
    desc8.putUnitDouble( cTID('Fthr'), cTID('#Pxl'), 0.000000 );
    executeAction( cTID('setd'), desc8, DialogModes.NO );
  }
  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};


Stdlib.rotateVectorMask = function(doc, layer, angle) {
  function _ftn() {
    var desc89 = new ActionDescriptor();
        var ref67 = new ActionReference();
        ref67.putEnumerated( cTID('Path'), cTID('Ordn'), cTID('Trgt') );
    desc89.putReference( cTID('null'), ref67 );
    desc89.putEnumerated( cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
        var desc90 = new ActionDescriptor();
        desc90.putUnitDouble( cTID('Hrzn'), cTID('#Pxl'), -0.000000 );
        desc90.putUnitDouble( cTID('Vrtc'), cTID('#Pxl'), 0.000000 );
    desc89.putObject( cTID('Ofst'), cTID('Ofst'), desc90 );
    desc89.putUnitDouble( cTID('Angl'), cTID('#Ang'), angle );
    executeAction( cTID('Trnf'), desc89, DialogModes.NO );
  }
  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.selectionFromVectorMask = function(doc, layer, aa, feather) {
  if (!feather) {
    feather = 0.0;
  }
  aa = !!aa;
  function _ftn() {
    var desc = new ActionDescriptor();
    var selref = new ActionReference();
    selref.putProperty(cTID('Chnl'), cTID('fsel'));
    desc.putReference(cTID('null'), selref);
    var vmref = new ActionReference();
    vmref.putEnumerated(cTID('Path'), cTID('Path'), sTID('vectorMask'));
    vmref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('T   '), vmref);
    desc.putBoolean(cTID('AntA'), aa);
    desc.putUnitDouble(cTID('Fthr'), cTID('#Pxl'), feather);
    executeAction(cTID('setd'), desc, DialogModes.NO);
  }
  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.getVectorMaskBounds = function(doc, layer) {
  function _ftn() {
    var st = doc.activeHistoryState;
    Stdlib.selectionFromVectorMask(doc, layer);
    var bnds = Stdlib.getSelectionBounds(doc);
    doc.activeHistoryState = st;
    return bnds;
  }

//   Stdlib.undo(doc);
//   //executeAction(cTID("undo"), new ActionDescriptor(), DialogModes.NO);

  var bnds = Stdlib.wrapLCLayer(doc, layer, _ftn);

  return bnds;
};

Stdlib.createSolidFillLayer = function(doc, color) {
  if (!color) {
    color = Stdlib.createRGBColor(0, 0, 0);
  }
  function _ftn() {
    var desc = new ActionDescriptor();
    var clref = new ActionReference();
    clref.putClass(sTID('contentLayer'));
    desc.putReference(cTID('null'), clref);
    var tdesc = new ActionDescriptor();
    var scldesc = new ActionDescriptor();
    var rgbdesc = new ActionDescriptor();
    rgbdesc.putDouble(cTID('Rd  '), color.rgb.red);
    rgbdesc.putDouble(cTID('Grn '), color.rgb.green);
    rgbdesc.putDouble(cTID('Bl  '), color.rgb.blue);
    scldesc.putObject(cTID('Clr '), cTID('RGBC'), rgbdesc);
    tdesc.putObject(cTID('Type'), sTID('solidColorLayer'), scldesc);
    desc.putObject(cTID('Usng'), sTID('contentLayer'), tdesc);
    executeAction(cTID('Mk  '), desc, DialogModes.NO);
  }
  Stdlib.wrapLC(doc, _ftn);
  return doc.activeLayer;
};

Stdlib.createVectorMaskFromCurrentPath = function(doc, layer) {

  function _ftn(doc) {
    var desc = new ActionDescriptor();
    var ref135 = new ActionReference();
    ref135.putClass( cTID('Path') );
    desc.putReference( cTID('null'), ref135 );
    var ref136 = new ActionReference();
    ref136.putEnumerated( cTID('Path'), cTID('Path'), sTID('vectorMask') );
    desc.putReference( cTID('At  '), ref136 );
    var ref137 = new ActionReference();
    ref137.putEnumerated( cTID('Path'), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('Usng'), ref137 );
    executeAction( cTID('Mk  '), desc, DialogModes.NO );
  };

  Stdlib.wrapLC(doc, _ftn);
};


//
//================================ Paths ===============================
//
// PS7 doesn't have one of these so we provide one here...
//
Stdlib.makeWorkPath = function(doc, tolerance) {
  function _ftn(doc) {
    var desc = new ActionDescriptor();

    var pref = new ActionReference();
    pref.putClass(cTID("Path"));
    desc.putReference(cTID("null"), pref );

    var sref = new ActionReference();
    sref.putProperty( cTID("csel"), cTID("fsel"));
    desc.putReference(cTID("From"), sref );
    
    desc.putUnitDouble(cTID("Tlrn"), cTID("#Pxl"), Stdlib.makeWorkPath.tolerance);

    executeAction(cTID("Mk  "), desc, DialogModes.NO);
  }

  Stdlib.makeWorkPath.tolerance = (tolerance != undefined) ? tolerance : 2.0;

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.makePathActive = function(doc, pathName) {
  function _ftn() {
    var desc91 = new ActionDescriptor();
    var ref82 = new ActionReference();
    ref82.putName( cTID('Path'), pathName );
    desc91.putReference( cTID('null'), ref82 );
    executeAction( cTID('slct'), desc91, DialogModes.NO );
  };

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.makeSelectionFromPath = function(doc, pathName) {
  function _ftn() {
    var desc89 = new ActionDescriptor();
    var ref79 = new ActionReference();
    ref79.putProperty( cTID('Chnl'), cTID('fsel') );
    desc89.putReference( cTID('null'), ref79 );
    var ref80 = new ActionReference();
    ref80.putEnumerated( cTID('Path'), cTID('Ordn'), cTID('Trgt') );
    desc89.putReference( cTID('T   '), ref80 );
    desc89.putBoolean( cTID('AntA'), true );
    desc89.putUnitDouble( cTID('Fthr'), cTID('#Pxl'), 0.000000 );
    executeAction( cTID('setd'), desc89, DialogModes.NO );
  };
  
  Stdlib.makePathActive(doc, pathName);
  Stdlib.wrapLC(doc, _ftn);
};


// if (!Selection.prototype.makeWorkPath) {
// Selection.prototype.makeWorkPath = function(tol) {
//   Stdlib.makeWorkPath(this, tol);
// };
// }

Stdlib.getPathItems = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putEnumerated(sTID('path'), sTID('ordinal'), sTID('targetEnum'));
    var pathObj = executeActionGet(ref);
    var pathContents = pathObj.getObjectValue(sTID('pathContents'));
    return pathContents.getList(sTID('pathComponents'));
  }
  return Stdlib.wrapLC(doc, _ftn);
};

//
// deselect the active path. just a piece of UI fluff
//
Stdlib.deselectActivePath = function(doc) {
  function _ftn() {
    var ref = new ActionReference();
    ref.putClass(cTID("Path"));

    var desc = new ActionDescriptor();
    desc.putReference(cTID("null"), ref);
    executeAction( cTID( "Dslc" ), desc, DialogModes.NO );
  };
  Stdlib.wrapLC(doc, _ftn);
};

//
//================================= Actions ==================================
//
// attempt to execute an action. return true if OK, false if not available
// re-throws unknown exceptions.
//
Stdlib.runAction = function(atn, atnSet) {
  try {
    app.doAction(atn, atnSet);
  } catch (e) {
    if (e.toString().match(/action.+is not currently available/)) {
      return false;
    } else {
      throw e;
    }
  }
  return true;
};
runAction = Stdlib.runAction;

Stdlib.hasAction = function(atn, atnSet) {
  var asetDesc;
  var rc = false;
  var i = 1;

  var asMatches = [];
  
  while (true) {
    var ref = new ActionReference();
    ref.putIndex(cTID("ASet"), i);
    var desc;
    try {
      desc = executeActionGet(ref);
    } catch (e) {
      break;    // all done
    }
    if (desc.hasKey(cTID("Nm  ")) &&
        desc.getString(cTID("Nm  ")) == atnSet) {
      asetDesc = desc;
      asMatches.push({ index: i, desc: desc});
      //break;
    }
    i++;
  }

  if (asMatches.length == 0) {
    return false;
  }

  for (var i = 0; i < asMatches.length; i++) {
    var asmatch = asMatches[i];
    var asetIndex = asmatch.index;
    asetDesc = asmatch.desc;

    if (!asetDesc.hasKey(cTID("NmbC"))) {
      continue;
    }
    var max = asetDesc.getInteger(cTID("NmbC"));
    for (var j = 1; j <= max; j++) {
      var ref = new ActionReference();
      ref.putIndex(cTID("Actn"), j);           // Action index
      ref.putIndex(cTID("ASet"), asetIndex);   // ActionSet index
        
      var desc;
      try {
        desc = executeActionGet(ref);
      } catch (e) {
        break;   // all done
      }
      if (desc.hasKey(cTID("Nm  ")) &&
          desc.getString(cTID("Nm  ")) == atn) {
        return true;
      }
    }
  }
  return rc;
};

Stdlib.deleteActionStep = function(index, atn, atnSet) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex(cTID("Cmnd"), index);
    ref.putName(cTID("Actn"), atn);
    ref.putName(cTID("ASet"), atnSet);
    desc.putReference(cTID("null"), ref);
    executeAction(cTID("Dlt "), desc, DialogModes.NO);
  }

  _ftn();
};
Stdlib.deleteAction = function(atn, atnSet) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName(cTID("Actn"), atn);
    ref.putName(cTID("ASet"), atnSet);
    desc.putReference(cTID("null"), ref);
    executeAction(cTID("Dlt "), desc, DialogModes.NO);
  }

  _ftn();
};
Stdlib.deleteActionSet = function(atnSet) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName(cTID("ASet"), atnSet);
    desc.putReference(cTID("null"), ref);
    executeAction(cTID("Dlt "), desc, DialogModes.NO);
  }

  try {
    _ftn();
  } catch (e) {
    // if this action is the currently executing action,
    // we can't delete it, so we return false. All other
    // exceptions are rethrown
    if (!e.toString().match(/action that is playing or recording/)) {
      throw e;
    }
    return false;
  }
  return true;
};


Stdlib.createDroplet = function(atn, atnSet, fptr) {
  debugger;

  fptr = Stdlib.convertFptr(fptr);

  function _ftn() {
    var desc = new ActionDescriptor();
    desc.putPath(cTID('In  '), fptr);
    var ref = new ActionReference();
    ref.putName(cTID('Actn'), atn);
    ref.putName(cTID('ASet'), atnSet);
    desc.putReference(cTID('Usng'), ref);
    executeAction(cTID('CrtD'), desc, DialogModes.NO);
  }

  _ftn();
};


//
//  f = File.openDialog(); Stdlib.loadActionFile(f);
//
Stdlib.loadActionFile = function(file) {
  Stdlib.btExec('app.load(new File("' + file.absoluteURI + '"));');
};

//
// Stdlib.loadActionFiles(folder.getFiles("*.atn"))'
//
Stdlib.loadActionFiles = function(files) {
  var str = '';

  for (var i = 0; i < files.length; i++) {
    var file = files[0];
    str += 'app.load(new File("' + file.absoluteURI + '"));\n'
  }
  Stdlib.btExec(str);
};

Stdlib.getActionSets = function() {
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
      break;    // all done
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

Stdlib.getActions = function(aset) {
  var i = 1;
  var names = [];

  if (!aset) {
    throw Error.runtimeError(9001, "Action set must be specified");
  }
  
  while (true) {
    var ref = new ActionReference();
    ref.putIndex(cTID("ASet"), i);
    var desc;
    try {
      desc = executeActionGet(ref);
    } catch (e) {
      names = undefined;
      break;    // all done
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

Stdlib.backupActionsPalette = function(file) {
  if (file) {
    file = Stdlib.convertFptr(file);
  } else {
    file = File.saveDialog("Save Backup ActionsPalette",
                           "PSP Files:*.PSP,All files:*");
  }

  if (file) {
    if (!app.preferencesFolder) {
      Error.runtimeError(9001, "\rNo preferencesFolder property found. " +
                         "\rUnable to complete request.");
    }
    var paletteFile = new File(app.preferencesFolder +
                               "/Actions Palette.psp");
    if (!paletteFile.exists) {
      Error.runtimeError(9001, "Unable to locate palette file.");
    }
    paletteFile.copy(file) || throwFileError(file, "Copy failed ");
  }
};

//
// Very dangerous unless you _want_ to empty your Actions Palette.
//
Stdlib.deleteAllActionSets = function(confirmDelete) {
  if (confirmDelete != false) {
    if (!confirm("Do you really want to empty your Actions Palette?")) {
      return;
    }
  }

  var sets = Stdlib.getActionSets();

  for (var i = sets.length-1; i >= 0; i--) {
    Stdlib.deleteActionSet(sets[i].name);
  }
};

Stdlib.setActionPlaybackOption = function(opt, arg) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putProperty(cTID("Prpr"), cTID("PbkO"));
    ref.putEnumerated(cTID("capp"), cTID("Ordn"), cTID("Trgt")); 
    desc.putReference(cTID("null"), ref );
    var pdesc = new ActionDescriptor();
    pdesc.putEnumerated(sTID("performance"), sTID("performance"), sTID(opt));
    if (opt == "pause" && arg != undefined) {
      pdesc.putInteger(sTID("pause"), parseInt(arg));
    }
    desc.putObject(cTID("T   "), cTID("PbkO"), pdesc );
    executeAction(cTID("setd"), desc, DialogModes.NO);
  }
  _ftn();
};
Stdlib.setPlaybackAccelerated = function() {
  Stdlib.setActionPlaybackOption("accelerated");
};
Stdlib.setPlaybackStepByStep = function() {
  Stdlib.setActionPlaybackOption("stepByStep");
};
Stdlib.setPlaybackPaused = function(delaySec) {
  Stdlib.setActionPlaybackOption("pause", delaySec);
};

Stdlib.getApplicationDescriptor = function() {
  var ref = new ActionReference();
  ref.putEnumerated(cTID("capp"), cTID("Ordn"), cTID("Trgt")); 
  executeActionGet(ref);
};

Stdlib.getDescriptorKeys = function(desc) {
  var keys = [];

  for (var i = 0; i < desc.count; i++) {
    keys.push(desc.getKey(i));
  }
  return keys;
};
Stdlib.getDescriptorKeySyms = function(desc) {
  var keys = [];

  for (var i = 0; i < desc.count; i++) {
    keys.push(id2char(desc.getKey(i)));
  }
  return keys;
};

Stdlib.getDescriptorKeyNames = function(desc) {
  var keys = [];

  for (var i = 0; i < desc.count; i++) {
    keys.push(PSConstant.reverseNameLookup(desc.getKey(i)));
  }
  return keys;
};

//
//=============================== DataSets ===================================
//
// Thanks to mhale for these
//
Stdlib.fileImportDataSets = function(dsfile) {
  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putClass(sTID("dataSetClass"));
  desc.putReference(cTID("null"), ref);
  desc.putPath(cTID("Usng"), new File(dsfile));
  desc.putEnumerated(cTID("Encd"),
                     sTID("dataSetEncoding"),
                     sTID("dataSetEncodingAuto"));
  desc.putBoolean(sTID("eraseAll"), true);
  desc.putBoolean(sTID("useFirstColumn"), false);
  executeAction(sTID("importDataSets"), desc, DialogModes.NO);
};

Stdlib.applyDataSet = function(setName) {
  var desc = new ActionDescriptor();
  var setRef = new ActionReference();
  setRef.putName(sTID("dataSetClass"), setName);
  desc.putReference(cTID("null"), setRef);
  executeAction(cTID("Aply"), desc, DialogModes.NO);
};

//
//================================= Batch =====================================
//
//
// This is an alternative interface to Batch (instead of app.batch)
// It has the ability to:
//    specify text fragments as file name components. 
//    recurse into subfolders
//    use a file mask/regexp to specify files
//
//  src     - a File, Folder, or an Array of Files and Folders
//  act     - the Action name
//  actset  - the ActionSet name
//  opts    - BatchOptions with support for text file naming components
//  mask    - either a simple mask ("*.jpg"), a function mask
//            (see Folder.getFiles()) or a Regular Expression (/\.jpe?g$/i)
//  recurse - if true, recurse into subdirectories 
//
Stdlib.batch = function(src, act, actset, opts, mask, recurse) {
  if (isCS() || isPS7()) {
    Error.runtimeError(9001, "Batch is only available in CS2+.");
  }

  var desc = new ActionDescriptor();

  if (src instanceof Array) {
    for (var i = 0; i < src.length; i++) {
      Stdlib.batch(src[i], act, actset, opts, mask, recurse);
      opts.startingSerial++;
    }
    return;
  }

  var subdirs;
  if (src instanceof Folder) {
    if (mask) {
      var files;
      if (recurse == true) {
        files = Stdlib.findFiles(src, mask);
      } else {
        files = Stdlib.getFiles(src, mask);
      }
      if (files.length > 0) {
        Stdlib.batch(files, act, actset, opts, mask, recurse);
      }
      return;
    }
    if (recurse == true) {
      subdirs = Stdlib.getFolders(src);
    }
  }

//   $.level = 1; debugger;
  desc.putPath(cTID("null"), src); // source

  if (opts.suppressProfile == true) {
    desc.putBoolean(sTID("suppressWarnings"), true);
  }
  if (opts.suppressOpen == true) {
    desc.putBoolean(sTID("suppressOpenOptions"), true);
  }

  var actref = new ActionReference();
  actref.putName(cTID("Actn"), act);
  actref.putName(cTID("ASet"), actset);
  desc.putReference(cTID("Usng"), actref);

  if (opts.overrideOpen == true) {
    desc.putBoolean(cTID("OvrO"), true);
  }
  
  if (opts.destination != BatchDestinationType.NODESTINATION) {
    desc.putPath(cTID("T   "), opts.destinationFolder);
  }

  var fileNaming;

  if (opts.destination == BatchDestinationType.FOLDER) {
    fileNaming = opts.fileNaming;

  } else if (opts.destination == BatchDestinationType.SAVEANDCLOSE) {
    fileNaming = [ FileNamingType.DOCUMENTNAMEMIXED,
                   FileNamingType.EXTENSIONLOWER ];
  }

  if (fileNaming) {
    if (fileNaming.length > 6) {
      Error.runtimeError(9001, "Too many BatchOptions.fileNaming components.");
    }
    var fnrdesc = new ActionDescriptor();
    var fnclist = new ActionList();
    
    for (var i = 0; i < opts.fileNaming.length; i++) {
      var namingComponent = opts.fileNaming[i];
      var fncdesc = new ActionDescriptor();
    
      if (typeof namingComponent == "string" ||
          namingComponent instanceof String) {
        fncdesc.putString(cTID("Txt "), opts.fileNaming[i]);
      } else {
        var mappedId = Stdlib.batch.map[namingComponent];
        fncdesc.putEnumerated(sTID("component"),
                              sTID("fileNamingComponent"),
                              mappedId);
      }
      fnclist.putObject(sTID("fileNamingComponents"), fncdesc);
    }

    fnrdesc.putList(sTID("fileNamingComponents"), fnclist);

    fnrdesc.putInteger(cTID("Strt"), opts.startingSerial);

    fnrdesc.putBoolean(cTID("Mcnt"), opts.macintoshCompatible);
    fnrdesc.putBoolean(cTID("Win "), opts.windowsCompatible);
    fnrdesc.putBoolean(sTID("unix"), opts.unixCompatible);
    desc.putObject(sTID("fileNamingRules"), sTID("fileNamingRules"), fnrdesc);
  }

  if (opts.destination != BatchDestinationType.NODESTINATION) {
    if (opts.overrideSave == true) {
      desc.putBoolean(cTID("Ovrd"), true);
    }
  }

  if (opts.destination == BatchDestinationType.SAVEANDCLOSE) {
    desc.putBoolean(cTID("SvAn"), true);
  }
  
  if (opts.errorFile) {
    desc.putPath(cTID("Log "), opts.errorFile.parent);
    desc.putString(cTID("Nm  "), opts.errorFile.name);
  }
  executeAction(cTID("Btch"), desc, DialogModes.NO);

  if (subdirs) {
    for (var i = 0; i < subdirs.length; i++) {
      Stdlib.batch(subdirs[i], act, actset, opts, mask, recurse);
    }
  }
};

Stdlib.batch.init = function() {
  if (!isPhotoshop()) {
    return;
  }
  if (isCS() || isPS7()) {
    return;
  }
  Stdlib.batch.map = {};
  Stdlib.batch.map[FileNamingType.DDMM] = sTID("ddmm");
  Stdlib.batch.map[FileNamingType.DDMMYY] = sTID("ddmmyy");
  Stdlib.batch.map[FileNamingType.DOCUMENTNAMELOWER] = sTID("lowerCase");
  Stdlib.batch.map[FileNamingType.DOCUMENTNAMEMIXED] = cTID("Nm  ");
  Stdlib.batch.map[FileNamingType.DOCUMENTNAMEUPPER] = sTID("upperCase");
  Stdlib.batch.map[FileNamingType.EXTENSIONLOWER] = sTID("lowerCaseExtension");
  Stdlib.batch.map[FileNamingType.EXTENSIONUPPER] = sTID("upperCaseExtension");
  Stdlib.batch.map[FileNamingType.MMDD] = sTID("mmdd");
  Stdlib.batch.map[FileNamingType.MMDDYY] = sTID("mmddyy");
  Stdlib.batch.map[FileNamingType.SERIALLETTERLOWER] = sTID("upperCaseSerial");
  Stdlib.batch.map[FileNamingType.SERIALLETTERUPPER] = sTID("lowerCaseSerial");
  Stdlib.batch.map[FileNamingType.SERIALNUMBER1] = sTID("oneDigit");
  Stdlib.batch.map[FileNamingType.SERIALNUMBER2] = sTID("twoDigit");
  Stdlib.batch.map[FileNamingType.SERIALNUMBER3] = sTID("threeDigit");
  Stdlib.batch.map[FileNamingType.SERIALNUMBER4] = sTID("fourDigit");
  Stdlib.batch.map[FileNamingType.YYDDMM] = sTID("yyddmm");
  Stdlib.batch.map[FileNamingType.YYMMDD] = sTID("yymmdd");
  Stdlib.batch.map[FileNamingType.YYYYMMDD] = sTID("yyyymmdd");
};

Stdlib.batch.init();

//
//================================= misc =====================================
//


//
// selectColorRange
//   Selects a range of colors around a specified color.
//   doc     - the document to operate on
//   color   - either a SolidColor or LabColor object
//   range   - the 'fuzziness' factor [default 40]
//   inverse - invert the selection [default 'false']
// Example:
//   Stdlib.selectColorRange(doc, Stdlib.getColorAt(doc, 125, 300), 50)
//
// Thanks to Andrew Hall for the original idea
//
Stdlib.selectColorRange = function(doc, color, range, inverse) {
  var clr = (color instanceof SolidColor) ? color.lab : color;
  if (inverse == undefined) {
    inverse = false;
  }
  if (range == undefined) {
    range = 40;
  }

  function _ftn() {
    var desc = new ActionDescriptor();
    desc.putInteger(cTID("Fzns"), range);

    var mnDesc = new ActionDescriptor();
    mnDesc.putDouble(cTID("Lmnc"), clr.l);
    mnDesc.putDouble(cTID("A   "), clr.a);
    mnDesc.putDouble(cTID("B   "), clr.b);
    desc.putObject(cTID("Mnm "), cTID("LbCl"), mnDesc);

    var mxDesc = new ActionDescriptor();
    mxDesc.putDouble(cTID("Lmnc"), clr.l);
    mxDesc.putDouble(cTID("A   "), clr.a);
    mxDesc.putDouble(cTID("B   "), clr.b);
    desc.putObject(cTID("Mxm "), cTID("LbCl"), mxDesc);

    if (inverse) {
      desc.putBoolean(cTID("Invr"), inverse);
    }

    executeAction(cTID("ClrR"), desc, DialogModes.NO );
  }
  Stdlib.wrapLC(doc, _ftn);
};

//
// selectColorRangeRGB
//   See 'selectColorRange' above
//   clr - either a RGBColor object or an Array with three(rgb) values
// Example:
//   Stdlib.selectColorRangeRGB(doc, [255, 144, 144], 50, true)
//
Stdlib.selectColorRangeRGB = function(doc, clr, range, inverse) {
  if (clr instanceof Array) {
    var c = new RGBColor();
    c.red = clr[0]; c.green = clr[1]; c.blue = clr[2];
    clr = new SolidColor();
    clr.rgb = c;
  } else if (clr instanceof RGBColor) {
    c = new SolidColor();
    c.rgb = clr;
    clr = c;
  } else {
    Error.runtimeError(19, "color"); // "Bad color argument");
  }

  Stdlib.selectColorRange(doc, clr, range, inverse);  
};

Stdlib.rgbToString = function(c) {
  return "[" + c.rgb.red + "," + c.rgb.green + "," + c.rgb.blue + "]";
};
Stdlib.rgbToArray = function(c) {
  return [c.rgb.red, c.rgb.green, c.rgb.blue];
};
Stdlib.rgbFromString = function(str) {
  var rex = /([\d\.]+),([\d\.]+),([\d\.]+)/;
  var m = str.match(rex);
  if (m) {
    return Stdlib.createRGBColor(Number(m[1]),
                                 Number(m[2]),
                                 Number(m[3]));
  }
  return undefined;
};
Stdlib.createRGBColor = function(r, g, b) {
  var c = new RGBColor();
  if (r instanceof Array) {
    b = r[2]; g = r[1]; r = r[0];
  }
  c.red = parseInt(r); c.green = parseInt(g); c.blue = parseInt(b);
  var sc = new SolidColor();
  sc.rgb = c;
  return sc;
};

try {
  if (isPhotoshop()) {
    Stdlib.COLOR_BLACK = Stdlib.createRGBColor(0, 0, 0);
    Stdlib.COLOR_RED = Stdlib.createRGBColor(255, 0, 0);
    Stdlib.COLOR_GREEN = Stdlib.createRGBColor(0, 255, 0);
    Stdlib.COLOR_BLUE = Stdlib.createRGBColor(0, 0, 255);
    Stdlib.COLOR_GRAY = Stdlib.createRGBColor(128, 128, 128);
    Stdlib.COLOR_WHITE = Stdlib.createRGBColor(255, 255, 255);
  }
} catch (e) {
}

Stdlib.colorFromString = function(str) {
  var c = Stdlib.rgbFromString(str);
  if (!c) {
    str = str.toLowerCase();
    if (str == "black") {
      c = Stdlib.COLOR_BLACK;
    } else if (str == "white") {
      c = Stdlib.COLOR_WHITE;
    } else if (str == "foreground") {
      c = app.foregroundColor;
    } else if (str == "background") {
      c = app.backgroundColor;
    } else if (str == "gray" || str == "grey") {
      c = Stdlib.COLOR_GRAY;
    } else if (str == "red") {
      c = Stdlib.COLOR_RED;
    } else if (str == "green") {
      c = Stdlib.COLOR_GREEN;
    } else if (str == "blue") {
      c = Stdlib.COLOR_BLUE;
    } 
  }
  return c;
};


// the slow way to draw...
Stdlib.setColorAt = function(doc, x, y, color, mode, opacity) {
  Stdlib.selectBounds(doc, [x, y, x+1, y+1], SelectionType.REPLACE, 0, false);
  if (!Stdlib.hasSelection(doc)) {
    Error.runtimeError(20, "Unable to select pixel at " + x + ',' + y);
  }
  if (mode == undefined) {
    mode = ColorBlendMode.NORMAL;
  }
  if (opacity == undefined) {
    opacity = 100;
  }
  if (color) {
    doc.selection.fill(color, mode, opacity);
  } else {
    doc.selection.clear();
  }
};
Stdlib.putColorAt = Stdlib.setColorAt;

// getColorAt
// based on:
//     fazstp@adobeforums.com wrote:
//     news://adobeforums.com:119/3bb84060.0@webx.la2eafNXanI
//
Stdlib.getColorAt = function(doc, x, y, undo) {
  if (!!undo) {
    undo = true;
    var st = doc.activeHistoryState;
  }
  // make new 1 pixel selection
  x = Math.floor(x);
  y = Math.floor(y);

  Stdlib.selectBounds(doc, [x, y, x+1, y+1]);

  try {
    function findPV(h) {
      for (var i = 0; i <= 255; i++ ) {
        if (h[i]) { return i; }
      }
      return 0;
    }
    
    var pColour = new SolidColor();
    
    if (doc.mode == DocumentMode.RGB) {
      pColour.mode = ColorModel.RGB;
      pColour.rgb.red   = findPV(doc.channels["Red"].histogram);
      pColour.rgb.green = findPV(doc.channels["Green"].histogram);
      pColour.rgb.blue  = findPV(doc.channels["Blue"].histogram);

    } else if (doc.mode == DocumentMode.GRAYSCALE) {
      var gr = findPV(doc.channels["Gray"].histogram);
      pColour.mode = ColorModel.GRAYSCALE;
      pColour.gray.gray = 100 * (gr/255);

    } else {
      Error.runtimeError(9001, "Color Mode not supported: " + doc.mode);
    }

  } finally {
    if (undo) {
      doc.activeHistoryState = st;
    }
  }

  return pColour;
};

Stdlib.convertProfile = function(doc, profile) {
  profile = profile.replace(/\.icc$/i, '');

  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID('Dcmn'), cTID('Ordn'), cTID('Trgt') );
    desc.putReference( cTID('null'), ref);
    desc.putString( cTID('T   '), profile );
    desc.putEnumerated( cTID('Inte'), cTID('Inte'), cTID('Clrm') );
    desc.putBoolean( cTID('MpBl'), true );
    desc.putBoolean( cTID('Dthr'), false );
    desc.putInteger( cTID('sdwM'), -1 );
    executeAction( sTID('convertToProfile'), desc, DialogModes.NO );
  }

  Stdlib.wrapLC(doc, _ftn);
};


// deprecated: Use Document.changeMode
Stdlib.convertMode = function(doc, cmode) {
  var mode;

  function _ftn() {
    var desc = new ActionDescriptor();
    desc.putClass(cTID("T   "), cTID(mode));
    executeAction(sTID("convertMode"), desc, DialogModes.NO);
  };

  switch (cmode) {
    case DocumentMode.BITMAP:       mode = "BtmM"; break;
    case DocumentMode.CMYK:         mode = "CMYM"; break;
    case DocumentMode.GRAYSCALE:    mode = "Grys"; break;
    case DocumentMode.INDEXEDCOLOR: mode = "IndC"; break;
    case DocumentMode.LAB:          mode = "LbCM"; break;
    case DocumentMode.MULTICHANNEL: mode = "MltC"; break;
    case DocumentMode.RGB:          mode = "RGBM"; break;
    default: Error.runtimeError(9001, "Bad color mode specified: " + cmode);
  }
  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.colorModeString = function(cmode) {
  var mode = "Unknown Mode";

  var cmodeN = toNumber(cmode);

  if (isNaN(cmodeN)) {
    switch (cmode) {
      case DocumentMode.BITMAP:       mode = "Bitmap"; break;
      case DocumentMode.CMYK:         mode = "CMYK"; break;
      case DocumentMode.DUOTONE:      mode = "Duotone"; break;
      case DocumentMode.GRAYSCALE:    mode = "Grayscale"; break;
      case DocumentMode.INDEXEDCOLOR: mode = "Indexed Color"; break;
      case DocumentMode.LAB:          mode = "Lab"; break;
      case DocumentMode.MULTICHANNEL: mode = "Multichannel"; break;
      case DocumentMode.RGB:          mode = "RGB"; break;
    }

  } else {
    switch (cmode) {
      case 0: mode = "Bitmap"; break;
      case 1: mode = "Grayscale"; break;
      case 2: mode = "Indexed Color"; break;
      case 3: mode = "RGB"; break;
      case 4: mode = "CMYK"; break;
      case 7: mode = "Multichannel"; break;
      case 8: mode = "Duotone"; break;
      case 9: mode = "Lab"; break;
    }
  }

  return mode;
};
Stdlib.copyrightedString = function(copy) {
  var str = '';
  switch (copy) {
    case CopyrightedType.COPYRIGHTEDWORK: str = "Copyrighted"; break;
    case CopyrightedType.PUBLICDOMAIN:    str = 'Public Domain'; break;
    case CopyrightedType.UNMARKED:        str = 'Unmarked'; break;
  }

  return str;
};
Stdlib.urgencyString = function(urgency) {
  var str = '';
  switch (urgency) {
    case Urgency.LOW:    str = "Urgency Low"; break;
    case Urgency.TWO:    str = "Urgency Two"; break;
    case Urgency.THREE:  str = "Urgency Three"; break;
    case Urgency.FOUR:   str = "Urgency Four"; break;
    case Urgency.NORMAL: str = "Urgency Normal"; break;
    case Urgency.SIX:    str = "Urgency Six"; break;
    case Urgency.SEVEN:  str = "Urgency Seven"; break;
    case Urgency.HIGH:   str = "Urgency High"; break;
  }

  return str;
};

Stdlib.getFillLayerColor = function(doc, layer) {
  var color = new SolidColor();
  var desc = Stdlib.getLayerDescriptor(doc, layer);
  var adjList = desc.getList(cTID('Adjs'));
  var adjDesc = adjList.getObjectValue(0);
  var clrDesc = adjDesc.getObjectValue(cTID('Clr '));
  color.rgb.red = clrDesc.getDouble(cTID('Rd  '));
  color.rgb.green = clrDesc.getDouble(cTID('Grn '));
  color.rgb.blue = clrDesc.getDouble(cTID('Bl  '));
  return color;
};

Stdlib.setFillLayerColor = function(doc, layer, color) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(sTID('contentLayer'), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('null'), ref);
    var cdesc = new ActionDescriptor();
    var rgbdesc = new ActionDescriptor();
    rgbdesc.putDouble(cTID('Rd  '), color.rgb.red);
    rgbdesc.putDouble(cTID('Grn '),  color.rgb.green);
    rgbdesc.putDouble(cTID('Bl  '),  color.rgb.blue);
    cdesc.putObject(cTID('Clr '), cTID('RGBC'), rgbdesc);
    desc.putObject(cTID('T   '), sTID('solidColorLayer'), cdesc);
    return executeAction(cTID('setd'), desc, DialogModes.NO);
  }

  return Stdlib.wrapLCLayer(doc, layer, _ftn);
};

Stdlib.createSwatch = function(name, red, green, blue) { 
  var clrDesc = new ActionDescriptor(); 
  clrDesc.putDouble(cTID("Rd  "), red); 
  clrDesc.putDouble(cTID("Grn "), green); 
  clrDesc.putDouble(cTID("Bl  "), blue); 

  var clrsDesc = new ActionDescriptor(); 
  clrsDesc.putString(cTID("Nm  "), name);
  clrsDesc.putObject(cTID("Clr "), cTID("RGBC"), clrDesc); 

  var ref = new ActionReference(); 
  ref.putClass(cTID("Clrs"));

  var desc = new ActionDescriptor(); 
  desc.putReference(cTID("null"), ref); 
  desc.putObject(cTID("Usng"), cTID("Clrs"), clrsDesc); 

  app.executeAction(cTID("Mk  "), desc, DialogModes.NO); 
};

Stdlib.saveAllPatterns = function(file) {
  var desc = new ActionDescriptor();
  desc.putPath(cTID("null"), file);
  var ref = new ActionReference();
  ref.putProperty(cTID("Prpr"), cTID("Ptrn"));
  ref.putEnumerated(cTID("capp"), cTID("Ordn"), cTID("Trgt"));
  desc.putReference(cTID("T   "), ref);
  executeAction(cTID("setd"), desc, DialogModes.NO);
};

Stdlib.savePatterns = function(file, indexArray) {
  var desc = new ActionDescriptor();
  desc.putPath(cTID("null"), file);

  var list = new ActionList();
  for (var i = 0; i < indexArray.length; i++) {
    var ref = new ActionReference();
    ref.putIndex(cTID("Ptrn"), indexArray[i]);
    list.putReference(ref);
  }
  desc.putList(cTID("T   "), list);
  executeAction(cTID("setd"), desc, DialogModes.NO);
};

Stdlib.savePattern = function(file, index) {
  Stdlib.savePatterns(file, [index]);
};

Stdlib.createGuide = function(doc, orientation, position) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var gdesc = new ActionDescriptor();
    gdesc.putUnitDouble(cTID("Pstn"), cTID("#Pxl"), position);
    gdesc.putEnumerated(cTID("Ornt"), cTID("Ornt"), cTID(orientation));
    desc.putObject(cTID("Nw  "), cTID("Gd  "), gdesc);
    executeAction(cTID("Mk  "), desc, DialogModes.NO );
  }
  Stdlib.wrapLC(doc, _ftn);
};
Stdlib.createVerticalGuide = function(doc, position) {
  Stdlib.createGuide(doc, "Vrtc", position);
};
Stdlib.createHorizontalGuide = function(doc, position) {
  Stdlib.createGuide(doc, "Hrzn", position);
};

Stdlib.clearGuides = function(doc) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Gd  "), cTID("Ordn"), cTID("Al  "));
    desc.putReference(cTID("null"), ref );
    executeAction(cTID("Dlt "), desc, DialogModes.NO );
  }

  Stdlib.wrapLC(doc, _ftn);
};

Stdlib.renameChannel = function(doc, oldName, newName) {
  var channels = doc.activeChannels;
  for (var i = 0; i < channels.length; i++) {
    var ch = channels[i];
    if (ch.name == oldName) {
      ch.name = newName;
      return;
    }
  }
};
Stdlib.selectChannel = function(doc, layer, chnl) {
  function _ftn() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID(chnl));
    desc.putReference(cTID('null'), ref);
    desc.putBoolean(cTID('MkVs'), false );
    executeAction(cTID('slct'), desc, DialogModes.NO );
  }
  Stdlib.wrapLCLayer(doc, layer, _ftn);
};
Stdlib.selectRGBChannel = function(doc, layer) {
  Stdlib.selectChannel(doc, layer, 'RGB ');
};

Stdlib.drawLine = function(doc, start, stop) {

  var startPoint = new PathPointInfo();
  startPoint.anchor = start;
  startPoint.leftDirection = start;
  startPoint.rightDirection = start;
  startPoint.kind = PointKind.CORNERPOINT;

  var stopPoint = new PathPointInfo();
  stopPoint.anchor = stop;
  stopPoint.leftDirection = stop;
  stopPoint.rightDirection = stop;
  stopPoint.kind = PointKind.CORNERPOINT;

  var spi = new SubPathInfo();
  spi.closed = false;
  spi.operation = ShapeOperation.SHAPEXOR;
  spi.entireSubPath = [startPoint, stopPoint];

  var line = doc.pathItems.add("Line", [spi]);
  line.strokePath(ToolType.PENCIL);
  line.remove();
};

Stdlib.selectEllipse = function(doc, bnds, antiAlias) {
  antiAlias = (antiAlias != false);  // defaults to true

  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putProperty(cTID('Chnl'), cTID('fsel'));
  desc.putReference(cTID('null'), ref);
  var bdesc = new ActionDescriptor();
  bdesc.putUnitDouble(cTID('Top '), cTID('#Pxl'), bnds[1]);
  bdesc.putUnitDouble(cTID('Left'), cTID('#Pxl'), bnds[0]);
  bdesc.putUnitDouble(cTID('Btom'), cTID('#Pxl'), bnds[3]);
  bdesc.putUnitDouble(cTID('Rght'), cTID('#Pxl'), bnds[2]);
  desc.putObject(cTID('T   '), cTID('Elps'), bdesc);
  desc.putBoolean(cTID('AntA'), true);
  executeAction(cTID('setd'), desc, DialogModes.NO);
};


Stdlib.stop = function(msg, cont) {
  if (msg == undefined) {
    msg = "Operation cancelled.";
  }
  var desc = new ActionDescriptor();
  desc.putString(cTID("Msge"), msg);
  if (cont != undefined) {
    desc.putBoolean(cTID("Cntn"), cont);
  }
  app.executeAction(cTID("Stop"), desc, DialogModes.ALL);
};

//
// Add a new Text layer with some string...
//
Stdlib.addTextLayer = function(doc, contents, name, size) {
  var layer = doc.artLayers.add();

  layer.kind = LayerKind.TEXT;
  if (name) { layer.name = name; }
  layer.blendMode = BlendMode.NORMAL;
  layer.opacity = 100.0;

  //$.level = 1; debugger;
  var text = layer.textItem;
  var ru = app.preferences.rulerUnits;
  var tu = app.preferences.typeUnits;
 
  try {
    var newColor = Stdlib.createRGBColor(255, 255, 255);
    
    app.preferences.typeUnits = TypeUnits.POINTS;
    app.preferences.rulerUnits = Units.PIXELS;

    text.size = (size ? size : 24);    //Math.max(doc.height/100, 3);
    text.font = "ArialMT";
    text.kind = TextType.PARAGRAPHTEXT;
    text.color = newColor;
    
    app.preferences.rulerUnits = Units.PERCENT;
    text.position = new Array(5, 5); 
    app.preferences.rulerUnits = Units.PIXELS;
    text.width  = doc.width;
    text.height = doc.height;
    text.contents = contents;

  } finally {
    app.preferences.rulerUnits = ru;
    app.preferences.typeUnits = tu;
  }

  return layer;
};

// deprecated
Stdlib.addInfoTextLayer = Stdlib.addTextLayer;

Stdlib.convertTextLayerToShape = function(doc, layer) {
  function _ftn() {
    var desc96 = new ActionDescriptor();
    var ref61 = new ActionReference();
    ref61.putClass( sTID('contentLayer') );
    desc96.putReference( cTID('null'), ref61 );
    var ref62 = new ActionReference();
    ref62.putEnumerated( cTID('TxLr'), cTID('Ordn'), cTID('Trgt') );
    desc96.putReference( cTID('Usng'), ref62 );
    executeAction( cTID('Mk  '), desc96, DialogModes.NO );
  }

  Stdlib.wrapLCLayer(doc, layer, _ftn);
};



Stdlib.getPSFontList = function() {
  var flist = app.fonts;
  var fontList = [flist.length];
  for (var i = 0; i < flist.length; i++) {
    fontList[i] = flist[i].postScriptName;
  }
  return fontList;
};

Stdlib.findPSFont = function(f) {
  var tf = Stdlib.getByName(app.fonts, f);
  return (tf ? tf.postScriptName : undefined);
};

Stdlib.getFont = function(f) {
  // getByProperty
  var flist = app.fonts;
  for (var i = 0; i < flist.length; i++) {
    if (f == flist[i].postScriptName) {
      return flist[i];
    }
  }
  return undefined;
};

Stdlib.findFont = function(f) {
  // getByName
  var flist = app.fonts;
  for (var i = 0; i < flist.length; i++) {
    if (f == flist[i].name) {
      return flist[i];
    }
  }
  return undefined;
};

Stdlib.determineFont = function(str) {
  return (Stdlib.getByName(app.fonts, str) ||
          Stdlib.getByProperty(app.fonts, 'postScriptName', str));
};

// XXX fix this later
Stdlib.setFontRealName = function( fontName ) {
  var ref = new ActionReference();
  ref.putProperty(sTID('property'), sTID('textStyle'));
  ref.putEnumerated(sTID('textLayer'),
                    sTID('ordinal'),
                    sTID('targetEnum'));

  var desc = new ActionDescriptor();
  desc.putReference(sTID('null'), ref);

  var edesc = new ActionDescriptor();
  edesc.putString(sTID('fontName'), fontName);
  edesc.putObject(sTID('to'), sTID('textStyle'), desc);

  executeAction(sTID('set'), edesc, DialogModes.NO);
};

// UnitValue functions

Stdlib.unitValueRex = /(-)?(\d+)?(\.\d+)? (in|ft|yd|mi|mm|cm|m|km|pt|pc|tpt|ptc|ci|px|%)/;


//
//=============================== Debugging ===================================
//

//
// fullStop
//     Drop into the debugger as long as 'stop' is not false
//
Stdlib.fullStop = function(stop) {
  if (stop != false) {
    $.level = 1;
    debugger;
  }
};
//fullStop = Stdlib.fullStop;

//
// a dumb little piece of code that does a busy-wait
// for some period of time. Crank units up 'til it waits
// long enough for your purposes.
// This is deprecated in CS2.
//
Stdlib.pause = function(units){
  for (var i = 0; i < units; i++) {
    var x = 11.400930;
    var y = 33.902312;
    Stdlib.pause_dummy = eval("Math.sqrt(x/y)");
  }
};
Stdlib.listGlobals = function() {
  var lst = [];
  for (var i in global) {
    lst.push(i);
  }
  lst.sort();
  var str = '';
  for (var j in lst) {
    i = lst[j];
    str += i + ":\t";
    try {
      var o = global[i];
      str += "[" + (typeof o) + "]";
      if (typeof o != "function") {
        str += ":\t" + global[i].toString();
      }
    } catch (e) {
      str += "[]";
    }
    str += "\r\n";
  }
  return str;
};
listGlobals = Stdlib.listGlobals;

Stdlib.listProps = function(obj) {
  var s = '';
  for (var x in obj) {
    s += x + ":\t";
    try {
      var o = obj[x];
      
      s += (typeof o == "function") ? "[function]" : o;
    } catch (e) {
    }
    s += "\r\n";
  }
  return s;
};
listProps = Stdlib.listProps;

Stdlib.dumpGlobals = function(fname) {
  var f = new File(fname || "/c/temp/globals.log");
  f.open("w", "TEXT", "????");
  f.writeln(listGlobals());
  f.close();
};

Stdlib.showtext = function showtext(msg) {
  confirm(msg);
};

// A helper function for debugging
// It also helps the user see what is going on
// if you turn it off for this example you
// get a flashing cursor for a number (long) time
Stdlib.waitForRedraw = function() {
  var desc = new ActionDescriptor();
  desc.putEnumerated(cTID("Stte"), cTID("Stte"), cTID("RdCm"));
  executeAction(cTID("Wait"), desc, DialogModes.NO);
};

refresh = Stdlib.waitForRedraw;

Stdlib._dumpRI = function(ri) {
  var str = '';
  var props =
  [ "name",
    "arguments",
    "dataType",
    "defaultValue",
    "description",
    "help",
    "isCollection",
    "max",
    "min",
    "type"];
  
  str += '\t' + ri.name + '\r\n';

  for (var i = 0; i < props.length; i++) {
    var n = props[i];
    var v = ri[n];

    if (v != undefined) {
      str += "\t\t" + n + " : " + v + "\r\n";
    }
  }
  return str;
}
Stdlib.dumpRTI = function(o) {
  var r = o.reflect;
  var str = '';

  //debugger;
  str += "//\r\n// " + r.name + "\r\n//    " + r.help + "\r\n//\r\n";
  str += "class " + r.name + "\r\n";
  str += "  props:\r\n";
  for (var i = 0; i < r.properties.length; i++) {
    var ri = r.properties[i];
    str += Stdlib._dumpRI(ri);
  }
  str += "  methods:\r\n";
  for (var i = 0; i < r.methods.length; i++) {
    var ri = r.methods[i];
    str += Stdlib._dumpRI(ri);
  }
  return str;
};

Stdlib.getLastJSLogEntry = function(fptr) {
  if (fptr) {
    fptr = Stdlib.convertFptr(fptr);
  } else {
    fptr = new File("/c/ScriptingListenerJS.log");
    if (!fptr.exists) {
      Error.runtimeError(Stdlib.IO_ERROR_CODE, "Unable to find SLC log.");
    }
  }

  fptr.open("r", "TEXT", "????") || throwFileError(fptr, "Unable to open");
  //fptr.lineFeed = "unix";

  fptr.seek(1, 2);  // start of at the end of the file
  var prev = fptr.readch();

  for (var i = 2; i < fptr.length; i++) {
    fptr.seek(i, 2);  // start of at the end of the file
    var c = fptr.readch();
    if (c == '\n' && prev == '/') {
      break;
    }
    prev = c;
  }
  if (i == fptr.length && prev != '/') {
    return undefined;
  }

  fptr.readln();

  if (isCS4()) {
    // XXX There is a bug in CS4 that causes the previous readln to
    // read one too many characters. This looks of the bug and works
    // around it.

    var loc = fptr.tell();
    var str = fptr.read();

    if (str[0] == 'a') {
      fptr.seek(loc-1);
      str = fptr.read();
    }

  } else {
    var str = fptr.read();
  }
  fptr.close();
  return str;
};


Stdlib.writeDescriptor = function(fptr, desc) {
  var fptr = Stdlib.convertFptr(fptr);
  fptr.encoding = 'BINARY';
  if (!fptr.open("w")) {
    throwFileError(fptr);
  }
  var str = desc.toStream();
  if (!fptr.write(str)) {
    throwFileError(fptr);
  }
  fptr.close();
  delete str;
};

Stdlib.readDescriptor = function(fptr) {
  var fptr = Stdlib.convertFptr(fptr);
  fptr.encoding = 'BINARY';
  if (!fptr.open("r")) {
    throwFileError(fptr);
  }
  var str = fptr.read();
  fptr.close();

  var desc = new ActionDescriptor();
  desc.fromStream(str);
  return desc;
};

//=============================== UnitValue support code ======================
Stdlib._units = undefined;
Stdlib._unitsInit = function() {
  if (!isPhotoshop()) {
    return;
  }
  Stdlib._units = app.preferences.rulerUnits.toString();
  Stdlib._unitMap = {};
  Stdlib._unitMap[Units.INCHES.toString()] =  "in";
  Stdlib._unitMap[Units.CM.toString()] =      "cm";
  Stdlib._unitMap[Units.MM.toString()] =      "mm";
  Stdlib._unitMap[Units.PERCENT.toString()] = "%";
  Stdlib._unitMap[Units.PICAS.toString()] =   "pc";
  Stdlib._unitMap[Units.PIXELS.toString()] =  "px";
  Stdlib._unitMap[Units.POINTS.toString()] =  "pt";

  Stdlib._unitStrMap = {};
  Stdlib._unitStrMap["in"] = "in";
  Stdlib._unitStrMap["cm"] = "cm";
  Stdlib._unitStrMap["mm"] = "mm";
  Stdlib._unitStrMap["%"]  = "%";
  Stdlib._unitStrMap["pc"] = "picas";
  Stdlib._unitStrMap["px"] = "pixels";
  Stdlib._unitStrMap["pt"] = "points";
};
Stdlib._unitsInit();
Stdlib.getDefaultUnits = function() {
  return Stdlib._unitMap[Stdlib._units];
};
Stdlib.getDefaultUnitsString = function() {
  return Stdlib._unitStrMap[Stdlib._unitMap[Stdlib._units]];
};
Stdlib.getDefaultRulerUnitsString = Stdlib.getDefaultUnitsString;

Stdlib.validateUnitValue = function(str, bu, ru) {
  var self = this;

  if (str instanceof UnitValue) {
    return str;
  }

  if (bu && bu instanceof Document) {
    var doc = bu;
    ru = doc.width.type;
    bu = UnitValue(1/doc.resolution, ru);

  } else {
    if (!ru) {
      ru = Stdlib.getDefaultRulerUnitsString();
    }
    if (!bu) {
      UnitValue.baseUnit = UnitValue(1/72, ru);
    }
  }
  str = str.toString();

  var zero = new UnitValue("0 " + ru);
  var un = zero;
  if (!str.match(/[a-z%]+/)) {
    str += ' ' + ru.units;
  }
  un = new UnitValue(str);

  if (isNaN(un.value) || un.type == '?') {
    return undefined;
  }

  if (un.value == 0) {
    un = zero;
  }

  return un;
};

//
// Stdlib.getPixelValue
// Useful for converting strings input by a user into a pixel value.
// 'val' may be any valid UnitValue string.
//    Stdlib.getPixelValue(doc, "20 in")
//    Stdlib.getPixelValue(300, "20", undefined, "in")
//    Stdlib.getPixelValue(doc, "20%", 1200)
//    Stdlib.getPixelValue(doc, "20", 1200, '%')
// 
Stdlib.getPixelValue = function(docRes, val, base, defaultUnits) {
  var res;
  if (val == undefined) {
    return Number.NaN;
  }
  if (val.constructor == Number) {
    val = val.toString();
  }
  if (val.constructor != String) {
    return Number.NaN;
  }
  if (docRes.constructor == Number) {
    res = docRes;
  } else {
    res = docRes.resolution;
  }

  val = val.trim();

  // convert val to a unit value

  if (!defaultUnits) {
    defaultUnits = Stdlib.getDefaultUnits();
  }

  var u = new UnitValue(val);
  if (u.type == '?') {
    var n = parseFloat(val);
    if (isNaN(n)) {
      return Number.NaN;
    }
    u = new UnitValue(n, defaultUnits);
  }

  // handle '%' manually
  if (u.type == '%') {
    u = new UnitValue(base * u.value / 100, "px");
  }

  var pxVal;

  // handle 'in' manually
  if (u.type == 'in') {
    pxVal = res * u.value;

  } else if (u.type == 'px') {
    pxVal = u.value;

  } else {
    u.baseUnit = new UnitValue(1/res, "in");
    pxVal = u.as("px");
  }

  return pxVal;
};

/*

var regex = /\-*\d*\.{0,1}\d* *(?:in|inch|inches|ft|foot|feet|yd|yard|yards|mi|mile|miles|mm|millimeter|millimeters|cm|centimeter|centimeters|m|meter|meters|km|kilometer|kilometers|pt|point|points|pc|pica|picas|ci|cicero|ciceros)?/gi;
var myMatch = myString.match( regex );
try {
  var fieldIsValid = ( myEvent.target.text == myEvent.target.text.match( regex )[ 0 ] );
} catch( e ) {
  var fieldIsValid = false;
}

*/


//
//============================= File Browser =================================
//
// This FileBrowser code works _only_ in PSCS
//

// get all the files in the file browser that are selected or flagged
// this code was lifted from Dr. Brown's Image Processor2.0.js
// and is copyrighted by Adobe

FileBrowser = function FileBrowser() {};

FileBrowser.getSelectedFiles = function() {
  return FileBrowser.getFiles(true, false);
};
FileBrowser.getFlaggedFiles = function() {
  return FileBrowser.getFiles(false, true);
};
FileBrowser.getFiles = function(selected, flagged) {
  var fileArray = new Array();
  var ffIndex = 0;

  var ref = new ActionReference();
  var fileBrowserStrID = sTID( "fileBrowser" );
  ref.putProperty( cTID( 'Prpr' ), fileBrowserStrID );
  ref.putEnumerated( cTID( 'capp' ), cTID( 'Ordn' ),
                     cTID( 'Trgt' ) ); 
  var desc = executeActionGet( ref );

  if ( desc.count > 0 && desc.hasKey( fileBrowserStrID ) ) {
    var fbDesc = desc.getObjectValue( fileBrowserStrID );
    var keyFilesList = cTID( 'flst' );

    if ( fbDesc.count > 0 && fbDesc.hasKey( keyFilesList ) ) {
      var fileList = fbDesc.getList( keyFilesList );
      var flaggedID = sTID( "flagged" );
      var selectedID = cTID( 'fsel' );
      var keyPath = cTID( 'Path' );

      for ( var i = 0; i < fileList.count; i++ ) {
        var fileDesc = fileList.getObjectValue( i );
        if ( fileDesc.count > 0 && fileDesc.hasKey( keyPath )) {
          if ( flagged == true && fileDesc.hasKey( flaggedID )
               && fileDesc.getBoolean( flaggedID )) {
            var fileOrFolder = fileDesc.getPath( keyPath );
            if ( fileOrFolder instanceof File ) {
              fileArray[ffIndex++] = fileOrFolder;
            }
          }

          // fixed so that a file will not be added twice if its flagged
          // and selected and both options are 'true'
          if ( flagged == true && fileDesc.hasKey( flaggedID )
               && fileDesc.getBoolean( flaggedID )) {
            var fileOrFolder = fileDesc.getPath( keyPath );
            if ( fileOrFolder instanceof File ) {
              fileArray[ffIndex++] = fileOrFolder;
            }
          } else if ( selected == true && fileDesc.hasKey( selectedID )
               && fileDesc.getBoolean( selectedID )) {
            var fileOrFolder = fileDesc.getPath( keyPath );
            if ( fileOrFolder instanceof File ) {
              fileArray[ffIndex++] = fileOrFolder;
            }
          }

          // if neither option is set, add everything
          if (selected != true && flagged != true) {
            var fileOrFolder = fileDesc.getPath( keyPath );
            if ( fileOrFolder instanceof File ) {
              fileArray[ffIndex++] = fileOrFolder;
            }
          }
        }
      }
    }
  }

  return fileArray;
};

//
// Set
//     these are a collection of functions for operating
//     on arrays as proper Set: each entry in the array
//     is unique in the array. This is useful for things
//     like doc.info.keywords
//
Set = function Set() {}
Set.add = function(ar, str) { return Set.merge(ar, new Array(str)); }
Set.remove = function(ar, str) {
  var nar = Set.copy(ar);
  for (var idx in nar) {
    if (nar[idx] == str) {
      nar.splice(idx, 1);
    }
  }
  return nar;
};
Set.contains = function(ar, str) {
  for (var idx in ar) {
    if (ar[idx] == str) {
      return true;
    }
  }
  return false;
};
Set.merge = function(ar1, ar2) {
  var obj = new Object();
  var ar = [];

  if (ar1 != undefined) {
    for (var idx in ar1) {
      if (typeof (ar1[idx]) != "function") {
        obj[ar1[idx]] = 1;
      }
    }
  }
  if (ar2 != undefined) {
    for (var idx in ar2) {
      if (typeof (ar2[idx]) != "function") {
        obj[ar2[idx]] = 1;
      }
    }
  }
  for (var idx in obj) {
    if (typeof (obj[idx]) != "function") {
      ar.push(idx);
    }
  }
  ar.sort();
  return ar;
}
Set.copy = function(ar) {
  return ar.slice(0);
};


ColorProfileNames = {};
ColorProfileNames.ADOBE_RGB      = "Adobe RGB (1998)";
ColorProfileNames.APPLE_RGB      = "Apple RGB";
ColorProfileNames.PROPHOTO_RGB   = "ProPhoto RGB";
ColorProfileNames.SRGB           = "sRGB IEC61966-2.1";
ColorProfileNames.COLORMATCH_RGB = "ColorMatch RGB";
ColorProfileNames.WIDEGAMUT_RGB  = "Wide Gamut RGB";

// ColorProfileNames.KODAK_DC     = "KODAK DC Series Digital Camera";
// ColorProfileNames.MONITOR_SRGB = "Monitor - sRGB IEC61966-2.1";

Timer = function() {
  var self = this;
  self.startTime = 0;
  self.stopTime  = 0;
  self.elapsed = 0;
  self.cummulative = 0;
  self.count = 0;
};

Timer.prototype.start = function() {
  this.startTime = new Date().getTime();
};
Timer.prototype.stop = function() {
  var self = this;
  self.stopTime = new Date().getTime();
  self.elapsed = (self.stopTime - self.startTime)/1000.00;
  self.cummulative += self.elapsed;
  self.count++;
  self.per = self.cummulative/self.count;
};


//========================= String formatting ================================
//
// String.sprintf
//
// Documentation:
//   http://www.opengroup.org/onlinepubs/007908799/xsh/fprintf.html
//
// From these sites:
//   http://forums.devshed.com/html-programming-1/sprintf-39065.html
//   http://jan.moesen.nu/code/javascript/sprintf-and-printf-in-javascript/
//
String.prototype.sprintf = function() {
  var args = [this];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return String.sprintf.apply(null, args);
};
String.sprintf = function() {
  function _sprintf() {
    if (!arguments || arguments.length < 1 || !RegExp)  {
      return "Error";
    }
    var str = arguments[0];
    var re = /([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)/m;
            //') /* for xemacs auto-indent  */
    var a = b = [], numSubstitutions = 0, numMatches = 0;
    var result = '';

    while (a = re.exec(str)) {
      var leftpart = a[1], pPad = a[2], pJustify = a[3], pMinLength = a[4];
      var pPrecision = a[5], pType = a[6], rightPart = a[7];

      rightPart = str.slice(a[0].length);

      numMatches++;

      if (pType == '%') {
        subst = '%';
      } else {
        numSubstitutions++;
        if (numSubstitutions >= arguments.length) {
          alert('Error! Not enough function arguments (' +
                (arguments.length - 1)
                + ', excluding the string)\n'
                + 'for the number of substitution parameters in string ('
                + numSubstitutions + ' so far).');
        }
        var param = arguments[numSubstitutions];
        var pad = '';
        if (pPad && pPad.slice(0,1) == "'") {
          pad = leftpart.slice(1,2);
        } else if (pPad) {
          pad = pPad;
        }
        var justifyRight = true;
        if (pJustify && pJustify === "-") {
          justifyRight = false;
        }
        var minLength = -1;
        if (pMinLength) {
          minLength = toNumber(pMinLength);
        }
        var precision = -1;
        if (pPrecision && pType == 'f') {
          precision = toNumber(pPrecision.substring(1));
        }
        var subst = param;
        switch (pType) {
        case 'b':
          subst = toNumber(param).toString(2);
          break;
        case 'c':
          subst = String.fromCharCode(toNumber(param));
          break;
        case 'd':
          subst = toNumber(param) ? Math.round(toNumber(param)) : 0;
            break;
        case 'u':
          subst = Math.abs(Math.round(toNumber(param)));
          break;
        case 'f':
          if (precision == -1) {
            precision = 6;
          }
          subst = parseFloat(param).toFixed(Math.min(precision, 20));
//             ? Math.round(parseFloat(param) * Math.pow(10, precision))
//             / Math.pow(10, precision)
//             : ;
            break;
        case 'o':
          subst = toNumber(param).toString(8);
          break;
        case 's':
          subst = param;
          break;
        case 'x':
          subst = ('' + toNumber(param).toString(16)).toLowerCase();
          break;
        case 'X':
          subst = ('' + toNumber(param).toString(16)).toUpperCase();
          break;
        }
        var padLeft = minLength - subst.toString().length;
        if (padLeft > 0) {
          var arrTmp = new Array(padLeft+1);
          var padding = arrTmp.join(pad?pad:" ");
        } else {
          var padding = "";
        }
      }
      result += leftpart + padding + subst;
      str = rightPart;
    }
    result += str;
    return result;
  };

  return _sprintf.apply(null, arguments);
};


//========================= Date formatting ================================
//
// Date.strftime
//    This is a third generation implementation. This is a JavaScript
//    implementation of C the library function 'strftime'. It supports all
//    format specifiers except U, W, z, Z, G, g, O, E, and V.
//    For a full description of this function, go here:
//       http://www.opengroup.org/onlinepubs/007908799/xsh/strftime.html
//    Donating implementations can be found here:
//       http://redhanded.hobix.com/inspect/showingPerfectTime.html
//    and here:
//       http://wiki.osafoundation.org/bin/view/Documentation/JavaScriptStrftime
//
// Object Method
Date.prototype.strftime = function (fmt) {
  return Date.strftime(this, fmt);
};

// Class Function
Date.strftime = function(date, fmt) {
  var t = date;
  var cnvts = Date.prototype.strftime._cnvt;
  var str = fmt;

  var rex = /([^%]*)%([%aAbBcCdDehHIjmMprRStTuwxXyYZ]{1})(.*)/;

  var result = '';
  while (m = rex.exec(str)) {
    var pre = m[1];
    var typ = m[2];
    var post = m[3];
    result += pre + cnvts[typ](t);
    str = post;
  }
  result += str;
  return result;
};

// some ISO8601 formats
Date.strftime.iso8601_date = "%Y-%m-%d";
Date.strftime.iso8601_full = "%Y-%m-%dT%H:%M:%S";
Date.strftime.iso8601      = "%Y-%m-%d %H:%M:%S";
Date.strftime.iso8601_time = "%H:%M:%S";

Date.prototype.toISO = function() {
  return this.strftime(Date.strftime.iso8601);
};


// the specifier conversion function table
Date.prototype.strftime._cnvt = {
  zeropad: function( n ){ return n>9 ? n : '0'+n; },
  spacepad: function( n ){ return n>9 ? n : ' '+n; },
  ytd: function(t) { 
    var first = new Date(t.getFullYear(), 0, 1).getTime();
    var diff = t.getTime() - first;
    return parseInt(((((diff/1000)/60)/60)/24))+1;
  },
  a: function(t) {
    return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][t.getDay()]
  },
  A: function(t) {
    return ['Sunday','Monday','Tuesdsay','Wednesday','Thursday','Friday',
            'Saturday'][t.getDay()]
  },
  b: function(t) {
    return ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct',
            'Nov','Dec'][t.getMonth()] },
  B: function(t) {
    return ['January','February','March','April','May','June', 'July','August',
            'September','October','November','December'][t.getMonth()] },
  c: function(t) {
    return (this.a(t) + ' ' + this.b(t) + ' ' + this.e(t) + ' ' +
            this.H(t) + ':' + this.M(t) + ':' + this.S(t) + ' ' + this.Y(t))
  },
  C: function(t) { return this.Y(t).slice(0, 2); },
  d: function(t) { return this.zeropad(t.getDate()) },
  D: function(t) { return this.m(t) + '/' + this.d(t) + '/' + this.y(t); },
  e: function(t) { return this.spacepad(t.getDate()) },
  // E: function(t) { return '-' },
  F: function(t) { return this.Y(t) + '-' + this.m(t) + '-' + this.d(t); },
  g: function(t) { return '-' },
  G: function(t) { return '-' },
  h: function(t) { return this.b(t) },
  H: function(t) { return this.zeropad(t.getHours()) },
  I: function(t) {
    var s = this.zeropad((t.getHours() + 12) % 12);
    return (s == "00") ? "12" : s;
  },
  j: function(t) { return this.ytd(t) },
  k: function(t) { return this.spacepad(t.getHours()) },
  l: function(t) {
    var s = this.spacepad((t.getHours() + 12) % 12);
    return (s == " 0") ? "12" : s;
  },
  m: function(t) { return this.zeropad(t.getMonth()+1) }, // month-1
  M: function(t) { return this.zeropad(t.getMinutes()) },
  n: function(t) { return '\n' },
  // O: function(t) { return '-' },
  p: function(t) { return this.H(t) < 12 ? 'AM' : 'PM'; },
  r: function(t) {
    return this.I(t) + ':' + this.M(t) + ':' + this.S(t) + ' ' + this.p(t);
  },
  R: function(t) { return this.H(t) + ':' + this.M(t); },
  S: function(t) { return this.zeropad(t.getSeconds()) },
  t: function(t) { return '\t'; },
  T: function(t) {
    return this.H(t) + ':' + this.M(t) + ':' + this.S(t) + ' ' + this.p(t);
  },
  u: function(t) {return t.getDay() ? t.getDay()+1 : 7 },
  U: function(t) { return '-' },
  w: function(t) { return t.getDay() }, // 0..6 == sun..sat
  W: function(t) { return '-'; },       // not available
  x: function(t) { return this.D(t) },
  X: function(t) { return this.T(t)},
  y: function(t) { return this.zeropad(this.Y(t) % 100) },
  Y: function(t) { return t.getFullYear().toString() },
  z: function(t) { return '' },
  Z: function(t) { return '' },
  '%': function(t) { return '%' }
};

// this needs to be worked on...
function _weekNumber(date) {
  var ytd = toNumber(date.strftime("%j"));
  var week = Math.floor(ytd/7);
  if (new Date(date.getFullYear(), 0, 1).getDay() < 4) {
    week++;
  }
  return week;
};

File.prototype.toUIString = function() {
  return decodeURI(this.fsName);
};
Folder.prototype.toUIString = function() {
  return decodeURI(this.fsName);
};

File.prototype.asString = File.prototype.toUIString; // deprecated

//========================= Filename formatting ===============================
//
// File.strf
//   This is based of the file name formatting facility in exiftool. Part of
//   the description is copied directly from there. You can find exiftool at:
//      http://www.sno.phy.queensu.ca/~phil/exiftool/
//
// Description:
//   Format a file string using a printf-like format string
//
// fmt is a string where the following substitutions occur
//   %d - the directory name (no trailing /)
//   %f - the file name without the extension
//   %e - the file extension without the leading '.'
//   %% - the '%' character
//
// if fs is true the folder is in local file system format
//   (e.g. C:\images instead of /c/images)
//
// Examples:
//
// Reformat the file name:
// var f = new File("/c/work/test.jpg");
// f.strf("%d/%f_%e.txt") == "/c/work/test_jpg.txt"
//
// Change the file extension
// f.strf("%d/%f.psd") == "/c/work/test.psd"
//
// Convert to a file name in a subdirectory named after the extension
// f.strf("%d/%e/%f.%e") == "/c/work/jpg/test.jpg"
//
// Change the file extension and convert to a file name in a subdirectory named
//   after the new extension
// f.strf("%d/psd/%f.psd") == "/c/work/psd/test.psd"
//
// Advanced Substitution
//   A substring of the original file name, directory or extension may be 
//   taken by specifying a string length immediately following the % character. 
//   If the length is negative, the substring is taken from the end. The 
//   substring position (characters to ignore at the start or end of the 
//   string) may be given by a second optional value after a decimal point. 
// For example:
//
// var f = new File("Picture-123.jpg");
//
// f.strf("%7f.psd") == "Picture.psd"
// f.strf("%-.4f.psd") == "Picture.psd"
// f.strf("%7f.%-3f") == "Picture.123"
// f.strf("Meta%-3.1f.xmp") == "Meta12.xmp"
//
File.prototype.strf = function(fmt, fs) {
  var self = this;
  var name = decodeURI(self.name);
  //var name = (self.name);

  // get the portions of the full path name

  // extension
  var m = name.match(/\.([^\.\/]+)/);
  var e = m ? m[1] : '';

  // basename
  m = name.match(/(.*)\.[^\.\/]+/);
  var f = m ? m[1] : name;

  fs |= isMac();

  // full path...
  var d = decodeURI((fs ? self.parent.fsName : self.parent.absoluteURI));

  // parent directory...
  var p = decodeURI(self.parent.name);

  //var d = ((fs ? self.parent.fsName : self.parent.toString()));

  var str = fmt;
 
  // a regexp for the format specifiers

  var rex = /([^%]*)%(-)?(\d+)?(\.\d+)?(%|d|e|f|p)(.*)/;

  var result = '';

  while (m = rex.exec(str)) {
    var pre = m[1];
    var sig = m[2];
    var len = m[3];
    var ign = m[4];
    var typ = m[5];
    var post = m[6];

    var subst = '';

    if (typ == '%') {
      subst = '%';
    } else {
      var s = '';
      switch (typ) {
        case 'd': s = d; break;
        case 'e': s = e; break;
        case 'f': s = f; break;
        case 'p': s = p; break;
      }

      var strlen = s.length;

      if (strlen && (len || ign)) {
        ign = (ign ? Number(ign.slice(1)) : 0);
        if (len) {
          len = Number(len);
          if (sig) {
            var _idx = strlen - len - ign;
            subst = s.slice(_idx, _idx+len);
          } else {
            subst = s.slice(ign, ign+len);
          }
        } else {
          if (sig) {
            subst = s.slice(0, strlen-ign);
          } else {
            subst = s.slice(ign);
          }
        }

      } else {
        subst = s;
      }
    }

    result += pre + subst;
    str = post;
  }

  result += str;

  return result;
};
Folder.prototype.strf = File.prototype.strf;


/*
  From the exiftool documentation:
  Set the print format for GPS coordinates. FMT uses the same syntax as the
  printf format string. The specifiers correspond to degrees, minutes and
  seconds in that order, but minutes and seconds are optional. For example,
  the following table gives the output for the same coordinate using various
  formats: 

                FMT                  Output
        -------------------    ------------------
        "%d deg %d' %.2f"\"    54 deg 59' 22.80"   (the default)
        "%d deg %.4f min"      54 deg 59.3800 min
        "%.6f degrees"         54.989667 degrees

The common degree marker is � which is is a Unicode literal of \u00B0
*/
//
// Test cases
//
/*
Stdlib.strfGPSstr(undefined, "54.00 59.00' 22.80\"");
Stdlib.strfGPSstr(undefined, "28.00 9.97' 0.00\"");
Stdlib.strfGPSstr("%d deg %.4f min", "28.00 9.97' 0.00\"");
Stdlib.strfGPSstr("%d deg %.4f min", "28.00 9.50' 0.00\"");
Stdlib.strfGPSstr(undefined, "28.00 9.50' 0.00\"");
Stdlib.strfGPSstr("%f", "28.00 9.97' 0.00\"");
Stdlib.strfGPSstr("%f", "28.50 0.00' 0.00\"");
Stdlib.strfGPSstr(undefined, "28.50 0.00' 0.00\"");
Stdlib.strfGPSstr(undefined, "54,59,22");
Stdlib.strfGPSstr(undefined, "54,59.22");
Stdlib.strfGPSstr("%d deg %.4f min", "54,59.22");
Stdlib.strfGPSstr(undefined, "54 59 22");
Stdlib.strfGPSstr(undefined, "54.00 deg 59.00 min 22.23 secs");
*/
//

Stdlib.DEFAULT_GPS_FORMAT = "%d deg %d' %.2f\"";

Stdlib.strfGPSstr = function(fmtStr, gpsStr) {

  // This is the most likely format
  var r = gpsStr.match(/(\d+\.\d+) (\d+\.\d+)\' (\d+\.\d+)\"/);

  // This is the format from the XMP Schema spec
  if (!r) {
    var r2 = r = gpsStr.match(/(\d+)\,(\d+)(\,|\.)(\d+)/);
  }

  // This format should pick up just about anything else
  if (!r) {
    var rex = /(\d+(?:\.\d+)?)[^\d\.]+(\d+(?:\.\d+)?)[^\d\.]+(\d+(?:\.\d+)?)/;
    var r3 = r = gpsStr.match(rex);
  }

  if (!r) {
    return fmtStr;
  }

  // if we matched either the first or third patterns
  if (!r2) {
    var d = Number(r[1]);
    var m = Number(r[2]);
    var s = Number(r[3]);

    var xm = (d - Math.floor(d)) * 60;
    var xs = (m - Math.floor(m)) * 60;

    m += s/60;
    d += m/60;
    if (s == 0) {
      s = xs;
    }
    if (m == 0) {
      m = xm;
    }

    return Stdlib.strfGPS(fmtStr, d, m, s);
  }

  if (r2) {
    var d = Number(r[1]);

    var sep = r[3];

    if (sep == '.') {
      var m = Number(r[2]);
      var s = Number("0." + r[4]) * 60;

    } else {
      var m = Number(r[2]);
      var s = Number(r[4]);
    }
    return Stdlib.strfGPS(fmtStr, d, m, s);
  }

  // if we can't figure out what's going on, just return the format spec
  return fmtStr;
};

Stdlib.strfGPS = function(fmtStr, deg, min, sec) {
  if (sec == undefined) {
    sec = 0;
  }
  if (min == undefined) {
    min = 0;
  }
  if (min == Math.floor(min)) {
    min += sec/60;
  }
  if (deg == Math.floor(deg)) {
    deg += min/60;
  }
  if (fmtStr == undefined) {
    fmtStr = Stdlib.DEFAULT_GPS_FORMAT;
  }

  return String.sprintf(fmtStr, deg, min, sec);
};


// This script only works in CS4
Stdlib.loadXMPScript = function() {
  if (!ExternalObject.AdobeXMPScript) {
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
  }
};

// This script only works in CS4
Stdlib.unloadXMPScript = function(){
  if (ExternalObject.AdobeXMPScript) {
    ExternalObject.AdobeXMPScript.unload();
    ExternalObject.AdobeXMPScript = undefined;
  }
};

/*
d = Stdlib.toDescriptor({
  name: "test",
  num: 22,
  flag: true
});
o = Stdlib.fromDescriptor(d);
*/
Stdlib.toDescriptor = function(obj) {
  if (arguments.length != 1) {
    Error.runtimeError(1221, "obj"); // wrong number of arguments
  }
  if (obj == undefined) {
    Error.runtimeError(2, "obj");    // undefined
  }
  if (typeof(obj) != "object") {
    Error.runtimeError(21, "obj");   // is not an object
  }

  var nameID = cTID("nm  ");
  var valueID = cTID("Vl  ");
  var componentID = sTID("component");

  function addProperty(desc, nm, val) {
    var typ = typeof(val);

    var pdesc = new ActionDescriptor();
    pdesc.putString(nameID, nm);

    switch (typ) {
      case "number": {
        pdesc.putDouble(valueID, val);
        break;
      }
      case "string": {
        pdesc.putString(valueID, val);
        break;
      }
      case "boolean": {
        pdesc.putBoolean(valueID, val);
        break;
      }
      case "object": {
        pdesc.putString(valueID, val.toString());
        break;
      }
      case "undefined": pdesc = undefined; break;
      case "function":  pdesc = undefined; break;
      default:          pdesc = undefined; break;
    };
    desc.putObject(sTID(nm), componentID, pdesc);
  };

  var desc = new ActionDescriptor();

  for (var idx in obj) {
    if (idx.startsWith("_")) {
      continue;
    }
    var val = obj[idx];
    if (val || typeof(val) == "undefined" || typeof(val) == "function") {
      continue;
    }

    addProperty(desc, idx, val);
  }

  return desc;
};

Stdlib.fromDescriptor = function(desc, obj) {
  if (arguments.length < 1 || arguments.length > 2) {
    Error.runtimeError(1221);        // wrong number of arguments
  }
  if (desc == undefined) {
    Error.runtimeError(2, "desc");   // is undefined
  }
  if (typeof(desc) != "object") {
    Error.runtimeError(21, "desc");   // is not an object
  }
  if (!(desc instanceof ActionDescriptor)) {
    Error.runtimeError(1330);         // Invalid Type
  }

  var nameID = cTID("nm  ");
  var valueID = cTID("Vl  ");

  if (!obj) {
    obj = {};
  }

  function getPropertyValue(pdesc) {
    var typ = pdesc.getType(valueID);
    var val = undefined;

    switch (typ) {
      case DescValueType.DOUBLETYPE: {
        val = pdesc.getDouble(valueID);
        break;
      };
      case DescValueType.INTEGERTYPE: {
        val = pdesc.getInteger(valueID);
        break;
      };
      case DescValueType.STRINGTYPE: {
        val = pdesc.getString(valueID);
        break;
      };
      case DescValueType.BOOLEANTYPE: {
        val = pdesc.getBoolean(valueID);
        break;
      };
    };
    return val;
  };

  for (var i = 0; i < desc.count; i++) {
    var key = desc.getKey(i);
    var pdesc = desc.getObjectValue(key);
    var nm = pdesc.getString(nameID);
    var val = getPropertyValue(pdesc);
    if (val != undefined) {
      obj[nm] = val;
    }
  }

  return obj;
};

function toBoolean(s) {
  if (s == undefined) { return false; }
  if (s.constructor == Boolean) { return s.valueOf(); }
  if (s.constructor == String)  { return s.toLowerCase() == "true"; }
  return Boolean(s);
};

function isBoolean(s) {
  return (s != undefined && s.constructor == Boolean);
}

function toNumber(s) {
  if (s == undefined) { return NaN; }
  if (s.constructor == String && s.length == 0) { return NaN; }
  if (s.constructor == Number) { return s.valueOf(); }
  return Number(s.toString());
};

function isNumber(s) {
  return !isNaN(s);
}

function isString(s) {
  return (s != undefined && s.constructor == String);
}


function toFont(fs) {
  if (fs instanceof TextFont) { return fs.postScriptName; }

  var str = fs.toString();
  var f = Stdlib.determineFont(str);  // first, check by PS name

  return (f ? f.postScriptName : undefined);
};

"stdlib.js";
// EOF

//
// GenericUI
// This is a lightweight UI framework. All of the common code that you
// need to write for a ScriptUI-based application is abstracted out here.
//
// $Id$
// Copyright: (c)2005, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//

isPhotoshop = function() {
  return !!app.name.match(/photoshop/i);
};
isBridge = function() {
  return !!app.name.match(/bridge/i);
};
isInDesign = function() {
  return !!app.name.match(/indesign/i);
};
isESTK = function() {
  return !!app.name.match(/estoolkit/i);
};

_initVersionFunctions = function() {
  if (isPhotoshop()) {
    isCS4 = function()  { return app.version.match(/^11\./); };
    isCS3 = function()  { return app.version.match(/^10\./); };
    isCS2 = function()  { return app.version.match(/^9\./); };
    isCS  = function()  { return app.version.match(/^8\./); };
    isPS7 = function()  { return app.version.match(/^7\./); };

  } else {
    var appName = BridgeTalk.appName;
    var version = BridgeTalk.appVersion;

    if (isBridge()) {
      isCS4 = function()  { return version.match(/^3\./); };
      isCS3 = function()  { return version.match(/^2\./); };
      isCS2 = function()  { return version.match(/^1\./); };
      isCS  = function()  { return false; }
      isPS7 = function()  { return false; };

    } else if (isInDesign()) {
      isCS4  = function() { return false; }
      isCS3 = function()  { return version.match(/^5\./); };
      isCS2 = function()  { return version.match(/^4\./); };
      isCS  = function()  { return false; }
      isPS7 = function()  { return false; };

    } else if (isESTK()) {
      isCS4 = function()  { return version.match(/^3\./); };
      isCS3 = function()  { return version.match(/^2\./); };
      isCS2 = function()  { return version.match(/^1\./); };
      isCS  = function()  { return false; }
      isPS7 = function()  { return false; };

    } else {
      isCS4 = function()  { Error.runtimeError(9001,
                                               "Unsupported application")};
      isCS3 = function()  { Error.runtimeError(9001,
                                               "Unsupported application")};
      isCS2 = function()  { Error.runtimeError(9001,
                                               "Unsupported application")};
      isCS  = function()  { Error.runtimeError(9001,
                                               "Unsupported application")};
      isPS7 = function()  { Error.runtimeError(9001,
                                               "Unsupported application")};
    }
  }
};

var isCS3;
if (!isCS3) {
  _initVersionFunctions();
}

//
// GenericUI is the core class for this framework.
//
GenericUI = function() {
  var self = this;

  self.title = "GenericUI";  // the window title
  self.notesSize = 50;       // the height of the Notes text panel
                             // set to 0 to disable
  self.winRect = {           // the rect for the window
    x: 200, 
    y: 200,
    w: 100,
    h: 200
  };
  self.documentation = "This is a Photoshop JavaScript script";

  self.iniFile = undefined; // the name of the ini file used for this script
  self.saveIni = true;      // Set to 'undefined' to disable saving  to the
                            // ini file
  self.hasBorder = true;

  self.notesTxt   = 'Notes:';
  self.processTxt = 'Process';
  self.cancelTxt  = 'Cancel';

  self.buttonOneTxt = undefined;
  self.buttonTwoTxt = undefined;

  self.settingsPanel = false;
  self.optionsClass = undefined;
  self.win = undefined;
  self.window = undefined;
  self.doc = undefined;
  self.ini = undefined;

  self.setDefault = isCS2() || isCS3() || isCS4();

  self._logDebug = false;

  self.parentWin = undefined;

  self.windowCreationProperties = undefined;

  self.buttonWidth = 90;

  self.xmlEnabled = false;
};

GenericUI.getTextOfs = function() { 
  return (isCS3() || isCS4()) ? 3 : 0; 
};

//
// Returns the xtools preferences folder
//
GenericUI._getPreferencesFolder = function() {
  var userData = Folder.userData;

  if (!userData || !userData.exists) {
    userData = Folder("~");
  }

  var folder = new Folder(userData + "/xtools");

  if (!folder.exists) {
    folder.create();
  }

  return folder;
};

isWindows = function() {
  return !!$.os.match(/windows/i);
};
isMac = function() {
  return !isWindows();
};

GenericUI.ENCODING = "LATIN1";

GenericUI.preferencesFolder = GenericUI._getPreferencesFolder();
GenericUI.PREFERENCES_FOLDER = GenericUI.preferencesFolder;

//
// createWindow constructs a window with a documentation panel and a app panel
// and 'Process' and 'Cancel' buttons. 'createPanel' (implemented by the app
// script) is invoked by this method to create the app panel.
//
GenericUI.prototype.createWindow = function(ini, doc) {
  var self = this;
  var wrect = self.winRect;

  function rectToBounds(r) {
    return[r.x, r.y, r.x+r.w, r.y+r.h];
  };
  var win = new Window('dialog', self.title, rectToBounds(wrect),
                       self.windowCreationProperties);

  win.mgr = self;  // save a ref to the UI manager
  win.ini = ini;
  if (!self.ini) {
    self.ini = win.ini;
  }
  self.window = self.win = win;
  self.doc = doc;

  var xOfs = 10;
  var yy = 10;

  var hasButtons = (self.processTxt || self.cancelTxt ||
                    self.buttonOneTxt || self.buttonTwoTxt);

  var hasNotesPanel = (self.notesSize && self.documentation);

  if (hasNotesPanel) {
    // define the notes panel (if needed) and insert the documentation text
    var docPnl = win.add('panel',
                         [xOfs, yy, wrect.w-xOfs, self.notesSize+10],
                         self.notesTxt);

    var y = (isCS() ? 20 : 10);
    var ymax = (isCS() ? self.notesSize-10 : self.notesSize-20);
    var docs = self.documentation;

    // XXX-CS4 Need to test
    if (isCS3() || isCS4()) {
      docs = docs.replace(/&/g, '&&');
    }
    docPnl.add('statictext',
               [10,y,docPnl.bounds.width-10,ymax],
               docs,
               {multiline:true});
    
    yy += self.notesSize + 10;
  }

  var appBottom = wrect.h - 10;
  if (self.settingsPanel) {
    appBottom -=  70;
  }
  if (hasButtons) {
    appBottom -=  50;
  }

  // Now, create the application panel
  var pnlType = 'panel';
  if (!isCS()) {
    pnlType = (self.hasBorder ? 'panel' : 'group');
  }
  win.appPnl = win.add(pnlType, [xOfs, yy, wrect.w-xOfs, appBottom]);

  win.appPanel = win.appPnl;

  yy = appBottom + 10;

  // and call the application callback function with the ini object
  self.createPanel(win.appPnl, ini, doc);

  // Settings Panel
  if (self.settingsPanel) {
    win.settingsPnl = win.add('panel', [xOfs,yy,wrect.w-xOfs,yy+60]);
    win.settingsPnl.text = 'Settings';
    self.createSettingsPanel(win.settingsPnl, ini);
  }

  if (hasButtons) {
    // Create the Process/Cancel buttons
    var btnY = wrect.h - 40;
    var btnW = self.buttonWidth;
    var btnOfs;

    var btns = ['processTxt', 'cancelTxt', 'buttonOneTxt', 'buttonTwoTxt'];

    var btnCnt = 0;

    for (var i = 0; i < btns.length; i++) {
      if (self[btns[i]]) {
        btnCnt++;
      }
    }

    if (!self.processTxt || !self.cancelTxt) {
      btnOfs = (wrect.w - (btnW)) / 2;
    } else {
      btnOfs = (wrect.w - (2 * btnW)) / 3;
    }

    if (self.processTxt) {
      win.process = win.add('button',
                            [btnOfs,btnY,btnOfs+btnW,btnY+20],
                            self.processTxt);
      if (self.setDefault) {
        win.defaultElement = win.process;
      }

      // And now the callback for the process button.
      win.process.onClick = function() {
        try {
          // validate the contents of the window
          var rc = this.parent.validate();
          
          if (!rc) {
            // if there was a terminal problem with the validation,
            // close up the window
            this.parent.close(2);
          }
        } catch (e) {
          var msg = Stdlib.exceptionMessage(e);
          Stdlib.log(msg);
          alert(msg);
        }
      }
    }
    
    if (self.cancelTxt) {
      win.cancel  = win.add('button',
                            [wrect.w-btnOfs-btnW,btnY,wrect.w-btnOfs,btnY+20],
                            self.cancelTxt);
      
      win.cancelElement = win.cancel;
      
      win.cancel.onClick = function() {
        this.parent.close(2);
      }
    }
  }

  // Point to the validation
  win.validate = GenericUI.validate;

  return win;
};
GenericUI.processCB = function() {
  try {
    var win = GenericUI.getWindow(this);
    // validate the contents of the window
    var rc = win.validate();
          
    if (!rc) {
      // if there was a terminal problem with the validation,
      // close up the window
      win.close(2);
    }
  } catch (e) {
    var msg = Stdlib.exceptionMessage(e);
    Stdlib.log(msg);
    alert(msg);
  }
};
GenericUI.cancelCB = function() {
  var win = GenericUI.getWindow(this);
  win.parent.close(2);
};

GenericUI.prototype.moveWindow = function(x, y) {
  var win = this.win;

  if (x != undefined && !isNaN(x)) {
    var width = win.bounds.width;
    if (isCS()) {
      x -= 2;
    }
    win.bounds.left = x;
    win.bounds.width = width; //  Not sure if this is really needed
  }
  if (y != undefined && !isNaN(y)) {
    var height = win.bounds.height; 
    if (isCS()) {
      // y -= 22;
    }
    win.bounds.top = y;
    win.bounds.height = height;  //  Not sure if this is really needed
  }
};
GenericUI.getWindow = function(pnl) {
  if (pnl.window) {
    return pnl.window;
  }
  while (pnl && !(pnl instanceof Window)) {
    pnl = pnl.parent;
  }
  return pnl;
};
GenericUI.prototype.createSettingsPanel = function(pnl, ini) {
  var win = GenericUI.getWindow(pnl);

  pnl.text = 'Settings';
  pnl.win = win;

  pnl.fileMask = "INI Files: *.ini, All Files: *.*";
  pnl.loadPrompt = "Please choose a settings file to read";
  pnl.savePrompt = "Please choose a settings file to write";
  pnl.defaultFile = undefined;
  
  var w = pnl.bounds[2] - pnl.bounds[0];
  var offsets = [w*0.2, w*0.5, w*0.8];
  var y = 15;
  var bw = 90;

  var x = offsets[0]-(bw/2);
  pnl.load = pnl.add('button', [x,y,x+bw,y+20], 'Load...');
  x = offsets[1]-(bw/2);
  pnl.save = pnl.add('button', [x,y,x+bw,y+20], 'Save...');
  x = offsets[2]-(bw/2);
  pnl.reset = pnl.add('button', [x,y,x+bw,y+20], 'Reset');

  pnl.load.onClick = function() {
    var pnl = this.parent;
    var win = pnl.win;
    var mgr = win.mgr;
    var def = pnl.defaultFile;

    if (!def) {
      if (mgr.iniFile) {
        def = GenericUI.iniFileToFile(mgr.iniFile);
      } else {
        def = GenericUI.iniFileToFile("~/settings.ini");
      }
    }

    var f;
    var prmpt = pnl.loadPrompt;
    var sel = Stdlib.createFileSelect(pnl.fileMask);
    if (isMac()) {
      sel = undefined;
    }
    f = Stdlib.selectFileOpen(prmpt, sel, def);
    if (f) {
      win.ini = mgr.readIniFile(f);
      win.close(4);

      if (pnl.onLoad) {
        pnl.onLoad(f);
      }
    }
  }
  pnl.save.onClick = function() {
    var pnl = this.parent;
    var win = pnl.win;
    var mgr = win.mgr;
    var def = pnl.defaultFile;

    if (!def) {
      if (mgr.iniFile) {
        def = GenericUI.iniFileToFile(mgr.iniFile);
      } else {
        def = GenericUI.iniFileToFile("~/settings.ini");
      }
    }

    var f;
    var prmpt = pnl.savePrompt;
    var sel = Stdlib.createFileSelect(pnl.fileMask);

    if (isMac()) {
      sel = undefined;
    }
    f = Stdlib.selectFileSave(prmpt, sel, def);

    if (f) {
      var mgr = win.mgr;
      var res = mgr.validatePanel(win.appPnl, win.ini);

      if (typeof(res) != 'boolean') {
        mgr.writeIniFile(f, res);

        if (pnl.onSave) {
          pnl.onSave(f);
        }
      }
    }
  }
  pnl.reset.onClick = function() {
    var pnl = this.parent;
    var win = pnl.win;
    var mgr = win.mgr;

    if (mgr.defaultIniFile) {
      win.ini = mgr.readIniFile(mgr.defaultIniFile);

    } else if (mgr.ini) {
      win.ini = mgr.ini;
    }

    win.close(4);
    if (pnl.onReset) {
      pnl.onReset();
    }
  }
};

GenericUI.prototype.createFontPanel = function(pnl, ini, label, lwidth) {
  var win = GenericUI.getWindow(pnl);

  pnl.win = win;

  var w = pnl.bounds[2] - pnl.bounds[0];
  var xofs = 0;
  var y = 0;

  if (pnl.type == 'panel') {
    xofs += 5;
    y += 5;
  }

  var tOfs = GenericUI.getTextOfs();

  var x = xofs;
  if (label == undefined) {
    label = "Font:";
    lwidth = 40;
  }

  if (label != '') {
    pnl.label = pnl.add('statictext', [x,y+tOfs,x+lwidth,y+22+tOfs], label);
    x += lwidth;
  }
  pnl.family = pnl.add('dropdownlist', [x,y,x+180,y+22]);
  x += 185;
  pnl.style  = pnl.add('dropdownlist', [x,y,x+110,y+22]);
  x += 115;
  pnl.fontSize  = pnl.add('edittext', [x,y,x+30,y+22], "12");
  x += 32;
  pnl.sizeLabel = pnl.add('statictext', [x,y+tOfs,x+15,y+22+tOfs], 'pt');

  pnl.fontTable = GenericUI._getFontTable();
  var names = [];
  for (var idx in pnl.fontTable) {
    names.push(idx);
  }
  names.sort();
  for (var i = 0; i < names.length; i++) {
    pnl.family.add('item', names[i]);
  }
  pnl.family.onChange = function() {
    var pnl = this.parent;
    var sel = pnl.family.selection.text;
    var family = pnl.fontTable[sel];
    
    pnl.style.removeAll();

    var styles = family.styles;

    for (var i = 0; i < styles.length; i++) {
      var it = pnl.style.add('item', styles[i].style);
      it.font = styles[i].font;
    }
    if (pnl._defaultStyle) {
      var it = pnl.style.find(pnl._defaultStyle);
      pnl._defaultStyle = undefined;
      if (it) {
        it.selected = true;
      } else {
        pnl.style.items[0].selected = true;
      }
    } else {
      pnl.style.items[0].selected = true;
    }
  }
  pnl.family.items[0].selected = true;

  pnl.fontSize.onChanging = GenericUI.numberKeystrokeFilter;

  pnl.setFont = function(str, size) {
    var pnl = this;
    if (!str) {
      return;
    }
    var font = (str.typename == "TextFont") ? str : Stdlib.determineFont(str);
    if (font) {
      var it = pnl.family.find(font.family);
      if (it) {
        it.selected = true;
        pnl._defaultStyle = font.style;
      }
    }
    pnl.fontSize.text = size;
  }
  pnl.getFont = function() {
    var pnl = this;
    var font = pnl.style.selection.font
    return { font: font.postScriptName, size: Number(pnl.fontSize.text) };

    var fsel = pnl.family.selection.text;
    var ssel = pnl.style.selection.text;
    var family = pnl.fontTable[sel];
    var styles = familyStyles;
    var font = undefined;

    for (var i = 0; i < styles.length && font == undefined; i++) {
      if (styles[i].style == ssel) {
        font = styles[i].font;
      }
    }
    return { font: font, size: Number(font.fontSize) };
  }

  return pnl;
};
GenericUI._getFontTable = function() {
  var fonts = app.fonts;
  var fontTable = {};
  for (var i = 0; i < fonts.length; i++) {
    var font = fonts[i];
    var entry = fontTable[font.family];
    if (!entry) {
      entry = { family: font.family, styles: [] };
      fontTable[font.family] = entry;
    }
    entry.styles.push({ style: font.style, font: font });
  }
  return fontTable;
};

if (!isCS()) {
//============================= FileNaming ====================================
//
// FileNaming is only available in PS at present
//
FileNamingOptions = function(obj, prefix) {
  var self = this;

  self.fileNaming = [];      // array of FileNamingType and/or String
  self.startingSerial = 1;
  self.windowsCompatible = isWindows(); 
  self.macintoshCompatible = isMac();
  self.unixCompatible = true;

  if (obj) {
    if (prefix == undefined) {
      prefix = '';
    }
    var props = FileNamingOptions.props;
    for (var i = 0; i < props.length; i++) {
      var name = props[i];
      var oname = prefix + name;
      if (oname in obj) {
        self[name] = obj[oname];
      }
    }

    if (self.fileNaming.constructor == String) {
      self.fileNaming = self.fileNaming.split(','); 
    }
  }
};
FileNamingOptions.prototype.typename = FileNamingOptions;
FileNamingOptions.props = ["fileNaming", "startingSerial", "windowsCompatible",
                           "macintoshCompatible", "unixCompatible"];

FileNamingOptions.prototype.format = function(file, cdate) {
  var self = this;
  var str  = '';

  file = Stdlib.convertFptr(file);

  if (!cdate) {
    cdate = file.created || new Date()
  }

  var fname = file.strf("%f");
  var ext = file.strf("%e");

  var parts = self.fileNaming;

  if (parts.constructor == String) {
    parts = parts.split(',');
  }

  var serial = self.startingSerial;
  var aCode = 'a'.charCodeAt(0);
  var ACode = 'A'.charCodeAt(0);

  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];
    var fnel = FileNamingElements.getByName(p);

    if (!fnel) {
      if (p == '--') {
        p = '-';
      }
      str += p;
      continue;
    }

    var s = '';
    switch (fnel.type) {
    case FileNamingType.DOCUMENTNAMEMIXED: s = fname; break;
    case FileNamingType.DOCUMENTNAMELOWER: s = fname.toLowerCase(); break;
    case FileNamingType.DOCUMENTNAMEUPPER: s = fname.toUpperCase(); break;
    case FileNamingType.SERIALNUMBER1:     s = "%d".sprintf(serial++); break;
    case FileNamingType.SERIALNUMBER2:     s = "%02d".sprintf(serial++); break;
    case FileNamingType.SERIALNUMBER3:     s = "%03d".sprintf(serial++); break;
    case FileNamingType.SERIALNUMBER4:     s = "%04d".sprintf(serial++); break;
    case FileNamingElement.SERIALNUMBER5:  s = "%05d".sprintf(serial++); break;
    case FileNamingType.EXTENSIONLOWER:    s = '.' + ext.toLowerCase(); break;
    case FileNamingType.EXTENSIONUPPER:    s = '.' + ext.toUpperCase(); break;
    case FileNamingType.SERIALLETTERLOWER:
      s = String.fromCharCode(aCode + (serial++)); break;
    case FileNamingType.SERIALLETTERUPPER:
      s = String.fromCharCode(ACode + (serial++)); break;
    }

    if (s) {
      str += s;
      continue;
    }

    var fmt = '';
    switch (fnel.type) {
    case FileNamingType.MMDDYY:   fmt = "%m%d%y"; break;
    case FileNamingType.MMDD:     fmt = "%m%d"; break;
    case FileNamingType.YYYYMMDD: fmt = "%Y%m%d"; break;
    case FileNamingType.YYMMDD:   fmt = "%y%m%d"; break;
    case FileNamingType.YYDDMM:   fmt = "%y%d%m"; break;
    case FileNamingType.DDMMYY:   fmt = "%d%m%y"; break;
    case FileNamingType.DDMM:     fmt = "%d%m"; break;
    }
    
    if (fmt) {
      str += cdate.strftime(fmt);
      continue;
    }
  }

  self._serial = serial;

  return str;
};

FileNamingOptions.prototype.copyTo = function(opts, prefix) {
  var self = this;
  var props = FileNamingOptions.props;

  for (var i = 0; i < props.length; i++) {
    var name = props[i];
    var oname = prefix + name;
    opts[oname] = self[name];
    if (name == 'fileNaming' && self[name] instanceof Array) {
      opts[oname] = self[name].join(',');
    } else {
      opts[oname] = self[name];
    }
  }
};


// this array is folder into FileNamingElement
FileNamingOptions._examples =
  [ "",
    "Document",
    "document",
    "DOCUMENT",
    "1",
    "01",
    "001",
    "0001",
    "a",
    "A",
    "103107",
    "1031",
    "20071031",
    "071031",
    "073110",
    "311007",
    "3110",
    ".psd",
    ".PSD"
    ];

FileNamingOptions.prototype.getExample = function() {
  var self = this;
  var str = '';
  return str;
};

FileNamingElement = function(name, menu, type, sm, example) {
  var self = this;
  self.name = name;
  self.menu = menu;
  self.type = type;
  self.smallMenu = sm;
  self.example = (example || '');
};
FileNamingElement.prototype.typename = FileNamingElement;

FileNamingElements = [];
FileNamingElements._add = function(name, menu, type, sm, ex) {
  FileNamingElements.push(new FileNamingElement(name, menu, type, sm, ex));
}

FileNamingElement.SERIALNUMBER5 = {
  toString: function() { return "FileNamingElement.SERIALNUMBER5"; }
};

FileNamingElements._init = function() {

  FileNamingElements._add("", "", "", "", "");

  if (!isPhotoshop()) {
    return;
  }

  // the names here correspond to the sTID symbols used when making
  // a Batch request via the ActionManager interface. Except for "Name",
  // which should be "Nm  ".
  // the names should be the values used when serializing to and from
  // an INI file.
  // A FileNamingOptions object needs to be defined.
  FileNamingElements._add("Name", "Document Name",
                          FileNamingType.DOCUMENTNAMEMIXED,
                          "Name", "Document");
  FileNamingElements._add("lowerCase", "document name",
                          FileNamingType.DOCUMENTNAMELOWER,
                          "name", "document");
  FileNamingElements._add("upperCase", "DOCUMENT NAME",
                          FileNamingType.DOCUMENTNAMEUPPER,
                          "NAME", "DOCUMENT");
  FileNamingElements._add("oneDigit", "1 Digit Serial Number",
                          FileNamingType.SERIALNUMBER1,
                          "Serial #", "1");
  FileNamingElements._add("twoDigit", "2 Digit Serial Number",
                          FileNamingType.SERIALNUMBER2,
                          "Serial ##", "01");
  FileNamingElements._add("threeDigit", "3 Digit Serial Number",
                          FileNamingType.SERIALNUMBER3,
                          "Serial ###", "001");
  FileNamingElements._add("fourDigit", "4 Digit Serial Number",
                          FileNamingType.SERIALNUMBER4,
                          "Serial ####", "0001");
  FileNamingElements._add("fiveDigit", "5 Digit Serial Number",
                          FileNamingElement.SERIALNUMBER5,
                          "Serial #####", "00001");
  FileNamingElements._add("lowerCaseSerial", "Serial Letter (a, b, c...)",
                          FileNamingType.SERIALLETTERLOWER,
                          "Serial a", "a");
  FileNamingElements._add("upperCaseSerial", "Serial Letter (A, B, C...)",
                          FileNamingType.SERIALLETTERUPPER,
                          "Serial A", "A");
  FileNamingElements._add("mmddyy", "mmddyy (date)",
                          FileNamingType.MMDDYY,
                          "mmddyy", "103107");
  FileNamingElements._add("mmdd", "mmdd (date)",
                          FileNamingType.MMDD,
                          "mmdd", "1031");
  FileNamingElements._add("yyyymmdd", "yyyymmdd (date)",
                          FileNamingType.YYYYMMDD,
                          "yyyymmdd", "20071031");
  FileNamingElements._add("yymmdd", "yymmdd (date)",
                          FileNamingType.YYMMDD,
                          "yymmdd", "071031");
  FileNamingElements._add("yyddmm", "yyddmm (date)",
                          FileNamingType.YYDDMM,
                          "yyddmm", "073110");
  FileNamingElements._add("ddmmyy", "ddmmyy (date)",
                          FileNamingType.DDMMYY,
                          "ddmmyy", "311007");
  FileNamingElements._add("ddmm", "ddmm (date)",
                          FileNamingType.DDMM,
                          "ddmm", "3110");
  FileNamingElements._add("lowerCaseExtension", "extension",
                          FileNamingType.EXTENSIONLOWER,
                          "ext", ".psd");
  FileNamingElements._add("upperCaseExtension", "EXTENSION",
                          FileNamingType.EXTENSIONUPPER,
                          "EXT", ".PSD");
};
FileNamingElements._init();
FileNamingElements.getByName = function(name) {
  return Stdlib.getByName(FileNamingElements, name);
};

GenericUI.prototype.createFileNamingPanel = function(pnl, ini,
                                                     prefix,
                                                     useSerial,
                                                     useCompatibility,
                                                     columns) {
  var win = GenericUI.getWindow(pnl);
  if (useSerial == undefined) {
    useSerial = false
  }
  if (useCompatibility == undefined) {
    useCompatibility = false
  }
  if (columns == undefined) {
    columns = 3;
  } else {
    if (columns != 2 && columns != 3) {
      Error.runtimeError(9001, "Internal Error: Bad column spec for FileNaming panel");
    }
  }

  pnl.fnmenuElements = [];
  for (var i = 0; i < FileNamingElements.length; i++) {
    var fnel = FileNamingElements[i];
    pnl.fnmenuElements.push(fnel.menu);
  }
  var extrasMenuEls = [
    "-",
    "Create Custom Text",
    "Edit Custom Text",
    "Delete Custom Text",
    "-",
    ];
  for (var i = 0; i < extrasMenuEls.length; i++) {
    pnl.fnmenuElements.push(extrasMenuEls[i]);
  }

  pnl.win = win;
  if (prefix == undefined) {
    prefix = '';
  }
  pnl.prefix = prefix;

  var w = pnl.bounds[2] - pnl.bounds[0];
  var xofs = 0;
  var y = 0;

  if (pnl.type == 'panel') {
    xofs += 5;
    y += 10;
  }
  pnl.text = "File Naming";

  var tOfs = GenericUI.getTextOfs();

  if (columns == 2) {
    var menuW = (w - 50)/2;

  } else {
    var menuW = (w - 65)/3;
  }

  var opts = new FileNamingOptions(ini, pnl.prefix);

  x = xofs;

  pnl.exampleLabel = pnl.add('statictext', [x,y+tOfs,x+70,y+22+tOfs],
                             'Example:');
  x += 70;
  pnl.example = pnl.add('statictext', [x,y+tOfs,x+300,y+22+tOfs], '');
  y += 30;
  x = xofs;

  pnl.menus = [];

  pnl.menus[0]  = pnl.add('dropdownlist', [x,y,x+menuW,y+22],
                          pnl.fnmenuElements);
  x += menuW + 5;
  pnl.add('statictext', [x,y+tOfs,x+10,y+22+tOfs], '+');

  x += 15;

  pnl.menus[1]  = pnl.add('dropdownlist', [x,y,x+menuW,y+22],
                          pnl.fnmenuElements);
  x += menuW + 5;
  pnl.add('statictext', [x,y+tOfs,x+10,y+22+tOfs], '+');

  if (columns == 2) {
    y += 30;
    x = xofs;
  } else {
    x += 15;
  }
  
  pnl.menus[2]  = pnl.add('dropdownlist', [x,y,x+menuW,y+22],
                          pnl.fnmenuElements);
  x += menuW + 5;
  pnl.add('statictext', [x,y+tOfs,x+10,y+22+tOfs], '+');

  if (columns == 3) {
    y += 30;
    x = xofs;

  } else {
    x += 15;
  }

  pnl.menus[3]  = pnl.add('dropdownlist', [x,y,x+menuW,y+22],
                          pnl.fnmenuElements);
  x += menuW + 5;
  pnl.add('statictext', [x,y+tOfs,x+10,y+22+tOfs], '+');

  if (columns == 2) {
    y += 30;
    x = xofs;

  } else {
    x += 15;
  }

  pnl.menus[4]  = pnl.add('dropdownlist', [x,y,x+menuW,y+22],
                          pnl.fnmenuElements);
  x += menuW + 5;
  pnl.add('statictext', [x,y+tOfs,x+10,y+22+tOfs], '+');

  x += 15;

  pnl.menus[5]  = pnl.add('dropdownlist', [x,y,x+menuW,y+22],
                          pnl.fnmenuElements);
  y += 30;
  x = xofs;

  pnl.addMenuElement = function(text) {
    var pnl = this;
    for (var i = 0; i < 6; i++) {
      var vmenu = pnl.menus[i];
      vmenu.add('item', text);
    }
  }

  pnl.useSerial = useSerial;
  if (useSerial) {
    pnl.add('statictext', [x,y+tOfs,x+80,y+22+tOfs], 'Starting serial#:');
    x += 90;
    pnl.startingSerial = pnl.add('edittext', [x,y,x+50,y+22],
                                 opts.startingSerial);
    y += 30;
    x = xofs;
    pnl.startingSerial.onChanging = GenericUI.numberKeystrokeFilter;
  }
  
  pnl.useCompatibility = useCompatibility;
  if (useCompatibility) {
    pnl.add('statictext', [x,y+tOfs,x+80,y+22+tOfs], 'Compatibility:');
    x += 90;
    pnl.compatWindows = pnl.add('checkbox', [x,y,x+70,y+22], 'Windows');
    x += 80;
    pnl.compatMac = pnl.add('checkbox', [x,y,x+70,y+22], 'MacOS');
    x += 80;
    pnl.compatUnix = pnl.add('checkbox', [x,y,x+70,y+22], 'Unix');

    pnl.compatWindows.value = opts.windowsCompatible;
    pnl.compatMac.value = opts.macintoshCompatible;
    pnl.compatUnix.value = opts.unixCompatible;
  }

  function menuOnChange() {
    var pnl = this.parent;
    var win = GenericUI.getWindow(pnl);
    if (pnl.processing) {
      return;
    }
    pnl.processing = true;
    try {
      var menu = this;
      if (!menu.selection) {
        return;
      }

      var currentSelection = menu.selection.index;
      var lastSelection = menu.lastMenuSelection;

      menu.lastMenuSelection = menu.selection.index;

      var lastWasCustomText = (lastSelection >= pnl.fnmenuElements.length);

      var sel = menu.selection.text;
      if (sel == "Create Custom Text") {
        var text = GenericUI.createCustomTextDialog(win,
                                                    "Create Custom Text",
                                                    "new");
        if (text) {
          if (text.match(/^\-+$/)) {
            text += '-';
          }
          if (!menu.find(text)) {
            pnl.addMenuElement(text);
          }
        
          var it = menu.find(text);
          menu.selection = it;
          menu.lastMenuSelection = it.index;

        } else {
          if (lastSelection >= 0) {
            menu.selection = menu.items[lastSelection];
            menu.lastMenuSelection = lastSelection;

          } else {
            menu.selection = menu.items[0];
          }
        }

      } else if (lastWasCustomText) {
        if (sel == "Edit Custom Text") {
          var lastText = menu.items[lastSelection].text;
          var text = GenericUI.createCustomTextDialog(win,
                                                      "Edit Custom Text",
                                                      "edit",
                                                      lastText);
          if (text) {
            for (var i = 0; i < 6; i++) {
              var vmenu = pnl.menus[i];
              var it = vmenu.add('item', text);

              if (vmenu.selection &&
                  vmenu.selection.index == lastSelection) {

                // if a menu already has the previous version of this edited
                // entry, we have to remove the old one before setting the
                // new one or else the menu selection gets lost
                vmenu.remove(lastSelection);
                vmenu.selection = it;

              } else {
                var it = vmenu.selection;
                vmenu.remove(lastSelection);
                vmenu.selection = it;
              }
            }
        
            var it = menu.find(text);
            menu.selection = it;
            pnl.lastMenuSelection = it.index;

          } else {
            if (lastSelection >= 0) {
              menu.selection = menu.items[lastSelection];
              menu.lastMenuSelection = lastSelection;

            } else {
              menu.selection = menu.items[0];
            }
          }

        } else if (sel == "Delete Custom Text") {
          var lastText = menu.items[lastSelection].text;
          if (confirm("Do you really want to remove \"" + lastText + "\"?")) {
            for (var i = 0; i < 6; i++) {
              var vmenu = pnl.menus[i];
              vmenu.remove(lastSelection);
            }
            menu.selection = menu.items[0];

          } else {
            menu.selection = menu.items[lastSelection];
            menu.lastMenuSelection = lastSelection;
          }

        } else {
          //alert("Internal error, Custom Text request");
        }

      } else {
        if (lastSelection >= 0 && (sel == "Edit Custom Text" ||
                                   sel == "Delete Custom Text")) {
          menu.selection = menu.items[lastSelection];
          menu.lastMenuSelection = lastSelection;
        }
      }

      var example = '';
      var format = [];

      for (var i = 0; i < 6; i++) {
        var vmenu = pnl.menus[i];
        if (vmenu.selection) {
          var fmt = '';
          var text = vmenu.selection.text;
          var fne = Stdlib.getByProperty(FileNamingElements, "menu", text);
          if (fne) {
            text = fne.example;
            fmt = fne.name;
          } else {
            fmt = text;
          }

          if (text) {
            if (text.match(/^\-+$/)) {
              text = text.substr(1);
            }
            example += text;
          }

          if (fmt) {
            if (fmt.match(/^\-+$/)) {
              fmt = fmt.substr(1);
            }
            format.push(fmt);
          }
        }
      }
      if (pnl.example) {
        pnl.example.text = example;
      }
      format = format.join(",");
      var win = GenericUI.getWindow(pnl);
      if (win.mgr.updateNamingFormat) {
        win.mgr.updateNamingFormat(format, example);
      }

    } finally {
      pnl.processing = false;
    }

    if (pnl.onChange) {
      pnl.onChange();
    }
  }

  // default all slots to ''
  for (var i = 0; i < 6; i++) {
    var menu = pnl.menus[i];
    menu.selection = menu.items[0];
    menu.lastMenuSelection = 0;
  }

  for (var i = 0; i < 6; i++) {
    var name = opts.fileNaming[i];
    if (name) {
      var fne = FileNamingElements.getByName(name);
      var it;

      if (!fne) {
        if (name.match(/^\-+$/)) {
          name += '-';
        }
        it = pnl.menus[i].find(name);
        if (!it) {
          pnl.addMenuElement(name);
          it = pnl.menus[i].find(name);
        }
      } else {
        it = pnl.menus[i].find(fne.menu);
      }
      pnl.menus[i].selection = it;
    }
  }

//   pnl.menus[0].selection = pnl.menus[0].find("document name");
//   pnl.menus[0].lastMenuSelection = pnl.menus[0].selection.index;
//   pnl.menus[1].selection = pnl.menus[1].find("extension");
//   pnl.menus[1].lastMenuSelection = pnl.menus[1].selection.index;

  for (var i = 0; i < 6; i++) {
    var menu = pnl.menus[i];
    menu.onChange = menuOnChange;
  }

  pnl.getFileNamingOptions = function(ini) {
    var pnl = this;
    var fileNaming = [];

    for (var i = 0; i < 6; i++) {
      var menu = pnl.menus[i];

      if (menu.selection) {
        var idx = menu.selection.index;

        if (idx) {
          // [0] is the "" item so we ignore it
          var fnel = FileNamingElements[idx];
          if (fnel) {
            fileNaming.push(fnel.name);

          } else {
            // its a custom naming option
            var txt = menu.selection.text;
            if (txt.match(/^\-+$/)) {
              txt = txt.substr(1);
            }
            fileNaming.push(txt);
          }
        }
      }
    }

    var prefix = pnl.prefix;
    var opts = new FileNamingOptions(ini, prefix);
    opts.fileNaming = fileNaming;

    if (pnl.startingSerial) {
      opts.startingSerial = Number(pnl.startingSerial.text);
    }
    if (pnl.compatWindows) {
      opts.windowsCompatible = pnl.compatWindows.value;
    }
    if (pnl.compatMac) {
      opts.macintoshCompatible = pnl.compatMac.value;
    }
    if (pnl.compatUnix) {
      opts.unixCompatible = pnl.compatUnix.value;
    }
    return opts;
  }
  pnl.getFilenamingOptions = pnl.getFileNamingOptions;

  // XXX-CS4 Need to test
  if (isCS3() || isCS4()) {
    pnl.menus[0].onChange();
  }

  return pnl;
};
GenericUI.createCustomTextDialog = function(win, title, mode, init) {
  var rect = {
    x: 200, 
    y: 200,
    w: 350,
    h: 150
  };

  function rectToBounds(r) {
    return[r.x, r.y, r.x+r.w, r.y+r.h];
  };

  var cwin = new Window('dialog', title || 'Custom Text Editor',
                        rectToBounds(rect));

  cwin.text = title || 'Custom Text Editor';
  if (win) {
    cwin.center(win);
  }

  var xofs = 10;
  var y = 10;
  var x = xofs;

  var tOfs = GenericUI.getTextOfs();

  cwin.add('statictext', [x,y+tOfs,x+300,y+22+tOfs],
           "Please enter the desired Custom Text: ");
  y += 30;
  cwin.customText = cwin.add('edittext', [x,y,x+330,y+22]);

  cwin.customText.onChanging = function() {
    cwin = this.parent;
    var text = cwin.customText.text;

    if (cwin.initText) {
      cwin.saveBtn.enabled = (text.length > 0) && (text != cwin.initText);
    } else {
      cwin.saveBtn.enabled = (text.length > 0);
    }
  }

  if (init) {
    cwin.customText.text = init;
    cwin.initText = init;
  }

  y += 50;
  x += 100;
  cwin.saveBtn = cwin.add('button', [x,y,x+40,y+22], "Save");
  cwin.saveBtn.enabled = false;

  x += 100;
  cwin.cancelBtn = cwin.add('button', [x,y,x+40,y+22], "Cancel");

  cwin.defaultElement = cwin.saveBtn;

  var res = cwin.show();
  return (res == 1) ? cwin.customText.text : undefined;
};

GenericUI.prototype.validateFileNamingPanel = function(pnl, opts) {
  var self = this;
  var win = GenericUI.getWindow(pnl);
  var fopts = pnl.getFileNamingOptions(opts);

  if (fopts.fileNaming.length == 0) {
    return self.errorPrompt("You must specify a name for the files.");
  }

  fopts.copyTo(opts, pnl.prefix);

  return opts;
};
 }
//============================ File Save =====================================
//
// FileSave is only available in Photoshop
//
FileSaveOptions = function(obj) {
  var self = this;

  self.saveDocumentType = undefined; // SaveDocumentType
  self.fileType = "jpg";             // file extension

  self._saveOpts = undefined;

  self.bmpAlphaChannels = true;
  self.bmpDepth = BMPDepthType.TWENTYFOUR;
  self.bmpRLECompression = false;

  self.gifTransparency = true;
  self.gifInterlaced = false;

  self.jpgQuality = 10;
  self.jpgEmbedColorProfile = true;
  self.jpgFormat = FormatOptions.STANDARDBASELINE;
  self.jpgConvertToSRGB = false;          // requires code

  self.epsEncoding = SaveEncoding.BINARY;
  self.epsEmbedColorProfile = true;

  self.pdfEncoding = PDFEncoding.JPEG;

  self.psdAlphaChannels = true;
  self.psdEmbedColorProfile = true;
  self.psdLayers = true;
  self.psdMaximizeCompatibility = true;           // requires code for prefs

  self.pngInterlaced = false;

  self.tgaAlphaChannels = true;
  self.tgaRLECompression = true;

  self.tiffEncoding = TIFFEncoding.NONE;
  self.tiffByteOrder = (isWindows() ? ByteOrder.IBM : ByteOrder.MACOS);
  self.tiffEmbedColorProfile = true;

  if (obj) {
    for (var idx in self) {
      if (idx in obj) {       // only copy in FSO settings
        self[idx] = obj[idx];
      }
    }
    if (!obj.fileType) {
      self.fileType = obj.fileSaveType;
    }
  }
};
//FileSaveOptions.prototype.typename = "FileSaveOptions";
FileSaveOptions._enableDNG = false;

FileSaveOptions.convert = function(fsOpts) {
  var fsType = fsOpts.fileType;
  if (!fsType) {
    fsType = fsOpts.fileSaveType;
  }
  var fs = FileSaveOptionsTypes[fsType];
  if (fs == undefined) {
    return undefined;
  }
  if (!fs.optionsType) {
    return undefined;
  }
  var saveOpts = new fs.optionsType();

  switch (fsType) {
    case "bmp": {
      saveOpts.rleCompression = toBoolean(fsOpts.bmpRLECompression);

      var value = BMPDepthType.TWENTYFOUR;
      var str = fsOpts.bmpDepth.toString();
      if (str.match(/1[^6]|one/i)) {
        value = BMPDepthType.ONE;
      } else if (str.match(/24|twentyfour/i)) {
        // we have to match 24 before 4
        value = BMPDepthType.TWENTYFOUR;
      } else if (str.match(/4|four/i)) {
        value = BMPDepthType.FOUR;
      } else if (str.match(/8|eight/i)) {
        value = BMPDepthType.EIGHT;
      } else if (str.match(/16|sixteen/i)) {
        value = BMPDepthType.SIXTEEN;
      } else if (str.match(/32|thirtytwo/i)) {
        value = BMPDepthType.THIRTYTWO;
      }
      saveOpts.depth = value;
      saveOpts.alphaChannels = toBoolean(fsOpts.bmpAlphaChannels);

      saveOpts._flatten = true;
      saveOpts._8Bit = true; //XXX Should this be true?
      break;
    }
    case "gif": {
      saveOpts.transparency = toBoolean(fsOpts.gifTransparency);
      saveOpts.interlaced = toBoolean(fsOpts.gifInterlaced);
      
      saveOpts._convertToIndexed = true;
      saveOpts._flatten = true;
      saveOpts._8Bit = true;
      break;
    }
    case "jpg": {
      saveOpts.quality = toNumber(fsOpts.jpgQuality);
      saveOpts.embedColorProfile = toBoolean(fsOpts.jpgEmbedColorProfile);
      var value = FormatOptions.STANDARDBASELINE;
      var str = fsOpts.jpgFormat.toString();
      if (str.match(/standard/i)) {
        value = FormatOptions.STANDARDBASELINE;
      } else if (str.match(/progressive/i)) {
        value = FormatOptions.PROGRESSIVE;
      } else if (str.match(/optimized/i)) {
        value = FormatOptions.OPTIMIZEDBASELINE;
      }
      saveOpts.formatOptions = value;

      saveOpts._convertToSRGB = toBoolean(fsOpts.jpgConvertToSRGB);
      saveOpts._flatten = true;
      saveOpts._8Bit = true;
      break;
    }
    case "psd": {
      saveOpts.alphaChannels = toBoolean(fsOpts.psdAlphaChannels);
      saveOpts.embedColorProfile = toBoolean(fsOpts.psdEmbedColorProfile);
      saveOpts.layers = toBoolean(fsOpts.psdLayers);
      saveOpts.maximizeCompatibility =
        toBoolean(fsOpts.psdMaximizeCompatibility);
      break;
    }
    case "eps": {
      var value = SaveEncoding.BINARY;
      var str = fsOpts.epsEncoding.toString();
      if (str.match(/ascii/i)) {
        value = SaveEncoding.ASCII;
      } else if (str.match(/binary/i)) {
        value = SaveEncoding.BINARY;
      } else if (str.match(/jpg|jpeg/i)) {
        if (str.match(/high/i)) {
          value = SaveEncoding.JPEGHIGH;
        } else if (str.match(/low/i)) {
          value = SaveEncoding.JPEGLOW;
        } else if (str.match(/max/i)) {
          value = SaveEncoding.JPEGMAXIMUM;
        } else if (str.match(/med/i)) {
          value = SaveEncoding.JPEGMEDIUM;
        }
      }
      saveOpts.encoding = value;
      saveOpts.embedColorProfile = toBoolean(fsOpts.epsEmbedColorProfile);

      saveOpts._flatten = true;
      break;
    }
    case "pdf": {
      break;
    }
    case "png": {
      saveOpts.interlaced = toBoolean(fsOpts.pngInterlaced);

      saveOpts._flatten = true;
      break;
    }
    case "tga": {
      saveOpts.alphaChannels = toBoolean(fsOpts.tgaAlphaChannels);
      saveOpts.rleCompression = toBoolean(fsOpts.tgaRLECompression);

      saveOpts._flatten = true;
      break;
    }
    case "tiff": {
      var value = (isWindows() ? ByteOrder.IBM : ByteOrder.MACOS);
      var str = fsOpts.tiffByteOrder.toString();
      if (str.match(/ibm|pc/i)) {
        value = ByteOrder.IBM;
      } else if (str.match(/mac/i)) {
        value = ByteOrder.MACOS;
      }
      saveOpts.byteOrder = value;

      var value = TIFFEncoding.NONE;
      var str = fsOpts.tiffEncoding.toString();
      if (str.match(/none/i)) {
        value = TIFFEncoding.NONE;
      } else if (str.match(/lzw/i)) {
        value = TIFFEncoding.TIFFLZW;
      } else if (str.match(/zip/i)) {
        value = TIFFEncoding.TIFFZIP;
      } else if (str.match(/jpg|jpeg/i)) {
        value = TIFFEncoding.JPEG;
      }
      saveOpts.imageCompression = value;

      saveOpts.embedColorProfile = toBoolean(fsOpts.tiffEmbedColorProfile);
      break;
    }
    case "dng": {
    }
    default:
      Error.runtimeError(9001, "Internal Error: Unknown file type: " + fs.fileType);
  }

  return saveOpts;
};

FileSaveOptionsType = function(fileType, menu, saveType, optionsType) {
  var self = this;

  self.fileType = fileType;    // the file extension
  self.menu = menu;
  self.saveType = saveType;
  self.optionsType = optionsType;
};
FileSaveOptionsType.prototype.typename = "FileSaveOptionsType";

FileSaveOptionsTypes = [];
FileSaveOptionsTypes._add = function(fileType, menu, saveType, optionsType) {
  var fsot = new FileSaveOptionsType(fileType, menu, saveType, optionsType);
  FileSaveOptionsTypes.push(fsot);
  FileSaveOptionsTypes[fileType] = fsot;
};
FileSaveOptionsTypes._init = function() {
  if (!isPhotoshop()) {
    return;
  }
  FileSaveOptionsTypes._add("bmp", "Bitmap (BMP)", SaveDocumentType.BMP,
                            BMPSaveOptions);
  FileSaveOptionsTypes._add("gif", "GIF", SaveDocumentType.COMPUSERVEGIF,
                            GIFSaveOptions);
  FileSaveOptionsTypes._add("jpg", "JPEG", SaveDocumentType.JPEG,
                            JPEGSaveOptions);
  FileSaveOptionsTypes._add("psd", "Photoshop PSD", SaveDocumentType.PHOTOSHOP,
                            PhotoshopSaveOptions);
  FileSaveOptionsTypes._add("eps", "Photoshop EPS",
                            SaveDocumentType.PHOTOSHOPEPS, EPSSaveOptions);
  FileSaveOptionsTypes._add("pdf", "Photoshop PDF",
                            SaveDocumentType.PHOTOSHOPPDF, PDFSaveOptions);
  FileSaveOptionsTypes._add("png", "PNG", SaveDocumentType.PNG,
                            PNGSaveOptions);
  FileSaveOptionsTypes._add("tga", "Targa", SaveDocumentType.TARGA,
                            TargaSaveOptions);
  FileSaveOptionsTypes._add("tiff", "TIFF", SaveDocumentType.TIFF,
                            TiffSaveOptions);

  if (FileSaveOptions._enableDNG) {
    FileSaveOptionsTypes._add("dng", "DNG", undefined, undefined);
  }
};
FileSaveOptionsTypes._init();

// XXX remove file types _before_ creating a FS panel!
FileSaveOptionsTypes.remove = function(ext) {
  var ar = FileSaveOptionsTypes;
  var fsot = ar[ext];
  if (fsot) {
    for (var i = 0; i < ar.length; i++) {
      if (ar[i] == fsot) {
        ar.splice(i, 1);
        break;
      }
    }
    delete ar[ext];
  }
};

GenericUI.prototype.createFileSavePanel = function(pnl, ini) {
  var win = GenericUI.getWindow(pnl);
  pnl.mgr = this;

  var menuElements = [];

  for (var i = 0; i < FileSaveOptionsTypes.length; i++) {
    menuElements.push(FileSaveOptionsTypes[i].menu);
  }

  var w = pnl.bounds[2] - pnl.bounds[0];
  var xofs = 0;
  var y = 0;

  var opts = new FileSaveOptions(ini);

  if (pnl.type == 'panel') {
    xofs += 5;
    y += 10;
  }
  pnl.text = "Save Options";

  var tOfs = GenericUI.getTextOfs();

  var x = xofs;
  pnl.add('statictext', [x,y+tOfs,x+55,y+22+tOfs], 'File Type:');
  x += 150;
  pnl.fileType = pnl.add('dropdownlist', [x,y,x+135,y+22], menuElements);

  var ftype = opts.fileType || "jpg";

  var ft = Stdlib.getByProperty(FileSaveOptionsTypes,
                                "fileType",
                                ftype);
  pnl.fileType.selection = pnl.fileType.find(ft.menu);

  y += 30;
  var yofs = y;

  x = xofs;

  //=============================== Bitmap ===============================
  if (FileSaveOptionsTypes["bmp"]) {
    pnl.bmpAlphaChannels = pnl.add('checkbox', [x,y,x+125,y+22],
                                   "Alpha Channels");

    x += 150;
    var bmpDepthMenu = ["1", "4", "8", "16", "24", "32"];
    pnl.bmpDepthLabel = pnl.add('statictext', [x,y+tOfs,x+60,y+22+tOfs],
                                'Bit Depth:');
    x += 65;
    pnl.bmpDepth = pnl.add('dropdownlist', [x,y,x+55,y+22], bmpDepthMenu);
    pnl.bmpDepth.selection = pnl.bmpDepth.find("24");

    pnl.bmpDepth.find("1")._value = BMPDepthType.ONE;
    pnl.bmpDepth.find("4")._value = BMPDepthType.FOUR;
    pnl.bmpDepth.find("8")._value = BMPDepthType.EIGHT;
    pnl.bmpDepth.find("16")._value = BMPDepthType.SIXTEEN;
    pnl.bmpDepth.find("24")._value = BMPDepthType.TWENTYFOUR;
    pnl.bmpDepth.find("32")._value = BMPDepthType.THIRTYTWO;

    x = xofs;
    y += 30;
    pnl.bmpRLECompression = pnl.add('checkbox', [x,y,x+145,y+22],
                                    "RLE Compression");

    pnl.bmp = ["bmpAlphaChannels", "bmpDepthLabel", "bmpDepth",
               "bmpRLECompression"];

    pnl.bmpAlphaChannels.value = toBoolean(opts.bmpAlphaChannels);
    var it = pnl.bmpDepth.find(opts.bmpDepth.toString());
    if (it) {
      pnl.bmpDepth.selection = it;
    }
    pnl.bmpRLECompression.value = toBoolean(opts.bmpRLECompression);

    y = yofs;
    x = xofs;
  }


  //=============================== GIF ===============================
  if (FileSaveOptionsTypes["gif"]) {
    pnl.gifTransparency = pnl.add('checkbox', [x,y,x+125,y+22],
                                  "Transparency");
  
    x += 125;
    pnl.gifInterlaced = pnl.add('checkbox', [x,y,x+125,y+22],
                                "Interlaced");

    pnl.gif = ["gifTransparency", "gifInterlaced"];

    pnl.gifTransparency.value = toBoolean(opts.gifTransparency);
    pnl.gifInterlaced.value = toBoolean(opts.gifInterlaced);

    y = yofs;
    x = xofs;
  }


  //=============================== JPG ===============================
  if (FileSaveOptionsTypes["jpg"]) {
    pnl.jpgQualityLabel = pnl.add('statictext', [x,y+tOfs,x+55,y+22+tOfs],
                                  'Quality:');
    x += 60;
    var jpqQualityMenu = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    pnl.jpgQuality = pnl.add('dropdownlist', [x,y,x+55,y+22], jpqQualityMenu);
    pnl.jpgQuality.selection = pnl.jpgQuality.find("10");

    y += 30;
    x = xofs;
    pnl.jpgEmbedColorProfile = pnl.add('checkbox', [x,y,x+145,y+22],
                                       "Embed Color Profile");

    y = yofs;
    x += 150;

    var jpgFormatMenu = ["Standard", "Progressive", "Optimized"];
    pnl.jpgFormatLabel = pnl.add('statictext', [x,y+tOfs,x+50,y+22+tOfs],
                                 'Format:');
    x += 55;
    pnl.jpgFormat = pnl.add('dropdownlist', [x,y,x+110,y+22], jpgFormatMenu);
    pnl.jpgFormat.selection = pnl.jpgFormat.find("Standard");

    pnl.jpgFormat.find("Standard")._value = FormatOptions.STANDARDBASELINE;
    pnl.jpgFormat.find("Progressive")._value = FormatOptions.PROGRESSIVE;
    pnl.jpgFormat.find("Optimized")._value = FormatOptions.OPTIMIZEDBASELINE;

    y += 30;
    x = xofs + 150;
    pnl.jpgConvertToSRGB = pnl.add('checkbox', [x,y,x+145,y+22],
                                   "Convert to sRGB");

    pnl.jpg = ["jpgQualityLabel", "jpgQuality", "jpgEmbedColorProfile",
               "jpgFormatLabel", "jpgFormat", "jpgConvertToSRGB" ];

    var it = pnl.jpgQuality.find(opts.jpgQuality.toString());
    if (it) {
      pnl.jpgQuality.selection = it;
    }
    pnl.jpgEmbedColorProfile.value = toBoolean(opts.jpgEmbedColorProfile);
    var it = pnl.jpgFormat.find(opts.jpgFormat);
    if (it) {
      pnl.jpgFormat.selection = it;
    }
    pnl.jpgConvertToSRGB.value = toBoolean(opts.jpgConvertToSRGB);

    x = xofs;
    y = yofs;
  }


  //=============================== PSD ===============================
  if (FileSaveOptionsTypes["psd"]) {
    pnl.psdAlphaChannels = pnl.add('checkbox', [x,y,x+125,y+22],
                                   "Alpha Channels");

    y += 30;
    pnl.psdEmbedColorProfile = pnl.add('checkbox', [x,y,x+145,y+22],
                                       "Embed Color Profile");

    y = yofs;
    x = xofs + 150;

    pnl.psdLayers = pnl.add('checkbox', [x,y,x+125,y+22],
                          "Layers");
    
    y += 30;
    pnl.psdMaximizeCompatibility = pnl.add('checkbox', [x,y,x+170,y+22],
                                           "Maximize Compatibility");

    pnl.psd = ["psdAlphaChannels", "psdEmbedColorProfile",
               "psdLayers", "psdMaximizeCompatibility"];

    pnl.psdAlphaChannels.value = toBoolean(opts.psdAlphaChannels);
    pnl.psdEmbedColorProfile.value = toBoolean(opts.psdEmbedColorProfile);
    pnl.psdLayers.value = toBoolean(opts.psdLayers);
    pnl.psdMaximizeCompatibility.value =
       toBoolean(opts.psdMaximizeCompatibility);

    x = xofs;
    y = yofs;
  }

  //=============================== EPS ===============================
  if (FileSaveOptionsTypes["eps"]) {
    var epsEncodingMenu = ["ASCII", "Binary", "JPEG High", "JPEG Med",
                           "JPEG Low", "JPEG Max"];
    pnl.epsEncodingLabel = pnl.add('statictext', [x,y+tOfs,x+60,y+22+tOfs],
                                 'Encoding:');
    x += 65;
    pnl.epsEncoding = pnl.add('dropdownlist',
                              [x,y,x+100,y+22],
                              epsEncodingMenu);
    pnl.epsEncoding.selection = pnl.epsEncoding.find("Binary");

    pnl.epsEncoding.find("ASCII")._value = SaveEncoding.ASCII;
    pnl.epsEncoding.find("Binary")._value = SaveEncoding.BINARY;
    pnl.epsEncoding.find("JPEG High")._value = SaveEncoding.JPEGHIGH;
    pnl.epsEncoding.find("JPEG Low")._value = SaveEncoding.JPEGLOW;
    pnl.epsEncoding.find("JPEG Max")._value = SaveEncoding.JPEGMAXIMUM;
    pnl.epsEncoding.find("JPEG Med")._value = SaveEncoding.JPEGMEDIUM;

    x = xofs;
    y += 30;
    pnl.epsEmbedColorProfile = pnl.add('checkbox', [x,y,x+145,y+22],
                                       "Embed Color Profile");

    pnl.eps = ["epsEncodingLabel", "epsEncoding", "epsEmbedColorProfile"];

    var it = pnl.epsEncoding.find(opts.epsEncoding);
    if (it) {
      pnl.epsEncoding.selection = it;
    }
    pnl.epsEmbedColorProfile.value = toBoolean(opts.epsEmbedColorProfile);

    x = xofs;
    y = yofs;
  }


  //=============================== PDF ===============================
  if (FileSaveOptionsTypes["pdf"]) {
    pnl.pdf = [];

    x = xofs;
    y = yofs;
  }


  //=============================== PNG ===============================
  if (FileSaveOptionsTypes["png"]) {
    pnl.pngInterlaced = pnl.add('checkbox', [x,y,x+125,y+22],
                                "Interlaced");

    pnl.png = ["pngInterlaced"];

    pnl.pngInterlaced.value = toBoolean(opts.pngInterlaced);

    x = xofs;
    y = yofs;
  }


  //=============================== TGA ===============================
  if (FileSaveOptionsTypes["tga"]) {
    pnl.tgaAlphaChannels = pnl.add('checkbox', [x,y,x+125,y+22],
                                   "Alpha Channels");

    y += 30;

    pnl.tgaRLECompression = pnl.add('checkbox', [x,y,x+145,y+22],
                                    "RLE Compression");

    pnl.tga = ["tgaAlphaChannels", "tgaRLECompression"];
    
    pnl.tgaAlphaChannels.value = toBoolean(opts.tgaAlphaChannels);
    pnl.tgaRLECompression.value = toBoolean(opts.tgaRLECompression);

    x = xofs;
    y = yofs;
  }


  //=============================== TIFF ===============================
  if (FileSaveOptionsTypes["tiff"]) {
    var tiffEncodingMenu = ["None", "LZW", "ZIP", "JPEG"];
    pnl.tiffEncodingLabel = pnl.add('statictext', [x,y+tOfs,x+60,y+22+tOfs],
                                    'Encoding:');
    x += 65;
    pnl.tiffEncoding = pnl.add('dropdownlist', [x,y,x+75,y+22],
                               tiffEncodingMenu);
    pnl.tiffEncoding.selection = pnl.tiffEncoding.find("None");

    pnl.tiffEncoding.find("None")._value = TIFFEncoding.NONE;
    pnl.tiffEncoding.find("LZW")._value = TIFFEncoding.TIFFLZW;
    pnl.tiffEncoding.find("ZIP")._value = TIFFEncoding.TIFFZIP;
    pnl.tiffEncoding.find("JPEG")._value = TIFFEncoding.JPEG;

    x += 90;

    var tiffByteOrderMenu = ["IBM", "MacOS"];
    pnl.tiffByteOrderLabel = pnl.add('statictext', [x,y+tOfs,x+65,y+22+tOfs],
                                     'ByteOrder:');
    x += 70;
    pnl.tiffByteOrder = pnl.add('dropdownlist', [x,y,x+85,y+22],
                                tiffByteOrderMenu);
    var bo = (isWindows() ? "IBM" : "MacOS");
    pnl.tiffByteOrder.selection = pnl.tiffByteOrder.find(bo);
    
    pnl.tiffByteOrder.find("IBM")._value = ByteOrder.IBM;
    pnl.tiffByteOrder.find("MacOS")._value = ByteOrder.MACOS;

    x = xofs;
    y += 30;
    pnl.tiffEmbedColorProfile = pnl.add('checkbox', [x,y,x+175,y+22],
                                        "Embed Color Profile");

    pnl.tiff = ["tiffEncodingLabel", "tiffEncoding", "tiffByteOrderLabel",
                "tiffByteOrder", "tiffEmbedColorProfile"];

    pnl.dng = [];

    var it = pnl.tiffEncoding.find(opts.tiffEncoding);
    if (it) {
      pnl.tiffEncoding.selection = it;
    }
    var it = pnl.tiffByteOrder.find(opts.tiffByteOrder);
    if (it) {
      pnl.tiffByteOrder.selection = it;
    }
    pnl.tiffEmbedColorProfile.value = toBoolean(opts.tiffEmbedColorProfile);
  }

  pnl.fileType.onChange = function() {
    var pnl = this.parent;
    var ftsel = pnl.fileType.selection.index;
    var ft = FileSaveOptionsTypes[ftsel];

    for (var i = 0; i < FileSaveOptionsTypes.length; i++) {
      var fsType = FileSaveOptionsTypes[i];
      var parts = pnl[fsType.fileType];

      for (var j = 0; j < parts.length; j++) {
        var part = parts[j];
        pnl[part].visible = (fsType == ft);
      }
    }
    pnl._onChange();
  };

  pnl._onChange = function() {
    var self = this;
    if (self.onChange) {
      self.onChange();
    }
  }

  if (false) {
    y = yofs;
    x = 300;
    var btn = pnl.add('button', [x,y,x+50,y+22], "Test");
    btn.onClick = function() {
      try {
        var pnl = this.parent;
        var mgr = pnl.mgr;
        
        var opts = {}
        mgr.validateFileSavePanel(pnl, opts);
        alert(listProps(opts));
        alert(listProps(FileSaveOptions.convert(opts)));

      } catch (e) {
        var msg = Stdlib.exceptionMessage(e);
        Stdlib.log(msg);
        alert(msg);
      }
    }
  }

  // XXX-CS4 Need to test
  if (isCS3() || isCS4()) {
    pnl.fileType.onChange();
  }

  pnl.getFileSaveType = function() {
    var pnl = this;
    var fstype = '';
    if (pnl.fileType.selection) {
      var fsSel = pnl.fileType.selection.index;
      var fs = FileSaveOptionsTypes[fsSel];
      fstype = fs.fileType;
    }
  }

  return pnl;
};
GenericUI.prototype.validateFileSavePanel = function(pnl, opts) {
  var win = GenericUI.getWindow(pnl);

  // XXX This function needs to remove any prior file save
  // options and only set the ones needed for the
  // selected file type

  var fsOpts = new FileSaveOptions();
  for (var idx in fsOpts) {
    if (idx in opts) {
      delete opts[idx];
    }
  }

  var fsSel = pnl.fileType.selection.index;
  var fs = FileSaveOptionsTypes[fsSel];

  opts.fileSaveType = fs.fileType;
  opts._saveDocumentType = fs.saveType;

  if (!fs.optionsType) {
    opts._saveOpts = undefined;
    return;
  }

  var saveOpts = new fs.optionsType();

  switch (fs.fileType) {
    case "bmp": {
      saveOpts.rleCompression = pnl.bmpRLECompression.value;
      saveOpts.depth = pnl.bmpDepth.selection._value;
      saveOpts.alphaChannels = pnl.bmpAlphaChannels.value;

      opts.bmpRLECompression = pnl.bmpRLECompression.value;
      opts.bmpDepth = Number(pnl.bmpDepth.selection.text);
      opts.bmpAlphaChannels = pnl.bmpAlphaChannels.value;
      break;
    }
    case "gif": {
      saveOpts.transparency = pnl.gifTransparency.value;
      saveOpts.interlaced = pnl.gifInterlaced.value;

      opts.gifTransparency = pnl.gifTransparency.value;
      opts.gifInterlaced = pnl.gifInterlaced.value;
      break;
    }
    case "jpg": {
      saveOpts.quality = Number(pnl.jpgQuality.selection.text);
      saveOpts.embedColorProfile = pnl.jpgEmbedColorProfile.value;
      saveOpts.formatOptions = pnl.jpgFormat.selection._value;
      saveOpts._convertToSRGB = pnl.jpgConvertToSRGB.value;

      opts.jpgQuality = Number(pnl.jpgQuality.selection.text);
      opts.jpgEmbedColorProfile = pnl.jpgEmbedColorProfile.value;
      opts.jpgFormat = pnl.jpgFormat.selection.text;
      opts.jpgConvertToSRGB = pnl.jpgConvertToSRGB.value;
      break;
    }
    case "psd": {
      saveOpts.alphaChannels = pnl.psdAlphaChannels.value;
      saveOpts.embedColorProfile = pnl.psdEmbedColorProfile.value;
      saveOpts.layers = pnl.psdLayers.value;
      saveOpts.maximizeCompatibility = pnl.psdMaximizeCompatibility.value;

      opts.psdAlphaChannels = pnl.psdAlphaChannels.value;
      opts.psdEmbedColorProfile = pnl.psdEmbedColorProfile.value;
      opts.psdLayers = pnl.psdLayers.value;
      opts.psdMaximizeCompatibility = pnl.psdMaximizeCompatibility.value;
      break;
    }
    case "eps": {
      saveOpts.encoding = pnl.epsEncoding.selection._value;
      saveOpts.embedColorProfile = pnl.epsEmbedColorProfile.value;

      opts.epsEncoding = pnl.epsEncoding.selection.text;
      opts.epsEmbedColorProfile = pnl.epsEmbedColorProfile.value;
      break;
    }
    case "pdf": {
      break;
    }
    case "png": {
      saveOpts.interlaced = pnl.pngInterlaced.value;

      opts.pngInterlaced = pnl.pngInterlaced.value;
      break;
    }
    case "tga": {
      saveOpts.alphaChannels = pnl.tgaAlphaChannels.value;
      saveOpts.rleCompression = pnl.tgaRLECompression.value;

      opts.tgaAlphaChannels = pnl.tgaAlphaChannels.value;
      opts.tgaRLECompression = pnl.tgaRLECompression.value;
      break;
    }
    case "tiff": {
      saveOpts.byteOrder = pnl.tiffByteOrder.selection._value;
      saveOpts.imageCompression = pnl.tiffEncoding.selection._value;
      saveOpts.embedColorProfile = pnl.tiffEmbedColorProfile.value;

      opts.tiffByteOrder = pnl.tiffByteOrder.selection.text;
      opts.tiffEncoding = pnl.tiffEncoding.selection.text;
      opts.tiffEmbedColorProfile = pnl.tiffEmbedColorProfile.value;
      break;
    }
    default:
      Error.runtimeError(9001, "Internal Error: Unknown file type: " + fs.fileType);
  }

  opts._saveOpts = saveOpts;

  return;
};


//================================== exec ==================================
//
// exec runs the ui and the application callback
//   doc is the document to operate on (optional)
//   if noUI is true, the window is not open. The runtime parameters
//      are taken from the ini file.
//
GenericUI.prototype.runUI = function(ovOpts, doc) {
  var self = this;

  // read the ini file (if present)
  var ini = {};

  if (self.iniFile) {
    ini = self.readIniFile();
  }

  // copyFromTo
  if (ovOpts) {
    for (var idx in ovOpts) {
      var v = ovOpts[idx];
      if (typeof v != 'function') {
        ini[idx] = v;
      }
    }
  }

  var opts = undefined;
  var win = undefined;

  if (toBoolean(ini.noUI)) {
    // if we don't want a UI, just use the ini object
    opts = ini;

  } else {
    // create window
    win = self.createWindow(ini, doc);

    self.win = win;

    // run the window and return the parameters mapped from the window
    opts = self.run(win);
  }

  return opts;
};


GenericUI.prototype.exec = function(arg1, arg2) {
  var self = this;

  var ovOpts = undefined;
  var doc = undefined;

  // either or both a document and options may be specified or neither
  if (arg1 || arg2) {
    if (!arg1) {  // if only arg2 is set, swap the args
      arg1 = arg2;
      arg2 = undefined;
    }

    ovOpts = arg1; // assume that arg1 is the options

    var dbgLevel = $.level;
    $.level = 0;
    try {
      if (arg1.typename == "Document") {
        doc = arg1;
        ovOpts = arg2;
      } else if (arg2 && arg2.typename == "Document") {
        doc = arg2;
      }
    } catch (e) {
    }
    $.level = dbgLevel;
  }

  var opts = self.runUI(ovOpts, doc);

  return self.runProcess(opts, doc);
};

GenericUI.prototype.runProcess = function(opts, doc) {
  var self = this;
  var result = undefined;

  // if we got options back, we can do some processing
  if (opts) {
    if (self.saveIni) {
      self.writeIniFile(opts);
    }

    result = self.process(opts, doc);

  } else if (self.win && self.win.canceled) { // if not, we just cancel out...
    self.cancel(doc);  
  }

  return result;
};


//
// the run method 'show's the window. If it ran successfully, the options
// returned are written to an ini file (if one has been specified
//
GenericUI.prototype.run = function(win) {
  var self = this;
  var done = false;

  if (win.show) {
    while (!done) {
      if (self.center == true) {
        win.center(self.parentWin);
      }
      var x = win.show();

      self.winX = win.bounds.x;
      self.winY = win.bounds.y;

      if (x == 0 || x == 2) {  // the window was closed or canceled
        win.canceled = true;   // treat it like a 'cancel'
        done = true;
      } else if (x == 1) {
        done = true;
      } else if (x == 4) {     // reset window
        win = self.createWindow(win.ini, win.doc);
      }
      self.runCode = x;
    }
  }

  return win.opts;
};
GenericUI.prototype._checkIniArgs = function(arg1, arg2, xmlMode) {
  var self = this;
  var obj = {
    file: undefined,
    opts: undefined,
    xml: (xmlMode == undefined) ? self.xmlEnabled : xmlMode
  };

  if (arg1) {
    if (!obj.file && ((arg1 instanceof File) ||
                      (arg1.constructor == String))) {
      obj.file = GenericUI.iniFileToFile(arg1);

    } else {
      obj.opts = arg1;
    }
  }

  if (arg2) {
    if (!obj.file && ((arg2 instanceof File) ||
                      (arg2.constructor == String))) {
      obj.file = GenericUI.iniFileToFile(arg2);

    } else if (!obj.opts) {
      obj.opts = arg2;
    }
  }

  return obj;
};
GenericUI.prototype.updateIniFile = function(arg1, arg2, xmlMode) {
  var self = this;
  var args = self._checkIniArgs(arg1, arg2, xmlMode);
  var file = args.file || self.iniFile;
  var opts = args.opts;
  var xml = args.xml;

  if (!file) {
    Error.runtimeError(9001, "Internal Error: No valid settings file specified for update");
  }

  GenericUI.updateIni(file, opts, xml);
};
GenericUI.prototype.writeIniFile = function(arg1, arg2, xmlMode) {
  var self = this;
  var args = self._checkIniArgs(arg1, arg2, xmlMode);
  var file = args.file || self.iniFile;
  var opts = args.opts;
  var xml = args.xml;

  if (!file) {
    Error.runtimeError(9001, "Internal Error: No valid settings file specified for write");
  }
  GenericUI.writeIni(file, opts, xml);
};
GenericUI.prototype.readIniFile = function(arg1, arg2, xmlMode) {
  var self = this;
  var args = self._checkIniArgs(arg1, arg2, xmlMode);
  var file = args.file || self.iniFile;
  var opts = args.opts;
  var xml = args.xml;

  if (!file) {
    Error.runtimeError(9001, "Internal Error: No valid settings file specified for read");
  }
  return GenericUI.readIni(file, opts, xml);
};

//
// errorPrompt is used in window/panel validation. It pops up a 'confirm'
// with the prompt 'str'. If the user selects 'Yes', the 'confirm' is closed
// and the user is returned to the window for further interaction. If the user
// selects 'No', the 'confirm' is closed, the window is closed, and the script
// terminates.
//
GenericUI.prototype.errorPrompt = function(str) {
  return GenericUI.errorPrompt(str);
};
GenericUI.errorPrompt = function(str) {
  return confirm(str + "\r\rDo you wish to continue?", false,
                 "Input Validation Error");
};

//
// 'validate' is called by the win.process.onClick method to validate the
// contents of the window. To validate the window, we call the application
// defined 'validatePanel' method. 'validate' returns 'true', 'false', or
// an options object with the values collected from the application panel.
// If 'true' is returned, this means that there was a problem with validation
// but the user wants to continue. If 'false' is returned, there was a problem
// with validation and the user wants to stop. If an object is returned, the
// window is closed and processing continues based on the options values
//
GenericUI.validate = function() {
  var win = this;
  var mgr = win.mgr;

  mgr.winX = win.bounds.x;
  mgr.winY = win.bounds.y;

  try {
    var res = mgr.validatePanel(win.appPnl, win.ini);

    if (typeof(res) == 'boolean') {
      return res;
    }
    win.opts = res;
    win.close(1);
    return true;

  } catch (e) {
    var msg = Stdlib.exceptionMessage(e);
    Stdlib.log(msg);
    alert(msg);
    return false;
  }
};

//
// Convert a fptr to a valid ini File object.
// If the arg is already a File, make sure it has a valid path
// If the arg is a string and
//    begins with / or ~ or contains a :, then it is a complete path
//       so return it as a File object
//
//
GenericUI.iniFileToFile = function(iniFile) {
  if (!iniFile) {
    return undefined;
  }

  if (iniFile instanceof File) {
    if (!iniFile.parent.exists) {
      Stdlib.createFolder(iniFile.parent);
    }
    return iniFile;
  }

  if (iniFile.constructor == String) {
    var c = iniFile.charAt(0);

    // This is not a partial/relative path
    if (c == '/' || c == '~' || iniFile.charAt(1) == ':') {
      iniFile = new File(iniFile);

    } else {
      var prefs = GenericUI.preferencesFolder;

      // if the path starts with 'xtools/' strip it off
      var sub = "xtools/";
      if (iniFile.startsWith(sub)) {
        iniFile = iniFile.substr(sub.length);
      }

      // and place the ini file in the prefs folder
      iniFile = new File(prefs + '/' + iniFile);
    }

    // make sure any intermediate paths have been created
    if (!iniFile.parent.exists) {
      Stdlib.createFolder(iniFile.parent);
    }

    return iniFile;
  }

  return undefined;
};

GenericUI.iniFromString = function(str, ini) {
  var lines = str.split(/\r|\n/);
  var rexp = new RegExp(/([^:]+):(.*)$/);

  if (!ini) {
    ini = {};
  }
    
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line || line.charAt(0) == '#') {
      continue;
    }
    var ar = rexp.exec(line);
    if (!ar) {
      alert("Bad line in config: \"" + line + "\"");
      continue;
      //return undefined;
    }
    ini[ar[1].trim()] = ar[2].trim();
  }

  return ini;
};

//
// readIni
// writeIni
//   Methods for reading and writing ini files in this framework. This only
//   occurs if an ini file has been specified
//
//   These can be replaced with other storage mechanisms such as Rob Stucky's
//   ScriptStore class.
//
GenericUI.readIni = function(iniFile, ini) {
  //$.level = 1; debugger;

  if (!ini) {
    ini = {};
  }
  if (!iniFile) {
    return ini;
  }
  var file = GenericUI.iniFileToFile(iniFile);

  if (!file) {
    Error.runtimeError(9001, Error("Bad ini file specified: \"" + iniFile + "\"."));
  }

  if (!file.exists) {
    //
    // XXX Check for an ini path .ini file in the script's folder. 
    //
  }

  if (file.exists && file.open("r", "TEXT", "????")) {
    file.lineFeed = "unix";
    file.encoding = GenericUI.ENCODING;
    var str = file.read();
    ini = GenericUI.iniFromString(str, ini);
    file.close();
  }

  if (ini.noUI) {
    ini.noUI = toBoolean(ini.noUI);
  }

  return ini;
};
GenericUI.iniToString = function(ini) {
  var str = '';
  for (var idx in ini) {
    if (idx.charAt(0) == '_') {         // private stuff
      continue;
    }
    if (idx == 'typename') {
      continue;
    }
    if (idx == "noUI") {                // GenericUI property
      continue;
    }
    var val = ini[idx];
    
    if (val == undefined) {
      continue;
    }

    if (val.constructor == String ||
        val.constructor == Number ||
        val.constructor == Boolean ||
        typeof(val) == "object") {
      str += (idx + ": " + val.toString() + "\n");
    }
  }
  return str;
};
GenericUI.overwriteIni = function(iniFile, ini) {
  //$.level = 1; debugger;
  if (!ini || !iniFile) {
    return;
  }
  var file = GenericUI.iniFileToFile(iniFile);

  if (!file) {
    Error.runtimeError(9001, Error("Bad ini file specified: \"" + iniFile + "\"."));
  }
 
  if (file.open("w", "TEXT", "????")) {
    file.lineFeed = "unix";
    file.encoding = GenericUI.ENCODING;
    var str = GenericUI.iniToString(ini);
    file.write(str);
    file.close();
  }
  return ini;
};

GenericUI.iniToDescriptor = function(ini, desc) {
  if (!desc) {
    desc = new ActionDescriptor();
  }
  var str = GenericUI.iniToString(ini);
  desc.putString(sTID("INI Data"), str);
  return desc;
};
GenericUI.iniFromDescriptor = function(desc) {
  var ini = {};
  if (!desc || desc.count == 0) {
    return ini;
  }
  if (desc.hasString(sTID("INI Data"))) {
    var str = desc.getString(sTID("INI Data"));
    ini = GenericUI.iniFromString(str);
  }
  return ini;
};

//
// Updating the ini file retains the ini file layout including any externally
// add comments, blank lines, and the property sequence
//
GenericUI.updateIni = function(iniFile, ini) {
  if (!ini || !iniFile) {
    return;
  }
  var file = GenericUI.iniFileToFile(iniFile);

  // we can only update the file if it exists
  var update = file.exists;
  var str = '';

  if (update) {
    file.open("r", "TEXT", "????");
    file.encoding = GenericUI.ENCODING;
    file.lineFeed = "unix";
    str = file.read();
    file.close();
    
    for (var idx in ini) {
      if (idx.charAt(0) == '_') {         // private stuff
        continue;
      }
      if (idx == "noUI") {
        continue;
      }
      if (idx == "typename") {
        continue;
      }

      var val = ini[idx];

      if (typeof(val) == "undefined") {
        val = '';
      }
      
      if (typeof val == "string" ||
          typeof val == "number" ||
          typeof val == "boolean" ||
          typeof val == "object") {
        idx += ':';
        var re = RegExp('^' + idx, 'm');

        if (re.test(str)) {
          re = RegExp('^' + idx + '[^\n]*', 'm');
          str = str.replace(re, idx + ' ' + val);
        } else {
          str += '\n' + idx + ' ' + val;
        }
      }
    }
  } else {
    // write out a new ini file
    for (var idx in ini) {
      if (idx.charAt(0) == '_') {         // private stuff
        continue;
      }
      if (idx == "noUI") {
        continue;
      }
      var val = ini[idx];
      
      if (typeof val == "string" ||
          typeof val == "number" ||
          typeof val == "boolean" ||
          typeof val == "object") {
        str += (idx + ": " + val.toString() + "\n");
      }
    }
  }

  if (str) {
    file.open("w", "TEXT", "????");
    file.encoding = GenericUI.ENCODING;
    file.lineFeed = "unix";
    file.write(str);
    file.close();
  }

  return ini;
};

GenericUI.writeIni = GenericUI.updateIni;

//XXX this widget stuff is untested
GenericUI._widgetMap = {
  button: 'text',
  checkbox: 'value',
  dropdownlist: 'selection',
  edittext: 'text',
  iconbutton: 'icon',
  image: 'icon',
  listbox: 'selection',
  panel: 'text',
  progressbar: 'value',
  radiobutton: 'value',
  scrollbar: 'value',
  slider:  'value',
  statictext: 'text',
};
//
// These next two need to be tweaked for dropdownlist and listbox
// I'm not sure quite yet what the best interface should be, so I'll
// pass for now.
//
GenericUI.getWidgetValue = function(w) {
  var prop = GenericUI._widgetMap[w.type];
  var t = w.type
  var v = undefined;
  if (prop) {
    if (t == 'listbox' || t == 'dropdownlist') {
      v = w.selection.text;
    } else {
      v = w[prop];
    }
  } 
  return prop ? w[prop] : undefined;
};
GenericUI.setWidgetValue = function(w, v) {
  var prop = GenericUI._widgetMap[w.type];
  if (prop) {
    var t = w.type;
    if (t == 'checkbox' || t == 'radiobox') {
      w[prop] = v.toString().toLowerCase() == 'true';
    } else if (t == 'progressbar' || t == 'scrollbar' || t == 'slider') {
      var n = Number(v);
      if (!isNaN(n)) {
        w[prop] = n;
      }
    } else if (t == 'listbox' || t == 'dropdownlist') {
      var it = w.find(v);
      if (it) {
        w.selection = it;
        it.selected = true;
      }
    } else {
      w[prop] = v;
    }
  }
  return v;
};

//
// createPanel returns a panel specific to this app
//    win is the window into which the panel to be inserted
//    ini is an object containing default values for the panel
//
GenericUI.prototype.createPanel = function(pnl, ini, doc) {};

//
// validatePanel returns 
//    - an object representing the gather input
//    - true if there was an error, but continue gathering input
//    - false if there was an error and terminate
//
GenericUI.prototype.validatePanel = function(pnl, ini) {};

//
// Called by the framework to do whatever processing the script is
// supposed to perform.
//
GenericUI.prototype.process = function(opts, doc) {};

//
// Called by the framework if the user 'canceled' the UI
//
GenericUI.prototype.cancel = function(doc) {};

GenericUI.numberKeystrokeFilter = function() {
  if (this.text.match(/[^\-\.\d]/)) {
    this.text = this.text.replace(/[^\-\.\d]/g, '');
  }
};
GenericUI.numericKeystrokeFilter = function() {
  if (this.text.match(/[^\d]/)) {
    this.text = this.text.replace(/[^\d]/g, '');
  }
};

GenericUI.unitValueKeystrokeFilter = function() {
  if (this.text.match(/[^a-z0-9% ]/)) {
    this.text = this.text.toLowerCase().replace(/[^a-z0-9% ]/g, '');
  }
};

//
// createProgressPalette
//   title     the window title
//   min       the minimum value for the progress bar
//   max       the maximum value for the progress bar
//   parent    the parent ScriptUI window (opt)
//   useCancel flag for having a Cancel button (opt)
//   
//   onCancel  This method will be called when the Cancel button is pressed.
//             This method should return 'true' to close the progress window
//
GenericUI.createProgressPalette = function(title, min, max,
                                           parent, useCancel) {
  var win = new Window('palette', title);
  win.bar = win.add('progressbar', undefined, min, max);
  win.bar.preferredSize = [300, 20];

  win.parentWin = undefined;
  win.recenter = false;
  win.isDone = false;

  if (parent) {
    if (parent instanceof Window) {
      win.parentWin = parent;
    } else if (useCancel == undefined) {
      useCancel = !!parent;
    }
  }

  if (useCancel) {
    win.onCancel = function() {
      this.isDone = true;
      return true;  // return 'true' to close the window
    }

    win.cancel = win.add('button', undefined, 'Cancel');

    win.cancel.onClick = function() {
      var win = this.parent;
      try {
        win.isDone = true;
        if (win.onCancel) {
          var rc = win.onCancel();
          if (rc != false) {
            win.close();
          }
        } else {
          win.close();
        }
      } catch (e) {
        var msg = Stdlib.exceptionMessage(e);
        Stdlib.log(msg);
        alert(msg);
      }
    }
  }

  win.onClose = function() {
    this.isDone = true;
  }

  win.updateProgress = function(val) {
    var win = this;

    if (val != undefined) {
      win.bar.value = val;
    }

    if (win.recenter) {
      win.center(win.parentWin);
    }

    win.show();
    win.hide();
    win.show();
  }

  win.recenter = true;
  win.center(win.parent);

  return win;
};


//
//=============================== GenericOptions ==============================
//
GenericOptions = function(obj) {
  if (obj) {
    GenericOptions.copyFromTo(obj, this);
  }
};

function toBoolean(s) {
  if (s == undefined) { return false; }
  if (s.constructor == Boolean) { return s.valueOf(); }
  if (s.constructor == String)  { return s.toLowerCase() == "true"; }
  return Boolean(s);
};

function toNumber(s, def) {
  if (s == undefined) { return NaN; }
  if (s.constructor == String && s.length == 0) { return NaN; }
  if (s.constructor == Number) { return s.valueOf(); }
  return Number(s.toString());
};

function toFont(fs) {
  if (fs.typename == "TextFont") { return fs.postScriptName; }

  var str = fs.toString();
  var f = Stdlib.determineFont(str);  // first, check by PS name

  return (f ? f.postScriptName : undefined);
};

GenericOptions.copyFromTo = function(from, to) {
  if (!from || !to) {
    return;
  }
  for (var idx in from) {
    var v = from[idx];
    if (typeof v != 'function') {
        to[idx] = v;
    }
  }
};

GenericOptions.prototype.hasKey = function(k) {
  return this[key] != undefined;
};
GenericOptions.prototype.getBoolean = function(k, def) {
  var self = this;
  return self.hasKey(k) ? toBoolean(self[k]) : def;
};
GenericOptions.prototype.getInteger = function(k, def) {
  var self = this;
  return self.hasKey(k) ? toNumber(self[k]).toFixed(0) : def;
};
GenericOptions.prototype.getDouble = function(k, def) {
  var self = this;
  return self.hasKey(k) ? toNumber(self[k]) : def;
};
GenericOptions.prototype.getPath = function(k, def) {
  var self = this;
  return self.hasKey(k) ? File(self[k]) : def;
};
GenericOptions.prototype.getArray = function(k, def) {
  var self = this;
  if (!self.hasKey(k)) {
    return def;
  }
  var s = self[k];
  return s.split(',');
};

GenericOptions.prototype.getColor = function(k, def) {
  var self = this;
  if (!self.hasKey(k)) {
    return def;
  }
  var c = self[k];
  if (!(c instanceof SolidColor)) {
    if (c.constructor == String) {
      c = s.split(',');
    }
    if (c instanceof Array) {
      var rgbc = new SolidColor();
      rgbc.rgb.red = c[0];
      rgbc.rgb.green = c[1];
      rgbc.rgb.blue = c[2];
      c = rgbc;      
    } else {
      c = undefined;
    }
  }
  return c;
};

GenericOptions.prototype.getObject = function(k, def) {
  var self = this;
  if (!self.hasKey(k)) {
    return def;
  }
  var os = self[k];
  var obj = undefined;
  try { eval('obj = ' + os); } finally {}
  return obj;
};

String.prototype.contains = function(sub) {
  return this.indexOf(sub) != -1;
};

String.prototype.containsWord = function(str) {
  return this.match(new RegExp("\\b" + str + "\\b")) != null;
};

String.prototype.endsWith = function(sub) {
  return this.length >= sub.length &&
    this.substr(this.length - sub.length) == sub;
};

String.prototype.reverse = function() {
  var ar = this.split('');
  ar.reverse();
  return ar.join('');
};

String.prototype.startsWith = function(sub) {
  return this.indexOf(sub) == 0;
};

String.prototype.trim = function() {
  return this.replace(/^[\s]+|[\s]+$/g, '');
};
String.prototype.ltrim = function() {
  return this.replace(/^[\s]+/g, '');
};
String.prototype.rtrim = function() {
  return this.replace(/[\s]+$/g, '');
};


// see SampleUI for an example of how to use this framework.

"GenericUI.jsx";

// EOF

//
// Action.jsx
// This script defines missing classes from the ActionManager API
//
// $Id$
// Copyright: (c)2005, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
//@show include
//
//-include "xlib/stdlib.js"
//-include "xlib/PSConstants.js"

var action_js = true;

//=========================== ActionsPaletteFile ==============================

ActionsPaletteFile = function() {
  var self = this;

  self.actionsPalette = null; // ActionsPalette
  self.version = 0x10;        // word
  self.file = null;           // File
};

ActionsPaletteFile.prototype.typename = "ActionsPaletteFile";
ActionsPaletteFile.prototype.getActionsPalette = function() {
  return this.actionsPalette;
}
ActionsPaletteFile.prototype.getFile = function() {
  return this.file;
}
ActionsPaletteFile.prototype.getVersion = function() {
  return this.version;
}

//=============================== ActionFile ==================================

ActionFile = function() {
  var self = this;

  self.actionSet = null; // ActionSet
  self.file = null;      // File
};

ActionFile.prototype.typename = "ActionFile";

ActionFile.prototype.getActionSet = function() { return this.actionSet; }
ActionFile.prototype.getFile      = function() { return this.file; }

ActionFile.prototype.setActionSet = function(obj) {
  var self = this;
  obj.parent = self;
  self.actionSet = obj;
};


//=========================== ActionsPalette ==================================

ActionsPalette = function() {
  var self = this;

  self.parent = null;
  self.name = app.name;
  self.count = 0;
  self.verion = 0x10;
  self.actionSets = [];
};
ActionsPalette.prototype.typename = "ActionsPalette";

ActionsPalette.prototype.getName    = function() { return this.name; };
ActionsPalette.prototype.getCount   = function() { return this.count; };
ActionsPalette.prototype.getVersion = function() { return this.version; };
ActionsPalette.prototype.getParent  = function() { return this.parent; };

ActionsPalette.prototype.getNames = function() {
  var self = this;
  var names = [];
  
  for (var i = 0; i < self.actionSets.length; i++) {
    var as = self.actionSets[i];
    names.push(as.name);
  }
  return names;
};

ActionsPalette.prototype.getByName = function(name) {
  var self = this;
  for (var i = 0; i < self.actionSets.length; i++) {
    var as = self.actionSets[i];
    if (as.name == name) {
      return as;
    }
  }
  return undefined;
};
ActionsPalette.prototype.byIndex = function(index) {
  var self = this;
  return self.actionSets[index];
};

ActionsPaletteIterator = function(state) {
  this.state = state;
};
ActionsPaletteIterator.prototype.exec = function(actionSet) {
};

//================================ ActionSet ==================================

ActionSet = function() {
  var self = this;

  self.parent   = null;
  self.version  = 0x10;        // version
  self.name     = '';          // unicode
  self.expanded = false;       // boolean/byte
  self.count    = 0;           // int16
  self.actions  = [];          // Actions
  return self;
};

ActionSet.prototype.typename = "ActionSet";

ActionSet.prototype.getVersion  = function(act) { return this.version; }
ActionSet.prototype.getName     = function(act) { return this.name; }
ActionSet.prototype.getExpanded = function(act) { return this.expanded; }
ActionSet.prototype.getCount    = function(act) { return this.count; }

ActionSet.prototype.getNames = function() {
  var self = this;
  var names = [];
  
  for (var i = 0; i < self.actions.length; i++) {
    var act = self.actions[i];
    names.push(act.name);
  }
  return names;
};
ActionSet.prototype.getByName = function(name) {
  var self = this;
  for (var i = 0; i < self.actions.length; i++) {
    var act = self.actions[i];
    if (act.name == name) {
      return act;
    }
  }
  return undefined;
};
ActionSet.prototype.byIndex = function(index) {
  var self = this;
  return self.actions[index];
};
ActionSet.prototype.add = function(obj) {
  var self = this;
  obj.parent = self;
  self.actions.push(obj);
  self.count = self.actions.length;
};

//================================ Action =====================================
Action = function() {
  var self = this;

  self.index = 0;              // int16  This is really the function key!
  self.shiftKey = false;       // boolean/byte
  self.commandKey = false;     // boolean/byte
  self.colorIndex = 0;         // int16
  self.name = '';              // unicode
  self.expanded = false;       // boolean/byte
  self.count = 0;              // word
  self.actionItems = [];       // ActionItems

  return self;
};
Action.prototype.typename = "Action";

Action.prototype.getIndex      = function() { return this.index; };
Action.prototype.getShiftKey   = function() { return this.shiftKey; };
Action.prototype.getCommandKey = function() { return this.commandKey; };
Action.prototype.getColorIndex = function() { return this.colorIndex; };
Action.prototype.getName       = function() { return this.name; };
Action.prototype.getExpanded   = function() { return this.expanded; };
Action.prototype.getCount      = function() { return this.count; };

Action.prototype.byIndex = function(index) {
  var self = this;
  return self.actionItems[index];
};

Action.prototype.add = function(obj) {
  var self = this;
  obj.parent = self;
  self.actionItems.push(obj);
  self.count = self.actionItems.length;
};


// useful for debugging
ActionDescriptor.prototype.listKeys = function() {
  var self = this;
  var str = '';
  for (var i = 0; i < self.count; i++) {
    var key = self.getKey(i);
    str += PSConstants.reverseNameLookup(key) + ":" +
      self.getType(key).toString() + "\r\n";
  }
  return str;
};

//============================== ActionItem ===================================
ActionItem = function() {
  var self = this;

  self.parent = null;
  self.expanded = false;       // boolean/byte
  self.enabled = true;         // boolean/byte
  self.withDialog = false      // boolean/byte
  self.dialogOptions = 0;      // byte
  self.identifier = '';        // string [4] TEXT/long
  self.event = '';             // ascii
  self.itemID = 0;             // word
  self.name = '';              // ascii
  self.hasDescriptor = false;  // flag (-1 == true)
  self.descriptor = null;      // ActionDescriptor
  return self;
};

ActionItem.prototype.typename = "ActionItem";

ActionItem.TEXT_ID = 'TEXT';
ActionItem.LONG_ID = 'long';

ActionItem.prototype.getExpanded        = function() { return this.expanded; };
ActionItem.prototype.getEnabled         = function() { return this.enabled; };
ActionItem.prototype.getWithDialog      = function() { return this.withDialog; };
ActionItem.prototype.getDialogOptions   = function() { return this.dialogOptions; };
ActionItem.prototype.getIdentifier      = function() { return this.identifier; };
ActionItem.prototype.getEvent           = function() { return this.event; };
ActionItem.prototype.getItemID          = function() { return this.itemID; };
ActionItem.prototype.getName            = function() { return this.name; };
ActionItem.prototype.containsDescriptor = function() { return this.hasDescriptor; };
ActionItem.prototype.getDescriptor      = function() { return this.descriptor; };

ActionItem.prototype.setEvent = function(str) {
  var self = this;

  self.event = str;
  self.identifier = ActionItem.TEXT_ID;
};
ActionItem.prototype.setItemID = function(id) {
  var self = this;

  self.itemID = id;
  self.identifier = ActionItem.LONG_ID;
};

ActionItem.prototype.setDescriptor = function(desc) {
  var self = this;
  self.descriptor = desc;
  self.hasDescriptor = true;
};

"Actions.js";
// EOF


//
// ActionDescriptor IO module. A replacement for to/fromStream for CS/PS7
//
// $Id$
// Copyright: (c)2007, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
//@show include
//

//-include "xlib/PSConstants.js"
//-include "xlib/stdlib.js"
//-include "xlib/Stream.js"
//-include "xlib/Action.js"
//-include "xlib/xml/atn2bin.jsx"
//-include "xlib/ieee754.js"

OSType = [];

// Descriptor/List
OSType['obj '] = "Reference";
OSType['Objc'] = "Descriptor";
OSType['VlLs'] = "List";
OSType['doub'] = "Double";
OSType['UntF'] = "UnitFloat";
OSType['TEXT'] = "String";
OSType['enum'] = "Enumerated";
OSType['long'] = "Integer";
OSType['bool'] = "Boolean";
OSType['GlbO'] = "GlobalObject";
OSType['type'] = "Class";
OSType['GlbC'] = "Class";
OSType['alis'] = "Alias";

// Undocumented
OSType['ObAr'] = "ObjectArray"; //??
OSType['tdta'] = "Tdata";       //??
OSType['Pth '] = "Path";

OSType['UnFl'] = "UnitFloat"; // just for type checking

OSType["DescValueType.REFERENCETYPE"] = 'obj ';
OSType["DescValueType.OBJECTTYPE"] = 'Objc';
OSType["DescValueType.LISTTYPE"] = 'VlLs';
OSType["DescValueType.DOUBLETYPE"] = 'doub';
OSType["DescValueType.UNITDOUBLE"] = 'UntF';
OSType["DescValueType.STRINGTYPE"] = 'TEXT';
OSType["DescValueType.ENUMERATEDTYPE"] = 'enum';
OSType["DescValueType.INTEGERTYPE"] = 'long';
OSType["DescValueType.BOOLEANTYPE"] = 'bool';
//OSType[DescValueType] = 'GlbO';
OSType["DescValueType.CLASSTYPE"] = 'type';
//OSType[DescValueType] = 'GlbC';

OSType["DescValueType.ALIASTYPE"] = 'Pth '; // 'alis';

// Undocumented
// OSType['ObAr'] = "ObjectArray"; //??
try { OSType["DescValueType.RAWTYPE"] = "tdta"; } catch (e) {};

// OSType['Pth '] = "Path";

// Reference
OSReferenceType = [];

OSReferenceType['prop'] = "Property";
OSReferenceType['Clss'] = "ClassReference";
OSReferenceType['Enmr'] = "EnumeratedReference";
OSReferenceType['rele'] = "Offset";
OSReferenceType['Idnt'] = "Identifier";
OSReferenceType['indx'] = "Index"; 
OSReferenceType['name'] = "Name";

OSReferenceType["ReferenceFormType.PROPERTY"] = 'prop';
OSReferenceType["ReferenceFormType.CLASSTYPE"] = 'Clss';
OSReferenceType["ReferenceFormType.ENUMERATED"] = 'Enmr';
OSReferenceType["ReferenceFormType.OFFSET"] = 'rele';
OSReferenceType["ReferenceFormType.IDENTIFIER"] = 'Idnt';
OSReferenceType["ReferenceFormType.INDEX"] = 'indx';
OSReferenceType["ReferenceFormType.NAME"] = 'name';

//=========================================================================
//                              Reader
//=========================================================================
ActionItem.prototype.read = function(str) {
  var self = this;

  //  $.level = 1; debugger;

  self.expanded = str.readBoolean();
  self.enabled = str.readBoolean();
  self.withDialog = str.readBoolean();
  self.dialogOptions = str.readByte();

  self.identifier = str.readString(4);
  if (self.identifier == ActionItem.TEXT_ID) {
    self.event = str.readAscii();
  } else if (self.identifier == ActionItem.LONG_ID) {
    self.itemID = str.readWord();
  } else {
    throw "Bad ActionItem definition: ActionItem.id";
  }

  self.name = str.readAscii();
  self.hasDescriptor = (str.readWord() == -1);

  if (self.hasDescriptor) {
    var desc = new ActionDescriptor();
    desc.readFromStream(str);
    self.descriptor = desc;

  } else {
    self.descriptor;
  }
};

ActionDescriptor.prototype.readFromStream = function(s, raw) {
  var str;
  if (s instanceof Stream) {
    str = s;
  } else {
    str = new Stream(s);
    raw = true;
  }

  if (raw == true) {
    var ver = str.readWord();
  }
  return AD.read["ActionDescriptor"](this, str);
};

AD = function() {
};

// deprecated
AD.readFromStream = function(str, raw) {
  if (raw == true) {
    var ver = str.readWord();
  }
  return AD.read["ActionDescriptor"](undefined, str);
};


AD.read = {};

AD.read["ActionDescriptor"] = function(desc, str) {
  var classIDString = str.readUnicode();
  var classID       = str.readAsciiOrKey();
  var count         = str.readWord();

  if (!desc) {
    desc = new ActionDescriptor();
  }

  for (var i = 0; i < count; i++) {
    AD.readDescriptorItem(desc, str);
  }
  return desc;
};

AD.read["Descriptor"] = function(obj, str, key) {
  var classIDString = str.readUnicode();
  var classID       = str.readAsciiOrKey();
  var count         = str.readWord();

  var desc = new ActionDescriptor();

  for (var i = 0; i < count; i++) {
    AD.readDescriptorItem(desc, str);
  }

  if (obj) {
    if (key) {
      obj.putObject(key, xTID(classID), desc);
    } else {
      obj.putObject(xTID(classID), desc);
    }
  }
};

AD.readDescriptorItem = function(obj, str) {
  var key = str.readAsciiOrKey();
  var type = str.readKey();
  var ost = OSType[type.toString()];

  if (!ost) {
    throw "Unsupported type: " + type;
  }
  AD.read[ost.toString()](obj, str, xTID(key));
};


AD.read["Alias"] = function(obj, str, key) {
  var base = str.ptr;
  var len = str.readWord();
  var ofs = str.ptr;

  str.readInt16();  // padding
  var vlen = str.readWord();   // a copy of the length
  str.readWord();   // unknown

  if (len != vlen) {
    throw "Unable to read Macintosh path information.";
  }

  //debugger;

  str.ptr = ofs + 10;     // magic number!
  var slen = str.readByte();         // Volume ID
  var volumeID = str.readString(slen);

  str.ptr = ofs + 50;     // magic number!
  slen = str.readByte();
  var fileID = str.readString(slen);  // Filename


  str.ptr = ofs + 153;    // magic number!
  slen = str.readByte();
  var dir = str.readString(slen);     // Directory

  var max = str.str.length;
  var sub = str.str.slice(str.ptr, Math.min(str.ptr + 256, max));
  var idx = sub.search(RegExp('/:Volumes:' + volumeID + ':', 'i'));
  if (idx == -1) {
    idx = sub.search(RegExp(volumeID + ':', 'i'));
  }

  if (idx != -1) {
    str.ptr += idx - 1;
    slen = str.readByte();
    var path = str.readString(slen);     // Pathname

    if (isWindows()) {
      path = path.replace(/:/g, '/');
      path = path.replace("//", '/');
      path = path.replace(/^[^\/]+/, '');
    }
    
    // alert(path);
    // PS gets upset if the path does not exist when we add the file to
    // the descriptor

    var xp = path.replace(/:/g, '/');

    // force a leading '/'
    if (xp.charAt(0) != '/') {
      xp = '/' + xp;
    }

    var f = new File(xp);
    try {
      if (key) {
        obj.putPath(key, f);
      } else {
        obj.putPath(f);
      }

    } catch (e) {

      if (Stdlib.createFolder(xp)) {
        var f = new Folder(xp);
        f.remove();
        var f = new File(xp);
        if (key) {
          obj.putPath(key, f);
        } else {
          obj.putPath(f);
        }
      } else {
        // create a dummy filename
        obj.putPath(key, File("~/" + fileID));
      }
    }

  } else {
    // XXX we had some problem reading the mac path info
    throw "Unable to read Macintosh path information.";
  }

  str.ptr = ofs + len;
  //var data = str.readRaw(len);
};
AD.read["Path"] = function(obj, str, key) {
  var base = str.ptr;
  var len = str.readWord();
  var txtu = str.readString(4);

  if (txtu != 'txtu') {
    throw "Bad path error";
  }
  var lenByte = str.readByte();
  var plen = str.readWord();
  str.readInt16();
  var pathStr = str.readUnicodeString(plen);
  str.readByte();
  if (key) {
    obj.putPath(key, new File(pathStr));
  } else {
    obj.putPath(new File(pathStr));
  }
};

AD.read["Boolean"] = function(obj, str, key) {
  var v = str.readBoolean();

  if (key) {
    obj.putBoolean(key, v);
  } else {
    obj.putBoolean(v);
  }
};
AD.read["Class"] = function(obj, str, key) {
  var classIDString =  str.readUnicodeOrKey();
  var classID = str.readAsciiOrKey();

  if (key) {
    obj.putClass(key, xTID(classID));
  } else {
    obj.putClass(xTID(classID));
  }
};
AD.read["Double"] = function(obj, str, key) {
  var v = str.readDouble();

  if (key) {
    obj.putDouble(key, v);
  } else {
    obj.putDouble(v);
  }
};
AD.read["Enumerated"] = function(obj, str, key) {
  var enumType = str.readAsciiOrKey();
  var v = str.readAsciiOrKey();

  if (key) {
    obj.putEnumerated(key, xTID(enumType), xTID(v));
  } else {
    obj.putEnumerated(xTID(enumType), xTID(v));
  }
};
AD.read["Integer"] = function(obj, str, key) {
  var v = str.readWord();
 
  if (key) {
    obj.putInteger(key, v);
  } else {
    obj.putInteger(v);
  }
};
AD.read["List"] = function(obj, str, id) {
  AD.read["ActionList"](obj, str, id);
};

AD.read["Tdata"] = function(obj, str, key) {
  if (!obj.putData) {
    return;
  }
  var len = str.readWord();
  var data = str.readRaw(len);

  if (key) {
    obj.putData(key, data);
  } else {
    obj.putData(data);
  }
};
AD.read["Reference"] = function(obj, str, id) {
  AD.read["ActionReference"](obj, str, id);
};
AD.read["String"] = function(obj, str, key) {
  var v = str.readUnicode();

  if (key) {
    obj.putString(key, v);
  } else {
    obj.putString(v);
  }
};
AD.read["UnitFloat"] = function(obj, str, key) {
  var t = str.readKey();
  var v = str.readDouble();

  if (key) {
    obj.putUnitDouble(key, cTID(t), v);
  } else {
    obj.putUnitDouble(cTID(t), v);
  }
};

AD.read["ActionList"] = function(obj, str, key) {
  var list = new ActionList();
  var len = str.readWord();

  for (var i = 0; i < len; i++) {
    var t = str.readKey();
    var ost = OSType[t.toString()];
    AD.read[ost.toString()](list, str);
  }

  if (obj) {
    if (key) {
      obj.putList(key, list);
    } else {
      obj.putList(list);
    }
  }
};

AD.read["ObjectArray"] = function(obj, str, key) {
  var list = new ActionList();
  var len = str.readWord();

  //debugger;

  var classIDString = str.readUnicode();
  var classID       = str.readAsciiOrKey();
  var count         = str.readWord();

  var descs = [];
  for (var i = 0; i < len; i++) {
    var desc = new ActionDescriptor();
    descs.push(desc); 
  }

  for (var j = 0; j < count; j++) {
    var skey = str.readAsciiOrKey();
    var type = str.readKey();
    var ost = OSType[type.toString()];

    if (!ost) {
      throw "Unsupported type: " + type;
    }

    var t = str.readKey();
    var cnt = str.readWord();
    for (var i = 0; i < len; i++) {
      var desc = descs[i];
      if (type == "UnFl") {
        var v = str.readDouble();
        desc.putUnitDouble(xTID(skey), cTID(t), v);

      } else {
        throw "Unsupported type: " + type;
      }
    }
  }

  //debugger;

  for (var i = 0; i < len; i++) {
    var desc = descs[i];
    list.putObject(xTID(classID), desc); 
  }

  if (obj) {
    if (key) {
      obj.putList(key, list);
    } else {
      obj.putList(list);
    }
  }
};


AD.read["ActionReference"] = function(obj, str, key) {
  var ref = new ActionReference();
  var len = str.readWord();

  //$.level = 1; debugger;
  for (var i = 0; i < len; i++) {
    var t = str.readKey();
    var ost = OSReferenceType[t];
    AD.readReference[ost.toString()](ref, str);
  }

  if (key) {
    obj.putReference(key, ref);
  } else {
    obj.putReference(ref);
  }
};

AD.readReference = {};

AD.readReference["ClassReference"] = function(obj, str) {
  var v = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();

  obj.putClass(xTID(id));
};
AD.readReference["EnumeratedReference"] = function(obj, str) {
  var c = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();
  var t = str.readAsciiOrKey();
  var v = str.readAsciiOrKey();

  obj.putEnumerated(xTID(id), xTID(t), xTID(v));
};
AD.readReference["Identifier"] = function(obj, str) {
  var c = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();
  var v = str.readWord();

  obj.putIdentifier(xTID(id), v);
};
AD.readReference["Index"] = function(obj, str, key) {
  var c = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();
  var v = str.readWord();

  obj.putIndex(xTID(id), v);
};
AD.readReference["Name"] = function(obj, str, key) {
  var c = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();
  var v = str.readUnicode();

  obj.putName(xTID(id), v);
};
AD.readReference["Offset"] = function(obj, str, key) {
  var c = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();
  var v = str.readWord();

  obj.putOffset(xTID(id), v);
};
AD.readReference["Property"] = function(obj, str, key) {
  var c = str.readUnicodeOrKey();
  var id = str.readAsciiOrKey();
  var v = str.readAsciiOrKey();

  obj.putProperty(xTID(id), xTID(v));
};

//=========================================================================
//                              Writer
//=========================================================================

ActionDescriptor.prototype.writeToStream = function(a1, a2) {
  var str;
  var raw;

  if (a2 != undefined) {
    str = a1;
    raw = a2;

  } else if (a1 != undefined) {
    if (typeof a1 == "boolean") {
      raw = a1;
    } else if (a1 instanceof Stream) {
      str = a1;
    } else {
      throw "Bad argument to ActionDescriptor.writeToStream";
    }
  }

  if (!str) {
    str = new Stream();
    if (raw == undefined) {
      raw = true;
    }
  }
  if (raw) {
    str.writeWord(0x10);  // version number
  }
  var desc = new ActionDescriptor();
  desc.putObject(cTID('null'), cTID('null'), this);
  AD.write[this.typename](str, cTID('null'), desc); 

  return str.str.join("");
};

AD.write = {};

AD.write["ActionDescriptor"] = function(str, key, obj) {
  var t = obj.getObjectType(key);
  var desc = obj.getObjectValue(key);

  //  $.level = 1; debugger;

  str.writeUnicode("");     // classIDString
  str.writeAsciiOrKey(t);   // object type 
  str.writeWord(desc.count);

  for (var i = 0; i < desc.count; i++) {
    var k = desc.getKey(i);
    var t = desc.getType(k);
    var ost = OSType[t.toString()];

    str.writeAsciiOrKey(k);
    str.writeKey(ost);
    AD.write[t.toString()](str, k, desc);
  }

  return str;
};

// XXX There is no support for writing Mac paths
AD.write["DescValueType.ALIASTYPE"] = function(str, key, obj) {
  var f = obj.getPath(key);
  var fname = f.fsName;
  var len = (4 +                      // 'txtu'
             1 +                      // length byte
             4 +                      // filename length 
             2 +                      // filename \u0000 prefix
             ((fname.length+1) * 2) + // filename as Unicode
             1);                      // byte pad
  
  str.writeWord(len);
  str.writeKey('txtu');
  str.writeByte(len & 0xFF);
  str.writeWord(fname.length + 1);
  str.writeInt16(0);
  str.writeUnicodeString(fname);
  str.writeByte(0);
};
AD.write["DescValueType.BOOLEANTYPE"] = function(str, key, obj) {
  var v = obj.getBoolean(key);
  str.writeBoolean(v);
};
AD.write["DescValueType.CLASSTYPE"] = function(str, key, obj) {
  var v = obj.getClass(key);
  str.writeUnicode("");
  str.writeAsciiOrKey(v);
};
AD.write["DescValueType.DOUBLETYPE"] = function(str, key, obj) {
  var v = obj.getDouble(key);
  str.writeDouble(v);
};
AD.write["DescValueType.ENUMERATEDTYPE"] = function(str, key, obj) {
  var t = obj.getEnumerationType(key);
  var v = obj.getEnumerationValue(key);

  str.writeAsciiOrKey(t);
  str.writeAsciiOrKey(v);
};
AD.write["DescValueType.INTEGERTYPE"] = function(str, key, obj) {
  var v = obj.getInteger(key);
  str.writeWord(v);
};
AD.write["DescValueType.LISTTYPE"] = function(str, key, obj) {
  AD.write["ActionList"](str, key, obj);
};
AD.write["DescValueType.OBJECTTYPE"] = function(str, key, obj) {
  AD.write["ActionDescriptor"](str, key, obj);
};

try {
  AD.write["DescValueType.RAWTYPE"] = function(str, key, obj) {
    var v = obj.getData(key);
    str.writeWord(v.length);
    str.writeRaw(v);
  };
 } catch (e) {};

AD.write["DescValueType.REFERENCETYPE"] = function(str, key, obj) {
  AD.write["ActionReference"](str, key, obj);
};
AD.write["DescValueType.STRINGTYPE"] = function(str, key, obj) {
  var v = obj.getString(key);
  str.writeUnicode(v);
};
AD.write["DescValueType.UNITDOUBLE"] = function(str, key, obj) {
  var t = obj.getUnitDoubleType(key);
  var v = obj.getUnitDoubleValue(key);

  str.writeKey(t);
  str.writeDouble(v);
};

AD.write["ActionList"] = function(str, key, obj) {
  var list = obj.getList(key);

  str.writeWord(list.count);

  //  $.level = 1; debugger;

  for (var i = 0; i < list.count; i++) {
    var t = list.getType(i);
    var ost = OSType[t.toString()];
    str.writeKey(ost);
    AD.write[t.toString()](str, i, list);
  }

  return str;
};

AD.write["ActionReference"] = function(str, key, obj) {
  var ref = obj.getReference(key);

  var len = 0;
  var tref = ref;
  while (true) {
    try { tref = tref.getContainer(); } catch (e) { break; };
    len++;
  }

  str.writeWord(len);

  do {
    var t = undefined;
    var refItemId = undefined;
    try {
      t = ref.getForm();
      refItemId = ref.getDesiredClass();
    } catch (e) {
    }
    if (!t || !refItemId) {
      break;
    }
    var ost = OSReferenceType[t.toString()];
    str.writeKey(ost);

    str.writeUnicode("");
    AD.writeReference[t.toString()](str, refItemId, ref);

    try { ref = ref.getContainer(); } catch (e) { ref = null; }
  } while (ref);
};

AD.writeReference = {};

AD.writeReference["ReferenceFormType.CLASSTYPE"] = function(str, key, obj) {
  var v = obj.getDesiredClass();
  str.writeAsciiOrKey(v);
};
AD.writeReference["ReferenceFormType.ENUMERATED"] = function(str, key, obj) {
  var c = obj.getDesiredClass();
  var t = obj.getEnumeratedType();
  var v = obj.getEnumeratedValue();

  str.writeAsciiOrKey(c);
  str.writeAsciiOrKey(t);
  str.writeAsciiOrKey(v);
};
AD.writeReference["ReferenceFormType.IDENTIFIER"] = function(str, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getIdentifier();

  str.writeAsciiOrKey(c);
  str.writeKey(v);
};
AD.writeReference["ReferenceFormType.INDEX"] = function(str, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getIndex();

  str.writeAsciiOrKey(c);
  str.writeWord(v);
};
AD.writeReference["ReferenceFormType.NAME"] = function(str, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getName();

  str.writeAsciiOrKey(c);
  str.writeUnicode(v);
};
AD.writeReference["ReferenceFormType.OFFSET"] = function(str, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getOffset();

  str.writeAsciiOrKey(c);
  str.writeWord(v);
};
AD.writeReference["ReferenceFormType.PROPERTY"] = function(str, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getProperty();

  str.writeAsciiOrKey(c);
  str.writeAsciiOrKey(v);
};

//===========================================================================
//   Stream Extensions
//===========================================================================
Stream.prototype.readAsciiOrKey = function() {
  var self = this;
  var len = self.readWord();
  if (len > 20000) {
    throw "Read of string longer than 20K requested.";
  }
  return self.readString(len ? len : 4);
};

Stream.prototype.readKey = function() {
  return this.readString(4);
};
Stream.prototype.readUnicodeString = function(len, readPad) {
  var self = this;
  var s = '';
  for (var i = 0; i < len; i++) {
    var uc = self.readInt16();
    s += String.fromCharCode(uc);
  }
  if (readPad == true) {
    self.readInt16();     // null pad
  }
  return s;
};
Stream.prototype.readUnicodeOrKey = function() {
  var self = this;
  //var len = self.int16();
  var len = self.readWord();
  if (len > 20000) {
    throw "Read of string longer than 20K requested.";
  }
  var v;
  if (len == 0) {
    v = self.readString(4);
  } else {
    //self.ptr -= 4;
    v = self.readUnicodeString(len);
  }
  return v;
};

Stream.prototype.writeKey = function(k) {
  var key = xTID(k);
  this.writeWord(key);
};

Stream.prototype.writeAsciiOrKey = function(k) {
  if ((k & 0xFF000000) &&
      (k & 0xFF0000) &&
      (k & 0xFF00) &&
      (k & 0xFF)) {
    var key = xTID(k);
    this.writeWord(0);
    this.writeWord(key);
  } else {
    this.writeAscii(typeIDToStringID(k));
  }
};

//===========================================================================
//   Test code
//===========================================================================

AD.runTest = function(desc, ifname, ofname) {
  var testRead = true;
  var testWrite = true;

  if (isCS()) {
    var str = desc.writeToStream();
    var rdesc = desc.readFromStream();
    if (rdesc.isEqual(desc)) {
      return "ActionDescriptor.readFromStream failed: Descriptors not equal";
    }
    return true;
  }

  var str = desc.toStream();

  if (ifname) {
    Stream.writeToFile(ifname, str);  // for BinEdit only
    var fstr = Stream.readFromFile(ifname);
    if (fstr != str) throw "IO Error";
    str = fstr;
  }

//   var rdesc = AD.readFromStream(new Stream(str), true);
  
  var rdesc = new ActionDescriptor();

  if (testRead) {
    rdesc.readFromStream(new Stream(str), true);
    
    if (rdesc.isEqual(desc)) {
      return "ActionDescriptor.readFromStream failed: Descriptors not equal";
    }
  }

  var rstr;
  if (testWrite) {
    rstr = rdesc.writeToStream();

    if (ofname) {
      Stream.writeToFile(ofname, rstr); // for BinEdit
    }
  } else {
    rstr = rdesc.toStream();
  }

  if (rstr == str) {
    return true;
  }

  for (var i = 0; i < rstr.length; i++) {
    if (rstr.charCodeAt(i) != str.charCodeAt(i)) {
      return ("ActionDescriptor.writeToStream failed, differ at offset: " +
              Stdlib.longToHex(i));
    }
  }

  return "Unknown internal error";
};

AD.testDescriptor = function() {
  var desc = new ActionDescriptor();

  desc.putBoolean(cTID('MkVs'), false);
  desc.putClass(cTID('Nw  '), cTID('Chnl'));
  if (desc.putData) {
    desc.putData(cTID('fsel'), "Some random data");
  }
  desc.putDouble(sTID("pixelScaleFactor"), 1.5);
  desc.putEnumerated(cTID('Fl  '), cTID('Fl  '), cTID('Wht '));
  desc.putInteger(sTID("pause"), 2);

  var list  = new ActionList();
  list.putInteger(22);
  list.putDouble(22.2);
  list.putString("Some Random String");
  desc.putList(sTID("textShape"), list);

  var d = new ActionDescriptor();
  d.putInteger(sTID("pause"), 22);
  desc.putObject(cTID('T   '), cTID('PbkO'), d);

  desc.putPath(cTID('jsCt'), new File("/c/work/test.jsx"));

  var ref = new ActionReference();
  ref.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
  desc.putReference(cTID('From'), ref);

  desc.putString(cTID('Nm  '), "Layer Name");
  desc.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 432.0);

  var ok = AD.runTest(desc, "/c/work/descTest.bin", "/c/work/descTestOut.bin");
  alert("Descriptor Test: " + ok);
  return ok;
};

AD.testList = function() {
  var list = new ActionList();

  list.putBoolean(false);
  list.putClass(cTID('Chnl'));
  if (list.putData) {
    list.putData("Some random data");
  }
  list.putDouble(1.5);
  list.putEnumerated(cTID('Fl  '), cTID('Wht '));
  list.putInteger(2);

  var l  = new ActionList();
  l.putInteger(22);
  l.putDouble(22.2);
  l.putString("Some Random String");
  list.putList(l);

  var d = new ActionDescriptor();
  d.putInteger(sTID("pause"), 22);
  list.putObject(cTID('PbkO'), d);

 list.putPath(new File("/c/work/test.jsx"));

  var ref = new ActionReference();
  ref.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
  list.putReference(ref);

  list.putString("Layer Name");
  list.putUnitDouble(cTID('#Rlt'), 432.0);

  var desc = new ActionDescriptor();
  desc.putList(cTID('null'), list);

  var ok = AD.runTest(desc, "/c/work/listTest.bin", "/c/work/listTestOut.bin");
  alert("List Test: " + ok);
  return ok;
};

AD.testReference = function() {
  var ref = new ActionReference();

  ref.putClass(cTID('Cmnd'));
  ref.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
  ref.putIdentifier(cTID('capp'), cTID('Rtte'));
  ref.putIndex(cTID('Cmnd'), 7);
  ref.putName(cTID('Aset'), "XActions");
  ref.putOffset(cTID('HstS'), -10);
  ref.putProperty(cTID('Chnl'), cTID('fsel'));

  var desc = new ActionDescriptor();
  desc.putReference(cTID('null'), ref);

  var ok = AD.runTest(desc, "/c/work/refTest.bin", "/c/work/refTestOut.bin");
  alert("Reference Test: " + ok);
  return ok;
};

AD.main = function() {
  AD.testReference();
  AD.testDescriptor();
  AD.testList();
  return;

  var infile = new File("/c/work/Set2.atn");
  var actFile = new ActionFile();
  actFile.read(infile);
};

//AD.main();

"ADIO.js";

// EOF

//
// atn2bin.jsx
// This script converts ActionDescriptors to action files and back
//
// $Id$
// Copyright: (c)2007, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
//@show include
//

//include "xlib/Stream.js"

var atn2bin = true;

var atn2binTestMode = false;

//$.level = 1;

//=========================== ActionsPaletteFile ==============================

ActionsPaletteFile.readFrom = function(file) {
  var apf = new ActionsPaletteFile();
  apf.read(file);
  return apf;
};
ActionsPaletteFile.prototype.read = function(fptr) {
  var self = this;
  if (!fptr) {
    throw "File argument must be specified for ActionsPaletteFile.read.";
  }

  self.file = Stdlib.convertFptr(fptr);
  if (!self.file.exists) {
    throw "File does not exist \"" + self.file + "\".";
  }

  self.actionsPalette = new ActionsPalette();
  var str = Stream.readStream(self.file);
  self.version = str.readWord();
  self.actionsPalette.parent = self;
  self.actionsPalette.version = self.version;
  self.actionsPalette.read(str);
};
ActionsPaletteFile.prototype.write = function(fptr) {
  var self = this;
  if (!fptr) {
    throw "File argument must be specified for ActionsPaletteFile.write.";
  }

  self.file = Stdlib.convertFptr(fptr);
  var str = new Stream();
  str.writeWord(self.version);
  self.actionsPalette.version = self.version;
  self.actionsPalette.write(str);

  // XXX this is a magic block of bytes that work. maybe.
  str.writeInt16(0);
  str.writeInt16(0);
  str.writeInt16(0);
  str.writeInt16(0);
  str.writeInt16(0x0102);
  Stream.writeToFile(self.file, str.toStream());
};

ActionsPaletteFile.iterateOverFile = function(file, iterator) {
  var apf = new ActionsPaletteFile();
  apf.iterate(file, iterator);
  return apf;
};
ActionsPaletteFile.prototype.iterate = function(fptr, iterator) {
  var self = this;
  if (!fptr) {
    throw "File argument must be specified for ActionsPaletteFile.read.";
  }

  if (!iterator) {
    throw "No iterator specified";
  }

  self.file = Stdlib.convertFptr(fptr);
  if (!self.file.exists) {
    throw "File does not exist \"" + self.file + "\".";
  }

  self.actionsPalette = new ActionsPalette();
  var str = Stream.readStream(self.file);
  self.version = str.readWord();
  self.actionsPalette.parent = self;
  self.actionsPalette.version = self.version;
  self.actionsPalette.iterate(str, iterator);
};


//================================ ActionFile =================================

ActionFile.readFrom = function(file) {
  var af = new ActionFile();
  af.read(file);
  return af;
};

ActionFile.prototype.read = function(fptr) {
  var self = this;
  if (!fptr) {
    throw "File argument must be specified for ActionFile.read.";
  }

  self.file = Stdlib.convertFptr(fptr);
  if (!self.file.exists) {
    throw "File does not exist \"" + self.file + "\".";
  }

  self.actionSet = new ActionSet();
  var str = new Stream.readStream(self.file);
  self.actionSet.read(str);
  self.actionSet.parent = self;
};

ActionFile.prototype.write = function(fptr) {
  var self = this;
  var file;

  if (fptr) {
    file = Stdlib.convertFptr(fptr);
  } else {
    file = self.file;
  }
  var str = new Stream();
  self.actionSet.write(str, true);
  Stream.writeToFile(file, str.toStream());
};


//=========================== ActionsPalette ==================================

ActionsPalette.prototype.read = function(str) {
  var self = this;

  // if a psp file was not specified, read from the PS runtime
  if (!str) {
    return self.readRuntime();
  }
  
  var count = str.readWord();
  for (var i = 1; i <= count; i++) {
    var as = new ActionSet();
    as.parent = self;
    as.index = i;
    as.read(str, false);
    if (!as.version) {
      as.version = self.version;
    }
    self.add(as);
  }
  self.count = self.actionSets.length;
};

ActionsPalette.prototype.write = function(str) {
  var self = this;

  var asets = self.actionSets;
  var count = asets.length;

  str.writeWord(count);

  for (var i = 0; i < count; i++) {
    var as = asets[i];
    as.write(str, false);
  }  
};

ActionsPalette.prototype.readRuntime = function() {
  var self = this;
  var i = 1;

  //$.level = 1; debugger;
  while (true) {
    var ref = new ActionReference();
    ref.putIndex(PSClass.ActionSet, i);
    var desc;
    try {
      desc = executeActionGet(ref);
    } catch (e) {
      break;    // all done
    }
    var as = new ActionSet();
    as.parent = self;
    as.index = i;
    if (desc.hasKey(PSKey.Name)) {
      as.name = localize(desc.getString(PSKey.Name));
    }
    if (desc.hasKey(PSKey.NumberOfChildren)) {
      as.count = desc.getInteger(PSKey.NumberOfChildren);
      as.readRuntime(i);
    }
    self.add(as);
    i++;
  }
  self.count = self.actionSets.length;
};

ActionsPalette.prototype.loadRuntime = function() {
  var self = this;

  self.readRuntime();

  var asets = self.actionSets;

  for (var i = 0; i < asets.length; i++) {
    var aset = asets[i];
    aset.loadRuntime();
  }
};

ActionsPalette.prototype.iterate = function(str, iterator) {
  var self = this;

  // if a psp file was not specified, read from the PS runtime
  if (!str) {
    return self.iterateRuntime(iterator);
  }
  
  self.count = str.readWord();
  for (var i = 1; i <= self.count; i++) {
    var as = new ActionSet();
    as.parent = self;
    as.index = i;
    as.read(str, false);
    if (!as.version) {
      as.version = self.version;
    }
    iterator.exec(as);
    delete as;
    $.gc();
  }
};
ActionsPalette.prototype.iterateRuntime = function(iterator) {
  var self = this;
  var i = 1;

  //$.level = 1; debugger;
  while (true) {
    var ref = new ActionReference();
    ref.putIndex(PSClass.ActionSet, i);
    var desc;
    try {
      desc = executeActionGet(ref);
    } catch (e) {
      break;    // all done
    }
    var as = new ActionSet();
    as.parent = self;
    as.index = i;
    if (desc.hasKey(PSKey.Name)) {
      as.name = localize(desc.getString(PSKey.Name));
    }
    if (desc.hasKey(PSKey.NumberOfChildren)) {
      as.count = desc.getInteger(PSKey.NumberOfChildren);
      as.readRuntime(i);
    }
    iterator.exec(as);
    delete as;
    $.gc();
    i++;
  }
  self.count = i-1;
};


ActionsPalette.prototype.add = function(actionSet) {
  var self = this;
  actionSet.parent = self;
  actionSet.version = self.version;
  self.actionSets.push(actionSet);
  self.count = self.actionSets.length;
};

//================================ ActionSet ==================================


ActionSet.prototype.read = function(str, readVersion) {
  var self = this;

  // debugger;
  if (readVersion != false) {
    self.version = str.readWord();
  } else {
    self.version = 0x10;
  }
  self.name = localize(str.readUnicode());
  self.expanded = str.readBoolean();

  // XXX var acts = [];
  var len = str.readWord();
  self.actions = [];
  for (var i = 0; i < len; i++) {
    var act = new Action();
    act.read(str);
    self.add(act);
    //XXX acts.push(act);
  }
  // XXX self.actions = acts;
  // self.count = self.actions.length;

  return self;
};
ActionSet.prototype.getDescriptor = function() {
  var self = this;
  var ref = new ActionReference();

  ref.putIndex(cTID("ASet"), self.index);

  var desc = undefined;
  var lvl = $.level;
  $.level = 0;

  try {
    desc = executeActionGet(ref);

  } catch (e) {
    ; // we had a bad index...
  } finally {
    $.level = lvl;
  }
  return desc;
};
ActionSet.prototype.readRuntime = function() {
  var self = this;

  var desc = self.getDescriptor();
  self.count = desc.getInteger(cTID("NmbC"));
  var max = self.count;

  self.actions = [];

  for (var i = 1; i <= max; i++) {
    var ref = new ActionReference();
    ref.putIndex(PSClass.Action, i);
    ref.putIndex(PSClass.ActionSet, self.index);
    var desc = executeActionGet(ref);
    var act = new Action();
    act.readRuntime(desc);
    self.add(act);
  }
};

ActionSet.prototype.loadRuntime = function(name, index) {
  var self = this;

  if (name) {
    self.name = localize(name);
  }

  if (index) {
    self.index = index;
  }

  self.readRuntime();
  self.version = 0x10;

  var acts = self.actions;

  for (var i = 0; i < acts.length; i++) {
    var act = acts[i];
    act.loadRuntime(act.name, self.name);
  }
};

ActionSet.prototype.write = function(str, writeVersion) {
  var self = this;

  //debugger;
  if (writeVersion) {
    str.writeWord(self.version);
  }
  str.writeUnicode(self.name);
  str.writeBoolean(self.expanded);

  var acts = self.actions;
  str.writeWord(acts.length);
  for (var i = 0; i < acts.length; i++) {
    var act = acts[i];
    act.write(str);
  }
};
ActionSet.prototype.add = function(act) {
  var self = this;

  act.parent = self;
  self.actions.push(act);
  self.count = self.actions.length;
};


//================================ Action =====================================

Action.prototype.read = function(str) {
  var self = this;

  self.index      = str.readInt16();
  self.shiftKey   = str.readBoolean();
  self.commandKey = str.readBoolean();
  self.colorIndex = str.readInt16();
  self.name       = localize(str.readUnicode());
  self.expanded   = str.readBoolean();

  var items = [];
  var len = str.readWord();

  for (var i = 0; i < len; i++) {
    var ai = new ActionItem();
    ai.parent = self;
    ai.read(str);
    items.push(ai);
  }

  self.actionItems = items;
  self.count = self.actionItems.length;

  return self;
};
Action.prototype.readDroplet = function(str) {
  var self = this;

  //XXX add a search in here for 8BDR instead of the magic offset
  
  var m = str.str.match(/8BDR/);

  if (!m) {
    throw "Bad droplet format. Unable to extract action.";
  }

  var ofs = m.index + 27;

  str.seek(ofs);
  
  var len = str.readWord(); // check for a bad offset (PS version problem)

  if (len > 100) {
    throw "Bad droplet format. Unable to extract action.";
  }

  str.ptr -= 4;

  self.name = localize(str.readUnicode());
  str.readByte();     // some odd byte....

  var items = [];
  var len = str.readWord();

  for (var i = 0; i < len; i++) {
    var ai = new ActionItem();
    ai.parent = self;
    ai.read(str);
    items.push(ai);
  }

  self.actionItems = items;
  self.count = self.actionItems.length;

  return self;
};
Action.prototype.readFromPalette = function(name, atnSet) {
  var self = this;

  if (!Stdlib.hasAction(name, atnSet)) {
    throw "Error: Action " + atnSet + ':' + name + " is not available.";
  }
  var fptr = new File(Folder.temp + '/' + name.replace(/\W+/g, '_') + ".exe");

  try {
    Stdlib.createDroplet(name, atnSet, fptr);

    var str = Stream.readStream(fptr);
    self.readDroplet(str);

  } catch (e) {
    // alert(e + '\n' + fptr);

  } finally {
    fptr.remove();
  }
};
Action.prototype.loadRuntime = Action.prototype.readFromPalette;

Action.prototype.readRuntime = function(desc) {
  var self = this;

  // most of these properties cannot be retrieved from the runtime palette

  if (desc.hasKey(PSKey.Name)) {
    self.name = localize(desc.getString(PSKey.Name));
  }
  if (desc.hasKey(PSKey.NumberOfChildren)) {
    self.count = desc.getInteger(PSKey.NumberOfChildren);
  }
  if (desc.hasKey(PSKey.ShiftKey)) {
    self.shiftKey = desc.getInteger(PSKey.ShiftKey);
  }
  if (desc.hasKey(PSKey.CommandKey)) {
    self.commandKey = desc.getInteger(PSKey.CommandKey);
  }
  if (desc.hasKey(PSKey.Color)) {
    self.colorIndex = desc.getInteger(PSKey.Color);
  }
//   if (desc.hasKey(PSKey.Expanded)) {
//     self.expanded = desc.getInteger(PSKey.Expanded);
//   }
  var items = [];
  var max = self.count;

  for (var i = 0; i < max; i++) {
    var ai = new ActionItem();
    ai.parent = self;
  }
  self.actionItems = items;
  self.count = self.actionItems.length;
  return;
};
Action.prototype.write = function(str) {
  var self = this;

  str.writeInt16(self.index);
  str.writeBoolean(self.shiftKey);
  str.writeBoolean(self.commandKey);
  str.writeInt16(self.colorIndex);
  str.writeUnicode(self.name);
  str.writeBoolean(self.expanded);

  var items = self.actionItems;
  str.writeWord(items.length);
  for (var i = 0; i < items.length; i++) {
    var ai = items[i];
    ai.write(str);
  }
};
Action.prototype.add = function(item) {
  var self = this;

  self.actionItems.push(item);
  self.count = self.actionItems.length;
  return item;
};

//=============================== ActionItem ==================================

ActionItem.prototype.read = function(str) {
  var self = this;

  //debugger;
  self.expanded = str.readBoolean();
  self.enabled = str.readBoolean();
  self.withDialog = str.readBoolean();
  self.dialogOptions = str.readByte();

  self.identifier = str.readString(4);
  if (self.identifier == ActionItem.TEXT_ID) {
    self.event = str.readAscii();
  } else if (self.identifier == ActionItem.LONG_ID) {
    self.itemID = str.readWord();
  } else {
    throw "Bad ActionItem definition: ActionItem.id";
  }

  self.name = str.readAscii();
  self.hasDescriptor = (str.readWord() == -1);

  //Stdlib.fullStop();
  if (self.hasDescriptor) {
    // hack, hack
    //str.ptr -= 4;
    //str.writeWord(0x10); // spoof the version in this part of this stream
    //log.writeln("--> " + self.name);
    var size = 500;
    var ptr = str.ptr;
    while (true) {
      var xstr = new Stream();
      xstr.writeWord(0x10);
      //log.writeln("slice");
      // copy from version to end
      var bytes = str.str.slice(str.ptr, Math.min(str.ptr + size,
                                                  str.str.length));
      //log.writeln("writeRaw");
      xstr.writeRaw(bytes);
      delete bytes;
      //log.writeln("fromStream");
      self.descriptor = new ActionDescriptor();
      if (self.descriptor.fromStream == undefined) {
        throw "\rDescriptor.fromStream not defined for this version " +
          "of Photoshop. This currenly only works with CS2. A CS version " +
          "may become available in the future.";
      }
      try {
        self.descriptor.fromStream(xstr.str.join(""));  // read it
        break;
      } catch (e) {
        if (str.ptr + size > str.str.length) {
          throw "Failed reading " + self.name;
        }
        size *= 2;
        str.ptr = ptr;
      }
    }

    var cpstr = self.descriptor.toStream(); // find out how long it really was
    str.ptr += (cpstr.length - 4);      // advance the stream pointer
    //log.writeln("<-- " + self.name);
  }
};
ActionItem.prototype.write = function(str) {
  var self = this;

  //debugger;
  str.writeBoolean(self.expanded);
  str.writeBoolean(self.enabled);
  str.writeBoolean(self.withDialog);
  str.writeByte(self.dialogOptions);

  str.writeString(self.identifier);
  if (self.identifier == ActionItem.TEXT_ID) {
    str.writeAscii(self.event);
  } else if (self.identifier == ActionItem.LONG_ID) {
    str.writeWord(self.itemID);
  } else {
    throw "Bad ActionItem definition: ActionItem.identifier";
  }

  str.writeAscii(self.name);

  // hasDescriptor
  str.writeWord(self.descriptor ? -1 : 0);

  if (self.descriptor) {
    // ActionDescript.toStream() can file if the descriptor is empty
    if (self.descriptor.count > 0) {
      var bytes = self.descriptor.toStream();
      // debugger;
      // slice off the version number
      str.writeRaw(bytes.slice(4));

    } else {
      str.writeUnicode("");
      str.writeAsciiOrKey(cTID('null'));   // object type 
      str.writeWord(0);
    }
  }
};

var atn2bin_test;
if (atn2binTestMode && !atn2bin_test) {
  eval('//@include "xlib/xml/atn2bin-test.jsx";\r');
}

"atn2bin.jsx";
// EOF

//
// atn2xml.jsx
//   This script converts action files and ActionDescriptor trees to
//   XML and back.
//
// $Id$
// Copyright: (c)2007, xbytor
// License: http://creativecommons.org/licenses/LGPL/2.1
// Contact: xbytor@gmail.com
//
//-target photoshop
//
//@show include
//
var atn2xml_jsx = true;

// =========================================================================
//
// xmlsax.js - an XML SAX parser in JavaScript.
//
// version 3.1
//
// =========================================================================
//
// Copyright (C) 2001 - 2002 David Joham (djoham@yahoo.com) and Scott Severtson
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 2.1 of the License, or (at your option) any later version.

// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.

// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
//
//
// Visit the XML for <SCRIPT> home page at http://xmljs.sourceforge.net
//

// CONSTANTS

// =========================================================================
// =========================================================================
// =========================================================================
var whitespace = "\n\r\t ";


/***************************************************************************************************************
XMLP is a pull-based parser. The calling application passes in a XML string
to the constructor, then repeatedly calls .next() to parse the next segment.
.next() returns a flag indicating what type of segment was found, and stores
data temporarily in couple member variables (name, content, array of
attributes), which can be accessed by several .get____() methods.

Basically, XMLP is the lowest common denominator parser - an very simple
API which other wrappers can be built against.
*****************************************************************************************************************/


XMLP = function(strXML) {
    /*******************************************************************************************************************
    function:   this is the constructor to the XMLP Object

    Author:   Scott Severtson

    Description:
        Instantiates and initializes the object
    *********************************************************************************************************************/
    // Normalize line breaks
    strXML = SAXStrings.replace(strXML, null, null, "\r\n", "\n");
    strXML = SAXStrings.replace(strXML, null, null, "\r", "\n");

    this.m_xml = strXML;
    this.m_iP = 0;
    this.m_iState = XMLP._STATE_PROLOG;
    this.m_stack = new Stack();
    this._clearAttributes();

}  // end XMLP constructor


// CONSTANTS    (these must be below the constructor)

// =========================================================================
// =========================================================================
// =========================================================================

XMLP._NONE    = 0;
XMLP._ELM_B   = 1;
XMLP._ELM_E   = 2;
XMLP._ELM_EMP = 3;
XMLP._ATT     = 4;
XMLP._TEXT    = 5;
XMLP._ENTITY  = 6;
XMLP._PI      = 7;
XMLP._CDATA   = 8;
XMLP._COMMENT = 9;
XMLP._DTD     = 10;
XMLP._ERROR   = 11;

XMLP._CONT_XML = 0;
XMLP._CONT_ALT = 1;

XMLP._ATT_NAME = 0;
XMLP._ATT_VAL  = 1;

XMLP._STATE_PROLOG = 1;
XMLP._STATE_DOCUMENT = 2;
XMLP._STATE_MISC = 3;

XMLP._errs = new Array();
XMLP._errs[XMLP.ERR_CLOSE_PI       = 0 ] = "PI: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_DTD      = 1 ] = "DTD: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_COMMENT  = 2 ] = "Comment: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_CDATA    = 3 ] = "CDATA: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ELM      = 4 ] = "Element: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ENTITY   = 5 ] = "Entity: missing closing sequence";
XMLP._errs[XMLP.ERR_PI_TARGET      = 6 ] = "PI: target is required";
XMLP._errs[XMLP.ERR_ELM_EMPTY      = 7 ] = "Element: cannot be both empty and closing";
XMLP._errs[XMLP.ERR_ELM_NAME       = 8 ] = "Element: name must immediatly follow \"<\"";
XMLP._errs[XMLP.ERR_ELM_LT_NAME    = 9 ] = "Element: \"<\" not allowed in element names";
XMLP._errs[XMLP.ERR_ATT_VALUES     = 10] = "Attribute: values are required and must be in quotes";
XMLP._errs[XMLP.ERR_ATT_LT_NAME    = 11] = "Element: \"<\" not allowed in attribute names";
XMLP._errs[XMLP.ERR_ATT_LT_VALUE   = 12] = "Attribute: \"<\" not allowed in attribute values";
XMLP._errs[XMLP.ERR_ATT_DUP        = 13] = "Attribute: duplicate attributes not allowed";
XMLP._errs[XMLP.ERR_ENTITY_UNKNOWN = 14] = "Entity: unknown entity";
XMLP._errs[XMLP.ERR_INFINITELOOP   = 15] = "Infininte loop";
XMLP._errs[XMLP.ERR_DOC_STRUCTURE  = 16] = "Document: only comments, processing instructions, or whitespace allowed outside of document element";
XMLP._errs[XMLP.ERR_ELM_NESTING    = 17] = "Element: must be nested correctly";

// =========================================================================
// =========================================================================
// =========================================================================


XMLP.prototype._addAttribute = function(name, value) {
    /*******************************************************************************************************************
    function:   _addAttribute

    Author:   Scott Severtson
    *********************************************************************************************************************/
    this.m_atts[this.m_atts.length] = new Array(name, value);
}  // end function _addAttribute


XMLP.prototype._checkStructure = function(iEvent) {
    /*******************************************************************************************************************
    function:   _checkStructure

    Author:   Scott Severtson
    *********************************************************************************************************************/
  
	if(XMLP._STATE_PROLOG == this.m_iState) {
		if((XMLP._TEXT == iEvent) || (XMLP._ENTITY == iEvent)) {
            if(SAXStrings.indexOfNonWhitespace(this.getContent(), this.getContentBegin(), this.getContentEnd()) != -1) {
				return this._setErr(XMLP.ERR_DOC_STRUCTURE);
            }
        }

        if((XMLP._ELM_B == iEvent) || (XMLP._ELM_EMP == iEvent)) {
            this.m_iState = XMLP._STATE_DOCUMENT;
            // Don't return - fall through to next state
        }
    }
    if(XMLP._STATE_DOCUMENT == this.m_iState) {
        if((XMLP._ELM_B == iEvent) || (XMLP._ELM_EMP == iEvent)) {
            this.m_stack.push(this.getName());
        }

        if((XMLP._ELM_E == iEvent) || (XMLP._ELM_EMP == iEvent)) {
            var strTop = this.m_stack.pop();
            if((strTop == null) || (strTop != this.getName())) {
                return this._setErr(XMLP.ERR_ELM_NESTING);
            }
        }

        if(this.m_stack.count() == 0) {
            this.m_iState = XMLP._STATE_MISC;
            return iEvent;
        }
    }
    if(XMLP._STATE_MISC == this.m_iState) {
		if((XMLP._ELM_B == iEvent) || (XMLP._ELM_E == iEvent) || (XMLP._ELM_EMP == iEvent) || (XMLP.EVT_DTD == iEvent)) {
			return this._setErr(XMLP.ERR_DOC_STRUCTURE);
        }

        if((XMLP._TEXT == iEvent) || (XMLP._ENTITY == iEvent)) {
			if(SAXStrings.indexOfNonWhitespace(this.getContent(), this.getContentBegin(), this.getContentEnd()) != -1) {
				return this._setErr(XMLP.ERR_DOC_STRUCTURE);
            }
        }
    }

    return iEvent;

}  // end function _checkStructure


XMLP.prototype._clearAttributes = function() {
    /*******************************************************************************************************************
    function:   _clearAttributes

    Author:   Scott Severtson
    *********************************************************************************************************************/
    this.m_atts = new Array();
}  // end function _clearAttributes


XMLP.prototype._findAttributeIndex = function(name) {
    /*******************************************************************************************************************
    function:   findAttributeIndex

    Author:   Scott Severtson
    *********************************************************************************************************************/
    for(var i = 0; i < this.m_atts.length; i++) {
        if(this.m_atts[i][XMLP._ATT_NAME] == name) {
            return i;
        }
    }
    return -1;

}  // end function _findAttributeIndex


XMLP.prototype.getAttributeCount = function() {
    /*******************************************************************************************************************
    function:   getAttributeCount

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_atts ? this.m_atts.length : 0;

}  // end function getAttributeCount()


XMLP.prototype.getAttributeName = function(index) {
    /*******************************************************************************************************************
    function:   getAttributeName

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return ((index < 0) || (index >= this.m_atts.length)) ? null : this.m_atts[index][XMLP._ATT_NAME];

}  //end function getAttributeName


XMLP.prototype.getAttributeValue = function(index) {
    /*******************************************************************************************************************
    function:   getAttributeValue

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return ((index < 0) || (index >= this.m_atts.length)) ? null : __unescapeString(this.m_atts[index][XMLP._ATT_VAL]);

} // end function getAttributeValue


XMLP.prototype.getAttributeValueByName = function(name) {
    /*******************************************************************************************************************
    function:   getAttributeValueByName

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.getAttributeValue(this._findAttributeIndex(name));

}  // end function getAttributeValueByName


XMLP.prototype.getColumnNumber = function() {
    /*******************************************************************************************************************
    function:   getColumnNumber

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return SAXStrings.getColumnNumber(this.m_xml, this.m_iP);

}  // end function getColumnNumber


XMLP.prototype.getContent = function() {
    /*******************************************************************************************************************
    function:   getContent

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return (this.m_cSrc == XMLP._CONT_XML) ? this.m_xml : this.m_cAlt;

}  //end function getContent


XMLP.prototype.getContentBegin = function() {
    /*******************************************************************************************************************
    function:   getContentBegin

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_cB;

}  //end function getContentBegin


XMLP.prototype.getContentEnd = function() {
    /*******************************************************************************************************************
    function:   getContentEnd

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_cE;

}  // end function getContentEnd


XMLP.prototype.getLineNumber = function() {
    /*******************************************************************************************************************
    function:   getLineNumber

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return SAXStrings.getLineNumber(this.m_xml, this.m_iP);

}  // end function getLineNumber


XMLP.prototype.getName = function() {
    /*******************************************************************************************************************
    function:   getName

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_name;

}  // end function getName()


XMLP.prototype.next = function() {
    /*******************************************************************************************************************
    function:   next

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this._checkStructure(this._parse());

}  // end function next()


XMLP.prototype._parse = function() {
    /*******************************************************************************************************************
    function:   _parse

    Author:   Scott Severtson
    *********************************************************************************************************************/

	if(this.m_iP == this.m_xml.length) {
        return XMLP._NONE;
    }

    if(this.m_iP == this.m_xml.indexOf("<?",        this.m_iP)) {
        return this._parsePI     (this.m_iP + 2);
    }
    else if(this.m_iP == this.m_xml.indexOf("<!DOCTYPE", this.m_iP)) {
        return this._parseDTD    (this.m_iP + 9);
    }
    else if(this.m_iP == this.m_xml.indexOf("<!--",      this.m_iP)) {
        return this._parseComment(this.m_iP + 4);
    }
    else if(this.m_iP == this.m_xml.indexOf("<![CDATA[", this.m_iP)) {
        return this._parseCDATA  (this.m_iP + 9);
    }
    else if(this.m_iP == this.m_xml.indexOf("<",         this.m_iP)) {
        return this._parseElement(this.m_iP + 1);
    }
    else if(this.m_iP == this.m_xml.indexOf("&",         this.m_iP)) {
        return this._parseEntity (this.m_iP + 1);
    }
    else{
        return this._parseText   (this.m_iP);
    }
	

}  // end function _parse


XMLP.prototype._parseAttribute = function(iB, iE) {
    /*******************************************************************************************************************
    function:   _parseAttribute

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iNB, iNE, iEq, iVB, iVE;
    var cQuote, strN, strV;

	this.m_cAlt = ""; //resets the value so we don't use an old one by accident (see testAttribute7 in the test suite)
    
	iNB = SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iE);
    if((iNB == -1) ||(iNB >= iE)) {
        return iNB;
    }

    iEq = this.m_xml.indexOf("=", iNB);
    if((iEq == -1) || (iEq > iE)) {
        return this._setErr(XMLP.ERR_ATT_VALUES);
    }

    iNE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iNB, iEq);

    iVB = SAXStrings.indexOfNonWhitespace(this.m_xml, iEq + 1, iE);
    if((iVB == -1) ||(iVB > iE)) {
        return this._setErr(XMLP.ERR_ATT_VALUES);
    }

    cQuote = this.m_xml.charAt(iVB);
    if(SAXStrings.QUOTES.indexOf(cQuote) == -1) {
        return this._setErr(XMLP.ERR_ATT_VALUES);
    }

    iVE = this.m_xml.indexOf(cQuote, iVB + 1);
    if((iVE == -1) ||(iVE > iE)) {
        return this._setErr(XMLP.ERR_ATT_VALUES);
    }

    strN = this.m_xml.substring(iNB, iNE + 1);
    strV = this.m_xml.substring(iVB + 1, iVE);

    if(strN.indexOf("<") != -1) {
        return this._setErr(XMLP.ERR_ATT_LT_NAME);
    }

    if(strV.indexOf("<") != -1) {
        return this._setErr(XMLP.ERR_ATT_LT_VALUE);
    }

    strV = SAXStrings.replace(strV, null, null, "\n", " ");
    strV = SAXStrings.replace(strV, null, null, "\t", " ");
	iRet = this._replaceEntities(strV);
    if(iRet == XMLP._ERROR) {
        return iRet;
    }

    strV = this.m_cAlt;

    if(this._findAttributeIndex(strN) == -1) {
        this._addAttribute(strN, strV);
    }
    else {
        return this._setErr(XMLP.ERR_ATT_DUP);
    }

    this.m_iP = iVE + 2;

    return XMLP._ATT;

}  // end function _parseAttribute


XMLP.prototype._parseCDATA = function(iB) {
    /*******************************************************************************************************************
    function:   _parseCDATA

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iE = this.m_xml.indexOf("]]>", iB);
    if (iE == -1) {
        return this._setErr(XMLP.ERR_CLOSE_CDATA);
    }

    this._setContent(XMLP._CONT_XML, iB, iE);

    this.m_iP = iE + 3;

    return XMLP._CDATA;

}  // end function _parseCDATA


XMLP.prototype._parseComment = function(iB) {
    /*******************************************************************************************************************
    function:   _parseComment

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iE = this.m_xml.indexOf("-" + "->", iB);
    if (iE == -1) {
        return this._setErr(XMLP.ERR_CLOSE_COMMENT);
    }

    this._setContent(XMLP._CONT_XML, iB, iE);

    this.m_iP = iE + 3;

    return XMLP._COMMENT;

}  // end function _parseComment


XMLP.prototype._parseDTD = function(iB) {
    /*******************************************************************************************************************
    function:  _parseDTD

    Author:   Scott Severtson
    *********************************************************************************************************************/

    // Eat DTD

    var iE, strClose, iInt, iLast;

    iE = this.m_xml.indexOf(">", iB);
    if(iE == -1) {
        return this._setErr(XMLP.ERR_CLOSE_DTD);
    }

    iInt = this.m_xml.indexOf("[", iB);
    strClose = ((iInt != -1) && (iInt < iE)) ? "]>" : ">";

    while(true) {
        // DEBUG: Remove
        if(iE == iLast) {
            return this._setErr(XMLP.ERR_INFINITELOOP);
        }

        iLast = iE;
        // DEBUG: Remove End

        iE = this.m_xml.indexOf(strClose, iB);
        if(iE == -1) {
            return this._setErr(XMLP.ERR_CLOSE_DTD);
        }

        // Make sure it is not the end of a CDATA section
        if (this.m_xml.substring(iE - 1, iE + 2) != "]]>") {
            break;
        }
    }

    this.m_iP = iE + strClose.length;

    return XMLP._DTD;

}  // end function _parseDTD


XMLP.prototype._parseElement = function(iB) {
    /*******************************************************************************************************************
    function:   _parseElement

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iE, iDE, iNE, iRet;
    var iType, strN, iLast;

    iDE = iE = this.m_xml.indexOf(">", iB);
    if(iE == -1) {
        return this._setErr(XMLP.ERR_CLOSE_ELM);
    }

    if(this.m_xml.charAt(iB) == "/") {
        iType = XMLP._ELM_E;
        iB++;
    } else {
        iType = XMLP._ELM_B;
    }

    if(this.m_xml.charAt(iE - 1) == "/") {
        if(iType == XMLP._ELM_E) {
            return this._setErr(XMLP.ERR_ELM_EMPTY);
        }
        iType = XMLP._ELM_EMP;
        iDE--;
    }

    iDE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iB, iDE);

    //djohack
    //hack to allow for elements with single character names to be recognized

    if (iE - iB != 1 ) {
        if(SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iDE) != iB) {
            return this._setErr(XMLP.ERR_ELM_NAME);
        }
    }
    // end hack -- original code below

    /*
    if(SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iDE) != iB)
        return this._setErr(XMLP.ERR_ELM_NAME);
    */
    this._clearAttributes();

    iNE = SAXStrings.indexOfWhitespace(this.m_xml, iB, iDE);
    if(iNE == -1) {
        iNE = iDE + 1;
    }
    else {
        this.m_iP = iNE;
        while(this.m_iP < iDE) {
            // DEBUG: Remove
            if(this.m_iP == iLast) return this._setErr(XMLP.ERR_INFINITELOOP);
            iLast = this.m_iP;
            // DEBUG: Remove End


            iRet = this._parseAttribute(this.m_iP, iDE);
            if(iRet == XMLP._ERROR) return iRet;
        }
    }

    strN = this.m_xml.substring(iB, iNE);

    if(strN.indexOf("<") != -1) {
        return this._setErr(XMLP.ERR_ELM_LT_NAME);
    }

    this.m_name = strN;
    this.m_iP = iE + 1;

    return iType;

}  // end function _parseElement


XMLP.prototype._parseEntity = function(iB) {
    /*******************************************************************************************************************
    function:   _parseEntity

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iE = this.m_xml.indexOf(";", iB);
    if(iE == -1) {
        return this._setErr(XMLP.ERR_CLOSE_ENTITY);
    }

    this.m_iP = iE + 1;

    return this._replaceEntity(this.m_xml, iB, iE);

}  // end function _parseEntity


XMLP.prototype._parsePI = function(iB) {
    /*******************************************************************************************************************
    function:   _parsePI

    Author:   Scott Severtson
    *********************************************************************************************************************/

    var iE, iTB, iTE, iCB, iCE;

    iE = this.m_xml.indexOf("?>", iB);
    if(iE   == -1) {
        return this._setErr(XMLP.ERR_CLOSE_PI);
    }

    iTB = SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iE);
    if(iTB == -1) {
        return this._setErr(XMLP.ERR_PI_TARGET);
    }

    iTE = SAXStrings.indexOfWhitespace(this.m_xml, iTB, iE);
    if(iTE  == -1) {
        iTE = iE;
    }

    iCB = SAXStrings.indexOfNonWhitespace(this.m_xml, iTE, iE);
    if(iCB == -1) {
        iCB = iE;
    }

    iCE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iCB, iE);
    if(iCE  == -1) {
        iCE = iE - 1;
    }

    this.m_name = this.m_xml.substring(iTB, iTE);
    this._setContent(XMLP._CONT_XML, iCB, iCE + 1);
    this.m_iP = iE + 2;

    return XMLP._PI;

}  // end function _parsePI


XMLP.prototype._parseText = function(iB) {
    /*******************************************************************************************************************
    function:   _parseText

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iE, iEE;

    iE = this.m_xml.indexOf("<", iB);
    if(iE == -1) {
        iE = this.m_xml.length;
    }

    iEE = this.m_xml.indexOf("&", iB);
    if((iEE != -1) && (iEE <= iE)) {
        iE = iEE;
    }

    this._setContent(XMLP._CONT_XML, iB, iE);

    this.m_iP = iE;

    return XMLP._TEXT;

} // end function _parseText


XMLP.prototype._replaceEntities = function(strD, iB, iE) {
    /*******************************************************************************************************************
    function:   _replaceEntities

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) return "";
    iB = iB || 0;
    iE = iE || strD.length;


    var iEB, iEE, strRet = "";

    iEB = strD.indexOf("&", iB);
    iEE = iB;

    while((iEB > 0) && (iEB < iE)) {
        strRet += strD.substring(iEE, iEB);

        iEE = strD.indexOf(";", iEB) + 1;

        if((iEE == 0) || (iEE > iE)) {
            return this._setErr(XMLP.ERR_CLOSE_ENTITY);
        }

        iRet = this._replaceEntity(strD, iEB + 1, iEE - 1);
        if(iRet == XMLP._ERROR) {
            return iRet;
        }

        strRet += this.m_cAlt;

        iEB = strD.indexOf("&", iEE);
    }

    if(iEE != iE) {
        strRet += strD.substring(iEE, iE);
    }

    this._setContent(XMLP._CONT_ALT, strRet);

    return XMLP._ENTITY;

}  // end function _replaceEntities


XMLP.prototype._replaceEntity = function(strD, iB, iE) {
    /*******************************************************************************************************************
    function:   _replaceEntity

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) return -1;
    iB = iB || 0;
    iE = iE || strD.length;

    switch(strD.substring(iB, iE)) {
        case "amp":  strEnt = "&";  break;
        case "lt":   strEnt = "<";  break;
        case "gt":   strEnt = ">";  break;
        case "apos": strEnt = "'";  break;
        case "quot": strEnt = "\""; break;
        default:
            if(strD.charAt(iB) == "#") {
                strEnt = String.fromCharCode(parseInt(strD.substring(iB + 1, iE)));
            } else {
                return this._setErr(XMLP.ERR_ENTITY_UNKNOWN);
            }
        break;
    }
    this._setContent(XMLP._CONT_ALT, strEnt);

    return XMLP._ENTITY;
}  // end function _replaceEntity


XMLP.prototype._setContent = function(iSrc) {
    /*******************************************************************************************************************
    function:   _setContent

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var args = arguments;

    if(XMLP._CONT_XML == iSrc) {
        this.m_cAlt = null;
        this.m_cB = args[1];
        this.m_cE = args[2];
    } else {
        this.m_cAlt = args[1];
        this.m_cB = 0;
        this.m_cE = args[1].length;
    }
    this.m_cSrc = iSrc;

}  // end function _setContent


XMLP.prototype._setErr = function(iErr) {
    /*******************************************************************************************************************
    function:   _setErr

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var strErr = XMLP._errs[iErr];

    this.m_cAlt = strErr;
    this.m_cB = 0;
    this.m_cE = strErr.length;
    this.m_cSrc = XMLP._CONT_ALT;

    return XMLP._ERROR;

}  // end function _setErr






/***************************************************************************************************************
SAXDriver is an object that basically wraps an XMLP instance, and provides an
event-based interface for parsing. This is the object users interact with when coding
with XML for <SCRIPT>
*****************************************************************************************************************/


SAXDriver = function() {
    /*******************************************************************************************************************
    function:   SAXDriver

    Author:   Scott Severtson

    Description:
        This is the constructor for the SAXDriver Object
    *********************************************************************************************************************/
    this.m_hndDoc = null;
    this.m_hndErr = null;
    this.m_hndLex = null;
}


// CONSTANTS    (these must be below the constructor)

// =========================================================================
// =========================================================================
// =========================================================================
SAXDriver.DOC_B = 1;
SAXDriver.DOC_E = 2;
SAXDriver.ELM_B = 3;
SAXDriver.ELM_E = 4;
SAXDriver.CHARS = 5;
SAXDriver.PI    = 6;
SAXDriver.CD_B  = 7;
SAXDriver.CD_E  = 8;
SAXDriver.CMNT  = 9;
SAXDriver.DTD_B = 10;
SAXDriver.DTD_E = 11;
// =========================================================================
// =========================================================================
// =========================================================================



SAXDriver.prototype.parse = function(strD) {
    /*******************************************************************************************************************
    function:   parse

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var parser = new XMLP(strD);

    if(this.m_hndDoc && this.m_hndDoc.setDocumentLocator) {
        this.m_hndDoc.setDocumentLocator(this);
    }

    this.m_parser = parser;
    this.m_bErr = false;

    if(!this.m_bErr) {
        this._fireEvent(SAXDriver.DOC_B);
    }
    this._parseLoop();
    if(!this.m_bErr) {
        this._fireEvent(SAXDriver.DOC_E);
    }

    this.m_xml = null;
    this.m_iP = 0;

}  // end function parse


SAXDriver.prototype.setDocumentHandler = function(hnd) {
    /*******************************************************************************************************************
    function:   setDocumentHandler

    Author:   Scott Severtson
    *********************************************************************************************************************/

    this.m_hndDoc = hnd;

}   // end function setDocumentHandler


SAXDriver.prototype.setErrorHandler = function(hnd) {
    /*******************************************************************************************************************
    function:   setErrorHandler

    Author:   Scott Severtson
    *********************************************************************************************************************/

    this.m_hndErr = hnd;

}  // end function setErrorHandler


SAXDriver.prototype.setLexicalHandler = function(hnd) {
    /*******************************************************************************************************************
    function:   setLexicalHandler

    Author:   Scott Severtson
    *********************************************************************************************************************/

    this.m_hndLex = hnd;

}  // end function setLexicalHandler


    /*******************************************************************************************************************
                                                LOCATOR/PARSE EXCEPTION INTERFACE
    *********************************************************************************************************************/

SAXDriver.prototype.getColumnNumber = function() {
    /*******************************************************************************************************************
    function:   getSystemId

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_parser.getColumnNumber();

}  // end function getColumnNumber


SAXDriver.prototype.getLineNumber = function() {
    /*******************************************************************************************************************
    function:   getLineNumber

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_parser.getLineNumber();

}  // end function getLineNumber


SAXDriver.prototype.getMessage = function() {
    /*******************************************************************************************************************
    function:   getMessage

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_strErrMsg;

}  // end function getMessage


SAXDriver.prototype.getPublicId = function() {
    /*******************************************************************************************************************
    function:   getPublicID

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return null;

}  // end function getPublicID


SAXDriver.prototype.getSystemId = function() {
    /*******************************************************************************************************************
    function:   getSystemId

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return null;

}  // end function getSystemId


    /*******************************************************************************************************************
                                                Attribute List Interface
    *********************************************************************************************************************/

SAXDriver.prototype.getLength = function() {
    /*******************************************************************************************************************
    function:   getLength

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_parser.getAttributeCount();

}  // end function getAttributeCount


SAXDriver.prototype.getName = function(index) {
    /*******************************************************************************************************************
    function:   getName

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_parser.getAttributeName(index);

} // end function getAttributeName


SAXDriver.prototype.getValue = function(index) {
    /*******************************************************************************************************************
    function:   getValue

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_parser.getAttributeValue(index);

}  // end function getAttributeValue


SAXDriver.prototype.getValueByName = function(name) {
    /*******************************************************************************************************************
    function:   getValueByName

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_parser.getAttributeValueByName(name);

} // end function getAttributeValueByName


    /*******************************************************************************************************************
                                                                Private functions
    *********************************************************************************************************************/

SAXDriver.prototype._fireError = function(strMsg) {
    /*******************************************************************************************************************
    function:   _fireError

    Author:   Scott Severtson
    *********************************************************************************************************************/
    this.m_strErrMsg = strMsg;
    this.m_bErr = true;

    if(this.m_hndErr && this.m_hndErr.fatalError) {
        this.m_hndErr.fatalError(this);
    }

}   // end function _fireError


SAXDriver.prototype._fireEvent = function(iEvt) {
    /*******************************************************************************************************************
    function:   _fireEvent

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var hnd, func, args = arguments, iLen = args.length - 1;

    if(this.m_bErr) return;

    if(SAXDriver.DOC_B == iEvt) {
        func = "startDocument";         hnd = this.m_hndDoc;
    }
    else if (SAXDriver.DOC_E == iEvt) {
        func = "endDocument";           hnd = this.m_hndDoc;
    }
    else if (SAXDriver.ELM_B == iEvt) {
        func = "startElement";          hnd = this.m_hndDoc;
    }
    else if (SAXDriver.ELM_E == iEvt) {
        func = "endElement";            hnd = this.m_hndDoc;
    }
    else if (SAXDriver.CHARS == iEvt) {
        func = "characters";            hnd = this.m_hndDoc;
    }
    else if (SAXDriver.PI    == iEvt) {
        func = "processingInstruction"; hnd = this.m_hndDoc;
    }
    else if (SAXDriver.CD_B  == iEvt) {
        func = "startCDATA";            hnd = this.m_hndLex;
    }
    else if (SAXDriver.CD_E  == iEvt) {
        func = "endCDATA";              hnd = this.m_hndLex;
    }
    else if (SAXDriver.CMNT  == iEvt) {
        func = "comment";               hnd = this.m_hndLex;
    }

    if(hnd && hnd[func]) {
        if(0 == iLen) {
            hnd[func]();
        }
        else if (1 == iLen) {
            hnd[func](args[1]);
        }
        else if (2 == iLen) {
            hnd[func](args[1], args[2]);
        }
        else if (3 == iLen) {
            hnd[func](args[1], args[2], args[3]);
        }
    }

}  // end function _fireEvent


SAXDriver.prototype._parseLoop = function(parser) {
    /*******************************************************************************************************************
    function:   _parseLoop

    Author:   Scott Severtson
    *********************************************************************************************************************/
    var iEvent, parser;

    parser = this.m_parser;
    while(!this.m_bErr) {
        iEvent = parser.next();

        if(iEvent == XMLP._ELM_B) {
            this._fireEvent(SAXDriver.ELM_B, parser.getName(), this);
        }
        else if(iEvent == XMLP._ELM_E) {
            this._fireEvent(SAXDriver.ELM_E, parser.getName());
        }
        else if(iEvent == XMLP._ELM_EMP) {
            this._fireEvent(SAXDriver.ELM_B, parser.getName(), this);
            this._fireEvent(SAXDriver.ELM_E, parser.getName());
        }
        else if(iEvent == XMLP._TEXT) {
            this._fireEvent(SAXDriver.CHARS, parser.getContent(), parser.getContentBegin(), parser.getContentEnd() - parser.getContentBegin());
        }
        else if(iEvent == XMLP._ENTITY) {
            this._fireEvent(SAXDriver.CHARS, parser.getContent(), parser.getContentBegin(), parser.getContentEnd() - parser.getContentBegin());
        }
        else if(iEvent == XMLP._PI) {
            this._fireEvent(SAXDriver.PI, parser.getName(), parser.getContent().substring(parser.getContentBegin(), parser.getContentEnd()));
        }
        else if(iEvent == XMLP._CDATA) {
            this._fireEvent(SAXDriver.CD_B);
            this._fireEvent(SAXDriver.CHARS, parser.getContent(), parser.getContentBegin(), parser.getContentEnd() - parser.getContentBegin());
            this._fireEvent(SAXDriver.CD_E);
        }
        else if(iEvent == XMLP._COMMENT) {
            this._fireEvent(SAXDriver.CMNT, parser.getContent(), parser.getContentBegin(), parser.getContentEnd() - parser.getContentBegin());
        }
        else if(iEvent == XMLP._DTD) {
        }
        else if(iEvent == XMLP._ERROR) {
            this._fireError(parser.getContent());
        }
        else if(iEvent == XMLP._NONE) {
            return;
        }
    }

}  // end function _parseLoop



/***************************************************************************************************************
SAXStrings: a useful object containing string manipulation functions
*****************************************************************************************************************/


SAXStrings = function() {
    /*******************************************************************************************************************
    function:   SAXStrings

    Author:   Scott Severtson

    Description:
        This is the constructor of the SAXStrings object
    *********************************************************************************************************************/
}  // end function SAXStrings


// CONSTANTS    (these must be below the constructor)

// =========================================================================
// =========================================================================
// =========================================================================
SAXStrings.WHITESPACE = " \t\n\r";
SAXStrings.QUOTES = "\"'";
// =========================================================================
// =========================================================================
// =========================================================================


SAXStrings.getColumnNumber = function(strD, iP) {
    /*******************************************************************************************************************
    function:   replace

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) {
        return -1;
    }
    iP = iP || strD.length;

    var arrD = strD.substring(0, iP).split("\n");
    var strLine = arrD[arrD.length - 1];
    arrD.length--;
    var iLinePos = arrD.join("\n").length;

    return iP - iLinePos;

}  // end function getColumnNumber


SAXStrings.getLineNumber = function(strD, iP) {
    /*******************************************************************************************************************
    function:   getLineNumber

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) {
        return -1;
    }
    iP = iP || strD.length;

    return strD.substring(0, iP).split("\n").length
}  // end function getLineNumber


SAXStrings.indexOfNonWhitespace = function(strD, iB, iE) {
    /*******************************************************************************************************************
    function:   indexOfNonWhitespace

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) {
        return -1;
    }
    iB = iB || 0;
    iE = iE || strD.length;

    for(var i = iB; i < iE; i++){
        if(SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
            return i;
        }
    }
    return -1;

}  // end function indexOfNonWhitespace


SAXStrings.indexOfWhitespace = function(strD, iB, iE) {
    /*******************************************************************************************************************
    function:   indexOfWhitespace

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) {
        return -1;
    }
    iB = iB || 0;
    iE = iE || strD.length;

    for(var i = iB; i < iE; i++) {
        if(SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) != -1) {
            return i;
        }
    }
    return -1;
}  // end function indexOfWhitespace


SAXStrings.isEmpty = function(strD) {
    /*******************************************************************************************************************
    function:   isEmpty

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return (strD == null) || (strD.length == 0);

}  // end function isEmpty


SAXStrings.lastIndexOfNonWhitespace = function(strD, iB, iE) {
    /*******************************************************************************************************************
    function:   lastIndexOfNonWhiteSpace

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) {
        return -1;
    }
    iB = iB || 0;
    iE = iE || strD.length;

    for(var i = iE - 1; i >= iB; i--){
        if(SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) == -1){
            return i;
        }
    }
    return -1;
}  // end function lastIndexOfNonWhitespace


SAXStrings.replace = function(strD, iB, iE, strF, strR) {
    /*******************************************************************************************************************
    function:   replace

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(SAXStrings.isEmpty(strD)) {
        return "";
    }
    iB = iB || 0;
    iE = iE || strD.length;

    return strD.substring(iB, iE).split(strF).join(strR);

}  // end function replace



/***************************************************************************************************************
Stack: A simple stack class, used for verifying document structure.
*****************************************************************************************************************/

Stack = function() {
    /*******************************************************************************************************************
    function:   Stack

    Author:   Scott Severtson

    Description:
        Constructor of the Stack Object
    *********************************************************************************************************************/
    this.m_arr = new Array();

}  // end function Stack


Stack.prototype.clear = function() {
    /*******************************************************************************************************************
    function:   clear

    Author:   Scott Severtson
    *********************************************************************************************************************/

    this.m_arr = new Array();

}  // end function clear


Stack.prototype.count = function() {
    /*******************************************************************************************************************
    function:   count

    Author:   Scott Severtson
    *********************************************************************************************************************/

    return this.m_arr.length;

}  // end function count


Stack.prototype.destroy = function() {
    /*******************************************************************************************************************
    function:   destroy

    Author:   Scott Severtson
    *********************************************************************************************************************/

    this.m_arr = null;

}   // end function destroy


Stack.prototype.peek = function() {
    /*******************************************************************************************************************
    function:   peek

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(this.m_arr.length == 0) {
        return null;
    }

    return this.m_arr[this.m_arr.length - 1];

}  // end function peek


Stack.prototype.pop = function() {
    /*******************************************************************************************************************
    function:   pop

    Author:   Scott Severtson
    *********************************************************************************************************************/
    if(this.m_arr.length == 0) {
        return null;
    }

    var o = this.m_arr[this.m_arr.length - 1];
    this.m_arr.length--;
    return o;

}  // end function pop


Stack.prototype.push = function(o) {
    /*******************************************************************************************************************
    function:   push

    Author:   Scott Severtson
    *********************************************************************************************************************/

    this.m_arr[this.m_arr.length] = o;

}  // end function push



// =========================================================================
// =========================================================================
// =========================================================================

// CONVENIENCE FUNCTIONS

// =========================================================================
// =========================================================================
// =========================================================================

function isEmpty(str) {
    /*******************************************************************************************************************
    function: isEmpty

    Author: mike@idle.org

    Description:
        convenience function to identify an empty string

    *********************************************************************************************************************/
    return (str==null) || (str.length==0);

} // end function isEmpty



function trim(trimString, leftTrim, rightTrim) {
    /*******************************************************************************************************************
    function: trim

    Author: may106@psu.edu

    Description:
        helper function to trip a string (trimString) of leading (leftTrim)
        and trailing (rightTrim) whitespace

    *********************************************************************************************************************/
    if (isEmpty(trimString)) {
        return "";
    }

    // the general focus here is on minimal method calls - hence only one
    // substring is done to complete the trim.

    if (leftTrim == null) {
        leftTrim = true;
    }

    if (rightTrim == null) {
        rightTrim = true;
    }

    var left=0;
    var right=0;
    var i=0;
    var k=0;


    // modified to properly handle strings that are all whitespace
    if (leftTrim == true) {
        while ((i<trimString.length) && (whitespace.indexOf(trimString.charAt(i++))!=-1)) {
            left++;
        }
    }
    if (rightTrim == true) {
        k=trimString.length-1;
        while((k>=left) && (whitespace.indexOf(trimString.charAt(k--))!=-1)) {
            right++;
        }
    }
    return trimString.substring(left, trimString.length - right);
} // end function trim

/**
 * function __escapeString
 *
 * author: David Joham djoham@yahoo.com
 *
 * @param  str : string - The string to be escaped
 *
 * @return : string - The escaped string
 */
function __escapeString(str) {

    var escAmpRegEx = /&/g;
    var escLtRegEx = /</g;
    var escGtRegEx = />/g;
    var quotRegEx = /"/g;
    var aposRegEx = /'/g;

    str = str.replace(escAmpRegEx, "&amp;");
    str = str.replace(escLtRegEx, "&lt;");
    str = str.replace(escGtRegEx, "&gt;");
    str = str.replace(quotRegEx, "&quot;");
    str = str.replace(aposRegEx, "&apos;");

  return str;
}

/**
 * function __unescapeString 
 *
 * author: David Joham djoham@yahoo.com
 *
 * @param  str : string - The string to be unescaped
 *
 * @return : string - The unescaped string
 */
function __unescapeString(str) {

    var escAmpRegEx = /&amp;/g;
    var escLtRegEx = /&lt;/g;
    var escGtRegEx = /&gt;/g;
    var quotRegEx = /&quot;/g;
    var aposRegEx = /&apos;/g;

    str = str.replace(escAmpRegEx, "&");
    str = str.replace(escLtRegEx, "<");
    str = str.replace(escGtRegEx, ">");
    str = str.replace(quotRegEx, "\"");
    str = str.replace(aposRegEx, "'");

  return str;
}


// =========================================================================
//
// xmlw3cdom.js - a W3C compliant DOM parser for XML for <SCRIPT>
//
// version 3.1
//
// =========================================================================
//
// Copyright (C) 2002, 2003, 2004 Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 2.1 of the License, or (at your option) any later version.

// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.

// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
//
// visit the XML for <SCRIPT> home page at xmljs.sourceforge.net
//
// Contains text (used within comments to methods) from the
//  XML Path Language (XPath) Version 1.0 W3C Recommendation
//  Copyright � 16 November 1999 World Wide Web Consortium,
//  (Massachusetts Institute of Technology,
//  European Research Consortium for Informatics and Mathematics, Keio University).
//  All Rights Reserved.
//  (see: http://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/)

/**
 * @function addClass - add new className to classCollection
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  classCollectionStr : string - list of existing class names
 *   (separated and top and tailed with '|'s)
 * @param  newClass           : string - new class name to add
 *
 * @return : string - the new classCollection, with new className appended,
 *   (separated and top and tailed with '|'s)
 */
function addClass(classCollectionStr, newClass) {
  if (classCollectionStr) {
    if (classCollectionStr.indexOf("|"+ newClass +"|") < 0) {
      classCollectionStr += newClass + "|";
    }
  }
  else {
    classCollectionStr = "|"+ newClass + "|";
  }

  return classCollectionStr;
}

/**
 * @class  DOMException - raised when an operation is impossible to perform
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  code : int - the exception code (one of the DOMException constants)
 */
DOMException = function(code) {
  this._class = addClass(this._class, "DOMException");

  this.code = code;
};

// DOMException constants
// Introduced in DOM Level 1:
DOMException.INDEX_SIZE_ERR                 = 1;
DOMException.DOMSTRING_SIZE_ERR             = 2;
DOMException.HIERARCHY_REQUEST_ERR          = 3;
DOMException.WRONG_DOCUMENT_ERR             = 4;
DOMException.INVALID_CHARACTER_ERR          = 5;
DOMException.NO_DATA_ALLOWED_ERR            = 6;
DOMException.NO_MODIFICATION_ALLOWED_ERR    = 7;
DOMException.NOT_FOUND_ERR                  = 8;
DOMException.NOT_SUPPORTED_ERR              = 9;
DOMException.INUSE_ATTRIBUTE_ERR            = 10;

// Introduced in DOM Level 2:
DOMException.INVALID_STATE_ERR              = 11;
DOMException.SYNTAX_ERR                     = 12;
DOMException.INVALID_MODIFICATION_ERR       = 13;
DOMException.NAMESPACE_ERR                  = 14;
DOMException.INVALID_ACCESS_ERR             = 15;


/**
 * @class  DOMImplementation - provides a number of methods for performing operations
 *   that are independent of any particular instance of the document object model.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 */
DOMImplementation = function() {
  this._class = addClass(this._class, "DOMImplementation");
  this._p = null;

  this.preserveWhiteSpace = false;  // by default, ignore whitespace
  this.namespaceAware = true;       // by default, handle namespaces
  this.errorChecking  = true;       // by default, test for exceptions
};


/**
 * @method DOMImplementation.escapeString - escape special characters
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  str : string - The string to be escaped
 *
 * @return : string - The escaped string
 */
DOMImplementation.prototype.escapeString = function DOMNode__escapeString(str) {

  //the sax processor already has this function. Just wrap it
  return __escapeString(str);
};

/**
 * @method DOMImplementation.unescapeString - unescape special characters
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  str : string - The string to be unescaped
 *
 * @return : string - The unescaped string
 */
DOMImplementation.prototype.unescapeString = function DOMNode__unescapeString(str) {

  //the sax processor already has this function. Just wrap it
  return __unescapeString(str);
};

/**
 * @method DOMImplementation.hasFeature - Test if the DOM implementation implements a specific feature
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  feature : string - The package name of the feature to test. the legal only values are "XML" and "CORE" (case-insensitive).
 * @param  version : string - This is the version number of the package name to test. In Level 1, this is the string "1.0".
 *
 * @return : boolean
 */
DOMImplementation.prototype.hasFeature = function DOMImplementation_hasFeature(feature, version) {

  var ret = false;
  if (feature.toLowerCase() == "xml") {
    ret = (!version || (version == "1.0") || (version == "2.0"));
  }
  else if (feature.toLowerCase() == "core") {
    ret = (!version || (version == "2.0"));
  }

  return ret;
};

/**
 * @method DOMImplementation.loadXML - parse XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 *
 * @param  xmlStr : string - the XML string
 *
 * @return : DOMDocument
 */
DOMImplementation.prototype.loadXML = function DOMImplementation_loadXML(xmlStr) {
  // create SAX Parser
  var parser;

  try {
    parser = new XMLP(xmlStr);
  }
  catch (e) {
    alert("Error Creating the SAX Parser. Did you include xmlsax.js or tinyxmlsax.js in your web page?\nThe SAX parser is needed to populate XML for <SCRIPT>'s W3C DOM Parser with data.");
  }

  // create DOM Document
  var doc = new DOMDocument(this);

  // populate Document with Parsed Nodes
  this._parseLoop(doc, parser);

  // set parseComplete flag, (Some validation Rules are relaxed if this is false)
  doc._parseComplete = true;

  return doc;
};


/**
 * @method DOMImplementation.translateErrCode - convert DOMException Code
 *   to human readable error message;
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  code : int - the DOMException code
 *
 * @return : string - the human readbale error message
 */
DOMImplementation.prototype.translateErrCode = function DOMImplementation_translateErrCode(code) {
  var msg = "";

  switch (code) {
    case DOMException.INDEX_SIZE_ERR :                // 1
       msg = "INDEX_SIZE_ERR: Index out of bounds";
       break;

    case DOMException.DOMSTRING_SIZE_ERR :            // 2
       msg = "DOMSTRING_SIZE_ERR: The resulting string is too long to fit in a DOMString";
       break;

    case DOMException.HIERARCHY_REQUEST_ERR :         // 3
       msg = "HIERARCHY_REQUEST_ERR: The Node can not be inserted at this location";
       break;

    case DOMException.WRONG_DOCUMENT_ERR :            // 4
       msg = "WRONG_DOCUMENT_ERR: The source and the destination Documents are not the same";
       break;

    case DOMException.INVALID_CHARACTER_ERR :         // 5
       msg = "INVALID_CHARACTER_ERR: The string contains an invalid character";
       break;

    case DOMException.NO_DATA_ALLOWED_ERR :           // 6
       msg = "NO_DATA_ALLOWED_ERR: This Node / NodeList does not support data";
       break;

    case DOMException.NO_MODIFICATION_ALLOWED_ERR :   // 7
       msg = "NO_MODIFICATION_ALLOWED_ERR: This object cannot be modified";
       break;

    case DOMException.NOT_FOUND_ERR :                 // 8
       msg = "NOT_FOUND_ERR: The item cannot be found";
       break;

    case DOMException.NOT_SUPPORTED_ERR :             // 9
       msg = "NOT_SUPPORTED_ERR: This implementation does not support function";
       break;

    case DOMException.INUSE_ATTRIBUTE_ERR :           // 10
       msg = "INUSE_ATTRIBUTE_ERR: The Attribute has already been assigned to another Element";
       break;

// Introduced in DOM Level 2:
    case DOMException.INVALID_STATE_ERR :             // 11
       msg = "INVALID_STATE_ERR: The object is no longer usable";
       break;

    case DOMException.SYNTAX_ERR :                    // 12
       msg = "SYNTAX_ERR: Syntax error";
       break;

    case DOMException.INVALID_MODIFICATION_ERR :      // 13
       msg = "INVALID_MODIFICATION_ERR: Cannot change the type of the object";
       break;

    case DOMException.NAMESPACE_ERR :                 // 14
       msg = "NAMESPACE_ERR: The namespace declaration is incorrect";
       break;

    case DOMException.INVALID_ACCESS_ERR :            // 15
       msg = "INVALID_ACCESS_ERR: The object does not support this function";
       break;

    default :
       msg = "UNKNOWN: Unknown Exception Code ("+ code +")";
  }

  return msg;
}

/**
 * @method DOMImplementation._parseLoop - process SAX events
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 *
 * @param  doc : DOMDocument - the Document to contain the parsed XML string
 * @param  p   : XMLP        - the SAX Parser
 *
 * @return : DOMDocument
 */
DOMImplementation.prototype._parseLoop = function DOMImplementation__parseLoop(doc, p) {
  var iEvt, iNode, iAttr, strName;
  iNodeParent = doc;

  var el_close_count = 0;

  var entitiesList = new Array();
  var textNodesList = new Array();

  // if namespaceAware, add default namespace
  if (this.namespaceAware) {
    var iNS = doc.createNamespace(""); // add the default-default namespace
    iNS.setValue("http://www.w3.org/2000/xmlns/");
    doc._namespaces.setNamedItem(iNS);
  }

  // loop until SAX parser stops emitting events
  while(true) {
    // get next event
    iEvt = p.next();

    if (iEvt == XMLP._ELM_B) {                      // Begin-Element Event
      var pName = p.getName();                      // get the Element name
      pName = trim(pName, true, true);              // strip spaces from Element name

      if (!this.namespaceAware) {
        iNode = doc.createElement(p.getName());     // create the Element

        // add attributes to Element
        for(var i = 0; i < p.getAttributeCount(); i++) {
          strName = p.getAttributeName(i);          // get Attribute name
          iAttr = iNode.getAttributeNode(strName);  // if Attribute exists, use it

          if(!iAttr) {
            iAttr = doc.createAttribute(strName);   // otherwise create it
          }

          iAttr.setValue(p.getAttributeValue(i));   // set Attribute value
          iNode.setAttributeNode(iAttr);            // attach Attribute to Element
        }
      }
      else {  // Namespace Aware
        // create element (with empty namespaceURI,
        //  resolve after namespace 'attributes' have been parsed)
        iNode = doc.createElementNS("", p.getName());

        // duplicate ParentNode's Namespace definitions
        iNode._namespaces = iNodeParent._namespaces._cloneNodes(iNode);

        // add attributes to Element
        for(var i = 0; i < p.getAttributeCount(); i++) {
          strName = p.getAttributeName(i);          // get Attribute name

          // if attribute is a namespace declaration
          if (this._isNamespaceDeclaration(strName)) {
            // parse Namespace Declaration
            var namespaceDec = this._parseNSName(strName);

            if (strName != "xmlns") {
              iNS = doc.createNamespace(strName);   // define namespace
            }
            else {
              iNS = doc.createNamespace("");        // redefine default namespace
            }
            iNS.setValue(p.getAttributeValue(i));   // set value = namespaceURI

            iNode._namespaces.setNamedItem(iNS);    // attach namespace to namespace collection
          }
          else {  // otherwise, it is a normal attribute
            iAttr = iNode.getAttributeNode(strName);        // if Attribute exists, use it

            if(!iAttr) {
              iAttr = doc.createAttributeNS("", strName);   // otherwise create it
            }

            iAttr.setValue(p.getAttributeValue(i));         // set Attribute value
            iNode.setAttributeNodeNS(iAttr);                // attach Attribute to Element

            if (this._isIdDeclaration(strName)) {
              iNode.id = p.getAttributeValue(i);    // cache ID for getElementById()
            }
          }
        }

        // resolve namespaceURIs for this Element
        if (iNode._namespaces.getNamedItem(iNode.prefix)) {
          iNode.namespaceURI = iNode._namespaces.getNamedItem(iNode.prefix).value;
        }

        //  for this Element's attributes
        for (var i = 0; i < iNode.attributes.length; i++) {
          if (iNode.attributes.item(i).prefix != "") {  // attributes do not have a default namespace
            if (iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix)) {
              iNode.attributes.item(i).namespaceURI = iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix).value;
            }
          }
        }
      }

      // if this is the Root Element
      if (iNodeParent.nodeType == DOMNode.DOCUMENT_NODE) {
        iNodeParent.documentElement = iNode;        // register this Element as the Document.documentElement
      }

      iNodeParent.appendChild(iNode);               // attach Element to parentNode
      iNodeParent = iNode;                          // descend one level of the DOM Tree
    }

    else if(iEvt == XMLP._ELM_E) {                  // End-Element Event
      iNodeParent = iNodeParent.parentNode;         // ascend one level of the DOM Tree
    }

    else if(iEvt == XMLP._ELM_EMP) {                // Empty Element Event
      pName = p.getName();                          // get the Element name
      pName = trim(pName, true, true);              // strip spaces from Element name

      if (!this.namespaceAware) {
        iNode = doc.createElement(pName);           // create the Element

        // add attributes to Element
        for(var i = 0; i < p.getAttributeCount(); i++) {
          strName = p.getAttributeName(i);          // get Attribute name
          iAttr = iNode.getAttributeNode(strName);  // if Attribute exists, use it

          if(!iAttr) {
            iAttr = doc.createAttribute(strName);   // otherwise create it
          }

          iAttr.setValue(p.getAttributeValue(i));   // set Attribute value
          iNode.setAttributeNode(iAttr);            // attach Attribute to Element
        }
      }
      else {  // Namespace Aware
        // create element (with empty namespaceURI,
        //  resolve after namespace 'attributes' have been parsed)
        iNode = doc.createElementNS("", p.getName());

        // duplicate ParentNode's Namespace definitions
        iNode._namespaces = iNodeParent._namespaces._cloneNodes(iNode);

        // add attributes to Element
        for(var i = 0; i < p.getAttributeCount(); i++) {
          strName = p.getAttributeName(i);          // get Attribute name

          // if attribute is a namespace declaration
          if (this._isNamespaceDeclaration(strName)) {
            // parse Namespace Declaration
            var namespaceDec = this._parseNSName(strName);

            if (strName != "xmlns") {
              iNS = doc.createNamespace(strName);   // define namespace
            }
            else {
              iNS = doc.createNamespace("");        // redefine default namespace
            }
            iNS.setValue(p.getAttributeValue(i));   // set value = namespaceURI

            iNode._namespaces.setNamedItem(iNS);    // attach namespace to namespace collection
          }
          else {  // otherwise, it is a normal attribute
            iAttr = iNode.getAttributeNode(strName);        // if Attribute exists, use it

            if(!iAttr) {
              iAttr = doc.createAttributeNS("", strName);   // otherwise create it
            }

            iAttr.setValue(p.getAttributeValue(i));         // set Attribute value
            iNode.setAttributeNodeNS(iAttr);                // attach Attribute to Element

            if (this._isIdDeclaration(strName)) {
              iNode.id = p.getAttributeValue(i);    // cache ID for getElementById()
            }
          }
        }

        // resolve namespaceURIs for this Element
        if (iNode._namespaces.getNamedItem(iNode.prefix)) {
          iNode.namespaceURI = iNode._namespaces.getNamedItem(iNode.prefix).value;
        }

        //  for this Element's attributes
        for (var i = 0; i < iNode.attributes.length; i++) {
          if (iNode.attributes.item(i).prefix != "") {  // attributes do not have a default namespace
            if (iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix)) {
              iNode.attributes.item(i).namespaceURI = iNode._namespaces.getNamedItem(iNode.attributes.item(i).prefix).value;
            }
          }
        }
      }

      // if this is the Root Element
      if (iNodeParent.nodeType == DOMNode.DOCUMENT_NODE) {
        iNodeParent.documentElement = iNode;        // register this Element as the Document.documentElement
      }

      iNodeParent.appendChild(iNode);               // attach Element to parentNode
    }
    else if(iEvt == XMLP._TEXT || iEvt == XMLP._ENTITY) {                   // TextNode and entity Events
      // get Text content
      var pContent = p.getContent().substring(p.getContentBegin(), p.getContentEnd());
      
	  if (!this.preserveWhiteSpace ) {
		if (trim(pContent, true, true) == "") {
			pContent = ""; //this will cause us not to create the text node below
		}
	  }
	  
      if (pContent.length > 0) {                    // ignore empty TextNodes
        var textNode = doc.createTextNode(pContent);
        iNodeParent.appendChild(textNode); // attach TextNode to parentNode

        //the sax parser breaks up text nodes when it finds an entity. For
        //example hello&lt;there will fire a text, an entity and another text
        //this sucks for the dom parser because it looks to us in this logic
        //as three text nodes. I fix this by keeping track of the entity nodes
        //and when we're done parsing, calling normalize on their parent to
        //turn the multiple text nodes into one, which is what DOM users expect
        //the code to do this is at the bottom of this function
        if (iEvt == XMLP._ENTITY) {
            entitiesList[entitiesList.length] = textNode;
        }
		else {
			//I can't properly decide how to handle preserve whitespace
			//until the siblings of the text node are built due to 
			//the entitiy handling described above. I don't know that this
			//will be all of the text node or not, so trimming is not appropriate
			//at this time. Keep a list of all the text nodes for now
			//and we'll process the preserve whitespace stuff at a later time.
			textNodesList[textNodesList.length] = textNode;
		}
      }
    }
    else if(iEvt == XMLP._PI) {                     // ProcessingInstruction Event
      // attach ProcessingInstruction to parentNode
      iNodeParent.appendChild(doc.createProcessingInstruction(p.getName(), p.getContent().substring(p.getContentBegin(), p.getContentEnd())));
    }
    else if(iEvt == XMLP._CDATA) {                  // CDATA Event
      // get CDATA data
      pContent = p.getContent().substring(p.getContentBegin(), p.getContentEnd());

      if (!this.preserveWhiteSpace) {
        pContent = trim(pContent, true, true);      // trim whitespace
        pContent.replace(/ +/g, ' ');               // collapse multiple spaces to 1 space
      }

      if (pContent.length > 0) {                    // ignore empty CDATANodes
        iNodeParent.appendChild(doc.createCDATASection(pContent)); // attach CDATA to parentNode
      }
    }
    else if(iEvt == XMLP._COMMENT) {                // Comment Event
      // get COMMENT data
      var pContent = p.getContent().substring(p.getContentBegin(), p.getContentEnd());

      if (!this.preserveWhiteSpace) {
        pContent = trim(pContent, true, true);      // trim whitespace
        pContent.replace(/ +/g, ' ');               // collapse multiple spaces to 1 space
      }

      if (pContent.length > 0) {                    // ignore empty CommentNodes
        iNodeParent.appendChild(doc.createComment(pContent));  // attach Comment to parentNode
      }
    }
    else if(iEvt == XMLP._DTD) {                    // ignore DTD events
    }
    else if(iEvt == XMLP._ERROR) {
      throw(new DOMException(DOMException.SYNTAX_ERR));
      // alert("Fatal Error: " + p.getContent() + "\nLine: " + p.getLineNumber() + "\nColumn: " + p.getColumnNumber() + "\n");
      // break;
    }
    else if(iEvt == XMLP._NONE) {                   // no more events
      if (iNodeParent == doc) {                     // confirm that we have recursed back up to root
        break;
      }
      else {
        throw(new DOMException(DOMException.SYNTAX_ERR));  // one or more Tags were not closed properly
      }
    }
  }

  //normalize any entities in the DOM to a single textNode
  var intCount = entitiesList.length;
  for (intLoop = 0; intLoop < intCount; intLoop++) {
      var entity = entitiesList[intLoop];
      //its possible (if for example two entities were in the
      //same domnode, that the normalize on the first entitiy
      //will remove the parent for the second. Only do normalize
      //if I can find a parent node
      var parentNode = entity.getParentNode();
      if (parentNode) {
          parentNode.normalize();
		  
		  //now do whitespace (if necessary)
		  //it was not done for text nodes that have entities
		  if(!this.preserveWhiteSpace) {
		  		var children = parentNode.getChildNodes();
				var intCount2 = children.getLength();
				for ( intLoop2 = 0; intLoop2 < intCount2; intLoop2++) {
					var child = children.item(intLoop2);
					if (child.getNodeType() == DOMNode.TEXT_NODE) {
						var childData = child.getData();
						childData = trim(childData, true, true);
						childData.replace(/ +/g, ' ');
						child.setData(childData);
					}
				}
		  }
      }
  }
  
  //do the preserve whitespace processing on the rest of the text nodes
  //It's possible (due to the processing above) that the node will have been
  //removed from the tree. Only do whitespace checking if parentNode is not null.
  //This may duplicate the whitespace processing for some nodes that had entities in them
  //but there's no way around that
  if (!this.preserveWhiteSpace) {
  	var intCount = textNodesList.length;
	for (intLoop = 0; intLoop < intCount; intLoop++) {
		var node = textNodesList[intLoop];
		if (node.getParentNode() != null) {
			var nodeData = node.getData();
			nodeData = trim(nodeData, true, true);
			nodeData.replace(/ +/g, ' ');
			node.setData(nodeData);
		}
	}
  
  }
};

/**
 * @method DOMImplementation._isNamespaceDeclaration - Return true, if attributeName is a namespace declaration
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  attributeName : string - the attribute name
 *
 * @return : boolean
 */
DOMImplementation.prototype._isNamespaceDeclaration = function DOMImplementation__isNamespaceDeclaration(attributeName) {
  // test if attributeName is 'xmlns'
  return (attributeName.indexOf('xmlns') > -1);
}

/**
 * @method DOMImplementation._isIdDeclaration - Return true, if attributeName is an id declaration
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  attributeName : string - the attribute name
 *
 * @return : boolean
 */
DOMImplementation.prototype._isIdDeclaration = function DOMImplementation__isIdDeclaration(attributeName) {
  // test if attributeName is 'id' (case insensitive)
  return (attributeName.toLowerCase() == 'id');
}

/**
 * @method DOMImplementation._isValidName - Return true,
 *   if name contains no invalid characters
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - the candidate name
 *
 * @return : boolean
 */
DOMImplementation.prototype._isValidName = function DOMImplementation__isValidName(name) {
  // test if name contains only valid characters
  return name.match(re_validName);
}
re_validName = /^[a-zA-Z_:][a-zA-Z0-9\.\-_:]*$/;

/**
 * @method DOMImplementation._isValidString - Return true, if string does not contain any illegal chars
 *  All of the characters 0 through 31 and character 127 are nonprinting control characters.
 *  With the exception of characters 09, 10, and 13, (Ox09, Ox0A, and Ox0D)
 *  Note: different from _isValidName in that ValidStrings may contain spaces
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - the candidate string
 *
 * @return : boolean
 */
DOMImplementation.prototype._isValidString = function DOMImplementation__isValidString(name) {
  // test that string does not contains invalid characters
  return (name.search(re_invalidStringChars) < 0);
}
re_invalidStringChars = /\x01|\x02|\x03|\x04|\x05|\x06|\x07|\x08|\x0B|\x0C|\x0E|\x0F|\x10|\x11|\x12|\x13|\x14|\x15|\x16|\x17|\x18|\x19|\x1A|\x1B|\x1C|\x1D|\x1E|\x1F|\x7F/

/**
 * @method DOMImplementation._parseNSName - parse the namespace name.
 *  if there is no colon, the
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  qualifiedName : string - The qualified name
 *
 * @return : NSName - [
 *                     .prefix        : string - The prefix part of the qname
 *                     .namespaceName : string - The namespaceURI part of the qname
 *                    ]
 */
DOMImplementation.prototype._parseNSName = function DOMImplementation__parseNSName(qualifiedName) {
  var resultNSName = new Object();

  resultNSName.prefix          = qualifiedName;  // unless the qname has a namespaceName, the prefix is the entire String
  resultNSName.namespaceName   = "";

  // split on ':'
  delimPos = qualifiedName.indexOf(':');

  if (delimPos > -1) {
    // get prefix
    resultNSName.prefix        = qualifiedName.substring(0, delimPos);

    // get namespaceName
    resultNSName.namespaceName = qualifiedName.substring(delimPos +1, qualifiedName.length);
  }

  return resultNSName;
}

/**
 * @method DOMImplementation._parseQName - parse the qualified name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  qualifiedName : string - The qualified name
 *
 * @return : QName
 */
DOMImplementation.prototype._parseQName = function DOMImplementation__parseQName(qualifiedName) {
  var resultQName = new Object();

  resultQName.localName = qualifiedName;  // unless the qname has a prefix, the local name is the entire String
  resultQName.prefix    = "";

  // split on ':'
  delimPos = qualifiedName.indexOf(':');

  if (delimPos > -1) {
    // get prefix
    resultQName.prefix    = qualifiedName.substring(0, delimPos);

    // get localName
    resultQName.localName = qualifiedName.substring(delimPos +1, qualifiedName.length);
  }

  return resultQName;
}

/**
 * @class  DOMNodeList - provides the abstraction of an ordered collection of nodes
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - the ownerDocument
 * @param  parentNode    : DOMNode - the node that the DOMNodeList is attached to (or null)
 */
DOMNodeList = function(ownerDocument, parentNode) {
  this._class = addClass(this._class, "DOMNodeList");
  this._nodes = new Array();

  this.length = 0;
  this.parentNode = parentNode;
  this.ownerDocument = ownerDocument;

  this._readonly = false;
};

/**
 * @method DOMNodeList.getLength - Java style gettor for .length
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : int
 */
DOMNodeList.prototype.getLength = function DOMNodeList_getLength() {
  return this.length;
};

/**
 * @method DOMNodeList.item - Returns the indexth item in the collection.
 *   If index is greater than or equal to the number of nodes in the list, this returns null.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  index : int - Index into the collection.
 *
 * @return : DOMNode - The node at the indexth position in the NodeList, or null if that is not a valid index
 */
DOMNodeList.prototype.item = function DOMNodeList_item(index) {
  var ret = null;

  if ((index >= 0) && (index < this._nodes.length)) { // bounds check
    ret = this._nodes[index];                    // return selected Node
  }

  return ret;                                    // if the index is out of bounds, default value null is returned
};

/**
 * @method DOMNodeList._findItemIndex - find the item index of the node with the specified internal id
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  id : int - unique internal id
 *
 * @return : int
 */
DOMNodeList.prototype._findItemIndex = function DOMNodeList__findItemIndex(id) {
  var ret = -1;

  // test that id is valid
  if (id > -1) {
    for (var i=0; i<this._nodes.length; i++) {
      // compare id to each node's _id
      if (this._nodes[i]._id == id) {            // found it!
        ret = i;
        break;
      }
    }
  }

  return ret;                                    // if node is not found, default value -1 is returned
};

/**
 * @method DOMNodeList._insertBefore - insert the specified Node into the NodeList before the specified index
 *   Used by DOMNode.insertBefore(). Note: DOMNode.insertBefore() is responsible for Node Pointer surgery
 *   DOMNodeList._insertBefore() simply modifies the internal data structure (Array).
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newChild      : DOMNode - the Node to be inserted
 * @param  refChildIndex : int     - the array index to insert the Node before
 */
DOMNodeList.prototype._insertBefore = function DOMNodeList__insertBefore(newChild, refChildIndex) {
  if ((refChildIndex >= 0) && (refChildIndex < this._nodes.length)) { // bounds check
    // get array containing children prior to refChild
    var tmpArr = new Array();
    tmpArr = this._nodes.slice(0, refChildIndex);

    if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {  // node is a DocumentFragment
      // append the children of DocumentFragment
      tmpArr = tmpArr.concat(newChild.childNodes._nodes);
    }
    else {
      // append the newChild
      tmpArr[tmpArr.length] = newChild;
    }

    // append the remaining original children (including refChild)
    this._nodes = tmpArr.concat(this._nodes.slice(refChildIndex));

    this.length = this._nodes.length;            // update length
  }
};

/**
 * @method DOMNodeList._replaceChild - replace the specified Node in the NodeList at the specified index
 *   Used by DOMNode.replaceChild(). Note: DOMNode.replaceChild() is responsible for Node Pointer surgery
 *   DOMNodeList._replaceChild() simply modifies the internal data structure (Array).
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newChild      : DOMNode - the Node to be inserted
 * @param  refChildIndex : int     - the array index to hold the Node
 */
DOMNodeList.prototype._replaceChild = function DOMNodeList__replaceChild(newChild, refChildIndex) {
  var ret = null;

  if ((refChildIndex >= 0) && (refChildIndex < this._nodes.length)) { // bounds check
    ret = this._nodes[refChildIndex];            // preserve old child for return

    if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {  // node is a DocumentFragment
      // get array containing children prior to refChild
      var tmpArr = new Array();
      tmpArr = this._nodes.slice(0, refChildIndex);

      // append the children of DocumentFragment
      tmpArr = tmpArr.concat(newChild.childNodes._nodes);

      // append the remaining original children (not including refChild)
      this._nodes = tmpArr.concat(this._nodes.slice(refChildIndex + 1));
    }
    else {
      // simply replace node in array (links between Nodes are made at higher level)
      this._nodes[refChildIndex] = newChild;
    }
  }

  return ret;                                   // return replaced node
};

/**
 * @method DOMNodeList._removeChild - remove the specified Node in the NodeList at the specified index
 *   Used by DOMNode.removeChild(). Note: DOMNode.removeChild() is responsible for Node Pointer surgery
 *   DOMNodeList._replaceChild() simply modifies the internal data structure (Array).
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  refChildIndex : int - the array index holding the Node to be removed
 */
DOMNodeList.prototype._removeChild = function DOMNodeList__removeChild(refChildIndex) {
  var ret = null;

  if (refChildIndex > -1) {                              // found it!
    ret = this._nodes[refChildIndex];                    // return removed node

    // rebuild array without removed child
    var tmpArr = new Array();
    tmpArr = this._nodes.slice(0, refChildIndex);
    this._nodes = tmpArr.concat(this._nodes.slice(refChildIndex +1));

    this.length = this._nodes.length;            // update length
  }

  return ret;                                   // return removed node
};

/**
 * @method DOMNodeList._appendChild - append the specified Node to the NodeList
 *   Used by DOMNode.appendChild(). Note: DOMNode.appendChild() is responsible for Node Pointer surgery
 *   DOMNodeList._appendChild() simply modifies the internal data structure (Array).
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newChild      : DOMNode - the Node to be inserted
 */
DOMNodeList.prototype._appendChild = function DOMNodeList__appendChild(newChild) {

  if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {  // node is a DocumentFragment
    // append the children of DocumentFragment
    this._nodes = this._nodes.concat(newChild.childNodes._nodes);
  }
  else {
    // simply add node to array (links between Nodes are made at higher level)
    this._nodes[this._nodes.length] = newChild;
  }

  this.length = this._nodes.length;              // update length
};

/**
 * @method DOMNodeList._cloneNodes - Returns a NodeList containing clones of the Nodes in this NodeList
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  deep : boolean - If true, recursively clone the subtree under each of the nodes;
 *   if false, clone only the nodes themselves (and their attributes, if it is an Element).
 * @param  parentNode : DOMNode - the new parent of the cloned NodeList
 *
 * @return : DOMNodeList - NodeList containing clones of the Nodes in this NodeList
 */
DOMNodeList.prototype._cloneNodes = function DOMNodeList__cloneNodes(deep, parentNode) {
  var cloneNodeList = new DOMNodeList(this.ownerDocument, parentNode);

  // create list containing clones of each child
  for (var i=0; i < this._nodes.length; i++) {
    cloneNodeList._appendChild(this._nodes[i].cloneNode(deep));
  }

  return cloneNodeList;
};

/**
 * @method DOMNodeList.toString - Serialize this NodeList into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMNodeList.prototype.toString = function DOMNodeList_toString() {
  var ret = "";

  // create string containing the concatenation of the string values of each child
  for (var i=0; i < this.length; i++) {
    ret += this._nodes[i].toString();
  }

  return ret;
};

/**
 * @class  DOMNamedNodeMap - used to represent collections of nodes that can be accessed by name
 *  typically a set of Element attributes
 *
 * @extends DOMNodeList - note W3C spec says that this is not the case,
 *   but we need an item() method identicle to DOMNodeList's, so why not?
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - the ownerDocument
 * @param  parentNode    : DOMNode - the node that the DOMNamedNodeMap is attached to (or null)
 */
DOMNamedNodeMap = function(ownerDocument, parentNode) {
  this._class = addClass(this._class, "DOMNamedNodeMap");
  this.DOMNodeList = DOMNodeList;
  this.DOMNodeList(ownerDocument, parentNode);
};
DOMNamedNodeMap.prototype = new DOMNodeList;

/**
 * @method DOMNamedNodeMap.getNamedItem - Retrieves a node specified by name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - Name of a node to retrieve
 *
 * @return : DOMNode
 */
DOMNamedNodeMap.prototype.getNamedItem = function DOMNamedNodeMap_getNamedItem(name) {
  var ret = null;

  // test that Named Node exists
  var itemIndex = this._findNamedItemIndex(name);

  if (itemIndex > -1) {                          // found it!
    ret = this._nodes[itemIndex];                // return NamedNode
  }

  return ret;                                    // if node is not found, default value null is returned
};

/**
 * @method DOMNamedNodeMap.setNamedItem - Adds a node using its nodeName attribute
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  arg : DOMNode - A node to store in a named node map.
 *   The node will later be accessible using the value of the nodeName attribute of the node.
 *   If a node with that name is already present in the map, it is replaced by the new one.
 *
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this NamedNodeMap is readonly.
 * @throws : DOMException - INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object.
 *  The DOM user must explicitly clone Attr nodes to re-use them in other elements.
 *
 * @return : DOMNode - If the new Node replaces an existing node with the same name the previously existing Node is returned,
 *   otherwise null is returned
 */
DOMNamedNodeMap.prototype.setNamedItem = function DOMNamedNodeMap_setNamedItem(arg) {
  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if arg was not created by this Document
    if (this.ownerDocument != arg.ownerDocument) {
      throw(new DOMException(DOMException.WRONG_DOCUMENT_ERR));
    }

    // throw Exception if DOMNamedNodeMap is readonly
    if (this._readonly || (this.parentNode && this.parentNode._readonly)) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if arg is already an attribute of another Element object
    if (arg.ownerElement && (arg.ownerElement != this.parentNode)) {
      throw(new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
    }
  }

  // get item index
  var itemIndex = this._findNamedItemIndex(arg.name);
  var ret = null;

  if (itemIndex > -1) {                          // found it!
    ret = this._nodes[itemIndex];                // use existing Attribute

    // throw Exception if DOMAttr is readonly
    if (this.ownerDocument.implementation.errorChecking && ret._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }
    else {
      this._nodes[itemIndex] = arg;                // over-write existing NamedNode
    }
  }
  else {
    this._nodes[this.length] = arg;              // add new NamedNode
  }

  this.length = this._nodes.length;              // update length

  arg.ownerElement = this.parentNode;            // update ownerElement

  return ret;                                    // return old node or null
};

/**
 * @method DOMNamedNodeMap.removeNamedItem - Removes a node specified by name.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - The name of a node to remove
 *
 * @throws : DOMException - NOT_FOUND_ERR: Raised if there is no node named name in this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this NamedNodeMap is readonly.
 *
 * @return : DOMNode - The node removed from the map or null if no node with such a name exists.
 */
DOMNamedNodeMap.prototype.removeNamedItem = function DOMNamedNodeMap_removeNamedItem(name) {
  var ret = null;
  // test for exceptions
  // throw Exception if DOMNamedNodeMap is readonly
  if (this.ownerDocument.implementation.errorChecking && (this._readonly || (this.parentNode && this.parentNode._readonly))) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // get item index
  var itemIndex = this._findNamedItemIndex(name);

  // throw Exception if there is no node named name in this map
  if (this.ownerDocument.implementation.errorChecking && (itemIndex < 0)) {
    throw(new DOMException(DOMException.NOT_FOUND_ERR));
  }

  // get Node
  var oldNode = this._nodes[itemIndex];

  // throw Exception if Node is readonly
  if (this.ownerDocument.implementation.errorChecking && oldNode._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // return removed node
  return this._removeChild(itemIndex);
};

/**
 * @method DOMNamedNodeMap.getNamedItemNS - Retrieves a node specified by name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : DOMNode
 */
DOMNamedNodeMap.prototype.getNamedItemNS = function DOMNamedNodeMap_getNamedItemNS(namespaceURI, localName) {
  var ret = null;

  // test that Named Node exists
  var itemIndex = this._findNamedItemNSIndex(namespaceURI, localName);

  if (itemIndex > -1) {                          // found it!
    ret = this._nodes[itemIndex];                // return NamedNode
  }

  return ret;                                    // if node is not found, default value null is returned
};

/**
 * @method DOMNamedNodeMap.setNamedItemNS - Adds a node using
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  arg : string - A node to store in a named node map.
 *   The node will later be accessible using the value of the nodeName attribute of the node.
 *   If a node with that name is already present in the map, it is replaced by the new one.
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this NamedNodeMap is readonly.
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object.
 *   The DOM user must explicitly clone Attr nodes to re-use them in other elements.
 *
 * @return : DOMNode - If the new Node replaces an existing node with the same name the previously existing Node is returned,
 *   otherwise null is returned
 */
DOMNamedNodeMap.prototype.setNamedItemNS = function DOMNamedNodeMap_setNamedItemNS(arg) {
  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if DOMNamedNodeMap is readonly
    if (this._readonly || (this.parentNode && this.parentNode._readonly)) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if arg was not created by this Document
    if (this.ownerDocument != arg.ownerDocument) {
      throw(new DOMException(DOMException.WRONG_DOCUMENT_ERR));
    }

    // throw Exception if arg is already an attribute of another Element object
    if (arg.ownerElement && (arg.ownerElement != this.parentNode)) {
      throw(new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
    }
  }

  // get item index
  var itemIndex = this._findNamedItemNSIndex(arg.namespaceURI, arg.localName);
  var ret = null;

  if (itemIndex > -1) {                          // found it!
    ret = this._nodes[itemIndex];                // use existing Attribute
    // throw Exception if DOMAttr is readonly
    if (this.ownerDocument.implementation.errorChecking && ret._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }
    else {
      this._nodes[itemIndex] = arg;                // over-write existing NamedNode
    }
  }
  else {
    this._nodes[this.length] = arg;              // add new NamedNode
  }

  this.length = this._nodes.length;              // update length

  arg.ownerElement = this.parentNode;


  return ret;                                    // return old node or null
};

/**
 * @method DOMNamedNodeMap.removeNamedItemNS - Removes a node specified by name.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @throws : DOMException - NOT_FOUND_ERR: Raised if there is no node with the specified namespaceURI and localName in this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this NamedNodeMap is readonly.
 *
 * @return : DOMNode - The node removed from the map or null if no node with such a name exists.
 */
DOMNamedNodeMap.prototype.removeNamedItemNS = function DOMNamedNodeMap_removeNamedItemNS(namespaceURI, localName) {
  var ret = null;

  // test for exceptions
  // throw Exception if DOMNamedNodeMap is readonly
  if (this.ownerDocument.implementation.errorChecking && (this._readonly || (this.parentNode && this.parentNode._readonly))) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // get item index
  var itemIndex = this._findNamedItemNSIndex(namespaceURI, localName);

  // throw Exception if there is no matching node in this map
  if (this.ownerDocument.implementation.errorChecking && (itemIndex < 0)) {
    throw(new DOMException(DOMException.NOT_FOUND_ERR));
  }

  // get Node
  var oldNode = this._nodes[itemIndex];

  // throw Exception if Node is readonly
  if (this.ownerDocument.implementation.errorChecking && oldNode._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  return this._removeChild(itemIndex);             // return removed node
};

/**
 * @method DOMNamedNodeMap._findNamedItemIndex - find the item index of the node with the specified name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - the name of the required node
 *
 * @return : int
 */
DOMNamedNodeMap.prototype._findNamedItemIndex = function DOMNamedNodeMap__findNamedItemIndex(name) {
  var ret = -1;

  // loop through all nodes
  for (var i=0; i<this._nodes.length; i++) {
    // compare name to each node's nodeName
    if (this._nodes[i].name == name) {         // found it!
      ret = i;
      break;
    }
  }

  return ret;                                    // if node is not found, default value -1 is returned
};

/**
 * @method DOMNamedNodeMap._findNamedItemNSIndex - find the item index of the node with the specified namespaceURI and localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : int
 */
DOMNamedNodeMap.prototype._findNamedItemNSIndex = function DOMNamedNodeMap__findNamedItemNSIndex(namespaceURI, localName) {
  var ret = -1;

  // test that localName is not null
  if (localName) {
    // loop through all nodes
    for (var i=0; i<this._nodes.length; i++) {
      // compare name to each node's namespaceURI and localName
      if ((this._nodes[i].namespaceURI == namespaceURI) && (this._nodes[i].localName == localName)) {
        ret = i;                                 // found it!
        break;
      }
    }
  }

  return ret;                                    // if node is not found, default value -1 is returned
};

/**
 * @method DOMNamedNodeMap._hasAttribute - Returns true if specified node exists
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - the name of the required node
 *
 * @return : boolean
 */
DOMNamedNodeMap.prototype._hasAttribute = function DOMNamedNodeMap__hasAttribute(name) {
  var ret = false;

  // test that Named Node exists
  var itemIndex = this._findNamedItemIndex(name);

  if (itemIndex > -1) {                          // found it!
    ret = true;                                  // return true
  }

  return ret;                                    // if node is not found, default value false is returned
}

/**
 * @method DOMNamedNodeMap._hasAttributeNS - Returns true if specified node exists
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : boolean
 */
DOMNamedNodeMap.prototype._hasAttributeNS = function DOMNamedNodeMap__hasAttributeNS(namespaceURI, localName) {
  var ret = false;

  // test that Named Node exists
  var itemIndex = this._findNamedItemNSIndex(namespaceURI, localName);

  if (itemIndex > -1) {                          // found it!
    ret = true;                                  // return true
  }

  return ret;                                    // if node is not found, default value false is returned
}

/**
 * @method DOMNamedNodeMap._cloneNodes - Returns a NamedNodeMap containing clones of the Nodes in this NamedNodeMap
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  parentNode : DOMNode - the new parent of the cloned NodeList
 *
 * @return : DOMNamedNodeMap - NamedNodeMap containing clones of the Nodes in this DOMNamedNodeMap
 */
DOMNamedNodeMap.prototype._cloneNodes = function DOMNamedNodeMap__cloneNodes(parentNode) {
  var cloneNamedNodeMap = new DOMNamedNodeMap(this.ownerDocument, parentNode);

  // create list containing clones of all children
  for (var i=0; i < this._nodes.length; i++) {
    cloneNamedNodeMap._appendChild(this._nodes[i].cloneNode(false));
  }

  return cloneNamedNodeMap;
};

/**
 * @method DOMNamedNodeMap.toString - Serialize this NodeMap into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMNamedNodeMap.prototype.toString = function DOMNamedNodeMap_toString() {
  var ret = "";

  // create string containing concatenation of all (but last) Attribute string values (separated by spaces)
  for (var i=0; i < this.length -1; i++) {
    ret += this._nodes[i].toString() +" ";
  }

  // add last Attribute to string (without trailing space)
  if (this.length > 0) {
    ret += this._nodes[this.length -1].toString();
  }

  return ret;
};

/**
 * @class  DOMNamespaceNodeMap - used to represent collections of namespace nodes that can be accessed by name
 *  typically a set of Element attributes
 *
 * @extends DOMNamedNodeMap
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - the ownerDocument
 * @param  parentNode    : DOMNode - the node that the DOMNamespaceNodeMap is attached to (or null)
 */
DOMNamespaceNodeMap = function(ownerDocument, parentNode) {
  this._class = addClass(this._class, "DOMNamespaceNodeMap");
  this.DOMNamedNodeMap = DOMNamedNodeMap;
  this.DOMNamedNodeMap(ownerDocument, parentNode);
};
DOMNamespaceNodeMap.prototype = new DOMNamedNodeMap;

/**
 * @method DOMNamespaceNodeMap._findNamedItemIndex - find the item index of the node with the specified localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  localName : string - the localName of the required node
 *
 * @return : int
 */
DOMNamespaceNodeMap.prototype._findNamedItemIndex = function DOMNamespaceNodeMap__findNamedItemIndex(localName) {
  var ret = -1;

  // loop through all nodes
  for (var i=0; i<this._nodes.length; i++) {
    // compare name to each node's nodeName
    if (this._nodes[i].localName == localName) {         // found it!
      ret = i;
      break;
    }
  }

  return ret;                                    // if node is not found, default value -1 is returned
};


/**
 * @method DOMNamespaceNodeMap._cloneNodes - Returns a NamespaceNodeMap containing clones of the Nodes in this NamespaceNodeMap
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  parentNode : DOMNode - the new parent of the cloned NodeList
 *
 * @return : DOMNamespaceNodeMap - NamespaceNodeMap containing clones of the Nodes in this NamespaceNodeMap
 */
DOMNamespaceNodeMap.prototype._cloneNodes = function DOMNamespaceNodeMap__cloneNodes(parentNode) {
  var cloneNamespaceNodeMap = new DOMNamespaceNodeMap(this.ownerDocument, parentNode);

  // create list containing clones of all children
  for (var i=0; i < this._nodes.length; i++) {
    cloneNamespaceNodeMap._appendChild(this._nodes[i].cloneNode(false));
  }

  return cloneNamespaceNodeMap;
};

/**
 * @method DOMNamespaceNodeMap.toString - Serialize this NamespaceNodeMap into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMNamespaceNodeMap.prototype.toString = function DOMNamespaceNodeMap_toString() {
  var ret = "";

  // identify namespaces declared local to this Element (ie, not inherited)
  for (var ind = 0; ind < this._nodes.length; ind++) {
    // if namespace declaration does not exist in the containing node's, parentNode's namespaces
    var ns = null;
    try {
        var ns = this.parentNode.parentNode._namespaces.getNamedItem(this._nodes[ind].localName);
    }
    catch (e) {
        //breaking to prevent default namespace being inserted into return value
        break;
    }
    if (!(ns && (""+ ns.nodeValue == ""+ this._nodes[ind].nodeValue))) {
      // display the namespace declaration
      ret += this._nodes[ind].toString() +" ";
    }
  }

  return ret;
};

/**
 * @class  DOMNode - The Node interface is the primary datatype for the entire Document Object Model.
 *   It represents a single node in the document tree.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMNode = function(ownerDocument) {
  this._class = addClass(this._class, "DOMNode");

  if (ownerDocument) {
    this._id = ownerDocument._genId();           // generate unique internal id
  }

  this.namespaceURI = "";                        // The namespace URI of this node (Level 2)
  this.prefix       = "";                        // The namespace prefix of this node (Level 2)
  this.localName    = "";                        // The localName of this node (Level 2)

  this.nodeName = "";                            // The name of this node
  this.nodeValue = "";                           // The value of this node
  this.nodeType = 0;                             // A code representing the type of the underlying object

  // The parent of this node. All nodes, except Document, DocumentFragment, and Attr may have a parent.
  // However, if a node has just been created and not yet added to the tree, or if it has been removed from the tree, this is null
  this.parentNode      = null;

  // A NodeList that contains all children of this node. If there are no children, this is a NodeList containing no nodes.
  // The content of the returned NodeList is "live" in the sense that, for instance, changes to the children of the node object
  // that it was created from are immediately reflected in the nodes returned by the NodeList accessors;
  // it is not a static snapshot of the content of the node. This is true for every NodeList, including the ones returned by the getElementsByTagName method.
  this.childNodes      = new DOMNodeList(ownerDocument, this);

  this.firstChild      = null;                   // The first child of this node. If there is no such node, this is null
  this.lastChild       = null;                   // The last child of this node. If there is no such node, this is null.
  this.previousSibling = null;                   // The node immediately preceding this node. If there is no such node, this is null.
  this.nextSibling     = null;                   // The node immediately following this node. If there is no such node, this is null.

  this.attributes = new DOMNamedNodeMap(ownerDocument, this);   // A NamedNodeMap containing the attributes of this node (if it is an Element) or null otherwise.
  this.ownerDocument   = ownerDocument;          // The Document object associated with this node
  this._namespaces = new DOMNamespaceNodeMap(ownerDocument, this);  // The namespaces in scope for this node

  this._readonly = false;
};

// nodeType constants
DOMNode.ELEMENT_NODE                = 1;
DOMNode.ATTRIBUTE_NODE              = 2;
DOMNode.TEXT_NODE                   = 3;
DOMNode.CDATA_SECTION_NODE          = 4;
DOMNode.ENTITY_REFERENCE_NODE       = 5;
DOMNode.ENTITY_NODE                 = 6;
DOMNode.PROCESSING_INSTRUCTION_NODE = 7;
DOMNode.COMMENT_NODE                = 8;
DOMNode.DOCUMENT_NODE               = 9;
DOMNode.DOCUMENT_TYPE_NODE          = 10;
DOMNode.DOCUMENT_FRAGMENT_NODE      = 11;
DOMNode.NOTATION_NODE               = 12;
DOMNode.NAMESPACE_NODE              = 13;

/**
 * @method DOMNode.hasAttributes
 *
 * @author Jon van Noort (jon@webarcana.com.au) & David Joham (djoham@yahoo.com)
 *
 * @return : boolean
 */
DOMNode.prototype.hasAttributes = function DOMNode_hasAttributes() {
    if (this.attributes.length == 0) {
        return false;
    }
    else {
        return true;
    }
};

/**
 * @method DOMNode.getNodeName - Java style gettor for .nodeName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMNode.prototype.getNodeName = function DOMNode_getNodeName() {
  return this.nodeName;
};

/**
 * @method DOMNode.getNodeValue - Java style gettor for .NodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMNode.prototype.getNodeValue = function DOMNode_getNodeValue() {
  return this.nodeValue;
};

/**
 * @method DOMNode.setNodeValue - Java style settor for .NodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  nodeValue : string - unique internal id
 */
DOMNode.prototype.setNodeValue = function DOMNode_setNodeValue(nodeValue) {
  // throw Exception if DOMNode is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  this.nodeValue = nodeValue;
};

/**
 * @method DOMNode.getNodeType - Java style gettor for .nodeType
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : int
 */
DOMNode.prototype.getNodeType = function DOMNode_getNodeType() {
  return this.nodeType;
};

/**
 * @method DOMNode.getParentNode - Java style gettor for .parentNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNode
 */
DOMNode.prototype.getParentNode = function DOMNode_getParentNode() {
  return this.parentNode;
};

/**
 * @method DOMNode.getChildNodes - Java style gettor for .childNodes
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNodeList
 */
DOMNode.prototype.getChildNodes = function DOMNode_getChildNodes() {
  return this.childNodes;
};

/**
 * @method DOMNode.getFirstChild - Java style gettor for .firstChild
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNode
 */
DOMNode.prototype.getFirstChild = function DOMNode_getFirstChild() {
  return this.firstChild;
};

/**
 * @method DOMNode.getLastChild - Java style gettor for .lastChild
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNode
 */
DOMNode.prototype.getLastChild = function DOMNode_getLastChild() {
  return this.lastChild;
};

/**
 * @method DOMNode.getPreviousSibling - Java style gettor for .previousSibling
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNode
 */
DOMNode.prototype.getPreviousSibling = function DOMNode_getPreviousSibling() {
  return this.previousSibling;
};

/**
 * @method DOMNode.getNextSibling - Java style gettor for .nextSibling
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNode
 */
DOMNode.prototype.getNextSibling = function DOMNode_getNextSibling() {
  return this.nextSibling;
};

/**
 * @method DOMNode.getAttributes - Java style gettor for .attributes
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMNamedNodeList
 */
DOMNode.prototype.getAttributes = function DOMNode_getAttributes() {
  return this.attributes;
};

/**
 * @method DOMNode.getOwnerDocument - Java style gettor for .ownerDocument
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMDocument
 */
DOMNode.prototype.getOwnerDocument = function DOMNode_getOwnerDocument() {
  return this.ownerDocument;
};

/**
 * @method DOMNode.getNamespaceURI - Java style gettor for .namespaceURI
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : String
 */
DOMNode.prototype.getNamespaceURI = function DOMNode_getNamespaceURI() {
  return this.namespaceURI;
};

/**
 * @method DOMNode.getPrefix - Java style gettor for .prefix
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : String
 */
DOMNode.prototype.getPrefix = function DOMNode_getPrefix() {
  return this.prefix;
};

/**
 * @method DOMNode.setPrefix - Java style settor for .prefix
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param   prefix : String
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Node is readonly.
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 * @throws : DOMException - NAMESPACE_ERR: Raised if the Namespace is invalid
 *
 */
DOMNode.prototype.setPrefix = function DOMNode_setPrefix(prefix) {
  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if DOMNode is readonly
    if (this._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if the prefix string contains an illegal character
    if (!this.ownerDocument.implementation._isValidName(prefix)) {
      throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
    }

    // throw Exception if the Namespace is invalid;
    //  if the specified prefix is malformed,
    //  if the namespaceURI of this node is null,
    //  if the specified prefix is "xml" and the namespaceURI of this node is
    //   different from "http://www.w3.org/XML/1998/namespace",
    if (!this.ownerDocument._isValidNamespace(this.namespaceURI, prefix +":"+ this.localName)) {
      throw(new DOMException(DOMException.NAMESPACE_ERR));
    }

    // throw Exception if we are trying to make the attribute look like a namespace declaration;
    //  if this node is an attribute and the specified prefix is "xmlns"
    //   and the namespaceURI of this node is different from "http://www.w3.org/2000/xmlns/",
    if ((prefix == "xmlns") && (this.namespaceURI != "http://www.w3.org/2000/xmlns/")) {
      throw(new DOMException(DOMException.NAMESPACE_ERR));
    }

    // throw Exception if we are trying to make the attribute look like a default namespace declaration;
    //  if this node is an attribute and the qualifiedName of this node is "xmlns" [Namespaces].
    if ((prefix == "") && (this.localName == "xmlns")) {
      throw(new DOMException(DOMException.NAMESPACE_ERR));
    }
  }

  // update prefix
  this.prefix = prefix;

  // update nodeName (QName)
  if (this.prefix != "") {
    this.nodeName = this.prefix +":"+ this.localName;
  }
  else {
    this.nodeName = this.localName;  // no prefix, therefore nodeName is simply localName
  }
};

/**
 * @method DOMNode.getLocalName - Java style gettor for .localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : String
 */
DOMNode.prototype.getLocalName = function DOMNode_getLocalName() {
  return this.localName;
};

/**
 * @method DOMNode.insertBefore - Inserts the node newChild before the existing child node refChild.
 *   If refChild is null, insert newChild at the end of the list of children.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newChild : DOMNode - The node to insert.
 * @param  refChild : DOMNode - The reference node, i.e., the node before which the new node must be inserted
 *
 * @throws : DOMException - HIERARCHY_REQUEST_ERR: Raised if the node to insert is one of this node's ancestors
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Node is readonly.
 * @throws : DOMException - NOT_FOUND_ERR: Raised if there is no node named name in this map.
 *
 * @return : DOMNode - The node being inserted.
 */
DOMNode.prototype.insertBefore = function DOMNode_insertBefore(newChild, refChild) {
  var prevNode;

  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if DOMNode is readonly
    if (this._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if newChild was not created by this Document
    if (this.ownerDocument != newChild.ownerDocument) {
      throw(new DOMException(DOMException.WRONG_DOCUMENT_ERR));
    }

    // throw Exception if the node is an ancestor
    if (this._isAncestor(newChild)) {
      throw(new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
    }
  }

  if (refChild) {                                // if refChild is specified, insert before it
    // find index of refChild
    var itemIndex = this.childNodes._findItemIndex(refChild._id);

    // throw Exception if there is no child node with this id
    if (this.ownerDocument.implementation.errorChecking && (itemIndex < 0)) {
      throw(new DOMException(DOMException.NOT_FOUND_ERR));
    }

    // if the newChild is already in the tree,
    var newChildParent = newChild.parentNode;
    if (newChildParent) {
      // remove it
      newChildParent.removeChild(newChild);
    }

    // insert newChild into childNodes
    this.childNodes._insertBefore(newChild, this.childNodes._findItemIndex(refChild._id));

    // do node pointer surgery
    prevNode = refChild.previousSibling;

    // handle DocumentFragment
    if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
      if (newChild.childNodes._nodes.length > 0) {
        // set the parentNode of DocumentFragment's children
        for (var ind = 0; ind < newChild.childNodes._nodes.length; ind++) {
          newChild.childNodes._nodes[ind].parentNode = this;
        }

        // link refChild to last child of DocumentFragment
        refChild.previousSibling = newChild.childNodes._nodes[newChild.childNodes._nodes.length-1];
      }
    }
    else {
      newChild.parentNode = this;                // set the parentNode of the newChild
      refChild.previousSibling = newChild;       // link refChild to newChild
    }
  }
  else {                                         // otherwise, append to end
    prevNode = this.lastChild;
    this.appendChild(newChild);
  }

  if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
    // do node pointer surgery for DocumentFragment
    if (newChild.childNodes._nodes.length > 0) {
      if (prevNode) {
        prevNode.nextSibling = newChild.childNodes._nodes[0];
      }
      else {                                         // this is the first child in the list
        this.firstChild = newChild.childNodes._nodes[0];
      }

      newChild.childNodes._nodes[0].previousSibling = prevNode;
      newChild.childNodes._nodes[newChild.childNodes._nodes.length-1].nextSibling = refChild;
    }
  }
  else {
    // do node pointer surgery for newChild
    if (prevNode) {
      prevNode.nextSibling = newChild;
    }
    else {                                         // this is the first child in the list
      this.firstChild = newChild;
    }

    newChild.previousSibling = prevNode;
    newChild.nextSibling     = refChild;
  }

  return newChild;
};

/**
 * @method DOMNode.replaceChild - Replaces the child node oldChild with newChild in the list of children,
 *   and returns the oldChild node.
 *   If the newChild is already in the tree, it is first removed.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newChild : DOMNode - The node to insert.
 * @param  oldChild : DOMNode - The node being replaced in the list.
 *
 * @throws : DOMException - HIERARCHY_REQUEST_ERR: Raised if the node to insert is one of this node's ancestors
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Node is readonly.
 * @throws : DOMException - NOT_FOUND_ERR: Raised if there is no node named name in this map.
 *
 * @return : DOMNode - The node that was replaced
 */
DOMNode.prototype.replaceChild = function DOMNode_replaceChild(newChild, oldChild) {
  var ret = null;

  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if DOMNode is readonly
    if (this._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if newChild was not created by this Document
    if (this.ownerDocument != newChild.ownerDocument) {
      throw(new DOMException(DOMException.WRONG_DOCUMENT_ERR));
    }

    // throw Exception if the node is an ancestor
    if (this._isAncestor(newChild)) {
      throw(new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
    }
  }

  // get index of oldChild
  var index = this.childNodes._findItemIndex(oldChild._id);

  // throw Exception if there is no child node with this id
  if (this.ownerDocument.implementation.errorChecking && (index < 0)) {
    throw(new DOMException(DOMException.NOT_FOUND_ERR));
  }

  // if the newChild is already in the tree,
  var newChildParent = newChild.parentNode;
  if (newChildParent) {
    // remove it
    newChildParent.removeChild(newChild);
  }

  // add newChild to childNodes
  ret = this.childNodes._replaceChild(newChild, index);


  if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
    // do node pointer surgery for Document Fragment
    if (newChild.childNodes._nodes.length > 0) {
      for (var ind = 0; ind < newChild.childNodes._nodes.length; ind++) {
        newChild.childNodes._nodes[ind].parentNode = this;
      }

      if (oldChild.previousSibling) {
        oldChild.previousSibling.nextSibling = newChild.childNodes._nodes[0];
      }
      else {
        this.firstChild = newChild.childNodes._nodes[0];
      }

      if (oldChild.nextSibling) {
        oldChild.nextSibling.previousSibling = newChild;
      }
      else {
        this.lastChild = newChild.childNodes._nodes[newChild.childNodes._nodes.length-1];
      }

      newChild.childNodes._nodes[0].previousSibling = oldChild.previousSibling;
      newChild.childNodes._nodes[newChild.childNodes._nodes.length-1].nextSibling = oldChild.nextSibling;
    }
  }
  else {
    // do node pointer surgery for newChild
    newChild.parentNode = this;

    if (oldChild.previousSibling) {
      oldChild.previousSibling.nextSibling = newChild;
    }
    else {
      this.firstChild = newChild;
    }
    if (oldChild.nextSibling) {
      oldChild.nextSibling.previousSibling = newChild;
    }
    else {
      this.lastChild = newChild;
    }
    newChild.previousSibling = oldChild.previousSibling;
    newChild.nextSibling = oldChild.nextSibling;
  }
  return ret;
};

/**
 * @method DOMNode.removeChild - Removes the child node indicated by oldChild from the list of children, and returns it.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  oldChild : DOMNode - The node being removed.
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Node is readonly.
 * @throws : DOMException - NOT_FOUND_ERR: Raised if there is no node named name in this map.
 *
 * @return : DOMNode - The node being removed.
 */
DOMNode.prototype.removeChild = function DOMNode_removeChild(oldChild) {
  // throw Exception if DOMNamedNodeMap is readonly
  if (this.ownerDocument.implementation.errorChecking && (this._readonly || oldChild._readonly)) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // get index of oldChild
  var itemIndex = this.childNodes._findItemIndex(oldChild._id);

  // throw Exception if there is no child node with this id
  if (this.ownerDocument.implementation.errorChecking && (itemIndex < 0)) {
    throw(new DOMException(DOMException.NOT_FOUND_ERR));
  }

  // remove oldChild from childNodes
  this.childNodes._removeChild(itemIndex);

  // do node pointer surgery
  oldChild.parentNode = null;

  if (oldChild.previousSibling) {
    oldChild.previousSibling.nextSibling = oldChild.nextSibling;
  }
  else {
    this.firstChild = oldChild.nextSibling;
  }
  if (oldChild.nextSibling) {
    oldChild.nextSibling.previousSibling = oldChild.previousSibling;
  }
  else {
    this.lastChild = oldChild.previousSibling;
  }

  oldChild.previousSibling = null;
  oldChild.nextSibling = null;
  return oldChild;
};

/**
 * @method DOMNode.appendChild - Adds the node newChild to the end of the list of children of this node.
 *   If the newChild is already in the tree, it is first removed.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newChild : DOMNode - The node to add
 *
 * @throws : DOMException - HIERARCHY_REQUEST_ERR: Raised if the node to insert is one of this node's ancestors
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Node is readonly.
 *
 * @return : DOMNode - The node added
 */
DOMNode.prototype.appendChild = function DOMNode_appendChild(newChild) {
  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if Node is readonly
    if (this._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if arg was not created by this Document
    if (this.ownerDocument != newChild.ownerDocument) {
      throw(new DOMException(DOMException.WRONG_DOCUMENT_ERR));
    }

    // throw Exception if the node is an ancestor
    if (this._isAncestor(newChild)) {
      throw(new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
    }
  }

  // if the newChild is already in the tree,
  var newChildParent = newChild.parentNode;
  if (newChildParent) {
    // remove it
    newChildParent.removeChild(newChild);
  }

  // add newChild to childNodes
  this.childNodes._appendChild(newChild);

  if (newChild.nodeType == DOMNode.DOCUMENT_FRAGMENT_NODE) {
    // do node pointer surgery for DocumentFragment
    if (newChild.childNodes._nodes.length > 0) {
      for (var ind = 0; ind < newChild.childNodes._nodes.length; ind++) {
        newChild.childNodes._nodes[ind].parentNode = this;
      }

      if (this.lastChild) {
        this.lastChild.nextSibling = newChild.childNodes._nodes[0];
        newChild.childNodes._nodes[0].previousSibling = this.lastChild;
        this.lastChild = newChild.childNodes._nodes[newChild.childNodes._nodes.length-1];
      }
      else {
        this.lastChild = newChild.childNodes._nodes[newChild.childNodes._nodes.length-1];
        this.firstChild = newChild.childNodes._nodes[0];
      }
    }
  }
  else {
    // do node pointer surgery for newChild
    newChild.parentNode = this;
    if (this.lastChild) {
      this.lastChild.nextSibling = newChild;
      newChild.previousSibling = this.lastChild;
      this.lastChild = newChild;
    }
    else {
      this.lastChild = newChild;
      this.firstChild = newChild;
    }
  }

  return newChild;
};

/**
 * @method DOMNode.hasChildNodes - This is a convenience method to allow easy determination of whether a node has any children.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : boolean - true if the node has any children, false if the node has no children
 */
DOMNode.prototype.hasChildNodes = function DOMNode_hasChildNodes() {
  return (this.childNodes.length > 0);
};

/**
 * @method DOMNode.cloneNode - Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes.
 *   The duplicate node has no parent (parentNode returns null.).
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  deep : boolean - If true, recursively clone the subtree under the specified node;
 *   if false, clone only the node itself (and its attributes, if it is an Element).
 *
 * @return : DOMNode
 */
DOMNode.prototype.cloneNode = function DOMNode_cloneNode(deep) {
  // use importNode to clone this Node
  //do not throw any exceptions
  try {
     return this.ownerDocument.importNode(this, deep);
  }
  catch (e) {
     //there shouldn't be any exceptions, but if there are, return null
     return null;
  }
};

/**
 * @method DOMNode.normalize - Puts all Text nodes in the full depth of the sub-tree underneath this Element into a "normal" form
 *   where only markup (e.g., tags, comments, processing instructions, CDATA sections, and entity references) separates Text nodes,
 *   i.e., there are no adjacent Text nodes.
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 */
DOMNode.prototype.normalize = function DOMNode_normalize() {
  var inode;
  var nodesToRemove = new DOMNodeList();

  if (this.nodeType == DOMNode.ELEMENT_NODE || this.nodeType == DOMNode.DOCUMENT_NODE) {
    var adjacentTextNode = null;

    // loop through all childNodes
    for(var i = 0; i < this.childNodes.length; i++) {
      inode = this.childNodes.item(i);

      if (inode.nodeType == DOMNode.TEXT_NODE) { // this node is a text node
        if (inode.length < 1) {                  // this text node is empty
          nodesToRemove._appendChild(inode);      // add this node to the list of nodes to be remove
        }
        else {
          if (adjacentTextNode) {                // if previous node was also text
            adjacentTextNode.appendData(inode.data);     // merge the data in adjacent text nodes
            nodesToRemove._appendChild(inode);    // add this node to the list of nodes to be removed
          }
          else {
              adjacentTextNode = inode;              // remember this node for next cycle
          }
        }
      }
      else {
        adjacentTextNode = null;                 // (soon to be) previous node is not a text node
        inode.normalize();                       // normalise non Text childNodes
      }
    }

    // remove redundant Text Nodes
    for(var i = 0; i < nodesToRemove.length; i++) {
      inode = nodesToRemove.item(i);
      inode.parentNode.removeChild(inode);
    }
  }
};

/**
 * @method DOMNode.isSupported - Test if the DOM implementation implements a specific feature
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  feature : string - The package name of the feature to test. the legal only values are "XML" and "CORE" (case-insensitive).
 * @param  version : string - This is the version number of the package name to test. In Level 1, this is the string "1.0".
 *
 * @return : boolean
 */
DOMNode.prototype.isSupported = function DOMNode_isSupported(feature, version) {
  // use Implementation.hasFeature to determin if this feature is supported
  return this.ownerDocument.implementation.hasFeature(feature, version);
}

/**
 * @method DOMNode.getElementsByTagName - Returns a NodeList of all the Elements with a given tag name
 *   in the order in which they would be encountered in a preorder traversal of the Document tree.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  tagname : string - The name of the tag to match on. The special value "*" matches all tags
 *
 * @return : DOMNodeList
 */
DOMNode.prototype.getElementsByTagName = function DOMNode_getElementsByTagName(tagname) {
  // delegate to _getElementsByTagNameRecursive
  return this._getElementsByTagNameRecursive(tagname, new DOMNodeList(this.ownerDocument));
};

/**
 * @method DOMNode._getElementsByTagNameRecursive - implements getElementsByTagName()
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 *
 * @param  tagname  : string      - The name of the tag to match on. The special value "*" matches all tags
 * @param  nodeList : DOMNodeList - The accumulating list of matching nodes
 *
 * @return : DOMNodeList
 */
DOMNode.prototype._getElementsByTagNameRecursive = function DOMNode__getElementsByTagNameRecursive(tagname, nodeList) {
  if (this.nodeType == DOMNode.ELEMENT_NODE || this.nodeType == DOMNode.DOCUMENT_NODE) {

    if((this.nodeName == tagname) || (tagname == "*")) {
      nodeList._appendChild(this);               // add matching node to nodeList
    }

    // recurse childNodes
    for(var i = 0; i < this.childNodes.length; i++) {
      nodeList = this.childNodes.item(i)._getElementsByTagNameRecursive(tagname, nodeList);
    }
  }

  return nodeList;
};

/**
 * @method DOMNode.getXML - Returns the String XML of the node and all of its children
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string - XML String of the XML of the node and all of its children
 */
DOMNode.prototype.getXML = function DOMNode_getXML() {
  return this.toString();
}


/**
 * @method DOMNode.getElementsByTagNameNS - Returns a NodeList of all the Elements with a given namespaceURI and localName
 *   in the order in which they would be encountered in a preorder traversal of the Document tree.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : DOMNodeList
 */
DOMNode.prototype.getElementsByTagNameNS = function DOMNode_getElementsByTagNameNS(namespaceURI, localName) {
  // delegate to _getElementsByTagNameNSRecursive
  return this._getElementsByTagNameNSRecursive(namespaceURI, localName, new DOMNodeList(this.ownerDocument));
};

/**
 * @method DOMNode._getElementsByTagNameNSRecursive - implements getElementsByTagName()
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 * @param  nodeList     : DOMNodeList - The accumulating list of matching nodes
 *
 * @return : DOMNodeList
 */
DOMNode.prototype._getElementsByTagNameNSRecursive = function DOMNode__getElementsByTagNameNSRecursive(namespaceURI, localName, nodeList) {
  if (this.nodeType == DOMNode.ELEMENT_NODE || this.nodeType == DOMNode.DOCUMENT_NODE) {

    if (((this.namespaceURI == namespaceURI) || (namespaceURI == "*")) && ((this.localName == localName) || (localName == "*"))) {
      nodeList._appendChild(this);               // add matching node to nodeList
    }

    // recurse childNodes
    for(var i = 0; i < this.childNodes.length; i++) {
      nodeList = this.childNodes.item(i)._getElementsByTagNameNSRecursive(namespaceURI, localName, nodeList);
    }
  }

  return nodeList;
};

/**
 * @method DOMNode._isAncestor - returns true if node is ancestor of this
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 *
 * @param  node         : DOMNode - The candidate ancestor node
 *
 * @return : boolean
 */
DOMNode.prototype._isAncestor = function DOMNode__isAncestor(node) {
  // if this node matches, return true,
  // otherwise recurse up (if there is a parentNode)
  return ((this == node) || ((this.parentNode) && (this.parentNode._isAncestor(node))));
}

/**
 * @method DOMNode.importNode - Imports a node from another document to this document.
 *   The returned node has no parent; (parentNode is null).
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  importedNode : Node - The Node to be imported
 * @param  deep         : boolean - If true, recursively clone the subtree under the specified node;
 *   if false, clone only the node itself (and its attributes, if it is an Element).
 *
 * @return : DOMNode
 */
DOMNode.prototype.importNode = function DOMNode_importNode(importedNode, deep) {
  var importNode;

  //there is no need to perform namespace checks since everything has already gone through them
  //in order to have gotten into the DOM in the first place. The following line
  //turns namespace checking off in ._isValidNamespace
  this.getOwnerDocument()._performingImportNodeOperation = true;

  try {
    if (importedNode.nodeType == DOMNode.ELEMENT_NODE) {
        if (!this.ownerDocument.implementation.namespaceAware) {
        // create a local Element (with the name of the importedNode)
        importNode = this.ownerDocument.createElement(importedNode.tagName);

        // create attributes matching those of the importedNode
        for(var i = 0; i < importedNode.attributes.length; i++) {
            importNode.setAttribute(importedNode.attributes.item(i).name, importedNode.attributes.item(i).value);
        }
        }
        else {
        // create a local Element (with the name & namespaceURI of the importedNode)
        importNode = this.ownerDocument.createElementNS(importedNode.namespaceURI, importedNode.nodeName);

        // create attributes matching those of the importedNode
        for(var i = 0; i < importedNode.attributes.length; i++) {
            importNode.setAttributeNS(importedNode.attributes.item(i).namespaceURI, importedNode.attributes.item(i).name, importedNode.attributes.item(i).value);
        }

        // create namespace definitions matching those of the importedNode
        for(var i = 0; i < importedNode._namespaces.length; i++) {
            importNode._namespaces._nodes[i] = this.ownerDocument.createNamespace(importedNode._namespaces.item(i).localName);
            importNode._namespaces._nodes[i].setValue(importedNode._namespaces.item(i).value);
        }
        }
    }
    else if (importedNode.nodeType == DOMNode.ATTRIBUTE_NODE) {
        if (!this.ownerDocument.implementation.namespaceAware) {
        // create a local Attribute (with the name of the importedAttribute)
        importNode = this.ownerDocument.createAttribute(importedNode.name);
        }
        else {
        // create a local Attribute (with the name & namespaceURI of the importedAttribute)
        importNode = this.ownerDocument.createAttributeNS(importedNode.namespaceURI, importedNode.nodeName);

        // create namespace definitions matching those of the importedAttribute
        for(var i = 0; i < importedNode._namespaces.length; i++) {
            importNode._namespaces._nodes[i] = this.ownerDocument.createNamespace(importedNode._namespaces.item(i).localName);
            importNode._namespaces._nodes[i].setValue(importedNode._namespaces.item(i).value);
        }
        }

        // set the value of the local Attribute to match that of the importedAttribute
        importNode.setValue(importedNode.value);
    }
    else if (importedNode.nodeType == DOMNode.DOCUMENT_FRAGMENT) {
        // create a local DocumentFragment
        importNode = this.ownerDocument.createDocumentFragment();
    }
    else if (importedNode.nodeType == DOMNode.NAMESPACE_NODE) {
        // create a local NamespaceNode (with the same name & value as the importedNode)
        importNode = this.ownerDocument.createNamespace(importedNode.nodeName);
        importNode.setValue(importedNode.value);
    }
    else if (importedNode.nodeType == DOMNode.TEXT_NODE) {
        // create a local TextNode (with the same data as the importedNode)
        importNode = this.ownerDocument.createTextNode(importedNode.data);
    }
    else if (importedNode.nodeType == DOMNode.CDATA_SECTION_NODE) {
        // create a local CDATANode (with the same data as the importedNode)
        importNode = this.ownerDocument.createCDATASection(importedNode.data);
    }
    else if (importedNode.nodeType == DOMNode.PROCESSING_INSTRUCTION_NODE) {
        // create a local ProcessingInstruction (with the same target & data as the importedNode)
        importNode = this.ownerDocument.createProcessingInstruction(importedNode.target, importedNode.data);
    }
    else if (importedNode.nodeType == DOMNode.COMMENT_NODE) {
        // create a local Comment (with the same data as the importedNode)
        importNode = this.ownerDocument.createComment(importedNode.data);
    }
    else {  // throw Exception if nodeType is not supported
        throw(new DOMException(DOMException.NOT_SUPPORTED_ERR));
    }

    if (deep) {                                    // recurse childNodes
        for(var i = 0; i < importedNode.childNodes.length; i++) {
        importNode.appendChild(this.ownerDocument.importNode(importedNode.childNodes.item(i), true));
        }
    }

    //reset _performingImportNodeOperation
    this.getOwnerDocument()._performingImportNodeOperation = false;
    return importNode;
  }
  catch (eAny) {
    //reset _performingImportNodeOperation
    this.getOwnerDocument()._performingImportNodeOperation = false;

    //re-throw the exception
    throw eAny;
  }//djotemp
};

/**
 * @method DOMNode.escapeString - escape special characters
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  str : string - The string to be escaped
 *
 * @return : string - The escaped string
 */
DOMNode.prototype.__escapeString = function DOMNode__escapeString(str) {

  //the sax processor already has this function. Just wrap it
  return __escapeString(str);
};

/**
 * @method DOMNode.unescapeString - unescape special characters
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  str : string - The string to be unescaped
 *
 * @return : string - The unescaped string
 */
DOMNode.prototype.__unescapeString = function DOMNode__unescapeString(str) {

  //the sax processor already has this function. Just wrap it
  return __unescapeString(str);
};



/**
 * @class  DOMDocument - The Document interface represents the entire HTML or XML document.
 *   Conceptually, it is the root of the document tree, and provides the primary access to the document's data.
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  implementation : DOMImplementation - the creator Implementation
 */
DOMDocument = function(implementation) {
  this._class = addClass(this._class, "DOMDocument");
  this.DOMNode = DOMNode;
  this.DOMNode(this);

  this.doctype = null;                           // The Document Type Declaration (see DocumentType) associated with this document
  this.implementation = implementation;          // The DOMImplementation object that handles this document.
  this.documentElement = null;                   // This is a convenience attribute that allows direct access to the child node that is the root element of the document
  this.all  = new Array();                       // The list of all Elements

  this.nodeName  = "#document";
  this.nodeType = DOMNode.DOCUMENT_NODE;
  this._id = 0;
  this._lastId = 0;
  this._parseComplete = false;                   // initially false, set to true by parser

  this.ownerDocument = this;

  this._performingImportNodeOperation = false;
};
DOMDocument.prototype = new DOMNode;

/**
 * @method DOMDocument.getDoctype - Java style gettor for .doctype
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMDocument
 */
DOMDocument.prototype.getDoctype = function DOMDocument_getDoctype() {
  return this.doctype;
};

/**
 * @method DOMDocument.getImplementation - Java style gettor for .implementation
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMImplementation
 */
DOMDocument.prototype.getImplementation = function DOMDocument_implementation() {
  return this.implementation;
};

/**
 * @method DOMDocument.getDocumentElement - Java style gettor for .documentElement
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMDocumentElement
 */
DOMDocument.prototype.getDocumentElement = function DOMDocument_getDocumentElement() {
  return this.documentElement;
};

/**
 * @method DOMDocument.createElement - Creates an element of the type specified.
 *   Note that the instance returned implements the Element interface,
 *   so attributes can be specified directly on the returned object.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  tagName : string - The name of the element type to instantiate.
 *
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 *
 * @return : DOMElement - The new Element object.
 */
DOMDocument.prototype.createElement = function DOMDocument_createElement(tagName) {
  // throw Exception if the tagName string contains an illegal character
  if (this.ownerDocument.implementation.errorChecking && (!this.ownerDocument.implementation._isValidName(tagName))) {
    throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
  }

  // create DOMElement specifying 'this' as ownerDocument
  var node = new DOMElement(this);

  // assign values to properties (and aliases)
  node.tagName  = tagName;
  node.nodeName = tagName;

  // add Element to 'all' collection
  this.all[this.all.length] = node;

  return node;
};

/**
 * @method DOMDocument.createDocumentFragment - CCreates an empty DocumentFragment object.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : DOMDocumentFragment - The new DocumentFragment object
 */
DOMDocument.prototype.createDocumentFragment = function DOMDocument_createDocumentFragment() {
  // create DOMDocumentFragment specifying 'this' as ownerDocument
  var node = new DOMDocumentFragment(this);

  return node;
};

/**
 * @method DOMDocument.createTextNode - Creates a Text node given the specified string.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - The data for the node.
 *
 * @return : DOMText - The new Text object.
 */
DOMDocument.prototype.createTextNode = function DOMDocument_createTextNode(data) {
  // create DOMText specifying 'this' as ownerDocument
  var node = new DOMText(this);

  // assign values to properties (and aliases)
  node.data      = data;
  node.nodeValue = data;

  // set initial length
  node.length    = data.length;

  return node;
};

/**
 * @method DOMDocument.createComment - Creates a Text node given the specified string.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - The data for the node.
 *
 * @return : DOMComment - The new Comment object.
 */
DOMDocument.prototype.createComment = function DOMDocument_createComment(data) {
  // create DOMComment specifying 'this' as ownerDocument
  var node = new DOMComment(this);

  // assign values to properties (and aliases)
  node.data      = data;
  node.nodeValue = data;

  // set initial length
  node.length    = data.length;

  return node;
};

/**
 * @method DOMDocument.createCDATASection - Creates a CDATASection node whose value is the specified string.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - The data for the node.
 *
 * @return : DOMCDATASection - The new CDATASection object.
 */
DOMDocument.prototype.createCDATASection = function DOMDocument_createCDATASection(data) {
  // create DOMCDATASection specifying 'this' as ownerDocument
  var node = new DOMCDATASection(this);

  // assign values to properties (and aliases)
  node.data      = data;
  node.nodeValue = data;

  // set initial length
  node.length    = data.length;

  return node;
};

/**
 * @method DOMDocument.createProcessingInstruction - Creates a ProcessingInstruction node given the specified target and data strings.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  target : string - The target part of the processing instruction.
 * @param  data   : string - The data for the node.
 *
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 *
 * @return : DOMProcessingInstruction - The new ProcessingInstruction object.
 */
DOMDocument.prototype.createProcessingInstruction = function DOMDocument_createProcessingInstruction(target, data) {
  // throw Exception if the target string contains an illegal character
  if (this.ownerDocument.implementation.errorChecking && (!this.implementation._isValidName(target))) {
    throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
  }

  // create DOMProcessingInstruction specifying 'this' as ownerDocument
  var node = new DOMProcessingInstruction(this);

  // assign values to properties (and aliases)
  node.target    = target;
  node.nodeName  = target;
  node.data      = data;
  node.nodeValue = data;

  // set initial length
  node.length    = data.length;

  return node;
};

/**
 * @method DOMDocument.createAttribute - Creates an Attr of the given name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - The name of the attribute.
 *
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 *
 * @return : DOMAttr - The new Attr object.
 */
DOMDocument.prototype.createAttribute = function DOMDocument_createAttribute(name) {
  // throw Exception if the name string contains an illegal character
  if (this.ownerDocument.implementation.errorChecking && (!this.ownerDocument.implementation._isValidName(name))) {
    throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
  }

  // create DOMAttr specifying 'this' as ownerDocument
  var node = new DOMAttr(this);

  // assign values to properties (and aliases)
  node.name     = name;
  node.nodeName = name;

  return node;
};

/**
 * @method DOMDocument.createElementNS - Creates an element of the type specified,
 *   within the specified namespace.
 *   Note that the instance returned implements the Element interface,
 *   so attributes can be specified directly on the returned object.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI  : string - The namespace URI of the element.
 * @param  qualifiedName : string - The qualified name of the element type to instantiate.
 *
 * @throws : DOMException - NAMESPACE_ERR: Raised if the Namespace is invalid
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 *
 * @return : DOMElement - The new Element object.
 */
DOMDocument.prototype.createElementNS = function DOMDocument_createElementNS(namespaceURI, qualifiedName) {
  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if the Namespace is invalid
    if (!this.ownerDocument._isValidNamespace(namespaceURI, qualifiedName)) {
      throw(new DOMException(DOMException.NAMESPACE_ERR));
    }

    // throw Exception if the qualifiedName string contains an illegal character
    if (!this.ownerDocument.implementation._isValidName(qualifiedName)) {
      throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
    }
  }

  // create DOMElement specifying 'this' as ownerDocument
  var node  = new DOMElement(this);
  var qname = this.implementation._parseQName(qualifiedName);

  // assign values to properties (and aliases)
  node.nodeName     = qualifiedName;
  node.namespaceURI = namespaceURI;
  node.prefix       = qname.prefix;
  node.localName    = qname.localName;
  node.tagName      = qualifiedName;

  // add Element to 'all' collection
  this.all[this.all.length] = node;

  return node;
};

/**
 * @method DOMDocument.createAttributeNS - Creates an Attr of the given name
 *   within the specified namespace.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI  : string - The namespace URI of the attribute.
 * @param  qualifiedName : string - The qualified name of the attribute.
 *
 * @throws : DOMException - NAMESPACE_ERR: Raised if the Namespace is invalid
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 *
 * @return : DOMAttr - The new Attr object.
 */
DOMDocument.prototype.createAttributeNS = function DOMDocument_createAttributeNS(namespaceURI, qualifiedName) {
  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if the Namespace is invalid
    if (!this.ownerDocument._isValidNamespace(namespaceURI, qualifiedName, true)) {
      throw(new DOMException(DOMException.NAMESPACE_ERR));
    }

    // throw Exception if the qualifiedName string contains an illegal character
    if (!this.ownerDocument.implementation._isValidName(qualifiedName)) {
      throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
    }
  }

  // create DOMAttr specifying 'this' as ownerDocument
  var node  = new DOMAttr(this);
  var qname = this.implementation._parseQName(qualifiedName);

  // assign values to properties (and aliases)
  node.nodeName     = qualifiedName
  node.namespaceURI = namespaceURI
  node.prefix       = qname.prefix;
  node.localName    = qname.localName;
  node.name         = qualifiedName
  node.nodeValue    = "";

  return node;
};

/**
 * @method DOMDocument.createNamespace - Creates an Namespace of the given name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  qualifiedName : string - The qualified name of the attribute.
 *
 * @return : DOMNamespace - The new Namespace object.
 */
DOMDocument.prototype.createNamespace = function DOMDocument_createNamespace(qualifiedName) {
  // create DOMNamespace specifying 'this' as ownerDocument
  var node  = new DOMNamespace(this);
  var qname = this.implementation._parseQName(qualifiedName);

  // assign values to properties (and aliases)
  node.nodeName     = qualifiedName
  node.prefix       = qname.prefix;
  node.localName    = qname.localName;
  node.name         = qualifiedName
  node.nodeValue    = "";

  return node;
};

/**
 * @method DOMDocument.getElementById - Return the Element whose ID is given by elementId
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  elementId : string - The unique ID of the Element
 *
 * @return : DOMElement - The requested DOMElement
 */
DOMDocument.prototype.getElementById = function DOMDocument_getElementById(elementId) {
//  return this._ids[elementId];
  retNode = null;

  // loop through all Elements in the 'all' collection
  for (var i=0; i < this.all.length; i++) {
    var node = this.all[i];

    // if id matches & node is alive (ie, connected (in)directly to the documentElement)
    if ((node.id == elementId) && (node._isAncestor(node.ownerDocument.documentElement))) {
      retNode = node;
      break;
    }
  }

  return retNode;
};



/**
 * @method DOMDocument._genId - generate a unique internal id
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string - The unique (serial) id
 */
DOMDocument.prototype._genId = function DOMDocument__genId() {
  this._lastId += 1;                             // increment lastId (to generate unique id)

  return this._lastId;
};


/**
 * @method DOMDocument._isValidNamespace - test if Namespace is valid
 *  ie, not valid if;
 *    the qualifiedName is malformed, or
 *    the qualifiedName has a prefix and the namespaceURI is null, or
 *    the qualifiedName has a prefix that is "xml" and the namespaceURI is
 *     different from "http://www.w3.org/XML/1998/namespace" [Namespaces].
 *
 * @author Jon van Noort (jon@webarcana.com.au), David Joham (djoham@yahoo.com) and Scott Severtson
 *
 * @param  namespaceURI  : string - the namespace URI
 * @param  qualifiedName : string - the QName
 * @Param  isAttribute   : boolean - true, if the requesting node is an Attr
 *
 * @return : boolean
 */
DOMDocument.prototype._isValidNamespace = function DOMDocument__isValidNamespace(namespaceURI, qualifiedName, isAttribute) {

  if (this._performingImportNodeOperation == true) {
    //we're doing an importNode operation (or a cloneNode) - in both cases, there
    //is no need to perform any namespace checking since the nodes have to have been valid
    //to have gotten into the DOM in the first place
    return true;
  }

  var valid = true;
  // parse QName
  var qName = this.implementation._parseQName(qualifiedName);


  //only check for namespaces if we're finished parsing
  if (this._parseComplete == true) {

    // if the qualifiedName is malformed
    if (qName.localName.indexOf(":") > -1 ){
        valid = false;
    }

    if ((valid) && (!isAttribute)) {
        // if the namespaceURI is not null
        if (!namespaceURI) {
        valid = false;
        }
    }

    // if the qualifiedName has a prefix
    if ((valid) && (qName.prefix == "")) {
        valid = false;
    }

  }

  // if the qualifiedName has a prefix that is "xml" and the namespaceURI is
  //  different from "http://www.w3.org/XML/1998/namespace" [Namespaces].
  if ((valid) && (qName.prefix == "xml") && (namespaceURI != "http://www.w3.org/XML/1998/namespace")) {
    valid = false;
  }

  return valid;
}

/**
 * @method DOMDocument.toString - Serialize the document into an XML string
 *
 * @author David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMDocument.prototype.toString = function DOMDocument_toString() {
  return "" + this.childNodes;
} // end function getXML


/**
 * @class  DOMElement - By far the vast majority of objects (apart from text) that authors encounter
 *   when traversing a document are Element nodes.
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMElement = function(ownerDocument) {
  this._class = addClass(this._class, "DOMElement");
  this.DOMNode  = DOMNode;
  this.DOMNode(ownerDocument);

  this.tagName = "";                             // The name of the element.
  this.id = "";                                  // the ID of the element

  this.nodeType = DOMNode.ELEMENT_NODE;
};
DOMElement.prototype = new DOMNode;

/**
 * @method DOMElement.getTagName - Java style gettor for .TagName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMElement.prototype.getTagName = function DOMElement_getTagName() {
  return this.tagName;
};

/**
 * @method DOMElement.getAttribute - Retrieves an attribute value by name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - The name of the attribute to retrieve
 *
 * @return : string - The Attr value as a string, or the empty string if that attribute does not have a specified value.
 */
DOMElement.prototype.getAttribute = function DOMElement_getAttribute(name) {
  var ret = "";

  // if attribute exists, use it
  var attr = this.attributes.getNamedItem(name);

  if (attr) {
    ret = attr.value;
  }

  return ret; // if Attribute exists, return its value, otherwise, return ""
};

/**
 * @method DOMElement.setAttribute - Retrieves an attribute value by name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name  : string - The name of the attribute to create or alter
 * @param  value : string - Value to set in string form
 *
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if the Attribute is readonly.
 */
DOMElement.prototype.setAttribute = function DOMElement_setAttribute(name, value) {
  // if attribute exists, use it
  var attr = this.attributes.getNamedItem(name);

  if (!attr) {
    attr = this.ownerDocument.createAttribute(name);  // otherwise create it
  }

  var value = new String(value);

  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if Attribute is readonly
    if (attr._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if the value string contains an illegal character
    if (!this.ownerDocument.implementation._isValidString(value)) {
      throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
    }
  }

  if (this.ownerDocument.implementation._isIdDeclaration(name)) {
    this.id = value;  // cache ID for getElementById()
  }

  // assign values to properties (and aliases)
  attr.value     = value;
  attr.nodeValue = value;

  // update .specified
  if (value.length > 0) {
    attr.specified = true;
  }
  else {
    attr.specified = false;
  }

  // add/replace Attribute in NamedNodeMap
  this.attributes.setNamedItem(attr);
};

/**
 * @method DOMElement.removeAttribute - Removes an attribute by name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name  : string - The name of the attribute to remove
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if the Attrbute is readonly.
 */
DOMElement.prototype.removeAttribute = function DOMElement_removeAttribute(name) {
  // delegate to DOMNamedNodeMap.removeNamedItem
  return this.attributes.removeNamedItem(name);
};

/**
 * @method DOMElement.getAttributeNode - Retrieves an Attr node by name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name  : string - The name of the attribute to remove
 *
 * @return : DOMAttr - The Attr node with the specified attribute name or null if there is no such attribute.
 */
DOMElement.prototype.getAttributeNode = function DOMElement_getAttributeNode(name) {
  // delegate to DOMNamedNodeMap.getNamedItem
  return this.attributes.getNamedItem(name);
};

/**
 * @method DOMElement.setAttributeNode - Adds a new attribute
 *   If an attribute with that name is already present in the element, it is replaced by the new one
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newAttr : DOMAttr - The attribute node to be attached
 *
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Element is readonly.
 * @throws : DOMException - INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object.
 *
 * @return : DOMAttr - If the newAttr attribute replaces an existing attribute with the same name,
 *   the previously existing Attr node is returned, otherwise null is returned.
 */
DOMElement.prototype.setAttributeNode = function DOMElement_setAttributeNode(newAttr) {
  // if this Attribute is an ID
  if (this.ownerDocument.implementation._isIdDeclaration(newAttr.name)) {
    this.id = newAttr.value;  // cache ID for getElementById()
  }

  // delegate to DOMNamedNodeMap.setNamedItem
  return this.attributes.setNamedItem(newAttr);
};

/**
 * @method DOMElement.removeAttributeNode - Removes the specified attribute
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  oldAttr  : DOMAttr - The Attr node to remove from the attribute list
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Element is readonly.
 * @throws : DOMException - INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object.
 *
 * @return : DOMAttr - The Attr node that was removed.
 */
DOMElement.prototype.removeAttributeNode = function DOMElement_removeAttributeNode(oldAttr) {
  // throw Exception if Attribute is readonly
  if (this.ownerDocument.implementation.errorChecking && oldAttr._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // get item index
  var itemIndex = this.attributes._findItemIndex(oldAttr._id);

  // throw Exception if node does not exist in this map
  if (this.ownerDocument.implementation.errorChecking && (itemIndex < 0)) {
    throw(new DOMException(DOMException.NOT_FOUND_ERR));
  }

  return this.attributes._removeChild(itemIndex);
};

/**
 * @method DOMElement.getAttributeNS - Retrieves an attribute value by namespaceURI and localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : string - The Attr value as a string, or the empty string if that attribute does not have a specified value.
 */
DOMElement.prototype.getAttributeNS = function DOMElement_getAttributeNS(namespaceURI, localName) {
  var ret = "";

  // delegate to DOMNAmedNodeMap.getNamedItemNS
  var attr = this.attributes.getNamedItemNS(namespaceURI, localName);


  if (attr) {
    ret = attr.value;
  }

  return ret;  // if Attribute exists, return its value, otherwise return ""
};

/**
 * @method DOMElement.setAttributeNS - Sets an attribute value by namespaceURI and localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  qualifiedName : string - the qualified name of the required node
 * @param  value        : string - Value to set in string form
 *
 * @throws : DOMException - INVALID_CHARACTER_ERR: Raised if the string contains an illegal character
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if the Attrbute is readonly.
 * @throws : DOMException - NAMESPACE_ERR: Raised if the Namespace is invalid
 */
DOMElement.prototype.setAttributeNS = function DOMElement_setAttributeNS(namespaceURI, qualifiedName, value) {
  // call DOMNamedNodeMap.getNamedItem
  var attr = this.attributes.getNamedItem(namespaceURI, qualifiedName);

  if (!attr) {  // if Attribute exists, use it
    // otherwise create it
    attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
  }

  var value = new String(value);

  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if Attribute is readonly
    if (attr._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if the Namespace is invalid
    if (!this.ownerDocument._isValidNamespace(namespaceURI, qualifiedName)) {
      throw(new DOMException(DOMException.NAMESPACE_ERR));
    }

    // throw Exception if the value string contains an illegal character
    if (!this.ownerDocument.implementation._isValidString(value)) {
      throw(new DOMException(DOMException.INVALID_CHARACTER_ERR));
    }
  }

  // if this Attribute is an ID
  if (this.ownerDocument.implementation._isIdDeclaration(name)) {
    this.id = value;  // cache ID for getElementById()
  }

  // assign values to properties (and aliases)
  attr.value     = value;
  attr.nodeValue = value;

  // update .specified
  if (value.length > 0) {
    attr.specified = true;
  }
  else {
    attr.specified = false;
  }

  // delegate to DOMNamedNodeMap.setNamedItem
  this.attributes.setNamedItemNS(attr);
};

/**
 * @method DOMElement.removeAttributeNS - Removes an attribute by namespaceURI and localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if the Attrbute is readonly.
 *
 * @return : DOMAttr
 */
DOMElement.prototype.removeAttributeNS = function DOMElement_removeAttributeNS(namespaceURI, localName) {
  // delegate to DOMNamedNodeMap.removeNamedItemNS
  return this.attributes.removeNamedItemNS(namespaceURI, localName);
};

/**
 * @method DOMElement.getAttributeNodeNS - Retrieves an Attr node by namespaceURI and localName
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : DOMAttr - The Attr node with the specified attribute name or null if there is no such attribute.
 */
DOMElement.prototype.getAttributeNodeNS = function DOMElement_getAttributeNodeNS(namespaceURI, localName) {
  // delegate to DOMNamedNodeMap.getNamedItemNS
  return this.attributes.getNamedItemNS(namespaceURI, localName);
};

/**
 * @method DOMElement.setAttributeNodeNS - Adds a new attribute
 *   If an attribute with that name is already present in the element, it is replaced by the new one
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  newAttr      : DOMAttr - the attribute node to be attached
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if the Attrbute is readonly.
 * @throws : DOMException - WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.
 * @throws : DOMException - INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object.
 *  The DOM user must explicitly clone Attr nodes to re-use them in other elements.
 *
 * @return : DOMAttr - If the newAttr attribute replaces an existing attribute with the same name,
 *   the previously existing Attr node is returned, otherwise null is returned.
 */
DOMElement.prototype.setAttributeNodeNS = function DOMElement_setAttributeNodeNS(newAttr) {
  // if this Attribute is an ID
  if ((newAttr.prefix == "") &&  this.ownerDocument.implementation._isIdDeclaration(newAttr.name)) {
    this.id = newAttr.value;  // cache ID for getElementById()
  }

  // delegate to DOMNamedNodeMap.setNamedItemNS
  return this.attributes.setNamedItemNS(newAttr);
};

/**
 * @method DOMElement.hasAttribute - Returns true if specified node exists
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  name : string - the name of the required node
 *
 * @return : boolean
 */
DOMElement.prototype.hasAttribute = function DOMElement_hasAttribute(name) {
  // delegate to DOMNamedNodeMap._hasAttribute
  return this.attributes._hasAttribute(name);
}

/**
 * @method DOMElement.hasAttributeNS - Returns true if specified node exists
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  namespaceURI : string - the namespace URI of the required node
 * @param  localName    : string - the local name of the required node
 *
 * @return : boolean
 */
DOMElement.prototype.hasAttributeNS = function DOMElement_hasAttributeNS(namespaceURI, localName) {
  // delegate to DOMNamedNodeMap._hasAttributeNS
  return this.attributes._hasAttributeNS(namespaceURI, localName);
}

/**
 * @method DOMElement.toString - Serialize this Element and its children into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMElement.prototype.toString = function DOMElement_toString() {
  var ret = "";

  // serialize namespace declarations
  var ns = this._namespaces.toString();
  if (ns.length > 0) ns = " "+ ns;

  // serialize Attribute declarations
  var attrs = this.attributes.toString();
  if (attrs.length > 0) attrs = " "+ attrs;

  // serialize this Element
  ret += "<" + this.nodeName + ns + attrs +">";
  ret += this.childNodes.toString();;
  ret += "</" + this.nodeName+">";

  return ret;
}

/**
 * @class  DOMAttr - The Attr interface represents an attribute in an Element object
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMAttr = function(ownerDocument) {
  this._class = addClass(this._class, "DOMAttr");
  this.DOMNode = DOMNode;
  this.DOMNode(ownerDocument);

  this.name      = "";                           // the name of this attribute

  // If this attribute was explicitly given a value in the original document, this is true; otherwise, it is false.
  // Note that the implementation is in charge of this attribute, not the user.
  // If the user changes the value of the attribute (even if it ends up having the same value as the default value)
  // then the specified flag is automatically flipped to true
  // (I wish! You will need to use setValue to 'automatically' update specified)
  this.specified = false;

  this.value     = "";                           // the value of the attribute is returned as a string

  this.nodeType  = DOMNode.ATTRIBUTE_NODE;

  this.ownerElement = null;                      // set when Attr is added to NamedNodeMap

  // disable childNodes
  this.childNodes = null;
  this.attributes = null;
};
DOMAttr.prototype = new DOMNode;

/**
 * @method DOMAttr.getName - Java style gettor for .name
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMAttr.prototype.getName = function DOMAttr_getName() {
  return this.nodeName;
};

/**
 * @method DOMAttr.getSpecified - Java style gettor for .specified
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : boolean
 */
DOMAttr.prototype.getSpecified = function DOMAttr_getSpecified() {
  return this.specified;
};

/**
 * @method DOMAttr.getValue - Java style gettor for .value
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMAttr.prototype.getValue = function DOMAttr_getValue() {
  return this.nodeValue;
};

/**
 * @method DOMAttr.setValue - Java style settor for .value
 *   alias for DOMAttr.setNodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  value : string - the new attribute value
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Attribute is readonly.
 */
DOMAttr.prototype.setValue = function DOMAttr_setValue(value) {
  // throw Exception if Attribute is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // delegate to setNodeValue
  this.setNodeValue(value);
};

/**
 * @method DOMAttr.setNodeValue - Java style settor for .nodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  value : string - the new attribute value
 */
DOMAttr.prototype.setNodeValue = function DOMAttr_setNodeValue(value) {
  this.nodeValue = new String(value);
  this.value     = this.nodeValue;
  this.specified = (this.value.length > 0);
};

/**
 * @method DOMAttr.toString - Serialize this Attr into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMAttr.prototype.toString = function DOMAttr_toString() {
  var ret = "";

  // serialize Attribute
  ret += this.nodeName +"=\""+ this.__escapeString(this.nodeValue) +"\"";

  return ret;
}

DOMAttr.prototype.getOwnerElement = function() {

    return this.ownerElement;

}

/**
 * @class  DOMNamespace - The Namespace interface represents an namespace in an Element object
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMNamespace = function(ownerDocument) {
  this._class = addClass(this._class, "DOMNamespace");
  this.DOMNode = DOMNode;
  this.DOMNode(ownerDocument);

  this.name      = "";                           // the name of this attribute

  // If this attribute was explicitly given a value in the original document, this is true; otherwise, it is false.
  // Note that the implementation is in charge of this attribute, not the user.
  // If the user changes the value of the attribute (even if it ends up having the same value as the default value)
  // then the specified flag is automatically flipped to true
  // (I wish! You will need to use _setValue to 'automatically' update specified)
  this.specified = false;

  this.value     = "";                           // the value of the attribute is returned as a string

  this.nodeType  = DOMNode.NAMESPACE_NODE;
};
DOMNamespace.prototype = new DOMNode;

/**
 * @method DOMNamespace.getValue - Java style gettor for .value
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMNamespace.prototype.getValue = function DOMNamespace_getValue() {
  return this.nodeValue;
};

/**
 * @method DOMNamespace.setValue - utility function to set value (rather than direct assignment to .value)
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  value : string - the new namespace value
 */
DOMNamespace.prototype.setValue = function DOMNamespace_setValue(value) {
  // assign values to properties (and aliases)
  this.nodeValue = new String(value);
  this.value     = this.nodeValue;
};

/**
 * @method DOMNamespace.toString - Serialize this Attr into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMNamespace.prototype.toString = function DOMNamespace_toString() {
  var ret = "";

  // serialize Namespace Declaration
  if (this.nodeName != "") {
    ret += this.nodeName +"=\""+ this.__escapeString(this.nodeValue) +"\"";
  }
  else {  // handle default namespace
    ret += "xmlns=\""+ this.__escapeString(this.nodeValue) +"\"";
  }

  return ret;
}

/**
 * @class  DOMCharacterData - parent abstract class for DOMText and DOMComment
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMCharacterData = function(ownerDocument) {
  this._class = addClass(this._class, "DOMCharacterData");
  this.DOMNode  = DOMNode;
  this.DOMNode(ownerDocument);

  this.data   = "";
  this.length = 0;
};
DOMCharacterData.prototype = new DOMNode;

/**
 * @method DOMCharacterData.getData - Java style gettor for .data
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMCharacterData.prototype.getData = function DOMCharacterData_getData() {
  return this.nodeValue;
};

/**
 * @method DOMCharacterData.setData - Java style settor for .data
 *  alias for DOMCharacterData.setNodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - the character data
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Attribute is readonly.
 */
DOMCharacterData.prototype.setData = function DOMCharacterData_setData(data) {
  // delegate to setNodeValue
  this.setNodeValue(data);
};

/**
 * @method DOMCharacterData.setNodeValue - Java style settor for .nodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - the node value
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Attribute is readonly.
 */
DOMCharacterData.prototype.setNodeValue = function DOMCharacterData_setNodeValue(data) {
  // throw Exception if Attribute is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // assign values to properties (and aliases)
  this.nodeValue = new String(data);
  this.data   = this.nodeValue;

  // update length
  this.length = this.nodeValue.length;
};

/**
 * @method DOMCharacterData.getLength - Java style gettor for .length
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMCharacterData.prototype.getLength = function DOMCharacterData_getLength() {
  return this.nodeValue.length;
};

/**
 * @method DOMCharacterData.substringData - Extracts a range of data from the node
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  offset : int - Start offset of substring to extract
 * @param  count  : int - The number of characters to extract
 *
 * @throws : DOMException - INDEX_SIZE_ERR: Raised if specified offset is negative or greater than the number of 16-bit units in data,
 *
 * @return : string - The specified substring.
 *   If the sum of offset and count exceeds the length, then all characters to the end of the data are returned.
 */
DOMCharacterData.prototype.substringData = function DOMCharacterData_substringData(offset, count) {
  var ret = null;

  if (this.data) {
    // throw Exception if offset is negative or greater than the data length,
    // or the count is negative
    if (this.ownerDocument.implementation.errorChecking && ((offset < 0) || (offset > this.data.length) || (count < 0))) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }

    // if count is not specified
    if (!count) {
      ret = this.data.substring(offset); // default to 'end of string'
    }
    else {
      ret = this.data.substring(offset, offset + count);
    }
  }

  return ret;
};

/**
 * @method DOMCharacterData.appendData - Append the string to the end of the character data of the node.
 *   Upon success, data provides access to the concatenation of data and the DOMString specified.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  arg : string - The string to append
 *
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this CharacterData is readonly.
 */
DOMCharacterData.prototype.appendData    = function DOMCharacterData_appendData(arg) {
  // throw Exception if DOMCharacterData is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // append data
  this.setData(""+ this.data + arg);
};

/**
 * @method DOMCharacterData.insertData - Insert a string at the specified character offset.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  offset : int    - The character offset at which to insert
 * @param  arg    : string - The string to insert
 *
 * @throws : DOMException - INDEX_SIZE_ERR: Raised if specified offset is negative or greater than the number of 16-bit units in data,
 *   or if the specified count is negative.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this CharacterData is readonly.
 */
DOMCharacterData.prototype.insertData    = function DOMCharacterData_insertData(offset, arg) {
  // throw Exception if DOMCharacterData is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  if (this.data) {
    // throw Exception if offset is negative or greater than the data length,
    if (this.ownerDocument.implementation.errorChecking && ((offset < 0) || (offset >  this.data.length))) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }

    // insert data
    this.setData(this.data.substring(0, offset).concat(arg, this.data.substring(offset)));
  }
  else {
    // throw Exception if offset is negative or greater than the data length,
    if (this.ownerDocument.implementation.errorChecking && (offset != 0)) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }

    // set data
    this.setData(arg);
  }
};

/**
 * @method DOMCharacterData.deleteData - Remove a range of characters from the node.
 *   Upon success, data and length reflect the change
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  offset : int - The offset from which to remove characters
 * @param  count  : int - The number of characters to delete.
 *   If the sum of offset and count exceeds length then all characters from offset to the end of the data are deleted
 *
 * @throws : DOMException - INDEX_SIZE_ERR: Raised if specified offset is negative or greater than the number of 16-bit units in data,
 *   or if the specified count is negative.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this CharacterData is readonly.
 */
DOMCharacterData.prototype.deleteData    = function DOMCharacterData_deleteData(offset, count) {
  // throw Exception if DOMCharacterData is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  if (this.data) {
    // throw Exception if offset is negative or greater than the data length,
    if (this.ownerDocument.implementation.errorChecking && ((offset < 0) || (offset >  this.data.length) || (count < 0))) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }

    // delete data
    if(!count || (offset + count) > this.data.length) {
      this.setData(this.data.substring(0, offset));
    }
    else {
      this.setData(this.data.substring(0, offset).concat(this.data.substring(offset + count)));
    }
  }
};

/**
 * @method DOMCharacterData.replaceData - Replace the characters starting at the specified character offset with the specified string
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  offset : int    - The offset from which to start replacing
 * @param  count  : int    - The number of characters to replace.
 *   If the sum of offset and count exceeds length, then all characters to the end of the data are replaced
 * @param  arg    : string - The string with which the range must be replaced
 *
 * @throws : DOMException - INDEX_SIZE_ERR: Raised if specified offset is negative or greater than the number of 16-bit units in data,
 *   or if the specified count is negative.
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this CharacterData is readonly.
 */
DOMCharacterData.prototype.replaceData   = function DOMCharacterData_replaceData(offset, count, arg) {
  // throw Exception if DOMCharacterData is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  if (this.data) {
    // throw Exception if offset is negative or greater than the data length,
    if (this.ownerDocument.implementation.errorChecking && ((offset < 0) || (offset >  this.data.length) || (count < 0))) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }

    // replace data
    this.setData(this.data.substring(0, offset).concat(arg, this.data.substring(offset + count)));
  }
  else {
    // set data
    this.setData(arg);
  }
};

/**
 * @class  DOMText - The Text interface represents the textual content (termed character data in XML) of an Element or Attr.
 *   If there is no markup inside an element's content, the text is contained in a single object implementing the Text interface
 *   that is the only child of the element. If there is markup, it is parsed into a list of elements and Text nodes that form the
 *   list of children of the element.
 *
 * @extends DOMCharacterData
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMText = function(ownerDocument) {
  this._class = addClass(this._class, "DOMText");
  this.DOMCharacterData  = DOMCharacterData;
  this.DOMCharacterData(ownerDocument);

  this.nodeName  = "#text";
  this.nodeType  = DOMNode.TEXT_NODE;
};
DOMText.prototype = new DOMCharacterData;

/**
 * @method DOMText.splitText - Breaks this Text node into two Text nodes at the specified offset,
 *   keeping both in the tree as siblings. This node then only contains all the content up to the offset point.
 *   And a new Text node, which is inserted as the next sibling of this node, contains all the content at and after the offset point.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  offset : int - The offset at which to split, starting from 0.
 *
 * @throws : DOMException - INDEX_SIZE_ERR: Raised if specified offset is negative or greater than the number of 16-bit units in data,
 * @throws : DOMException - NO_MODIFICATION_ALLOWED_ERR: Raised if this Text is readonly.
 *
 * @return : DOMText - The new Text node
 */
DOMText.prototype.splitText = function DOMText_splitText(offset) {
  var data, inode;

  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if Node is readonly
    if (this._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if offset is negative or greater than the data length,
    if ((offset < 0) || (offset > this.data.length)) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }
  }

  if (this.parentNode) {
    // get remaining string (after offset)
    data  = this.substringData(offset);

    // create new TextNode with remaining string
    inode = this.ownerDocument.createTextNode(data);

    // attach new TextNode
    if (this.nextSibling) {
      this.parentNode.insertBefore(inode, this.nextSibling);
    }
    else {
      this.parentNode.appendChild(inode);
    }

    // remove remaining string from original TextNode
    this.deleteData(offset);
  }

  return inode;
};

/**
 * @method DOMText.toString - Serialize this Text into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMText.prototype.toString = function DOMText_toString() {
  return this.__escapeString(""+ this.nodeValue);
}

/**
 * @class  DOMCDATASection - CDATA sections are used to escape blocks of text containing characters that would otherwise be regarded as markup.
 *   The only delimiter that is recognized in a CDATA section is the "\]\]\>" string that ends the CDATA section
 *
 * @extends DOMCharacterData
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMCDATASection = function(ownerDocument) {
  this._class = addClass(this._class, "DOMCDATASection");
  this.DOMCharacterData  = DOMCharacterData;
  this.DOMCharacterData(ownerDocument);

  this.nodeName  = "#cdata-section";
  this.nodeType  = DOMNode.CDATA_SECTION_NODE;
};
DOMCDATASection.prototype = new DOMCharacterData;

/**
 * @method DOMCDATASection.splitText - Breaks this CDATASection node into two CDATASection nodes at the specified offset,
 *   keeping both in the tree as siblings. This node then only contains all the content up to the offset point.
 *   And a new CDATASection node, which is inserted as the next sibling of this node, contains all the content at and after the offset point.
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  offset : int - The offset at which to split, starting from 0.
 *
 * @return : DOMCDATASection - The new CDATASection node
 */
DOMCDATASection.prototype.splitText = function DOMCDATASection_splitText(offset) {
  var data, inode;

  // test for exceptions
  if (this.ownerDocument.implementation.errorChecking) {
    // throw Exception if Node is readonly
    if (this._readonly) {
      throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
    }

    // throw Exception if offset is negative or greater than the data length,
    if ((offset < 0) || (offset > this.data.length)) {
      throw(new DOMException(DOMException.INDEX_SIZE_ERR));
    }
  }

  if(this.parentNode) {
    // get remaining string (after offset)
    data  = this.substringData(offset);

    // create new CDATANode with remaining string
    inode = this.ownerDocument.createCDATASection(data);

    // attach new CDATANode
    if (this.nextSibling) {
      this.parentNode.insertBefore(inode, this.nextSibling);
    }
    else {
      this.parentNode.appendChild(inode);
    }

     // remove remaining string from original CDATANode
    this.deleteData(offset);
  }

  return inode;
};

/**
 * @method DOMCDATASection.toString - Serialize this CDATASection into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMCDATASection.prototype.toString = function DOMCDATASection_toString() {
  var ret = "";
  //do NOT unescape the nodeValue string in CDATA sections!
  ret += "<![CDATA[" + this.nodeValue + "\]\]\>";

  return ret;
}

/**
 * @class  DOMComment - This represents the content of a comment, i.e., all the characters between the starting '<!--' and ending '-->'
 *
 * @extends DOMCharacterData
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMComment = function(ownerDocument) {
  this._class = addClass(this._class, "DOMComment");
  this.DOMCharacterData  = DOMCharacterData;
  this.DOMCharacterData(ownerDocument);

  this.nodeName  = "#comment";
  this.nodeType  = DOMNode.COMMENT_NODE;
};
DOMComment.prototype = new DOMCharacterData;

/**
 * @method DOMComment.toString - Serialize this Comment into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMComment.prototype.toString = function DOMComment_toString() {
  var ret = "";

  ret += "<!--" + this.nodeValue + "-->";

  return ret;
}

/**
 * @class  DOMProcessingInstruction - The ProcessingInstruction interface represents a "processing instruction",
 *   used in XML as a way to keep processor-specific information in the text of the document
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMProcessingInstruction = function(ownerDocument) {
  this._class = addClass(this._class, "DOMProcessingInstruction");
  this.DOMNode  = DOMNode;
  this.DOMNode(ownerDocument);

  // The target of this processing instruction.
  // XML defines this as being the first token following the markup that begins the processing instruction.
  this.target = "";

  // The content of this processing instruction.
  // This is from the first non white space character after the target to the character immediately preceding the ?>
  this.data   = "";

  this.nodeType  = DOMNode.PROCESSING_INSTRUCTION_NODE;
};
DOMProcessingInstruction.prototype = new DOMNode;

/**
 * @method DOMProcessingInstruction.getTarget - Java style gettor for .target
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMProcessingInstruction.prototype.getTarget = function DOMProcessingInstruction_getTarget() {
  return this.nodeName;
};

/**
 * @method DOMProcessingInstruction.getData - Java style gettor for .data
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @return : string
 */
DOMProcessingInstruction.prototype.getData = function DOMProcessingInstruction_getData() {
  return this.nodeValue;
};

/**
 * @method DOMProcessingInstruction.setData - Java style settor for .data
 *   alias for DOMProcessingInstruction.setNodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - The new data of this processing instruction.
 */
DOMProcessingInstruction.prototype.setData = function DOMProcessingInstruction_setData(data) {
  // delegate to setNodeValue
  this.setNodeValue(data);
};

/**
 * @method DOMProcessingInstruction.setNodeValue - Java style settor for .nodeValue
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  data : string - The new data of this processing instruction.
 */
DOMProcessingInstruction.prototype.setNodeValue = function DOMProcessingInstruction_setNodeValue(data) {
  // throw Exception if DOMNode is readonly
  if (this.ownerDocument.implementation.errorChecking && this._readonly) {
    throw(new DOMException(DOMException.NO_MODIFICATION_ALLOWED_ERR));
  }

  // assign values to properties (and aliases)
  this.nodeValue = new String(data);
  this.data = this.nodeValue;
};

/**
 * @method DOMProcessingInstruction.toString - Serialize this ProcessingInstruction into an XML string
 *
 * @author Jon van Noort (jon@webarcana.com.au) and David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMProcessingInstruction.prototype.toString = function DOMProcessingInstruction_toString() {
  var ret = "";

  ret += "<?" + this.nodeName +" "+ this.nodeValue + " ?>";

  return ret;
}

/**
 * @class  DOMDocumentFragment - DocumentFragment is a "lightweight" or "minimal" Document object.
 *
 * @extends DOMNode
 *
 * @author Jon van Noort (jon@webarcana.com.au)
 *
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
DOMDocumentFragment = function(ownerDocument) {
  this._class = addClass(this._class, "DOMDocumentFragment");
  this.DOMNode = DOMNode;
  this.DOMNode(ownerDocument);

  this.nodeName  = "#document-fragment";
  this.nodeType = DOMNode.DOCUMENT_FRAGMENT_NODE;
};
DOMDocumentFragment.prototype = new DOMNode;

/**
 * @method DOMDocumentFragment.toString - Serialize this DocumentFragment into an XML string
 *
 * @author David Joham (djoham@yahoo.com)
 *
 * @return : string
 */
DOMDocumentFragment.prototype.toString = function DOMDocumentFragment_toString() {
  var xml = "";
  var intCount = this.getChildNodes().getLength();

  // create string concatenating the serialized ChildNodes
  for (intLoop = 0; intLoop < intCount; intLoop++) {
    xml += this.getChildNodes().item(intLoop).toString();
  }

  return xml;
}

///////////////////////
//  NOT IMPLEMENTED  //
///////////////////////
DOMDocumentType    = function() { alert("DOMDocumentType.constructor(): Not Implemented"   ); };
DOMEntity          = function() { alert("DOMEntity.constructor(): Not Implemented"         ); };
DOMEntityReference = function() { alert("DOMEntityReference.constructor(): Not Implemented"); };
DOMNotation        = function() { alert("DOMNotation.constructor(): Not Implemented"       ); };


Strings = new Object()
Strings.WHITESPACE = " \t\n\r";
Strings.QUOTES = "\"'";

Strings.isEmpty = function Strings_isEmpty(strD) {
    return (strD == null) || (strD.length == 0);
};
Strings.indexOfNonWhitespace = function Strings_indexOfNonWhitespace(strD, iB, iE) {
  if(Strings.isEmpty(strD)) return -1;
  iB = iB || 0;
  iE = iE || strD.length;

  for(var i = iB; i < iE; i++)
    if(Strings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
      return i;
    }
  return -1;
};
Strings.lastIndexOfNonWhitespace = function Strings_lastIndexOfNonWhitespace(strD, iB, iE) {
  if(Strings.isEmpty(strD)) return -1;
  iB = iB || 0;
  iE = iE || strD.length;

  for(var i = iE - 1; i >= iB; i--)
    if(Strings.WHITESPACE.indexOf(strD.charAt(i)) == -1)
      return i;
  return -1;
};
Strings.indexOfWhitespace = function Strings_indexOfWhitespace(strD, iB, iE) {
  if(Strings.isEmpty(strD)) return -1;
  iB = iB || 0;
  iE = iE || strD.length;

  for(var i = iB; i < iE; i++)
    if(Strings.WHITESPACE.indexOf(strD.charAt(i)) != -1)
      return i;
  return -1;
};
Strings.replace = function Strings_replace(strD, iB, iE, strF, strR) {
  if(Strings.isEmpty(strD)) return "";
  iB = iB || 0;
  iE = iE || strD.length;

  return strD.substring(iB, iE).split(strF).join(strR);
};
Strings.getLineNumber = function Strings_getLineNumber(strD, iP) {
  if(Strings.isEmpty(strD)) return -1;
  iP = iP || strD.length;

  return strD.substring(0, iP).split("\n").length
};
Strings.getColumnNumber = function Strings_getColumnNumber(strD, iP) {
  if(Strings.isEmpty(strD)) return -1;
  iP = iP || strD.length;

  var arrD = strD.substring(0, iP).split("\n");
  var strLine = arrD[arrD.length - 1];
  arrD.length--;
  var iLinePos = arrD.join("\n").length;

  return iP - iLinePos;
};


StringBuffer = function() {this._a=new Array();};
StringBuffer.prototype.append = function StringBuffer_append(d){this._a[this._a.length]=d;};
StringBuffer.prototype.toString = function StringBuffer_toString(){return this._a.join("");};


var atn2xmlTestMode = false;

//
// W3C DOM API extensions
//
DOMNode.prototype.addAttribute = function(name, val) {
  var self = this;
  var attrNode = self.getAttributeNode(name);
  if (!attrNode) {
    attrNode = self.getOwnerDocument().createAttribute(name);
  }
  attrNode.setValue(val);
  self.setAttributeNode(attrNode);
};
DOMDocument.prototype.addAttribute = DOMNode.prototype.addAttribute;
DOMElement.prototype.addAttribute  = DOMNode.prototype.addAttribute;

DOMNode.prototype.getChildNode = function(name) {
  var self = this;
  var children = self.getChildNodes();
  var childCnt = children.getLength();

  for (var i = 0; i < childCnt; i++) {
    var child = children.item(i);
    if (child.getNodeType() == DOMNode.ELEMENT_NODE &&
        child.getTagName() == name) {
      return child;
    }
  }
  return undefined;
};
DOMDocument.prototype.getChildNode = DOMNode.prototype.getChildNode;
DOMElement.prototype.getChildNode  = DOMNode.prototype.getChildNode;

DOMNode.prototype.getElements = function(name) {
  var self = this;
  var children = self.getChildNodes();
  var childCnt = children.getLength();
  var elements = [];

  for (var i = 0; i < childCnt; i++) {
    var child = children.item(i);
    if (child.getNodeType() == DOMNode.ELEMENT_NODE) {
      elements.push(child);
    }
  }
  return elements;
};
DOMDocument.prototype.getElements = DOMNode.prototype.getElements;
DOMElement.prototype.getElements  = DOMNode.prototype.getElements;

//
// The original DOMElement.getAttribute call return a String object, which
// causes all kinds of havoc. We wrap the method here to make sure it returns
// a string primitive
//
DOMElement.prototype._getAttribute = function(name) {
  var v = this._orig_getAttribute(name);
  return String(v);
};

if (DOMElement.prototype.getAttribute != DOMElement.prototype._getAttribute) {
  DOMElement.prototype._orig_getAttribute = DOMElement.prototype.getAttribute;
  DOMElement.prototype.getAttribute = DOMElement.prototype._getAttribute;;
}

// this is missing from the w3c api
DOMNode.prototype.getAttribute = function(name) {
  var ret = "";
  var attr = this.attributes.getNamedItem(name);
  if (attr) {
    ret = String(attr.value);
  }
  return ret; // if Attribute exists, return its value, otherwise, return ""
};

// this is missing from the w3c api
DOMNode.prototype.getTagName = function() {
  return this.tagName;
};


//
//================================== XMLWriter ================================
//
XMLWriter = function XMLWriter() {};


XMLWriter.toXML = function(obj, id, wrapObject) {
  var key = id;
  if (!key) key = obj.typename + "Object";

  var domdoc = new DOMDocument(new DOMImplementation());
  var node;
  if (wrapObject) {
    node = domdoc.createElement("ActionDocument");
    node.addAttribute("date", Stdlib.toISODateString());
    node.addAttribute("RcsId",
              "$Id$");
  } else {
    node = domdoc.createElement(obj.typename);
  }
  domdoc.appendChild(node);

  if (wrapObject) {
    node = XMLWriter.addChildNode(node, key, obj.typename, id);
  } else {
    node.addAttribute("key", key);
  }

  XMLWriter.write[obj.typename](node, key, obj);
  return domdoc;
};

XMLWriter.serialize = function(obj, id, wrapObject) {
  return XMLWriter.toXML(obj, id, wrapObject).toString();
};

XMLWriter.__serialize = function(id) {
  return XMLWriter.serialize(this, id);
};

XMLWriter.__toXML = function(id) {
  return XMLWriter.serialize(this, id);
};

ActionFile.prototype.serialize         = XMLWriter.__serialize;
ActionsPaletteFile.prototype.serialize = XMLWriter.__serialize;
ActionsPalette.prototype.serialize     = XMLWriter.__serialize;
Action.prototype.serialize             = XMLWriter.__serialize;
ActionDescriptor.prototype.serialize   = XMLWriter.__serialize;

ActionFile.prototype.toXML         = XMLWriter.__toXML;
ActionsPaletteFile.prototype.toXML = XMLWriter.__toXML;
ActionsPalette.prototype.toXML     = XMLWriter.__toXML;
Action.prototype.toXML             = XMLWriter.__toXML;
ActionDescriptor.prototype.toXML   = XMLWriter.__toXML;

XMLWriter.addChildNode = function(parent, key, tag, id) {
  tag = tag.toString();
  var node = parent.getOwnerDocument().createElement(tag);
  parent.appendChild(node);

  if (key == undefined) {
    key = id;
  }
  if (key != undefined) {
    if (key && isNaN(key)) {
      node.addAttribute("key", key);
    } else {
      node.addAttribute("key", new Number(key));
    }
  }

  if (id != undefined && !isNaN(id)) {
    node.addAttribute("id", id);

    var symname = PSConstants.reverseNameLookup(id);
    if (symname) {
      node.addAttribute("symname", symname);
    }

    var sym = PSConstants.reverseSymLookup(id);
    if (!sym) {
      sym = Stdlib.numberToAscii(id);
    }
    if (sym) {
      node.addAttribute("sym", sym);
    }
  }

  return node;
};

//
// XMLWriter.write is indexed via:
//    typename properties
//    DescValueTypes
//    ReferenceFormTypes
//
XMLWriter.write = {};

XMLWriter.write["ActionsPalette"] = function(node, key, obj) {
  var count = obj.getCount();
  node.addAttribute("name", obj.getName());
  node.addAttribute("count", count);
  
  for (var i = 0; i < count; i++) {
    var as = obj.byIndex(i);
    var child = XMLWriter.addChildNode(node, i+1, as.typename);

    XMLWriter.write[as.typename](child, undefined, as);
  }

  return node;
};
XMLWriter.write["ActionsPaletteFile"] = function(node, key, obj) {
  node.addAttribute("file", obj.getFile());
  node.addAttribute("version", new Number(obj.getVersion()));

  var ap = obj.getActionsPalette();
  var child = XMLWriter.addChildNode(node, undefined, ap.typename);

  XMLWriter.write[ap.typename](child, undefined, ap);
  return node;
};

XMLWriter.write["ActionFile"] = function(node, key, obj) {
  node.addAttribute("file", obj.getFile());
  var as = obj.getActionSet();
  var child = XMLWriter.addChildNode(node, undefined, as.typename);

  XMLWriter.write[as.typename](child, undefined, as);
  return node;
};
XMLWriter.write["ActionSet"] = function(node, key, obj) {
  node.addAttribute("version", obj.getVersion());
  node.addAttribute("name", obj.getName());
  node.addAttribute("expanded", new Boolean(obj.getExpanded()));
  node.addAttribute("count", new Number(obj.getCount()));

  //$.level = 1; debugger;
  var max = obj.getCount();
  for (var i = 0; i < max; i++) {
    var act = obj.byIndex(i);
    var child = XMLWriter.addChildNode(node, i+1, act.typename);
    XMLWriter.write[act.typename](child, i+1, act);
  }

  return node;
};
XMLWriter.write["Action"] = function(node, key, obj) {
  node.addAttribute("name", obj.getName());

  if (obj.getIndex()) {
    node.addAttribute("index", new Number(obj.getIndex()));
  }
  if (obj.getShiftKey()) {
    node.addAttribute("shiftKey", new Boolean(obj.getShiftKey()));
  }
  if (obj.getCommandKey()) {
    node.addAttribute("commandKey", new Boolean(obj.getCommandKey()));
  }
  if (obj.getColorIndex()) {
    node.addAttribute("colorIndex", new Number(obj.getColorIndex()));
  }
  node.addAttribute("expanded", new Boolean(obj.getExpanded()));
  node.addAttribute("count", new Number(obj.getCount()));

  //$.level = 1; debugger;
  var max = obj.getCount();
  for (var i = 0; i < max; i++) {
    var item = obj.byIndex(i);
    var child = XMLWriter.addChildNode(node, item.getIdentifier(), item.typename);
    XMLWriter.write[item.typename](child, item.getIdentifier(), item);
  }

  return node;
};
XMLWriter.write["ActionItem"] = function(node, key, obj) {
  node.addAttribute("expanded", new Boolean(obj.getExpanded()));
  node.addAttribute("enabled", new Boolean(obj.getEnabled()));
  node.addAttribute("withDialog", new Boolean(obj.getWithDialog()));
  node.addAttribute("dialogOptions", new Number(obj.getDialogOptions()));
  node.addAttribute("identifier", obj.getIdentifier());
  var ev = obj.getEvent();
  if (ev) node.addAttribute("event", ev);
  var iid = obj.getItemID();
  if (iid) node.addAttribute("itemID", iid);
  node.addAttribute("name", obj.getName());
  node.addAttribute("hasDescriptor", new Boolean(obj.containsDescriptor()));

  var desc = obj.getDescriptor();
  if (desc) {
    var key = (obj.getEvent() ? obj.getEvent() : obj.getItemID());
    var child = XMLWriter.addChildNode(node, key, desc.typename);
    XMLWriter.write[desc.typename](child, key, desc);
  }

  return node;
};
XMLWriter.write["ActionDescriptor"] = function(node, key, obj) {
  node.addAttribute("count", new Number(obj.count));

  for (var i = 0; i < obj.count; i++) {
    var k = obj.getKey(i);
    var t = obj.getType(k);
    //confirm("k = " + k + ", t = " + t);
    var child = XMLWriter.addChildNode(node, k, t, k);
    XMLWriter.write[t](child, k, obj, k);
  }

  return node;
};

XMLWriter.write[DescValueType.ALIASTYPE] = function(node, key, obj) {
  var f = obj.getPath(key);
  node.addAttribute("path", decodeURI(f.absoluteURI));
  return node;
};
XMLWriter.write[DescValueType.BOOLEANTYPE] = function(node, key, obj) {
  var v = obj.getBoolean(key);
  node.addAttribute("boolean", new Boolean(v));
  return node;
};
XMLWriter.write[DescValueType.CLASSTYPE] = function(node, key, obj) {
  var v = obj.getClass(key);
  node.addAttribute("classString", id2char(v));
  node.addAttribute("class", id2charId(v));
  return node;
};
XMLWriter.write[DescValueType.DOUBLETYPE] = function(node, key, obj) {
  var v = obj.getDouble(key);
  node.addAttribute("double", new Number(v));
  return node;
};
XMLWriter.write[DescValueType.ENUMERATEDTYPE] = function(node, key, obj) {
  var t = obj.getEnumerationType(key);
  var v = obj.getEnumerationValue(key);

  node.addAttribute("enumeratedTypeString", id2char(t));
  node.addAttribute("enumeratedType", id2charId(t));
  node.addAttribute("enumeratedValueString", id2char(v));
  node.addAttribute("enumeratedValue", id2charId(v));

  return node;
};
XMLWriter.write[DescValueType.INTEGERTYPE] = function(node, key, obj) {
  var v = obj.getInteger(key);
  node.addAttribute("integer", new Number(v));
  return node;
};
XMLWriter.write[DescValueType.LISTTYPE] = function(node, key, obj, id) {
  var list = obj.getList(key);
  var child = XMLWriter.addChildNode(node, key, list.typename, id);
  XMLWriter.write["ActionList"](child, key, list);

  return node;
};
XMLWriter.write[DescValueType.OBJECTTYPE] = function(node, key, obj, id) {
  var t = obj.getObjectType(key);
  var v = obj.getObjectValue(key);

  node.addAttribute("objectTypeString", id2char(t));
  node.addAttribute("objectType", id2charId(t));
  node.addAttribute("count", new Number(v.count));

  var child = XMLWriter.addChildNode(node, key, v.typename, id);
  XMLWriter.write["ActionDescriptor"](child, key, v);

  return node;
};
if (!isCS() && !isPS7()) {
  XMLWriter.write[DescValueType.RAWTYPE] = function(node, key, obj) {
    var v = obj.getData(key);
    var rawHex = Stdlib.binToHex(v, true);
    var txtNode = node.getOwnerDocument().createTextNode('\n' + rawHex + '\n');
    node.appendChild(txtNode);
//     node.addAttribute("data", rawHex);
    return node;
  };
}
XMLWriter.write[DescValueType.REFERENCETYPE] = function(node, key, obj, id) {
  var ref = obj.getReference(key);
  var child = XMLWriter.addChildNode(node, key, ref.typename, id);
  XMLWriter.write["ActionReference"](child, key, ref);
  return node;
};
XMLWriter.write[DescValueType.STRINGTYPE] = function(node, key, obj) {
  var v = obj.getString(key);
  node.addAttribute("string", v);
  return node;
};
XMLWriter.write[DescValueType.UNITDOUBLE] = function(node, key, obj) {
  var t = obj.getUnitDoubleType(key);
  var v = obj.getUnitDoubleValue(key);

  node.addAttribute("unitDoubleTypeString", id2char(t));
  node.addAttribute("unitDoubleType", id2charId(t));
  node.addAttribute("unitDoubleValue", new Number(v));

  return node;
};


XMLWriter.write["ActionReference"] = function(node, key, obj) {
  var ref = obj;
  var refCnt = 0;

  do {
    var t = undefined;
    var refItemId = undefined;
    try {
      t = ref.getForm();
      refItemId = ref.getDesiredClass();
    } catch (e) {
    }
    if (!t || !refItemId) {
      break;
    }
    refCnt++;
    var child = XMLWriter.addChildNode(node, refItemId, t, refItemId);
    XMLWriter.write[t](child, refItemId, ref);

    try { ref = ref.getContainer(); } catch (e) { ref = null; }
  } while (ref);

  node.addAttribute("count", refCnt);

  return node;

//   var t = obj.getForm();
//   node.addAttribute("form", t);
//   XMLWriter.write[t](node, id, obj);
};

XMLWriter.write[ReferenceFormType.CLASSTYPE] = function(node, key, obj) {
  var v = obj.getDesiredClass();
  node.addAttribute("classString", id2char(v));
  node.addAttribute("class", id2charId(v));

  return node;
};
XMLWriter.write[ReferenceFormType.ENUMERATED] = function(node, key, obj) {
  var c = obj.getDesiredClass();
  var t = obj.getEnumeratedType();
  var v = obj.getEnumeratedValue();

  node.addAttribute("desiredClassString", id2char(c));
  node.addAttribute("desiredClass", id2charId(c)); 
  node.addAttribute("enumeratedTypeString", id2char(t));
  node.addAttribute("enumeratedType", id2charId(t));
  node.addAttribute("enumeratedValueString", id2char(v));
  node.addAttribute("enumeratedValue", id2charId(v));

  return node;
};
XMLWriter.write[ReferenceFormType.IDENTIFIER] = function(node, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getIdentifier();

  node.addAttribute("desiredClassString", id2char(c));
  node.addAttribute("desiredClass", id2charId(c)); 
  node.addAttribute("identifier", v);

  return node;
};
XMLWriter.write[ReferenceFormType.INDEX] = function(node, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getIndex();

  node.addAttribute("desiredClassString", id2char(c));
  node.addAttribute("desiredClass", id2charId(c)); 
  node.addAttribute("index", new Number(v));

  return node;
};
XMLWriter.write[ReferenceFormType.NAME] = function(node, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getName();

  node.addAttribute("desiredClassString", id2char(c));
  node.addAttribute("desiredClass", id2charId(c)); 
  node.addAttribute("name", v);

  return node;
};
XMLWriter.write[ReferenceFormType.OFFSET] = function(node, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getOffset();

  node.addAttribute("desiredClassString", id2char(c));
  node.addAttribute("desiredClass", id2charId(c)); 
  node.addAttribute("offset", v);

  return node;
};
XMLWriter.write[ReferenceFormType.PROPERTY] = function(node, key, obj) {
  var c = obj.getDesiredClass();
  var v = obj.getProperty();

  node.addAttribute("desiredClassString", id2char(c));
  node.addAttribute("desiredClass", id2charId(c)); 
  node.addAttribute("property", v);
  var psym = PSConstants.reverseNameLookup(v);
  if (psym) {
    node.addAttribute("propertyName", psym);
  }
  node.addAttribute("propertySym", id2charId(v));

  return node;
};

XMLWriter.write["ActionList"] = function(node, key, obj) {
  node.addAttribute("count", new Number(obj.count));

  for (var i = 0; i < obj.count; i++) {
    var t = obj.getType(i);
    var child = XMLWriter.addChildNode(node, i, t);
    XMLWriter.write[t](child, i, obj);
  }

  return node;
};

//
//=============================== XMLReader ===================================
//
XMLReader = function XMLReader() {};

//
//
//
XMLReader.readXML = function(str) {
  return new DOMImplementation().loadXML(str);
};

//
//
//
XMLReader.deserialize = function(domdoc) {
  if (domdoc instanceof File) {
    domdoc = Stdlib.readFromFile(domdoc, "UTF-8");
  }
  if (domdoc.constructor == String) {
    var xmlstr = XMLReader.readXML(domdoc);
    delete domdoc;
    $.gc();
    domdoc = xmlstr;
  }
  var node = domdoc.getChildNode("ActionDocument");
  var objNode;

  if (node) {
    var elements = node.getElements();
    objNode = elements[0];
  } else {
    objNode = domdoc.getElements()[0];
  }
  var id = objNode.getAttribute("id");
  var tag = objNode.getTagName();
  var obj = XMLReader.read[tag](objNode, id);
  return obj;
};
XMLReader.__deserialize = function(xmlstr) {
  return XMLReader.deserialize(xmlstr);
};

ActionsPaletteFile.deserialize = XMLReader.__deserialize;
ActionFile.deserialize         = XMLReader.__deserialize;
ActionsPalette.deserialize     = XMLReader.__deserialize;
Action.deserialize             = XMLReader.__deserialize;
ActionDescriptor.deserialize   = XMLReader.__deserialize;

//
// XMLReader.read is indexed via:
//    typename properties
//    DescValueTypes
//    ReferenceFormTypes
//
XMLReader.read = {};
XMLReader.convertBoolean = function(b) {
  return b.toString() == "true";
};
XMLReader.convertNumber = function(n) {
  return (n == undefined) ? 0 : Number(n);
};
XMLReader.read["ActionsPaletteFile"] = function(node) {
  var apf = new ActionsPaletteFile();

  var v = node.getAttribute("file");
  if (v) apf.file = new File(v);

  apf.version = XMLReader.convertNumber(node.getAttribute("version"));

  var child = node.getElements()[0];
  apf.actionsPalette = XMLReader.read[child.getTagName()](child, apf);

  return apf;
};
XMLReader.read["ActionFile"] = function(node) {
  var af = new ActionFile();

  af.file = node.getAttribute("file");
  if (af.file) af.file = new File(af.file);

  var child = node.getElements()[0];
  af.actionSet = XMLReader.read[child.getTagName()](child, af);

  return af;
};
XMLReader.read["ActionsPalette"] = function(node, parent) {
  var ap = new ActionsPalette();

  ap.parent = parent;
  ap.name = node.getAttribute("name");
  ap.count = XMLReader.convertNumber(node.getAttribute("count"));
  ap.version = XMLReader.convertNumber(node.getAttribute("version"));

 var children = node.getElements();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var as = XMLReader.read[child.getTagName()](child, ap);
    ap.add(as);
  }

  return ap;
};
XMLReader.read["ActionSet"] = function(node, parent) {
  var as = new ActionSet();
  var v;

  as.parent = parent;
  as.name = node.getAttribute("name");
  as.count = XMLReader.convertNumber(node.getAttribute("count"));
  as.version = XMLReader.convertNumber(node.getAttribute("version"));
  as.expanded = XMLReader.convertBoolean(node.getAttribute("expanded"));

  //$.level = 1; debugger;

  var children = node.getElements();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var act = XMLReader.read[child.getTagName()](child, as);
    as.add(act);
  }

  return as;
};
XMLReader.read["Action"] = function(node, parent) {
  var act = new Action();
  var v;
 
  act.parent = parent;
  act.name = node.getAttribute("name");
  act.index = XMLReader.convertNumber(node.getAttribute("index"));
  act.shiftKey = XMLReader.convertBoolean(node.getAttribute("shiftKey"));
  act.commandKey = XMLReader.convertBoolean(node.getAttribute("commandKey"));
  act.colorIndex = XMLReader.convertNumber(node.getAttribute("colorIndex"));
  act.expanded = XMLReader.convertBoolean(node.getAttribute("expanded"));
  act.count = XMLReader.convertNumber(node.getAttribute("count"));
  
  var children = node.getElements();

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var ai = XMLReader.read[child.getTagName()](child, act);
    act.add(ai);
  }

  return act;
};
XMLReader.read["ActionItem"] = function(node, parent) {
  var ai = new ActionItem();
  var v;

  ai.parent = parent;

  ai.expanded = XMLReader.convertBoolean(node.getAttribute("expanded"));
  ai.enabled = XMLReader.convertBoolean(node.getAttribute("enabled"));
  ai.withDialog = XMLReader.convertBoolean(node.getAttribute("withDialog"));
  ai.dialogOptions =
     XMLReader.convertNumber(node.getAttribute("dialogOptions"));

  ai.identifier = node.getAttribute("identifier");
  ai.event = node.getAttribute("event");
  ai.itemID = node.getAttribute("itemID");
  ai.name = node.getAttribute("name");
  ai.hasDescriptor =
     XMLReader.convertBoolean(node.getAttribute("hasDescriptor"));

  if (ai.hasDescriptor) {
    var child = node.getElements()[0];
    ai.descriptor = XMLReader.read[child.getTagName()](child, ai);
  }

  return ai;
};

//
//=========================== ActionDescriptor ================================
//
XMLReader.read["ActionDescriptor"] = function(node, key, obj, type) {
  var ad = new ActionDescriptor();

  var children = node.getElements();
  // assert(children.length == count);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var ckey = child.getAttribute("key");
    XMLReader.read[child.getTagName()](child, ckey, ad);
  }

  // obj is currently undefined if this is a top-level ActionDescriptor
  if (obj) {
    if (key != undefined) {
      obj.putObject(key, type, ad);
    } else {
      obj.putObject(type, ad);
    }
  }
  return ad;
};

XMLReader.read[DescValueType.BOOLEANTYPE] = function(node, id, obj) {
  var v = node.getAttribute("boolean");
  obj.putBoolean(id, v == "true");
};

XMLReader.read[DescValueType.CLASSTYPE] = function(node, id, obj) {
  var v = node.getAttribute("class");
  obj.putClass(id, xTID(v));
};
XMLReader.read[DescValueType.DOUBLETYPE] = function(node, id, obj) {
  var v = node.getAttribute("double");
  obj.putDouble(id, v);
};
XMLReader.read[DescValueType.ENUMERATEDTYPE] = function(node, id, obj) {
  var t = node.getAttribute("enumeratedType");
  var v = node.getAttribute("enumeratedValue");
  obj.putEnumerated(id, xTID(t), xTID(v));
};
XMLReader.read[DescValueType.INTEGERTYPE] = function(node, id, obj) {
  var v = node.getAttribute("integer");
  obj.putInteger(id, v);
};
XMLReader.read[DescValueType.LISTTYPE] = function(node, id, obj) {
  var child = node.getChildNode("ActionList");
  XMLReader.read["ActionList"](child, id, obj);
};
XMLReader.read[DescValueType.OBJECTTYPE] = function(node, id, obj) {
  var type = node.getAttribute("objectType");
  var count = node.getAttribute("count");
  var child = node.getChildNode("ActionDescriptor");
  XMLReader.read["ActionDescriptor"](child, id, obj, xTID(type));
};
if (!isCS() && !isPS7()) {
  XMLReader.read[DescValueType.RAWTYPE] = function(node, id, obj) {
//     var v = node.getAttribute("data");
    var v = node.getContent();
    var raw = Stdlib.hexToBin(v);
    obj.putData(id, raw);
  };
}
XMLReader.read[DescValueType.ALIASTYPE] = function(node, id, obj) {
  var v = node.getAttribute("path");
  if (!v) {
    throw "path attribute missing for Alias type";
  }

  try {
    obj.putPath(id, new File(v));

  } catch (e) {
    var fname = v;
    var fld = "~/";
    if (v.contains('/')) {
      var m = v.match(/(.*)\/([^\/]+)$/);
      fld = m[1];
      if (!Stdlib.createFolder(fld)) {
        fld = "~/";
      } else {
        fld += '/';
      }
      fname = m[2];
    }
    obj.putPath(id, File(fld + fname));
  }
};
XMLReader.read[DescValueType.REFERENCETYPE] = function(node, id, obj) {
  var child = node.getChildNode("ActionReference");
  XMLReader.read["ActionReference"](child, id, obj);
};
XMLReader.read[DescValueType.STRINGTYPE] = function(node, id, obj) {
  var v = node.getAttribute("string");
  obj.putString(id, v);
};
XMLReader.read[DescValueType.UNITDOUBLE] = function(node, id, obj) {
  var t = node.getAttribute("unitDoubleType");
  var v = node.getAttribute("unitDoubleValue");
  obj.putUnitDouble(id, xTID(t), v);
};


//
//============================== ActionList ===================================
//
XMLReader.lread = {};
XMLReader.lread["ActionDescriptor"] = function(node, obj) {
  XMLReader.read["ActionDescriptor"](node, undefined, obj);
}
XMLReader.lread["ActionList"] = function(node, obj) {
  XMLReader.read["ActionList"](node, undefined, obj);
}
XMLReader.lread["ActionReference"] = function(node, obj) {
  XMLReader.read["ActionReference"](node, undefined, obj);
}

XMLReader.read["ActionList"] = function(node, id, obj) {
  var count = node.getAttribute("count");
  var children = node.getElements();
  
  var lst = new ActionList();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    XMLReader.lread[child.getTagName()](child, lst);
  }
  if (id) {
    obj.putList(id, lst);
  } else {
    obj.putList(lst);
  }
  return lst;
};
XMLReader.lread[DescValueType.BOOLEANTYPE] = function(node, obj) {
  var v = node.getAttribute("boolean");
  obj.putBoolean(v == "true");
};
XMLReader.lread[DescValueType.CLASSTYPE] = function(node, obj) {
  var v = node.getAttribute("class");
  obj.putClass(xTID(v));
};
XMLReader.lread[DescValueType.DOUBLETYPE] = function(node, obj) {
  var v = node.getAttribute("double");
  obj.putDouble(v);
};
XMLReader.lread[DescValueType.ENUMERATEDTYPE] = function(node, obj) {
  var t = node.getAttribute("enumeratedType");
  var v = node.getAttribute("enumeratedValue");
  obj.putEnumerated(xTID(t), xTID(v));
};
XMLReader.lread[DescValueType.INTEGERTYPE] = function(node, obj) {
  var v = node.getAttribute("integer");
  obj.putInteger(v);
};
XMLReader.lread[DescValueType.LISTTYPE] = function(node, obj) {
  var child = node.getChildNode("ActionList");
  XMLReader.read["ActionList"](child, undefined, obj);
};
XMLReader.lread[DescValueType.OBJECTTYPE] = function(node, obj) {
  var type = node.getAttribute("objectType");
  var count = node.getAttribute("count");
  var child = node.getChildNode("ActionDescriptor");
  XMLReader.read["ActionDescriptor"](child, undefined, obj, xTID(type));
};
if (!isCS() && !isPS7()) {
  XMLReader.lread[DescValueType.RAWTYPE] = function(node, obj) {
//     var v = node.getAttribute("data");
    var v = node.getContent();
    var raw = Stdlib.hexToBin(v);
    obj.putData(raw);
  };
}
XMLReader.lread[DescValueType.ALIASTYPE] = function(node, obj) {
  var v = node.getAttribute("path");
  obj.putPath(new File(v));
};
XMLReader.lread[DescValueType.REFERENCETYPE] = function(node, obj) {
  var child = node.getChildNode("ActionReference");
  XMLReader.read["ActionReference"](child, undefined, obj);
};
XMLReader.lread[DescValueType.STRINGTYPE] = function(node, obj) {
  var v = node.getAttribute("string");
  obj.putString(v);
};
XMLReader.lread[DescValueType.UNITDOUBLE] = function(node, obj) {
  var t = node.getAttribute("unitDoubleType");
  var v = node.getAttribute("unitDoubleValue");
  obj.putUnitDouble(xTID(t), v);
};


//
//============================ ActionReference ================================
//
XMLReader.read["ActionReference"] = function(node, id, obj) {
  var count = node.getAttribute("count");
  var children = node.getElements();

  var ref = new ActionReference();

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    XMLReader.read[child.getTagName()](child, ref);
  }

  if (id) {
    obj.putReference(id, ref);
  } else {
    obj.putReference(ref);
  }
  return ref;
};

XMLReader.read[ReferenceFormType.CLASSTYPE] = function(node, obj) {
  var v = node.getAttribute("class");
  obj.putClass(xTID(v));
};
XMLReader.read[ReferenceFormType.ENUMERATED] = function(node, obj) {
  var c = node.getAttribute("desiredClass"); 
  var t = node.getAttribute("enumeratedType"); 
  var v = node.getAttribute("enumeratedValue");
  obj.putEnumerated(xTID(c), xTID(t), xTID(v));
};
XMLReader.read[ReferenceFormType.IDENTIFIER] = function(node, obj) {
  var c = node.getAttribute("desiredClass"); 
  var v = node.getAttribute("identifier");
  obj.putIdentifier(xTID(c), v);
};
XMLReader.read[ReferenceFormType.INDEX] = function(node, obj) {
  var c = node.getAttribute("desiredClass"); 
  var v = node.getAttribute("index");
  obj.putIndex(xTID(c), v);
};
XMLReader.read[ReferenceFormType.NAME] = function(node, obj) {
  var c = node.getAttribute("desiredClass"); 
  var v = node.getAttribute("name");
  obj.putName(xTID(c), v);
};
XMLReader.read[ReferenceFormType.OFFSET] = function(node, obj) {
  var c = node.getAttribute("desiredClass"); 
  var v = node.getAttribute("offset");
  obj.putOffset(xTID(c), v);
};
XMLReader.read[ReferenceFormType.PROPERTY] = function(node, obj) {
  var c = node.getAttribute("desiredClass"); 
  var v = node.getAttribute("property");
  obj.putProperty(xTID(c), v);
};


var atn2xml_test;
if (atn2xmlTestMode && !atn2xml_test) {
  eval('//@include "xlib/xml/atn2xml-test.jsx";\r');
}

"atn2xml.jsx";
// EOF

//
ActionFileXmlOptions = function(obj) {
  Stdlib.copyFromTo(obj, this);
};
//var newPath = decodeURI(WhoAmI().parent);
function WhoAmI() {
var where;
	try {var F = FO;
		}catch( err ) {where = File(err.fileName);}
	return where;
}

ActionFileXmlOptions.prototype.typename = 'ActionFileXmlOptions';
ActionFileXmlOptions.prototype.source = atnXMLout;
ActionFileXmlOptions.prototype.outf = atnOut; 

ActionFileXmlUI = function() {
  var self = this;

  self.title = 'XML To Action File Converter';
  self.notesSize = 130;
  self.winRect = {
    x: 200,
    y: 200,
    w: 520,
    h: 290
  };
  self.documentation = 
    "This script converts an XML file to an Action File. If the name of the " +
    "Action file is not specified via the UI, the 'file' property of the " +
    "'ActionFile' node is used. If that is not specified, the name of the " + 
    "XML file is used with a '.atn' extension. Note that there is no formal " +
    "definition of the DOM used to describe PhotoShop Action files.";

  self.iniFile = "affxml.ini"
};

ActionFileXmlUI.prototype = new GenericUI();

ActionFileXmlUI.prototype.createPanel = function(pnl, ini) {
  var ini = new ActionFileXmlOptions(ini);

  var xOfs = 10;
  var yOfs = 10;
  var yy = yOfs;
  var xx = xOfs;

  pnl.add('statictext', [xx,yy,xx+80,yy+20], 'XML File:');
  xx += 80;
  pnl.source = pnl.add('edittext', [xx,yy,xx+320,yy+20], ini.source);
  xx += 330;
  pnl.sourceBrowse = pnl.add('button', [xx,yy,xx+25,yy+20], '...');

  yy += 35;
  xx = xOfs;

  pnl.add('statictext', [xx,yy,xx+80,yy+20], 'Action File:');
  xx += 80;
  pnl.outf = pnl.add('edittext', [xx,yy,xx+320,yy+20], ini.outf);
  xx += 330;
  pnl.outfBrowse = pnl.add('button', [xx,yy,xx+25,yy+20], '...');

  pnl.sourceBrowse.onClick = ActionFileXmlUI.sourceBrowse;
  pnl.outfBrowse.onClick = ActionFileXmlUI.outfBrowse; 

  return pnl;
};

// placing this in the above function causes an intepreter error
ActionFileXmlUI.sourceBrowse = function() {
  var pnl = this.parent;
  var fsel = Stdlib.createFileSelect("XML Files: *.xml,All Files:*");
  var file = Stdlib.selectFileOpen("Select an XML File",
                                   fsel,
                                   pnl.source.text);
  if (file) {
    pnl.source.text = decodeURI(file.fsName);

    if (!pnl.outf.text) {
      pnl.outf.text = pnl.source.text.replace(/\.xml/i, ".atn");
    }
  }
};
ActionFileXmlUI.outfBrowse = function() {
  var pnl = this.parent;
  var def = pnl.outf.text;
  if (!def && pnl.source.text) {
    def = Folder(pnl.source.text).parent;
  }
  var fsel = Stdlib.createFileSelect("Action Files: *.atn,All Files:*");
  var file = Stdlib.selectFileSave("Select an Action File",
                                   fsel, def);
  if (file) {
    pnl.outf.text = decodeURI(file.fsName);
  }
};

ActionFileXmlUI.prototype.validatePanel = function(pnl) {
  var self = this;

  try {
    var opts = new ActionFileXmlOptions();

    var f;
    if (pnl.source.text) {
      f = new File(pnl.source.text);
      if (!f.exists) {
        return self.errorPrompt("XML file not found");
      }
    } else {
      return self.errorPrompt("XML file must be specified");
    }
    opts.source = f;

    f = undefined;
    if (pnl.outf.text) {
      f = new File(pnl.outf.text);
    } else {
      var nm = opts.source.name.replace(/\.[^.]+$/, ".atn");
      f = new File(opts.source.path + '/' + nm);
    }
    if (!f.open("w")) {
      return self.errorPrompt("Unable to open Action file: " + f.error);
    }
    f.close();

    opts.outf = f;

    pnl.opts = opts;

  } catch (e) {
    alert("Validate: " + e.toSource());
    return false;
  }

  return opts;
};

ActionFileXmlUI.prototype.process = function(opts) {
  if (!opts) {
    return;
  }

  var start = new Date().getTime();
//   var xmlstr = Stdlib.readFromFile(opts.source, "UTF-8");
  var actFile = ActionFile.deserialize(Stdlib.convertFptr(opts.source));
  actFile.write(opts.outf);

  var stop = new Date().getTime();
  var elapsed = (stop - start)/1000;
//  alert("Done (" + Number(elapsed).toFixed(3) + " secs).");
};


function main() {
  if (isPS7() || isCS()) {
    alert("Because of missing Javascript APIs, reading binary action files " +
          "is currently only supported in CS2. Support for CS and possibly " +
          "PS7 may  become available in the future.");
    return;
  }

  var ui = new ActionFileXmlUI();
  ui.exec();
};
  var actFile = ActionFile.deserialize(Stdlib.convertFptr(ActionFileXmlOptions.prototype.source));
  actFile.write(ActionFileXmlOptions.prototype.outf);
//main();

"ActionFileFromXML.js";
// EOF
