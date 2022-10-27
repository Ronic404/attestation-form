interface IDate {
  date: string
  error?: string
}

export const dateValidator = (
  minDate: IDate | null,
  maxDate: IDate | null,
  error: string,
) => (value: string): string => {
  const [curD, curM, curY] = value.trim().split('.')
  const current = +new Date(+curY, +curM - 1, +curD)

  if (+curD > 31 || +curM > 12) {
    return error || 'Неверный день или месяц'
  }

  if (minDate) {
    const [minD, minM, minY] = minDate.date.split('.')
    const min = +new Date(+minY, +minM - 1, +minD)

    if (min > current) {
      return minDate.error || 'Слишком маленькая дата'
    }
  }

  if (maxDate) {
    const [maxD, maxM, maxY] = maxDate.date.split('.')
    const max = +new Date(+maxY, +maxM - 1, +maxD)

    if (max < current) {
      return maxDate.error || 'Слишком большая дата'
    }
  }

  return ''
}
