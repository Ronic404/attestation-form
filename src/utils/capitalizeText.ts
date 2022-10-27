export function capitalizeText(value: string) {
  return value.split(/\s+/).map((word) => {
    if (word) {
      return word[0].toUpperCase() + word.substring(1)
    }
    return word
  }).join(' ')
}
