export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "user",
            title: "👤 User Information",
            type: "object",
            fields: [
                { name: "name", title: "📛 Name", type: "string" },
                { name: "email", title: "📧 Email", type: "string" },
                { name: "contact", title: "📞 Phone Number", type: "string" },
                { name: "address", title: "📍 Address", type: "string" },
            ],
        },
        {
            name: "products",
            title: "🛒 Products",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "productId", title: "🔖 Product ID", type: "string" },
                        { name: "title", title: "📦 Product Title", type: "string" },
                        { name: "price", title: "💰 Price", type: "number" },
                        { name: "quantity", title: "🔢 Quantity", type: "number" },
                        { name: "imageUrl", title: "🖼️ Image URL", type: "url" },
                    ],
                },
            ],
        },
        { name: "totalAmount", title: "💲 Total Amount", type: "number" },
        { name: "date", title: "📅 Order Date", type: "datetime" },
    ],

    // 🔥 Add preview to show User's info in Order List
    preview: {
        select: {
            name: "user.name",
            contact: "user.contact",
            address: "user.address",
        },
        prepare({ name, contact, address }: any) {
            return {
                title: `📦 Order - ${name || "Unknown User"}`,
                subtitle: `📞 ${contact} | 📍 ${address}`,
            };
        },
    },
};
