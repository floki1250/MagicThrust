import { GoogleGenerativeAI } from "@google/generative-ai";
import { useStorage } from '@vueuse/core'
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const API_KEY = useStorage('API_KEY', '').value;
  if (!API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: "API_KEY is not defined",
    });
  }

  const body = await readBody(event);
  if (!body || !body.prompt) {
    throw new Error("Invalid request body");
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const result = await model.generateContent(body.prompt);
    const response = result.response as any;
    const text = response?.candidates[0]?.content?.parts[0]?.text;
    const jsonStartIndex = text.indexOf("[");
    const jsonEndIndex = text.lastIndexOf("]") + 1;
    const jsonString = text.substring(jsonStartIndex, jsonEndIndex);
    const jsonData = JSON.parse(jsonString);
    return { jsonData };
  } catch (error) {
    console.error("Error generating JSON:", error);
    throw error;
  }
});
