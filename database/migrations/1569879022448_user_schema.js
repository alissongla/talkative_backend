'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.dropIfExists('users')
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('AUL_CODIGO')
           .unsigned()
           .references('AUL_CODIGO')
           .inTable('classes')
           .onDelete('set null')
      table.integer('MOD_CODIGO')
           .unsigned()
           .references('MOD_CODIGO')
           .inTable('modules')
           .onDelete('set null')
      table.string('token')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
