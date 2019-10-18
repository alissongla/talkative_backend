'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Exercise extends Model {
  static get primaryKey () {
    return 'EXE_CODIGO'
  }

  class () {
    return this.belongsTo('App/Models/Class')
  }
}

module.exports = Exercise
