import { NextResponse } from "next/server";
import sanityClient from "@sanity/client";

type PurchaseData = {
    userId: string;
    product: string | null;
    name: string;
    email: string;
    phone: string;
    address: string;
};

const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
    dataset: "production",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN,
});

export async function POST(request: Request) {
    const { userId, product, name, email, phone, address }: PurchaseData = await request.json();


    try {
        await client.create({
            _type: "purchase",
            userId,
            product,
            name,
            email,
            phone,
            address,
            date: new Date().toISOString(),
        });

        return NextResponse.json({ message: "Purchase saved successfully!" });
    } catch (error) {
        console.error("Error saving purchase:", error);
        return NextResponse.json({ message: "Failed to save purchase." }, { status: 500 });
    }
}