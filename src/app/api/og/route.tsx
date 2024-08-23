import OGPImage from "@/components/OGPImage";
import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "";

    return new ImageResponse(<OGPImage title={title || ""} />, {
      width: 1200,
      height: 630,
    });
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
