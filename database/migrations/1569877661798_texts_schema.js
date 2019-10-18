'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TextsSchema extends Schema {
  up () {
    this.create('texts', (table) => {
      table.increments('TXT_CODIGO')
      table.text('TXT_DESCRICAO')
      table.timestamps()
    })
  }

  down () {
    this.drop('texts')
  }
}

module.exports = TextsSchema
