'use strict';
require("../../node_modules/jquery-ui-bundle/jquery-ui.css");
require("../../node_modules/jquery-ui-bundle/jquery-ui.theme.css");
var jQuery = require("../../node_modules/jquery/dist/jquery");
require("../../node_modules/jquery-ui-bundle/jquery-ui");

require("../../node_modules/codemirror/addon/display/placeholder");
require('../../node_modules/arrive/src/arrive.js');

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
        addHoverEffect('.clearLink');
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
    addHoverEffect('.add_new_editor_button');
});

function addHoverEffect(buttonClass) {
    jQuery(buttonClass + " .button-fill").hover(function () {
        jQuery(this).children(".button-inside").addClass('full');
    }, function () {
        jQuery(this).children(".button-inside").removeClass('full');
    });
}

function createCodeMirrorEditor(textarea) {
    var editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        theme: 'material',
        mode: getModeFromTextarea(textarea),
        extraKeys: {
            "Ctrl-Space": "autocomplete"
        }
    });
    editor.on('change', function (codeMirror) {
        var cmTextarea = codeMirror.getDoc().cm.getTextArea();
        codeMirror.save();
        cmTextarea.dispatchEvent(new Event('input'));
    });

    jQuery(editor.getWrapperElement()).resizable({
        resize: function() {
            editor.setSize($(this).width(), $(this).height());
        }
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