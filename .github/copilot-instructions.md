# GitHub Copilot Instructions for DevPortfolio

## Project Overview
This is an Astro-based portfolio template with Tailwind CSS v4. The entire project is built around a **single configuration pattern** where all content and customization flows through `src/config.ts`.

## Architecture & Key Patterns

### Single Source of Truth Pattern
- **All content changes happen in `src/config.ts`** - never edit components for content
- Components auto-hide sections when their config data is removed (e.g., delete `education` array → Education section disappears)
- The `siteConfig` object is imported by every component and page

### Component Structure
```typescript
// Standard component pattern:
---
import { siteConfig } from "../config";
---
<section>
  {siteConfig.someData && (
    // Conditional rendering based on config presence
  )}
</section>
```

### Extended Configuration Support
This project has been **extended beyond the original template** to support:
- `skillsAndExpertise` - categorized skills object (vs simple `skills` array)
- `achievements` - array of accomplishments
- Both `SkillsExpertise.astro` and `Achievements.astro` components exist

## Critical Implementation Details

### Dual Skills Pattern
```typescript
// src/config.ts contains BOTH:
skills: ["Java", "Spring Boot", ...],              // For About.astro
skillsAndExpertise: {                             // For SkillsExpertise.astro
  programmingLanguages: [...],
  devOps: [...], // etc
}
```

### Component Dependencies
- `About.astro` requires `siteConfig.skills` array
- `SkillsExpertise.astro` requires `siteConfig.skillsAndExpertise` object
- `Achievements.astro` requires `siteConfig.achievements` array
- Missing either breaks the build with "Cannot read properties of undefined"

### Development Workflow
```bash
npm run dev      # Start dev server (auto-reloads on changes)
npm run build    # Production build
npm run preview  # Preview production build
```

### Styling Conventions
- **Tailwind CSS v4 only** - uses `@tailwindcss/vite` plugin
- Accent color system: `style={`background-color: ${siteConfig.accentColor}`}`
- Consistent spacing: `p-8 sm:p-12 md:p-16 lg:p-24`
- Typography: IBM Plex Mono font, responsive text sizes

### File Structure Rules
- New sections → Create in `src/components/` + add to `src/pages/index.astro`
- Page layout: `<Header /><Hero /><About /><SkillsExpertise /><Projects /><Experience /><Education /><Achievements /><Footer />`
- Icons: Use Tabler Icons only for consistency

## Configuration Patterns

### Adding New Content Sections
1. Add data structure to `siteConfig` in `src/config.ts`
2. Create component in `src/components/NewSection.astro`
3. Import and add to component list in `src/pages/index.astro`
4. Use conditional rendering: `{siteConfig.newData && <content>}`

### Common Gotchas
- **Must restart dev server** after adding new components
- **Import order matters** in `index.astro` - always import components before using them
- **Config structure changes** require updating both the config and components that read it
- **Browser caching** - use Ctrl+F5 for hard refresh when changes don't appear

## Project Context
This specific instance is customized for **Pratik Mondal** (Java & DevOps Engineer) with extended sections beyond the original template. When making changes, preserve the professional technical focus and detailed skill categorization patterns already established.