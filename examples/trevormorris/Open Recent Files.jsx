// Open Recent Files - Adobe Photoshop Script
// Description: displays a Recent Files dialog; allows you to open multiple recent documents
// Requirements: Adobe Photoshop CS3, or higher
// Version: 0.2.0, 14/Feb/2014
// Author: Trevor Morris (trevor@morris-photographics.com)
// Website: http://morris-photographics.com/
// ============================================================================
// Installation:
// 1. Place script in:
//    PC(32):  C:\Program Files (x86)\Adobe\Adobe Photoshop CS#\Presets\Scripts\
//    PC(64):  C:\Program Files\Adobe\Adobe Photoshop CS# (64 Bit)\Presets\Scripts\
//    Mac:     <hard drive>/Applications/Adobe Photoshop CS#/Presets/Scripts/
// 2. Restart Photoshop
// 3. Choose File > Scripts > Open Recent Files
// ============================================================================

// enable double-clicking from Mac Finder or Windows Explorer
#target photoshop

// bring application forward for double-click events
app.bringToFront();

///////////////////////////////////////////////////////////////////////////////
// main - main function
///////////////////////////////////////////////////////////////////////////////
function main() {

	// the maximum number of recent files to display
	var maxFiles = 10;

	// get only existing recent files
	var recentItems = [];
	var len = recentFiles.length;
	for (var i = 0; i < len; i++) {
		recentFile = recentFiles[i];
		if (recentFile.exists) {
			recentItems.push(recentFile);
			if (recentItems.length == maxFiles) {
				break;
			}
		}
	}

	// check for recent files
	len = recentItems.length;
	if (!len) {
		alert('No recent files found.', 'No Recent Files', false);
		return;
	}

	// update maxFiles
	maxFiles = Math.min(maxFiles, len);

	// show Recent Files dialog
	var rfDialog = recentFilesDialog(recentItems, maxFiles);
	rfDialog.show();
}

///////////////////////////////////////////////////////////////////////////////
// recentFilesDialog - create the Recent Files dialog
///////////////////////////////////////////////////////////////////////////////
function recentFilesDialog(recentItems, maxFiles) {

	// dialog window
	var dlg = new Window('dialog');
	dlg.text = 'Open Recent Files';
	dlg.orientation = 'row';
	dlg.alignChildren = 'top';

	// recent items panel	
	var panel = dlg.add('panel');
	panel.text = 'Recent Files';
	panel.alignChildren = 'left';

	// recent items checkboxes
	var cb, rf;
	var checkboxes = [];
	for (var i = 0; i < maxFiles; i++) {
		rf = recentItems[i];
		cb = panel.add('checkbox');
		cb.text = ' ' + decodeURI(rf.name);
		cb.helpTip = rf.fsName;
		checkboxes.push(cb);
	}

	// buttons
	var buttons = dlg.add('group');
	buttons.orientation = 'column';
	buttons.alignChildren = 'fill';

	// 'check all' button
	var checkAll = buttons.add('button');
	checkAll.text = 'Check All';
	checkAll.onClick = function() {
		toggleCheckBoxes(true);
	};

	// 'check none' button
	var checkNone = buttons.add('button');
	checkNone.text = 'Check None';
	checkNone.onClick = function() {
		toggleCheckBoxes(false);
	};

	// spacer
	var spacer = buttons.add('group');
	spacer.preferredSize.height = 10;

	// ok button
	var okBtn = buttons.add('button');
	okBtn.text = 'OK';
	okBtn.onClick = function() {
		dlg.close(1);
		openCheckedItems();
	};

	// cancel button
	var cancelBtn = buttons.add('button');
	cancelBtn.text = 'Cancel';
	cancelBtn.onClick = function() {
		dlg.close(2);
	};

	// dialog properties
	dlg.defaultElement = okBtn;
	dlg.cancelElement = cancelBtn;
	return dlg;

	// toggle checkboxes on/off
	function toggleCheckBoxes(enabled) {
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].value = enabled;
		}
	}

	// open checked files
	function openCheckedItems() {
		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].value) {
				openFile(recentItems[i]);
			}
		}
	}
}

///////////////////////////////////////////////////////////////////////////////
// openFile - open the selected file
///////////////////////////////////////////////////////////////////////////////
function openFile(file) {
	try {
		open(file);
	}
	catch(e) {
		alert('Unable to open file:\r' + file.fsName, 'File Open Error', true);
	}
}

///////////////////////////////////////////////////////////////////////////////
// isCorrectVersion - check for Adobe Photoshop CS3 (v10) or higher
///////////////////////////////////////////////////////////////////////////////
function isCorrectVersion() {
	if (parseInt(version, 10) >= 10) {
		return true;
	}
	else {
		alert('This script requires Adobe Photoshop CS3 or higher.', 'Wrong Version', false);
		return false;
	}
}

///////////////////////////////////////////////////////////////////////////////
// showError - display error message if something goes wrong
///////////////////////////////////////////////////////////////////////////////
function showError(err) {
	if (confirm('An unknown error has occurred.\n' +
		'Would you like to see more information?', true, 'Unknown Error')) {
			alert(err + ': on line ' + err.line, 'Script Error', true);
	}
}

// test initial conditions prior to running main function
if (isCorrectVersion()) {
	try {
		main();
	}
	// don't report error on user cancel
	catch(e) {
		if (e.number != 8007) {
			showError(e);
		}
	}
}
