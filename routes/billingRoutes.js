const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 credits',
      source: req.body.id
    });

    console.log(charge);
  });
};

// card
// :
// {id: "card_1BAgGGC3qBelfANecVpoC1sP", object: "card", address_city: null, address_country: null,…}
// client_ip
// :
// "202.159.155.78"
// created
// :
// 1507474812
// email
// :
// "a@a.a"
// id
// :
// "tok_1BAgGGC3qBelfANeeOtoJX1z"
// livemode
// :
// false
// object
// :
// "token"
// type
// :
// "card"
// used
// :
// false
