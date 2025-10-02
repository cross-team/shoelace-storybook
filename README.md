# Inclusio Shoelace

A comprehensive design system built with [Shoelace](https://shoelace.style/) web components and [Storybook](https://storybook.js.org/), featuring design tokens, components, patterns, templates, and automated accessibility testing.

## Features

- 🎨 **Design Tokens** - Complete token system for colors, typography, spacing, and shadows
- 🧩 **50+ Components** - Fully documented with interactive examples and variants
- 📐 **Patterns** - Common UI patterns for forms, navigation, and layouts
- 📄 **Templates** - Ready-to-use page templates (dashboard, settings, etc.)
- 🌗 **Light & Dark Themes** - Built-in theme switching with proper token support
- ♿ **Accessibility** - WCAG 2.1 AA compliant with automated testing
- 🧪 **Visual Testing** - Automated visual regression and interaction testing
- 📱 **Responsive** - Mobile-first design with responsive patterns

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

Start Storybook in development mode:

\`\`\`bash
npm run storybook
\`\`\`

Visit http://localhost:6006

### Build

Build the static Storybook site:

\`\`\`bash
npm run build-storybook
\`\`\`

### Testing

Run accessibility and visual tests:

\`\`\`bash
# Start Storybook first
npm run storybook

# In another terminal, run tests
npm run test
\`\`\`

Watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

Coverage:
\`\`\`bash
npm run test:coverage
\`\`\`

## Project Structure

\`\`\`
shoelace-storybook/
├── .storybook/          # Storybook configuration
│   ├── main.ts         # Main Storybook config
│   ├── preview.ts      # Preview settings and theme setup
│   └── test-runner.ts  # Test configuration
├── stories/            # Story files
│   ├── tokens/        # Design token stories
│   ├── components/    # Component stories
│   ├── patterns/      # Pattern stories
│   ├── templates/     # Template stories
│   └── docs/          # Documentation (MDX)
├── public/            # Static assets
└── package.json       # Dependencies and scripts
\`\`\`

## Design Tokens

The design system includes a comprehensive token system:

- **Colors** - Primary, success, warning, danger, and neutral palettes
- **Typography** - Font families, sizes, weights, and line heights
- **Spacing** - Consistent spacing scale (3x-small to 4x-large)
- **Shadows** - Elevation levels for depth and hierarchy

All tokens are available as CSS custom properties and automatically support light/dark themes.

## Components

All Shoelace components are documented with:
- Interactive examples
- Multiple variants and states
- Prop controls
- Accessibility annotations
- Usage examples

Key component categories:
- Form controls
- Layout components
- Navigation
- Feedback components
- Data display

## Patterns

Common UI patterns include:
- **Forms** - Login, signup, contact, profile forms
- **Navigation** - Top nav, sidebar, mobile menu, breadcrumbs
- **Data Display** - Tables, lists, cards
- **Feedback** - Alerts, toasts, empty states

## Templates

Complete page templates:
- Analytics Dashboard
- Settings Pages
- User Profiles
- Documentation Layouts

## Accessibility

The design system follows WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Proper ARIA attributes
- ✅ Sufficient color contrast
- ✅ Focus management
- ✅ Automated testing with axe-playwright

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies

- [Shoelace](https://shoelace.style/) - Web component library
- [Storybook 8](https://storybook.js.org/) - Component documentation
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Lit](https://lit.dev/) - Web component authoring
- [Playwright](https://playwright.dev/) - Testing framework
- [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright) - Accessibility testing

## Contributing

1. Create a new branch for your feature
2. Add or modify stories as needed
3. Run tests to ensure accessibility compliance
4. Submit a pull request

## Resources

- [Shoelace Documentation](https://shoelace.style/)
- [Storybook Documentation](https://storybook.js.org/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## License

ISC
