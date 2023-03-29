const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');
var serviceAccount = require(__dirname + '/Serviceaccount.json');
const fs = require('fs')
const https = require('https');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://alphalionusercontent.appspot.com',
    databaseURL: "https://alphadatabase-6609c-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db=admin.firestore();

const bucket = admin.storage().bucket("gs://alphalionusercontent");

  function getpdfurl(url,res) {
    return new Promise(async function(resolve,reject){

    // var file1 = fs.createWriteStream("./file12.pdf"); 

    // console.log("given url : ",url);

    // try{
    // const request =await https.get(url, function (response) {
    //     response.pipe(file1);
    // })
    // }catch(err){
    //     reject('err')
    // }

    // var imageAsBase64 =await fs.readFileSync('./file12.pdf', 'base64');

    // console.log("64base : ",imageAsBase64);

    // const buffer =await Buffer.from(imageAsBase64, 'base64');

    const fileName = `${Date.now()}-${Math.floor(Math.random() * 10000000)}.pdf`;

    // const file = bucket.file(fileName);

    const filePath = './file12.pdf';
    const fileBuffer = fs.readFileSync(filePath);

    const file = bucket.file(fileName);


   await file.save(fileBuffer, {
        metadata: {
            contentType: 'application/pdf'
            
        }
        [{"origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
        }]
    })
        .then(async () => {
            // console.log(`Image uploaded successfully: ${fileName}`);

            // Make the uploaded file public
            return await file.makePublic();
        })
        .then(async () => {
            console.log(`File ${fileName} is now public`);

            // Get the public URL of the uploaded file
            
            return await file.publicUrl();
        })
        .then((publicUrl) => {
            console.log(`Public URL: ${publicUrl}`);
            // res(publicUrl)

            resolve(publicUrl.toString());
        })
        .catch((error) => {
            // console.error(`Error uploading image: ${error}`);
            reject('error')
        });
    })
}

  function getimgurl(url,res) {
    return new Promise(async function(resolve,reject){
    var file1 =  fs.createWriteStream("file.jpg"); 
    
    try{
    const request =  https.get(url, function (response) {
        response.pipe(file1);
    })
    }catch(err){
        reject('err')
    }

    var imageAsBase64 = fs.readFileSync('./file.jpg', 'base64');

    const buffer = Buffer.from(imageAsBase64, 'base64');

    const fileName = `${Date.now()}-${Math.floor(Math.random() * 10000000)}.jpg`;

    const file =await bucket.file(fileName);

   await file.save(buffer, {
        metadata: {
            contentType: 'image/jpeg'
        }
    })
        .then(async () => {
            // console.log(`Image uploaded successfully: ${fileName}`);

            // Make the uploaded file public
            return await file.makePublic();
        })
        .then(async () => {
            console.log(`File ${fileName} is now public`);

            // Get the public URL of the uploaded file
            return await file.publicUrl();
        })
        .then(async (publicUrl) => {
            // console.log(`Public URL: ${publicUrl}`);
            // res(publicUrl)
            resolve(publicUrl.toString());
        })
        .catch((error) => {
            console.error(`Error uploading image: ${error}`);
            reject('error');
        });
    })
}

let imgurl='https://v5.airtableusercontent.com/v1/15/15/1678824000000/nEXbapLv6Nc1VimtkhZr2Q/y29kB3kPmM4re751rouaMTfyXaqvqXC0sM7cCVcD7PUs137ckFB6dH_wZgWedbOKqu4hI4o3PfRXiiMnkRntXg/9uKlQhz0_kapoLfCq1NjGV_PKC8IfMFFH3cqbGbUr4Q';
let pdfurl="https://v5.airtableusercontent.com/v1/15/15/1678939200000/OQLGcbjrgVb7GnHDWD8Uww/HFQrAfsGJHQi-MM5wAcGuRdRaIAeVDdN4fp53aMHeq5cEgbuAx_SwXL8bCuWFtUzzJ6JlnRLSbbIWkjeEW9hMeolnwAhyxoZjbs-Mb3NPn0/-YuqG7l2Tgdxo8Uv8_FKH0npliXRz9rCuVALfHthbDo";



// getimgurl(imgurl).then((url)=>{
//     console.log("imgurl : ",url);
// })

// getpdfurl(pdfurl).then((url)=>{
//     console.log("pdfurl : ",url);
// })

module.exports={
   db, getimgurl,getpdfurl,admin
}

