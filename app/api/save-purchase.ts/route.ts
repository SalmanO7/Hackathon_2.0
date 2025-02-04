// pages/api/save-purchase.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client'; // Your Sanity client setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { items, totalAmount, paymentIntent, createdAt } = req.body;

        try {
            const order = await client.create({
                _type: 'purchaseOrder',
                items,
                totalAmount,
                paymentIntent,
                createdAt,
            });
            res.status(200).json({ success: true, order });
        } catch (error) {
            console.error('Error saving purchase:', error);
            res.status(500).json({ success: false, error: 'Failed to save purchase' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}
