import { createApp } from "./main";
import { renderToString } from "@vue/server-renderer";

export async function render(url) {
  const { app } = createApp();

  const ctx = {};
  let html = await renderToString(app, ctx);

  console.log(
    "AsyncComponent teleport is in ctx.__teleportBuffers",
    ctx.__teleportBuffers
  );
  console.log("\nBut not in ctx.teleports", ctx.teleports);
  console.log("\n--\n");

  return [html, ctx.teleports];
}
