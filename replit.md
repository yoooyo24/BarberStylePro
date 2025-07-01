# The Crown Barbershop Website

## Overview

This is a modern static website for "The Crown Barbershop" - a premium men's grooming service website. Built with Astro framework using React components where needed, with TypeScript throughout. The application features a sophisticated barbershop-themed design with a focus on premium aesthetics, performance, and SEO optimization.

## System Architecture

### Frontend Architecture
- **Framework**: Astro 5.x with TypeScript
- **Components**: React components where interactivity is needed
- **Styling**: Tailwind CSS with custom barbershop color scheme (gold, black, cream themes)
- **Build Tool**: Astro's optimized build system for static generation
- **Performance**: Optimized loading with lazy loading and minimal JavaScript
- **SEO**: Built-in SEO optimization with meta tags and structured markup

### Static Site Benefits
- **Performance**: Fast loading times with static generation
- **SEO Optimized**: Built-in meta tags, Open Graph, and Twitter Cards
- **Minimal JavaScript**: Only loads React components when needed
- **Modern Fonts**: Google Fonts integration with proper preloading
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Key Components

### Astro Structure
- **Layout**: Main layout with SEO optimization and global styles
- **Pages**: Single-page application with all sections on index page
- **Components**: 
  - Navigation.astro - Fixed navigation with smooth scrolling
  - ServiceCard.astro - Service display cards
  - GalleryItem.astro - Gallery image components
  - ContactForm.tsx - Interactive React component for form handling

### Styling Architecture
- **Global CSS**: Custom CSS variables for barbershop branding (gold primary, dark themes)
- **Tailwind Configuration**: Custom color scheme with barbershop-specific classes
- **Typography**: Premium font combinations (Playfair Display, Inter, Oswald)
- **Responsive Design**: Mobile-first approach with smooth animations

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Routes**: Express routes handle business logic and database operations
3. **Database Access**: Drizzle ORM provides type-safe database interactions
4. **Response Handling**: Standardized error handling and JSON responses
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Database & Infrastructure
- **Neon**: Serverless PostgreSQL database hosting
- **Environment**: DATABASE_URL required for database connection

### UI & Styling
- **Google Fonts**: Playfair Display, Inter, and Oswald font families
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Replit Integration**: Development banner and cartographer plugin
- **TypeScript**: Full type safety across the stack
- **Vite**: Fast build tool with React plugin

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Production**: Single Node.js process serves both static files and API

### Environment Configuration
- **Development**: Hot reload with Vite dev server integration
- **Production**: Optimized builds with static file serving
- **Database**: Requires DATABASE_URL environment variable

### Deployment Commands
- `npm run dev`: Development with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Deploy database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 30, 2025. Initial setup