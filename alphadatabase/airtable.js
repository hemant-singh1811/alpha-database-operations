const Airtable = require('airtable')
const { db } = require('./dbconfig')

getdatafromAT("appTAdSTyVQUZeoDG","tbll9LOG6W5c3UuTf","Recruitment - DH Team")

async function getdatafromAT(baseid, tabid, tabname) {
    let i = 0;
    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base(baseid);

    await base(tabid).select({
        maxRecords: 1,
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
            console.log("id : ",id);
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