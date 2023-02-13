import { useStripe ,useElements,PaymentElement} from '@stripe/react-stripe-js'

const CheckoutForm = () =>{
    const stripe= useStripe();
    const elements = useElements()
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (!stripe|| !elements) {
            return;
        }
        const result = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url :"",
            },
        });
        if (result.error) {
            console.log(result.error.message);            
        }else{
            // Your customer will be redirected to your `return_url`. For some paymen
        }
    };

    return(
        <form onSubmit ={handleSubmit}>
         <PaymentElement/>
         <button disabled ={!stripe}></button>
        </form>
    )
};

export default CheckoutForm;