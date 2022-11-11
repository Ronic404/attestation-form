import React, { ChangeEvent } from 'react'
import { dateMask } from './dateMask'

describe('dateMask should', () => {
  const refInput = {
    current: {
      selectionStart: 8,
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

  test('return date', () => {
    event.target.value = '11112022'
    expect(dateMask(event, refInput)).toBe('11.11.2022')
  })

  test('return empty string', () => {
    event.target.value = 'datedate'
    expect(dateMask(event, refInput)).toBe('')
  })
})
