
// import database
var db = require('../../database/database')
//create model/schema for table
var Payout = function(Payout) {
    this.id = Payout.id
    this.name = Payout.name
}

//Get Payout model
Payout.getResult = (result) => {
    db.query('SELECT * from payout_history', (err,res)=>{
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

//Get Payout by ID model
Payout.getPayoutByID=(id,result)=>{
    db.query('SELECT * from payout_history WHERE user_id=?',id,(err,res)=>{
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
Payout.createPayout=(EmpReqData, result)=>{
    db.query('INSERT into payout_history SET ?', EmpReqData,(err,res)=>{
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
Payout.updatePayout=(id,data,result)=>{
    db.query('UPDATE payout_history SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
Payout.deletePayout = (id,result)=>{
    db.query('DELETE FROM payout_history WHERE id=?',[id],(err,res)=>{
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
module.exports = Payout