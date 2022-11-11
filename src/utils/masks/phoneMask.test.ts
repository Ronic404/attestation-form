import React, { ChangeEvent } from 'react'
import { phoneMask } from './phoneMask'

describe('dateMask should', () => {
  const refInput = {
    current: {
      selectionStart: 11,
    },
  } as React.RefObject<HTMLInputElement>

  // @ts-ignore
  const event = {
    target: {
      value: '',
    },
    nativeEvent: {
      data: '2',
    },
  } as ChangeEvent<HTMLInputElement>

  test('return phone number', () => {
    event.target.value = '89124479955'
    expect(phoneMask(event, refInput)).toBe('+7 (912) 447-99-55')
  })

  test('return empty string', () => {
    event.target.value = 'phonenumber'
    expect(phoneMask(event, refInput)).toBe('')
  })
})
