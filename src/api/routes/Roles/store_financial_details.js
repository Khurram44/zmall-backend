const express = require('express')
 //import router
 const router = express.Router()

 //import StoreFinance controller
 const StoreFinanceController = require("../../controllers/Roles/store_financial_details")

 //get all list by router
 router.get('/', StoreFinanceController.getList)
 router.get('/:id',StoreFinanceController.getStoreFinanceByID)
 router.get('/stores/:id',StoreFinanceController.getStoreFinanceByStoreID)
 router.get('/stores/users/:id',StoreFinanceController.getStoreFinanceByUserID)
 router.post('/', StoreFinanceController.AddStoreFinance)
 router.put('/:id',StoreFinanceController.UpdateStoreFinance)
 router.delete('/:id',StoreFinanceController.deleteStoreFinance)

 // export the router to be accessible

 module.exports = router