'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModulesSchema extends Schema {
  up () {
    this.create('modules', (table) => {
      table.increments('MOD_CODIGO')
      table.string('MOD_NOME')
      table.timestamps()
    })
  }

  down () {
    this.drop('modules')
  }
}

module.exports = ModulesSchema
