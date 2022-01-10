//import database
var db = require("../../database/database")

//create schema for Orders table 
var Orders = function (Orders){
this.id = Orders.id;
this.order_no= Orders.order_no;
this.first_name=Orders.first_name;
this.last_name=Orders.last_name;
this.email = Orders.email;        
this.address=Orders.address;
this.country_id=Orders.country_id;   
this.state=Orders.state        
this.city=Orders.city         
this.zip_code=Orders.zip_code      
this.phone=Orders.phone;      
this.sub_total=Orders.sub_total
this.shipment_charges = Orders.shipment_charges      
this.grand_total=Orders.grand_total         
this.quantity=Orders.quantity              
this.payment_method = Orders.payment_method      
this.payment = Orders.payment           
this.status  = Orders.status              
this.reason  = Orders.reason;             
this.comment = Orders.comment;              
this.attachment=Orders.attachment;            
this.added_on = Orders.added_on;             
this.added_by  = Orders.added_by;         
this.temp_user_id = Orders.temp_user_id;           
this.tracking_no  = Orders.tracking_no;       
this.download_invoice=Orders.download_invoice;

}

//Get List
Orders.getResult =(result)=>{
    db.query('SELECT * from orders', (err,res)=>{
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
Orders.getOrdersByID=(id,result)=>{
    db.query('SELECT * from orders WHERE id=?',id,(err,res)=>{
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
Orders.createOrders=(EmpReqData, result)=>{
    db.query('INSERT into orders SET ?', EmpReqData,(err,res)=>{
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
Orders.deleteOrders=(id,result)=>{
    db.query('DELETE FROM orders WHERE id=?',[id],(err,res)=>{
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


//Update Orders

Orders.updateOrders=(id,data,result)=>{
    db.query('UPDATE Orders SET name=? , image=? , module_id=? , parent_id=? , status=? , slug=? , is_deleted=?, added_on=?, added_by=? WHERE id=?',[data.name,data.image,data.module_id,data.parent_id,data.status,data.slug,data.is_deleted,data.added_on,data.added_by,id],(err,res)=>{
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


module.exports = Orders