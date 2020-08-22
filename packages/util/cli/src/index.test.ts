import { getOptions } from '.'

// keep copy of unaltered args
const argv = [...process.argv]

describe('util → cli', () => {
  afterEach(() => {
    // restore unaltered args
    process.argv = [...argv]
  })
  describe('.parseArgs', () => {
    it('assigns string arguments to key', () => {
      process.argv.push('--option', 'setting')
      expect(getOptions({
        option: {
          keys: ['--option', '-o'],
          type: 'string',
          default: 'unset'
        }
      })).toHaveProperty('option', 'setting')
    })
    it('assigns default string to key', () => {
      expect(getOptions({
        option: {
          keys: ['--option', '-o'],
          type: 'string',
          default: 'unset'
        }
      })).toHaveProperty('option', 'unset')
    })
    it('assigns boolean arguments to key', () => {
      process.argv.push('--option')
      expect(getOptions({
        option: {
          keys: ['--option', '-o'],
          type: 'bool'
        }
      })).toHaveProperty('option', true)
    })
    it('assigns default bool (false) to key', () => {
      expect(getOptions({
        option: {
          keys: ['--option', '-o'],
          type: 'bool'
        }
      })).toHaveProperty('option', false)
    })
    it('assigns first instance against option keys', () => {
      process.argv.push('--option', 'foo', '-o', 'bar')
      expect(getOptions({
        option: {
          keys: ['--option', '-o'],
          type: 'string'
        }
      })).toHaveProperty('option', 'foo')
    })
  })
})
