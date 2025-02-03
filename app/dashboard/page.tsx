import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'
import { client } from '@/sanity/lib/client'

// Fetching orders data from Sanity
const getData = async () => {
    const res = await client.fetch(`
    *[_type == "order"]{
      user {
        name,
        email,
        contact,
        address
      },
      products[] {
        productId,
        title,
        price,
        quantity,
        imageUrl
      },
      totalAmount,
      date
    }`)

    console.log(res);  // Log the data to check the structure
    return res;
}

const AdminRoute = async () => {
    // Checking if the user has an admin role
    const isAdmin = await checkRole('salman_admin')
    const orders = await getData()

    // Redirecting if the user is not an admin
    if (!isAdmin) {
        redirect('/')
    }

    // Rendering orders if data is available
    return (
        <div>
            <h1>hellow Worl</h1>
            {/* {orders && orders.length > 0 ? (
                orders.map((order: any) => (
                    <div key={order.id}>
                        <h2>Order by {order.user?.name || 'Unknown User'}</h2>
                        <p>Email: {order.user?.email}</p>
                        <p>Contact: {order.user?.contact}</p>
                        <p>Address: {order.user?.address}</p>
                        <h3>Products:</h3>
                        <ul>
                            {(order.products || []).map((product: any, index: any) => (
                                <li key={index}>
                                    <img src={product.imageUrl} alt={product.title} width={50} />
                                    <p>{product.title} - ${product.price} x{product.quantity}</p>
                                </li>
                            ))}
                        </ul>
                        <p>Total Amount: ${order.totalAmount}</p>
                        <p>Order Date: {new Date(order.date).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p>No orders available</p>
            )} */}
        </div>
    )
}

export default AdminRoute
