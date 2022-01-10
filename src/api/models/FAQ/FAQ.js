
// import database
var db = require('../../database/database')
//create model/schema for table
var FAQ = function(FAQ) {
    this.id = FAQ.id
    this.category = FAQ.category
    this.question = FAQ.question
    this.answer = FAQ.answer
}

//Get product model
FAQ.getResult = (result) => {
    db.query('SELECT * from faq', (err,res)=>{
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
FAQ.getFAQByID=(id,result)=>{
    db.query('SELECT * from faq WHERE id=?',id,(err,res)=>{
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

//Get FAQ by Category
FAQ.getFAQByCategory=(id,result)=>{
    db.query('SELECT * from faq WHERE category=?',id,(err,res)=>{
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
FAQ.createFAQ=(EmpReqData, result)=>{
    db.query('INSERT into faq SET ?', EmpReqData,(err,res)=>{
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
FAQ.updateProduct=(id,data,result)=>{
    db.query('UPDATE faq SET name=? WHERE id=?',[data.name,id],(err,res)=>{
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
FAQ.deleteFAQ = (id,result)=>{
    db.query('DELETE FROM faq WHERE id=?',[id],(err,res)=>{
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
module.exports = FAQ