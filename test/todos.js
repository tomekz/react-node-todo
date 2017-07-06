import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '.././server/server'
import User from '.././server/models/user'
import config from '.././server/config/config'
import mockUser from './common/mockUser'
import saveUser from './common/saveUser'

let should = chai.should()

chai.use(chaiHttp);

const token = jwt.sign({
  id: 1,
  username: mockUser.email
}, config.jwtSecret)


describe('Todos', () => {
	beforeEach((done) => {
		User.remove({}, (err) => {
		   done()
		})
	})

  describe('/POST todos', () => {
	  it('it should not POST todos when unauthorized', (done) => {
			chai.request(server)
		    .post('/api/todos')
        .send(mockUser.todos)
		    .end((err, res) => {
			  	res.should.have.status(403)
          res.body.should.have.property('error').eql('No token provided')
		      done()
		    })
	  })
  })

  describe('/POST todos', () => {
	  it('it should not POST todos when invalid jwt Token sent', (done) => {
			chai.request(server)
		    .post('/api/todos')
        .set('Authorization', 'Bearer XXXX')
        .send(mockUser.todos)
		    .end((err, res) => {
			  	res.should.have.status(401)
          res.body.should.have.property('error').eql('Failed to authenticate')
		      done()
		    })
	  })
  })

  describe('/POST todos', () => {
	  it('it should not POST todos for an unknown user', (done) => {
			chai.request(server)
		    .post('/api/todos')
        .set('Authorization', `Bearer ${token}`)
        .send(mockUser.todos)
		    .end((err, res) => {
			  	res.should.have.status(404)
          res.body.should.have.property('error').eql('No such user')
		      done()
		    })
	  })
  })

  describe('/POST todos', () => {
	  it('it should POST todos ', (done) => {
      saveUser(mockUser, (error) =>{
        if(error) throw error
        chai.request(server)
        .post('/api/todos')
        .set('Authorization', `Bearer ${token}`)
        .send(mockUser.todos)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.have.property('success').eql(true)
          done()
        })
      })
	  })
  })

})
