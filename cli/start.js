'use strict'

const start = require('../commands/start')

module.exports = (vorpal, config) => {
  vorpal
    .command('start')
    .description('run project locally')
    .use(start.options)
    .action(({ options }, callback) => {
      return start.action(config, options, callback)
    })
}
