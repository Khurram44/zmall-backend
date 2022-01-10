var module = require('../../models/Roles/user')

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

exports.getUserByID= (req,res)=>{
   module.getUserByID(req.params.id,(err,User)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single User data",User)
         res.send(User)
      }

   })
}

exports.getUserByType= (req,res)=>{
    module.getUserByType(req.params.role,(err,User)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single User data",User)
          res.send(User)
       }
 
    })
 }
 

 //get specific user by type and ID only
//  exports.getUserByTypeID= (req,res)=>{
//     module.getUserByTypeID(req.params.role,req.params.id,(err,User)=>{
//        if(err)
//        {
//           res.send(err)
//        }
//        else{
//           console.log("Single User data",User)
//           res.send(User)
//        }
 
//     })
//  }

exports.AddUser=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createUser(data,(err,emp)=>{
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


//Update User model
exports.UpdateUser=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateUser(req.params.id,data,(err,emp)=>{
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


//Delete User

exports.deleteUser = (req,res) =>{
   module.deleteUser(req.params.id,(err,result)=>{
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