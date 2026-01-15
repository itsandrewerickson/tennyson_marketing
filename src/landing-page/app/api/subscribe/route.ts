import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

    // Store leads in a JSON file (simple storage for MVP)
    const leadsPath = path.join(process.cwd(), "leads.json");

    let leads: Lead[] = [];
    try {
      const existingData = await fs.readFile(leadsPath, "utf-8");
      leads = JSON.parse(existingData);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    leads.push(lead);
    await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2));

    // TODO: Send email with plans PDF using Resend or SendGrid
    // For now, just log and return success
    console.log("New lead captured:", lead);

    return NextResponse.json({
      success: true,
      message: "Thank you! Check your email for the plans.",
    });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
