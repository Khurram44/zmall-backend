var module = require('../../models/Roles/store_finance_details')

exports.getList = (req,res) =>{
   // console.log("complete list here")
   module.getResult((err,emp)=>{
       if(err)
       {
          res.send(err)
       }
       console.log(emp)
       res.send(emp)
   })
}

exports.getStoreFinanceByID= (req,res)=>{
   module.getStoreFinanceByID(req.params.id,(err,StoreFinance)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single StoreFinance data",StoreFinance)
         res.send(StoreFinance)
      }

   })
}

exports.getStoreFinanceByStoreID= (req,res)=>{
    module.getStoreFinanceByStoreID(req.params.id,(err,StoreFinance)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single StoreFinance data",StoreFinance)
          res.send(StoreFinance)
       }
 
    })
 }
 
 exports.getStoreFinanceByUserID= (req,res)=>{
    module.getStoreFinanceByUserID(req.params.id,(err,StoreFinance)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single StoreFinance data",StoreFinance)
          res.send(StoreFinance)
       }
 
    })
 }

exports.AddStoreFinance=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createStoreFinance(data,(err,emp)=>{
         if(err)
         {
            res.send(err)
         }
         else{
            res.json({status:true, message:"Success",data:emp.InsertId})
         }
      })
      console.log("valid data")
   }
}


//Update StoreFinance model
exports.UpdateStoreFinance=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateStoreFinance(req.params.id,data,(err,emp)=>{
         if(err)
         {
            res.send(err)
         }
         else{
            res.json({status:true, message:"Success",data:emp.InsertId})
         }
      })
      console.log("valid data")
   }

}


//Delete StoreFinance

exports.deleteStoreFinance = (req,res) =>{
   module.deleteStoreFinance(req.params.id,(err,result)=>{
      if (err)
      {
         res.send(err)
      }
      else
      {
         res.json({status:true, message:"Deleted Successfully"})
      }

   })
}