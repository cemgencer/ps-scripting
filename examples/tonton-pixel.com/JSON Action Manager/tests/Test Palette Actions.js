﻿/*

<javascriptresource>
<name>Test Palette Actions...</name>
<category>JSON Action Manager Tests</category>
</javascriptresource>

*/

//------------------------------------------------------------------------------
// File: Test Palette Actions.js
// Version: 4.4
// Release Date: 2014-11-24
// Copyright: © 2011-2014 Michel MARIANI <http://www.tonton-pixel.com/blog/>
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

//@includepath "~/JSON Action Manager/"
//@include "jamEngine.jsxinc"
//@include "jamUtils.jsxinc"

//------------------------------------------------------------------------------

// Used to locate the test image and the actions file
Folder.current = new Folder ("~/JSON Action Manager/tests/resources/");

//------------------------------------------------------------------------------

var useDom = true;

//------------------------------------------------------------------------------

jamEngine.meaningfulIds = true;

var actionsFilePath = "Cross Processing.atn";
var actionSet = "Cross Processing";
jamUtils.loadActionSet (actionSet, actionsFilePath);
var actions = [ ];
var resultObj = jamEngine.jsonGet ([ { "actionSet": { "<name>": actionSet } } ]);
var actionCount = resultObj["numberOfChildren"]["<integer>"];
for (actionIndex = 0; actionIndex < actionCount; actionIndex++)
{
    resultObj = jamEngine.jsonGet ([ { "action": { "<index>": actionIndex + 1 } }, { "actionSet": { "<name>": actionSet } } ]);
    actions.push (resultObj["name"]["<string>"]);
}
var desiredAction = actions[0];
var allActions = "*All*";
var reverseAllDocs = true;

//------------------------------------------------------------------------------

function getParameters ()
{
    var dialogWidth = 240;
    var dialogHeight = 300; // Dynamically adjusted anyway
    var dialogPadding = [ 15, 15 ];
    var panelPadding = [ 15, 15 ];
    var buttonWidth = 80;
    var buttonHeight = 20;
    var buttonGap = 5;
    var extraGap = (appVersion > 8) ? 0 : 12;
    var dlg = new Window ('dialog', "Test Palette Actions", [ 0, 0, dialogWidth, dialogHeight ]);
    dlg.btnPnl = dlg.add ('panel', [ dialogPadding[0], dialogPadding[1], dialogWidth - dialogPadding[0], dialogHeight - dialogPadding[1] ], actionSet);
    dlg.btnPnl.horizBtn = [ ];
    var y = panelPadding[1] + extraGap;
    var count = actions.length;
    for (var i = 0; i < count; i++)
    {
        dlg.btnPnl.horizBtn.push (dlg.btnPnl.add ('radiobutton', [ panelPadding[0], y, (dlg.btnPnl.bounds.right - dlg.btnPnl.bounds.left) - panelPadding[0], y + buttonHeight ], actions[i]));
        y += buttonHeight + buttonGap;
    }
    dlg.btnPnl.horizBtn.push (dlg.btnPnl.add ('radiobutton', [ panelPadding[0], y, (dlg.btnPnl.bounds.right - dlg.btnPnl.bounds.left) - panelPadding[0], y + buttonHeight ], allActions));
    y += buttonHeight + buttonGap;
    var count = dlg.btnPnl.horizBtn.length;
    for (var i = 0; i < count; i++)
    {
        var radbut = dlg.btnPnl.horizBtn[i];
        radbut.value = (radbut.text === desiredAction);
        radbut.onClick = function () { desiredAction = this.text; };
    }
    dlg.btnPnl.bounds.bottom = dlg.btnPnl.bounds.top + y + panelPadding[1];
    dlg.bounds.bottom = dlg.bounds.top + dialogPadding[1] + (dlg.btnPnl.bounds.bottom - dlg.btnPnl.bounds.top) + dialogPadding[1] + buttonHeight + dialogPadding[1];
    dlg.cancelBtn = dlg.add ('button', [ dialogPadding[0], dlg.bounds.bottom - dialogPadding[1] - buttonHeight, dialogPadding[0] + buttonWidth, dlg.bounds.bottom - dialogPadding[1] ], 'Cancel', { name: "cancel" });
    dlg.cancelBtn.onClick = function () { this.parent.close (false); };
    dlg.OKBtn = dlg.add ('button', [ dlg.bounds.right - dialogPadding[0] - buttonWidth, dlg.bounds.bottom - dialogPadding[1] - buttonHeight, dlg.bounds.right - dialogPadding[0], dlg.bounds.bottom - dialogPadding[1] ], 'OK', { name: "ok" });
    dlg.OKBtn.onClick = function () { this.parent.close (true); };
    dlg.center ();
    return dlg.show ();
}

//------------------------------------------------------------------------------

function processAction (action)
{
    jamEngine.jsonPlay
    (
        "duplicate",
        {
            "target": { "<reference>": [ { "document": { "<enumerated>": { "ordinal": "first" } } } ] },
            "name": { "<string>": "Test Palette Actions | " + actionSet + " > " + action },
            "merged": { "<boolean>": true }
        }
    );
    if (useDom)
    {
        app.doAction (action, actionSet);
    }
    else
    {
        var playbackOptions = { "performance": { "<enumerated>": { "performance": "accelerated" } } };
        // var playbackOptions = { "performance": { "<enumerated>": { "performance": "stepByStep" } } };
        // var playbackOptions = { "performance": { "<enumerated>": { "performance": "pause" } }, "pause": { "<integer>": 1 } };
        jamEngine.jsonPlay
        (
            "set",
            {
                "target":
                {
                    "<reference>":
                    [
                        { "property": { "<property>": "playbackOptions" } },
                        { "application": { "<enumerated>": { "ordinal": "targetEnum" } } }
                    ]
                },
                "to": { "<object>": { "playbackOptions": playbackOptions } }
            }
        );
        jamEngine.jsonPlay
        (
            "play",
            {
                "target": { "<reference>": [ { "action": { "<name>": action } }, { "actionSet": { "<name>": actionSet } } ] }
            }
        );
    }
}

//------------------------------------------------------------------------------

var appVersion = parseInt (app.version);
if (getParameters ())
{
    jamEngine.jsonPlay ("open", { "target": { "<path>": "Factory.jpg" } });
    if (desiredAction === allActions)
    {
        var resultDescriptorObj = jamEngine.jsonGet ([ { "property": { "<property>": "documentID" } }, { "document": { "<enumerated>": { "ordinal": "first" } } } ]);
        var docId = resultDescriptorObj["documentID"]["<integer>"];
        var docIds = [ ];
        for (var i = 0; i < actions.length; i++)
        {
            jamEngine.jsonPlay ("select", { "target": { "<reference>": [ { "document": { "<identifier>": docId } } ] } });
            processAction (actions[i]);
            resultDescriptorObj = jamEngine.jsonGet ([ { "property": { "<property>": "documentID" } }, { "document": { "<enumerated>": { "ordinal": "first" } } } ]);
            docIds.unshift (resultDescriptorObj["documentID"]["<integer>"]);
        }
        if (reverseAllDocs)
        {
            docIds.reverse ();
        }
        for (var i = 0; i < docIds.length; i++)
        {
            jamEngine.jsonPlay ("select", { "target": { "<reference>": [ { "document": { "<identifier>": docIds[i] } } ] } });
        }
    }
    else
    {
        processAction (desiredAction);
    }
}

//------------------------------------------------------------------------------

