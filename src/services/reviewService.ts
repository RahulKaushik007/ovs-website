import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface Review {
  text: string;
  author: string;
  role: string;
  initials: string;
  color: string;
  rating: number;
}

export async function fetchGoogleReviews(): Promise<Review[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Search for the most recent Google Reviews for 'OCULUR VISION SOLUTIONS' located in India (specifically check for locations like Pune or Mumbai if multiple exist). Extract the 5 most recent real reviews. For each review, provide the exact text, the reviewer's name, and their profession if you can infer it (otherwise use 'Verified Customer'). Return ONLY a JSON array of objects with fields: text, author, role.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING },
              author: { type: Type.STRING },
              role: { type: Type.STRING },
            },
            required: ["text", "author", "role"],
          },
        },
      },
    });

    const reviewsData = JSON.parse(response.text);
    const colors = ["bg-purple-100", "bg-blue-100", "bg-indigo-100", "bg-emerald-100", "bg-amber-100"];

    return reviewsData.map((r: any, idx: number) => ({
      ...r,
      initials: r.author.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2),
      color: colors[idx % colors.length],
      rating: 5 // Default to 5 for fetched reviews
    }));
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}
