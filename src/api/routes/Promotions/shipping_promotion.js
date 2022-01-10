const express = require('express')
 //import router
 const router = express.Router()

 //import Shipping_promotion controller
 const Shipping_promotionController = require("../../controllers/Promotions/shipping_promotion");
 router.get('/',Shipping_promotionController.getList)
 router.get('/:id',Shipping_promotionController.getShipping_promotionByID)
 router.post('/',Shipping_promotionController.AddShipping_promotion)
 router.delete('/delete/:id',Shipping_promotionController.deleteShipping_promotion)
router.put('/update/:id',Shipping_promotionController.UpdateShipping_promotion)
 //export router for getting access
 module.exports = router