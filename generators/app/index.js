'use strict';

var util = require('util'),
    yeoman = require('yeoman-generator'),
    scriptBase = require('../generator-base');

var PhippieGenerator = yeoman.Base.extend({});

util.inherits(PhippieGenerator, scriptBase);

module.exports = PhippieGenerator.extend({
    // The name `constructor` is important here
    constructor: function() {
        yeoman.Base.apply(this, arguments);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    },

    initializing: {
        displayLogo: function () {
            this.printLogo();
        }
    },
});