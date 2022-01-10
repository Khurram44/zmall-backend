const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const orderController = require("../../controllers/Orders/orders");
 router.get('/', orderController.getList)
 router.get('/:id',orderController.getOrdersByID)
 router.post('/',orderController.AddOrder)
 router.delete('/delete/:id',orderController.deleteOrder)
router.put('/update/:id',orderController.UpdateOrders)
 //export router for getting access
 module.exports = router