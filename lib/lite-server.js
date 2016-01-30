'use strict';
/**
 * lite-server : Simple server for angular/SPA projects
 *
 * Simply loads some default browser-sync options that apply to NG/SPA sites,
 * applies custom config overrides from user's own local `bs-config.{js|json}` file,
 * and launches browser-sync.
 */
var browserSync = require('browser-sync').create();
var path = require('path');
var _ = require('lodash');

// Load defaults
var options = require('./config-defaults');

// Load optional browser-sync config file from user's project dir
var bsConfigPath = path.resolve('bs-config');
var overrides = {};
try {
  overrides = require(bsConfigPath);
} catch (err) { } // silent: optional load
_.merge(options, overrides);

// Run browser-sync
browserSync.init(options);
