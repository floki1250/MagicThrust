import { kv } from "@vercel/kv";
function generateRandomString(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
export default defineEventHandler(async (event) => {
  const storage = useStorage("data");
  let exists: boolean = false;
  let serverCode: string;
  do {
    serverCode = "MagicThrust_" + generateRandomString();
    exists = (await storage.getItem(serverCode)) !== null;
  } while (exists);
  const body = await readBody(event);
  await kv.set(serverCode, body.data, { ex: 60 * 60 * 24 * 15 });
  return serverCode;
});
