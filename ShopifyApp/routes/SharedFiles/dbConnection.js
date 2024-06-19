const { MongoClient } = require('mongodb');
var dbUrl = 'mongodb://localhost:27017';
const client = new MongoClient(dbUrl);


var mongodbConnectionDetails = {
    getConnectToCollection(collectionName, qtype, data) {
        getClientRef();
        const db = client.db("ShopifyApp");
        const collection = db.collection(collectionName);
        if (qtype == 'finduser') {
            console.log("req query");
            console.log({userName: data.userName});
            return collection.find({userName: data.userName}).toArray();
        } else if (qtype == 'insert') {
            return collection.insertOne(data);
        } else if (qtype == 'find') {
            return collection.find(data).toArray();
        }
    }
}
async function getClientRef() {
    await client.connect();
}

module.exports = mongodbConnectionDetails;