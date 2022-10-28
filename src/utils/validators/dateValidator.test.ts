import { getDate } from '../getDate'
import { dateValidator } from './dateValidator'

// Two dates
describe('dateValidator with two dates', () => {
  let dateValidatorResult: ReturnType<typeof dateValidator>

  beforeEach(() => {
    dateValidatorResult = dateValidator(
      { date: '01.01.2010', error: 'Too small date' },
      { date: getDate(new Date(2022, 0, 1)), error: 'Too big date' },
      'Wrong day or month',
    )
  })

  test('returns wrong date error', () => {
    expect(dateValidatorResult('99.05.2015')).toBe('Wrong day or month')
    expect(dateValidatorResult('01.22.2015')).toBe('Wrong day or month')
  })

  test('returns small date error', () => {
    expect(dateValidatorResult('01.01.2009')).toBe('Too small date')
  })

  test('returns big date error', () => {
    expect(dateValidatorResult('01.01.2030')).toBe('Too big date')
  })

  test('returns empty string', () => {
    expect(dateValidatorResult('01.01.2015')).toBe('')
  })
})

// Only min date
describe('dateValidator with only min date', () => {
  let dateValidatorResult: ReturnType<typeof dateValidator>

  beforeEach(() => {
    dateValidatorResult = dateValidator(
      { date: '01.01.2010', error: 'Too small date' },
      null,
      'Wrong day or month',
    )
  })

  test('returns wrong date error', () => {
    expect(dateValidatorResult('99.05.2015')).toBe('Wrong day or month')
    expect(dateValidatorResult('01.22.2015')).toBe('Wrong day or month')
  })

  test('returns small date error', () => {
    expect(dateValidatorResult('01.01.2009')).toBe('Too small date')
  })

  test('returns empty string', () => {
    expect(dateValidatorResult('01.01.9999')).toBe('')
  })
})

// Only max date
describe('dateValidator with only max date', () => {
  let dateValidatorResult: ReturnType<typeof dateValidator>

  beforeEach(() => {
    dateValidatorResult = dateValidator(
      null,
      { date: getDate(new Date(2022, 0, 1)), error: 'Too big date' },
      'Wrong day or month',
    )
  })

  test('returns wrong date error', () => {
    expect(dateValidatorResult('99.05.2015')).toBe('Wrong day or month')
    expect(dateValidatorResult('01.22.2015')).toBe('Wrong day or month')
  })

  test('returns big date error', () => {
    expect(dateValidatorResult('01.01.2030')).toBe('Too big date')
  })

  test('returns empty string', () => {
    expect(dateValidatorResult('01.01.1000')).toBe('')
  })
})

// Only without dates
describe('dateValidator without dates', () => {
  let dateValidatorResult: ReturnType<typeof dateValidator>

  beforeEach(() => {
    dateValidatorResult = dateValidator(
      null,
      null,
      'Wrong day or month',
    )
  })

  test('returns wrong date error', () => {
    expect(dateValidatorResult('99.05.2015')).toBe('Wrong day or month')
    expect(dateValidatorResult('01.22.2015')).toBe('Wrong day or month')
  })

  test('returns empty string', () => {
    expect(dateValidatorResult('01.01.1000')).toBe('')
    expect(dateValidatorResult('01.01.9999')).toBe('')
  })
})
