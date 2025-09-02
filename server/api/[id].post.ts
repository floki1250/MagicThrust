import { defineEventHandler } from "h3";
import { Redis } from "@upstash/redis";
export default defineEventHandler(async (event) => {
  const kv = Redis.fromEnv();
  const code = event.context.params?.id as string;
  const storage = useStorage("data");
  let data = (await storage.getItem(code ? code.toString() : "")) as JSON;
  const body = await readBody(event);
  
  console.log(body)
  await kv.set(code, body, { ex: 60 * 60 * 24 * 15 });
  return data;
});
