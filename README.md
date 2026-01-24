# Tennyson Street Offer Memorandum

Professional marketing materials for 3754-56 Tennyson Street, San Diego, CA 92107.

## Project Summary

This project creates marketing materials for selling a Point Loma property with rare grandfathered ADU development rights:

1. **Landing Page** - Lead capture site with property details and email-gated plan downloads
2. **Offer Memorandum (PDF)** - Professional investment summary (manual creation)

## Property Highlights

| Metric | Value |
|--------|-------|
| Address | 3754-56 Tennyson Street, San Diego, CA 92107 |
| Asking Price | $1,790,000 |
| Existing | 2BR/1BA main house (1,344 SF) + teardown ADU |
| Development | 8 ADUs approved (470 SF each, 1BR units) |
| Total Future Units | 9 (1 main + 8 ADUs) |
| Lot Size | 5,595 SF |
| Zoning | RM-3-7 Multifamily |

## The Opportunity

**Grandfathered ADU Rights**: Since Summer 2025, ADUs can no longer be built on cul-de-sac properties like this one. These plans are locked in and cannot be replicated.

## Quick Start

```bash
# Install dependencies
npm install

# Run landing page locally
npm run dev

# Deploy to Vercel
vercel --prod
```

## Environment Setup

Copy the environment template and fill in your values:

```bash
cp src/landing-page/.env.example src/landing-page/.env.local
```

Required environment variables:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps Embed API key

## Project Structure

```
├── .claude/           # Agent skills and commands
├── docs/
│   ├── adr/           # Architecture decisions
│   ├── active/        # Current work
│   └── reference/     # Property data, vision
├── assets/
│   ├── photos/        # Property photography
│   ├── plans/         # Architectural drawings
│   └── branding/      # Next Wave Group assets
├── src/
│   └── landing-page/  # React/Next.js site
└── output/            # Generated deliverables
```

## Contact

**Next Wave Group**
- Andrew Erickson: (619) 322-3395 | Andrew@TheNextWaveGroup.com
- Marcelo Valdez: (858) 204-1337 | Marcelo@TheNextWaveGroup.com

---

*This project uses the Dad Vibes Agentic Workspace Framework for AI-assisted development.*
