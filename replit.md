# MINDWARE - Complete Identification Solutions Platform

## Overview

MINDWARE is a comprehensive identification solutions platform featuring a complete admin panel system for dynamic content management. The platform specializes in tags, cards, wearables, and smart identification solutions with a mega menu navigation structure and full admin capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.
Brand: MINDWARE (changed from TagsIndia)
Navigation: Mega menu with hierarchical product categories
Admin System: Full dynamic content management required

## System Architecture

The application uses a monorepo structure with separate client and server directories, following modern web development practices with TypeScript throughout the stack. Now includes comprehensive admin panel system with dynamic content management capabilities.

### Recent Changes (January 2025)
- ✅ **Project Migration**: Successfully migrated from Replit Agent to standard Replit environment
- ✅ **Dependencies**: Fixed missing dependencies (dotenv) and server imports
- ✅ **Database**: Created PostgreSQL database `tagsindia_db` with proper schema
- ✅ **Extended Loader**: Updated loader duration to 5 seconds with advanced MINDWARE animated letters
- ✅ **Full Responsive Design**: Made entire website mobile-first responsive with improved layouts
- ✅ **Admin Panel Enhancement**: Built comprehensive admin system with full CRUD functionality
- ✅ **Database Integration**: Fixed connection issues and successfully seeded 12 products across 4 categories
- ✅ **Admin Routes**: Created complete admin API endpoints for users, products, categories, and orders
- ✅ **User Management**: Built responsive admin interface for user management with roles
- ✅ **Order Management**: Created order tracking and management system
- ✅ **Navigation**: Enhanced mobile navigation with improved spacing and cart functionality
- ✅ **Component Optimization**: Made all components fully responsive with proper breakpoints

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom luxury color palette and shadcn/ui components
- **State Management**: Zustand for client-side cart management with persistence
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth page transitions and interactions
- **3D Graphics**: Three.js for interactive product visualizations

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with consistent error handling and logging
- **Development**: Vite for development server with HMR support

### Build System
- **Bundling**: Vite for frontend, esbuild for backend
- **TypeScript**: Strict mode with path mapping for clean imports
- **Development**: Concurrent development with automatic reloading

## Key Components

### Database Schema (Drizzle ORM)
```typescript
- users: User authentication and management
- products: Product catalog with categories, pricing, and features
- cartItems: Shopping cart functionality with session-based storage
```

### Frontend Components
- **Layout**: Responsive navigation with mobile-first design
- **ProductCard**: Reusable product display with animations
- **CartModal**: Shopping cart overlay with quantity management
- **ThreeCanvas**: 3D product visualization component

### API Endpoints
- `/api/products` - Product listing and filtering
- `/api/products/:id` - Individual product details
- `/api/cart/:sessionId` - Shopping cart management

### UI Component Library
Built on Radix UI primitives with custom styling:
- Form components (Input, Button, Select, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Navigation components (Tabs, Menubar, etc.)
- Data display components (Table, Badge, etc.)

## Data Flow

1. **Product Discovery**: Users browse products with filtering and search capabilities
2. **Product Details**: Individual product pages with 3D visualizations and detailed information
3. **Shopping Cart**: Client-side cart management with persistent storage
4. **Checkout Process**: Multi-step checkout with form validation

### State Management Flow
- **Server State**: TanStack Query manages API data with caching and background updates
- **Client State**: Zustand handles shopping cart with localStorage persistence
- **UI State**: React hooks for component-level state management

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, TypeScript)
- Express.js with middleware for CORS, parsing, and static files
- Drizzle ORM with Neon Database connector for PostgreSQL

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Framer Motion for animations
- Three.js for 3D graphics

### Development Tools
- Vite for fast development and building
- ESBuild for server bundling
- PostCSS for CSS processing

### Authentication & Session Management
- Session-based cart management (ready for user authentication expansion)
- Connect-pg-simple for potential session storage

## Deployment Strategy

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Single deployment artifact with both client and server code

### Environment Configuration
- DATABASE_URL for PostgreSQL connection
- NODE_ENV for environment-specific behavior
- Supports both development and production modes

### Database Management
- Drizzle Kit for schema migrations
- Push-based deployment with `db:push` command
- PostgreSQL dialect with connection pooling support

The architecture prioritizes developer experience with hot reloading, type safety, and modern tooling while maintaining production readiness with optimized builds and database integration.