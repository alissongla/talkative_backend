'use strict'
const moment = require('moment')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')
const Helpers = use('Helpers')
class ForgotPasswordController {
  async store( {request, response} ) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      console.log(Helpers.resourcesPath())
      await Mail.send(
        ['emails.forgot_password'],
        { email, token: user.token, link: `${request.input('redirect_url')}?token=${user.token}` },
        message =>{
          message
            .embed(Helpers.resourcesPath('views/emails/Talk_Logo.png'), 'logo')
            .to(user.email)
            .from('glauberalisson@gmail.com', 'Alisson | TalkAtive')
            .subject('Recuperação de senha')
        }
      )
    } catch (err) {
      return response.status(err.status).send({
        error: {message: 'Email incorreto, por favor verificar.'
      }})
    }
  }

  async update ({request, response}) {
    try {
      const { token, password} = request.all()

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if(tokenExpired){
        return response.status(401).send({
          error: {message: 'Solicitação expirada, realize outra solicitação'}
        })
      }
      user.token = null
      user.token_created_at  = null
      user.password = password

      await user.save()
    } catch (err) {
      return response.status(err.status).send({
        error: {message: 'Algum problema ao resetar a senha, tente novamente mais tarde.'}
      })
    }
  }
}

module.exports = ForgotPasswordController
