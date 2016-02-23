/* global describe, it */
'use strict'
import appendIf from '../lib/'
import {expect} from 'chai'

describe('append-if', () => {
  it('should throw TypeError if string is not a string', () => {
    const test = () => appendIf()

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw error if appendString is not a string', () => {
    const test = () => appendIf('hello')

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw TypeError if customCondition is passed but not a function or boolean', () => {
    const test = () => appendIf('hello', 'hi', [])

    expect(test).to.throw(TypeError, /Expected a boolean or function/)
  })

  describe('default condition function', () => {
    it('should not append if condition is false', () => {
      expect(appendIf('hello', 'lo')).to.eql('hello')
    })

    it('should append if condition is true', () => {
      expect(appendIf('hello', ' world')).to.eql('hello world')
    })
  })

  describe('custom condition function', () => {
    const customCondition = (string, appendString) => string.length > appendString.length

    it('should append if customCondition returns true', () => {
      expect(appendIf('longer', 'short', customCondition)).to.eql('longershort')
    })

    it('should not append if customCondition returns false', () => {
      expect(appendIf('short', 'longer', customCondition)).to.eql('short')
    })
  })

  describe('custom condition boolean', () => {
    it('should append if customCondition is true', () => {
      expect(appendIf('hello', ' world', true)).to.eql('hello world')
    })

    it('should not append if customCondition is false', () => {
      expect(appendIf('hello', ' world', false)).to.eql('hello')
    })
  })
})
