import Navbar from "../pages/Navbar"

const PaymentSuccess = ({ searchParams }: any) => {

    const amount = parseFloat(searchParams.amount || "80");

    return (
        <div className="text-center w-full">
            <Navbar />
            <h1 className="text-6xl mt-16">Thank you for purchasing $ {amount}</h1>
        </div>
    )
}

export default PaymentSuccess
