import {Element} from '@stripe/react-stripe-js'

import {loadStripe} from '@stripe/stripe-js'

const feedBack =loadStripe('');

export default function App(){
    const options ={
        clientSecret:{{}}
    };
    return(
        <Element stripe ={stripePromise} option={options}>
            <CheckoutForm/>
        </Element>
    )
};