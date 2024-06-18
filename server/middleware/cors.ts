// middleware/cors.ts
export default defineEventHandler((event) => {
  const origin = event.node.req.headers.origin || "";
  const allowedOrigins =
    process.env.NODE_ENV === "development"
      ? ["http://localhost:3000"]
      : ["https://magicthrust.vercel.app"];
  if (allowedOrigins.includes(origin)) {
    event.node.res.setHeader("Access-Control-Allow-Origin", origin);
    event.node.res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    event.node.res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  } else {
    event.node.res.setHeader("Access-Control-Allow-Origin", "null");
  }
});
