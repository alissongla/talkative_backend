'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Text extends Model {
  static get primaryKey () {
    return 'TXT_CODIGO'
  }

  class () {
    return this.belongsTo('App/Models/Class', 'TXT_CODIGO', 'TXT_CODIGO')
  }
}

module.exports = Text
