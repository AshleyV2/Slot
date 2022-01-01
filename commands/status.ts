// module.exports = {}

import { ICommand } from 'wokcommands'

export default {
  category: 'Configuration',
  description: 'Sets the bots status',

  minArgs: 1,
  expectedArgs: '<status>',

  ownerOnly: true,
} as ICommand
