# Ayyan - Portfolio Website

A modern, minimalist portfolio website built with React + TypeScript, featuring dark mode design, smooth animations, and responsive layout.

## 🚀 Live Demo

The website is currently running locally at `http://localhost:5173/`

## ✨ Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Theme Options**: Dark/Light theme toggle with smooth transitions
- **Smooth Animations**: Framer Motion for scroll-based transitions and hover effects
- **Responsive Design**: Mobile-first approach with MUI Grid system
- **Typography**: Space Grotesk font family for modern, clean aesthetics
- **Interactive Elements**: Hover animations and smooth scroll navigation
- **Context Management**: React Context for theme state management
- **Custom Hooks**: Reusable hooks for theme and animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Styling**: MUI theming system
- **Typography**: Space Grotesk font family

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SectionWrapper.tsx
│   ├── TechIcon.tsx
│   └── ThemeToggle.tsx
├── contexts/           # React Context providers
│   ├── theme-context.ts
│   └── ThemeContext.tsx
├── sections/           # Main portfolio sections
│   ├── Hero.tsx       # Landing section with intro
│   ├── Stack.tsx      # Tech stack display
│   ├── Philosophy.tsx # Core values and principles
│   └── Contact.tsx    # Contact information
├── data/              # Content data
│   └── content.ts     # Portfolio content and configuration
├── hooks/             # Custom React hooks
│   └── useTheme.ts    # Theme management hook
├── theme.ts           # MUI theme configuration
├── App.tsx            # Main app component
└── main.tsx          # App entry point
```

## 🧩 Components Overview

### Core Components

- **SectionWrapper**: Wrapper component providing consistent animations and styling for sections
- **TechIcon**: Component for displaying technology icons in the Stack section
- **ThemeToggle**: Theme switcher component for toggling between dark and light modes

### Context and Hooks

- **ThemeContext**: Manages the theme state across the application
- **useTheme**: Custom hook for accessing and updating theme settings

### Main Sections

- **Hero**: Landing section introducing the portfolio
- **Stack**: Interactive display of technical skills and technologies
- **Philosophy**: Core values and development principles
- **Contact**: Contact information and social links

## 🎨 Design Philosophy

- **Minimalist**: Clean, focused content over visual clutter
- **Purpose-driven**: Every element serves a clear function
- **Accessible**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized animations and lightweight assets

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Customization

### Content

Update your personal information in `src/data/content.ts`:

- Personal details (name, email, social links)
- Tech stack and skills
- Philosophy statements
- Contact information

### Styling

Modify the theme in `src/theme.ts`:

- Color palette
- Typography settings
- Component styling
- Responsive breakpoints

### Sections

Add or modify sections in `src/sections/`:

- Each section is a standalone component
- Uses `SectionWrapper` for consistent animations
- Responsive design with MUI components

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Upload the dist/ folder to Netlify
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Proper image optimization and formats
- **Minimal Bundle**: Tree-shaking and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Built with ❤️ by Ayyan
