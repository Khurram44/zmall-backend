var module = require('../../models/Returns/return_policy')

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

exports.getreturn_policyByID= (req,res)=>{
   module.getreturn_policyByID(req.params.id,(err,return_policy)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single return_policy data",return_policy)
         res.send(return_policy)
      }

   })
}

//Get return_policy by Category
exports.getreturn_policyByCategory= (req,res)=>{
   module.getreturn_policyByCategory(req.params.category,(err,return_policy)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single return_policy data",return_policy)
         res.send(return_policy)
      }

   })
}


exports.Addreturn_policy=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createreturn_policy(data,(err,emp)=>{
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


//Update return_policy model
exports.Updatereturn_policy=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updatereturn_policy(req.params.id,data,(err,emp)=>{
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


//Delete return_policy

exports.deletereturn_policy = (req,res) =>{
   module.deletereturn_policy(req.params.id,(err,result)=>{
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