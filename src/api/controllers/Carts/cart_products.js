var module = require('../../models/Carts/cart_products')

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

exports.getCartProductsByID= (req,res)=>{
   module.getCartProductsByID(req.params.id,(err,CartProducts)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single CartProducts data",CartProducts)
         res.send(CartProducts)
      }

   })
}

exports.getCartProductsByUserID= (req,res)=>{
    module.getCartProductsByUserID(req.params.role,(err,CartProducts)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single CartProducts data",CartProducts)
          res.send(CartProducts)
       }
 
    })
 }
 

exports.AddCartProducts=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createCartProducts(data,(err,emp)=>{
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


//Update CartProducts model
exports.UpdateCartProducts=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateCartProducts(req.params.id,data,(err,emp)=>{
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


//Delete CartProducts

exports.deleteCartProducts = (req,res) =>{
   module.deleteCartProducts(req.params.id,(err,result)=>{
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