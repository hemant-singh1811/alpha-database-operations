const Airtable = require('airtable')

async function callAT(baseid,tabid){

    var base = new Airtable({ apiKey: 'keyHJklfBm0hHBW48' }).base(baseid);

    await base(tabid).select({
        maxRecords: 1,
        view: "Hemant's Grid"

    }).eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (record) {
            let rec_id = record.id;
            let tabledata = record.fields;

             console.log(tabledata);
        });
        // fetchNextPage()
        
    }, function done(err) {
        if (err) { console.error(err); }
    })
}

callAT("appTAdSTyVQUZeoDG","tblDIgzUqlXHQjixQ")