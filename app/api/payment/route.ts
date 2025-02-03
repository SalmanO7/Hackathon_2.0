// // pages/api/checkout_sessions.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Stripe } from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-01-27.acacia' });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { products } = req.body;

//     try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: products.map((item: any) => ({
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: item.product.name,
//             },
//             unit_amount: item.product.price * 100, // Stripe expects amount in cents
//           },
//           quantity: item.quantity,
//         })),
//         mode: 'payment',
//         success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//         cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
//       });

//       return res.status(200).json({ id: session.id });
//     } catch (error) {
//       return res.status(500).json({ error: 'Failed to create checkout session' });
//     }
//   }
//   return res.status(405).json({ error: 'Method Not Allowed' });
// }
