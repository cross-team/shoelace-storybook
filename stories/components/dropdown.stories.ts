import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';

const meta: Meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dropdowns expose additional content that "drops down" when activated.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Dropdown</sl-button>
      <sl-menu>
        <sl-menu-item>Dropdown Item 1</sl-menu-item>
        <sl-menu-item>Dropdown Item 2</sl-menu-item>
        <sl-menu-item>Dropdown Item 3</sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>Dropdown Item 4</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const Placement: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; padding: 4rem 0;">
      <sl-dropdown placement="top">
        <sl-button slot="trigger" caret>Top</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>

      <sl-dropdown placement="bottom">
        <sl-button slot="trigger" caret>Bottom</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>

      <sl-dropdown placement="left">
        <sl-button slot="trigger" caret>Left</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>

      <sl-dropdown placement="right">
        <sl-button slot="trigger" caret>Right</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>
    </div>
  `,
};

export const Distance: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      <sl-dropdown distance="0">
        <sl-button slot="trigger" caret>Distance 0</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>

      <sl-dropdown distance="10">
        <sl-button slot="trigger" caret>Distance 10</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>

      <sl-dropdown distance="25">
        <sl-button slot="trigger" caret>Distance 25</sl-button>
        <sl-menu>
          <sl-menu-item>Item 1</sl-menu-item>
          <sl-menu-item>Item 2</sl-menu-item>
          <sl-menu-item>Item 3</sl-menu-item>
        </sl-menu>
      </sl-dropdown>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Actions</sl-button>
      <sl-menu>
        <sl-menu-item>
          <sl-icon slot="prefix" name="house"></sl-icon>
          Home
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="envelope"></sl-icon>
          Messages
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="gear"></sl-icon>
          Settings
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>
          <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
          Logout
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const UserMenu: Story = {
  render: () => html`
    <sl-dropdown placement="bottom-end">
      <sl-button slot="trigger" variant="default">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
          alt="User"
          style="width: 24px; height: 24px; border-radius: 50%; margin-right: 0.5rem; object-fit: cover;"
        />
        Sarah Johnson
        <sl-icon slot="suffix" name="chevron-down"></sl-icon>
      </sl-button>
      <sl-menu>
        <sl-menu-item>
          <sl-icon slot="prefix" name="person"></sl-icon>
          Profile
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="gear"></sl-icon>
          Settings
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="bell"></sl-icon>
          Notifications
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>
          <sl-icon slot="prefix" name="question-circle"></sl-icon>
          Help & Support
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>
          <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
          Sign Out
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const NestedMenus: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>File</sl-button>
      <sl-menu>
        <sl-menu-item>New File</sl-menu-item>
        <sl-menu-item>Open File</sl-menu-item>
        <sl-menu-item>
          Recent Files
          <sl-menu slot="submenu">
            <sl-menu-item>Document 1.pdf</sl-menu-item>
            <sl-menu-item>Document 2.pdf</sl-menu-item>
            <sl-menu-item>Spreadsheet.xlsx</sl-menu-item>
          </sl-menu>
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>Save</sl-menu-item>
        <sl-menu-item>Save As...</sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>Exit</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const HoverTrigger: Story = {
  render: () => html`
    <sl-dropdown hoist>
      <sl-button slot="trigger" caret>Hover Me</sl-button>
      <sl-menu>
        <sl-menu-item>Item 1</sl-menu-item>
        <sl-menu-item>Item 2</sl-menu-item>
        <sl-menu-item>Item 3</sl-menu-item>
      </sl-menu>
    </sl-dropdown>

    <script>
      const dropdown = document.querySelector('sl-dropdown[hoist]');
      const trigger = dropdown.querySelector('[slot="trigger"]');

      trigger.addEventListener('mouseenter', () => dropdown.show());
      dropdown.addEventListener('mouseleave', () => dropdown.hide());
    </script>
  `,
};
