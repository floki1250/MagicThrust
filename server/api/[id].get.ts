export default defineEventHandler(async (event) => {
  const code = event.context.params?.id;
  const storage = useStorage("data");
  let data = (await storage.getItem(code ? code.toString() : "")) as JSON;
  return data;
});
