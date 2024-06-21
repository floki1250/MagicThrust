import { kv } from "@vercel/kv";
export default defineEventHandler(async (event) => {
  const code = event.context.params?.id as string;
  const storage = useStorage("data");
  let data: { jsonData: any[] } = (await storage.getItem(
    code ? code.toString() : ""
  )) || { jsonData: [] }; // get data
  const body = await readBody(event);
  const id = body.id;
  data.jsonData = data.jsonData.filter((item) => item.id !== id);
  console.log(data.jsonData);
  await kv.set(code, data.jsonData, { ex: 60 * 60 * 24 * 15 });
  return data;
});
