import { defineEventHandler } from "h3";
import { Redis } from "@upstash/redis";
export default defineEventHandler(async (event) => {
  const code = event.context.params?.id as string;
  const storage = useStorage("data");
  const kv = Redis.fromEnv();
  const rawData = await storage.getItem(code ? code.toString() : "");
  let data: { jsonData: any[] };
  if (rawData && typeof rawData === "object" && Array.isArray((rawData as any).jsonData)) {
    data = rawData as { jsonData: any[] };
  } else {
    data = { jsonData: [] };
  }
  const body = await readBody(event);
  // replace existing data item where id matches
  const existedData = data.jsonData;
  for (let i = 0; i < existedData.length; i++) {
    if (existedData[i].id === body.data.id) {
      existedData[i] = body.data;
      break; // Exit the loop once the item is found and replaced
    }
  }
  await kv.set(code, existedData, { ex: 60 * 60 * 24 * 15 });
  return existedData;
});
