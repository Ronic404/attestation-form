import { ChangeEvent } from 'react'

export function nameMask(event: ChangeEvent<HTMLInputElement>): string {
  let symbols = event.target.value.replace(/[^а-яёА-ЯЁ -]/g, '')
  symbols = symbols.replace(/\s+/g, ' ')
  symbols = symbols.replace(/-+/g, '-')

  if (symbols[0] === ' ' || symbols[0] === '-') {
    symbols = symbols.substring(1)
  }

  return symbols
}
