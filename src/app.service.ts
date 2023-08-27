import { Injectable } from '@nestjs/common';
const stripe = require('stripe')('sk_test_51NjidqF4gKCObptNFfZ0Egj7IbDdddWohJgJjfUtWNVGyDcAjdvwlQfJ6PI5IsDtJSSH0fDwvAo232KlriLrQICU00flKnPhex')
 

@Injectable()
export class AppService {
  async getHello() {
    
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: 'price_1NjklwF4gKCObptNuxcz3Jfe', quantity: 1 }], //dynamic: "price: product.default_price, quantity: count"
      mode: 'payment',
      payment_intent_data: {
        setup_future_usage: 'on_session',
      },
      customer: 'cus_OWoRAs1RH4H0mv', //dynamic: pay_details.customer_id
      success_url:
        'http://localhost:3000' +
        '/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000' + '/pay/failed/checkout/session',
    });

    return session;

  }


  async SuccessSession(Session) {

    console.log(Session);
    

  }
}
