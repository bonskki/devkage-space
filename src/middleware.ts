import type { MiddlewareHandler } from 'astro';

const HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>devkage · maintenance</title>
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body {
        min-height: 100vh;
        background: #fafaf8;
        color: #1a1a1a;
        font-family: ui-sans-serif, system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }
      .wrap { text-align: center; max-width: 420px; }
      .site {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 11px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #8a8a85;
        margin-bottom: 2rem;
      }
      h1 {
        font-family: ui-serif, Georgia, serif;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        margin-bottom: 0.75rem;
      }
      p {
        font-size: 0.9rem;
        color: #4a4a4a;
        line-height: 1.65;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="site">devkage.space</div>
      <h1>Under maintenance</h1>
      <p>This site is temporarily offline. Check back soon.</p>
    </div>
  </body>
</html>`;

export const onRequest: MiddlewareHandler = () =>
  new Response(HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '3600',
    },
  });
