
// import database
var db = require('../../database/database')
//create model/schema for table
var Flyers = function(Flyers) {
    this.id = Flyers.id
    this.category = Flyers.category
    this.question = Flyers.question
    this.answer = Flyers.answer
}

//Get product model
Flyers.getResult = (result) => {
    db.query('SELECT * from flayer_order', (err,res)=>{
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
Flyers.getFlyersByID=(id,result)=>{
    db.query('SELECT * from flayer_order WHERE owner_id=?',id,(err,res)=>{
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
Flyers.createFlyers=(EmpReqData, result)=>{
    db.query('INSERT into flayer_order SET ?', EmpReqData,(err,res)=>{
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
Flyers.updateProduct=(id,data,result)=>{
    db.query('UPDATE flayer_order SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
Flyers.deleteFlyers = (id,result)=>{
    db.query('DELETE FROM flayer_order WHERE id=?',[id],(err,res)=>{
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
module.exports = Flyers