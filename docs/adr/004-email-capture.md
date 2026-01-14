---
id: 004
title: Email Capture & Lead Management
status: Accepted
date: 2025-01-14
---

# Context

The landing page needs to capture email addresses from interested buyers and automatically deliver the architectural plans PDF. We want to keep this simple without a full CRM.

# Decision

## Email Capture Flow

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

## Implementation Options

### Option A: Vercel Serverless (Recommended)
- Serverless function at `/api/subscribe`
- Store leads in Vercel KV or JSON file
- Use Resend or SendGrid for emails
- **Pros**: Full control, no third-party dependencies
- **Cons**: More code to write

### Option B: Formspree
- Third-party form backend
- Built-in email notifications
- **Pros**: Zero code, quick setup
- **Cons**: Less control, monthly limits

### Chosen: Option A (Vercel Serverless)
More flexibility for auto-response customization.

## Auto-Response Email
- Subject: "Your Tennyson Street Development Plans"
- Body: Thank you message + property highlights + PDF attachment
- Attachment: Architectural plans PDF (< 10MB)

## Data Storage
- Simple JSON file in Vercel KV or blob storage
- Fields: name, email, timestamp, source
- Export capability for manual follow-up

## No CA Required
Per project requirements, no Confidentiality Agreement needed before viewing materials.

# Consequences

**Positive:**
- Instant gratification for leads (immediate PDF delivery)
- Simple lead list for follow-up
- No third-party CRM costs
- Full control over email content

**Negative:**
- No sophisticated lead scoring
- Manual export required for follow-up
- Email deliverability depends on sender reputation
