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
    projectId: "nkb8duzw", 
    dataset: "production",
    useCdn: false,
    token: "skg4UAzOkcRvheZJMWb6qfnQ8eU4Qm2B8esmV7BWITsQRbKv4RyLQK0xrTVOyDDw5po4cVy4896Iyl2iaeIucWOA6rpbPhHEUsbvgK6KXM9uX5rLJZJNk4Y4h0PVIEVSwa6aaQKyQNVOBZKvjWt9rt7FBsnjKn8GhqBHqUZIrXFOndhoNdbW",
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