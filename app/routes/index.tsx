import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>

      <Counter />

      <button
        hx-get="/people"
        hx-target="#people"
        class="rounded-full bg-blue-800 text-white px-5 py-2 active:bg-blue-600 active:text-white"
      >
        Load People
      </button>
      <div id="people"></div>
    </div>,
    { title: name }
  );
});
