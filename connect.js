const {MongoClient}  = require("mongodb");


module.exports = {
    selectedDb: {},
    async connect(){
        try{
            // const client = await MongoClient.connect("mongodb://localhost:27017");
            const client = await MongoClient.connect(process.env.MONGO_URL);
            this.selectedDb = client.db("WD33db");
            console.log(this.selectedDb);
        }catch(err){
            console.log(err);
        }
    }
}