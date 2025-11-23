# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and shadcn-ui.

**Live URL**: https://sohaib-dev.vercel.app/

<img width="1489" height="760" alt="image" src="https://github.com/user-attachments/assets/66684cc6-eb9a-48be-9c0a-90f1115fcf27" />

## Quick Start

### Prerequisites

- Node.js 18+ (or Bun)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sohaibakhtar/sohaib-portfolio.git
   cd sohaib-portfolio
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using bun (recommended):
   ```bash
   bun install
   ```

3. **Start the development server**
   
   Using npm:
   ```bash
   npm run dev
   ```
   
   Using bun:
   ```bash
   bun dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the portfolio in action.

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `build:dev` - Build for development
- `preview` - Preview production build locally
- `lint` - Run ESLint to check code quality

## Technologies Used

This project is built with modern web technologies for optimal performance and developer experience:

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React](https://reactjs.org/)** - UI library for building interactive interfaces
- **[shadcn-ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query/)** - Data fetching and caching
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects showcase
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## Development

### Code Quality

This project uses ESLint for code linting. Run the linter before committing:

```bash
npm run lint
```

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This portfolio is deployed on [Vercel](https://vercel.com/). The main branch automatically deploys to production.
