var module = require('../../models/Roles/Store')

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

exports.getStoreByID= (req,res)=>{
   module.getStoreByID(req.params.id,(err,Store)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single Store data",Store)
         res.send(Store)
      }

   })
}

exports.getStoreByType= (req,res)=>{
    module.getStoreByType(req.params.role,(err,Store)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Store data",Store)
          res.send(Store)
       }
 
    })
 }
 

exports.AddStore=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createStore(data,(err,emp)=>{
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


//Update Store model
exports.UpdateStore=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateStore(req.params.id,data,(err,emp)=>{
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


//Delete Store

exports.deleteStore = (req,res) =>{
   module.deleteStore(req.params.id,(err,result)=>{
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