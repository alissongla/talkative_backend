'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Module extends Model {
  static get primaryKey () {
    return 'MOD_CODIGO'
  }

  class () {
    return this.belongsTo('App/Models/Class', 'MOD_CODIGO', 'MOD_CODIGO')
  }
}

module.exports = Module
