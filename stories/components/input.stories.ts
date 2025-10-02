import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Inputs collect data from users. They are typically used in forms.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'search', 'tel', 'url', 'date'],
      description: 'The input type',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The input size',
    },
    label: {
      control: 'text',
      description: 'The input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the input readonly',
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required',
    },
    clearable: {
      control: 'boolean',
      description: 'Adds a clear button',
    },
    passwordToggle: {
      control: 'boolean',
      description: 'Adds a password toggle button',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'medium',
    label: 'Label',
    placeholder: 'Enter text',
  },
  render: (args) => html`
    <sl-input
      type=${args.type}
      size=${args.size}
      label=${args.label || ''}
      placeholder=${args.placeholder || ''}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      ?required=${args.required}
      ?clearable=${args.clearable}
      ?password-toggle=${args.passwordToggle}
    ></sl-input>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input size="small" label="Small" placeholder="Small input"></sl-input>
      <sl-input size="medium" label="Medium" placeholder="Medium input"></sl-input>
      <sl-input size="large" label="Large" placeholder="Large input"></sl-input>
    </div>
  `,
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input type="text" label="Text" placeholder="Enter text"></sl-input>
      <sl-input type="email" label="Email" placeholder="Enter email"></sl-input>
      <sl-input type="number" label="Number" placeholder="Enter number"></sl-input>
      <sl-input type="password" label="Password" placeholder="Enter password" password-toggle></sl-input>
      <sl-input type="search" label="Search" placeholder="Search..."></sl-input>
      <sl-input type="date" label="Date"></sl-input>
      <sl-input type="tel" label="Phone" placeholder="Enter phone number"></sl-input>
      <sl-input type="url" label="URL" placeholder="https://example.com"></sl-input>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input label="Username" placeholder="Enter username">
        <sl-icon name="person" slot="prefix"></sl-icon>
      </sl-input>

      <sl-input label="Email" placeholder="Enter email" type="email">
        <sl-icon name="envelope" slot="prefix"></sl-icon>
      </sl-input>

      <sl-input label="Search" placeholder="Search..." clearable>
        <sl-icon name="search" slot="prefix"></sl-icon>
      </sl-input>

      <sl-input label="Amount" placeholder="0.00">
        <span slot="prefix">$</span>
        <span slot="suffix">USD</span>
      </sl-input>
    </div>
  `,
};

export const HelpText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input label="Username" help-text="Choose a unique username"></sl-input>

      <sl-input
        label="Password"
        type="password"
        password-toggle
        help-text="Must be at least 8 characters"
      ></sl-input>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input label="Normal" placeholder="Normal input"></sl-input>
      <sl-input label="Disabled" placeholder="Disabled input" disabled></sl-input>
      <sl-input label="Readonly" value="Read-only value" readonly></sl-input>
      <sl-input label="Required" placeholder="Required input" required></sl-input>
      <sl-input label="Clearable" placeholder="Clearable input" clearable value="Clear me"></sl-input>
    </div>
  `,
};

export const Validation: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input
        label="Email"
        type="email"
        placeholder="Enter email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        help-text="Please enter a valid email address"
      ></sl-input>

      <sl-input
        label="Phone"
        type="tel"
        placeholder="(555) 555-5555"
        required
        pattern="\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}"
        help-text="Format: (555) 555-5555"
      ></sl-input>

      <sl-input
        label="Age"
        type="number"
        min="18"
        max="120"
        help-text="Must be between 18 and 120"
      ></sl-input>
    </div>
  `,
};
