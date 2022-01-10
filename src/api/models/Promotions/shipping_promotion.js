
// import database
var db = require('../../database/database')
//create model/schema for table
var Shipping_promotion = function(Shipping_promotion) {
    this.id = Shipping_promotion.id
    this.user_id = Shipping_promotion.user_id
    this.promotion_name = Shipping_promotion.promotion_name
    this.type = Shipping_promotion.type
    this.starting_time = Shipping_promotion.starting_time
    this.ending_time = Shipping_promotion.ending_time
    this.min_price = Shipping_promotion.min_price
    this.delivery_type = Shipping_promotion.delivery_type
    this.region = Shipping_promotion.region
    this.products = Shipping_promotion.products
    this.status = Shipping_promotion.status
    
}

//Get product model
Shipping_promotion.getResult = (result) => {
    db.query('SELECT * from free_shipping_promotion', (err,res)=>{
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
Shipping_promotion.getShipping_promotionByID=(id,result)=>{
    db.query('SELECT * from free_shipping_promotion WHERE owner_id=?',id,(err,res)=>{
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
Shipping_promotion.createShipping_promotion=(EmpReqData, result)=>{
    db.query('INSERT into free_shipping_promotion SET ?', EmpReqData,(err,res)=>{
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
Shipping_promotion.updateShipping_promotion=(id,data,result)=>{
    db.query('UPDATE free_shipping_promotion SET promotion_name=? WHERE id=?',[data.name,id],(err,res)=>{
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
Shipping_promotion.deleteShipping_promotion = (id,result)=>{
    db.query('DELETE FROM free_shipping_promotion WHERE id=?',[id],(err,res)=>{
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
module.exports = Shipping_promotion