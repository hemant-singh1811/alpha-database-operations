var firebase = require("firebase-admin");

//for alphadatabase
var serviceAccount = require(__dirname+'/Serviceaccount.json');

//for alphadatabase
const app=firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://alphadatabase-6609c-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db=firebase.firestore();

const storage=firebase.storage();

// const s=storage.ref;

// .ref();

module.exports={db,firebase,storage}