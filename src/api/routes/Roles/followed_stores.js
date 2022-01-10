const express = require('express')
 //import router
 const router = express.Router()

 //import StoreFollowed controller
 const StoreFollowedController = require("../../controllers/Roles/followed_stores")

 //get all list by router
 router.get('/', StoreFollowedController.getList)
 router.get('/:id',StoreFollowedController.getStoreFollowedByID)
 router.get('/vendor/:id',StoreFollowedController.getStoreFollowedByStoreID)
 router.get('/users/:id',StoreFollowedController.getStoreFollowedByUserID)
 router.post('/', StoreFollowedController.AddStoreFollowed)
 router.put('/:id',StoreFollowedController.UpdateStoreFollowed)
 router.delete('/:id',StoreFollowedController.deleteStoreFollowed)

 // export the router to be accessible

 module.exports = router