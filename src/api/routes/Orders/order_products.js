const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const orderController = require("../../controllers/Orders/order_products");
 router.get('/', orderController.getList)
 router.get('/:id',orderController.getOrder_productsByID)
 router.get('/resources/:id',orderController.getOrder_productsByProductID)
  router.post('/',orderController.AddOrder_products)
 router.delete('/delete/:id',orderController.deleteOrder_products)
router.put('/update/:id',orderController.UpdateOrder_products)
 //export router for getting access
 module.exports = router