#!/bin/bash

# ============================================
# BARIONEAL — ювелирный лендинг, FSD-структура
# ============================================

mkdir -p src/app/styles
mkdir -p src/pages/home
mkdir -p src/shared/ui/Button
mkdir -p src/shared/ui/Container
mkdir -p src/shared/config
mkdir -p src/widgets/{header,hero,wedding,sustainability,about,our-jewelry,custom-design,love-in-all-ways,footer}

# ============================================
# ROOT
# ============================================
cat > index.html << 'END'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Barioneal — Fine Jewelry</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
END

cat > public/favicon.svg << 'END'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1a1a1a"/>
  <text x="16" y="22" font-family="Georgia" font-size="18" fill="#f5c9b8" text-anchor="middle">B</text>
</svg>
END

cat > vite.config.js << 'END'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
END

cat > jsconfig.json << 'END'
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
  "include": ["src"]
}
END

cat > vercel.json << 'END'
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
END

# ============================================
# MAIN
# ============================================
cat > src/main.jsx << 'END'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app';
import '@/app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
END

# ============================================
# APP
# ============================================
cat > src/app/App.jsx << 'END'
import { HomePage } from '@/pages/home';

export function App() {
  return <HomePage />;
}
END

echo "export { App } from './App';" > src/app/index.js

# ============================================
# STYLES
# ============================================
cat > src/app/styles/variables.css << 'END'
:root {
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-bg: #ffffff;
  --color-dark: #111111;

  /* accent colors used across sections */
  --pink: #f5c9b8;           /* hero reviews bar */
  --beige: #e5dfd3;          /* about section bg */
  --green: #c9d9c2;          /* sustainability + custom design bg */
  --blue: #c9d9e8;           /* love in all ways panel */
  --peach: #f8f5f0;          /* light buttons */

  --font: 'Inter', system-ui, sans-serif;
  --header-h: 140px;
  --radius: 4px;
  --radius-pill: 100px;
}
END

cat > src/app/styles/index.css << 'END'
@import './variables.css';

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}

img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; }
ul { list-style: none; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
END

# ============================================
# SHARED CONFIG — все картинки в одном файле
# ============================================
cat > src/shared/config/images.js << 'END'
/**
 * Все картинки проекта в одном месте.
 * Замени значения на свои пути: '/images/имя-файла.jpg'
 * Картинки должны лежать в public/images/
 */
export const IMAGES = {
  // Header / Hero
  heroBg: '/images/hero-woman.jpg',
  ringTop: '/images/ring-top.png',

  // Wedding & Engagement (4 карточки)
  wedding1: '/images/wedding-1.jpg',
  wedding2: '/images/wedding-2.jpg',
  wedding3: '/images/wedding-3.jpg',
  wedding4: '/images/wedding-4.jpg',

  // Sustainability (фон слева)
  ethical: '/images/ethical.jpg',

  // Our Jewelry (4 карточки)
  jewelry1: '/images/jewelry-1.jpg',
  jewelry2: '/images/jewelry-2.jpg',
  jewelry3: '/images/jewelry-3.jpg',
  jewelry4: '/images/jewelry-4.jpg',

  // Custom Design (картинка справа)
  customDesign: '/images/custom-design.jpg',

  // Love in All Ways
  loveCouple: '/images/love-couple.jpg',
  gallery1: '/images/gallery-1.jpg',
  gallery2: '/images/gallery-2.jpg',
  gallery3: '/images/gallery-3.jpg',
  gallery4: '/images/gallery-4.jpg',
};
END

echo "export { IMAGES } from './images';" > src/shared/config/index.js

# ============================================
# SHARED UI — Button
# ============================================
cat > src/shared/ui/Button/Button.module.css << 'END'
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 40px;
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: background 0.2s, transform 0.15s;
}

.btn--light {
  background: var(--peach);
  color: var(--color-text);
}
.btn--light:hover { background: #ffffff; }

.btn--dark {
  background: var(--color-dark);
  color: #ffffff;
}
.btn--dark:hover { background: #333; }

.btn--outline {
  border: 1px solid currentColor;
  background: transparent;
}
.btn--outline:hover { background: rgba(0, 0, 0, 0.06); }

@media (max-width: 640px) {
  .btn { padding: 16px 28px; width: 100%; }
}
END

cat > src/shared/ui/Button/Button.jsx << 'END'
import { cn } from '@/shared/lib/cn';
import styles from './Button.module.css';

/**
 * Кнопка-пилюля.
 * variant: light | dark | outline
 */
export function Button({ children, variant = 'light', onClick, className }) {
  return (
    <button
      type="button"
      className={cn(styles.btn, styles[`btn--${variant}`], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
END

echo "export { Button } from './Button';" > src/shared/ui/Button/index.js

# ============================================
# SHARED UI — Container
# ============================================
cat > src/shared/ui/Container/Container.module.css << 'END'
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 640px) {
  .container { padding: 0 20px; }
}
END

cat > src/shared/ui/Container/Container.jsx << 'END'
import { cn } from '@/shared/lib/cn';
import styles from './Container.module.css';

export function Container({ children, className }) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
END

echo "export { Container } from './Container';" > src/shared/ui/Container/index.js

echo "export { Button } from './Button';
export { Container } from './Container';" > src/shared/ui/index.js

# ============================================
# SHARED LIB — cn helper
# ============================================
mkdir -p src/shared/lib
cat > src/shared/lib/cn.js << 'END'
// cn('a', false, 'b') -> 'a b'
export function cn(...args) {
  return args.filter(Boolean).join(' ');
}
END

echo "export { cn } from './cn';" > src/shared/lib/index.js

echo ""
echo "==========================================="
echo "ЧАСТЬ 1/2 ГОТОВА — конфиги, app, shared"
echo "==========================================="
echo ""
echo "Дальше: виджеты + страница. Скажи 'дальше'."
echo ""
