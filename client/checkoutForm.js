import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () =>{
    return (
        <form>
            <PaymentElement/>
            <button>submit</button>
        </form>
    );
};

export default CheckoutForm;