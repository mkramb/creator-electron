#!/usr/bin/env node
'use strict'

const vorpal = require('creator/vorpal')
const resolve = require('creator/resolve')
const config = Object.assign(
  require('./defaults'),
  require(resolve('app.config'))
)

require('./cli/start')(vorpal, config)

vorpal
  .delimiter('electron-creator ❯❯❯')
  .parse(process.argv)
