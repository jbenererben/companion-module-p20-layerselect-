const actions = require('./actions')

module.exports = {
  name: 'p20-layerselect',
  config: {},

  init() {
    this.log('info', 'P20 Layer Select modülü yüklendi.')
    this.selectedScreenId = 1
    actions(this)
  },
}
