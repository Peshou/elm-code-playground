'use strict';
var jQuery = require('../../node_modules/jquery/dist/jquery.min');
var resizable = require('../../node_modules/jquery-ui/ui/widgets/resizable');
require('../../node_modules/arrive/minified/arrive.min.js');

require('../../node_modules/codemirror/lib/codemirror.css');
require('../../node_modules/codemirror/theme/material.css');
var CodeMirror = require('../../node_modules/codemirror/lib/codemirror.js');
require('../../node_modules/codemirror/mode/javascript/javascript.js');
require('../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js');
require('../../node_modules/codemirror/mode/css/css.js');

require('./styles/index.scss');

var Elm = require('../elm/Main.elm');
var app = Elm.Main.embed(document.getElementById("main"));

app.ports.newEditorAdded.subscribe(function (newEditorClassName) {
    setTimeout(function () {
        jQuery("." + newEditorClassName).find('.clearLink').on('click', function () {
            jQuery("." + newEditorClassName).find('.CodeMirror').each(function () {
                var cmInstance = jQuery(this).get(0).CodeMirror;
                cmInstance.setValue("");
            });
        });
    }, 500);
});

document.arrive(".code_textarea", function () {
    createCodeMirrorEditor(this);
});
document.arrive(".add_new_editor_button", function () {
    jQuery(".add_new_editor_button .button-fill").hover(function () {
        jQuery(this).children(".button-inside").addClass('full');
    }, function () {
        jQuery(this).children(".button-inside").removeClass('full');
    });
});

function createCodeMirrorEditor(textarea) {
    CodeMirror.fromTextArea(textarea, {
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
    if (jQuery(element).hasClass("html")) {
        return "htmlmixed";
    } else if (jQuery(element).hasClass("css")) {
        return 'text/css';
    } else if (jQuery(element).hasClass("js")) {
        return 'javascript';
    } else {
        return '';
    }
}