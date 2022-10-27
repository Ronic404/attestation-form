import { useEffect, useState } from 'react'

type FunctionReturnType = [string, React.Dispatch<React.SetStateAction<string>>, string]

export function useInput(
  validators: ((value: string) => string)[],
): FunctionReturnType {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setError('')

    for (let i = 0; i < validators.length; i++) {
      const result = validators[i](value)
      if (result) {
        setError(result)
        break
      }
    }
  }, [value])

  return [value, setValue, error]
}
