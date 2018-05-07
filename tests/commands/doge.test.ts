import 'mocha'
import * as chai from 'chai';
import * as chaiPromise from 'chai-as-promised'
import { getCrypto } from '../../commands/doge'

before(() => {
  chai.should()
  chai.use(chaiPromise)
})

describe('getCrypto', () => {
  it('should return an array', () => {
    return getCrypto('DOGE', 'USD').should.eventually.be.an('Object')
  })
})
 