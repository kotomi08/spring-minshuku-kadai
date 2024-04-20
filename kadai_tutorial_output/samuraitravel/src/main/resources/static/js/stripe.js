const stripe = Stripe('pk_test_51P4XGyP8fm8l5ku4jJb4x8BBo2sA9SJ6rARPHfnNWWzVFNUePvtOu6WmC0AiKRkoS2uUTVkCoGaQ3QX2LDuGuwG800LVwfXamb');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', ()=> {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});