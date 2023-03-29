const { db } = require('./dbconfig')
const { jsonformat } = require("./operation_/rec_dh_team");
const firebase = require('firebase-admin')
const Airtable = require('airtable')




async function addtabletobase(collection_name, baseid, tableid) {
    console.log(`${collection_name}/${baseid}`)
    await db.doc(`${collection_name}/${baseid}/tables/${tableid}`).set({}).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}

async function addtabletobase(baseid) {
    let collection_name ="base";
    
    let data={
        metadata:metadataid,
        tables:''
    }

    await db.doc(`${collection_name}/${baseid}/tables/${tableid}`).set({}).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}

async function addmetadata(metadataid,data){
    await db.doc(`metadata/${metadataid}/`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}


let baseid = jsonformat.base_id;
let tableid = jsonformat.table_id;
let table_name = jsonformat.table_name;


let data = jsonformat.data;


async function adddatatofirebase() {

    let base_id = jsonformat.base_id;
    let table_id = jsonformat.table_id;
    let table_name=jsonformat.field_name;

    for (let i = 0; i < data.length; i++) {

        let model = data[i];

        let field_id = model.field_id;

        // console.log("model : ", model);
        // console.log("field_id : ", field_id);

        let data1 = {
            table_name: table_name,
            base_id: base_id,
            table_id: table_id,
        }

        await adddata(table_id, field_id, model)
        await adddata2(table_id, data1)
        await addtabletobase("base", base_id, table_id)



    }
    await getdatafromAT(base_id,table_id);

}

async function getdatafromAT(baseid, tabid) {
    let i = 0;
    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base(baseid);

    await base(tabid).select({
        // maxRecords: 1,
        view: "Hemant's Grid"

    }).eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (record) {
            let rec_id = record.id;
            let data12 = record.fields;
            i++;

            let data1={

            }
            // console.log("data : ",data12);

            for (let i = 0; i < data.length; i++) {

                let model = data[i];

                let field_name=model.field_name;
                // 'Name'

                // console.log(field_name);
                // console.log(field_name," : " ,data12[field_name] );


                let val=data12[field_name] || "" ;

                let x={
                }

                x['' + field_name] = val;

                // console.log("x : ",x);

                data1[field_name]=val;
                    
                 
            }

            // console.log("data1 :",data1);

            // console.log(data1.License);


            
            // let data1 = {
            //     "Address": data["Address"] || "",
            //     "BMC-85 Expiration": data["BMC-85 Expiration"] || "",
            //     "Bank Name": data["Company"] || "",
            //     "Business Expiration": data["Business Expiration"] || "",
            //     "EIN #": data["EIN #"] || "",
            //     "MC #": data["MC #"] || "",
            //     "Name": data["Name"] || "",
            //     "Routing": data["Routing"] || "",

            //     "SUI Number": data["SUI Number"] || "",
            //     "Status": data["Status"] || "",
            //     "UBI": data["UBI"] || "",
            // }

            // console.log(data) 
            console.log(rec_id); 
            await adddata34(tabid, rec_id, data1)

        });
        console.log("total : ", i);
        fetchNextPage()
    }, function done(err) {
        if (err) { console.error(err); }
    });
}

async function adddata34(table_id, rec_id,data) {

    await db.doc(`table/${table_id}/data/${rec_id}/`).set(data).then(res => {
        // console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

async function adddata(id, field_id, data) {
    await db.doc(`table/${id}/model/${field_id}/`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}

async function adddata2(id, data) {
    await db.doc(`table/${id}/metadata/data`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })
}


adddatatofirebase()




