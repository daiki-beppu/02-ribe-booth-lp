# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **bun** as the package manager. Use these commands:

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production (runs TypeScript compilation + Vite build)
- `bun run lint` - Run ESLint on the codebase
- `bun run preview` - Preview the production build locally

Alternative with npm:
- `npm run dev/build/lint/preview` - Same commands work with npm if bun isn't available

## Project Architecture

This is a React + TypeScript + Vite landing page for a programming booth at an event. The architecture is:

### Main Structure
- **Single Page Application**: All sections are rendered in `App.tsx` as a single-page landing page
- **Section-based Layout**: The page is divided into distinct sections (Hero, Concept, Experience, Team, Pricing, Footer)
- **Component Organization**: Each major section has its own component file in `src/components/`

### Technology Stack
- **React 19** with TypeScript
- **Vite** for build tooling and development server
- **shadcn/ui** components (Card, Button, Badge, Separator) with Radix UI primitives
- **Tailwind CSS v4** for styling with CSS variables enabled
- **Lucide React** for icons

### shadcn/ui Configuration
- Style: "new-york" variant
- Base color: neutral
- CSS variables enabled for theming
- Components located in `@/components/ui/`
- Path aliases configured: `@/` points to `src/`

### Content Structure
The landing page promotes a programming experience booth with:
- Arduino LED traffic light programming experience
- Consultation sessions with professional programmers  
- Team member profiles with detailed backgrounds
- Pricing and registration information

### Component Dependencies
All section components use shadcn/ui components consistently:
- `Card`, `CardContent`, `CardHeader`, `CardTitle` for structured content
- `Button` for CTAs and navigation
- `Badge` for labels and status indicators
- `Separator` for visual divisions

### Styling Approach
- Gradient backgrounds (orange/yellow theme for hero/pricing, blue/green for content sections)
- Consistent card-based layouts
- Responsive design with mobile-first approach
- Color-coded sections for different team members and content types