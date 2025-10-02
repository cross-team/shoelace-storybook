import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Alerts are used to display important messages inline or as toast notifications.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: 'The alert variant',
    },
    open: {
      control: 'boolean',
      description: 'Whether the alert is open',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be closed',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-close',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'primary',
    open: true,
    closable: false,
  },
  render: (args) => html`
    <sl-alert variant=${args.variant} ?open=${args.open} ?closable=${args.closable} duration=${args.duration || 'Infinity'}>
      <sl-icon slot="icon" name="info-circle"></sl-icon>
      This is a standard alert. You can customize it with several options.
    </sl-alert>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-alert variant="primary" open>
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        <strong>Primary alert</strong><br />
        This is a primary alert with some additional context.
      </sl-alert>

      <sl-alert variant="success" open>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        <strong>Success alert</strong><br />
        Your changes have been saved successfully.
      </sl-alert>

      <sl-alert variant="neutral" open>
        <sl-icon slot="icon" name="gear"></sl-icon>
        <strong>Neutral alert</strong><br />
        This is a neutral informational alert.
      </sl-alert>

      <sl-alert variant="warning" open>
        <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
        <strong>Warning alert</strong><br />
        Please review your settings before proceeding.
      </sl-alert>

      <sl-alert variant="danger" open>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        <strong>Danger alert</strong><br />
        An error occurred. Please try again.
      </sl-alert>
    </div>
  `,
};

export const Closable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-alert variant="primary" open closable>
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        This alert can be closed by clicking the close button.
      </sl-alert>

      <sl-alert variant="success" open closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You can dismiss this message when you're done reading it.
      </sl-alert>
    </div>
  `,
};

export const WithoutIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-alert variant="primary" open>
        This alert doesn't have an icon.
      </sl-alert>

      <sl-alert variant="success" open closable>
        Neither does this one, but it can be closed.
      </sl-alert>
    </div>
  `,
};

export const Duration: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p>This alert will auto-close after 3 seconds:</p>
      <sl-alert variant="primary" open closable duration="3000">
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        This alert will close automatically in 3 seconds.
      </sl-alert>
    </div>
  `,
};

export const CustomContent: Story = {
  render: () => html`
    <sl-alert variant="primary" open>
      <sl-icon slot="icon" name="info-circle"></sl-icon>
      <strong>Account Update Available</strong><br />
      <div style="margin-top: 0.5rem;">
        A new version of your account settings is available. Would you like to update now?
      </div>
      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <sl-button variant="primary" size="small">Update Now</sl-button>
        <sl-button variant="default" size="small">Remind Me Later</sl-button>
      </div>
    </sl-alert>
  `,
};

export const ToastNotifications: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-button
        @click=${() => {
          const container = document.createElement('div');
          container.style.cssText = 'position: fixed; top: 1rem; right: 1rem; z-index: 1000; max-width: 400px;';

          const alert = document.createElement('sl-alert');
          alert.variant = 'success';
          alert.closable = true;
          alert.duration = 3000;
          alert.innerHTML = `
            <sl-icon slot="icon" name="check2-circle"></sl-icon>
            <strong>Success!</strong><br />
            Your changes have been saved.
          `;

          container.appendChild(alert);
          document.body.appendChild(container);

          alert.toast();

          alert.addEventListener('sl-after-hide', () => {
            container.remove();
          });
        }}
      >
        Show Toast
      </sl-button>

      <p style="color: var(--sl-color-neutral-600); font-size: 0.875rem;">
        Click the button above to see a toast notification in the top-right corner.
      </p>
    </div>
  `,
};
