const express = require('express')
 //import router
 const router = express.Router()

 //import User controller
 const UserController = require("../../controllers/Roles/user")

 //get all list by router
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getUserByID)
 router.get('/type/:role',UserController.getUserByType)
//  router.get('/type/:role/:id',UserController.getUserByTypeID)
 router.post('/', UserController.AddUser)
 router.put('/:id',UserController.UpdateUser)
 router.delete('/:id',UserController.deleteUser)

 // export the router to be accessible

 module.exports = router