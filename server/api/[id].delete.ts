import { defineEventHandler } from "h3";
import { Redis } from "@upstash/redis";
export default defineEventHandler(async (event) => {
  const code = event.context.params?.id as string;
  const kv = Redis.fromEnv();
  const storage = useStorage("data");
  let data = (await storage.getItem(code ? code.toString() : "")) as JSON;
  const body = await readBody(event);
  const id = body.id;
  
  await kv.set(code, data, { ex: 60 * 60 * 24 * 15 });
  return data;
});
