export default defineEventHandler(async (event) => {
  const code = event.context.params?.id as string;
  const storage = useStorage("data");
  let data = (await storage.getItem(code ? code.toString() : "")) as JSON;
  return data;
});
