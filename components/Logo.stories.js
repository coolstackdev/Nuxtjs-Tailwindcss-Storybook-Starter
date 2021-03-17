import Logo from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Logo',
    },
  },
}

export const LogoComponent = (arg, { argTypes }) => ({
  components: { Logo },
  props: Object.keys(argTypes),
  template: '<Logo v-bind="$props" />',
})
