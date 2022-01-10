var module = require('../../models/Products/product_color')

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

exports.getProduct_colorByID= (req,res)=>{
   module.getProduct_colorByID(req.params.id,(err,product)=>{
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

//get product color by product ID
exports.getProduct_colorByProductID= (req,res)=>{
    module.getproduct_colorByProductID(req.params.id,(err,product)=>{
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
 

// exports.Addproduct_color=(req,res)=>{
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


//Update product_color model
exports.Updateproduct_color=(req,res)=>{

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


//Delete product_color

// exports.deleteproduct_color = (req,res) =>{
//    module.deleteproduct_color(req.params.id,(err,result)=>{
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