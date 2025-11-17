# Portfolio Website

A modern, responsive personal portfolio website showcasing projects, skills, and professional information for Cade Rousseau, a Software Engineering student at Milwaukee School of Engineering.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent theme selection stored in localStorage
- **Single Page Application**: Built with React Router for smooth navigation without page reloads
- **Project Showcase**: Detailed pages for individual projects with images and videos
- **Modern UI**: Clean, professional design with smooth transitions and animations
- **Back to Top Navigation**: Quick scroll-to-top functionality for improved user experience

## 🛠️ Technologies Used

### Core Technologies
- **React 18.2** - Modern JavaScript library for building user interfaces
- **TypeScript 5.3** - Type-safe JavaScript development
- **Vite 6.2** - Next-generation frontend build tool for fast development

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS transformation and optimization
- **Custom Design System** - Consistent color palette and styling throughout

### Routing & State Management
- **React Router DOM 6.22** - Client-side routing for single-page application
- **Context API** - Theme management and global state

### Development Tools
- **ESLint** - Code linting for consistent code quality
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       └── images/          # Project images, resume, and media assets
├── src/
│   ├── components/          # Reusable React components
│   │   ├── BackToTopArrow.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectNavigation.tsx
│   │   └── ScrollToTop.tsx
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/light theme management
│   ├── pages/              # Main application pages
│   │   ├── About.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectOne.tsx
│   │   ├── ProjectTwo.tsx
│   │   ├── ProjectThree.tsx
│   │   └── Resume.tsx
│   ├── styles/
│   │   └── global.css      # Global styles and Tailwind imports
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rousseac1/portfolio.git
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

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📄 Pages Overview

### Home (`/`)
- Hero section with name and title
- Introduction section with personal photo
- Inspirational quote section
- Timeline/GitHub activity visualization

### About (`/About`)
- Personal background and education information
- Career goals and aspirations
- Key strengths and skills
- Personal interests and hobbies

### Projects (`/Projects`)
- Overview of three main projects:
  1. **Wordle Game** - JavaFX-based word game with team collaboration
  2. **Travel Dataset Analysis** - Machine learning project analyzing travel data
  3. **Personal Portfolio** - This website

### Individual Project Pages
- Detailed project descriptions
- Technologies used
- Development process and learnings
- Visual demonstrations (images/videos)
- Navigation between projects

### Resume (`/Resume`)
- Professional resume display
- Downloadable PDF version

## 🎨 Design Features

### Theme System
- **Light Mode**: Warm, neutral tones with cream and brown color palette
- **Dark Mode**: Modern dark theme with gray tones
- **Persistent Storage**: Theme preference saved in browser localStorage
- **Smooth Transitions**: 300ms transition animations for theme switching

### Color Palette
- Primary: `#5c4d3f` (warm brown)
- Secondary: `#4a3e32` (darker brown)
- Background Light: `#f5f0e6` (cream)
- Background Dark: `#1b1b1d` (near black)
- Dark Mode Background: Gray scale (`gray-600`, `gray-700`, `gray-800`)

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Flexible grid layouts
- Optimized images and media

## 👤 About the Developer

**Cade Rousseau**
- Software Engineering Major with Data Science Minor
- Milwaukee School of Engineering (MSOE)
- Expected Graduation: May 2027
- Location: Waukesha, WI
- Currently seeking internship opportunities

## 📝 License

Copyright © 2024 Cade Rousseau. All Rights Reserved.

This is a personal portfolio project. The code and content are not available for use, reproduction, or distribution without explicit permission from the owner.

## 🤝 Contributing

This is a personal portfolio project and is not open for contributions.

## 📧 Contact

For inquiries or opportunities, please reach out through the contact information provided on the website.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
