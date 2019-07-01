import 'mocha'
import * as cleverbot from '../../src/commands/cleverbot'
import * as chai from 'chai'
import chaiPromise from 'chai-as-promised'
const expect = chai.expect

before(() => {
  chai.should()
  chai.use(chaiPromise)
})

describe('getCL',() => {
  it('should return a string', () => {
    return cleverbot.getCl('hello', '1').should.eventually.be.a('string')
  })
})
