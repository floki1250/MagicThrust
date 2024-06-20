import { kv } from "@vercel/kv";
export default defineEventHandler(async (event) => {
  const code = event.context.params?.id as string;
  const storage = useStorage("data");
  let data: { jsonData: any[] } = (await storage.getItem(
    code ? code.toString() : ""
  )) || { jsonData: [] }; // get data
  const body = await readBody(event);
  const id = body.id;
  data.jsonData.push(body);
  await kv.set(code, body.data, { ex: 60 * 60 * 24 * 15 });
  return data;
});
