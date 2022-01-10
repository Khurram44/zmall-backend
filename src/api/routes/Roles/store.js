const express = require('express')
 //import router
 const router = express.Router()

 //import Store controller
 const StoreController = require("../../controllers/Roles/stores")

 //get all list by router
 router.get('/', StoreController.getList)
 router.get('/:id',StoreController.getStoreByID)
 router.post('/', StoreController.AddStore)
 router.put('/:id',StoreController.UpdateStore)
 router.delete('/:id',StoreController.deleteStore)

 // export the router to be accessible

 module.exports = router