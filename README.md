# Tennyson Street Offer Memorandum

Professional marketing materials for 3754-56 Tennyson Street, San Diego, CA 92107.

## Project Summary

This project creates two deliverables for selling a Point Loma property with rare grandfathered ADU development rights:

1. **Offer Memorandum (PDF)** - Colliers-style professional investment summary
2. **Landing Page** - Lead capture site with email-gated plan downloads

## Property Highlights

| Metric | Value |
|--------|-------|
| Address | 3754-56 Tennyson Street, San Diego, CA 92107 |
| Asking Price | $1,790,000 |
| Existing | 3BR/2BA main house (1,344 SF) + teardown ADU |
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

# Generate PDF
python src/pdf-generator/generate_om.py

# Deploy to Vercel
vercel --prod
```

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
│   ├── landing-page/  # React/Next.js site
│   └── pdf-generator/ # Python PDF creation
└── output/            # Generated deliverables
```

## Contact

**Next Wave Group**
[Contact details to be added]

---

*This project uses the Dad Vibes Agentic Workspace Framework for AI-assisted development.*
