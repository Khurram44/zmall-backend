
// import database
var db = require('../../database/database')
//create model/schema for table
var StoreFinance = function(StoreFinance) {
    this.id = StoreFinance.id
    this.name = StoreFinance.name
}

//Get StoreFinance model
StoreFinance.getResult = (result) => {
    db.query('SELECT * from financial_Details_store', (err,res)=>{
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

//Get StoreFinance by ID model
StoreFinance.getStoreFinanceByID=(id,result)=>{
    db.query('SELECT * from financial_Details_store WHERE id=?',id,(err,res)=>{
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

//Role type StoreFinance 
StoreFinance.getStoreFinanceByStoreID=(id,result)=>{
    db.query('SELECT * from financial_Details_store WHERE store_id=?',id,(err,res)=>{
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

//get data by userID
StoreFinance.getStoreFinanceByUserID=(id,result)=>{
    db.query('SELECT * from financial_Details_store WHERE user_id=?',id,(err,res)=>{
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
StoreFinance.createStoreFinance=(EmpReqData, result)=>{
    db.query('INSERT into financial_Details_store SET ?', EmpReqData,(err,res)=>{
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
StoreFinance.updateStoreFinance=(id,data,result)=>{
    db.query('UPDATE financial_Details_store SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
StoreFinance.deleteStoreFinance = (id,result)=>{
    db.query('DELETE FROM financial_Details_store WHERE owner_id=?',[id],(err,res)=>{
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
module.exports = StoreFinance