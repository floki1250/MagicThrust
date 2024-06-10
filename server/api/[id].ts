export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const body = await readBody(event);
  console.log(body);
  console.log(id);
  return { id };
});
