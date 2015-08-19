// Toggle Pixel Grid Snapping - Adobe Photoshop Script
// Description: toggle "Snap to Pixel Grid" on/off
// Requirements: Adobe Photoshop CS6, or higher
// Version: 0.2.0, 15/Nov/2013
// Author: Trevor Morris (trevor@morris-photographics.com)
// Website: http://morris-photographics.com/
// ============================================================================
// Installation:
// 1. Place script in:
//    PC(32):  C:\Program Files (x86)\Adobe\Adobe Photoshop CS#\Presets\Scripts\
//    PC(64):  C:\Program Files\Adobe\Adobe Photoshop CS# (64 Bit)\Presets\Scripts\
//    Mac:     <hard drive>/Applications/Adobe Photoshop CS#/Presets/Scripts/
// 2. Restart Photoshop
// 3. Choose File > Scripts > Toggle Pixel Grid Snapping
// ============================================================================

// enable double-clicking from Mac Finder or Windows Explorer
#target photoshop

// bring application forward for double-click events
app.bringToFront();

// test initial conditions prior to running main function
if (isRequiredVersion()) {
	toggleSnapToPixelGrid();
}

///////////////////////////////////////////////////////////////////////////////
// toggleSnapToPixelGrid - toggle "Snap to Pixel Grid" on/off
///////////////////////////////////////////////////////////////////////////////
function toggleSnapToPixelGrid() {
	var snapEnabled = !snapToPixelGridEnabled();
	var desc1 = new ActionDescriptor();
	var ref1 = new ActionReference();
	ref1.putProperty(cTID('Prpr'), cTID('GnrP'));
	ref1.putEnumerated(cTID('capp'), cTID('Ordn'), cTID('Trgt'));
	desc1.putReference(cTID('null'), ref1);
	var desc2 = new ActionDescriptor();
	desc2.putBoolean(sTID('transformsSnapToPixels'), snapEnabled);
	desc2.putBoolean(sTID('vectorSelectionModifiesLayerSelection'), true);
	desc1.putObject(cTID('T   '), cTID('GnrP'), desc2);
	try {
		executeAction(cTID('setd'), desc1, DialogModes.NO);
	}
	catch(e) {
		// something went wrong...
		return;
	}

	// play system beep when snap is enabled
	if (snapEnabled) {
		app.beep();
	}
}

///////////////////////////////////////////////////////////////////////////////
// snapToPixelGridEnabled - check if "Snap to Pixel Grid" is enabled
///////////////////////////////////////////////////////////////////////////////
function snapToPixelGridEnabled() {
	var ref = new ActionReference();
	ref.putProperty(cTID('Prpr'), cTID('GnrP'));
	ref.putEnumerated(cTID('capp'), cTID('Ordn'), cTID('Trgt'));
	var desc = executeActionGet(ref);
	var gnrp = desc.getObjectValue(cTID('GnrP'));
	return gnrp.getBoolean(sTID('transformsSnapToPixels'));
}

///////////////////////////////////////////////////////////////////////////////
// isRequiredVersion - check for the required version of Adobe Photoshop
///////////////////////////////////////////////////////////////////////////////
function isRequiredVersion() {
	if (parseInt(version, 10) >= 13) {
		return true;
	}
	else {
		alert('This script requires Adobe Photoshop CS6 or higher.', 'Wrong version', false);
		return false;
	}
}

function cTID(s) {return app.charIDToTypeID(s);}
function sTID(s) {return app.stringIDToTypeID(s);}
