# Ayyan - Portfolio Website

A modern, minimalist portfolio website built with React + TypeScript, featuring dark mode design, smooth animations, and responsive layout.

## 🚀 Live Demo

The website is currently running locally at `http://localhost:5173/`

## ✨ Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Dark Theme**: Beautiful dark mode design with soft backgrounds and high-contrast text
- **Smooth Animations**: Framer Motion for scroll-based transitions and hover effects
- **Responsive Design**: Mobile-first approach with MUI Grid system
- **Typography**: Space Grotesk font family for modern, clean aesthetics
- **Interactive Elements**: Hover animations and smooth scroll navigation

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
│   └── SectionWrapper.tsx
├── sections/           # Main portfolio sections
│   ├── Hero.tsx       # Landing section with intro
│   ├── Stack.tsx      # Tech stack display
│   ├── Philosophy.tsx # Core values and principles
│   └── Contact.tsx    # Contact information
├── data/              # Content data
│   └── content.ts     # Portfolio content and configuration
├── theme.ts           # MUI theme configuration
├── App.tsx            # Main app component
└── main.tsx           # App entry point
```

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vite](https://vitejs.dev/) for the build tool
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for typography

---

Built with ❤️ by Ayyan

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
