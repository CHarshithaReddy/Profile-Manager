# Profile Management Application

A React application for managing user profiles with features like creation, updating, and deletion.

## Features

- Create and edit user profiles
- Form validation
- Profile display
- Local storage persistence
- Responsive design
- Error handling
- Routing
- Environment configuration

## Tech Stack

- React
- TypeScript
- React Router
- React Context
- Tailwind CSS
- Vite
- React Hot Toast

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The application uses different environment variables for development and production:

- Development: `.env`
- Production: `.env.production`

## Build for Production

```bash
npm run build
```

## Project Structure

```

src/
 - components/        # React components
 - context/           # Context provider
 - types/             # Typescript interfaces
 - utils/             # Utility functions
 - App.tsx            # Main component


```

## Optimizations

- React.memo for performance optimization
- useCallback for memoized callbacks
- Local storage for data persistence
- Environment-specific configurations
- Modular code organization
