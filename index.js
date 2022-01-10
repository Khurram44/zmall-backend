const express = require('express')
var bodyParser = require('body-parser')
 
// create express app
const app = express()

//setting up server port

const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// define root routers
app.get('/',(req,res)=>{
    res.send("roots are properly working")
})
// import the required routes
const route = require('./src/api/routes/Modules/module')
const manage = require('./src/api/routes/Modules/manage')
const products = require('./src/api/routes/Products/products')
const faq = require('./src/api/routes/FAQ/FAQ')
const orders = require('./src/api/routes/Orders/orders')
const reviews = require('./src/api/routes/Products/reviews')
const product_attributes = require('./src/api/routes/Products/product_attributes')
const product_color = require('./src/api/routes/Products/product_color')
const product_gallery = require('./src/api/routes/Products/product_gallery')
const return_and_refund = require('./src/api/routes/Returns/return_policy')
const users = require('./src/api/routes/Roles/user')
const stores = require('./src/api/routes/Roles/store')
const finances = require('./src/api/routes/Roles/store_financial_details')
const carts = require('./src/api/routes/Carts/carts')
const cart_products = require('./src/api/routes/Carts/cart_products')
const order_products = require('./src/api/routes/Orders/order_products')
const payouts = require('./src/api/routes/Payouts/payout')
const flyers = require('./src/api/routes/Flyers/flyer')
const follow = require('./src/api/routes/Roles/followed_stores')
const shipping_promotion = require('./src/api/routes/Promotions/shipping_promotion')



//create the route 
app.use('/api/v1/module', route)
app.use('/api/v1/manage',manage)
app.use('/api/v1/products',products)
app.use('/api/v1/faqs', faq)
app.use('/api/v1/orders',orders)
app.use('/api/v1/reviews',reviews)
app.use('/api/v1/product_attributes',product_attributes)
app.use('/api/v1/product_color',product_color)
app.use('/api/v1/product_gallery',product_gallery)
app.use('/api/v1/policies',return_and_refund)
app.use('/api/v1/users',users)
app.use('/api/v1/stores',stores)
app.use('/api/v1/finances',finances)
app.use('/api/v1/carts',carts)
app.use('/api/v1/cart_products',cart_products)
app.use('/api/v1/order_products',order_products)
app.use('/api/v1/payouts',payouts)
app.use('/api/v1/flyers',flyers)
app.use('/api/v1/follows',follow)
app.use('/api/v1/free_shipping',shipping_promotion)



//Listening to the port
app.listen(port,()=>{
    console.log("This server is running properly")
})