import { useNavigate } from "react-router-dom"
import { Button } from "src/components/ui"
import { APP_URLS } from "src/routes/app-urls"



const CartActions = () => {

    // redirect to checkout page
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate(APP_URLS.APP.CHECKOUT)
    }

    return <div className="mt-6">
        <Button
            size="lg"
            className="w-full"
            onClick={handleCheckout}
        >
            Checkout
        </Button>
    </div>
}

export default CartActions