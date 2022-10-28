import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input, { IInputProps } from './Input';
import { phoneMask } from '../../utils/masks';

export default {
  title: 'Conponents/Input',
  component: Input,
  argTypes: {},
  args: {
    label: 'Поле ввода',
  },
} as ComponentMeta<typeof Input>

// Шаблон с пустым value
const TemplateWithoutText: ComponentStory<typeof Input> = (args: IInputProps) => {
  const [value, setValue] = useState<string>('')
  return <Input {...args} value={value} onChange={setValue} />
}
// Шаблон с заполненным value
const TemplateWithText: ComponentStory<typeof Input> = (args: IInputProps) => {
  const [value, setValue] = useState<string>('Некоторый текст')
  return <Input {...args} value={value} onChange={setValue} />
}

export const WithoutText = TemplateWithoutText.bind({});
WithoutText.args = {}

export const WithText = TemplateWithText.bind({});
WithText.args = {}

export const WithPlaceholder = TemplateWithoutText.bind({});
WithPlaceholder.args = {
  placeholder: 'Введите текст',
}

export const WithoutTextError = TemplateWithoutText.bind({});
WithoutTextError.args = {
  error: 'Ошибка',
}

export const Error = TemplateWithText.bind({});
Error.args = {
  error: 'Ошибка',
}

export const PhoneMask = TemplateWithoutText.bind({});
PhoneMask.args = {
  mask: phoneMask,
}

export const MaxLength10 = TemplateWithoutText.bind({});
MaxLength10.args = {
  maxLength: 10,
}
