import { content } from "./../../.nuxt/types/tailwind.config.d";
import { GoogleGenerativeAI } from "@google/generative-ai";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const API_KEY = config.apiKey;
  const body = await readBody(event);
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = body.prompt;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.candidates[0].content.parts[0].text;
  const data = text.replace("```json", "");
  // Extracting the JSON array part
  const jsonStartIndex = data.indexOf("[");
  const jsonEndIndex = data.lastIndexOf("]") + 1;
  const jsonString = data.substring(jsonStartIndex, jsonEndIndex);

  // Parsing the JSON string into a JavaScript object
  let jsonData;
  try {
    jsonData = JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  return {
    message: "Received the body!",
    data: jsonData,
  };
});
