export default {
    name: "order",
    title: "Orders",
    type: "document",
    fields: [
        {
            name: "user",
            title: "User Information",
            type: "object",
            fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "email", title: "Email", type: "string" },
                { name: "address", title: "Address", type: "string" },
            ],
        },
        {
            name: "products",
            title: "Ordered Products",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "productId", title: "Product ID", type: "string" },
                        { name: "title", title: "Title", type: "string" },
                        { name: "price", title: "Price", type: "number" },
                        { name: "quantity", title: "Quantity", type: "number" },
                    ],
                },
            ],
        },
        { name: "totalAmount", title: "Total Amount", type: "number" },
        { name: "date", title: "Date", type: "datetime" },
    ],
};
