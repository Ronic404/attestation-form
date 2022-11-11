import { requireValidator } from './requireValidator'

describe('requireValidator', () => {
  let requireValidatorResult: ReturnType<typeof requireValidator>

  beforeEach(() => {
    requireValidatorResult = requireValidator('Required field')
  })

  test('returns error', () => {
    expect(requireValidatorResult('')).toBe('Required field')
    expect(requireValidatorResult('        ')).toBe('Required field')
  })

  test('returns empty string', () => {
    expect(requireValidatorResult('   a   ')).toBe('')
    expect(requireValidatorResult('Hello world')).toBe('')
  })
})
