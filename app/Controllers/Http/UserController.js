'use strict'
const User = use('App/Models/User')
class UserController {
  async index ({ auth }) {
    const user = await auth.user

    return user
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ params, request, auth }) {
    const _user = await User.findOrFail(auth.user.id)
    const data = request.only(['AUL_CODIGO', 'MOD_CODIGO'])

    _user.merge(data)

    await _user.save()

    return _user
  }
}

module.exports = UserController
