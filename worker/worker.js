export default {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      // Handle redirect
      if (request.method === "GET" && url.pathname !== "/shorten") {
        const code = url.pathname.slice(1);
        const longUrl = await env.URLS.get(code);
  
        if (!longUrl) {
          return new Response("Not Found", { status: 404 });
        }
  
        return Response.redirect(longUrl, 302);
      }
  
      // API: POST /shorten
      if (request.method === "POST" && url.pathname === "/shorten") {
        const body = await request.json();
        const longUrl = body.longUrl;
  
        const code = Math.random().toString(36).substring(2, 8);
  
        await env.URLS.put(code, longUrl);
  
        return new Response(
          JSON.stringify({
            shortUrl: `https://christmasabb.workers.dev${code}`,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
  
      return new Response("OK");
    },
  };
  