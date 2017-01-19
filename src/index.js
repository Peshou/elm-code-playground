'use strict';

require('./index.css');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('arrive/minified/arrive.min.js');
var CodeMirror = require('codemirror/lib/codemirror.js');

// Require index.html so it gets copied to dist
require('./index.html');

var Elm = require('./Main.elm');

var app = Elm.Main.embed(document.getElementById("main"));
app.ports.newEditorAdded.subscribe(function (newEditorClassName) {
    // createEditors(newEditorClassName);
});

document.arrive(".code_textarea", function() {
    createCodeMirrorEditor(this);
});

function createCodeMirrorEditor(textarea) {
    var editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        theme: 'material',
        mode: "htmlmixed"
    }).on('change', function (codeMirror) {
        var cmTextarea = codeMirror.getDoc().cm.getTextArea();
        codeMirror.save();
        cmTextarea.dispatchEvent(new Event('input'));
    });
}