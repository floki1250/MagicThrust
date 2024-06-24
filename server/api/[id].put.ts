import { kv } from "@vercel/kv";
export default defineEventHandler(async (event) => {
  const code = event.context.params?.id as string;
  const storage = useStorage("data");
  let data: { jsonData: any[] } = (await storage.getItem(
    code ? code.toString() : ""
  )) || { jsonData: [] }; // get data
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
