const express = require('express')
 //import router
 const router = express.Router()

 //import Cart controller
 const Cart_productController = require("../../controllers/Carts/cart_products")

 //get all list by router
 router.get('/', Cart_productController.getList)
 router.get('/:id',Cart_productController.getCartProductsByID)
 router.get('/user/:id',Cart_productController.getCartProductsByUserID)
 router.post('/', Cart_productController.AddCartProducts)
 router.put('/:id',Cart_productController.UpdateCartProducts)
 router.delete('/:id',Cart_productController.deleteCartProducts)

 // export the router to be accessible

 module.exports = router