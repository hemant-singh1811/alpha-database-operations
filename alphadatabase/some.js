const { db } = require('./dbconfig')

async function getmodel(table_id) {

    let path = `Tablemodel/${table_id}/model`;

    const Ref = db.collection(path);
    const snapshot = await Ref.get();

    let dbdata = [];

    await snapshot.forEach(doc => {

        let obj = {
            id: doc.id,
            data: doc.data()
        }
        dbdata.push(obj);
    })

    return dbdata;
}

async function getdata(table_id) {
    let path = `/Tabledata/${table_id}/data`;

    const Ref = db.collection(path);
    const snapshot = await Ref.get();

    let dbdata = [];

    await snapshot.forEach(doc => {

        let obj = {
            id: doc.id,
            data: doc.data()
        }
        dbdata.push(obj);
    })

    return dbdata;
}

async function getdataoftable(table_id) {

    let model = await getmodel(table_id);

    let data = await getdata(table_id);

    // console.log("data : ",data);

    console.log("model: ", model);

    let resdata = [];

    data.forEach(entry => {

        let id = entry.id;
        let d = entry.data;

        let newdata = {};

        console.log("entry: ", entry);

        model.forEach(element => {

            let field_name = element.data.field_name;

            console.log("d : ", d[field_name]);

            if ( d[field_name] != undefined ) {

                if(d[field_name]==''){
                    console.log("empty");
                }

                newdata[field_name] = d[field_name];

            }
        });
        
        
        resdata.push({
            id: id,
            data: newdata
        })

    });
    
    return resdata;
}

async function data() {
    let resdata = await getdataoftable('tbliv0carCnnGLwSc')

    console.log("resdata :", resdata);
}

data()