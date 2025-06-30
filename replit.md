# The Crown Barbershop Website

## Overview

This is a modern full-stack web application for "The Crown Barbershop" - a premium men's grooming service website. Built with React frontend and Express.js backend, using TypeScript throughout. The application features a sophisticated barbershop-themed design with a focus on premium aesthetics and user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom barbershop color scheme (gold, black, cream themes)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reload with tsx and Vite integration

### Database Layer
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Located in `shared/schema.ts` for code sharing between frontend/backend
- **Migrations**: Managed through Drizzle Kit
- **Validation**: Zod schemas for runtime type validation

## Key Components

### Frontend Structure
- **Main App**: Router setup with QueryClient provider and toast notifications
- **Pages**: Home page with barbershop business information and contact forms
- **UI Library**: Complete shadcn/ui component set with custom barbershop theming
- **Styling**: Custom CSS variables for barbershop branding (gold primary, dark themes)

### Backend Structure
- **Server**: Express application with middleware for logging and error handling
- **Routes**: Modular route registration system (currently minimal setup)
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Development Setup**: Vite integration for seamless development experience

### Shared Resources
- **Schema**: Database schema and validation shared between client/server
- **Types**: Type definitions accessible from both frontend and backend

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