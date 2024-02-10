import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <ul class="text-3xl pl-5 mt-5">
      <li class="list-disc">Hello</li>
      <li class="list-disc">There</li>
      <li class="list-disc">Jack</li>
    </ul>,
    { title: "" }
  );
});
