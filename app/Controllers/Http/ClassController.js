'use strict'

const Class = use('App/Models/Class')

class ClassController {
  async index () {
    const classes = Class.all()

    return classes
  }

  async store ({ request }) {
    const data = request.only(['MOD_CODIGO', 'AUL_NOME', 'TXT_CODIGO', 'EXE_CODIGO'])

    const _class = await Class.create({ ...data })

    return _class
  }

  async show ({ params }) {
    const _class = await Class.query().where('MOD_CODIGO', params.id).fetch()

    return _class
  }

  async update ({ params, request }) {
    const _class = await Class.findOrFail(params.id)
    const data = request.only(['MOD_CODIGO', 'AUL_NOME', 'TXT_CODIGO'])

    _class.merge(data)

    await _class.save()

    return _class
  }

  async destroy ({ params }) {
    const _class = await Class.findOrFail(params.id)

    await _class.delete()
  }
}

module.exports = ClassController
