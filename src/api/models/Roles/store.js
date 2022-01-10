
// import database
var db = require('../../database/database')
//create model/schema for table
var Store = function(Store) {
    this.id = Store.id
    this.name = Store.name
}

//Get Store model
Store.getResult = (result) => {
    db.query('SELECT * from storeDetails', (err,res)=>{
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

//Get Store by ID model
Store.getStoreByID=(id,result)=>{
    db.query('SELECT * from storeDetails WHERE id=?',id,(err,res)=>{
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

//Role type Store 
Store.getStoreByType=(id,result)=>{
    db.query('SELECT * from storeDetails WHERE owner_id=?',id,(err,res)=>{
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
Store.createStore=(EmpReqData, result)=>{
    db.query('INSERT into storeDetails SET ?', EmpReqData,(err,res)=>{
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
Store.updateStore=(id,data,result)=>{
    db.query('UPDATE storeDetails SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
Store.deleteStore = (id,result)=>{
    db.query('DELETE FROM storeDetails WHERE owner_id=?',[id],(err,res)=>{
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
module.exports = Store