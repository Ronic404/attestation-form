import { ComponentStory, ComponentMeta } from '@storybook/react'

import App from './App';

export default {
  title: 'Entities/Form',
  component: App,
  argTypes: {},
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />

export const Form = Template.bind({});
Form.args = {}
