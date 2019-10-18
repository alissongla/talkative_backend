'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassesSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments('AUL_CODIGO')
      table.integer('MOD_CODIGO')
           .unsigned()
           .references('MOD_CODIGO')
           .inTable('modules')
           .onDelete('set null')
      table.string('AUL_NOME')
      table.integer('TXT_CODIGO')
           .unsigned()
           .references('TXT_CODIGO')
           .inTable('texts')
           .onDelete('set null')
      table.integer('EXE_CODIGO')
           .unsigned()
           .references('EXE_CODIGO')
           .inTable('exercises')
           .onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClassesSchema
