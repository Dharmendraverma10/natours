/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51H9Y6SIb3mPgI1NMbpC0tN2EQqBYg3jXjKJk8jPLoACh0v6t2JNJZNbEkhZttbcYlG4sgwQC46yNYUSqQ4cQeKJi007kMgNBZJ'
);
export const bookTour = async (tourId) => {
  try {
    //1) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    //2) Create checkout form plus charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
