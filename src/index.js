'use strict';

require('ace-css/css/ace.css');
require('font-awesome/css/font-awesome.css');
require('./index.css');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');

var CodeMirror = require('codemirror/lib/codemirror.js');

// Require index.html so it gets copied to dist
require('./index.html');

var Elm = require('./Main.elm');

var app = Elm.Main.embed(document.getElementById("main"));

document.addEventListener('DOMContentLoaded', function () {
    console.log('load');
    var elements = document.getElementsByClassName('code_textarea');
    for (var i = 0; i < elements.length; ++i) {
        console.log(elements[i]);
        editor(elements[i]);
    }
});

function editor(textarea) {
    CodeMirror.fromTextArea(textarea, {
        lineNumbers: true
    });
}