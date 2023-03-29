let Airtable = require("airtable")
let { Writable, Readable, Transform, pipeline } = require("stream")
const { db } = require("./db.config")
const fs = require('fs');
const { log } = require("console");

let secretKey = "keyHJklfBm0hHBW48";

let baseid = "appTAdSTyVQUZeoDG";

// https://airtable.com/appTAdSTyVQUZeoDG/tblRcTHdXYkenFEeO/viwQbF0W4gKMjzyYI?blocks=hide

let airtablebase = new Airtable({ apiKey: secretKey }).base(baseid);

let section = 'Claims'

// let basereftoclaims = airtablebase(section);

// console.log(basereftoclaims);

// console.log(basereftoclaims.name);

let i = 0;

let data = [];

// async function calltingtoairtable(Numberofrecordswantofetch) {
//     let data = basereftoclaims.select(
//         { maxRecords: Numberofrecordswantofetch, }).eachPage((data, fetchNextPage, error) => {
//             data.forEach((response) => {
//                 // console.log("data: ",response); 
//                 data.push(response);
//                 i++;
//             })

//             fetchNextPage();
//         });
// }

// calltingtoairtable(100)

// console.log("totol : ",data.length);

// data.firstPage(function (data) {

//     console.log("data: ", data);

// });

// console.log("got the success message");

let collection = 'Claims';

const outputWritableStream = fs.createWriteStream("output.json");
 

async function success(collection) {
    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base('appTAdSTyVQUZeoDG');
  
    await base(collection).select({
        maxRecords: 1,
        view: "Grid view"
    }).eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (record) {
            let id = record.id;
            let data = record.fields;
            i++; 
            console.log("id : ",id);
            let data1=JSON.stringify(data);
            // data=JSON.parse(data); 
            // console.log("data : ",data1);
        });
        fetchNextPage()
        console.log("i : ",i);
    }, function done(err) {
        if (err) { console.error(err); }
    }); 
}


async function getdatafromAT(baseid,tabid,tabname){ 
    let i=0;
    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base(baseid);
  
    await base(tabid).select({
        // maxRecords: 1,
        // view: "Grid view"
    }).eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (record) {
            let id = record.id;
            let data = record.fields;
            i++; 
   
            let data1={
                "Name":data["Name"]|| "",
                "Phone": data["Phone"]|| "",
                "Email":data["Email"]|| "",
                "Company": data["Company"] || "",
                "Medical": data["Medical"] || "",
                "DOT Results":data["DOT Results"] || "",
                "Note": data["Note"] || "", 
                "Insurance": data["Insurance"]|| "",
                "Status": data["Status"]|| "",
                "Drug Test": data["Drug Test"] || "",
                "Last Modified": data["Last Modified"]|| "",
                "License":data["License"]|| "",
                "Last Modified":data["Last Modified"]|| "",
                "Created Time":data["Created Time"]|| "",
            }

            console.log("data : ",data);
            // console.log("data1 : ",data1);

            let collection_name=tabname;

            // await adddata(collection_name,id,data1)

        });
        console.log(`getting data from ${tabname}`);
        console.log("total : ",i);
        fetchNextPage() 
    }, function done(err) {
        if (err) { console.error(err); }
    }); 
}

// success(collection) 

async function adddata(collection_name,id, data) {

    await db.doc(`${collection_name}test/${id}`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}
 

// creating container 

// write data container 
// reading data container 
// updating data container 
    //   -- data                        // minimn
    //   ---linkrecord
    //   ---field 
    //   
// seaching 

 

async function getdata(collection) {

    const Trucks = db.collection(collection);
    const snapshot = await Trucks.get();

    let dbdata = [];

    await snapshot.forEach(doc => {

        let obj = {
            id: doc.id,
            data: doc.data()
        }
        console.log("data : ",obj);
        dbdata.push(obj);
    })

    // console.log(dbdata);
    // res.send(dbdata);
}

// getdata('new_createdtest');


async function erasedata(collection) {

    db.collection(collection)
        .get()
        .then(res => {
            res.forEach(element => {
                element.ref.delete();
            });
        });

}



// erasedata(collection)
// getdata(collection)

// adddata();


module.exports={getdatafromAT}