import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta: Meta = {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dialogs, sometimes called "modals", appear above the page and require the user\'s immediate attention.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-dialog label="Dialog" class="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <sl-button slot="footer" variant="primary">Close</sl-button>
    </sl-dialog>

    <sl-button @click=${() => {
      const dialog = document.querySelector('.dialog-overview');
      dialog?.show();
    }}>Open Dialog</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-overview');
      const closeButton = dialog.querySelector('sl-button[slot="footer"]');
      closeButton.addEventListener('click', () => dialog.hide());
    </script>
  `,
};

export const CustomWidth: Story = {
  render: () => html`
    <sl-dialog label="Custom Width" class="dialog-width" style="--width: 50vw;">
      This dialog has a custom width of 50vw.
      <sl-button slot="footer" variant="primary">Close</sl-button>
    </sl-dialog>

    <sl-button @click=${() => {
      const dialog = document.querySelector('.dialog-width');
      dialog?.show();
    }}>Open Dialog</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-width');
      const closeButton = dialog.querySelector('sl-button[slot="footer"]');
      closeButton.addEventListener('click', () => dialog.hide());
    </script>
  `,
};

export const NoHeader: Story = {
  render: () => html`
    <sl-dialog class="dialog-no-header">
      A dialog can be created without a header. This is useful for simple messages.
      <sl-button slot="footer" variant="primary">Close</sl-button>
    </sl-dialog>

    <sl-button @click=${() => {
      const dialog = document.querySelector('.dialog-no-header');
      dialog?.show();
    }}>Open Dialog</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-no-header');
      const closeButton = dialog.querySelector('sl-button[slot="footer"]');
      closeButton.addEventListener('click', () => dialog.hide());
    </script>
  `,
};

export const PreventClosing: Story = {
  render: () => html`
    <sl-dialog label="Important Message" class="dialog-no-close" no-header>
      This dialog cannot be closed by clicking the X or pressing Escape. You must use the button.
      <sl-button slot="footer" variant="primary">I Understand</sl-button>
    </sl-dialog>

    <sl-button @click=${() => {
      const dialog = document.querySelector('.dialog-no-close');
      if (dialog) {
        dialog.addEventListener('sl-request-close', (event) => {
          if (event.detail.source === 'overlay' || event.detail.source === 'close-button' || event.detail.source === 'keyboard') {
            event.preventDefault();
          }
        });
        dialog.show();
      }
    }}>Open Dialog</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-no-close');
      const closeButton = dialog.querySelector('sl-button[slot="footer"]');
      closeButton.addEventListener('click', () => dialog.hide());
    </script>
  `,
};

export const Scrolling: Story = {
  render: () => html`
    <sl-dialog label="Scrolling Content" class="dialog-scrolling">
      <div style="height: 150vh;">
        <p>This content is taller than the dialog, so it will scroll.</p>
        ${Array.from({ length: 50 }, (_, i) => html`<p>Paragraph ${i + 1}</p>`)}
      </div>
      <sl-button slot="footer" variant="primary">Close</sl-button>
    </sl-dialog>

    <sl-button @click=${() => {
      const dialog = document.querySelector('.dialog-scrolling');
      dialog?.show();
    }}>Open Dialog</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-scrolling');
      const closeButton = dialog.querySelector('sl-button[slot="footer"]');
      closeButton.addEventListener('click', () => dialog.hide());
    </script>
  `,
};

export const ConfirmationDialog: Story = {
  render: () => html`
    <sl-dialog label="Confirm Action" class="dialog-confirm">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <sl-button variant="default" class="cancel-btn">Cancel</sl-button>
        <sl-button variant="danger" class="confirm-btn">Delete</sl-button>
      </div>
    </sl-dialog>

    <sl-button variant="danger" @click=${() => {
      const dialog = document.querySelector('.dialog-confirm');
      dialog?.show();
    }}>Delete Item</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-confirm');
      const cancelBtn = dialog.querySelector('.cancel-btn');
      const confirmBtn = dialog.querySelector('.confirm-btn');

      cancelBtn.addEventListener('click', () => dialog.hide());
      confirmBtn.addEventListener('click', () => {
        // Perform delete action
        dialog.hide();
      });
    </script>
  `,
};

export const FormDialog: Story = {
  render: () => html`
    <sl-dialog label="Create Account" class="dialog-form">
      <form>
        <sl-input label="Name" name="name" required style="margin-bottom: 1rem;"></sl-input>
        <sl-input label="Email" name="email" type="email" required style="margin-bottom: 1rem;"></sl-input>
        <sl-input label="Password" name="password" type="password" password-toggle required style="margin-bottom: 1rem;"></sl-input>
        <sl-textarea label="Bio" name="bio" rows="3"></sl-textarea>
      </form>
      <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <sl-button variant="default" class="cancel-form">Cancel</sl-button>
        <sl-button variant="primary" type="submit" class="submit-form">Create Account</sl-button>
      </div>
    </sl-dialog>

    <sl-button variant="primary" @click=${() => {
      const dialog = document.querySelector('.dialog-form');
      dialog?.show();
    }}>Create Account</sl-button>

    <script>
      const dialog = document.querySelector('.dialog-form');
      const cancelBtn = dialog.querySelector('.cancel-form');
      const submitBtn = dialog.querySelector('.submit-form');

      cancelBtn.addEventListener('click', () => dialog.hide());
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Handle form submission
        dialog.hide();
      });
    </script>
  `,
};
