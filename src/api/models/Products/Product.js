
// import database
var db = require('../../database/database')
//create model/schema for table
var Product = function(product) {
    this.id = product.id
    this.title = product.title
    this.slug=product.slug
    this.images=product.images
    this.quantity=product.quantity
    this.category=product.category
    this.sub_category_id=product.sub_category_id
    this.brand_id=product.brand_id
    this.type_id=product.type_id
    this.availability=product.availability
    this.description=product.description
    this.price=product.price
    this.status=product.status
    this.discount_type=product.discount_type
    this.allow_sale=product.allow_sale
    this.is_deleted=product.is_deleted
    this.added_on=product.added_on
    this.added_by=product.added_by
}

//Get product model
Product.getResult = (result) => {
    db.query('SELECT * from products', (err,res)=>{
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

//Get product by ID model
Product.getProductByID=(id,result)=>{
    db.query('SELECT * from products WHERE id=?',id,(err,res)=>{
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

//Create model
Product.createProduct=(EmpReqData, result)=>{
    db.query('INSERT into products SET ?', EmpReqData,(err,res)=>{
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
Product.updateProduct=(id,data,result)=>{
      // this.id = product.id this.title = product.title  this.slug=product.slug  this.images=product.images
    // this.quantity=product.quantity this.category=product.category this.sub_category_id=product.sub_category_id
    // this.brand_id=product.brand_id this.type_id=product.type_id this.availability=product.availability
    // this.description=product.description this.price=product.price this.status=product.status this.discount_type=product.discount_type
    // this.allow_sale=product.allow_sale this.is_deleted=product.is_deleted this.added_on=product.added_on
    // this.added_by=product.added_by
  
    db.query('UPDATE products SET title=?, slug=?, images=?, quantity=?, category=?, sub_category_id=?, brand_id=?,type_id=?, availability=?, description=?,  price=?, status=?, discount_type=?, allow_sale=?, is_deleted=?, added_on=?, added_by=? WHERE id=?',
    [data.title,data.slug,data.images,data.quantity,data.category,data.sub_category_id,data.brand_id,data.type_id,data.availability,data.description,data.price,data.status,data.discount_type,data.allow_sale,data.is_deleted,data.added_on,data.added_by,id],(err,res)=>{
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
Product.deleteProduct = (id,result)=>{
    db.query('DELETE FROM products WHERE id=?',[id],(err,res)=>{
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
module.exports = Product