import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button, { IButtonProps } from './Button'

export default {
  title: 'Conponents/Button',
  component: Button,
  argTypes: {},
  args: {
    children: 'Кнопка',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
}

export const Default = Template.bind({});
Default.args = {
  color: 'default',
}
