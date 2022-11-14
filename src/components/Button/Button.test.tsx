import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button should', () => {
  test('render', () => {
    render(<Button>Push</Button>)
    const element = screen.getByText(/push/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('button_primary')
  })

  test('be clicked and get focus', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Push</Button>)
    const element = screen.getByText(/push/i)

    expect(element).not.toHaveFocus()
    userEvent.click(element)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(element).toHaveFocus()
  })
})
