# Dependable Renovations Dashboard

AI-powered tools dashboard for Dependable Renovations Ltd. Built with React + Vite and powered by Anthropic's Claude API.

## 🚀 Features

### Current Tools
- **Scope Generator** - Generate comprehensive project scopes and proposals for renovation projects
- **Website Clone** - Analyze and clone website structures for inspiration and reference

### Coming Soon
- Additional AI-powered tools for renovation business workflows
- Cloudflare Workers integration for secure API handling

## 🛠️ Tech Stack

- **Frontend:** React 19 with Vite
- **Styling:** Custom CSS with design tokens
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Hosting:** Cloudflare Pages
- **API:** Anthropic Claude API

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Anthropic API key ([get one here](https://console.anthropic.com/))

## 🏃 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chrisfest85/dependable-dashboard.git
   cd dependable-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your Anthropic API key.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

This project is configured for deployment on Cloudflare Pages. See [cloudflare-pages.md](./cloudflare-pages.md) for detailed deployment instructions.

### Quick Deploy

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Use build command: `npm run build`
4. Set build output directory: `dist`
5. Add environment variables in Cloudflare dashboard

## 🎨 Design System

The project uses Dependable Renovations brand guidelines:

**Colors:**
- Cape Cod (#434a4c) - Primary dark gray
- Sand Dune (#7c6b63) - Warm gray/tan
- Iron (#e5e5e6) - Light gray
- Aqua Forest (#539e71) - Green accent
- Tulip Tree (#e8b835) - Yellow accent

**Typography:**
- Poppins - Headings
- Open Sans - Body text

All design tokens are defined in [src/styles/tokens.css](./src/styles/tokens.css)

## 📁 Project Structure

```
dependable-dashboard/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/      # Generic components (ToolCard, etc.)
│   │   ├── dashboard/   # Dashboard-specific components
│   │   └── layout/      # Layout components (Header, etc.)
│   ├── features/        # Feature modules
│   │   ├── scope-generator/
│   │   └── website-clone/
│   ├── pages/           # Page components
│   ├── services/        # API and external services
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles and design tokens
│   └── config/          # Configuration files
├── public/              # Static assets
└── docs/               # Documentation
```

## 🔒 Security Notes

**Important:** Never commit API keys to the repository.
- Use `.env` files for local development (already in `.gitignore`)
- Use Cloudflare environment variables for production
- Consider implementing Cloudflare Workers for secure API proxying

## 📝 License

Private - Dependable Renovations Ltd.

## 👤 Author

**Dependable Renovations Ltd.**
- Website: [dependablereno.ca](https://dependablereno.ca)
- Contact: c.williams@dependablereno.ca

---

Built with ❤️ by [Claude Code](https://claude.com/claude-code)
