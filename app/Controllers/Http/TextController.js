'use strict'

const Text = use('App/Models/Text')

class TextController {
  async index () {
    const texts = Text.all()
    return texts
  }

  async store ({ request }) {
    const data = request.only(['TXT_DESCRICAO'])

    const _text = await Text.create({ ...data })

    return _text
  }

  async show ({ params }) {
    const _text = await Text.findOrFail(params.id)

    return _text
  }

  async update ({ params, request }) {
    const _text = await Text.findOrFail(params.id)
    const data = request.only(['TXT_DESCRICAO'])

    _text.merge(data)

    await _text.save()

    return _text
  }

  async destroy ({ params }) {
    const _text = await Text.findOrFail(params.id)

    await _text.delete()
  }
}

module.exports = TextController
