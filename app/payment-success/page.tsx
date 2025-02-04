import Navbar from "../pages/Navbar"

interface IParams {
    searchParams: {
        amount: number
    }
}
const PaymentSuccess = ({ searchParams }: IParams) => {
    return (
        <div className="text-center w-full">
            <Navbar />
            <h1 className="text-6xl mt-16">Thank you for purchasing $ {searchParams.amount}</h1>
        </div>
    )
}

export default PaymentSuccess
