const regex = /^\+7 \(\d{1,3}\) \d{1,3}-\d{1,2}-\d{1,2}$/

export function phoneMask(event, refInput) {
  let digits = event.target.value.replace(/\D/g, '')
  let formattedValue = '+7'
  const { selectionStart } = refInput.current

  if (!digits) return ''

  if (event.target.value.length !== selectionStart) {
    const { data } = event.nativeEvent
    if (!data) {
      return event.target.value
    }
    if (data && event.target.value.length === 19) {
      return event.target.defaultValue
    }
    if (data && !/\d/g.test(data)) {
      return event.target.defaultValue
    }
    if (data && /\d/g.test(data) && regex.test(event.target.value)) {
      return event.target.value
    }
  }

  if (['1', '2', '7'].includes(digits[1])) {
    const arr = digits.split('')
    arr[1] = '9'
    digits = arr.join('')
  }

  if (digits.length > 1) {
    formattedValue += ` (${digits.substring(1, 4)}`
  }
  if (digits.length > 4) {
    formattedValue += `) ${digits.substring(4, 7)}`
  }
  if (digits.length > 7) {
    formattedValue += `-${digits.substring(7, 9)}`
  }
  if (digits.length > 9) {
    formattedValue += `-${digits.substring(9, 11)}`
  }

  return formattedValue
}
