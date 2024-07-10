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

const products = [
    { "id":1,
      "image": "./assets/images/products/f1.jpg",
      "brand": "adidas",
      "description": " Floral T-Shirt",
      "rating": "5",
      "price": 5,
      "stripeid":"price_1PZvrSFmLPIdD590P27znz45",
      "details":"versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    
    },
    {
      "id": 2,
      "image": "./assets/images/products/f2.jpg",
      "brand": "adidas",
      "description": "Cartoon T-Shirt",
      "rating": 5,
      "price": 1000,
      "stripeid":"price_1PZvscFmLPIdD590vfHjXP9Z",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 3,
      "image": "./assets/images/products/f3.jpg",
      "brand": "adidas",
      "description": "Designer T-Shirt",
      "rating": 5,
      "price": 5,
      "stripeid":"price_1PZvtNFmLPIdD590cDCzYXV9",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 4,
      "image": "./assets/images/products/f4.jpg",
      "brand": "adidas",
      "description": "Cartoon Floral Shirt",
      "rating": 5,
      "price": 7,
      "stripeid": "price_1PZvu9FmLPIdD5900hZd5Ur5",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 5,
      "image": "./assets/images/products/f5.jpg",
      "brand": "adidas",
      "description": "Cartoon Designer T-Shirt",
      "rating": 5,
      "price": 9,
      "stripeid":"price_1PZvukFmLPIdD590j4KFMDHS",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 6,
      "image": "./assets/images/products/f6.jpg",
      "brand": "adidas",
      "description": "Blazer and T-Shirt",
      "rating": 5,
      "price": 12,
      "stripeid":"price_1PZvvDFmLPIdD590PjAMLX3m",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 7,
      "image": "./assets/images/products/f7.jpg",
      "brand": "adidas",
      "description": "Embroidery trouser",
      "rating": 5,
      "price": 7,
      "stripeid":"price_1PZvvdFmLPIdD590fV0Wsf7d",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 8,
      "image": "./assets/images/products/f8.jpg",
      "brand": "adidas",
      "description": "Wide neck T-shirt",
      "rating": 5,
      "price": 7,
      "stripeid": "price_1PZvwAFmLPIdD590tBY3A1be",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 9,
      "image": "./assets/images/products/n1.jpg",
      "brand": "adidas",
      "description": " Blue Formal Shirt",
      "rating": 5,
      "price": 12,
      "stripeid":"price_1PZvwtFmLPIdD59054UgSzPK",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 10,
      "image": "./assets/images/products/n2.jpg",
      "brand": "adidas",
      "description": "Grey Formal Shirt",
      "rating": 5,
      "price": 12,
      "stripeid":"price_1PZvxhFmLPIdD590ReOBzHYA",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
    {
      "id": 11,
      "image": "./assets/images/products/n3.jpg",
      "brand": "adidas",
      "description": "White Formal Shirt",
      "rating": 5,
      "price": 12,
      "stripeid":"price_1PZvyFFmLPIdD590D940Buqz",
      "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
    },
     {
       "id": 12,
       "image": "./assets/images/products/n4.jpg",
       "brand": "adidas",
       "description": "Half-sleeve Formal Shirt",
       "rating": 5,
       "price": 12,
       "stripeid":"price_1PZvynFmLPIdD590Z4QikjY3",
       "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
     }, {
       "id": 13,
       "image": "./assets/images/products/n5.jpg",
       "brand": "adidas",
       "description": "Baggy Formal Shirt",
       "rating": 5,
       "price": 12,
       "stripeid":  "price_1PZvzPFmLPIdD590UMVPikGm",
       "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
     }, {
       "id": 14,
       "image": "./assets/images/products/n6.jpg",
       "brand": "adidas",
       "description": "Cotton Trousers",
       "rating": 5,
       "price": 3,
       "stripeid":"price_1PZvzqFmLPIdD59012RRBgQY",
       "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
     }, {
       "id": 15,
       "image": "./assets/images/products/n7.jpg",
       "brand": "adidas",
       "description": "Beige Formal Shirt",
       "rating": 5,
       "price": 12,
       "stripeid":"price_1PZw0SFmLPIdD590F3MnEfAr",
       "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
     }, {
       "id": 16,
       "image": "./assets/images/products/n8.jpg",
       "brand": "adidas",
       "description": "Brown Half-Sleeve",
       "rating": 5,
       "price": 12,
       "stripeid": "price_1PZw1iFmLPIdD590z2jRhKya",
       "details": "versatile wardrobe essentials that combine comfort and style, making them suitable for a wide range of occasions. Whether you're dressing down for a relaxed weekend or adding a touch of flair to your everyday look, our selection of casual shirts offers something for everyone."
     }
  ]


app.get('/products', async(req,res)=>{
    res.status(200).send(products);
})

app.post('/post', async (req, res) => {
    res.status(200).send(req.body);
});

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create(req.body);
    res.status(200).send(session.url);
});




app.listen(4242, () => console.log('Running on port 4242'));



