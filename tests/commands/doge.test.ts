import 'mocha'
import * as chai from 'chai'
import chaiPromise from 'chai-as-promised'
import { getCrypto } from '../../src/commands/doge'

before(() => {
  chai.should()
  chai.use(chaiPromise)
})

describe('getCrypto', () => {
  it('should return an array', () => {
    return getCrypto('DOGE', 'USD').should.eventually.be.an('Object')
  })
})
