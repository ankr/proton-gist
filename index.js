'use strict';
var plugin = module.exports;
var proton = require('./lib/proton-gist.js');

plugin.activate = function () {
	proton.init();
};
