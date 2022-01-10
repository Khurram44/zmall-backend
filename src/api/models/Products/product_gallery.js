
// import database
var db = require('../../database/database')
//create model/schema for table
var Product_gallery = function(Product_gallery) {
    this.id = Product_gallery.id
    this.product_id = Product_gallery.product_id;
    this.image= Product_gallery.image
    this.main_image=Product_gallery.main_image
}

//Get product_gallery model
Product_gallery.getResult = (result) => {
    db.query('SELECT * from product_gallery', (err,res)=>{
        if(err){
            console.log('error while fetching', err)
            result(null,err)
        }
        else {
            console.log('fetched successfully', res)
            result(null,res)
        }
    })
}

//Get product_gallery by ID model
Product_gallery.getProduct_galleryByID=(id,result)=>{
    db.query('SELECT * from product_gallery WHERE id=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}

//Get product Galary by ProductID
Product_gallery.getproduct_galleryByProductID=(id,result)=>{
    db.query('SELECT * from product_gallery WHERE product_id=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}

// Create model
Product_gallery.createproduct_gallery=(EmpReqData, result)=>{
    db.query('INSERT into product_gallery SET ?', EmpReqData,(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,{status:false, message:err})
        }
        else{
            console.log("Inserted succcessfully")
            result(null,{status:true,message:"Success"})
        }
    })

}

//Update Model
Product_gallery.updateproduct_gallery=(id,data,result)=>{
    db.query('UPDATE product_gallery SET product_id=?, image=?, main_image=? WHERE id=?',[data.product_id,data.image,data.main_image,id],(err,res)=>{
        if(err)
        {
            console.log("Error while updating")
            result(null,err)
        }
        else
        {
            console.log("success")
            result(null,{status:true,message:"UPDATED",id:res.id})
        }
    })

}


//Delete model
Product_gallery.deleteProduct_gallery = (id,result)=>{
    db.query('DELETE FROM product_gallery WHERE id=?',[id],(err,res)=>{
        if(err)
        {
            console.log("Unable to delete")
            result(null,err)
        }
        else
        {
            console.log("Deleted successfully")
           result(null,res)
        }
    })
}
module.exports = Product_gallery