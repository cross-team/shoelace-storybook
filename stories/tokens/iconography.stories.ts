import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design Tokens/Iconography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Icon design tokens for consistent size, color, and spacing of Tabler Icons throughout the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const iconSizes = [
  { token: '--icon-size-xs', iconClass: 'icon-xs', label: 'Extra Small', value: '0.75rem (12px)' },
  { token: '--icon-size-sm', iconClass: 'icon-sm', label: 'Small', value: '1rem (16px)' },
  { token: '--icon-size-md', iconClass: 'icon-md', label: 'Medium', value: '1.5rem (24px)' },
  { token: '--icon-size-lg', iconClass: 'icon-lg', label: 'Large', value: '2rem (32px)' },
  { token: '--icon-size-xl', iconClass: 'icon-xl', label: 'Extra Large', value: '3rem (48px)' },
  { token: '--icon-size-2xl', iconClass: 'icon-2xl', label: '2X Large', value: '4rem (64px)' },
];

const iconColors = [
  { token: '--icon-color-default', iconClass: 'icon-default', label: 'Default', usage: 'Standard icons' },
  { token: '--icon-color-muted', iconClass: 'icon-muted', label: 'Muted', usage: 'Low emphasis' },
  { token: '--icon-color-primary', iconClass: 'icon-primary', label: 'Primary', usage: 'Brand actions' },
  { token: '--icon-color-success', iconClass: 'icon-success', label: 'Success', usage: 'Positive actions' },
  { token: '--icon-color-warning', iconClass: 'icon-warning', label: 'Warning', usage: 'Caution states' },
  { token: '--icon-color-danger', iconClass: 'icon-danger', label: 'Danger', usage: 'Destructive actions' },
  { token: '--icon-color-info', iconClass: 'icon-info', label: 'Info', usage: 'Informational' },
];

export const IconSizes: Story = {
  render: () => html`
    <style>
      .size-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .size-item {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
      }

      .size-info {
        min-width: 250px;
      }

      .size-token {
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-primary-600);
        font-weight: 600;
      }

      .size-label {
        font-size: 0.875rem;
        color: var(--sl-color-neutral-600);
        margin-top: 0.25rem;
      }

      .size-value {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--sl-color-neutral-500);
        margin-top: 0.25rem;
      }

      .size-example {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .size-visual {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 80px;
      }

      .usage-hint {
        font-size: 0.75rem;
        color: var(--sl-color-neutral-500);
        font-style: italic;
      }
    </style>

    <div class="size-demo">
      ${iconSizes.map(
        ({ token, iconClass, label, value }) => html`
          <div class="size-item">
            <div class="size-info">
              <div class="size-token">${token}</div>
              <div class="size-label">${label}</div>
              <div class="size-value">${value}</div>
            </div>
            <div class="size-example">
              <div class="size-visual">
                <i class="ti ti-star ${iconClass}"></i>
              </div>
              <div class="usage-hint">
                ${iconClass === 'icon-xs' ? 'Inline with text, subtle indicators' : ''}
                ${iconClass === 'icon-sm' ? 'Buttons, form controls' : ''}
                ${iconClass === 'icon-md' ? 'Default UI icons, navigation' : ''}
                ${iconClass === 'icon-lg' ? 'Feature highlights, cards' : ''}
                ${iconClass === 'icon-xl' ? 'Hero sections, empty states' : ''}
                ${iconClass === 'icon-2xl' ? 'Marketing, large displays' : ''}
              </div>
            </div>
          </div>
        `
      )}
    </div>
  `,
};

export const IconColors: Story = {
  render: () => html`
    <style>
      .color-demo {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .color-item {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
      }

      .color-info {
        min-width: 250px;
      }

      .color-token {
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-primary-600);
        font-weight: 600;
      }

      .color-label {
        font-size: 0.875rem;
        color: var(--sl-color-neutral-700);
        margin-top: 0.25rem;
        font-weight: 500;
      }

      .color-usage {
        font-size: 0.75rem;
        color: var(--sl-color-neutral-500);
        margin-top: 0.25rem;
        font-style: italic;
      }

      .color-example {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      .color-visual {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 100px;
      }
    </style>

    <div class="color-demo">
      ${iconColors.map(
        ({ token, iconClass, label, usage }) => html`
          <div class="color-item">
            <div class="color-info">
              <div class="color-token">${token}</div>
              <div class="color-label">${label}</div>
              <div class="color-usage">${usage}</div>
            </div>
            <div class="color-example">
              <div class="color-visual">
                <i class="ti ti-heart icon-lg ${iconClass}"></i>
              </div>
              <div>
                <i class="ti ti-star ${iconClass}"></i>
                <i class="ti ti-check ${iconClass}"></i>
                <i class="ti ti-alert-circle ${iconClass}"></i>
              </div>
            </div>
          </div>
        `
      )}
    </div>
  `,
};

export const UtilityClasses: Story = {
  render: () => html`
    <style>
      .utility-demo {
        padding: 2rem;
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .demo-section {
        margin-bottom: 3rem;
      }

      .demo-title {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--sl-color-neutral-700);
      }

      .demo-grid {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        align-items: center;
      }

      .code-example {
        background-color: var(--sl-color-neutral-100);
        padding: 0.75rem 1rem;
        border-radius: 0.375rem;
        font-family: monospace;
        font-size: 0.875rem;
        margin-top: 0.5rem;
      }
    </style>

    <div class="utility-demo">
      <div class="demo-section">
        <div class="demo-title">Size Utility Classes</div>
        <div class="demo-grid">
          <i class="ti ti-home icon-xs"></i>
          <i class="ti ti-home icon-sm"></i>
          <i class="ti ti-home icon-md"></i>
          <i class="ti ti-home icon-lg"></i>
          <i class="ti ti-home icon-xl"></i>
          <i class="ti ti-home icon-2xl"></i>
        </div>
        <div class="code-example">
          &lt;i class="ti ti-home icon-md"&gt;&lt;/i&gt;
        </div>
      </div>

      <div class="demo-section">
        <div class="demo-title">Color Utility Classes</div>
        <div class="demo-grid">
          <i class="ti ti-heart icon-lg icon-default"></i>
          <i class="ti ti-heart icon-lg icon-muted"></i>
          <i class="ti ti-heart icon-lg icon-primary"></i>
          <i class="ti ti-heart icon-lg icon-success"></i>
          <i class="ti ti-heart icon-lg icon-warning"></i>
          <i class="ti ti-heart icon-lg icon-danger"></i>
          <i class="ti ti-heart icon-lg icon-info"></i>
        </div>
        <div class="code-example">
          &lt;i class="ti ti-heart icon-lg icon-primary"&gt;&lt;/i&gt;
        </div>
      </div>

      <div class="demo-section">
        <div class="demo-title">Combined Classes</div>
        <div class="demo-grid">
          <i class="ti ti-star icon-xs icon-warning"></i>
          <i class="ti ti-check icon-sm icon-success"></i>
          <i class="ti ti-alert-triangle icon-md icon-warning"></i>
          <i class="ti ti-x icon-lg icon-danger"></i>
          <i class="ti ti-info-circle icon-xl icon-info"></i>
        </div>
        <div class="code-example">
          &lt;i class="ti ti-check icon-sm icon-success"&gt;&lt;/i&gt;
        </div>
      </div>
    </div>
  `,
};

export const WithCSSVariables: Story = {
  render: () => html`
    <style>
      .css-var-demo {
        padding: 2rem;
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .demo-section {
        margin-bottom: 3rem;
      }

      .demo-title {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--sl-color-neutral-700);
      }

      .example-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .code-example {
        background-color: var(--sl-color-neutral-100);
        padding: 0.75rem 1rem;
        border-radius: 0.375rem;
        font-family: monospace;
        font-size: 0.875rem;
        flex: 1;
      }
    </style>

    <div class="css-var-demo">
      <div class="demo-section">
        <div class="demo-title">Using CSS Variables Directly</div>

        <div class="example-row">
          <i class="ti ti-settings" style="font-size: var(--icon-size-lg);"></i>
          <div class="code-example">
            style="font-size: var(--icon-size-lg);"
          </div>
        </div>

        <div class="example-row">
          <i class="ti ti-heart" style="font-size: var(--icon-size-md); color: var(--icon-color-danger);"></i>
          <div class="code-example">
            style="font-size: var(--icon-size-md); color: var(--icon-color-danger);"
          </div>
        </div>

        <div class="example-row">
          <i class="ti ti-check" style="font-size: var(--icon-size-xl); color: var(--icon-color-success);"></i>
          <div class="code-example">
            style="font-size: var(--icon-size-xl); color: var(--icon-color-success);"
          </div>
        </div>
      </div>
    </div>
  `,
};

export const InButtons: Story = {
  render: () => html`
    <style>
      .button-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
      }

      .button-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .button-demo {
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .section-title {
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sl-color-neutral-700);
        margin-bottom: 0.5rem;
      }
    </style>

    <div class="button-demo">
      <div>
        <div class="section-title">With Size Tokens (Inline Styles)</div>
        <div class="button-row">
          <sl-button variant="default">
            <i class="ti ti-plus" style="font-size: var(--icon-size-sm);" slot="prefix"></i>
            Small Icon
          </sl-button>

          <sl-button variant="primary">
            <i class="ti ti-download" style="font-size: var(--icon-size-md);" slot="prefix"></i>
            Medium Icon
          </sl-button>

          <sl-button variant="success" size="large">
            <i class="ti ti-check" style="font-size: var(--icon-size-lg);" slot="prefix"></i>
            Large Icon
          </sl-button>
        </div>
      </div>

      <div>
        <div class="section-title">With Color Tokens</div>
        <div class="button-row">
          <sl-button variant="default">
            <i class="ti ti-heart" style="font-size: var(--icon-size-md); color: var(--icon-color-danger);" slot="prefix"></i>
            Favorite
          </sl-button>

          <sl-button variant="default">
            <i class="ti ti-star" style="font-size: var(--icon-size-md); color: var(--icon-color-warning);" slot="prefix"></i>
            Rate
          </sl-button>

          <sl-button variant="default">
            <i class="ti ti-info-circle" style="font-size: var(--icon-size-md); color: var(--icon-color-info);" slot="prefix"></i>
            Learn More
          </sl-button>
        </div>
      </div>

      <div>
        <div class="section-title">Circle Buttons</div>
        <div class="button-row">
          <sl-button variant="default" circle>
            <i class="ti ti-search" style="font-size: var(--icon-size-sm); display: inline-block; vertical-align: middle;"></i>
          </sl-button>

          <sl-button variant="primary" circle>
            <i class="ti ti-settings" style="font-size: var(--icon-size-md); display: inline-block; vertical-align: middle;"></i>
          </sl-button>

          <sl-button variant="success" circle size="large">
            <i class="ti ti-check" style="font-size: var(--icon-size-lg); display: inline-block; vertical-align: middle;"></i>
          </sl-button>
        </div>
      </div>

      <sl-alert variant="warning" open style="margin-top: 1rem; font-family: inherit;">
        <i class="ti ti-alert-triangle" slot="icon"></i>
        <strong>Note:</strong> When using icons inside Shoelace web components (like <code>&lt;sl-button&gt;</code>), use inline styles instead of utility classes due to Shadow DOM encapsulation: <code>style="font-size: var(--icon-size-sm);"</code>
      </sl-alert>
    </div>
  `,
};

export const IconSpacing: Story = {
  render: () => html`
    <style>
      .spacing-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .spacing-example {
        padding: 1.5rem;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
      }

      .spacing-label {
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--sl-color-primary-600);
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .text-with-icon {
        display: flex;
        align-items: center;
        font-size: 1rem;
      }

      .icon-gap-sm-example i {
        margin-right: var(--icon-gap-sm);
      }

      .icon-gap-md-example i {
        margin-right: var(--icon-gap-md);
      }

      .icon-gap-lg-example i {
        margin-right: var(--icon-gap-lg);
      }
    </style>

    <div class="spacing-demo">
      <div class="spacing-example">
        <div class="spacing-label">--icon-gap-sm (0.25rem / 4px)</div>
        <div class="text-with-icon icon-gap-sm-example">
          <i class="ti ti-home icon-md"></i>
          <span>Home Dashboard</span>
        </div>
      </div>

      <div class="spacing-example">
        <div class="spacing-label">--icon-gap-md (0.5rem / 8px)</div>
        <div class="text-with-icon icon-gap-md-example">
          <i class="ti ti-settings icon-md"></i>
          <span>Settings Panel</span>
        </div>
      </div>

      <div class="spacing-example">
        <div class="spacing-label">--icon-gap-lg (0.75rem / 12px)</div>
        <div class="text-with-icon icon-gap-lg-example">
          <i class="ti ti-user icon-md"></i>
          <span>User Profile</span>
        </div>
      </div>

      <sl-alert variant="primary" open style="margin-top: 1rem;">
        <i class="ti ti-info-circle" slot="icon"></i>
        <strong>Best Practice:</strong> Use --icon-gap-md as the default spacing between icons and text for optimal readability.
      </sl-alert>
    </div>
  `,
};

export const TokenReference: Story = {
  render: () => html`
    <style>
      .reference {
        padding: 1rem;
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .reference-section {
        margin-bottom: 2rem;
      }

      .reference-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--sl-color-neutral-800);
      }

      .token-table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
        overflow: hidden;
      }

      .token-table th {
        background-color: var(--sl-color-neutral-100);
        padding: 0.75rem 1rem;
        text-align: left;
        font-weight: 600;
        color: var(--sl-color-neutral-700);
        font-size: 0.875rem;
      }

      .token-table td {
        padding: 0.75rem 1rem;
        border-top: 1px solid var(--sl-color-neutral-200);
        font-size: 0.875rem;
      }

      .token-table td:first-child {
        font-family: monospace;
        color: var(--sl-color-primary-600);
        font-weight: 600;
      }

      .token-table td:nth-child(2) {
        font-family: monospace;
        color: var(--sl-color-neutral-600);
      }
    </style>

    <div class="reference">
      <div class="reference-section">
        <div class="reference-title">Icon Size Tokens</div>
        <table class="token-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>--icon-size-xs</td>
              <td>0.75rem (12px)</td>
              <td>Tiny icons, inline with text</td>
            </tr>
            <tr>
              <td>--icon-size-sm</td>
              <td>1rem (16px)</td>
              <td>Small icons, buttons</td>
            </tr>
            <tr>
              <td>--icon-size-md</td>
              <td>1.5rem (24px)</td>
              <td>Default size, most UI elements</td>
            </tr>
            <tr>
              <td>--icon-size-lg</td>
              <td>2rem (32px)</td>
              <td>Large icons, feature highlights</td>
            </tr>
            <tr>
              <td>--icon-size-xl</td>
              <td>3rem (48px)</td>
              <td>Hero icons, empty states</td>
            </tr>
            <tr>
              <td>--icon-size-2xl</td>
              <td>4rem (64px)</td>
              <td>Extra large, marketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="reference-section">
        <div class="reference-title">Icon Color Tokens</div>
        <table class="token-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Light Theme</th>
              <th>Dark Theme</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>--icon-color-default</td>
              <td>neutral-700</td>
              <td>neutral-300</td>
              <td>Standard icons</td>
            </tr>
            <tr>
              <td>--icon-color-muted</td>
              <td>neutral-500</td>
              <td>neutral-500</td>
              <td>Low emphasis icons</td>
            </tr>
            <tr>
              <td>--icon-color-primary</td>
              <td>primary-600</td>
              <td>primary-400</td>
              <td>Brand action icons</td>
            </tr>
            <tr>
              <td>--icon-color-success</td>
              <td>success-600</td>
              <td>success-400</td>
              <td>Positive action icons</td>
            </tr>
            <tr>
              <td>--icon-color-warning</td>
              <td>warning-600</td>
              <td>warning-400</td>
              <td>Caution state icons</td>
            </tr>
            <tr>
              <td>--icon-color-danger</td>
              <td>danger-600</td>
              <td>danger-400</td>
              <td>Destructive action icons</td>
            </tr>
            <tr>
              <td>--icon-color-info</td>
              <td>sky-600</td>
              <td>sky-400</td>
              <td>Informational icons</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="reference-section">
        <div class="reference-title">Icon Spacing Tokens</div>
        <table class="token-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>--icon-gap-sm</td>
              <td>0.25rem (4px)</td>
              <td>Tight spacing</td>
            </tr>
            <tr>
              <td>--icon-gap-md</td>
              <td>0.5rem (8px)</td>
              <td>Default spacing</td>
            </tr>
            <tr>
              <td>--icon-gap-lg</td>
              <td>0.75rem (12px)</td>
              <td>Loose spacing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};
