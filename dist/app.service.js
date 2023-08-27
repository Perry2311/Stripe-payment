"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const stripe = require('stripe')('sk_test_51NjidqF4gKCObptNFfZ0Egj7IbDdddWohJgJjfUtWNVGyDcAjdvwlQfJ6PI5IsDtJSSH0fDwvAo232KlriLrQICU00flKnPhex');
let AppService = class AppService {
    async getHello() {
        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: 'price_1NjklwF4gKCObptNuxcz3Jfe', quantity: 1 }],
            mode: 'payment',
            payment_intent_data: {
                setup_future_usage: 'on_session',
            },
            customer: 'cus_OWoRAs1RH4H0mv',
            success_url: 'http://localhost:3000' +
                '/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000' + '/pay/failed/checkout/session',
        });
        return session;
    }
    async SuccessSession(Session) {
        console.log(Session);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map