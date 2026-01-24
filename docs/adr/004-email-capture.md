---
id: 004
title: Email Capture & Lead Management
status: Superseded
date: 2025-01-14
superseded_date: 2025-01-20
---

# Context

The landing page needs to capture email addresses from interested buyers and automatically deliver the architectural plans PDF. We want to keep this simple without a full CRM.

# Original Decision (Superseded)

The original plan was to use Vercel Serverless functions with Resend for email delivery. This was abandoned in favor of a simpler third-party solution.

## Original Proposed Flow

```
User visits landing page
         │
         ▼
Sees email capture form
         │
         ▼
Enters name + email + submits
         │
         ▼
Form posts to serverless function
         │
         ├──► Store lead (JSON file or simple DB)
         │
         ├──► Send auto-response email with plans PDF
         │
         └──► Return success to frontend
         │
         ▼
User sees confirmation + download link
```

# Current Implementation

## VestorCRM Integration

We now use VestorCRM, an embedded form widget that handles:
- Lead capture (name, email, phone)
- Lead storage in VestorCRM dashboard
- Email notifications to sales team
- Auto-response emails to leads

### Implementation Details

```tsx
// CRMForm.tsx
<iframe
  id="LdaCPNYcSHuxuehlYyEv"
  src="https://app.vestorcrm.com/widget/LdaCPNYcSHuxuehlYyEv"
  // ...
/>
```

### Why We Changed

1. **Faster implementation** - No serverless functions to write/maintain
2. **Built-in CRM** - VestorCRM provides lead management dashboard
3. **Auto-responses** - Handled by VestorCRM without custom code
4. **Reliability** - Third-party handles email deliverability

## Current Flow

```
User visits landing page
         │
         ▼
Sees VestorCRM embedded form
         │
         ▼
Enters info + submits
         │
         ▼
VestorCRM handles everything:
  ├──► Stores lead in CRM
  ├──► Notifies sales team
  └──► Sends auto-response to user
         │
         ▼
User sees confirmation in widget
```

# Consequences

**Positive:**
- Zero backend code to maintain
- Professional CRM with lead tracking
- Reliable email delivery
- Quick to implement and modify

**Negative:**
- Dependency on third-party service
- Less customization of email content
- Data lives outside our infrastructure
- Monthly cost for VestorCRM subscription

# Migration Notes

The Resend email service dependency was removed in commit f13c1d8. All email capture is now handled through the VestorCRM widget.
