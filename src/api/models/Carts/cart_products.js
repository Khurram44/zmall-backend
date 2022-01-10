
// import database
var db = require('../../database/database')
//create model/schema for table
var CartProducts = function(CartProducts) {
    this.id = CartProducts.id
    this.name = CartProducts.name
}

//Get CartProducts model
CartProducts.getResult = (result) => {
    db.query('SELECT * from cart_products', (err,res)=>{
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

//Get CartProducts by ID model
CartProducts.getCartProductsByID=(id,result)=>{
    db.query('SELECT * from cart_products WHERE id=?',id,(err,res)=>{
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

//GET cart by userID
CartProducts.getCartProductsByUserID=(id,result)=>{
    db.query('SELECT * from cart_products WHERE user_id=?',id,(err,res)=>{
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
CartProducts.createCartProducts=(EmpReqData, result)=>{
    db.query('INSERT into cart_products SET ?', EmpReqData,(err,res)=>{
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
CartProducts.updateCartProducts=(id,data,result)=>{
    db.query('UPDATE cart_products SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
CartProducts.deleteCartProducts = (id,result)=>{
    db.query('DELETE FROM cart_products WHERE id=?',[id],(err,res)=>{
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
module.exports = CartProducts