const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const product_galleryController = require("../../controllers/Products/product_gallery")

 //get all list by router
 router.get('/', product_galleryController.getList)
 router.get('/:id',product_galleryController.getproduct_galleryByProductID)
 router.get('/product/:id',product_galleryController.getproduct_galleryByProductID)
 router.post('/', product_galleryController.Addproduct_gallery)
 router.put('/:id',product_galleryController.Updateproduct_gallery)
 router.delete('/:id',product_galleryController.deleteproduct_gallery)

 // export the router to be accessible

 module.exports = router