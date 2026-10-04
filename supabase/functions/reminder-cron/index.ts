// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

serve(async (req) => {
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    )

    // Ҳамаи қабулҳои фардо
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().split('T')[0]

    const { data: appointments, error } = await supabase
      .from('appointments')
      .select('*, clients(phone, name)')
      .gte('date', tomorrowStr + 'T00:00:00')
      .lte('date', tomorrowStr + 'T23:59:59')
      .eq('status', 'pending')

    if (error) throw error

    console.log(`Found ${appointments?.length || 0} appointments for tomorrow`)

    for (const appt of appointments || []) {
      const phone = (appt.clients as any)?.phone
      if (!phone) continue

      await supabase.functions.invoke('send-sms', {
        body: {
          phone,
          message: `Салом ${(appt.clients as any).name}! Пагоҳ соати ${new Date(appt.date).toLocaleTimeString('tg-TJ')} қабул доред дар IMRAN SERVICE. Ташаккур!`
        }
      })

      await supabase.from('sms_logs').insert({
        phone,
        message: `Reminder for ${appt.service} on ${appt.date}`,
        status: 'sent'
      })
    }

    return new Response(JSON.stringify({ processed: appointments?.length || 0 }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 })
  }
})
