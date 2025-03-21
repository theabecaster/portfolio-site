# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI**: Clean, professional, and responsive design
- **Dark/Light Mode**: Automatic theme switching based on user preferences
- **Optimized Performance**: Fast loading and smooth animations
- **SEO Friendly**: Proper meta tags and structured data
- **Type Safety**: Built with TypeScript for better code quality
- **Modular Components**: Well-organized component structure

## Tech Stack

- **Frontend**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **Icons**: React Icons
- **UI Components**: Custom components, Headless UI
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier (recommended)

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   ├── sections/   # Page sections (Hero, About, etc.)
│   │   └── ui/         # Reusable UI components
│   ├── data/           # Data files (projects, skills)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── types/          # TypeScript types
├── .gitignore          # Git ignore file
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # Project documentation
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. **Personal Information**: Update the personal information in the components
2. **Projects**: Add your projects in the `src/data/projects.ts` file
3. **Skills**: Update your skills in the `src/data/skills.ts` file
4. **Theme**: Customize the theme colors in `src/app/globals.css`
5. **Content**: Replace the placeholder content with your own in the section components

## Deployment

The project can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio-website)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
