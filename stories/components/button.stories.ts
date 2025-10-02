import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Buttons represent actions that are available to the user. They are one of the most common interactive elements.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'neutral', 'warning', 'danger', 'text'],
      description: 'The button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The button size',
    },
    outline: {
      control: 'boolean',
      description: 'Draws an outlined button',
    },
    pill: {
      control: 'boolean',
      description: 'Draws a pill-style button with rounded edges',
    },
    circle: {
      control: 'boolean',
      description: 'Draws a circular icon button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading indicator',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
  },
  render: (args) => html`
    <sl-button
      variant=${args.variant}
      size=${args.size}
      ?outline=${args.outline}
      ?pill=${args.pill}
      ?circle=${args.circle}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      Button
    </sl-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <sl-button variant="default">Default</sl-button>
      <sl-button variant="primary">Primary</sl-button>
      <sl-button variant="success">Success</sl-button>
      <sl-button variant="neutral">Neutral</sl-button>
      <sl-button variant="warning">Warning</sl-button>
      <sl-button variant="danger">Danger</sl-button>
      <sl-button variant="text">Text</sl-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <sl-button size="small">Small</sl-button>
      <sl-button size="medium">Medium</sl-button>
      <sl-button size="large">Large</sl-button>
    </div>
  `,
};

export const Outline: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <sl-button variant="default" outline>Default</sl-button>
      <sl-button variant="primary" outline>Primary</sl-button>
      <sl-button variant="success" outline>Success</sl-button>
      <sl-button variant="neutral" outline>Neutral</sl-button>
      <sl-button variant="warning" outline>Warning</sl-button>
      <sl-button variant="danger" outline>Danger</sl-button>
    </div>
  `,
};

export const Pill: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <sl-button variant="default" pill>Default</sl-button>
      <sl-button variant="primary" pill>Primary</sl-button>
      <sl-button variant="success" pill>Success</sl-button>
      <sl-button variant="neutral" pill>Neutral</sl-button>
      <sl-button variant="warning" pill>Warning</sl-button>
      <sl-button variant="danger" pill>Danger</sl-button>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <sl-button>Default</sl-button>
      <sl-button disabled>Disabled</sl-button>
      <sl-button loading>Loading</sl-button>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <style>
      @import '@shoelace-style/shoelace/dist/components/icon/icon.js';
    </style>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <sl-button variant="primary">
        <sl-icon slot="prefix" name="gear"></sl-icon>
        Settings
      </sl-button>
      <sl-button variant="success">
        Save
        <sl-icon slot="suffix" name="arrow-right"></sl-icon>
      </sl-button>
      <sl-button variant="danger" circle>
        <sl-icon name="trash"></sl-icon>
      </sl-button>
    </div>
  `,
};

export const FullWidth: Story = {
  render: () => html`
    <sl-button variant="primary" style="width: 100%;">Full Width Button</sl-button>
  `,
};
