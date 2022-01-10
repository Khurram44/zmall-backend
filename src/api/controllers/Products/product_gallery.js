var module = require('../../models/Products/product_gallery')

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

exports.getproduct_galleryByProductID= (req,res)=>{
   module.getproduct_galleryByProductID(req.params.id,(err,product)=>{
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

exports.getproduct_galleryByID= (req,res)=>{
    module.getProduct_galleryByID(req.params.product_id,(err,product)=>{
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
 

exports.Addproduct_gallery=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createproduct_gallery(data,(err,emp)=>{
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


//Update product_gallery model
exports.Updateproduct_gallery=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateproduct_gallery(req.params.id,data,(err,emp)=>{
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


///Delete product_gallery

exports.deleteproduct_gallery = (req,res) =>{
   module.deleteProduct_gallery(req.params.id,(err,result)=>{
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