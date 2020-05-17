import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100; // pence to pound
  const publishableKey = 'pk_test_loQUxVRjrx03HURzgd9yPzqm00dGvaRuYH';

  const onToken = token => {
    console.log(token);
    alert('Payment was successful processed');
  };

  return (
		<StripeCheckout
			label="Pay with Stripe"
			name="Si Senor"
			billingAddress
			shippingAddress
			image="src/img/Logo.png"
      description={`The total price is £${price.toFixed(2)}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;