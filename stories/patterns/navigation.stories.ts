import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

const meta: Meta = {
  title: 'Patterns/Navigation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Common navigation patterns including headers, sidebars, and mobile menus.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const TopNavigation: Story = {
  render: () => html`
    <nav style="
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: var(--sl-color-neutral-0);
      border-bottom: 1px solid var(--sl-color-neutral-200);
    ">
      <div style="display: flex; align-items: center; gap: 2rem;">
        <div style="font-size: 1.5rem; font-weight: bold; color: var(--sl-color-primary-600);">
          Logo
        </div>
        <div style="display: flex; gap: 1rem;">
          <sl-button variant="text">Home</sl-button>
          <sl-button variant="text">Products</sl-button>
          <sl-button variant="text">About</sl-button>
          <sl-button variant="text">Contact</sl-button>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <sl-button variant="default">
          <sl-icon slot="prefix" name="search"></sl-icon>
          Search
        </sl-button>
        <sl-button variant="primary">Sign In</sl-button>
      </div>
    </nav>
  `,
};

export const SidebarNavigation: Story = {
  render: () => html`
    <div style="display: flex; height: 400px; border: 1px solid var(--sl-color-neutral-200); border-radius: 0.5rem; overflow: hidden;">
      <aside style="
        width: 250px;
        background: var(--sl-color-neutral-50);
        border-right: 1px solid var(--sl-color-neutral-200);
        padding: 1rem;
      ">
        <div style="margin-bottom: 1.5rem; padding: 0.5rem; font-weight: bold; color: var(--sl-color-primary-600);">
          Dashboard
        </div>

        <sl-menu>
          <sl-menu-item>
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="speedometer"></sl-icon>
            Analytics
            <sl-badge slot="suffix" variant="primary" pill>3</sl-badge>
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="folder"></sl-icon>
            Projects
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="people"></sl-icon>
            Team
          </sl-menu-item>

          <sl-divider style="margin: 0.75rem 0;"></sl-divider>

          <sl-menu-item>
            <sl-icon slot="prefix" name="gear"></sl-icon>
            Settings
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="question-circle"></sl-icon>
            Help
          </sl-menu-item>
        </sl-menu>
      </aside>

      <main style="flex: 1; padding: 2rem; background: var(--sl-color-neutral-0);">
        <h2 style="margin: 0 0 1rem 0;">Main Content</h2>
        <p style="color: var(--sl-color-neutral-600);">
          This is where your main content would go. The sidebar provides navigation to different sections.
        </p>
      </main>
    </div>
  `,
};

export const MobileNavigation: Story = {
  render: () => html`
    <div>
      <nav style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background: var(--sl-color-neutral-0);
        border-bottom: 1px solid var(--sl-color-neutral-200);
      ">
        <sl-button variant="text" class="menu-trigger">
          <sl-icon name="list"></sl-icon>
        </sl-button>

        <div style="font-size: 1.25rem; font-weight: bold; color: var(--sl-color-primary-600);">
          Logo
        </div>

        <sl-button variant="text">
          <sl-icon name="person"></sl-icon>
        </sl-button>
      </nav>

      <sl-drawer label="Menu" class="mobile-drawer" placement="start">
        <sl-menu>
          <sl-menu-item>
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="search"></sl-icon>
            Search
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="bell"></sl-icon>
            Notifications
            <sl-badge slot="suffix" variant="danger" pill>5</sl-badge>
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="envelope"></sl-icon>
            Messages
          </sl-menu-item>

          <sl-divider></sl-divider>

          <sl-menu-item>
            <sl-icon slot="prefix" name="person"></sl-icon>
            Profile
          </sl-menu-item>
          <sl-menu-item>
            <sl-icon slot="prefix" name="gear"></sl-icon>
            Settings
          </sl-menu-item>

          <sl-divider></sl-divider>

          <sl-menu-item>
            <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
            Sign Out
          </sl-menu-item>
        </sl-menu>
      </sl-drawer>

      <script>
        const drawer = document.querySelector('.mobile-drawer');
        const trigger = document.querySelector('.menu-trigger');

        trigger?.addEventListener('click', () => drawer?.show());
      </script>
    </div>
  `,
};

export const BreadcrumbNavigation: Story = {
  render: () => html`
    <nav style="padding: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
        <a href="#" style="color: var(--sl-color-primary-600); text-decoration: none;">
          <sl-icon name="house"></sl-icon>
        </a>
        <sl-icon name="chevron-right" style="color: var(--sl-color-neutral-400);"></sl-icon>
        <a href="#" style="color: var(--sl-color-primary-600); text-decoration: none;">
          Products
        </a>
        <sl-icon name="chevron-right" style="color: var(--sl-color-neutral-400);"></sl-icon>
        <a href="#" style="color: var(--sl-color-primary-600); text-decoration: none;">
          Electronics
        </a>
        <sl-icon name="chevron-right" style="color: var(--sl-color-neutral-400);"></sl-icon>
        <span style="color: var(--sl-color-neutral-600);">
          Headphones
        </span>
      </div>
    </nav>
  `,
};

export const TabNavigation: Story = {
  render: () => html`
    <div style="border: 1px solid var(--sl-color-neutral-200); border-radius: 0.5rem; overflow: hidden;">
      <nav style="
        display: flex;
        background: var(--sl-color-neutral-0);
        border-bottom: 2px solid var(--sl-color-neutral-200);
      ">
        <sl-button
          variant="text"
          style="
            border-radius: 0;
            border-bottom: 2px solid var(--sl-color-primary-600);
            margin-bottom: -2px;
          "
        >
          Overview
        </sl-button>
        <sl-button variant="text" style="border-radius: 0;">
          Activity
        </sl-button>
        <sl-button variant="text" style="border-radius: 0;">
          Settings
        </sl-button>
        <sl-button variant="text" style="border-radius: 0;">
          Team
        </sl-button>
      </nav>

      <div style="padding: 2rem;">
        <h3 style="margin: 0 0 1rem 0;">Overview</h3>
        <p style="color: var(--sl-color-neutral-600); margin: 0;">
          This is the overview tab content. Click on other tabs to switch between sections.
        </p>
      </div>
    </div>
  `,
};

export const UserProfileNav: Story = {
  render: () => html`
    <nav style="
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: var(--sl-color-neutral-0);
      border-bottom: 1px solid var(--sl-color-neutral-200);
    ">
      <div style="font-size: 1.5rem; font-weight: bold; color: var(--sl-color-primary-600);">
        MyApp
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <sl-button variant="text">
          <sl-icon name="search"></sl-icon>
        </sl-button>

        <sl-dropdown placement="bottom-end">
          <sl-button slot="trigger" variant="text">
            <sl-icon name="bell"></sl-icon>
            <sl-badge variant="danger" pill style="position: absolute; top: 0; right: 0;">3</sl-badge>
          </sl-button>
          <sl-menu>
            <div style="padding: 0.75rem; font-weight: 600; border-bottom: 1px solid var(--sl-color-neutral-200);">
              Notifications
            </div>
            <sl-menu-item>New message from John</sl-menu-item>
            <sl-menu-item>Your report is ready</sl-menu-item>
            <sl-menu-item>Server backup completed</sl-menu-item>
            <sl-divider></sl-divider>
            <sl-menu-item>View all notifications</sl-menu-item>
          </sl-menu>
        </sl-dropdown>

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
            <sl-divider></sl-divider>
            <sl-menu-item>
              <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
              Sign Out
            </sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </div>
    </nav>
  `,
};
