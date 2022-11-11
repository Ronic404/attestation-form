import { ChangeEvent } from 'react';
import { nameMask } from './nameMask'

describe('nameMask should', () => {
  const event = {
    target: {},
  } as ChangeEvent<HTMLInputElement>

  test('return only valid chars', () => {
    event.target.value = 'Петя JOhn 123 -'
    expect(nameMask(event)).toBe('Петя -')
  })

  test('return only one space between words', () => {
    event.target.value = 'Петя        Васильев'
    expect(nameMask(event)).toBe('Петя Васильев')
  })

  test('return only one dash between words', () => {
    event.target.value = 'Петя-------Васильев'
    expect(nameMask(event)).toBe('Петя-Васильев')
  })

  test('not start with space or dash', () => {
    const eventWithSpace = {
      target: { value: '     Петя' },
    } as ChangeEvent<HTMLInputElement>;
    const eventWithDash = {
      target: { value: '------Петя' },
    } as ChangeEvent<HTMLInputElement>;

    expect(nameMask(eventWithSpace)).toBe('Петя')
    expect(nameMask(eventWithDash)).toBe('Петя')
  })
})
