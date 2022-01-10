const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const empController = require("../../controllers/Modules/module")

 //get all list by router
 router.get('/', empController.getList)
 router.get('/:id',empController.getModulesByID)
 router.post('/', empController.AddModules)
 router.put('/:id',empController.UpdateModules)
 router.delete('/:id',empController.deleteModules)

 // export the router to be accessible

 module.exports = router