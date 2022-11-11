import { getDate } from './getDate'

describe('getDate', () => {
  test('returns correct result', () => {
    expect(getDate(new Date(2022, 0, 1))).toBe('01.01.2022')
  })
})
