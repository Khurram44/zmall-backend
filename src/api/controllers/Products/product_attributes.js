var module = require('../../models/Products/product_attributes')

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

exports.getproduct_attributesByID= (req,res)=>{
   module.getproduct_attributesByID(req.params.id,(err,product)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single product data",product)
         res.send(product)
      }

   })
}

// exports.AddProduct_attributes=(req,res)=>{
//    const data = new module(req.body)   
//    console.log("request data", req.body)

//    if(req.body.constructor === Object && Object.keys(req.body).length===0)
//    {
//       res.send(400).send({success:false,message:"Please fill up all the fields"})
//    }
//    else{
//       module.createProduct(data,(err,emp)=>{
//          if(err)
//          {
//             res.send(err)
//          }
//          else{
//             res.json({status:true, message:"Success",data:emp.InsertId})
//          }
//       })
//       console.log("valid data")
//    }
// }


//Update Product_attributes model
exports.UpdateProduct_attributes=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateProduct(req.params.id,data,(err,emp)=>{
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


//Delete Product_attributes

// exports.deleteProduct_attributes = (req,res) =>{
//    module.deleteProduct_attributes(req.params.id,(err,result)=>{
//       if (err)
//       {
//          res.send(err)
//       }
//       else
//       {
//          res.json({status:true, message:"Deleted Successfully"})
//       }

//    })
// }