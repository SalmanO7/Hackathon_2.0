// sanity/schemas/purchaseOrder.ts
export default {
  name: "purchaseOrder",
  type: "document",
  title: "Purchase Order",
  fields: [
      {
          name: "items",
          title: "Items",
          type: "array",
          of: [{ type: "reference", to: [{ type: "product" }] }], // Ensure your schema supports this
      },
      { name: "totalAmount", title: "Total Amount", type: "number" },
      { name: "paymentIntent", title: "Payment Intent ID", type: "string" },
      { name: "createdAt", title: "Created At", type: "datetime" },
  ],
};
