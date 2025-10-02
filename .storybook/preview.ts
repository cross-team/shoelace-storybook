import type { Preview } from '@storybook/web-components';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { withThemeByClassName, DecoratorHelpers } from '@storybook/addon-themes';

// Import Shoelace themes
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

// Import custom token overrides
import '../styles/custom-tokens.css';

// Import Tabler Icons
import '@tabler/icons-webfont/dist/tabler-icons.min.css';

// Set the base path to Shoelace assets
setBasePath('/node_modules/@shoelace-style/shoelace/dist');

const preview: Preview = {
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable backgrounds addon to prevent conflicts
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'sl-theme-light',
        dark: 'sl-theme-dark',
      },
      defaultTheme: 'light',
    }),
    (story, context) => {
      // Get the current theme from context using the helper function
      const theme = DecoratorHelpers.pluckThemeFromContext(context) || 'light';
      const bgColor = theme === 'dark' ? '#1e1e1e' : '#ffffff';
      const textColor = theme === 'dark' ? '#e0e0e0' : '#1e1e1e';

      // Send theme to manager via postMessage (cross-iframe communication)
      try {
        window.parent.postMessage({ type: 'STORYBOOK_THEME_CHANGE', theme }, '*');
      } catch (error) {
        console.error('[Preview] Failed to send theme:', error);
      }

      // Apply background colors to canvas containers
      const applyThemeStyles = () => {
        // Set document and body background
        document.documentElement.style.setProperty('background-color', bgColor, 'important');
        document.body.style.setProperty('background-color', bgColor, 'important');
        document.body.style.setProperty('color', textColor, 'important');

        // Target all possible canvas and story containers
        const selectors = [
          '.sb-show-main',
          '.docs-story',
          '[data-docs-story]',
          '#storybook-root',
          '#storybook-docs',
          '.sb-main-padded',
          '.sbdocs',
          '.sbdocs-wrapper',
          '.sbdocs-content',
          '.sbdocs-preview',
          '#root',
        ];

        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element: Element) => {
            if (element instanceof HTMLElement) {
              element.style.setProperty('background-color', bgColor, 'important');
              element.style.setProperty('color', textColor, 'important');
            }
          });
        });
      };

      // Apply styles immediately
      applyThemeStyles();

      // Reapply on next frame to ensure it sticks
      requestAnimationFrame(applyThemeStyles);

      return story();
    },
  ],
};

export default preview;
