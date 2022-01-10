const express = require('express')
 //import router
 const router = express.Router()

 //import Flyers controller
 const FlyersController = require("../../controllers/Flyers/flyer");
 router.get('/',FlyersController.getList)
 router.get('/:id',FlyersController.getFlyersByID)
 router.post('/',FlyersController.AddFlyers)
//  router.delete('/delete/:id',FlyersController.deleteProduct)
// router.put('/update/:id',FlyersController.UpdateProduct)
 //export router for getting access
 module.exports = router