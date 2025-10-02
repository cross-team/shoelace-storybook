import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

const meta: Meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabs organize content into a container that shows one section at a time.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="general">General</sl-tab>
      <sl-tab slot="nav" panel="custom">Custom</sl-tab>
      <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
      <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

      <sl-tab-panel name="general">
        <p>This is the general tab panel.</p>
      </sl-tab-panel>
      <sl-tab-panel name="custom">
        <p>This is the custom tab panel.</p>
      </sl-tab-panel>
      <sl-tab-panel name="advanced">
        <p>This is the advanced tab panel.</p>
      </sl-tab-panel>
      <sl-tab-panel name="disabled">
        <p>This is a disabled tab panel.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="settings">
        <sl-icon slot="prefix" name="gear"></sl-icon>
        Settings
      </sl-tab>
      <sl-tab slot="nav" panel="dashboard">
        <sl-icon slot="prefix" name="speedometer"></sl-icon>
        Dashboard
      </sl-tab>
      <sl-tab slot="nav" panel="users">
        <sl-icon slot="prefix" name="people"></sl-icon>
        Users
      </sl-tab>
      <sl-tab slot="nav" panel="analytics">
        <sl-icon slot="prefix" name="graph-up"></sl-icon>
        Analytics
      </sl-tab>

      <sl-tab-panel name="settings">
        <h3>Settings</h3>
        <p>Configure your application settings here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="dashboard">
        <h3>Dashboard</h3>
        <p>View your dashboard metrics and statistics.</p>
      </sl-tab-panel>
      <sl-tab-panel name="users">
        <h3>Users</h3>
        <p>Manage user accounts and permissions.</p>
      </sl-tab-panel>
      <sl-tab-panel name="analytics">
        <h3>Analytics</h3>
        <p>View detailed analytics and reports.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const WithBadges: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="inbox">
        Inbox
        <sl-badge variant="primary" pill>12</sl-badge>
      </sl-tab>
      <sl-tab slot="nav" panel="notifications">
        Notifications
        <sl-badge variant="danger" pill>3</sl-badge>
      </sl-tab>
      <sl-tab slot="nav" panel="archived">
        Archived
      </sl-tab>

      <sl-tab-panel name="inbox">
        <h3>Inbox (12 unread)</h3>
        <p>You have 12 new messages in your inbox.</p>
      </sl-tab-panel>
      <sl-tab-panel name="notifications">
        <h3>Notifications (3 new)</h3>
        <p>You have 3 new notifications to review.</p>
      </sl-tab-panel>
      <sl-tab-panel name="archived">
        <h3>Archived</h3>
        <p>View your archived items here.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const BottomPlacement: Story = {
  render: () => html`
    <sl-tab-group placement="bottom">
      <sl-tab slot="nav" panel="general">General</sl-tab>
      <sl-tab slot="nav" panel="custom">Custom</sl-tab>
      <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>

      <sl-tab-panel name="general">
        <p>This tab group has tabs on the bottom.</p>
      </sl-tab-panel>
      <sl-tab-panel name="custom">
        <p>Custom content goes here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="advanced">
        <p>Advanced settings are displayed in this panel.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const StartPlacement: Story = {
  render: () => html`
    <sl-tab-group placement="start">
      <sl-tab slot="nav" panel="general">General</sl-tab>
      <sl-tab slot="nav" panel="custom">Custom</sl-tab>
      <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>

      <sl-tab-panel name="general">
        <p>This tab group has tabs on the left side.</p>
      </sl-tab-panel>
      <sl-tab-panel name="custom">
        <p>Custom content goes here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="advanced">
        <p>Advanced settings are displayed in this panel.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const EndPlacement: Story = {
  render: () => html`
    <sl-tab-group placement="end">
      <sl-tab slot="nav" panel="general">General</sl-tab>
      <sl-tab slot="nav" panel="custom">Custom</sl-tab>
      <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>

      <sl-tab-panel name="general">
        <p>This tab group has tabs on the right side.</p>
      </sl-tab-panel>
      <sl-tab-panel name="custom">
        <p>Custom content goes here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="advanced">
        <p>Advanced settings are displayed in this panel.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const Closable: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="tab-1" closable>Tab 1</sl-tab>
      <sl-tab slot="nav" panel="tab-2" closable>Tab 2</sl-tab>
      <sl-tab slot="nav" panel="tab-3" closable>Tab 3</sl-tab>

      <sl-tab-panel name="tab-1">This is tab 1.</sl-tab-panel>
      <sl-tab-panel name="tab-2">This is tab 2.</sl-tab-panel>
      <sl-tab-panel name="tab-3">This is tab 3.</sl-tab-panel>
    </sl-tab-group>

    <script>
      const tabGroup = document.querySelector('sl-tab-group');

      tabGroup.addEventListener('sl-close', async (event) => {
        const tab = event.target;
        const panel = tabGroup.querySelector(\`sl-tab-panel[name="\${tab.panel}"]\`);

        // Remove the tab and panel
        tab.remove();
        panel.remove();
      });
    </script>
  `,
};

export const Scrolling: Story = {
  render: () => html`
    <sl-tab-group>
      ${Array.from({ length: 20 }, (_, i) => html`
        <sl-tab slot="nav" panel="tab-${i + 1}">Tab ${i + 1}</sl-tab>
      `)}

      ${Array.from({ length: 20 }, (_, i) => html`
        <sl-tab-panel name="tab-${i + 1}">
          <p>This is tab panel ${i + 1}.</p>
        </sl-tab-panel>
      `)}
    </sl-tab-group>
  `,
};
