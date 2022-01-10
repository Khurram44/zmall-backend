//import database
var db = require("../../database/database")

//create schema for manage table 
var Manage = function (manage){
    this.id = manage.id;
    this.name= manage.name;
    this.image= manage.image;
    this.module_id = manage.module_id;
    this.parent_id = manage.parent_id;
    this.status = manage.status;
    this.slug = manage.slug;
    this.is_deleted=manage.is_deleted;
    this.added_on=manage.added_on;
    this.added_by=manage.added_by;

}

//Get List
Manage.getResult =(result)=>{
    db.query('SELECT * from manage', (err,res)=>{
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
Manage.getManageByID=(id,result)=>{
    db.query('SELECT * from manage WHERE module_id=?',id,(err,res)=>{
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
Manage.createProduct=(EmpReqData, result)=>{
    db.query('INSERT into manage SET ?', EmpReqData,(err,res)=>{
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
Manage.deleteProduct=(id,result)=>{
    db.query('DELETE FROM manage WHERE id=?',[id],(err,res)=>{
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


//Update product

Manage.updateProduct=(id,data,result)=>{
    db.query('UPDATE manage SET name=? , image=? , module_id=? , parent_id=? , status=? , slug=? , is_deleted=?, added_on=?, added_by=? WHERE id=?',[data.name,data.image,data.module_id,data.parent_id,data.status,data.slug,data.is_deleted,data.added_on,data.added_by,id],(err,res)=>{
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


module.exports = Manage