//import database
var db = require("../../database/database")

//create schema for Order_products table 
var Order_products = function (Order_products){
this.id = Order_products.id;
this.order_no= Order_products.order_no;
this.first_name=Order_products.first_name;
this.last_name=Order_products.last_name;
this.email = Order_products.email;        
this.address=Order_products.address;
this.country_id=Order_products.country_id;   
this.state=Order_products.state        
this.city=Order_products.city         
this.zip_code=Order_products.zip_code      
this.phone=Order_products.phone;      
this.sub_total=Order_products.sub_total
this.shipment_charges = Order_products.shipment_charges      
this.grand_total=Order_products.grand_total         
this.quantity=Order_products.quantity              
this.payment_method = Order_products.payment_method      
this.payment = Order_products.payment           
this.status  = Order_products.status              
this.reason  = Order_products.reason;             
this.comment = Order_products.comment;              
this.attachment=Order_products.attachment;            
this.added_on = Order_products.added_on;             
this.added_by  = Order_products.added_by;         
this.temp_user_id = Order_products.temp_user_id;           
this.tracking_no  = Order_products.tracking_no;       
this.download_invoice=Order_products.download_invoice;

}

//Get List
Order_products.getResult =(result)=>{
    db.query('SELECT * from order_products', (err,res)=>{
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


//Get by ID
Order_products.getOrder_productsByID=(id,result)=>{
    db.query('SELECT * from order_products WHERE id=?',id,(err,res)=>{
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

//get orderProducts by product ID
Order_products.getOrder_productsByProductID=(id,result)=>{
    db.query('SELECT * from order_products WHERE product_id=?',id,(err,res)=>{
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



//Create
Order_products.createOrder_products=(EmpReqData, result)=>{
    db.query('INSERT into order_products SET ?', EmpReqData,(err,res)=>{
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

//Delete
Order_products.deleteOrder_products=(id,result)=>{
    db.query('DELETE FROM order_products WHERE id=?',[id],(err,res)=>{
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


//Update Order_products

Order_products.updateOrder_products=(id,data,result)=>{
    db.query('UPDATE order_products SET name=? , image=? , module_id=? , parent_id=? , status=? , slug=? , is_deleted=?, added_on=?, added_by=? WHERE id=?',[data.name,data.image,data.module_id,data.parent_id,data.status,data.slug,data.is_deleted,data.added_on,data.added_by,id],(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,err)
        }
        else
        {
            console.log("success")
            result(null,{status:true,message:"Updated",id:res.id})
        }
    })

}


module.exports = Order_products