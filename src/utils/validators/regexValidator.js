export const regexValidator = (regex) => (value) => {
  if (!regex.test(value.trim())) {
    return 'Неверный формат'
  }

  return ''
}
