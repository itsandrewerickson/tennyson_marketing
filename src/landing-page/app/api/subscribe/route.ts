import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface Lead {
  name: string;
  email: string;
  phone?: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Create lead object
    const lead: Lead = {
      name,
      email,
      phone: phone || "",
      timestamp: new Date().toISOString(),
    };

    // Initialize Resend only when needed (lazy load to avoid build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to owner
    await resend.emails.send({
      from: "noreply@tennyson-marketing.vercel.app",
      to: "Andrew@TheNextWaveGroup.com",
      subject: "New Lead Inquiry - Tennyson Street Property",
      html: `
        <h2>New Lead Captured</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        ${lead.phone ? `<p><strong>Phone:</strong> ${lead.phone}</p>` : ""}
        <p><strong>Timestamp:</strong> ${lead.timestamp}</p>
      `,
    });

    // Send confirmation email to lead
    await resend.emails.send({
      from: "noreply@tennyson-marketing.vercel.app",
      to: lead.email,
      subject: "Thank You - Tennyson Street Opportunity",
      html: `
        <h2>Thank You for Your Interest!</h2>
        <p>Hi ${lead.name},</p>
        <p>We've received your inquiry about the Tennyson Street property opportunity. A member of our team will be in touch shortly with detailed information and project plans.</p>
        <p>Best regards,<br/>Next Wave Group</p>
      `,
    });

    console.log("New lead captured:", lead);

    return NextResponse.json({
      success: true,
      message: "Thank you! Check your email for more information.",
    });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
