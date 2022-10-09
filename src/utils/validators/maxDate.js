export const maxDate = (date) => (value) => {
  const [md, mm, my] = date.split('.')
  const [cy, cm, cd] = value.trim().split('-')

  const max = +new Date(my, mm - 1, md)
  const current = +new Date(cy, cm - 1, cd)

  if (current > max) {
    return 'Неверная дата'
  }

  return ''
}
