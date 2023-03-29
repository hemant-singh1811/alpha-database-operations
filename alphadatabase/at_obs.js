const Airtable = require('airtable')
const { db } = require('./dbconfig')


async function getdatafromAT(baseid, tabid, tabname) {
    let i = 0;
    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base(baseid);

    await base(tabid).select({
        // maxRecords: 1,
        // view: viewId

    }).eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (record) {
            let id = record.id;
            let data = record.fields;
            i++;


 

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
            console.log(data)
            //console.log(data)
            let collection_name = tabname;
            // await adddata(collection_name, id, data)

        });
        console.log(`getting data from ${tabname}`);
        console.log("total : ", i);
        fetchNextPage()
    }, function done(err) {
        if (err) { console.error(err); }
    });
}


async function adddata(collection_name, id, data) {
    console.log(`${collection_name}/${id}`)
    await db.doc(`${collection_name}/${id}`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

async function deleteData(collection_name) {
    db.collection(collection_name)
        .get()
        .then(res => {
            res.forEach(element => {
                element.ref.delete();
            });
        });
}


module.exports = {
    deleteData,
    getdatafromAT,


}


/**
 * truck_employee contract: ' '
 * ADP aCCOUNT ''
 */