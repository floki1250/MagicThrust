import { describe, it, expect, beforeAll, vi } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
import { defineEventHandler, useRuntimeConfig, readBody } from "@nuxt/kit";

vi.mock("@google/generative-ai", () => {
  return {
    GoogleGenerativeAI: vi.fn().mockImplementation(() => {
      return {
        getGenerativeModel: () => ({
          generateContent: vi.fn().mockResolvedValue({
            response: {
              candidates: [
                {
                  content: {
                    parts: [{ text: '[{"key": "value"}]' }],
                  },
                },
              ],
            },
          }),
        }),
      };
    }),
  };
});

describe("API Test", () => {
  beforeAll(async () => {
    await setup({
      // Nuxt.js options
    });
  });

  it("should return json data", async () => {
    const config = useRuntimeConfig();
    config.apiKey = "test_api_key";

    const event = {
      req: {
        body: JSON.stringify({ prompt: "test prompt" }),
      },
      context: {},
    };

    const handler = defineEventHandler(async (event) => {
      const config = useRuntimeConfig(event);
      const API_KEY = config.apiKey;
      if (!API_KEY) {
        throw new Error("API_KEY is not defined");
      }

      const body = await readBody(event);
      if (!body || !body.prompt) {
        throw new Error("Invalid request body");
      }

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      try {
        const result = await model.generateContent(body.prompt);
        const response = result.response;
        const text = response?.candidates[0]?.content?.parts[0]?.text;
        const jsonStartIndex = text.indexOf("[");
        const jsonEndIndex = text.lastIndexOf("]") + 1;
        const jsonString = text.substring(jsonStartIndex, jsonEndIndex);
        const jsonData = JSON.parse(jsonString);
        return { jsonData };
      } catch (error) {
        throw error;
      }
    });

    const result = await handler(event);

    expect(result).toEqual({ jsonData: [{ key: "value" }] });
  });
});
