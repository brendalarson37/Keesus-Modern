# Lake Keesus Advancement Association (LKAA) Website

## Overview

A community website for the Lake Keesus Advancement Association, a lake homeowners association in Waukesha County, Wisconsin. The site provides information about membership, events, boating regulations, community activities, and contact information for the association's leadership.

The application is a static informational website with no authentication or user-generated content. Data for events, news, and community information is managed directly in the frontend components rather than through a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom lake-inspired color palette (deep blue primary, teal secondary, coral accent)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll reveals
- **State Management**: TanStack React Query for data fetching (though currently unused as data is static)
- **Typography**: DM Sans (body) and Playfair Display (headings) from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **Development**: Hot module replacement via Vite dev server

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Page components (Home, Membership, Events, etc.)
    hooks/        # Custom React hooks
    lib/          # Utility functions
server/           # Express backend
shared/           # Shared types and schemas between frontend/backend
```

### Design Patterns
- **Component-based architecture**: Pages composed of reusable section components
- **CSS Variables**: Theme colors defined as CSS custom properties for consistency
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Static data approach**: Event and community information embedded in page components rather than fetched from API

### Database Schema
The project includes Drizzle ORM configuration with PostgreSQL schemas for `events` and `news` tables, but the current implementation uses static data in the frontend. The database infrastructure exists for potential future dynamic content management.

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Data fetching and caching (v5.60.5)
- **drizzle-orm**: Database ORM with PostgreSQL dialect
- **framer-motion**: Animation library
- **wouter**: Client-side routing

### UI Framework
- **shadcn/ui**: Pre-built accessible components
- **@radix-ui/***: Headless UI primitives (dialog, dropdown, tabs, etc.)
- **lucide-react**: Icon library
- **tailwind-merge** and **clsx**: CSS class utilities

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Database (configured but not actively used)
- **PostgreSQL**: Database via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available if needed)
- **drizzle-kit**: Database migration tooling

### Replit-specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner