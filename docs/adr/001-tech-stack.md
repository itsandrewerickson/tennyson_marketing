---
id: 001
title: Tech Stack Selection
status: Accepted
date: 2025-01-14
---

# Context

We need to create two deliverables: a professional PDF Offer Memorandum and a lead-capture landing page. The solution should be maintainable, quick to develop, and align with modern best practices.

# Decision

## PDF Generation
- **Primary**: Python with `reportlab` for programmatic PDF generation
- **Alternative**: Design in Figma/Canva, export to PDF for complex layouts
- **Rationale**: Programmatic generation allows easy data updates; visual tools better for complex design

## Landing Page
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Rationale**: Industry standard, fast development, excellent performance, free hosting tier

## Email Capture
- **Option A**: Vercel serverless function + simple JSON storage
- **Option B**: Formspree (no-code form backend)
- **Rationale**: Keep it simple; no need for full CRM

## Data Management
- **Single source of truth**: `docs/reference/property_data.md`
- **Consumed by**: PDF generator and landing page
- **Rationale**: Prevents data drift between deliverables

# Consequences

**Positive:**
- Fast development with familiar tools
- Free or low-cost hosting
- Easy to update data in one place
- Modern, performant landing page

**Negative:**
- PDF design limitations with programmatic approach
- May need to manually update if complex design changes needed
- No built-in CRM features (acceptable for this scope)
