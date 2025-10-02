import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Spacing tokens for consistent padding, margins, and gaps throughout the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const spacingTokens = [
  { token: '--sl-spacing-3x-small', label: '3X Small' },
  { token: '--sl-spacing-2x-small', label: '2X Small' },
  { token: '--sl-spacing-x-small', label: 'X Small' },
  { token: '--sl-spacing-small', label: 'Small' },
  { token: '--sl-spacing-medium', label: 'Medium' },
  { token: '--sl-spacing-large', label: 'Large' },
  { token: '--sl-spacing-x-large', label: 'X Large' },
  { token: '--sl-spacing-2x-large', label: '2X Large' },
  { token: '--sl-spacing-3x-large', label: '3X Large' },
  { token: '--sl-spacing-4x-large', label: '4X Large' },
];

export const AllSpacing: Story = {
  render: () => html`
    <style>
      .spacing-demo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .spacing-item {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .spacing-label {
        min-width: 200px;
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-700);
      }

      .spacing-visual {
        height: 40px;
        background: var(--sl-color-primary-500);
        border-radius: 0.25rem;
      }

      .spacing-value {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--sl-color-neutral-600);
      }
    </style>

    <div class="spacing-demo">
      ${spacingTokens.map(
        ({ token, label }) => html`
          <div class="spacing-item">
            <div class="spacing-label">${token}</div>
            <div class="spacing-visual" style="width: var(${token})"></div>
            <div class="spacing-value">${label}</div>
          </div>
        `
      )}
    </div>
  `,
};

export const SpacingGrid: Story = {
  render: () => html`
    <style>
      .spacing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
        padding: 1rem;
      }

      .spacing-card {
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
      }

      .spacing-box {
        background: var(--sl-color-primary-100);
        border: 2px solid var(--sl-color-primary-500);
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem auto;
      }

      .spacing-inner {
        background: var(--sl-color-primary-500);
        color: white;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
      }

      .spacing-card-label {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--sl-color-neutral-600);
        margin-top: 0.5rem;
      }
    </style>

    <div class="spacing-grid">
      ${spacingTokens.map(
        ({ token, label }) => html`
          <div class="spacing-card">
            <div class="spacing-box" style="padding: var(${token})">
              <div class="spacing-inner">Content</div>
            </div>
            <div class="spacing-card-label">${token}</div>
          </div>
        `
      )}
    </div>
  `,
};
