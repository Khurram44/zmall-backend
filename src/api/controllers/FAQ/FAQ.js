var module = require('../../models/FAQ/FAQ')

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

exports.getFAQByID= (req,res)=>{
   module.getFAQByID(req.params.id,(err,FAQ)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single FAQ data",FAQ)
         res.send(FAQ)
      }

   })
}

//Get FAQ by Category
exports.getFAQByCategory= (req,res)=>{
   module.getFAQByCategory(req.params.category,(err,FAQ)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single FAQ data",FAQ)
         res.send(FAQ)
      }

   })
}


exports.AddFAQ=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createFAQ(data,(err,emp)=>{
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


//Update FAQ model
exports.UpdateFAQ=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateFAQ(req.params.id,data,(err,emp)=>{
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


//Delete FAQ

exports.deleteFAQ = (req,res) =>{
   module.deleteFAQ(req.params.id,(err,result)=>{
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