'use strict';
var $ = require('jquery');
require('./index.css');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('arrive/minified/arrive.min.js');
var CodeMirror = require('codemirror/lib/codemirror.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require('codemirror/mode/css/css.js');

var resizable = require('jquery-ui/ui/widgets/resizable');
require('./index.html');

var Elm = require('./Main.elm');

var app = Elm.Main.embed(document.getElementById("main"));

app.ports.newEditorAdded.subscribe(function (newEditorClassName) {
    setTimeout(function () {
        $("." + newEditorClassName).find('.clearLink').on('click', function () {
            console.log('click');
            console.log($(this));
            $("." + newEditorClassName).find('.CodeMirror').each(function () {
                console.log($(this));
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

    new resizable({
        resize: function () {
            cmEditor.setSize($(this).width(), $(this).height());
        }
    }).element.appendTo(cmEditor);
    // $(cmEditor).resizable({
    //     resize: function() {
    //         cmEditor.setSize($(this).width(), $(this).height());
    //     }
    // });
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