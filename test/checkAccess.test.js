import { returnTrue } from "../lib/Utils/checkAccess";
import * as assert from 'assert'

describe('Return true', () => {
  it('Should return true', () =>{
    let returnFunc = returnTrue()
    assert.equal(returnFunc, true)
  })
})