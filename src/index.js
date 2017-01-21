'use strict';
var $ = require('jquery');
var resizable = require('jquery-ui/ui/widgets/resizable');
require('arrive/minified/arrive.min.js');

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
var CodeMirror = require('codemirror/lib/codemirror.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require('codemirror/mode/css/css.js');

require('./index.css');
require('./index.html');

var Elm = require('./Main.elm');
var app = Elm.Main.embed(document.getElementById("main"));

app.ports.newEditorAdded.subscribe(function (newEditorClassName) {
    setTimeout(function () {
        $("." + newEditorClassName).find('.clearLink').on('click', function () {
            $("." + newEditorClassName).find('.CodeMirror').each(function () {
                var cmInstance = $(this).get(0).CodeMirror;
                cmInstance.setValue("");
            });
        });
    }, 500);
});

document.arrive(".code_textarea", function () {
    createCodeMirrorEditor(this);
});

function createCodeMirrorEditor(textarea) {
    var cmEditor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        theme: 'material',
        mode: getModeFromTextarea(textarea)
    }).on('change', function (codeMirror) {
        var cmTextarea = codeMirror.getDoc().cm.getTextArea();
        codeMirror.save();
        cmTextarea.dispatchEvent(new Event('input'));
    });
}


function getModeFromTextarea(element) {
    if ($(element).hasClass("html")) {
        return "htmlmixed";
    } else if ($(element).hasClass("css")) {
        return 'text/css';
    } else if ($(element).hasClass("js")) {
        return 'javascript';
    } else {
        return '';
    }
}