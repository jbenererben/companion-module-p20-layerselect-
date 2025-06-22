const { CompanionModule } = require('@companion-module/base')
const actions = require('./actions')

class ModuleInstance extends CompanionModule {
  constructor(internal) {
    super(internal)
  }

  async init(config) {
    this.log('info', 'P20 Layer Select modülü yüklendi.')
    this.selectedScreenId = 1
    actions(this)
  }

  getConfigFields() {
    return []
  }

  getActionDefinitions() {
    return this._actions
  }
}

module.exports = ModuleInstance
