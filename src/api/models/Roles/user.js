
// import database
var db = require('../../database/database')
//create model/schema for table
var User = function(User) {
    this.id = User.id
    this.name = User.name
}

//Get User model
User.getResult = (result) => {
    db.query('SELECT * from users', (err,res)=>{
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

//Get User by ID model
User.getUserByID=(id,result)=>{
    db.query('SELECT * from users WHERE id=?',id,(err,res)=>{
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

//Role type user 
User.getUserByType=(id,result)=>{
    db.query('SELECT * from users WHERE role=?',id,(err,res)=>{
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

//Role type user 
// User.getUserByTypeID=(role,id,result)=>{
//     db.query('SELECT * from users WHERE role=? AND id=?',role,id,(err,res)=>{
//         if(err)
//         {
//             console.log("error while fetching")
//             result(null,err)

//         }
//         else{
//             console.log("selected by ID")
//             result(null,res)
//         }
//     })
// }

//Create model
User.createUser=(EmpReqData, result)=>{
    db.query('INSERT into users SET ?', EmpReqData,(err,res)=>{
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
User.updateUser=(id,data,result)=>{
    db.query('UPDATE users SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
User.deleteUser = (id,result)=>{
    db.query('DELETE FROM users WHERE id=?',[id],(err,res)=>{
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
module.exports = User