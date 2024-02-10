import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  if (!title || title === "")
    return (
      <html>
        <body>{children}</body>
      </html>
    );
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" />
        <link href="/static/build.css" rel="stylesheet"></link>
        <script src="/static/htmx.js"></script>
        <Style />
      </head>
      <body class="mx-w-xl mx-auto bg-black text-white p-5">{children}</body>
    </html>
  );
});
