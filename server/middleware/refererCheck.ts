export default defineEventHandler((event) => {
  const referer = event.node.req.headers.referer;
  const allowedReferer =
    process.env.NODE_ENV === "production"
      ? "https://magicthrust.vercel.app"
      : "http://localhost:3000";
  console.log(referer, allowedReferer);
});
