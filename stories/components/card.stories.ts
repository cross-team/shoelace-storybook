import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Cards can be used to group related subjects in a container.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-card>
      This is just a basic card. No image, no header, and no footer. Just a simple card with some text content.
    </sl-card>
  `,
};

export const WithHeader: Story = {
  render: () => html`
    <sl-card>
      <div slot="header">
        <strong>Card Header</strong>
      </div>
      This card has a header with some bold text. You can put any content in the header slot.
    </sl-card>
  `,
};

export const WithFooter: Story = {
  render: () => html`
    <sl-card>
      This card has a footer with action buttons. The footer slot can contain any content you need.
      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
        <sl-button variant="text">Cancel</sl-button>
        <sl-button variant="primary">Save</sl-button>
      </div>
    </sl-card>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <sl-card style="max-width: 300px;">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong><br />
      This kitten is as cute as he is playful. Bring him home today!<br />
      <small>6 weeks old</small>

      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
        <sl-button variant="primary" pill>More Info</sl-button>
        <sl-rating readonly value="5"></sl-rating>
      </div>
    </sl-card>
  `,
};

export const ProductCard: Story = {
  render: () => html`
    <sl-card style="max-width: 300px;">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        alt="Modern wireless headphones"
      />
      <div slot="header">
        <strong style="font-size: 1.2rem;">Premium Headphones</strong>
        <div style="margin-top: 0.5rem;">
          <sl-rating readonly value="4.5"></sl-rating>
          <small style="margin-left: 0.5rem; color: var(--sl-color-neutral-500);">(124 reviews)</small>
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        High-quality wireless headphones with active noise cancellation and 30-hour battery life.
      </div>

      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <sl-badge variant="success" pill>In Stock</sl-badge>
        <sl-badge variant="primary" pill>Free Shipping</sl-badge>
      </div>

      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 1.5rem; font-weight: bold;">$299.99</span>
        <sl-button variant="primary">Add to Cart</sl-button>
      </div>
    </sl-card>
  `,
};

export const UserProfileCard: Story = {
  render: () => html`
    <sl-card style="max-width: 350px;">
      <div
        slot="header"
        style="display: flex; align-items: center; gap: 1rem; padding: 0.5rem 0;"
      >
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
          alt="User avatar"
          style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;"
        />
        <div>
          <strong style="font-size: 1.1rem;">Sarah Johnson</strong><br />
          <small style="color: var(--sl-color-neutral-500);">Product Designer</small>
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        Passionate about creating intuitive user experiences. 10+ years of experience in UX/UI design.
      </div>

      <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <div style="text-align: center;">
          <div style="font-weight: bold; font-size: 1.2rem;">243</div>
          <small style="color: var(--sl-color-neutral-500);">Projects</small>
        </div>
        <div style="text-align: center;">
          <div style="font-weight: bold; font-size: 1.2rem;">12.5k</div>
          <small style="color: var(--sl-color-neutral-500);">Followers</small>
        </div>
        <div style="text-align: center;">
          <div style="font-weight: bold; font-size: 1.2rem;">1.2k</div>
          <small style="color: var(--sl-color-neutral-500);">Following</small>
        </div>
      </div>

      <div slot="footer" style="display: flex; gap: 0.5rem;">
        <sl-button variant="primary" style="flex: 1;">Follow</sl-button>
        <sl-button variant="default" style="flex: 1;">Message</sl-button>
      </div>
    </sl-card>
  `,
};

export const CardGrid: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
      <sl-card>
        <div slot="header"><strong>Feature 1</strong></div>
        Lightning-fast performance that scales with your needs.
        <div slot="footer">
          <sl-button variant="text">Learn More</sl-button>
        </div>
      </sl-card>

      <sl-card>
        <div slot="header"><strong>Feature 2</strong></div>
        Secure by default with enterprise-grade encryption.
        <div slot="footer">
          <sl-button variant="text">Learn More</sl-button>
        </div>
      </sl-card>

      <sl-card>
        <div slot="header"><strong>Feature 3</strong></div>
        24/7 support from our dedicated team of experts.
        <div slot="footer">
          <sl-button variant="text">Learn More</sl-button>
        </div>
      </sl-card>
    </div>
  `,
};
