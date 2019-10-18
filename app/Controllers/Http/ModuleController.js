'use strict'

const Module = use('App/Models/Module')

class ModuleController {
  async index ({auth}) {
    const modules = Module.all()
    return auth.user
  }

  async store ({ request }) {
    const data = request.only(['MOD_NOME'])

    const _module = await Module.create({ ...data })

    return _module
  }

  async show ({ params }) {
    const _module = await Module.findOrFail(params.id)

    return _module
  }

  async update ({ params, request }) {
    const _module = await Module.findOrFail(params.id)
    const data = request.only(['MOD_NOME'])

    _module.merge(data)

    await _module.save()

    return _module
  }

  async destroy ({ params }) {
    const _module = await Module.findOrFail(params.id)

    await _module.delete()
  }
}

module.exports = ModuleController
