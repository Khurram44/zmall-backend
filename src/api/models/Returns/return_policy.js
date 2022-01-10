
// import database
var db = require('../../database/database')
//create model/schema for table
var return_policy = function(return_policy) {
    this.id = return_policy.id
    this.category = return_policy.category
    this.question = return_policy.question
    this.answer = return_policy.answer
}

//Get return_policy model
return_policy.getResult = (result) => {
    db.query('SELECT * from `return&refund`', (err,res)=>{
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

//Get return_policy by ID model
return_policy.getreturn_policyByID=(id,result)=>{
    db.query('SELECT * from `return&refund` WHERE id=?',id,(err,res)=>{
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

//Get return_policy by Category
return_policy.getreturn_policyByCategory=(category,result)=>{
    db.query('SELECT * from `return&refund` WHERE category=?',category,(err,res)=>{
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
return_policy.createreturn_policy=(EmpReqData, result)=>{
    db.query('INSERT into `return&refund` SET ?', EmpReqData,(err,res)=>{
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
return_policy.updatereturn_policy=(id,data,result)=>{
    db.query('UPDATE `return&refund` SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
return_policy.deletereturn_policy = (id,result)=>{
    db.query('DELETE FROM return&refund WHERE id=?',[id],(err,res)=>{
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
module.exports = return_policy