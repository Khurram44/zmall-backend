const express = require('express')
 //import router
 const router = express.Router()

 //import Payoutloyee controller
 const PayoutController = require("../../controllers/Payouts/payout")

 //get all list by router
 router.get('/', PayoutController.getList)
 router.get('/:id',PayoutController.getPayoutByID)
 router.post('/', PayoutController.AddPayout)
 router.put('/:id',PayoutController.UpdatePayout)
 router.delete('/:id',PayoutController.deletePayout)

 // export the router to be accessible

 module.exports = router