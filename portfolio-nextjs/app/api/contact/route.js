
export async function POST(request) {
  try {
    const body = await request.json();
    const apiUrl = process.env.API_URL || "http://localhost:4000";

    const response = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch {
    return Response.json(
      {
        error: {
          code: "CONTACT_SERVICE_UNAVAILABLE",
          message: "Unable to process the contact request.",
        },
      },
      { status: 502 }
    );
  }
}
