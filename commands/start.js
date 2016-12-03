'use strict'

module.exports = {
  options: (vorpal) => {
    return vorpal
      .option('-n, --name <name>', 'name of the project to run')
  },
  action: (config, options, callback) => {
    console.log(`start ${options.name || config.name || 'now'}`)
    callback()
  }
}
