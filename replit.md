# SCAM.Тень - Telegram Scam Awareness Platform

## Overview

SCAM.Тень is a Russian-language educational web application designed to help users identify and protect themselves from Telegram scams. The platform provides information about common scam types, security best practices, and relevant Russian legislation (УК РФ articles) related to fraud.

The application follows a modern full-stack architecture with a React frontend and Express backend, using in-memory storage for data persistence with PostgreSQL schema definitions ready for database migration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme (red accent colors matching the security/danger theme)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful JSON API with `/api` prefix
- **Storage Pattern**: Repository pattern with `IStorage` interface allowing easy swap between MemStorage and database implementations

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration
- **Current Storage**: In-memory storage (`MemStorage` class) with seed data
- **Database Ready**: PostgreSQL schema defined in `shared/schema.ts`, Drizzle config ready for `db:push`

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components (shadcn + custom)
│       ├── pages/        # Route pages (Home, Security, Classification, Law)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── db.ts         # Database connection (when enabled)
└── shared/           # Shared types and schemas
    └── schema.ts     # Drizzle table definitions
```

### Key Design Decisions
1. **Monorepo Structure**: Client and server share TypeScript types through `shared/` directory with path aliases
2. **Component Library**: shadcn/ui provides consistent, accessible components that can be customized
3. **Dark Theme**: Custom CSS variables in `index.css` create a security-focused dark aesthetic with red accents
4. **Sidebar Navigation**: SidebarProvider from shadcn for responsive navigation across all pages

## External Dependencies

### Database
- **PostgreSQL**: Connection via `DATABASE_URL` environment variable
- **Drizzle Kit**: Schema migrations with `npm run db:push`

### UI Framework Dependencies
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first styling with PostCSS
- **Lucide React**: Icon library

### Data & Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with `@hookform/resolvers`
- **Zod**: Runtime schema validation

### Build & Development
- **Vite**: Development server with HMR
- **esbuild**: Production server bundling
- **TSX**: TypeScript execution for development

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator