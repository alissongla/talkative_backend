'use strict'

const Route = use('Route')

Route.get('users', 'UserController.index').middleware(['auth'])
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('password', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

Route.group(() => {
  Route.resource('class', 'ClassController').apiOnly()
  Route.resource('module', 'ModuleController').apiOnly()
  Route.resource('exercise', 'ExerciseController').apiOnly()
  Route.resource('text', 'TextController').apiOnly()
}).middleware(['auth'])
