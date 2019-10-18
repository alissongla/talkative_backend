'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Class extends Model {
  static get primaryKey () {
    return 'AUL_CODIGO'
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  texts () {
    return this.hasMany('App/Models/Text')
  }

  exercises () {
    return this.hasMany('App/Models/Exercise')
  }

  module () {
    return this.belongsTo('App/Models/Module')
  }
}

module.exports = Class
