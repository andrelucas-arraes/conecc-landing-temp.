# CONECC Landing Page

Landing page moderna e acessível para o **I Congresso de Especialidades Clínicas e Cirúrgicas (CONECC)**, desenvolvida com React, TypeScript e Tailwind CSS.

## 📋 Sobre o Projeto

O CONECC é um evento médico que reúne profissionais e estudantes da área da saúde para atualização científica, troca de experiências e networking. Esta landing page apresenta todas as informações do evento de forma clara, acessível e otimizada para conversão.

**Tema:** Multiespecialidades e o Futuro da Medicina: Ciência, Prática e Inovação  
**Local:** Teresina, Piauí  
**Datas:** 
- Cursos Práticos: 19 a 21 de março de 2026
- Congresso: 26 a 29 de março de 2026

## ✨ Funcionalidades

### 🎯 Experiência do Usuário
- ✅ Design responsivo e moderno
- ✅ Animações suaves com Framer Motion
- ✅ Navegação intuitiva com menu fixo
- ✅ Scroll suave entre seções
- ✅ Formulário de contato funcional

### ♿ Acessibilidade (WCAG 2.1 AA)
- ✅ Navegação completa por teclado
- ✅ ARIA labels em todos os elementos interativos
- ✅ Contraste de cores adequado (4.5:1 mínimo)
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Skip link para conteúdo principal
- ✅ Estrutura semântica HTML5
- ✅ Focus states visíveis

### 🔍 SEO e Performance
- ✅ Meta tags otimizadas (Open Graph, Twitter Cards)
- ✅ Schema.org structured data (Event markup)
- ✅ Lazy loading de imagens
- ✅ Build otimizado com Vite
- ✅ TypeScript para type safety

### 📱 Seções da Página
1. **Hero** - Apresentação principal do evento
2. **Sobre** - Informações sobre o congresso
3. **Palestrantes** - Apresentação dos profissionais
4. **Cursos Práticos** - Programação dos cursos hands-on
5. **Programação** - Cronograma completo do congresso
6. **Ingressos** - Preços e lotes disponíveis
7. **Edital** - Informações oficiais
8. **Localização** - Mapa e informações do local
9. **Parceiros** - Patrocinadores do evento
10. **Apoio Institucional** - Instituições parceiras
11. **FAQ** - Perguntas frequentes
12. **Contato** - Formulário e informações de contato

## 🛠️ Tecnologias

### Core
- **React 19.2.1** - Biblioteca UI
- **TypeScript 5.6.3** - Type safety
- **Vite 6.0.0** - Build tool e dev server
- **Wouter 3.3.5** - Roteamento leve

### Estilização
- **Tailwind CSS 4.1.14** - Framework CSS utility-first
- **Framer Motion 12.23.22** - Animações
- **Lucide React** - Ícones

### UI Components
- **Radix UI** - Componentes acessíveis e não-estilizados
- **shadcn/ui** - Componentes base (customizados)

### Formulários
- **React Hook Form 7.64.0** - Gerenciamento de formulários
- **Zod 4.1.12** - Validação de schemas
- **@hookform/resolvers** - Integração React Hook Form + Zod

### Backend
- **Express 4.21.2** - Servidor Node.js
- **esbuild** - Bundler para produção

### Desenvolvimento
- **Prettier** - Formatação de código
- **Vitest** - Framework de testes (configurado)

## 📁 Estrutura do Projeto

```
conecc-landing/
├── client/                 # Frontend React
│   ├── public/
│   │   └── images/         # Imagens estáticas
│   └── src/
│       ├── components/     # Componentes React
│       │   ├── ui/         # Componentes UI base (shadcn)
│       │   ├── About.tsx
│       │   ├── Contact.tsx
│       │   ├── FAQ.tsx
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── Tickets.tsx
│       │   └── ...
│       ├── contexts/       # Contextos React
│       ├── hooks/          # Custom hooks
│       ├── lib/            # Utilitários
│       ├── pages/          # Páginas
│       ├── App.tsx         # Componente raiz
│       ├── main.tsx        # Entry point
│       └── index.css       # Estilos globais
├── server/                 # Backend Express
│   └── index.ts           # Servidor Node.js
├── shared/                 # Código compartilhado
│   └── const.ts
├── package.json
├── vite.config.ts         # Configuração Vite
├── tsconfig.json          # Configuração TypeScript
└── README.md
```

## 🚀 Instalação e Uso

### Pré-requisitos
- **Node.js** 18+ 
- **pnpm** 10+ (ou npm/yarn)

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd conecc-landing
```

2. Instale as dependências:
```bash
pnpm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta disponível).

### Build para Produção

1. Gere o build:
```bash
pnpm build
```

2. Inicie o servidor de produção:
```bash
pnpm start
```

O servidor Express estará rodando na porta 3000 (ou `process.env.PORT`).

### Preview do Build

Para visualizar o build de produção localmente:
```bash
pnpm preview
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento com hot reload |
| `pnpm build` | Gera build de produção (frontend + backend) |
| `pnpm start` | Inicia servidor de produção |
| `pnpm preview` | Preview do build de produção |
| `pnpm check` | Verifica tipos TypeScript sem gerar arquivos |
| `pnpm format` | Formata código com Prettier |

## 🎨 Customização

### Cores

As cores principais estão definidas em `client/src/index.css`:

```css
--color-wine-deep: #5D2126;      /* Cor principal */
--color-rose-burnt: #BC989A;    /* Cor secundária */
--color-cream: #F9F4F5;         /* Background */
```

### Componentes

Os componentes estão em `client/src/components/`. Cada seção é um componente independente e pode ser facilmente modificada.

### Dados

Os dados do evento (palestrantes, programação, ingressos) estão hardcoded nos componentes. Para produção, recomenda-se mover para uma API ou arquivo de configuração.

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (se necessário):

```env
PORT=3000
NODE_ENV=production
```

### Path Aliases

O projeto usa aliases para imports:

- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## ✅ Checklist de Qualidade

### Acessibilidade
- [x] Navegação por teclado funcional
- [x] ARIA labels implementados
- [x] Contraste de cores WCAG AA
- [x] Focus states visíveis
- [x] Estrutura semântica

### SEO
- [x] Meta tags completas
- [x] Open Graph tags
- [x] Schema.org markup
- [x] Títulos descritivos

### Performance
- [x] Build otimizado
- [x] Lazy loading de imagens
- [x] Code splitting

## 📝 Próximos Passos

### Melhorias Sugeridas
- [ ] Integração com API real para dados dinâmicos
- [ ] Sistema de pagamento para inscrições
- [ ] Dashboard administrativo
- [ ] Testes automatizados (E2E, unitários)
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Analytics (Google Analytics, Facebook Pixel)

### Otimizações
- [ ] Otimização de imagens (WebP, srcset)
- [ ] Service Worker para cache
- [ ] Lazy loading de componentes
- [ ] Bundle size optimization

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**CONECC**  
Email: coneccpi@gmail.com  
Instagram: [@coneccpi](https://instagram.com/coneccpi)  
Website: [conecc.com.br](https://conecc.com.br)

---

**Desenvolvido com ❤️ para o I CONECC**

