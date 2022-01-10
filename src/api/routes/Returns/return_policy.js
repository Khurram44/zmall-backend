const express = require('express')
 //import router
 const router = express.Router()

 //import return_policy controller
 const return_policyController = require("../../controllers/Returns/return_policy");
 router.get('/',return_policyController.getList)
 router.get('/:id',return_policyController.getreturn_policyByID)
 router.get('/return_and_refund/:category',return_policyController.getreturn_policyByCategory)
 router.post('/',return_policyController.Addreturn_policy)
//  router.delete('/delete/:id',return_policyController.deleteProduct)
// router.put('/update/:id',return_policyController.UpdateProduct)
 //export router for getting access
 module.exports = router