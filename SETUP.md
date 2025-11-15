# Setup Instructions

## Quick Start

Follow these steps to run the Metazense Next.js website:

### 1. Install Dependencies

```bash
cd mzapp
npm install
```

This will install:
- Next.js 15.5.6
- React 19.2.0
- TypeScript 5.x

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production (Optional)

```bash
npm run build
npm start
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Image Not Loading

Make sure all images are in the `public/images/` directory. The following images are required:
- `logo-purple.png`
- `brian-metazense-01 (1).png`

### TypeScript Errors

If you encounter TypeScript errors, try:

```bash
npm run lint
```

## File Structure Overview

```
mzapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page (imports all components)
│   │   └── globals.css         # Global styles & CSS variables
│   └── components/
│       ├── TopBanner.tsx        # Purple announcement banner
│       ├── TopBanner.module.css
│       ├── Navbar.tsx           # Sticky navigation
│       ├── Navbar.module.css
│       ├── Hero.tsx             # Hero section with stars animation
│       ├── Hero.module.css
│       ├── TrustSection.tsx     # Trusted by section
│       ├── TrustSection.module.css
│       ├── InfoSections.tsx     # Three info sections
│       ├── InfoSections.module.css
│       ├── Solutions.tsx        # Solutions grid (9 cards)
│       ├── Solutions.module.css
│       ├── Testimonials.tsx     # Customer testimonials
│       ├── Testimonials.module.css
│       ├── CTASection.tsx       # Call-to-action section
│       ├── CTASection.module.css
│       ├── Footer.tsx           # Footer with links
│       └── Footer.module.css
└── public/
    └── images/                  # All website images
```

## Key Features Implemented

✅ All sections from original metazense.htm
✅ Pixel-perfect styling per Style Guide
✅ Responsive design (mobile, tablet, desktop)
✅ CSS Modules for component scoping
✅ TypeScript for type safety
✅ Next.js Image optimization
✅ Smooth animations and transitions
✅ Purple gradient text effects
✅ Glass-morphism card effects
✅ Hover interactions
✅ Star animation in hero section

## Style Guide Compliance

This implementation strictly follows `STYLE_GUIDE.md`:
- Color palette with all CSS variables
- Figtree + Urbanist font combination
- Exact spacing scale (rem-based)
- Component styling patterns
- Shadow system
- Animation timings (0.3s standard)
- Border radius scale
- Responsive breakpoints (768px, 1024px)

## Next Steps

After running the development server:

1. Visit http://localhost:3000
2. Test all sections scroll smoothly
3. Verify all hover effects work
4. Test responsive breakpoints
5. Check all images load correctly

## Production Deployment

Ready to deploy? You can deploy to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: `netlify deploy`
- **Docker**: Build with `docker build`
- **Static Export**: `npm run build && npm run export`

## Support

For issues or questions about the implementation, refer to:
- README.md - Full documentation
- STYLE_GUIDE.md - Complete design system
- Next.js Docs - https://nextjs.org/docs
