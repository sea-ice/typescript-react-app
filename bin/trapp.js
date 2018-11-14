#!/usr/bin/env node
let commander = require('commander')
let version = require('../package.json').version

commander.version(version)
  .command('init <app>', 'Initialize app.')
  .parse(process.argv)
