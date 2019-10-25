'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExercisesSchema extends Schema {
  up () {
    this.create('exercises', (table) => {
      table.increments('EXE_CODIGO')
      table.string('EXE_LINGUA')
      table.text('EXE_ENUNCIADO')
      table.string('EXE_RESPOSTA')
      table.integer('AUL_CODIGO')
           .unsigned()
           .references('AUL_CODIGO')
           .inTable('classes')
           .onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('exercises')
  }
}

module.exports = ExercisesSchema
