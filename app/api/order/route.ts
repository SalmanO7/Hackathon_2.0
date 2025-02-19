import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { orderData } = await req.json();

    const order = await sanityClient.create({
      _type: "order",
      user: orderData.user,
      products: orderData.products,
      totalAmount: orderData.totalAmount,
      date: orderData.date,
    });

    return NextResponse.json({ message: "Order placed successfully!", order }, { status: 201 });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json({ message: "Error placing order", error }, { status: 500 });
  }
}
