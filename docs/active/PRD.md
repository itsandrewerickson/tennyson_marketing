# Product Requirements Document (PRD)
## Tennyson Street Offer Memorandum & Landing Page

**Version:** 1.0  
**Date:** January 2025  
**Owner:** Next Wave Group  
**Status:** Active Development

---

## 1. Overview

### 1.1 Project Summary
Create professional marketing materials for 3754-56 Tennyson Street, a Point Loma property with grandfathered ADU development rights. Deliverables include a PDF Offer Memorandum and a lead-capture landing page.

### 1.2 Business Objectives
| Objective | Success Metric |
|-----------|----------------|
| Generate qualified buyer leads | 50+ email captures |
| Communicate unique value proposition | Clear grandfathered ADU story |
| Accelerate sale timeline | Offers within 60 days |
| Professional presentation | Matches institutional OM quality |

### 1.3 Key Stakeholders
- **Seller**: Property owner (Next Wave Group client)
- **Developer**: Claude Code / AI agents
- **End Users**: Prospective buyers (developers, owner-occupiers)

---

## 2. Property Summary

### 2.1 Basic Facts
| Field | Value |
|-------|-------|
| Address | 3754-56 Tennyson Street, San Diego, CA 92107 |
| Asking Price | $1,790,000 |
| Neighborhood | Point Loma |
| Lot Size | 5,595 SF |
| Zoning | RM-3-7 Multifamily |
| Year Built | 1941 |

### 2.2 Existing Improvements
| Component | Details |
|-----------|---------|
| Main House | 3BR/2BA, 1,344 SF, fully renovated |
| Existing ADU | Teardown (to be demolished) |
| Living SF | 1,168 SF |
| Usable SF | 5,600 SF |

### 2.3 Development Potential
| Component | Details |
|-----------|---------|
| New ADUs | 8 units approved |
| Unit Size | 470 SF each (1BR, vaulted ceiling) |
| Unit Mix | 5 market rate + 3 deed restricted |
| Total New SF | 3,760 SF |
| Plan Status | Fully approved end of January 2025 |

### 2.4 The Grandfathered Advantage
**Critical Selling Point**: Since Summer 2025, ADUs cannot be built on cul-de-sac properties in San Diego. This property's plans were approved before the regulatory change, making this development potential impossible to replicate.

---

## 3. Deliverables

### 3.1 Offer Memorandum (PDF)

#### Format
- Landscape orientation (spreads format)
- 20-25 pages
- Professional design matching Colliers/CBRE quality
- Next Wave Group branding

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | **Cover** | Hero image, property name, price, contact info |
| 2 | **Table of Contents** | Section navigation |
| 3 | **Executive Summary** | The Opportunity - key highlights in one spread |
| 4 | **Property Overview** | Existing house details, photos, floor plan |
| 5 | **Development Potential** | 8 ADUs, renderings, site plan |
| 6 | **The Grandfathered Advantage** | Regulatory context, why this is rare |
| 7 | **Location** | Point Loma neighborhood, maps, amenities |
| 8 | **Financial Analysis** | Investment summary, rent roll projections |
| 9 | **Pro Forma** | Current vs. stabilized NOI |
| 10 | **Profit Forecast** | 3 scenarios with different exit strategies |
| 11 | **Comparable Sales** | Recent sales in area |
| 12 | **Site Plans** | Existing and proposed layouts |
| 13 | **ADU Floor Plans** | Individual unit layouts |
| 14 | **Renderings** | Visual of completed development |
| 15 | **Offering Process** | How to submit offers, disclaimers |
| 16 | **Contact** | Next Wave Group info |

#### Design Specifications
- **Header Bar**: Dark charcoal (#2D3436) with gold accent (#C9A227)
- **Body Background**: Light cream (#F5F5F0) or white
- **Typography**: Clean sans-serif (Inter or similar)
- **Photo Treatment**: Full-bleed images, high resolution
- **Tables**: Clean lines, alternating row colors

### 3.2 Landing Page

#### Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Hero** | Property image, headline, price, CTA |
| 2 | **Key Highlights** | 4-6 bullet points with icons |
| 3 | **Photo Gallery** | Lightbox with all property images |
| 4 | **The Opportunity** | Grandfathered ADU story |
| 5 | **Development Summary** | Visual of 8 ADUs |
| 6 | **Location** | Embedded map, neighborhood highlights |
| 7 | **Email Capture** | Form to download plans PDF |
| 8 | **Contact** | Next Wave Group info |
| 9 | **Footer** | Disclaimers, branding |

#### Technical Requirements
| Requirement | Specification |
|-------------|---------------|
| Framework | React / Next.js |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Email Capture | Simple form → auto-deliver plans PDF |
| Analytics | Basic page view tracking |
| Mobile | Fully responsive |
| Performance | Lighthouse score 90+ |

#### Email Capture Flow
1. User enters name + email
2. Form submits to simple backend (Vercel serverless or Formspree)
3. Auto-response email with PDF attachment (architectural plans)
4. Lead stored for follow-up
5. User sees confirmation + can download immediately

---

## 4. Financial Analysis Requirements

### 4.1 Pro Forma Structure

#### Current (Existing Property)
| Line Item | Notes |
|-----------|-------|
| Gross Scheduled Income | Main house rent potential |
| Vacancy | 3-5% |
| Effective Gross Income | |
| Operating Expenses | Taxes, insurance, maintenance |
| Net Operating Income | |

#### Stabilized (9 Units)
| Line Item | Notes |
|-----------|-------|
| Gross Scheduled Income | 1 house + 8 ADUs at market rent |
| Vacancy | 5% |
| Effective Gross Income | |
| Operating Expenses | Scaled for 9 units |
| Net Operating Income | |
| Cap Rate | Market cap rate for area |
| Implied Value | NOI / Cap Rate |

### 4.2 Profit Forecast Scenarios

#### Scenario 1: Build & Hold
- Purchase property
- Build 8 ADUs
- Hold for cash flow
- **Metrics**: Cash-on-cash return, equity multiple over 5 years

#### Scenario 2: Build & Sell (Individual Units)
- Purchase property
- Build 8 ADUs
- Sell ADUs individually (if condo-mapped)
- **Metrics**: Total profit, ROI, timeline

#### Scenario 3: Build & Sell (Entire Property)
- Purchase property
- Build 8 ADUs
- Sell stabilized 9-unit property
- **Metrics**: Total profit, ROI, timeline

### 4.3 Comparable Sales
Include 4-6 recent sales:
- Small multifamily in Point Loma / Ocean Beach
- Price per unit
- Price per SF
- Cap rate (if available)
- Date of sale

---

## 5. Assets Required

### 5.1 Photography
| Asset | Status | Notes |
|-------|--------|-------|
| Main house exterior | Needed | Front and rear |
| Main house interior | Needed | All rooms |
| Backyard / dev area | Needed | Show buildable space |
| Aerial / drone | Needed | Context shot |
| Street / neighborhood | Needed | Point Loma lifestyle |

### 5.2 Architectural Plans
| Asset | Status | Notes |
|-------|--------|-------|
| Existing site plan | Needed | Current layout |
| Proposed site plan | Needed | With 8 ADUs |
| ADU floor plans | Needed | 470 SF 1BR layout |
| ADU renderings | Needed | Exterior views |

### 5.3 Branding
| Asset | Status | Notes |
|-------|--------|-------|
| Next Wave Group logo | Needed | PNG + SVG |
| Brand colors | Needed | Hex codes |
| Font files | Needed | If custom |

---

## 6. Technical Architecture

### 6.1 PDF Generation
- **Tool**: Python with `reportlab` or `python-pptx` converted to PDF
- **Alternative**: Figma/Canva design exported to PDF
- **Data Source**: `docs/reference/property_data.md`

### 6.2 Landing Page
```
src/landing-page/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── api/
│       └── subscribe/    # Email capture endpoint
├── components/
│   ├── Hero.tsx
│   ├── Highlights.tsx
│   ├── Gallery.tsx
│   ├── Opportunity.tsx
│   ├── EmailCapture.tsx
│   └── Contact.tsx
├── lib/
│   └── propertyData.ts   # Data from property_data.md
└── public/
    ├── images/
    └── plans.pdf         # Auto-delivered on signup
```

### 6.3 Deployment
- Vercel connected to GitHub repo
- Environment variables for any API keys
- Custom domain configuration (provided by owner)

---

## 7. Timeline

| Phase | Tasks | Duration |
|-------|-------|----------|
| **Phase 1: Setup** | Directory structure, data files, branding | 1 day |
| **Phase 2: Design** | OM layout, landing page wireframes | 2 days |
| **Phase 3: Content** | Write all copy, financial analysis | 2 days |
| **Phase 4: Build** | PDF generation, landing page code | 3 days |
| **Phase 5: Polish** | Photography integration, testing | 2 days |
| **Phase 6: Launch** | Deploy, verify email flow | 1 day |

**Total**: ~2 weeks from asset delivery

---

## 8. Out of Scope

- CRM integration (simple email list only)
- Complex analytics dashboard
- Multiple language support
- Print production management
- Ongoing content updates post-launch

---

## 9. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Plan approval delayed | Medium | High | Don't publish until confirmed |
| Photos not professional quality | Low | Medium | Use consistent editing |
| Financial projections questioned | Medium | Medium | Clear disclaimers, conservative estimates |
| Low landing page traffic | Medium | Medium | Ensure PDF shareable independently |

---

## 10. Appendices

### A. Reference Materials
- Colliers OM example (provided)
- `docs/reference/property_data.md`
- `docs/reference/buyer_avatar.md`
- `docs/reference/product_vision.md`

### B. Competitor Examples
- Marcus & Millichap small multifamily OMs
- CBRE investment summaries
- Local San Diego broker materials

### C. Legal Disclaimers (Required)
Standard real estate disclaimer language to be included in both PDF and landing page footer.
