import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IzGJvEyt5ZPz5JbPoPD7rWA8d5FxfYW9OQQBNTqVdEttDhUoPyTQwyju5kC8k692G6ECzId21Dneia59HkYFeFb00ftg2fFjB';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			bitcoin={true}
			name="Ecommerce Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
			style={{ marginTop: '20px' }}
		/>
	);
};

export default StripeCheckoutButton;
