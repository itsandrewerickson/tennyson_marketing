# Agent Development Instructions

## Scope
Universal rules for AI agents working on the Tennyson Street Offer Memorandum project.

## Project Overview
Creating a professional Offer Memorandum (PDF) and marketing landing page for a Point Loma property with grandfathered ADU development rights.

## On Startup
- Load only this file via CLAUDE.md reference
- Load Skills from `.claude/skills/` when task matches skill description
- Load README.md only when architecture details needed
- Check `docs/reference/product_vision.md` for project goals
- Check `docs/reference/property_data.md` for all property facts
- Never bulk-load documentation

## Boundaries

### Always Do
- Use strict formatting for all code (Prettier, ESLint)
- Check `docs/adr` for architectural decisions before major changes
- Run builds/tests before requesting human review
- Use Next Wave Group branding consistently
- Keep financial projections clearly labeled as estimates
- Include standard real estate disclaimers

### Never Do
- Commit secrets, API keys, or credentials
- Modify files outside current task scope without permission
- Hardcode property data (use `docs/reference/property_data.md`)
- Make guarantees about returns or approvals
- Use unlicensed images or copyrighted content

## Key ADRs
| ADR | Topic | Key Rule |
|-----|-------|----------|
| 001 | Tech Stack | React + Tailwind for landing page, Python for PDF |
| 002 | Design System | Match Colliers OM style with Next Wave branding |
| 003 | Data Architecture | Single source of truth in property_data.md |
| 004 | Deployment | Vercel for landing page, manual PDF distribution |

## Documentation Areas
| Area | Purpose |
|------|---------|
| docs/adr/ | Architecture Decision Records (Immutable) |
| docs/active/ | Current implementation plans |
| docs/reference/ | Property data, vision, buyer avatar |
| assets/photos/ | Property photography |
| assets/plans/ | Architectural plans and renderings |
| assets/branding/ | Next Wave Group logos and colors |

## Quick Commands
- `/build-pdf` - Generate the Offer Memorandum PDF
- `/build-landing` - Build and preview the landing page
- `/update-data` - Refresh property data across all outputs
