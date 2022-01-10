var module = require('../../models/Roles/followed_stores')

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

exports.getStoreFollowedByID= (req,res)=>{
   module.getStoreFollowedByID(req.params.id,(err,StoreFollowed)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single StoreFollowed data",StoreFollowed)
         res.send(StoreFollowed)
      }

   })
}

exports.getStoreFollowedByStoreID= (req,res)=>{
    module.getStoreFollowedByStoreID(req.params.id,(err,StoreFollowed)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single StoreFollowed data",StoreFollowed)
          res.send(StoreFollowed)
       }
 
    })
 }
 
 exports.getStoreFollowedByUserID= (req,res)=>{
    module.getStoreFollowedByUserID(req.params.id,(err,StoreFollowed)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single StoreFollowed data",StoreFollowed)
          res.send(StoreFollowed)
       }
 
    })
 }

exports.AddStoreFollowed=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createStoreFollowed(data,(err,emp)=>{
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


//Update StoreFollowed model
exports.UpdateStoreFollowed=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateStoreFollowed(req.params.id,data,(err,emp)=>{
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


//Delete StoreFollowed

exports.deleteStoreFollowed = (req,res) =>{
   module.deleteStoreFollowed(req.params.id,(err,result)=>{
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