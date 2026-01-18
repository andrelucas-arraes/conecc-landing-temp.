# 🩺 CONECC Landing Page

<div align="center">

![CONECC](https://img.shields.io/badge/CONECC-I_Congresso-5D2126?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF?style=for-the-badge&logo=vite)

**Landing page moderna, responsiva e acessível para o I Congresso de Especialidades Clínicas e Cirúrgicas**

[🌐 Ver Demo](https://conecc.com.br) • [📧 Contato](mailto:coneccpi@gmail.com) • [📸 Instagram](https://instagram.com/coneccpi)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Preview do Projeto](#-preview-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#️-tecnologias)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Instalação e Uso](#-instalação-e-uso)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Componentes](#-componentes)
- [Design System](#-design-system)
- [Acessibilidade](#-acessibilidade)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Contribuição](#-contribuição)
- [Contato](#-contato)
- [Licença](#-licença)
- [Desenvolvedores](#-desenvolvedores)

---

## 📖 Sobre o Projeto

O **CONECC** (I Congresso de Especialidades Clínicas e Cirúrgicas) é um evento médico que reúne profissionais e estudantes da área da saúde para atualização científica, troca de experiências e networking.

Esta landing page foi desenvolvida para apresentar todas as informações do evento de forma clara, acessível e otimizada para conversão.

### 🎯 Informações do Evento

| Informação | Detalhe |
|------------|---------|
| **Tema** | Multiespecialidades e o Futuro da Medicina: Ciência, Prática e Inovação |
| **Local** | Teresina, Piauí |
| **Cursos Práticos** | 19 a 21 de março de 2026 |
| **Congresso** | 26 a 29 de março de 2026 |

---

## 🖼️ Preview do Projeto

> A landing page conta com **14 seções principais**, todas responsivas e otimizadas para todos os dispositivos.

### Seções da Página

1. **🏠 Hero** - Banner principal com apresentação do evento
2. **ℹ️ Sobre** - Informações detalhadas sobre o congresso
3. **🎤 Palestrantes** - Apresentação dos profissionais por módulo/especialidade
4. **🛠️ Cursos Práticos** - Programação dos cursos hands-on
5. **📅 Programação** - Cronograma completo do congresso por dia
6. **🎫 Ingressos** - Preços e lotes disponíveis
7. **📄 Edital** - Informações oficiais de submissão de trabalhos
8. **📍 Localização** - Mapa e informações do local
9. **🤝 Parceiros** - Patrocinadores e apoiadores do evento
10. **🏛️ Apoio Institucional** - Instituições parceiras
11. **👥 Comissão Organizadora** - Membros da organização do evento
12. **🩺 Diretoria Médica** - Equipe médica responsável
13. **❓ FAQ** - Perguntas frequentes
14. **📧 Contato** - Formulário e informações de contato

---

## ✨ Funcionalidades

### 🎯 Experiência do Usuário
- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves com Framer Motion
- ✅ Navegação intuitiva com menu fixo
- ✅ Scroll suave entre seções
- ✅ Formulário de contato funcional
- ✅ Botão "Voltar ao topo"
- ✅ Lazy loading de imagens

### ♿ Acessibilidade (WCAG 2.1 AA)
- ✅ Navegação completa por teclado
- ✅ ARIA labels em todos os elementos interativos
- ✅ Contraste de cores adequado (4.5:1 mínimo)
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Skip link para conteúdo principal
- ✅ Estrutura semântica HTML5
- ✅ Focus states visíveis
- ✅ Hierarquia de headings correta

### 🔍 SEO e Performance
- ✅ Meta tags otimizadas (Open Graph, Twitter Cards)
- ✅ Schema.org structured data (Event markup)
- ✅ Sitemap XML
- ✅ robots.txt configurado
- ✅ Build otimizado com Vite
- ✅ Code splitting automático
- ✅ Vercel Analytics integrado
- ✅ Vercel Speed Insights

---

## 🛠️ Tecnologias

### 📦 Core Stack

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [React](https://react.dev) | 19.2.1 | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org) | 5.6.3 | Superset tipado de JavaScript |
| [Vite](https://vitejs.dev) | 6.0.0 | Build tool e dev server ultrarrápido |
| [Wouter](https://github.com/molefrog/wouter) | 3.3.5 | Roteamento leve (~1.5KB) |

### 🎨 Estilização e UI

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Tailwind CSS](https://tailwindcss.com) | 4.1.14 | Framework CSS utility-first |
| [Framer Motion](https://www.framer.com/motion) | 12.23.22 | Biblioteca de animações |
| [Lucide React](https://lucide.dev) | 0.453.0 | Ícones SVG |
| [Radix UI](https://www.radix-ui.com) | latest | Componentes acessíveis headless |
| [shadcn/ui](https://ui.shadcn.com) | - | Componentes base customizáveis |

### 📝 Formulários e Validação

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [React Hook Form](https://react-hook-form.com) | 7.64.0 | Gerenciamento de formulários |
| [Zod](https://zod.dev) | 4.1.12 | Validação de schemas |
| [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) | 5.2.2 | Integração RHF + Zod |

### 🖥️ Backend e Build

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Express](https://expressjs.com) | 4.21.2 | Servidor Node.js para produção |
| [esbuild](https://esbuild.github.io) | 0.25.0 | Bundler para o backend |

### 🧹 Qualidade de Código

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [ESLint](https://eslint.org) | 9.39.2 | Linting de código |
| [Prettier](https://prettier.io) | 3.6.2 | Formatação de código |
| [Vitest](https://vitest.dev) | 2.1.4 | Framework de testes |

### 📊 Analytics

| Tecnologia | Descrição |
|------------|-----------|
| [@vercel/analytics](https://vercel.com/analytics) | Analytics de performance |
| [@vercel/speed-insights](https://vercel.com/docs/speed-insights) | Métricas de velocidade |

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura **monorepo simplificada** com três diretórios principais:

```
┌─────────────────────────────────────────────────────────────┐
│                         PROJETO                              │
├─────────────────┬──────────────────┬────────────────────────┤
│     client/     │     server/      │       shared/          │
│   (Frontend)    │    (Backend)     │  (Código Compartilhado)│
├─────────────────┼──────────────────┼────────────────────────┤
│ React + Vite    │ Express + Node   │ Constantes e Types     │
│ Tailwind CSS    │ Serve estático   │                        │
│ Componentes     │ SPA fallback     │                        │
└─────────────────┴──────────────────┴────────────────────────┘
```

### Fluxo de Build

```
Development:
  pnpm dev → Vite Dev Server → http://localhost:5173

Production:
  pnpm build → Vite (Frontend) + esbuild (Backend)
             ↓
  pnpm start → Express serve dist/public → http://localhost:3000
```

---

## 🚀 Instalação e Uso

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18 ou superior
- **pnpm** 10 ou superior (recomendado) ou npm/yarn

> 💡 **Dica**: Use [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js

### 📥 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/andrelucas-arraes/conecc-landing-temp.git
cd conecc-landing
```

2. **Instale as dependências:**
```bash
pnpm install
```

### 💻 Desenvolvimento

Inicie o servidor de desenvolvimento com hot reload:

```bash
pnpm dev
```

O projeto estará disponível em:
- **URL Local**: `http://localhost:5173`
- **Rede**: `http://[seu-ip]:5173` (para testar em dispositivos móveis)

### 📦 Build para Produção

1. **Gere o build:**
```bash
pnpm build
```

Este comando:
- Compila o frontend com Vite → `dist/public/`
- Compila o backend com esbuild → `dist/index.js`

2. **Inicie o servidor de produção:**
```bash
pnpm start
```

O servidor Express estará rodando em `http://localhost:3000` (ou na porta definida em `process.env.PORT`).

### 👁️ Preview do Build

Para visualizar o build de produção localmente sem iniciar o servidor Express:

```bash
pnpm preview
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **dev** | `pnpm dev` | Inicia servidor de desenvolvimento com hot reload |
| **build** | `pnpm build` | Gera build otimizado para produção (frontend + backend) |
| **start** | `pnpm start` | Inicia servidor Express de produção |
| **preview** | `pnpm preview` | Preview do build de produção via Vite |
| **check** | `pnpm check` | Verifica tipos TypeScript sem gerar arquivos |
| **format** | `pnpm format` | Formata todo o código com Prettier |

### Verificação de Tipos

Para verificar se há erros de TypeScript:

```bash
pnpm check
```

### Formatação de Código

Para formatar todo o código seguindo as regras do Prettier:

```bash
pnpm format
```

---

## 🧩 Componentes

Os componentes estão organizados em uma estrutura modular dentro de `client/src/components/`:

### 📁 Estrutura de Componentes

```
components/
├── 📁 sections/    # Seções principais da landing page
├── 📁 layout/      # Componentes de layout (Header, Footer)
├── 📁 common/      # Componentes reutilizáveis
└── 📁 ui/          # Componentes UI base (shadcn/ui)
```

### 🔲 Seções (`sections/`)

Cada seção representa uma parte distinta da landing page:

| Componente | Descrição |
|------------|-----------|
| **Hero** | Banner principal com apresentação do evento |
| **About** | Seção sobre o congresso |
| **Speakers** | Grid de palestrantes por módulo/especialidade |
| **PracticalCourses** | Cursos práticos hands-on disponíveis |
| **Schedule** | Programação completa por dia |
| **Tickets** | Cards de preços e lotes |
| **Edital** | Informações de submissão de trabalhos |
| **Location** | Informações e mapa do local |
| **Partners** | Logos de patrocinadores e apoiadores |
| **InstitutionalSupport** | Instituições parceiras |
| **OrganizingCommittee** | Membros da comissão organizadora |
| **MedicalBoard** | Equipe da diretoria médica |
| **FAQ** | Perguntas frequentes (accordion) |
| **Contact** | Formulário e informações de contato |

### 🏗️ Layout (`layout/`)

Componentes estruturais da página:

| Componente | Descrição |
|------------|-----------|
| **Header** | Navegação fixa com menu responsivo (desktop e mobile) |
| **Footer** | Rodapé com links, redes sociais e créditos |

### 🔧 Common (`common/`)

Componentes reutilizáveis em múltiplas seções:

| Componente | Descrição |
|------------|-----------|
| **Map** | Componente de mapa integrado com localização |
| **ScrollToTop** | Botão flutuante para voltar ao topo |
| **ErrorBoundary** | Tratamento de erros React |

### 🎨 UI (`ui/`)

Componentes base seguindo padrões do [shadcn/ui](https://ui.shadcn.com):

- Accordion, Alert, Avatar, Badge, Button, Card
- Dialog, Dropdown, Input, Label, Select
- Tabs, Textarea, Toast, Tooltip
- E muitos outros...

### 🪝 Custom Hooks

Localizados em `client/src/hooks/`:

| Hook | Descrição |
|------|-----------|
| **useMobile** | Detecta viewport mobile (< 768px) |
| **useComposition** | Gerencia composição de estados |
| **usePersistFn** | Persiste referência de funções entre renders |

### 🎭 Contextos

Localizados em `client/src/contexts/`:

| Contexto | Descrição |
|----------|-----------|
| **ThemeContext** | Gerenciamento de tema (light/dark) |

---

## 🎨 Design System

### Paleta de Cores

O projeto utiliza uma paleta personalizada baseada em tons de vinho e rose:

```css
/* Cores Principais */
--color-wine-deep: #5D2126;     /* Cor principal (vinho profundo) */
--color-wine-dark: #593234;     /* Variação escura */

/* Cores Secundárias */
--color-rose-burnt: #BC989A;    /* Rose queimado */
--color-terracotta: #8C5E60;    /* Terracota */
--color-rose-old: #A67B7D;      /* Rose antigo */

/* Cores de Suporte */
--color-rose-nude: #C4A5A7;     /* Rose nude */
--color-rose-pale: #ECD5D7;     /* Rose pálido */
--color-cream: #F9F4F5;         /* Creme (background) */
```

### Tipografia

| Elemento | Família | Peso |
|----------|---------|------|
| **Headings (h1-h6)** | Playfair Display | 600 (semibold) |
| **Body** | Lato | 400 (regular) |

### Tokens de Design

```css
/* Border Radius */
--radius: 0.65rem;
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);

/* Scroll Padding (para header fixo) */
scroll-padding-top: 6rem;  /* Mobile */
scroll-padding-top: 7rem;  /* Desktop (≥640px) */
```

### Customização

Para customizar as cores, edite o arquivo `client/src/index.css`:

```css
:root {
  --color-wine-deep: #5D2126;  /* Altere aqui */
  /* ... outras variáveis */
}
```

---

## ♿ Acessibilidade

### Recursos Implementados

| Recurso | Implementação |
|---------|---------------|
| **Skip Link** | Link "Pular para conteúdo" no topo da página |
| **Navegação por Teclado** | Todos os elementos interativos são focáveis |
| **ARIA Labels** | Labels descritivos em botões e links |
| **Contraste** | Razão de contraste ≥ 4.5:1 |
| **Reduced Motion** | Animações desabilitadas quando preferido |
| **Estrutura Semântica** | HTML5 semântico (header, main, section, nav, etc.) |
| **Hierarquia de Headings** | Um h1 por página, headings em ordem |

### Testando Acessibilidade

```bash
# Usando axe-core (pode ser instalado como extensão do Chrome)
# Ou via CLI:
npx axe-cli http://localhost:5173
```

---

## 🚀 Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório na [Vercel](https://vercel.com)
2. A Vercel detectará automaticamente as configurações via `vercel.json`
3. Deploy automático a cada push na branch principal

**Configurações em `vercel.json`:**
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Outros Provedores

Para deploy em outros provedores (Netlify, AWS, etc.):

1. Execute `pnpm build`
2. Faça upload da pasta `dist/public/`
3. Configure redirects para SPA (todas rotas → `index.html`)

### Variáveis de Ambiente

Para produção, você pode definir:

```env
PORT=3000          # Porta do servidor Express
NODE_ENV=production # Ambiente
```

---

## 📁 Estrutura de Pastas

```
conecc-landing/
│
├── 📁 client/                    # Frontend React
│   ├── 📁 public/                # Arquivos estáticos
│   │   ├── 📁 images/            # Imagens do projeto
│   │   ├── robots.txt            # Configuração para bots
│   │   └── sitemap.xml           # Sitemap para SEO
│   │
│   └── 📁 src/                   # Código-fonte
│       ├── 📁 components/        # Componentes React
│       │   │
│       │   ├── 📁 sections/      # Seções da landing page
│       │   │   ├── About.tsx
│       │   │   ├── Contact.tsx
│       │   │   ├── Edital.tsx
│       │   │   ├── FAQ.tsx
│       │   │   ├── Hero.tsx
│       │   │   ├── InstitutionalSupport.tsx
│       │   │   ├── Location.tsx
│       │   │   ├── MedicalBoard.tsx
│       │   │   ├── OrganizingCommittee.tsx
│       │   │   ├── Partners.tsx
│       │   │   ├── PracticalCourses.tsx
│       │   │   ├── Schedule.tsx
│       │   │   ├── Speakers.tsx
│       │   │   ├── Tickets.tsx
│       │   │   └── index.ts      # Barrel export
│       │   │
│       │   ├── 📁 layout/        # Componentes de layout
│       │   │   ├── Header.tsx
│       │   │   ├── Footer.tsx
│       │   │   └── index.ts      # Barrel export
│       │   │
│       │   ├── 📁 common/        # Componentes reutilizáveis
│       │   │   ├── ErrorBoundary.tsx
│       │   │   ├── Map.tsx
│       │   │   ├── ScrollToTop.tsx
│       │   │   └── index.ts      # Barrel export
│       │   │
│       │   └── 📁 ui/            # Componentes UI (shadcn/ui)
│       │       ├── accordion.tsx
│       │       ├── button.tsx
│       │       ├── card.tsx
│       │       └── ... (50+ componentes)
│       │
│       ├── 📁 contexts/          # Contextos React
│       │   └── ThemeContext.tsx  # Tema light/dark
│       │
│       ├── 📁 hooks/             # Custom hooks
│       │   ├── useComposition.ts
│       │   ├── useMobile.tsx
│       │   └── usePersistFn.ts
│       │
│       ├── 📁 lib/               # Utilitários
│       │   └── utils.ts          # Funções helper (cn, etc.)
│       │
│       ├── 📁 pages/             # Páginas da aplicação
│       │   ├── Home.tsx          # Página principal
│       │   └── NotFound.tsx      # Página 404
│       │
│       ├── App.tsx               # Componente raiz
│       ├── const.ts              # Constantes do cliente
│       ├── index.css             # Estilos globais + Design System
│       └── main.tsx              # Entry point React
│
├── 📁 server/                    # Backend Express
│   └── index.ts                  # Servidor de produção
│
├── 📁 shared/                    # Código compartilhado
│   └── const.ts                  # Constantes globais
│
├── 📁 dist/                      # Build de produção (gerado)
│   ├── public/                   # Frontend compilado
│   └── index.js                  # Backend compilado
│
├── 📄 .gitignore                 # Arquivos ignorados pelo Git
├── 📄 .prettierrc                # Configuração Prettier
├── 📄 .prettierignore            # Ignorados pelo Prettier
├── 📄 components.json            # Configuração shadcn/ui
├── 📄 eslint.config.js           # Configuração ESLint
├── 📄 LICENSE                    # Licença MIT
├── 📄 package.json               # Dependências e scripts
├── 📄 pnpm-lock.yaml             # Lock file do pnpm
├── 📄 tsconfig.json              # Configuração TypeScript
├── 📄 tsconfig.node.json         # TS config para Node
├── 📄 vercel.json                # Configuração Vercel
├── 📄 vite.config.ts             # Configuração Vite
└── 📄 README.md                  # Este arquivo
```

---

## 🔧 Path Aliases

O projeto utiliza aliases para imports mais limpos:

| Alias | Caminho | Exemplo de Uso |
|-------|---------|----------------|
| `@/` | `client/src/` | `import { Button } from "@/components/ui/button"` |
| `@shared/` | `shared/` | `import { COOKIE_NAME } from "@shared/const"` |
| `@assets/` | `attached_assets/` | `import logo from "@assets/logo.png"` |

Configurados em `vite.config.ts` e `tsconfig.json`.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature:
   ```bash
   git checkout -b feature/MinhaNovaFeature
   ```
3. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
4. **Push** para sua branch:
   ```bash
   git push origin feature/MinhaNovaFeature
   ```
5. **Abra** um Pull Request

### Padrões de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (sem mudanças de código)
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

---

## 📞 Contato

<div align="center">

**CONECC - I Congresso de Especialidades Clínicas e Cirúrgicas**

📧 **Email**: [coneccpi@gmail.com](mailto:coneccpi@gmail.com)

📸 **Instagram**: [@coneccpi](https://instagram.com/coneccpi)

🌐 **Website**: [conecc.com.br](https://conecc.com.br)

</div>

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedores

<div align="center">

| | Desenvolvedor | GitHub |
|:---:|:---:|:---:|
| 💻 | **André Arraes** | [@andrelucas-arraes](https://github.com/andrelucas-arraes) |
| 💻 | **Gabriel Lucas** | [@gabrieelsilva](https://github.com/gabrieelsilva) |

</div>

---

<div align="center">

Feito com ❤️ para o **CONECC 2026**

*Multiespecialidades e o Futuro da Medicina: Ciência, Prática e Inovação*

</div>
