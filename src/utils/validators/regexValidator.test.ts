import { regexValidator } from './regexValidator'

describe('regexValidator', () => {
  let regexValidatorResult: ReturnType<typeof regexValidator>

  beforeEach(() => {
    regexValidatorResult = regexValidator(/^[a-z ]+$/i, 'Wrong format')
  })

  test('returns error', () => {
    expect(regexValidatorResult('        ')).toBe('Wrong format')
    expect(regexValidatorResult('01.01.2009')).toBe('Wrong format')
    expect(regexValidatorResult('Привет')).toBe('Wrong format')
    expect(regexValidatorResult('Hello 123 world')).toBe('Wrong format')
  })

  test('returns empty string', () => {
    expect(regexValidatorResult('Hello world')).toBe('')
  })
})
