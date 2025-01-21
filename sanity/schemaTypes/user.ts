export default {
    name: "purchase",
    type: "document",
    title: "Purchase",
    fields: [
        { name: "userId", type: "string", title: "User ID" },
        { name: "productId", type: "string", title: "Product ID" },
        { name: "name", type: "string", title: "Name" },
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "string", title: "Phone" },
        { name: "address", type: "text", title: "Address" },
        { name: "date", type: "datetime", title: "Purchase Date" },
    ],
};
