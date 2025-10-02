import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Patterns/Forms',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Common form patterns and layouts using Shoelace components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const LoginForm: Story = {
  render: () => html`
    <sl-card style="max-width: 400px; margin: 0 auto;">
      <div slot="header">
        <h2 style="margin: 0;">Sign In</h2>
      </div>

      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <sl-input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        >
          <sl-icon slot="prefix" name="envelope"></sl-icon>
        </sl-input>

        <sl-input
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          password-toggle
          required
        >
          <sl-icon slot="prefix" name="lock"></sl-icon>
        </sl-input>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <sl-checkbox>Remember me</sl-checkbox>
          <a href="#" style="color: var(--sl-color-primary-600); text-decoration: none; font-size: 0.875rem;">
            Forgot password?
          </a>
        </div>

        <sl-button variant="primary" type="submit" style="width: 100%;">
          Sign In
        </sl-button>

        <div style="text-align: center; font-size: 0.875rem; color: var(--sl-color-neutral-600);">
          Don't have an account?
          <a href="#" style="color: var(--sl-color-primary-600); text-decoration: none;">Sign up</a>
        </div>
      </form>
    </sl-card>
  `,
};

export const SignupForm: Story = {
  render: () => html`
    <sl-card style="max-width: 500px; margin: 0 auto;">
      <div slot="header">
        <h2 style="margin: 0;">Create Account</h2>
      </div>

      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <sl-input
            name="firstName"
            type="text"
            label="First Name"
            placeholder="John"
            required
          ></sl-input>
          <sl-input
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Doe"
            required
          ></sl-input>
        </div>

        <sl-input
          name="email"
          type="email"
          label="Email"
          placeholder="john.doe@example.com"
          required
        >
          <sl-icon slot="prefix" name="envelope"></sl-icon>
        </sl-input>

        <sl-input
          name="password"
          type="password"
          label="Password"
          placeholder="Min. 8 characters"
          help-text="Must be at least 8 characters"
          password-toggle
          required
        >
          <sl-icon slot="prefix" name="lock"></sl-icon>
        </sl-input>

        <sl-input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Re-enter password"
          password-toggle
          required
        >
          <sl-icon slot="prefix" name="lock"></sl-icon>
        </sl-input>

        <sl-checkbox required>
          I agree to the
          <a href="#" style="color: var(--sl-color-primary-600);">Terms of Service</a>
          and
          <a href="#" style="color: var(--sl-color-primary-600);">Privacy Policy</a>
        </sl-checkbox>

        <sl-button variant="primary" type="submit" style="width: 100%;">
          Create Account
        </sl-button>

        <div style="text-align: center; font-size: 0.875rem; color: var(--sl-color-neutral-600);">
          Already have an account?
          <a href="#" style="color: var(--sl-color-primary-600); text-decoration: none;">Sign in</a>
        </div>
      </form>
    </sl-card>
  `,
};

export const ContactForm: Story = {
  render: () => html`
    <sl-card style="max-width: 600px; margin: 0 auto;">
      <div slot="header">
        <h2 style="margin: 0;">Contact Us</h2>
        <p style="margin: 0.5rem 0 0 0; color: var(--sl-color-neutral-600); font-size: 0.875rem;">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <sl-input
            name="name"
            type="text"
            label="Name"
            placeholder="Your name"
            required
          ></sl-input>
          <sl-input
            name="email"
            type="email"
            label="Email"
            placeholder="your.email@example.com"
            required
          ></sl-input>
        </div>

        <sl-select label="Subject" placeholder="Select a subject" required>
          <sl-option value="general">General Inquiry</sl-option>
          <sl-option value="support">Technical Support</sl-option>
          <sl-option value="billing">Billing Question</sl-option>
          <sl-option value="feedback">Feedback</sl-option>
          <sl-option value="other">Other</sl-option>
        </sl-select>

        <sl-textarea
          name="message"
          label="Message"
          placeholder="Tell us more..."
          rows="5"
          required
        ></sl-textarea>

        <sl-checkbox>
          Send me a copy of this message
        </sl-checkbox>

        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <sl-button variant="default">Cancel</sl-button>
          <sl-button variant="primary" type="submit">Send Message</sl-button>
        </div>
      </form>
    </sl-card>
  `,
};

export const ProfileForm: Story = {
  render: () => html`
    <sl-card style="max-width: 700px; margin: 0 auto;">
      <div slot="header">
        <h2 style="margin: 0;">Profile Settings</h2>
      </div>

      <form style="display: flex; flex-direction: column; gap: 1.5rem;">
        <section>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: var(--sl-color-neutral-700);">
            Personal Information
          </h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <sl-input
                name="firstName"
                type="text"
                label="First Name"
                value="Sarah"
                required
              ></sl-input>
              <sl-input
                name="lastName"
                type="text"
                label="Last Name"
                value="Johnson"
                required
              ></sl-input>
            </div>

            <sl-input
              name="email"
              type="email"
              label="Email"
              value="sarah.johnson@example.com"
              required
            ></sl-input>

            <sl-input
              name="phone"
              type="tel"
              label="Phone Number"
              value="(555) 123-4567"
            ></sl-input>

            <sl-textarea
              name="bio"
              label="Bio"
              placeholder="Tell us about yourself..."
              rows="4"
              help-text="Brief description for your profile"
            ></sl-textarea>
          </div>
        </section>

        <sl-divider></sl-divider>

        <section>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: var(--sl-color-neutral-700);">
            Preferences
          </h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <sl-select label="Language" value="en">
              <sl-option value="en">English</sl-option>
              <sl-option value="es">Español</sl-option>
              <sl-option value="fr">Français</sl-option>
              <sl-option value="de">Deutsch</sl-option>
            </sl-select>

            <sl-select label="Timezone" value="utc-8">
              <sl-option value="utc-8">Pacific Time (UTC-8)</sl-option>
              <sl-option value="utc-7">Mountain Time (UTC-7)</sl-option>
              <sl-option value="utc-6">Central Time (UTC-6)</sl-option>
              <sl-option value="utc-5">Eastern Time (UTC-5)</sl-option>
            </sl-select>

            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
                Email Notifications
              </label>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <sl-checkbox checked>Product updates</sl-checkbox>
                <sl-checkbox checked>Security alerts</sl-checkbox>
                <sl-checkbox>Marketing emails</sl-checkbox>
                <sl-checkbox>Weekly digest</sl-checkbox>
              </div>
            </div>
          </div>
        </section>

        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end; padding-top: 1rem;">
          <sl-button variant="default">Cancel</sl-button>
          <sl-button variant="primary" type="submit">Save Changes</sl-button>
        </div>
      </form>
    </sl-card>
  `,
};

export const ValidationExample: Story = {
  render: () => html`
    <sl-card style="max-width: 500px; margin: 0 auto;">
      <div slot="header">
        <h2 style="margin: 0;">Form Validation</h2>
      </div>

      <sl-alert variant="primary" open style="margin-bottom: 1rem;">
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        This form demonstrates real-time validation. Try submitting without filling required fields.
      </sl-alert>

      <form id="validation-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <sl-input
          name="username"
          type="text"
          label="Username"
          placeholder="Choose a username"
          help-text="Must be 3-20 characters"
          minlength="3"
          maxlength="20"
          required
        ></sl-input>

        <sl-input
          name="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          required
        ></sl-input>

        <sl-input
          name="age"
          type="number"
          label="Age"
          placeholder="Must be 18 or older"
          min="18"
          max="120"
          required
        ></sl-input>

        <sl-input
          name="website"
          type="url"
          label="Website"
          placeholder="https://example.com"
          help-text="Optional: Enter your website URL"
        ></sl-input>

        <sl-button variant="primary" type="submit" style="width: 100%;">
          Submit Form
        </sl-button>
      </form>

      <script>
        const form = document.getElementById('validation-form');
        form?.addEventListener('submit', (e) => {
          e.preventDefault();

          // Check if form is valid
          const formData = new FormData(form);
          let isValid = true;

          form.querySelectorAll('sl-input').forEach(input => {
            if (!input.checkValidity()) {
              isValid = false;
            }
          });

          if (isValid) {
            alert('Form submitted successfully!');
          }
        });
      </script>
    </sl-card>
  `,
};
