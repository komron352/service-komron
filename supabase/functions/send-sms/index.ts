// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors })

  try {
    const { phone, message } = await req.json()
    if (!phone || !message) throw new Error("phone and message required")

    // Дар инҷо провайдери SMS-и худро пайваст кунед ( масалан, Eskiz, PlayMobile )
    console.log(`Sending SMS to ${phone}: ${message}`)

    // Намунаи фиристодан:
    // const res = await fetch("https://notify.eskiz.uz/api/message/sms/send", { method:"POST", headers:{...}, body: JSON.stringify({ mobile_phone: phone, message }) })

    return new Response(JSON.stringify({ success: true, phone, message }), {
      headers: { ...cors, "Content-Type": "application/json" },
      status: 200
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      headers: { ...cors, "Content-Type": "application/json" },
      status: 400
    })
  }
})
