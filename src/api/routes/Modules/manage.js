const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const manageController = require("../../controllers/Modules/manage");
 router.get('/', manageController.getList)
 router.get('/:id',manageController.getManageByID)
 router.post('/',manageController.AddProduct)
 router.delete('/delete/:id',manageController.deleteProduct)
router.put('/update/:id',manageController.UpdateProduct)
 //export router for getting access
 module.exports = router