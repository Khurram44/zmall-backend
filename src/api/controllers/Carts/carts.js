var module = require('../../models/Carts/carts')

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

exports.getCartByID= (req,res)=>{
   module.getCartByID(req.params.id,(err,Cart)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single Cart data",Cart)
         res.send(Cart)
      }

   })
}

// exports.getCartByType= (req,res)=>{
//     module.getCartByType(req.params.role,(err,Cart)=>{
//        if(err)
//        {
//           res.send(err)
//        }
//        else{
//           console.log("Single Cart data",Cart)
//           res.send(Cart)
//        }
 
//     })
//  }
 

exports.AddCart=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createCart(data,(err,emp)=>{
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


//Update Cart model
exports.UpdateCart=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateCart(req.params.id,data,(err,emp)=>{
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


//Delete Cart

exports.deleteCart = (req,res) =>{
   module.deleteCart(req.params.id,(err,result)=>{
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