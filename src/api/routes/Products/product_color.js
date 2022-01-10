const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const product_colorController = require("../../controllers/Products/product_color")

 //get all list by router
 router.get('/', product_colorController.getList)
 router.get('/:id',product_colorController.getProduct_colorByID)
 router.get('/product/:id',product_colorController.getProduct_colorByProductID)
//  router.post('/', product_colorController.AddProduct)
//  router.put('/:id',product_colorController.UpdateProduct)
//  router.delete('/:id',product_colorController.deleteProduct)

 // export the router to be accessible

 module.exports = router