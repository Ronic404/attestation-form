import { useEffect, useState } from 'react'

export function useInput(validators, isSubmitted) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')

    for (let i = 0; i < validators.length; i++) {
      const result = validators[i](value)
      if (result) {
        setError(result)
        break
      }
    }
  }, [value, isSubmitted])

  return [value, setValue, isSubmitted ? error : '']
}
