var admin = require("firebase-admin");

//for alphadatabase
var serviceAccount = require(__dirname+'/Serviceaccount.json');

//for alphadatabase
const app=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://alphadatabase-6609c-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db=admin.firestore();

module.exports={db}