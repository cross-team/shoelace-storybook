import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design Tokens/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Typography tokens including font families, sizes, weights, and line heights.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const fontSizes = [
  { token: '--sl-font-size-2x-small', label: '2X Small' },
  { token: '--sl-font-size-x-small', label: 'X Small' },
  { token: '--sl-font-size-small', label: 'Small' },
  { token: '--sl-font-size-medium', label: 'Medium' },
  { token: '--sl-font-size-large', label: 'Large' },
  { token: '--sl-font-size-x-large', label: 'X Large' },
  { token: '--sl-font-size-2x-large', label: '2X Large' },
  { token: '--sl-font-size-3x-large', label: '3X Large' },
  { token: '--sl-font-size-4x-large', label: '4X Large' },
];

const fontWeights = [
  { token: '--sl-font-weight-light', value: '300', label: 'Light' },
  { token: '--sl-font-weight-normal', value: '400', label: 'Normal' },
  { token: '--sl-font-weight-semibold', value: '500', label: 'Semibold' },
  { token: '--sl-font-weight-bold', value: '700', label: 'Bold' },
];

export const FontSizes: Story = {
  render: () => html`
    <style>
      .font-size-demo {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
      }

      .font-size-item {
        display: flex;
        align-items: baseline;
        gap: 2rem;
        padding: 1rem;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
      }

      .font-size-label {
        min-width: 150px;
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-600);
      }

      .font-size-example {
        flex: 1;
      }
    </style>

    <div class="font-size-demo">
      ${fontSizes.map(
        ({ token, label }) => html`
          <div class="font-size-item">
            <div class="font-size-label">${token}</div>
            <div class="font-size-example" style="font-size: var(${token})">
              ${label} - The quick brown fox jumps over the lazy dog
            </div>
          </div>
        `
      )}
    </div>
  `,
};

export const FontWeights: Story = {
  render: () => html`
    <style>
      .font-weight-demo {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
      }

      .font-weight-item {
        display: flex;
        align-items: baseline;
        gap: 2rem;
        padding: 1rem;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
      }

      .font-weight-label {
        min-width: 200px;
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-600);
      }

      .font-weight-example {
        flex: 1;
        font-size: var(--sl-font-size-large);
      }
    </style>

    <div class="font-weight-demo">
      ${fontWeights.map(
        ({ token, label }) => html`
          <div class="font-weight-item">
            <div class="font-weight-label">${token}</div>
            <div class="font-weight-example" style="font-weight: var(${token})">
              ${label} - The quick brown fox jumps over the lazy dog
            </div>
          </div>
        `
      )}
    </div>
  `,
};

export const FontFamilies: Story = {
  render: () => {
    // Get computed font family values
    const getFontFamily = (variable: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };

    return html`
      <style>
        .font-family-demo {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 1rem;
        }

        .font-family-item {
          padding: 1.5rem;
          border: 1px solid var(--sl-color-neutral-200);
          border-radius: 0.5rem;
        }

        .font-family-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .font-family-label {
          font-family: monospace;
          font-size: 0.875rem;
          color: var(--sl-color-neutral-600);
          font-weight: 600;
        }

        .font-family-value {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--sl-color-neutral-500);
          text-align: right;
          flex: 1;
        }

        .font-family-example {
          font-size: var(--sl-font-size-large);
          line-height: 1.6;
        }

        .font-family-usage {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--sl-color-neutral-200);
          font-size: 0.875rem;
          color: var(--sl-color-neutral-600);
          font-style: italic;
        }
      </style>

      <div class="font-family-demo">
        <div class="font-family-item">
          <div class="font-family-header">
            <div class="font-family-label">--sl-font-sans</div>
            <div class="font-family-value">${getFontFamily('--sl-font-sans')}</div>
          </div>
          <div class="font-family-example" style="font-family: var(--sl-font-sans)">
            Public Sans - The quick brown fox jumps over the lazy dog<br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789
          </div>
          <div class="font-family-usage">
            Used for: Body text, buttons, labels, inputs, and all UI components
          </div>
        </div>

        <div class="font-family-item">
          <div class="font-family-header">
            <div class="font-family-label">Headings</div>
            <div class="font-family-value">'Atkinson Hyperlegible Next', 'Public Sans', sans-serif</div>
          </div>
          <div class="font-family-example" style="font-family: 'Atkinson Hyperlegible Next', 'Public Sans', sans-serif">
            <h3 style="margin: 0 0 0.5rem 0;">Atkinson Hyperlegible Next Heading</h3>
            The quick brown fox jumps over the lazy dog<br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789
          </div>
          <div class="font-family-usage">
            Used for: All headings (H1-H6) for improved readability and accessibility
          </div>
        </div>

        <div class="font-family-item">
          <div class="font-family-header">
            <div class="font-family-label">--sl-font-serif</div>
            <div class="font-family-value">${getFontFamily('--sl-font-serif')}</div>
          </div>
          <div class="font-family-example" style="font-family: var(--sl-font-serif)">
            Serif - The quick brown fox jumps over the lazy dog<br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789
          </div>
          <div class="font-family-usage">
            Available for specialized content requiring serif typography
          </div>
        </div>

        <div class="font-family-item">
          <div class="font-family-header">
            <div class="font-family-label">--sl-font-mono</div>
            <div class="font-family-value">${getFontFamily('--sl-font-mono')}</div>
          </div>
          <div class="font-family-example" style="font-family: var(--sl-font-mono)">
            Monospace - The quick brown fox jumps over the lazy dog<br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789
          </div>
          <div class="font-family-usage">
            Used for: Code snippets, technical content, and fixed-width layouts
          </div>
        </div>
      </div>
    `;
  },
};
