# Metazense Next.js Website

A pixel-perfect Next.js implementation of the Metazense Agentic Vulnerability Management website, built following the comprehensive Metazense Style Guide.

## Features

- ✅ **Pixel-Perfect Design**: Exact implementation following the Metazense Style Guide
- ✅ **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- ✅ **CSS Modules**: Component-scoped styling with full style guide compliance
- ✅ **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- ✅ **Performance Optimized**: Next.js Image optimization, code splitting, and fast loading times
- ✅ **Accessibility**: Semantic HTML, proper contrast ratios, and font smoothing
- ✅ **Design System**: Complete implementation of:
  - Color palette (Purple gradients, neutral grays, transparency variants)
  - Typography (Figtree for UI, Urbanist for headings)
  - Spacing system (rem-based scale)
  - Component styles (buttons, cards, grids)
  - Animations & transitions (0.3s standard timing)
  - Border radius scale (8px to 50px)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mzapp/
├── public/
│   └── images/          # All image assets
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles & CSS variables
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── TopBanner/
│       ├── Navbar/
│       ├── Hero/
│       ├── TrustSection/
│       ├── InfoSections/
│       ├── Solutions/
│       ├── Testimonials/
│       ├── CTASection/
│       └── Footer/
├── package.json
├── tsconfig.json
└── next.config.js
```

## Design System

### Color Palette

```css
--black: #000000
--white: #ffffff
--primary-purple: #8142ff
--purple-dark: #aa80ff
--neutral-grey1: #29282a
--neutral-grey2: #434045
--neutral-grey3: #706d72
--neutral-grey4: #969499
--neutral-grey5: #cac9cf
--neutral-grey6: #e7e5ed
--neutral-grey7: #f0edf5
--neutral-creme: #f7f6f9
```

### Typography

- **Display Font**: Urbanist (500 weight for headings)
- **UI Font**: Figtree (400-700 weights)
- **Hero H1**: 64px / 76.8px line-height
- **Section H2**: 48px / 57.6px line-height
- **Body**: 16-18px / 1.5-1.7 line-height

### Spacing Scale

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

## Components

### Sections
1. **Top Banner** - Purple announcement bar
2. **Navbar** - Sticky navigation with logo and CTA buttons
3. **Hero** - Full-width hero with gradient text and tech grid
4. **Trust Section** - Partner logos
5. **Info Sections** - Three alternating content sections:
   - The Urgency (problem statement)
   - Why Metazense Agentic AI (features)
   - The Metazense Flow (workflow)
6. **Solutions** - 3-column grid of 9 solution cards
7. **Testimonials** - Customer testimonial cards
8. **CTA Section** - Call-to-action with background image
9. **Footer** - Multi-column footer with links

### Interactive Elements
- Hover effects on cards (lift animation)
- Button hover states with purple glow
- Link hover transitions to purple
- Animated stars in hero section
- Pulsing central orb

## Performance

- Next.js automatic code splitting
- Image optimization with next/image
- CSS Modules for scoped styles
- Font preloading from Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Style Guide Compliance

This implementation follows the complete [Metazense Style Guide](../STYLE_GUIDE.md) including:

- ✅ All color variables and gradients
- ✅ Complete typography scale
- ✅ Spacing and layout systems
- ✅ Component styling patterns
- ✅ Shadow and elevation levels
- ✅ Animation timing and effects
- ✅ Border radius scale
- ✅ Opacity and transparency patterns
- ✅ Responsive breakpoints

## License

© 2025 Metazense Inc.
