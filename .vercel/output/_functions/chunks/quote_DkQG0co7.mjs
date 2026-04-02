import { Resend } from 'resend';
import { q as quoteRequestSchema } from './quoteSchema_pBRTXYaG.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const prerender = false;
function formatField(label, value) {
  return `${label}: ${value || "Not provided"}`;
}
function createResendClient() {
  const { RESEND_API_KEY } = Object.assign(__vite_import_meta_env__, { RESEND_API_KEY: "re_gFNe1Y8R_GsKFxVpNaNLW5S18NT5KEtDf", RESEND_FROM_EMAIL: "onboarding@resend.dev", QUOTE_RECEIVER_EMAIL: "ciirox1992@gmail.com", OS: "Windows_NT" });
  if (!RESEND_API_KEY) {
    return null;
  }
  return new Resend(RESEND_API_KEY);
}
async function POST({ request }) {
  try {
    const body = await request.json();
    const parsed = quoteRequestSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          message: "Please review the form fields and try again.",
          issues: parsed.error.flatten()
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const resend = createResendClient();
    const {
      RESEND_FROM_EMAIL,
      QUOTE_RECEIVER_EMAIL
    } = Object.assign(__vite_import_meta_env__, { RESEND_API_KEY: "re_gFNe1Y8R_GsKFxVpNaNLW5S18NT5KEtDf", RESEND_FROM_EMAIL: "onboarding@resend.dev", QUOTE_RECEIVER_EMAIL: "ciirox1992@gmail.com", OS: "Windows_NT" });
    if (!resend || !QUOTE_RECEIVER_EMAIL || !RESEND_FROM_EMAIL) {
      return new Response(
        JSON.stringify({
          message: "Email delivery is not configured yet. Add the Resend environment variables before using this form in production."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const data = parsed.data;
    const textBody = [
      "New quote request received from the website.",
      "",
      formatField("Name", data.name),
      formatField("Email", data.email),
      formatField("Phone", data.phone),
      formatField("Event date", data.eventDate),
      formatField("Event type", data.eventType),
      formatField("Servings", data.servings),
      formatField("Flavor", data.flavor),
      formatField("Budget", data.budget),
      formatField("Pickup or delivery", data.fulfillment),
      formatField("Inspiration link", data.inspirationLink),
      "",
      "Design details:",
      data.details
    ].join("\n");
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #241815; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New quote request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event date:</strong> ${data.eventDate}</p>
        <p><strong>Event type:</strong> ${data.eventType}</p>
        <p><strong>Servings:</strong> ${data.servings}</p>
        <p><strong>Flavor:</strong> ${data.flavor}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Pickup or delivery:</strong> ${data.fulfillment}</p>
        <p><strong>Inspiration link:</strong> ${data.inspirationLink || "Not provided"}</p>
        <p><strong>Design details:</strong></p>
        <p>${data.details.replace(/\n/g, "<br />")}</p>
      </div>
    `;
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: QUOTE_RECEIVER_EMAIL,
      replyTo: data.email,
      subject: `New quote request from ${data.name}`,
      text: textBody,
      html: htmlBody
    });
    if (error) {
      throw new Error(error.message || "Resend could not send the quote request.");
    }
    return new Response(
      JSON.stringify({
        message: "Quote request sent successfully."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : "Unexpected server error."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
