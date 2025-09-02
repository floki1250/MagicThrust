import { createError, defineEventHandler, getRequestURL } from "h3";
export default defineEventHandler((event) => {
  const { URL } = globalThis;
  const referer = event.node.req.headers.referer;
  const url = getRequestURL(event);
  const allowedReferer =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://magicthrust.vercel.app";

  const securePaths = ["/api/createServer", "/api/ai"];
  if (securePaths.includes(url.pathname)) {
    const allowedHosts = process.env.NODE_ENV === "development"
      ? ["localhost:3000"]
      : ["magicthrust.vercel.app"];
    let refererHost;
    try {
      if (!referer) throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
      refererHost = new URL(referer.toString()).host;
    } catch {
      throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
    }
    if (!referer || !allowedHosts.includes(refererHost)) {
      throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
    }
  }
});
