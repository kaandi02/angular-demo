const stripe = require('stripe')('sk_test_51PZpe3FmLPIdD590ZzzE1Tjpxw605dU2KrbogW4vxroMyxizvn8eUOUV6ewq9YS1KO9uYHTiMbkeHBYGJ9SCpqid00SKiiAlZI');
const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');

const corsOptions = {
    credentials: false,
    origin: ['http://localhost:4242', 'http://localhost:4200', "https://checkout.stripe.com"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));


const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/post', async (req, res) => {
    res.status(200).send(req.body);
});

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create(req.body);
    res.status(200).send(session.url);
});


app.listen(4242, () => console.log('Running on port 4242'));



