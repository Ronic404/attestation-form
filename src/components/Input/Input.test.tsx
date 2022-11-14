import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

const onChange = jest.fn()

describe('Input should', () => {
  test('render', () => {
    render(<Input label="label" onChange={onChange} />)
    const element = screen.getByTestId('inputWrapper')
    expect(element).toBeInTheDocument()
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
  })

  test('have type attribute', () => {
    render(<Input label="label" onChange={onChange} type="tel" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('type', 'tel')
  })

  test('change value', () => {
    render(<Input label="label" onChange={onChange} />)
    userEvent.type(screen.getByTestId('input'), 'phone')
    expect(screen.getByTestId('input')).toHaveValue('phone')
  })

  test('work capitalze', () => {
    render(<Input label="label" onChange={onChange} capitalize />)
    userEvent.type(screen.getByTestId('input'), 'phone')
    expect(onChange).toHaveBeenCalledWith('Phone')
  })
})
