import { useState } from "hono/jsx";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        class="rounded-full bg-blue-800 text-white px-5 py-2 active:bg-blue-600 active:text-white"
      >
        Increment
      </button>
    </div>
  );
}
