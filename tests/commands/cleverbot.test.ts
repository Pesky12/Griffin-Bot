import 'mocha'
import * as cleverbot from '../../commands/cleverbot'
import * as chai from 'chai'
import * as chaiPromise from 'chai-as-promised'
const expect = chai.expect

before(() => {
  chai.should()
  chai.use(chaiPromise)
})

describe('getCL',() => {
  it('should return a string', () => {
    return cleverbot.getCl('hello').should.eventually.be.a('string')
  })
})
