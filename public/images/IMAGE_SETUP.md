# Hero Background Image Setup

## Quick Setup

1. **Place your image file** in this directory (`public/images/`) with the name:
   - `flores-hero-bg.jpg` (or `.png`, `.webp`)

2. **Supported formats:**
   - JPG/JPEG
   - PNG
   - WebP

3. **Recommended dimensions:**
   - Minimum: 1920x1080px
   - Aspect ratio: 16:9 or wider
   - File size: Under 2MB for best performance

## Current Status

If you see a gradient background instead of your image, it means:
- The image file is not found at `/images/flores-hero-bg.jpg`
- OR the image failed to load

## Troubleshooting

1. **Check file name:** Must be exactly `flores-hero-bg.jpg` (case-sensitive)
2. **Check file location:** Must be in `public/images/` folder
3. **Check file format:** Use JPG, PNG, or WebP
4. **Restart dev server:** After adding the image, restart with `npm run dev`

## Alternative Image Name

If your image has a different name, update `src/components/Hero.jsx`:
```jsx
img.src = '/images/your-image-name.jpg'
```

