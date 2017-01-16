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

//
// var editor = CodeMirror.fromTextArea(document.getElementsByClassName('code-textarea'), {
//     lineNumbers: true,
//     theme: 'material'
// });
// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
var app = Elm.Main.fullscreen();