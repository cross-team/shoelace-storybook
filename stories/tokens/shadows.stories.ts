import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design Tokens/Shadows',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Shadow tokens for elevation and depth in the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const shadowTokens = [
  { token: '--sl-shadow-x-small', label: 'X Small' },
  { token: '--sl-shadow-small', label: 'Small' },
  { token: '--sl-shadow-medium', label: 'Medium' },
  { token: '--sl-shadow-large', label: 'Large' },
  { token: '--sl-shadow-x-large', label: 'X Large' },
];

export const AllShadows: Story = {
  render: () => html`
    <style>
      .shadow-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
        padding: 3rem;
        background: var(--sl-color-neutral-50);
      }

      .shadow-card {
        background: white;
        border-radius: 0.5rem;
        padding: 2rem;
        text-align: center;
      }

      .shadow-label {
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-700);
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .shadow-description {
        font-size: 0.75rem;
        color: var(--sl-color-neutral-600);
      }
    </style>

    <div class="shadow-demo">
      ${shadowTokens.map(
        ({ token, label }) => html`
          <div class="shadow-card" style="box-shadow: var(${token})">
            <div class="shadow-label">${token}</div>
            <div class="shadow-description">${label}</div>
          </div>
        `
      )}
    </div>
  `,
};

export const ShadowComparison: Story = {
  render: () => html`
    <style>
      .shadow-comparison {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background: var(--sl-color-neutral-50);
      }

      .shadow-row {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .shadow-box {
        width: 200px;
        height: 100px;
        background: white;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .shadow-info {
        flex: 1;
      }

      .shadow-name {
        font-family: monospace;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sl-color-neutral-700);
        margin-bottom: 0.25rem;
      }

      .shadow-use {
        font-size: 0.75rem;
        color: var(--sl-color-neutral-600);
      }
    </style>

    <div class="shadow-comparison">
      <div class="shadow-row">
        <div class="shadow-box" style="box-shadow: var(--sl-shadow-x-small)"></div>
        <div class="shadow-info">
          <div class="shadow-name">--sl-shadow-x-small</div>
          <div class="shadow-use">Subtle elevation, tags, badges</div>
        </div>
      </div>

      <div class="shadow-row">
        <div class="shadow-box" style="box-shadow: var(--sl-shadow-small)"></div>
        <div class="shadow-info">
          <div class="shadow-name">--sl-shadow-small</div>
          <div class="shadow-use">Low elevation, tooltips, small menus</div>
        </div>
      </div>

      <div class="shadow-row">
        <div class="shadow-box" style="box-shadow: var(--sl-shadow-medium)"></div>
        <div class="shadow-info">
          <div class="shadow-name">--sl-shadow-medium</div>
          <div class="shadow-use">Medium elevation, cards, panels</div>
        </div>
      </div>

      <div class="shadow-row">
        <div class="shadow-box" style="box-shadow: var(--sl-shadow-large)"></div>
        <div class="shadow-info">
          <div class="shadow-name">--sl-shadow-large</div>
          <div class="shadow-use">High elevation, modals, dropdowns</div>
        </div>
      </div>

      <div class="shadow-row">
        <div class="shadow-box" style="box-shadow: var(--sl-shadow-x-large)"></div>
        <div class="shadow-info">
          <div class="shadow-name">--sl-shadow-x-large</div>
          <div class="shadow-use">Highest elevation, dialogs, popovers</div>
        </div>
      </div>
    </div>
  `,
};
