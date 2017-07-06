import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '.././server/server'
import User from '.././server/models/user'
import config from '.././server/config/config'
import mockUser from './common/mockUser'
import saveUser from './common/saveUser'

let user = Object.assign({}, mockUser)

let should = chai.should()

chai.use(chaiHttp);

const token = jwt.sign({
  id: 1,
  username: user.email
}, config.jwtSecret)

const data = {
  user: user
}

describe('Auth', () => {
	beforeEach((done) => {
		User.remove({}, (err) => {
		   done()
		})
	})

  describe('/POST Auth', () => {
	  it('it should Authenticate ', (done) => {
      saveUser(user, (error) =>{
        if(error) throw error

        chai.request(server)
        .post('/api/auth')
        .send(data)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('token')
          done()
        })
      })
	  })
  })


})
