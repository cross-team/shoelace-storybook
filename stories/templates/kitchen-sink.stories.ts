import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

const meta: Meta = {
  title: 'Templates/Kitchen Sink',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive showcase of all HTML semantic elements, typography, and Shoelace components.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  render: () => html`
    <style>
      .kitchen-sink {
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
      }

      .section {
        margin-bottom: 3rem;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: var(--sl-color-neutral-900);
      }

      .subsection {
        margin-bottom: 2rem;
      }

      .subsection-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--sl-color-neutral-800);
      }

      .component-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .example-block {
        padding: 1.5rem;
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 0.5rem;
        background: var(--sl-color-neutral-0);
      }

      .example-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sl-color-neutral-600);
        margin-bottom: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .baseline-grid {
        background-image: linear-gradient(to bottom, var(--sl-color-neutral-200) 1px, transparent 1px);
        background-size: 100% 1.5rem;
        padding: 1rem;
        border: 1px solid var(--sl-color-neutral-300);
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
      }

      th, td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid var(--sl-color-neutral-200);
      }

      th {
        background: var(--sl-color-neutral-100);
        font-weight: 600;
      }
    </style>

    <div class="kitchen-sink">
      <!-- Typography Section -->
      <section class="section">
        <h1 class="section-title">Typography</h1>

        <div class="subsection">
          <h2 class="subsection-title">Semantic Headings</h2>
          <div class="baseline-grid">
            <h1>Heading Level 1 - Atkinson Hyperlegible Next</h1>
            <h2>Heading Level 2 - Atkinson Hyperlegible Next</h2>
            <h3>Heading Level 3 - Atkinson Hyperlegible Next</h3>
            <h4>Heading Level 4 - Atkinson Hyperlegible Next</h4>
            <h5>Heading Level 5 - Atkinson Hyperlegible Next</h5>
            <h6>Heading Level 6 - Atkinson Hyperlegible Next</h6>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">Paragraph & Text Formatting</h3>
          <div class="baseline-grid">
            <p>
              This is a standard paragraph using Public Sans. The quick brown fox jumps over the lazy dog.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Text can be <strong>bold</strong>, <em>italic</em>, <u>underlined</u>, <s>strikethrough</s>,
              <mark>highlighted</mark>, <small>small</small>, <code>inline code</code>,
              <kbd>Ctrl+C</kbd>, <samp>sample output</samp>, or <var>variable</var>.
            </p>
            <p>
              Links can be <a href="#">normal links</a>, and they have hover states.
              Superscript: E = mc<sup>2</sup>, Subscript: H<sub>2</sub>O.
            </p>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">Lists</h3>
          <div class="component-grid">
            <div>
              <div class="example-label">Unordered List</div>
              <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item with nested list
                  <ul>
                    <li>Nested item 1</li>
                    <li>Nested item 2</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <div class="example-label">Ordered List</div>
              <ol>
                <li>First step</li>
                <li>Second step</li>
                <li>Third step with nested list
                  <ol>
                    <li>Nested step 1</li>
                    <li>Nested step 2</li>
                  </ol>
                </li>
              </ol>
            </div>

            <div>
              <div class="example-label">Definition List</div>
              <dl>
                <dt>Term 1</dt>
                <dd>Definition for term 1</dd>
                <dt>Term 2</dt>
                <dd>Definition for term 2</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">Blockquotes & Code</h3>
          <div class="component-grid">
            <div>
              <div class="example-label">Blockquote</div>
              <blockquote>
                <p>Design is not just what it looks like and feels like. Design is how it works.</p>
                <cite>— Steve Jobs</cite>
              </blockquote>
            </div>

            <div>
              <div class="example-label">Code Block</div>
              <pre><code>function hello() {
  console.log('Hello, World!');
  return true;
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Buttons Section -->
      <section class="section">
        <h2 class="section-title">Buttons</h2>

        <div class="subsection">
          <h3 class="subsection-title">Button Variants</h3>
          <div class="example-block">
            <div class="example-label">All Variants</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-button variant="default">Default</sl-button>
              <sl-button variant="primary">Primary</sl-button>
              <sl-button variant="success">Success</sl-button>
              <sl-button variant="neutral">Neutral</sl-button>
              <sl-button variant="warning">Warning</sl-button>
              <sl-button variant="danger">Danger</sl-button>
              <sl-button variant="text">Text</sl-button>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">Button Sizes</h3>
          <div class="example-block">
            <div class="example-label">Small, Medium, Large</div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <sl-button size="small">Small</sl-button>
              <sl-button size="medium">Medium</sl-button>
              <sl-button size="large">Large</sl-button>
            </div>
          </div>
        </div>

        <div class="component-grid">
          <div class="example-block">
            <div class="example-label">Outline Buttons</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-button variant="primary" outline>Primary</sl-button>
              <sl-button variant="success" outline>Success</sl-button>
              <sl-button variant="danger" outline>Danger</sl-button>
            </div>
          </div>

          <div class="example-block">
            <div class="example-label">Pill Buttons</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-button variant="primary" pill>Primary</sl-button>
              <sl-button variant="success" pill>Success</sl-button>
              <sl-button variant="danger" pill>Danger</sl-button>
            </div>
          </div>

          <div class="example-block">
            <div class="example-label">Button States</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-button>Default</sl-button>
              <sl-button disabled>Disabled</sl-button>
              <sl-button loading>Loading</sl-button>
            </div>
          </div>

          <div class="example-block">
            <div class="example-label">Buttons with Icons</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-button variant="primary">
                <sl-icon slot="prefix" name="gear"></sl-icon>
                Settings
              </sl-button>
              <sl-button variant="success">
                Save
                <sl-icon slot="suffix" name="arrow-right"></sl-icon>
              </sl-button>
              <sl-button variant="danger" circle>
                <sl-icon name="trash"></sl-icon>
              </sl-button>
            </div>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Form Inputs Section -->
      <section class="section">
        <h2 class="section-title">Form Inputs</h2>

        <div class="component-grid">
          <div class="example-block">
            <div class="example-label">Text Input</div>
            <sl-input label="Name" placeholder="Enter your name" help-text="Your full name"></sl-input>
          </div>

          <div class="example-block">
            <div class="example-label">Email Input</div>
            <sl-input type="email" label="Email" placeholder="email@example.com"></sl-input>
          </div>

          <div class="example-block">
            <div class="example-label">Password Input</div>
            <sl-input type="password" label="Password" placeholder="Enter password" password-toggle></sl-input>
          </div>

          <div class="example-block">
            <div class="example-label">Number Input</div>
            <sl-input type="number" label="Age" placeholder="0"></sl-input>
          </div>

          <div class="example-block">
            <div class="example-label">Textarea</div>
            <sl-textarea label="Message" placeholder="Enter your message" rows="3"></sl-textarea>
          </div>

          <div class="example-block">
            <div class="example-label">Select</div>
            <sl-select label="Choose an option" placeholder="Select one">
              <sl-option value="option-1">Option 1</sl-option>
              <sl-option value="option-2">Option 2</sl-option>
              <sl-option value="option-3">Option 3</sl-option>
            </sl-select>
          </div>

          <div class="example-block">
            <div class="example-label">Checkboxes</div>
            <sl-checkbox>Option 1</sl-checkbox>
            <sl-checkbox checked>Option 2 (checked)</sl-checkbox>
            <sl-checkbox disabled>Option 3 (disabled)</sl-checkbox>
          </div>

          <div class="example-block">
            <div class="example-label">Radio Buttons</div>
            <sl-radio-group label="Choose one">
              <sl-radio value="1">Option 1</sl-radio>
              <sl-radio value="2" checked>Option 2</sl-radio>
              <sl-radio value="3">Option 3</sl-radio>
            </sl-radio-group>
          </div>

          <div class="example-block">
            <div class="example-label">Switch</div>
            <sl-switch>Enable notifications</sl-switch>
            <sl-switch checked>Auto-save enabled</sl-switch>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Cards Section -->
      <section class="section">
        <h2 class="section-title">Cards</h2>

        <div class="component-grid">
          <sl-card>
            <div slot="header">
              <strong>Basic Card</strong>
            </div>
            <p>This is a basic card with a header and some content. Cards are great for grouping related information.</p>
          </sl-card>

          <sl-card>
            <div slot="header">
              <strong>Card with Footer</strong>
            </div>
            <p>This card includes a footer with actions.</p>
            <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <sl-button variant="text">Cancel</sl-button>
              <sl-button variant="primary">Confirm</sl-button>
            </div>
          </sl-card>

          <sl-card>
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <strong>Card with Image</strong>
            <p>This card includes an image in the header slot.</p>
          </sl-card>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Alerts Section -->
      <section class="section">
        <h2 class="section-title">Alerts</h2>

        <div class="subsection">
          <sl-alert variant="primary" open>
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            <strong>Primary Alert</strong><br />
            This is an informational alert message.
          </sl-alert>
        </div>

        <div class="subsection">
          <sl-alert variant="success" open>
            <sl-icon slot="icon" name="check2-circle"></sl-icon>
            <strong>Success Alert</strong><br />
            Your changes have been saved successfully.
          </sl-alert>
        </div>

        <div class="subsection">
          <sl-alert variant="neutral" open>
            <sl-icon slot="icon" name="gear"></sl-icon>
            <strong>Neutral Alert</strong><br />
            This is a neutral informational message.
          </sl-alert>
        </div>

        <div class="subsection">
          <sl-alert variant="warning" open>
            <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
            <strong>Warning Alert</strong><br />
            Please review the information before proceeding.
          </sl-alert>
        </div>

        <div class="subsection">
          <sl-alert variant="danger" open>
            <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
            <strong>Danger Alert</strong><br />
            An error occurred while processing your request.
          </sl-alert>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Badges & Tags Section -->
      <section class="section">
        <h2 class="section-title">Badges & Tags</h2>

        <div class="subsection">
          <h3 class="subsection-title">Badges</h3>
          <div class="example-block">
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-badge variant="primary">Primary</sl-badge>
              <sl-badge variant="success">Success</sl-badge>
              <sl-badge variant="neutral">Neutral</sl-badge>
              <sl-badge variant="warning">Warning</sl-badge>
              <sl-badge variant="danger">Danger</sl-badge>
            </div>
          </div>

          <div class="example-block" style="margin-top: 1rem;">
            <div class="example-label">Pill Badges</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-badge variant="primary" pill>Primary</sl-badge>
              <sl-badge variant="success" pill>Success</sl-badge>
              <sl-badge variant="danger" pill>Danger</sl-badge>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">Tags</h3>
          <div class="example-block">
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-tag variant="primary">Primary Tag</sl-tag>
              <sl-tag variant="success">Success Tag</sl-tag>
              <sl-tag variant="neutral">Neutral Tag</sl-tag>
              <sl-tag variant="warning">Warning Tag</sl-tag>
              <sl-tag variant="danger">Danger Tag</sl-tag>
            </div>
          </div>

          <div class="example-block" style="margin-top: 1rem;">
            <div class="example-label">Removable Tags</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <sl-tag variant="primary" removable>Removable</sl-tag>
              <sl-tag variant="success" removable>Removable</sl-tag>
              <sl-tag variant="danger" removable>Removable</sl-tag>
            </div>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Progress & Loading Section -->
      <section class="section">
        <h2 class="section-title">Progress & Loading</h2>

        <div class="component-grid">
          <div class="example-block">
            <div class="example-label">Progress Bar</div>
            <sl-progress-bar value="0"></sl-progress-bar>
            <sl-progress-bar value="25" style="margin-top: 0.5rem;"></sl-progress-bar>
            <sl-progress-bar value="50" style="margin-top: 0.5rem;"></sl-progress-bar>
            <sl-progress-bar value="75" style="margin-top: 0.5rem;"></sl-progress-bar>
            <sl-progress-bar value="100" style="margin-top: 0.5rem;"></sl-progress-bar>
          </div>

          <div class="example-block">
            <div class="example-label">Indeterminate Progress</div>
            <sl-progress-bar indeterminate></sl-progress-bar>
          </div>

          <div class="example-block">
            <div class="example-label">Spinner</div>
            <div style="display: flex; gap: 1rem; align-items: center;">
              <sl-spinner></sl-spinner>
              <sl-spinner style="font-size: 2rem;"></sl-spinner>
              <sl-spinner style="font-size: 3rem;"></sl-spinner>
            </div>
          </div>

          <div class="example-block">
            <div class="example-label">Skeleton</div>
            <sl-skeleton></sl-skeleton>
            <sl-skeleton style="margin-top: 0.5rem;"></sl-skeleton>
            <sl-skeleton style="margin-top: 0.5rem; width: 60%;"></sl-skeleton>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Tabs Section -->
      <section class="section">
        <h2 class="section-title">Tabs</h2>

        <div class="example-block">
          <sl-tab-group>
            <sl-tab slot="nav" panel="general">General</sl-tab>
            <sl-tab slot="nav" panel="custom">Custom</sl-tab>
            <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
            <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

            <sl-tab-panel name="general">
              <h3>General Settings</h3>
              <p>This is the general tab panel. It contains general settings and options.</p>
            </sl-tab-panel>

            <sl-tab-panel name="custom">
              <h3>Custom Settings</h3>
              <p>This is the custom tab panel. Configure custom options here.</p>
            </sl-tab-panel>

            <sl-tab-panel name="advanced">
              <h3>Advanced Settings</h3>
              <p>This is the advanced tab panel. Advanced configuration options are available here.</p>
            </sl-tab-panel>

            <sl-tab-panel name="disabled">
              This content won't be shown since the tab is disabled.
            </sl-tab-panel>
          </sl-tab-group>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Dropdown & Menu Section -->
      <section class="section">
        <h2 class="section-title">Dropdown & Menu</h2>

        <div class="example-block">
          <div class="example-label">Dropdown Menu</div>
          <sl-dropdown>
            <sl-button slot="trigger" caret>Dropdown</sl-button>
            <sl-menu>
              <sl-menu-item>
                <sl-icon slot="prefix" name="house"></sl-icon>
                Home
              </sl-menu-item>
              <sl-menu-item>
                <sl-icon slot="prefix" name="envelope"></sl-icon>
                Messages
                <sl-badge slot="suffix" variant="primary" pill>3</sl-badge>
              </sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item>
                <sl-icon slot="prefix" name="gear"></sl-icon>
                Settings
              </sl-menu-item>
              <sl-menu-item>
                <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
                Logout
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Avatar Section -->
      <section class="section">
        <h2 class="section-title">Avatars</h2>

        <div class="example-block">
          <div class="example-label">Avatar Sizes</div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <sl-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              label="Avatar"
            ></sl-avatar>
            <sl-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              label="Avatar"
              style="--size: 3rem;"
            ></sl-avatar>
            <sl-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              label="Avatar"
              style="--size: 4rem;"
            ></sl-avatar>
          </div>
        </div>

        <div class="example-block" style="margin-top: 1rem;">
          <div class="example-label">Avatar Shapes</div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <sl-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              label="Avatar"
              shape="circle"
            ></sl-avatar>
            <sl-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              label="Avatar"
              shape="square"
            ></sl-avatar>
            <sl-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              label="Avatar"
              shape="rounded"
            ></sl-avatar>
          </div>
        </div>

        <div class="example-block" style="margin-top: 1rem;">
          <div class="example-label">Initials Avatar</div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <sl-avatar initials="JD" label="John Doe"></sl-avatar>
            <sl-avatar initials="AS" label="Alice Smith"></sl-avatar>
            <sl-avatar initials="BJ" label="Bob Johnson"></sl-avatar>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Tables Section -->
      <section class="section">
        <h2 class="section-title">Tables</h2>

        <div class="example-block">
          <div class="example-label">Data Table</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>Admin</td>
                <td><sl-badge variant="success" pill>Active</sl-badge></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>User</td>
                <td><sl-badge variant="success" pill>Active</sl-badge></td>
              </tr>
              <tr>
                <td>Bob Johnson</td>
                <td>bob.johnson@example.com</td>
                <td>User</td>
                <td><sl-badge variant="warning" pill>Pending</sl-badge></td>
              </tr>
              <tr>
                <td>Alice Brown</td>
                <td>alice.brown@example.com</td>
                <td>Manager</td>
                <td><sl-badge variant="danger" pill>Inactive</sl-badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Semantic HTML Section -->
      <section class="section">
        <h2 class="section-title">Semantic HTML Elements</h2>

        <div class="component-grid">
          <div class="example-block">
            <div class="example-label">Figure with Caption</div>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Example image"
                style="width: 100%; border-radius: 0.25rem;"
              />
              <figcaption>Figure caption describing the image above</figcaption>
            </figure>
          </div>

          <div class="example-block">
            <div class="example-label">Details & Summary</div>
            <details>
              <summary>Click to expand</summary>
              <p>This content is hidden by default and can be revealed by clicking the summary.</p>
            </details>
          </div>

          <div class="example-block">
            <div class="example-label">Time Element</div>
            <p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>
            <p>Event starts at <time datetime="2025-01-20T14:00">2:00 PM on January 20, 2025</time></p>
          </div>

          <div class="example-block">
            <div class="example-label">Address</div>
            <address>
              <strong>Contact:</strong><br />
              John Doe<br />
              123 Main Street<br />
              Anytown, ST 12345<br />
              <a href="mailto:john@example.com">john@example.com</a>
            </address>
          </div>
        </div>
      </section>

      <sl-divider></sl-divider>

      <!-- Spacing & Tokens Section -->
      <section class="section">
        <h2 class="section-title">Design Tokens</h2>

        <div class="subsection">
          <h3 class="subsection-title">Border Radius</h3>
          <div class="component-grid">
            <div class="example-block">
              <div class="example-label">Small</div>
              <div style="width: 100px; height: 100px; background: var(--sl-color-primary-500); border-radius: var(--sl-border-radius-small);"></div>
            </div>
            <div class="example-block">
              <div class="example-label">Medium</div>
              <div style="width: 100px; height: 100px; background: var(--sl-color-primary-500); border-radius: var(--sl-border-radius-medium);"></div>
            </div>
            <div class="example-block">
              <div class="example-label">Large</div>
              <div style="width: 100px; height: 100px; background: var(--sl-color-primary-500); border-radius: var(--sl-border-radius-large);"></div>
            </div>
            <div class="example-block">
              <div class="example-label">Pill</div>
              <div style="width: 100px; height: 50px; background: var(--sl-color-primary-500); border-radius: var(--sl-border-radius-pill);"></div>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">Shadows</h3>
          <div class="component-grid">
            <div class="example-block">
              <div class="example-label">X-Small Shadow</div>
              <div style="padding: 2rem; background: var(--sl-color-neutral-0); box-shadow: var(--sl-shadow-x-small);"></div>
            </div>
            <div class="example-block">
              <div class="example-label">Small Shadow</div>
              <div style="padding: 2rem; background: var(--sl-color-neutral-0); box-shadow: var(--sl-shadow-small);"></div>
            </div>
            <div class="example-block">
              <div class="example-label">Medium Shadow</div>
              <div style="padding: 2rem; background: var(--sl-color-neutral-0); box-shadow: var(--sl-shadow-medium);"></div>
            </div>
            <div class="example-block">
              <div class="example-label">Large Shadow</div>
              <div style="padding: 2rem; background: var(--sl-color-neutral-0); box-shadow: var(--sl-shadow-large);"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};
