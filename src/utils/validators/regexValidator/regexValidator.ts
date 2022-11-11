export const regexValidator = (regex: RegExp, error?: string) => (value: string): string => {
  if (!regex.test(value.trim())) {
    return error || 'Неверный формат'
  }

  return ''
}
