
// import database
var db = require('../../database/database')
//create model/schema for table
var StoreFollowed = function(StoreFollowed) {
    this.id = StoreFollowed.id
    this.name = StoreFollowed.name
}

//Get StoreFollowed model
StoreFollowed.getResult = (result) => {
    db.query('SELECT * from followed_stores', (err,res)=>{
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

//Get StoreFollowed by ID model
StoreFollowed.getStoreFollowedByID=(id,result)=>{
    db.query('SELECT * from followed_stores WHERE id=?',id,(err,res)=>{
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

//Role type StoreFollowed 
StoreFollowed.getStoreFollowedByStoreID=(id,result)=>{
    db.query('SELECT * from followed_stores WHERE vendor_user_id=?',id,(err,res)=>{
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
StoreFollowed.getStoreFollowedByUserID=(id,result)=>{
    db.query('SELECT * from followed_stores WHERE followed_by=?',id,(err,res)=>{
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
StoreFollowed.createStoreFollowed=(EmpReqData, result)=>{
    db.query('INSERT into followed_stores SET ?', EmpReqData,(err,res)=>{
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
StoreFollowed.updateStoreFollowed=(id,data,result)=>{
    db.query('UPDATE followed_stores SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
StoreFollowed.deleteStoreFollowed = (id,result)=>{
    db.query('DELETE FROM followed_stores WHERE id=?',[id],(err,res)=>{
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
module.exports = StoreFollowed