interface CLI {
  [option: string]: {
    keys: string[],
    type: 'bool' | 'string',
    default?: String
  }
}

/**
 * Define options for command line arguments.
 * If argument isn't found, it's set to a default or undefined value.
 * All 'bool' options are true if argument exists, false by default.
 * @example usage: start --opt1 foo --opt2
 *   parseArgs({
 *     optionOne: { keys: ['--opt1'], type: 'string' }
 *     optionTwo: { keys: ['--opt2'], type: 'bool' }
 *     optionThree: { keys: ['--opt3'], type: 'string', default: 'bar' }
 *   })
 *   // ☝️ { optionOne: 'foo', optionTwo: true, optionThree: 'bar' }
 */
export const getOptions = (cli: CLI) =>
  Object.keys(cli).reduce((options, option) => {
    cli[option].keys.find((key) => {
      const indexOfArg = options.args.indexOf(key)
      options[option] = indexOfArg === -1
        ? cli[option].type === 'string'
          ? cli[option]?.default
          : false
        : cli[option].type === 'string'
          ? options.args[indexOfArg + 1]
          : true
      return (indexOfArg !== -1)
    })
    return options
  }, {
    args: process.argv.slice(2)
  } as {[key: string]: any})
