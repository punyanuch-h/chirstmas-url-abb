export default {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      // Handle CORS preflight
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      }
  
      // POST /shorten
      if (request.method === "POST" && url.pathname === "/shorten") {
        const body = await request.json();
        const longUrl = body.longUrl;
  
        const code = Math.random().toString(36).substring(2, 8);
  
        await env.URLS.put(code, longUrl);
  
        // Must use worker hostname, NOT request origin
        const shortUrl = `https://${env.WORKER_DOMAIN}/${code}`;
  
        return new Response(JSON.stringify({ shortUrl }), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
  
      // GET redirect /<code>
      if (request.method === "GET" && url.pathname !== "/shorten") {
        const code = url.pathname.slice(1);
        const longUrl = await env.URLS.get(code);
  
        if (!longUrl) {
          return new Response("Not Found", {
            status: 404,
            headers: { "Access-Control-Allow-Origin": "*" },
          });
        }
  
        return Response.redirect(longUrl, 302);
      }
  
      return new Response("OK", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    },
  };
  