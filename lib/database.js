const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

let cachedDB = null;

export const connectToDatabase = async () => {
    if(cachedDB) return Promise.resolve(cachedDB);
    
    return MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((client) => {
        let db = client.db(dbName);
        cachedDB = db;
        return cachedDB;
    }).catch((err) => {
        console.log(err);
    })
}