import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "mena.jp@me.com";

export async function POST(request: Request) {
  const { nombre, email, empresa, mensaje } = await request.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Somos Marketing <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto: ${nombre}${empresa ? ` — ${empresa}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje desde somosmarketing.cl</h1>
          </div>
          <div style="background: #fafafa; padding: 32px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #111; width: 100px;">Nombre</td>
                <td style="padding: 8px 0; color: #444;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #111;">Email</td>
                <td style="padding: 8px 0; color: #444;">
                  <a href="mailto:${email}" style="color: #dc2626;">${email}</a>
                </td>
              </tr>
              ${
                empresa
                  ? `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #111;">Empresa</td>
                <td style="padding: 8px 0; color: #444;">${empresa}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 16px 0 8px; font-weight: bold; color: #111; vertical-align: top;">Mensaje</td>
                <td style="padding: 16px 0 8px; color: #444; line-height: 1.6;">
                  ${mensaje.replace(/\n/g, "<br>")}
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
              <p style="color: #888; font-size: 13px; margin: 0;">
                Podés responder directamente a este email para contactar a ${nombre}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
