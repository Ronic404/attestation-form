export const requireValidator = (error?: string) => (value: string): string => {
  if (!value.trim()) {
    return error || 'Обязательное поле'
  }

  return ''
}
