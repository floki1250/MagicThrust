export default defineEventHandler((event) => {
  const referer = event.node.req.headers.referer;
  const url = getRequestURL(event);
  const allowedReferer =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://magicthrust.vercel.app";
  if (url.pathname.startsWith("/api/MagicThrust_")) {
    console.log(`Skipping referer check for ${url.pathname}`);
    return;
  }
  if (!referer || !referer.startsWith(allowedReferer)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
});
