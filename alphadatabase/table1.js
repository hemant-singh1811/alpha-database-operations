// const { db,storage,firebase } = require('./dbconfig')
const  jsonformat1  = require("./operation_/rec_dh_team"); 
const Airtable = require('airtable')
const jsonformatarr=require("./json1")
const https=require("https");
const fs=require("fs");
const pdf2base64 = require('pdf-to-base64');
const { ref, uploadBytes,uploadString, listAll, getDownloadURL }=require("firebase/storage");
const { json } = require('stream/consumers');
const { getimgurl, getpdfurl, db } = require("./dbconfig1")

console.log("size : ",jsonformatarr.length);

var i = 0;

async function gettables(id) {

    var Db_collection = 'Base';

    const baseRef = db.collection(Db_collection);
    const datasnap = await baseRef.get();

    let tables = [];
    
    datasnap.forEach(doc => { 

        if(doc.id==id && doc.data().tables)
            tables=doc.data().tables;
    })

    return tables;
}

async function addintoarr(arr,el){

    let  mySet1 = new Set();

    arr.forEach((el)=>{
        mySet1.add(el);
    })

    mySet1.add(el);

    let ans=[];

    for (const item of mySet1) {
        // console.log("tem :" ,item);
        ans.push(item);
      }

  return ans;
}

// let arr=["dadf"];
// addintoarr(arr,"hemant").then(data => console.log(data))


async function addtabletobase(baseid, tableid) { 
    
    let tables=await gettables(baseid);
    tables=await addintoarr(tables,tableid);

        // console.log("tables: " ,tables);

    let data={
        metadata:baseid,
        tables:tables,
    }

    await db.doc(`Base/${baseid}/`).set(data).then(res => {
        // console.log("table adeed succesfuly into base");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}


async function adddatatofirebase(jsonformat) {

    let base_id = jsonformat.base_id;
    let table_id = jsonformat.table_id;
    let table_name=jsonformat.field_name;
    let data = jsonformat.data;
    
    let data1 = {
        table_name: table_name,
        base_id: base_id,
        table_id: table_id,

    }

    for (let i = 0; i < data.length; i++) {

        let model = data[i];

        let field_id = model.field_id; 
        let field_type= model.field_type;
        let json_field_type= model.json_field_type;
        let field_description=model.field_description;

        let modeldata={
            field_id : field_id,
            field_type: field_type,
            json_field_type: json_field_type,
            field_description:field_description,
        }

        await setmodeloftable(table_id, field_id, model) //set model of an each column of table

    }
    
    await setmetadataoftable(table_id, data1) //metadata of and table
    await addtabletobase(base_id, table_id)
    i=0;
    console.log("table : ",table_name);
    await getdatafromAT(base_id,table_id,jsonformat, ATcallback) 
}

async function ATcallback(i){
    console.log("total entries : ",i);
}

async function getdatafromAT(baseid, tabid,jsonformat, ATcallback) {
    
    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base(baseid);

    await base(tabid).select({
        // maxRecords: 1,
        view: "Hemant's Grid"

    }).eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (record) {
            let rec_id = record.id;
            let tabledata = record.fields;

            await pushdata(tabledata,baseid, tabid,jsonformat, ATcallback,rec_id)

        });
        fetchNextPage()
        
    }, function done(err) {
        if (err) { console.error(err); }
    })
      await  ATcallback(i)
}

async function pushdata(tabledata,baseid, tabid,jsonformat, ATcallback,rec_id){
    i++;
    let tablemodel = jsonformat.data;

    let processdata={

    }
    
    for (let j = 0; j < tablemodel.length; j++) {

        let model = tablemodel[j];

        let field_name=model.field_name;
        
        let val= tabledata[field_name] || "" ;

        let x={}

        // console.log("field_name: " , field_name);
        // if(field_name=='Policy Agreement'){
        // console.log("name  " + field_name);
        // console.log("val : ",val);
        // }
        
        if (model.field_type == 'image') {

            let size = val.length;

            for (let k = 0; k < size; k++) {

                if (val[k].hasOwnProperty('url')) {

                   if (val[k].type == 'image/png') {

                        let oldurl = val[k]['url'];

                        // val[k]['url'] =await getimgurl(oldurl,res);

                    } else if (val[k].type == 'application/pdf') {

                        let oldurl = val[k]['url'];

                        // console.log("type : ", val[k]);

                        // val[k]['url'] = await getpdfurl(oldurl,res);
                        
                    }
                    // console.log("rec : ",id);
                }
            } 
        }

        x['' + field_name] = val;

        processdata[field_name]=val;   
    }  

    await adddataoftable(tabid, rec_id, processdata)

}

async function datalog(table_id){
    let datalog={
        "Created time":"",
        "Last modified time":"",
        "Created by":"",
        "Last modified by":"",
        "Last modified field":"",

    }

    await db.doc(`Tabledata/${table_id}/`).set(datalog).then(res => {
        console.log("data added succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}

// async function tablecreate(tableid,)

async function adddataoftable(table_id, rec_id,data) {

    await db.doc(`Tabledata/${table_id}/data/${rec_id}/`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

async function setmodeloftable(id, field_id, data) {
    await db.doc(`Tablemodel/${id}/model/${field_id}/`).set(data).then(res => {
        // console.log("model adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}


async function setmetadataoftable(id, data) {
    await db.doc(`Tablemetadata/${id}/`).set(data).then(res => {
        // console.log("meta data of table adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}

async function adddata21(){
for(let i=0; i<jsonformatarr.length;i++){
    
    let record=jsonformatarr[i];
    // console.log("record: ",record)
    let table_id=record.table_id;

    // if(table_id=='tblenNgLeBDU4bSjX'){
        // console.log("base_id: ",record.base_id);
        // datalog(record.table_id);
        await adddatatofirebase(record)
    // }
}
}

adddata21()


async function getdatalog(table_id) {

    let path = `Tabledata/`;

    const Ref = db.collection(path);
    const snapshot = await Ref.get();

    let datalog = [];

    await snapshot.forEach(doc => {
         if(doc.id === table_id){
          let data=doc.data()
         datalog.push(data);
         }
    })

    console.log(datalog);

    return datalog;

}

// getdatalog("tblBpaWRn0D4qhbPD")

async function removefield(table_id, field_id) {

    await db.doc(`Tablemodel/${table_id}/model/${field_id}/`).delete().then(res => {
        console.log("field added succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

// removefield("tbl4AlOUezpUNRXtz","fldYCTZFO6O83iuLT");


async function uploads(url){

    const file = fs.createWriteStream("file.jpg");

    const request = https.get(url, function(response) {
        response.pipe(file);
    })

    var imageAsBase64 =fs.readFileSync('./file.jpg', 'base64');

    up(imageAsBase64,processResponse) 


}


function processResponse( response ) {
    console.log("res ",response);
    urii=response;
}

async function up(imageAsBase64,callback){
    // const imagesref=ref(storage,'imagesweb');

    // uploadString(imagesref,imageAsBase64,'base64').then(async (snapshot) => {
    //     console.log('Uploaded a blob or file!'); 

    //    await getDownloadURL(imagesref).then(url => {
    //       console.log(url);
    //       callback(url);
    //   }) 
    //   });

    // const ref=storage.ref();
    // const s=storage.ref;
    const ref = firebase.storage().ref().child('some-child');

    //   s.putString(imageAsBase64).then((snapshot) => {

    //     console.log('Uploaded a raw string!');


    //   });

}

let str="https://v5.airtableusercontent.com/v1/15/15/1678593600000/hS8eeX1nFn8_3Di6xeRwmQ/URosAOaxlWDhHIzE7Dop8LEBAxuvNk9lxk66wf7DAGXFfQJg_X_g9PFr9bSxjqSuHzELPYMxxW_zgCY-wvDa_hYfh1LFM5mm25Ydg3Eu2ws/brd7gREl6Lc1yCzTFnlosOioGUWbY4Ql6qRgNyWUKEc";

let str1="https://v5.airtableusercontent.com/v1/15/15/1678593600000/fkoE39AdOLw0fu5elThUTg/4tT8a8dizr2oBxFUEIG0Vx-NpUSRyaq6AiKQZWDT7INNSyk6UUDZyfHLh5q4OlRJy1d-4ehISFBx5XYuY-hqO0aK15gJWJmoDpJrUPvg3t8/tKEd46Rxc_uoqTBzfJax5sVTpq5louc9yHIGpSBBCf4";


// uploads(str1);
 
// pdf2base64(str)
//     .then(
//         (response) => {
//             console.log(response); //cGF0aC90by9maWxlLmpwZw==
//             up(response,processResponse)
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error); //Exepection error....
//         }
//     )

async function res(url,data){
    console.log("got the url : ",url);

}