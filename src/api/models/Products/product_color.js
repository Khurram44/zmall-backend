
// import database
var db = require('../../database/database')
//create model/schema for table
var Employee = function(employee) {
    this.id = employee.id
    this.name = employee.name
}

//Get product_color model
Employee.getResult = (result) => {
    db.query('SELECT * from product_color', (err,res)=>{
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

//Get product_color by ID model
Employee.getProduct_colorByID=(id,result)=>{
    db.query('SELECT * from product_color WHERE id=?',id,(err,res)=>{
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

//Get product color by ProductID
Employee.getproduct_colorByProductID=(id,result)=>{
    db.query('SELECT * from product_color WHERE product_id=?',id,(err,res)=>{
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
// Employee.createproduct_color=(EmpReqData, result)=>{
//     db.query('INSERT into product_color SET ?', EmpReqData,(err,res)=>{
//         if(err)
//         {
//             console.log(err)
//             result(null,{status:false, message:err})
//         }
//         else{
//             console.log("Inserted succcessfully")
//             result(null,{status:true,message:"Success"})
//         }
//     })

// }

//Update Model
// Employee.updateproduct_color=(id,data,result)=>{
//     db.query('UPDATE product_color SET name=? WHERE id=?',[data.name,id],(err,res)=>{
//         if(err)
//         {
//             console.log("Error while updating")
//             result(null,err)
//         }
//         else
//         {
//             console.log("success")
//             result(null,{status:true,message:"UPDATED",id:res.id})
//         }
//     })

// }


//Delete model
// Employee.deleteEmployee = (id,result)=>{
//     db.query('DELETE FROM product_color WHERE id=?',[id],(err,res)=>{
//         if(err)
//         {
//             console.log("Unable to delete")
//             result(null,err)
//         }
//         else
//         {
//             console.log("Deleted successfully")
//            result(null,res)
//         }
//     })
// }
module.exports = Employee