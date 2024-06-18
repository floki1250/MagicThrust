export default defineEventHandler((event) => {
  const referer = event.node.req.headers.referer;
  const url = getRequestURL(event);
  const allowedReferer =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://magicthrust.vercel.app";

  const securePaths = ["/api/createServer", "/api/ai"];
  if (securePaths.includes(url.pathname)) {
    if (!referer || !referer.startsWith(allowedReferer)) {
      throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
    }
  }
});
