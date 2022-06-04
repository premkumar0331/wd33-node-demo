const { ObjectId } = require("mongodb");
const mongo = require ("../connect");

module.exports.getEmployees = (req,res,next)=>{
    res.send({
        name: "premK",
        age:"34"
    })
}

module.exports.createEmployees = async(req,res,next)=>{
    try{
    const insertedResponse = await mongo.selectedDb.collection("employees").insertOne(req.body.employee);
    res.send(insertedResponse);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.updateEmployees = async (req,res,next)=>{
    try{
    const updatedData = await mongo.selectedDb.collection("employees").findOneAndUpate(
                        {_id:ObjectId(req.params.id)},
                        {$set:{...req.body.employee}});
        
    res.send(updatedData);
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.deleteEmployees = async (req,res,next)=>{
    try{
        const deletedData = await mongo.selectedDb.collection("employees").remove(
                            {_id:ObjectId(req.params.id)});
                res.send(deletedData);
        }catch(err){
            console.error(err);
            res.status(500).send(err);
        }
}