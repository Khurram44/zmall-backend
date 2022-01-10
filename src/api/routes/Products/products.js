const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const productController = require("../../controllers/Products/products")

 //get all list by router
 router.get('/', productController.getList)
 router.get('/:id',productController.getProductByID)
 router.post('/', productController.AddProduct)
 router.put('/:id',productController.UpdateProduct)
 router.delete('/:id',productController.deleteProduct)

 // export the router to be accessible

 module.exports = router