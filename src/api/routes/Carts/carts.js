const express = require('express')
 //import router
 const router = express.Router()

 //import Cart controller
 const CartController = require("../../controllers/Carts/carts")

 //get all list by router
 router.get('/', CartController.getList)
 router.get('/:id',CartController.getCartByID)
 router.post('/', CartController.AddCart)
 router.put('/:id',CartController.UpdateCart)
 router.delete('/:id',CartController.deleteCart)

 // export the router to be accessible

 module.exports = router