import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Icons using Tabler Icons with Shoelace icon component. Over 5,000+ beautiful, customizable icons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Popular icon categories from Tabler
const iconCategories = {
  'Common Actions': [
    'home', 'search', 'settings', 'menu-2', 'x', 'check', 'plus', 'minus',
    'edit', 'trash', 'download', 'upload', 'refresh', 'save', 'copy'
  ],
  'Navigation': [
    'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
    'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
    'external-link', 'link', 'dots-vertical', 'dots'
  ],
  'Communication': [
    'mail', 'message', 'bell', 'phone', 'video', 'microphone',
    'send', 'inbox', 'at', 'brand-slack', 'brand-teams'
  ],
  'Media': [
    'photo', 'camera', 'video', 'music', 'file', 'folder',
    'file-text', 'file-download', 'file-upload', 'cloud', 'cloud-upload'
  ],
  'Users': [
    'user', 'users', 'user-plus', 'user-check', 'user-x',
    'heart', 'star', 'bookmark', 'share', 'lock', 'lock-open'
  ],
  'Commerce': [
    'shopping-cart', 'credit-card', 'currency-dollar', 'gift',
    'tag', 'ticket', 'discount', 'receipt', 'building-store'
  ],
  'System': [
    'alert-circle', 'alert-triangle', 'info-circle', 'help',
    'eye', 'eye-off', 'loader', 'circle-check', 'circle-x'
  ],
};

export const BasicUsage: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      <sl-icon name="home" style="font-size: 2rem;"></sl-icon>
      <sl-icon name="settings" style="font-size: 2rem;"></sl-icon>
      <sl-icon name="star" style="font-size: 2rem;"></sl-icon>
      <sl-icon name="heart" style="font-size: 2rem;"></sl-icon>
      <sl-icon name="user" style="font-size: 2rem;"></sl-icon>
    </div>
  `,
};

export const WithTablerIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      <i class="ti ti-home icon-lg"></i>
      <i class="ti ti-settings icon-lg"></i>
      <i class="ti ti-star icon-lg"></i>
      <i class="ti ti-heart icon-lg"></i>
      <i class="ti ti-user icon-lg"></i>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <i class="ti ti-home icon-sm"></i>
      <i class="ti ti-home icon-md"></i>
      <i class="ti ti-home icon-lg"></i>
      <i class="ti ti-home icon-xl"></i>
      <i class="ti ti-home icon-2xl"></i>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <i class="ti ti-heart icon-lg icon-primary"></i>
      <i class="ti ti-star icon-lg icon-warning"></i>
      <i class="ti ti-check icon-lg icon-success"></i>
      <i class="ti ti-alert-triangle icon-lg icon-danger"></i>
      <i class="ti ti-info-circle icon-lg icon-muted"></i>
    </div>
  `,
};

export const InButtons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <sl-button variant="primary">
        <i class="ti ti-plus icon-sm" slot="prefix"></i>
        Add Item
      </sl-button>

      <sl-button variant="default">
        <i class="ti ti-download icon-sm" slot="prefix"></i>
        Download
      </sl-button>

      <sl-button variant="success">
        <i class="ti ti-check icon-sm" slot="prefix"></i>
        Save
      </sl-button>

      <sl-button variant="danger">
        <i class="ti ti-trash icon-sm" slot="prefix"></i>
        Delete
      </sl-button>

      <sl-button variant="default" circle>
        <i class="ti ti-settings icon-sm"></i>
      </sl-button>
    </div>
  `,
};

export const IconLibrary: Story = {
  render: () => html`
    <style>
      .icon-library {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
      }

      .icon-category {
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
        padding: 1.5rem;
      }

      .category-title {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--sl-color-neutral-700);
      }

      .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 1.5rem;
      }

      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 0.375rem;
        transition: all 0.2s;
        cursor: pointer;
      }

      .icon-item:hover {
        background-color: var(--sl-color-neutral-100);
      }

      .icon-item i {
        font-size: 1.5rem;
        color: var(--sl-color-neutral-700);
      }

      .icon-name {
        font-size: 0.75rem;
        color: var(--sl-color-neutral-600);
        text-align: center;
        word-break: break-word;
      }
    </style>

    <div class="icon-library">
      ${Object.entries(iconCategories).map(
        ([category, icons]) => html`
          <div class="icon-category">
            <div class="category-title">${category}</div>
            <div class="icon-grid">
              ${icons.map(
                (icon) => html`
                  <div class="icon-item" title="ti ti-${icon}">
                    <i class="ti ti-${icon}"></i>
                    <span class="icon-name">${icon}</span>
                  </div>
                `
              )}
            </div>
          </div>
        `
      )}

      <sl-alert variant="primary" open>
        <i class="ti ti-info-circle" slot="icon"></i>
        <strong>Browse all 5,000+ icons:</strong>
        Visit <a href="https://tabler.io/icons" target="_blank" rel="noopener">tabler.io/icons</a>
        to explore the complete Tabler Icons library.
      </sl-alert>
    </div>
  `,
};
