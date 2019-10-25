'use strict'

const Exercise = use('App/Models/Exercise')

class ExerciseController {
  async index () {
    const exercises = Exercise.all()
    return exercises
  }

  async store ({ request }) {
    const data = request.only(['EXE_LINGUA', 'EXE_ENUNCIADO', 'EXE_RESPOSTA'])

    const _exercise = await Exercise.create({ ...data })

    return _exercise
  }

  async show ({ params }) {
    const _exercise = await Exercise.findByOrFail('AUL_CODIGO', params.id)

    return _exercise
  }

  async update ({ params, request }) {
    const _exercise = await Exercise.findOrFail(params.id)
    const data = request.only(['EXE_ENUNCIADO', 'EXE_RESPOSTA'])

    _exercise.merge(data)

    await _exercise.save()

    return _exercise
  }

  async destroy ({ params }) {
    const _exercise = await Exercise.findOrFail(params.id)

    await _exercise.delete()
  }
}

module.exports = ExerciseController
