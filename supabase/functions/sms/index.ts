Deno.serve(async (req)=>{
  return new Response(JSON.stringify({ ok:true, message:"SMS function placeholder for IMRAN SERVICE" }), { headers:{ "Content-Type":"application/json" } })
})
