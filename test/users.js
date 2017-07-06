import mongoose from 'mongoose'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '.././server/server'
import User from '.././server/models/user'
import mockUser from './common/mockUser'

let should = chai.should()

chai.use(chaiHttp);

const data = {
  user: mockUser
}

describe('Users', () => {
	beforeEach((done) => {
		User.remove({}, (err) => {
		   done()
		})
	})

  describe('/POST user', () => {
	  it('it should POST a user', (done) => {
			chai.request(server)
		    .post('/api/users')
        .send(data)
		    .end((err, res) => {
          if(err){
            console.log(err)
          }
			  	res.should.have.status(200)
          res.body.should.have.property('success')
		      done()
		    })
	  })
  })

  describe('/POST user', () => {
	  it('it should not POST a user without a password', (done) => {
      data.user.password = ''

			chai.request(server)
		    .post('/api/users')
        .send(data)
		    .end((err, res) => {
			  	res.should.have.status(400)
          res.body.should.have.property('password').eql('This field is required')
		      done()
		    })
	  })
  })

  describe('/POST user', () => {
	  it('it should not POST a user without invalid email', (done) => {
      data.user.email = 'emails in wrong format'

			chai.request(server)
		    .post('/api/users')
        .send(data)
		    .end((err, res) => {
			  	res.should.have.status(400)
          res.body.should.have.property('email').eql('Email is invalid')
		      done()
		    })
	  })
  })
})
