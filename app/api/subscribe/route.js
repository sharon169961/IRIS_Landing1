export async function POST(req) {
  try {
    const { email } = await req.json();
    // In production: push to a real provider (Mailchimp, ConvertKit, Supabase, etc.)
    // For now, just simulate success.
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), { status: 400 });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Bad request" }), { status: 400 });
  }
}
