const { db } = require('./dbconfig')

async function get(data) {

    var Db_collection = 'Test';

    let id='Dev1';

    const baseRef = db.collection(Db_collection);
    const datasnap = await baseRef.get();

    let dbdata = [];

    datasnap.forEach(doc => {
        
        if(doc.id==id)
        dbdata=doc.data().country;

    })
    console.log(dbdata);

    dbdata.push(data)

    upda(dbdata);
}

let newtable="data";

get(newtable);


async function upda(arr) {

    db.doc("Test/Dev1").update({
        country: arr
    })

}