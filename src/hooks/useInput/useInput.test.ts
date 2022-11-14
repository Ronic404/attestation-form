import React from 'react'
import { useInput } from './useInput'
import { requireValidator } from '../../utils/validators';

jest.mock('React');

describe('useInput should', () => {
  test('return array without error', () => {
    React.useState = jest.fn()
      .mockReturnValueOnce(['', {}])
      .mockReturnValueOnce(['', {}])

    expect(useInput([])).toEqual(['', {}, ''])
  })

  test('return array without require validator error', () => {
    React.useState = jest.fn()
      .mockReturnValueOnce(['', {}])
      .mockReturnValueOnce(['error', {}])

    expect(useInput([requireValidator('error')])).toEqual(['', {}, 'error'])
  })
})
