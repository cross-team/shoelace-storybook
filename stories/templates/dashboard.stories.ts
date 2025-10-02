import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';

const meta: Meta = {
  title: 'Templates/Dashboard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Complete dashboard template with metrics, charts, and data tables.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const AnalyticsDashboard: Story = {
  render: () => html`
    <div style="min-height: 100vh; background: var(--sl-color-neutral-50);">
      <!-- Header -->
      <header style="
        background: var(--sl-color-neutral-0);
        border-bottom: 1px solid var(--sl-color-neutral-200);
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <div>
          <h1 style="margin: 0; font-size: 1.5rem; color: var(--sl-color-neutral-900);">Dashboard</h1>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: var(--sl-color-neutral-600);">
            Welcome back, Sarah
          </p>
        </div>

        <div style="display: flex; gap: 1rem; align-items: center;">
          <sl-button variant="default">
            <sl-icon slot="prefix" name="download"></sl-icon>
            Export
          </sl-button>
          <sl-dropdown placement="bottom-end">
            <sl-button slot="trigger" variant="primary">
              <sl-icon slot="prefix" name="plus"></sl-icon>
              New
              <sl-icon slot="suffix" name="chevron-down"></sl-icon>
            </sl-button>
            <sl-menu>
              <sl-menu-item>New Project</sl-menu-item>
              <sl-menu-item>New Task</sl-menu-item>
              <sl-menu-item>New Report</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
      </header>

      <!-- Main Content -->
      <main style="padding: 2rem;">
        <!-- Metrics Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <sl-card>
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div style="font-size: 0.875rem; color: var(--sl-color-neutral-600); margin-bottom: 0.5rem;">
                  Total Revenue
                </div>
                <div style="font-size: 2rem; font-weight: bold; color: var(--sl-color-neutral-900);">
                  $45,231
                </div>
                <div style="font-size: 0.875rem; color: var(--sl-color-success-600); margin-top: 0.5rem;">
                  <sl-icon name="arrow-up"></sl-icon> 20.1% from last month
                </div>
              </div>
              <div style="
                width: 48px;
                height: 48px;
                background: var(--sl-color-primary-100);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <sl-icon name="currency-dollar" style="font-size: 1.5rem; color: var(--sl-color-primary-600);"></sl-icon>
              </div>
            </div>
          </sl-card>

          <sl-card>
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div style="font-size: 0.875rem; color: var(--sl-color-neutral-600); margin-bottom: 0.5rem;">
                  Active Users
                </div>
                <div style="font-size: 2rem; font-weight: bold; color: var(--sl-color-neutral-900);">
                  2,345
                </div>
                <div style="font-size: 0.875rem; color: var(--sl-color-success-600); margin-top: 0.5rem;">
                  <sl-icon name="arrow-up"></sl-icon> 12.5% from last month
                </div>
              </div>
              <div style="
                width: 48px;
                height: 48px;
                background: var(--sl-color-success-100);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <sl-icon name="people" style="font-size: 1.5rem; color: var(--sl-color-success-600);"></sl-icon>
              </div>
            </div>
          </sl-card>

          <sl-card>
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div style="font-size: 0.875rem; color: var(--sl-color-neutral-600); margin-bottom: 0.5rem;">
                  Conversion Rate
                </div>
                <div style="font-size: 2rem; font-weight: bold; color: var(--sl-color-neutral-900);">
                  3.24%
                </div>
                <div style="font-size: 0.875rem; color: var(--sl-color-danger-600); margin-top: 0.5rem;">
                  <sl-icon name="arrow-down"></sl-icon> 2.1% from last month
                </div>
              </div>
              <div style="
                width: 48px;
                height: 48px;
                background: var(--sl-color-warning-100);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <sl-icon name="graph-up" style="font-size: 1.5rem; color: var(--sl-color-warning-600);"></sl-icon>
              </div>
            </div>
          </sl-card>

          <sl-card>
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div style="font-size: 0.875rem; color: var(--sl-color-neutral-600); margin-bottom: 0.5rem;">
                  Total Orders
                </div>
                <div style="font-size: 2rem; font-weight: bold; color: var(--sl-color-neutral-900);">
                  892
                </div>
                <div style="font-size: 0.875rem; color: var(--sl-color-success-600); margin-top: 0.5rem;">
                  <sl-icon name="arrow-up"></sl-icon> 8.2% from last month
                </div>
              </div>
              <div style="
                width: 48px;
                height: 48px;
                background: var(--sl-color-danger-100);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <sl-icon name="cart" style="font-size: 1.5rem; color: var(--sl-color-danger-600);"></sl-icon>
              </div>
            </div>
          </sl-card>
        </div>

        <!-- Charts and Tables -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
          <sl-card>
            <div slot="header" style="display: flex; justify-content: space-between; align-items: center;">
              <strong>Revenue Overview</strong>
              <sl-button variant="text" size="small">View Report</sl-button>
            </div>
            <div style="height: 300px; display: flex; align-items: center; justify-content: center; color: var(--sl-color-neutral-400);">
              [Chart Placeholder - Revenue Chart]
            </div>
          </sl-card>

          <sl-card>
            <div slot="header">
              <strong>Recent Activity</strong>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${Array.from({ length: 5 }, (_, i) => html`
                <div style="display: flex; gap: 1rem; align-items: start;">
                  <div style="
                    width: 32px;
                    height: 32px;
                    background: var(--sl-color-primary-100);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                  ">
                    <sl-icon name="bell" style="color: var(--sl-color-primary-600);"></sl-icon>
                  </div>
                  <div style="flex: 1;">
                    <div style="font-size: 0.875rem; font-weight: 500;">New order received</div>
                    <div style="font-size: 0.75rem; color: var(--sl-color-neutral-600); margin-top: 0.25rem;">
                      ${i + 1} hour${i > 0 ? 's' : ''} ago
                    </div>
                  </div>
                </div>
              `)}
            </div>
          </sl-card>
        </div>

        <!-- Recent Orders Table -->
        <sl-card>
          <div slot="header" style="display: flex; justify-content: space-between; align-items: center;">
            <strong>Recent Orders</strong>
            <sl-button variant="text" size="small">View All</sl-button>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid var(--sl-color-neutral-200);">
                <th style="text-align: left; padding: 0.75rem; font-weight: 600; color: var(--sl-color-neutral-700);">Order ID</th>
                <th style="text-align: left; padding: 0.75rem; font-weight: 600; color: var(--sl-color-neutral-700);">Customer</th>
                <th style="text-align: left; padding: 0.75rem; font-weight: 600; color: var(--sl-color-neutral-700);">Status</th>
                <th style="text-align: left; padding: 0.75rem; font-weight: 600; color: var(--sl-color-neutral-700);">Amount</th>
                <th style="text-align: left; padding: 0.75rem; font-weight: 600; color: var(--sl-color-neutral-700);">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--sl-color-neutral-100);">
                <td style="padding: 0.75rem; font-family: monospace;">#3456</td>
                <td style="padding: 0.75rem;">John Doe</td>
                <td style="padding: 0.75rem;"><sl-badge variant="success" pill>Completed</sl-badge></td>
                <td style="padding: 0.75rem;">$234.00</td>
                <td style="padding: 0.75rem; color: var(--sl-color-neutral-600);">2 hours ago</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--sl-color-neutral-100);">
                <td style="padding: 0.75rem; font-family: monospace;">#3455</td>
                <td style="padding: 0.75rem;">Jane Smith</td>
                <td style="padding: 0.75rem;"><sl-badge variant="warning" pill>Processing</sl-badge></td>
                <td style="padding: 0.75rem;">$156.50</td>
                <td style="padding: 0.75rem; color: var(--sl-color-neutral-600);">4 hours ago</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--sl-color-neutral-100);">
                <td style="padding: 0.75rem; font-family: monospace;">#3454</td>
                <td style="padding: 0.75rem;">Bob Johnson</td>
                <td style="padding: 0.75rem;"><sl-badge variant="success" pill>Completed</sl-badge></td>
                <td style="padding: 0.75rem;">$89.99</td>
                <td style="padding: 0.75rem; color: var(--sl-color-neutral-600);">5 hours ago</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--sl-color-neutral-100);">
                <td style="padding: 0.75rem; font-family: monospace;">#3453</td>
                <td style="padding: 0.75rem;">Alice Brown</td>
                <td style="padding: 0.75rem;"><sl-badge variant="primary" pill>Shipped</sl-badge></td>
                <td style="padding: 0.75rem;">$445.20</td>
                <td style="padding: 0.75rem; color: var(--sl-color-neutral-600);">1 day ago</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; font-family: monospace;">#3452</td>
                <td style="padding: 0.75rem;">Charlie Wilson</td>
                <td style="padding: 0.75rem;"><sl-badge variant="danger" pill>Cancelled</sl-badge></td>
                <td style="padding: 0.75rem;">$67.00</td>
                <td style="padding: 0.75rem; color: var(--sl-color-neutral-600);">2 days ago</td>
              </tr>
            </tbody>
          </table>
        </sl-card>
      </main>
    </div>
  `,
};
