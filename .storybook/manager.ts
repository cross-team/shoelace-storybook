import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Create custom light theme for Storybook UI
const lightTheme = create({
  base: 'light',
  brandTitle: 'Inclusio Shoelace',
  brandUrl: 'https://shoelace.style',
  brandTarget: '_blank',

  // UI colors
  colorPrimary: '#0ea5e9',
  colorSecondary: '#0ea5e9',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,

  // Text colors
  textColor: '#1e1e1e',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#666666',
  barSelectedColor: '#0ea5e9',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e0e0e0',
  inputTextColor: '#1e1e1e',
  inputBorderRadius: 4,
});

// Create custom dark theme for Storybook UI
const darkTheme = create({
  base: 'dark',
  brandTitle: 'Inclusio Shoelace',
  brandUrl: 'https://shoelace.style',
  brandTarget: '_blank',

  // UI colors
  colorPrimary: '#0ea5e9',
  colorSecondary: '#0ea5e9',

  // UI
  appBg: '#1e1e1e',
  appContentBg: '#1e1e1e',
  appBorderColor: '#2d2d2d',
  appBorderRadius: 4,

  // Text colors
  textColor: '#e0e0e0',
  textInverseColor: '#1e1e1e',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#0ea5e9',
  barBg: '#1e1e1e',

  // Form colors
  inputBg: '#2d2d2d',
  inputBorder: '#3d3d3d',
  inputTextColor: '#e0e0e0',
  inputBorderRadius: 4,
});

// Set initial theme to light
addons.setConfig({
  theme: lightTheme,
});

// Listen for theme changes from preview iframe via postMessage
window.addEventListener('message', (event) => {
  // Validate message origin and type
  if (event.data?.type === 'STORYBOOK_THEME_CHANGE') {
    const theme = event.data.theme;
    console.log('[Manager] Received theme change via postMessage:', theme);

    try {
      addons.setConfig({
        theme: theme === 'dark' ? darkTheme : lightTheme,
      });
      console.log('[Manager] Successfully applied theme:', theme);
    } catch (error) {
      console.error('[Manager] Failed to apply theme:', error);
    }
  }
});
