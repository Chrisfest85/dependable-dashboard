# Dependable Renovations Dashboard - Project Context

**Owner:** Christopher Williams, Dependable Renovations Ltd.
**Last Updated:** February 13, 2026

## Quick Reference
- **Repository:** https://github.com/Chrisfest85/dependable-dashboard
- **Live Site:** https://dependable-dashboard.pages.dev
- **AI Strategy:** `/Users/chris/Downloads/Dependable_Renovations_AI_Strategy_v2.docx`
- **Memory System:** `~/.claude/projects/-Users-chris-projects-dependable-dashboard/memory/`
- **Progress Tracker:** [PROGRESS.md](./PROGRESS.md)

---

## Project Mission

Transform Dependable Renovations from a traditional three-person operation into an AI-augmented one-person firm capable of delivering $2M+ annual revenue at improved margins. Replace staff functions with AI tools while maintaining luxury positioning and client experience.

## Business Context

**Company:** Calgary-based luxury residential renovation general contractor, 18 years in business
- 4.9/5 Houzz rating (53 reviews), A+ BBB, 5x Best of Houzz awards
- Featured by CBC News and The Globe & Mail
- Two consecutive years of $2M+ revenue
- Recently scaled back from 3 people to 1 operator (strategic lean rebuild)

**Owner:** Christopher Williams - 10 years mechanical engineering + 5+ years GC experience. All labour via sub-trades, no direct employees.

## Tech Stack

- **Frontend:** React 19 with Vite 7
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Styling:** Custom CSS with design tokens (Dependable Renovations brand)
- **Hosting:** Cloudflare Pages
- **API:** Anthropic Claude API
- **Version Control:** GitHub (Chrisfest85/dependable-dashboard)

## Implementation Roadmap (5 months total)

### Priority 1: Budget Calculator ✅ UI / 🔴 Feature
Generate preliminary budget ranges for Calgary luxury renovations from phone call parameters. Uses Calgary-specific cost database organized by trade.

### Priority 2A: Proposal Generator ✅ UI / 🔴 Feature
Create polished preliminary proposals from site visit notes in Christopher's voice. San Jose Renovation Proposal is the gold standard template.

### Priority 2B: Detailed Scope Generator ✅ UI / 🔴 Feature
Generate trade-ready scopes with built-in gap checker to reduce warranty exposure and change orders. Most critical document in project lifecycle.

### Priority 3: SEO & Marketing (3 tools) ✅ UI / 🔴 Features
- **Blog Post Generator:** 2-4 SEO-optimized posts/month targeting Calgary homeowner queries
- **Case Study Generator:** Narrative case studies from completed projects
- **Social Media Manager:** 2-3 posts/week with AI-generated captions

### Priority 4: JobTread Assistant ✅ UI / 🔴 Feature
AI agent interfacing with JobTread API to automate POs, COs, budget tracking, and daily project digests.

### Utility: Website Clone ✅ UI / 🔴 Feature
Analyze and clone website structures for inspiration and competitive research.

## Design System - Dependable Renovations Brand

**Colors:**
- Cape Cod (#434a4c) - Primary dark gray
- Sand Dune (#7c6b63) - Warm gray/tan
- Iron (#e5e5e6) - Light gray
- Aqua Forest (#539e71) - Green accent
- Tulip Tree (#e8b835) - Yellow accent

**Typography:**
- Poppins (headings) + Open Sans (body text)
- All tokens defined in `src/styles/tokens.css`

**Brand Voice:**
- Engineering credibility + partnership language
- Transparent "open-book" positioning
- Calibrated technical detail with plain-language explanations
- Budget framed as "investment" with ranges

## Current Status

**Dashboard UI:** ✅ Complete
- Header with Dependable Renovations branding
- 8 tool cards (4 active links, 4 "coming soon" badges)
- Responsive grid layout
- React Router navigation
- Deployed to Cloudflare Pages

**Next Priority:** Begin Priority 1 (Budget Calculator) implementation

## Development Workflow

### Local Development
```bash
npm run dev  # Runs on http://localhost:5173 or 5174
```

### Deployment
```bash
npm run build
npx wrangler pages deploy dist --project-name=dependable-dashboard --commit-dirty=true
```

### Git Workflow
```bash
git add -A
git commit -m "feat: Description

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push
```

## Tool-Specific Memory Files

When working on a specific tool, reference its dedicated memory file:
- [Budget Calculator](~/.claude/projects/.../memory/tools/budget-calculator.md)
- [Proposal Generator](~/.claude/projects/.../memory/tools/proposal-generator.md)
- [Scope Generator](~/.claude/projects/.../memory/tools/scope-generator.md)
- [Website Clone](~/.claude/projects/.../memory/tools/website-clone.md)
- [Blog Generator](~/.claude/projects/.../memory/tools/blog-generator.md)
- [Case Study Generator](~/.claude/projects/.../memory/tools/case-study-generator.md)
- [Social Media Manager](~/.claude/projects/.../memory/tools/social-media-manager.md)
- [JobTread Assistant](~/.claude/projects/.../memory/tools/jobtread-assistant.md)

## Key Principles

1. **Vendor Independence:** Design with abstraction layers to avoid platform lock-in (learned from BuilderTrend experience)
2. **Human Review Required:** AI output always reviewed before client delivery
3. **Security:** Never commit API keys; use `.env` for local, Cloudflare env vars for production
4. **Incremental Value:** Early tools deliver immediate value while complex tools develop in background
5. **Christopher's Expertise as Core Asset:** AI augments, doesn't replace, engineering judgment and construction knowledge

## Important Locations

- **Brand Guidelines PDF:** `/Users/chris/Library/CloudStorage/OneDrive-SharedLibraries-DependableRenovationsLtd/Communication site - Company/Marketing/2021 Branding/Guidelines/DP_Brand_Essentials-v1.0.pdf`
- **AI Strategy Document:** `/Users/chris/Downloads/Dependable_Renovations_AI_Strategy_v2.docx`
- **Project Working Directory:** `/Users/chris/projects/dependable-dashboard`
