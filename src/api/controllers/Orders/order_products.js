var module = require('../../models/Orders/order_products')

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

exports.getOrder_productsByID= (req,res)=>{
   module.getOrder_productsByID(req.params.id,(err,Order_productss)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single Order_products data",Order_productss)
         res.send(Order_productss)
      }

   })
}

exports.getOrder_productsByProductID= (req,res)=>{
    module.getOrder_productsByProductID(req.params.id,(err,Order_productss)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Order_products data",Order_productss)
          res.send(Order_productss)
       }
 
    })
 }
 

exports.AddOrder_products=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createOrder_products(data,(err,emp)=>{
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


//Update Order_products model
exports.UpdateOrder_products=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateOrder_products(req.params.id,data,(err,emp)=>{
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


//Delete Order_products

exports.deleteOrder_products = (req,res) =>{
   module.deleteOrder_productss(req.params.id,(err,result)=>{
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