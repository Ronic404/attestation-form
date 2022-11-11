import { ChangeEvent } from 'react'

const regex = /^\d{0,2}\.\d{0,2}\.\d{0,4}$/

export function dateMask(event: ChangeEvent<HTMLInputElement>, refInput: React.RefObject<HTMLInputElement>): string {
  // @ts-ignore
  const { data } = event.nativeEvent
  const digits = event.target.value.replace(/\D/g, '')
  let formattedValue = ''
  const { selectionStart } = refInput.current!

  if (!digits) return ''

  if (!data) {
    return event.target.value
  }

  if (event.target.value.length !== selectionStart) {
    if (data && !/\d/g.test(data)) {
      return event.target.defaultValue
    }
    if (data && /\d/g.test(data) && regex.test(event.target.value)) {
      return event.target.value
    }
  }

  if (digits.length > 0) {
    formattedValue += `${digits.substring(0, 2)}`
  }
  if (digits.length > 2) {
    formattedValue += `.${digits.substring(2, 4)}`
  }
  if (digits.length > 4) {
    formattedValue += `.${digits.substring(4, 8)}`
  }

  return formattedValue
}
