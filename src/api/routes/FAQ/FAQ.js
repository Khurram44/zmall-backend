const express = require('express')
 //import router
 const router = express.Router()

 //import FAQ controller
 const FAQController = require("../../controllers/FAQ/FAQ");
 router.get('/',FAQController.getList)
 router.get('/:id',FAQController.getFAQByID)
 router.get('/resp/:category',FAQController.getFAQByCategory)
 router.post('/',FAQController.AddFAQ)
//  router.delete('/delete/:id',FAQController.deleteProduct)
// router.put('/update/:id',FAQController.UpdateProduct)
 //export router for getting access
 module.exports = router