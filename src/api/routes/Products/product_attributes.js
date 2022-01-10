const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const product_attributesController = require("../../controllers/Products/product_attributes")

 //get all list by router
 router.get('/', product_attributesController.getList)
 router.get('/:id',product_attributesController.getproduct_attributesByID)
//  router.post('/', product_attributesController.AddProduct)
//  router.put('/:id',product_attributesController.UpdateProduct)
//  router.delete('/:id',product_attributesController.deleteProduct)

 // export the router to be accessible

 module.exports = router