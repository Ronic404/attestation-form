export const minDate = (date) => (value) => {
  const [md, mm, my] = date.split('.')
  const [cy, cm, cd] = value.trim().split('-')

  const min = +new Date(my, mm - 1, md)
  const current = +new Date(cy, cm - 1, cd)

  if (current < min) {
    return 'Неверная дата'
  }

  return ''
}
