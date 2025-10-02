import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Color tokens from Shoelace design system. These tokens are available as CSS custom properties.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const colorTokens = {
  'Primary Colors': [
    { name: '--sl-color-primary-50', description: 'Lightest primary color' },
    { name: '--sl-color-primary-100', description: 'Very light primary color' },
    { name: '--sl-color-primary-200', description: 'Light primary color' },
    { name: '--sl-color-primary-300', description: 'Medium light primary color' },
    { name: '--sl-color-primary-400', description: 'Medium primary color' },
    { name: '--sl-color-primary-500', description: 'Base primary color' },
    { name: '--sl-color-primary-600', description: 'Medium dark primary color' },
    { name: '--sl-color-primary-700', description: 'Dark primary color' },
    { name: '--sl-color-primary-800', description: 'Very dark primary color' },
    { name: '--sl-color-primary-900', description: 'Darkest primary color' },
    { name: '--sl-color-primary-950', description: 'Deepest primary color' },
  ],
  'Success Colors': [
    { name: '--sl-color-success-50', description: 'Lightest success color' },
    { name: '--sl-color-success-100', description: 'Very light success color' },
    { name: '--sl-color-success-200', description: 'Light success color' },
    { name: '--sl-color-success-300', description: 'Medium light success color' },
    { name: '--sl-color-success-400', description: 'Medium success color' },
    { name: '--sl-color-success-500', description: 'Base success color' },
    { name: '--sl-color-success-600', description: 'Medium dark success color' },
    { name: '--sl-color-success-700', description: 'Dark success color' },
    { name: '--sl-color-success-800', description: 'Very dark success color' },
    { name: '--sl-color-success-900', description: 'Darkest success color' },
    { name: '--sl-color-success-950', description: 'Deepest success color' },
  ],
  'Warning Colors': [
    { name: '--sl-color-warning-50', description: 'Lightest warning color' },
    { name: '--sl-color-warning-100', description: 'Very light warning color' },
    { name: '--sl-color-warning-200', description: 'Light warning color' },
    { name: '--sl-color-warning-300', description: 'Medium light warning color' },
    { name: '--sl-color-warning-400', description: 'Medium warning color' },
    { name: '--sl-color-warning-500', description: 'Base warning color' },
    { name: '--sl-color-warning-600', description: 'Medium dark warning color' },
    { name: '--sl-color-warning-700', description: 'Dark warning color' },
    { name: '--sl-color-warning-800', description: 'Very dark warning color' },
    { name: '--sl-color-warning-900', description: 'Darkest warning color' },
    { name: '--sl-color-warning-950', description: 'Deepest warning color' },
  ],
  'Danger Colors': [
    { name: '--sl-color-danger-50', description: 'Lightest danger color' },
    { name: '--sl-color-danger-100', description: 'Very light danger color' },
    { name: '--sl-color-danger-200', description: 'Light danger color' },
    { name: '--sl-color-danger-300', description: 'Medium light danger color' },
    { name: '--sl-color-danger-400', description: 'Medium danger color' },
    { name: '--sl-color-danger-500', description: 'Base danger color' },
    { name: '--sl-color-danger-600', description: 'Medium dark danger color' },
    { name: '--sl-color-danger-700', description: 'Dark danger color' },
    { name: '--sl-color-danger-800', description: 'Very dark danger color' },
    { name: '--sl-color-danger-900', description: 'Darkest danger color' },
    { name: '--sl-color-danger-950', description: 'Deepest danger color' },
  ],
  'Neutral Colors': [
    { name: '--sl-color-neutral-0', description: 'Pure white' },
    { name: '--sl-color-neutral-50', description: 'Lightest gray' },
    { name: '--sl-color-neutral-100', description: 'Very light gray' },
    { name: '--sl-color-neutral-200', description: 'Light gray' },
    { name: '--sl-color-neutral-300', description: 'Medium light gray' },
    { name: '--sl-color-neutral-400', description: 'Medium gray' },
    { name: '--sl-color-neutral-500', description: 'Base gray' },
    { name: '--sl-color-neutral-600', description: 'Medium dark gray' },
    { name: '--sl-color-neutral-700', description: 'Dark gray' },
    { name: '--sl-color-neutral-800', description: 'Very dark gray' },
    { name: '--sl-color-neutral-900', description: 'Darkest gray' },
    { name: '--sl-color-neutral-950', description: 'Near black' },
    { name: '--sl-color-neutral-1000', description: 'Pure black' },
  ],
};

export const AllColors: Story = {
  render: () => html`
    <style>
      .token-grid {
        display: grid;
        gap: 2rem;
        margin: 2rem 0;
      }

      .color-category {
        margin-bottom: 2rem;
      }

      .color-category h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      /* Theme-aware heading color */
      html.sl-theme-light .color-category h3 {
        color: var(--sl-color-neutral-700);
      }

      html.sl-theme-dark .color-category h3 {
        color: var(--sl-color-neutral-300);
      }

      .color-swatches {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }

      .color-swatch {
        border-radius: 0.5rem;
        overflow: hidden;
      }

      /* Theme-aware swatch background and border */
      html.sl-theme-light .color-swatch {
        background: var(--sl-color-neutral-0);
        border: 1px solid var(--sl-color-neutral-200);
      }

      html.sl-theme-dark .color-swatch {
        background: var(--sl-color-neutral-900);
        border: 1px solid var(--sl-color-neutral-700);
      }

      .color-preview {
        height: 80px;
      }

      .color-info {
        padding: 0.75rem;
      }

      .color-name {
        font-family: monospace;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      /* Theme-aware text colors */
      html.sl-theme-light .color-name {
        color: var(--sl-color-neutral-900);
      }

      html.sl-theme-dark .color-name {
        color: var(--sl-color-neutral-100);
      }

      .color-description {
        font-size: 0.75rem;
      }

      html.sl-theme-light .color-description {
        color: var(--sl-color-neutral-600);
      }

      html.sl-theme-dark .color-description {
        color: var(--sl-color-neutral-400);
      }
    </style>

    <div class="token-grid">
      ${Object.entries(colorTokens).map(
        ([category, colors]) => html`
          <div class="color-category">
            <h3>${category}</h3>
            <div class="color-swatches">
              ${colors.map(
                (color) => html`
                  <div class="color-swatch">
                    <div class="color-preview" style="background-color: var(${color.name})"></div>
                    <div class="color-info">
                      <div class="color-name">${color.name}</div>
                      <div class="color-description">${color.description}</div>
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        `
      )}
    </div>
  `,
};

export const PrimaryColors: Story = {
  render: () => html`
    <style>
      .color-swatches {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }

      .color-swatch {
        border-radius: 0.5rem;
        overflow: hidden;
      }

      /* Theme-aware swatch background and border */
      html.sl-theme-light .color-swatch {
        background: var(--sl-color-neutral-0);
        border: 1px solid var(--sl-color-neutral-200);
      }

      html.sl-theme-dark .color-swatch {
        background: var(--sl-color-neutral-900);
        border: 1px solid var(--sl-color-neutral-700);
      }

      .color-preview {
        height: 80px;
      }

      .color-info {
        padding: 0.75rem;
      }

      .color-name {
        font-family: monospace;
        font-size: 0.875rem;
        font-weight: 600;
      }

      /* Theme-aware text colors */
      html.sl-theme-light .color-name {
        color: var(--sl-color-neutral-900);
      }

      html.sl-theme-dark .color-name {
        color: var(--sl-color-neutral-100);
      }
    </style>

    <div class="color-swatches">
      ${colorTokens['Primary Colors'].map(
        (color) => html`
          <div class="color-swatch">
            <div class="color-preview" style="background-color: var(${color.name})"></div>
            <div class="color-info">
              <div class="color-name">${color.name}</div>
            </div>
          </div>
        `
      )}
    </div>
  `,
};
