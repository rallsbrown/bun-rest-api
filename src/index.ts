import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Bun, dev. I'm going to build RESTFUL API")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
