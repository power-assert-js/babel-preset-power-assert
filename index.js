/**
 * babel-preset-power-assert
 *   Babel preset for all power-assert plugins
 * 
 * https://github.com/power-assert-js/babel-preset-power-assert
 *
 * Copyright (c) 2016-2018 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/power-assert-js/babel-preset-power-assert/blob/master/LICENSE
 */
'use strict';

var declare = require('@babel/helper-plugin-utils').declare;
var empowerAssertPlugin = require('babel-plugin-empower-assert');
var espowerPlugin = require('babel-plugin-espower');

module.exports = declare(function (api, options, dirname) {
    api.assertVersion(7);
    return {
        plugins: [
            empowerAssertPlugin,
            espowerPlugin
        ]
    };
});
