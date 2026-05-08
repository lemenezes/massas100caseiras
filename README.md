# Massas 100 Caseiras — Site Oficial

Landing page da **Massas 100 Caseiras**, marca de massas e molhos caseiros com entrega própria em Belo Horizonte.

---

## Stack

| Camada | Tecnologia |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Estilo | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Fontes | Cormorant Garamond + Inter (Google Fonts) |
| Analytics | Google Analytics 4 + Microsoft Clarity |

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

---

## Variáveis de ambiente

Crie um `.env` na raiz com base no `.env.example`:

```bash
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `VITE_GA4_ID` | Measurement ID do Google Analytics 4 (ex: `G-XXXXXXXXXX`) |
| `VITE_CLARITY_ID` | Project ID do Microsoft Clarity (ex: `abcdefghij`) |

Os scripts de analytics só são injetados em produção se as variáveis estiverem preenchidas. Em desenvolvimento local, deixe em branco para não poluir os dados.

---

## Build de produção

```bash
npm run build
```

O output vai para `dist/`. Para preview local do build:

```bash
npm run preview
```

---

## Estrutura

```
src/
  assets/          # Fotos do produto + logo + vídeo
  components/
    Analytics.tsx  # Injeta GA4 e Clarity; scroll depth tracking
    Navbar.tsx
    Hero.tsx
    ProductsSection.tsx
    HowItWorksSection.tsx
    AboutSection.tsx
    VideoSection.tsx
    GallerySection.tsx
    OrderSection.tsx
    Footer.tsx
    ThemeToggle.tsx
  lib/
    analytics.ts   # Helpers de event tracking (trackWhatsAppClick, etc.)
  App.tsx
  index.css        # Tokens Tailwind 4 + variante dark
```

---

## Eventos rastreados

| Evento | Onde |
|---|---|
| `whatsapp_click` | Navbar, Hero, OrderSection, ProductsSection, Footer |
| `instagram_click` | OrderSection, GallerySection, Footer |
| `mobile_menu_open` | Navbar (hamburger) |
| `theme_change` | ThemeToggle |
| `cardapio_view` | ProductsSection (link cardápio) |
| `scroll_depth` | Analytics component (25 / 50 / 75 / 90%) |

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
