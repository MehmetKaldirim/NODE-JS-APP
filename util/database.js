const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db; 

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://math:Pp11223344-@cluster0.89wbtaz.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db()
      callback()
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = ()=>{
  if(_db){
    return _db;
  }
  throw 'No database found'
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;