import { capitalizeText } from './capitalizeText'

describe('capitalizeText', () => {
  test('returns correct result', () => {
    expect(capitalizeText('hello world world')).toBe('Hello World World')
  })
})
