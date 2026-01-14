---
id: 003
title: Data Architecture
status: Accepted
date: 2025-01-14
---

# Context

Property data (price, square footage, unit counts, etc.) needs to be used in multiple places: PDF OM, landing page, and potentially future materials. We need to avoid data drift where one deliverable has outdated information.

# Decision

## Single Source of Truth
All property data lives in `docs/reference/property_data.md`.

## Data Flow
```
property_data.md
       │
       ├──► PDF Generator (Python) ──► output/offer-memorandum.pdf
       │
       └──► Landing Page (Next.js) ──► Vercel deployment
```

## Data Format
Markdown with structured tables for easy parsing:

```markdown
| Field | Value |
|-------|-------|
| Asking Price | $1,790,000 |
| Units | 9 |
```

## Parsing Strategy
- **Python**: Parse markdown tables with regex or `markdown` library
- **Next.js**: Import as raw text, parse at build time, or use MDX

## Update Process
1. Edit `property_data.md`
2. Run PDF generator
3. Rebuild/redeploy landing page
4. Verify both outputs match

# Consequences

**Positive:**
- Single place to update data
- Clear audit trail (git history)
- Human-readable format
- No database needed

**Negative:**
- Manual rebuild required after data changes
- Markdown parsing adds complexity
- No real-time updates (acceptable for static content)
