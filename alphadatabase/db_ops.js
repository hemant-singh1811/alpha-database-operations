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
 
async function model(){
    let name="PAYMENT WA";

    let model=await getmodel("tbl4AlOUezpUNRXtz"); 

    model.forEach(element => {
        
        let data=element.data;

        let field_name=data.field_name;

        if(field_name.localeCompare(name)==0){
            return false;
        }

    });

    return true;
}

// let con=
// model().then((D)=>{
//     console.log("d : ",D);
// })

// console.log("con : ",con);

async function adddata(collection_name, id, data) {

    await db.doc(`${collection_name}test/${id}/second_child/third_child`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

async function istableexits(table_name){

    var Db_collection = 'Tablemetadata';

    let unique=true;

    const Ref = db.collection(Db_collection);
    const datasnap = await Ref.get();

    let tables = [];
    
    datasnap.forEach(doc => { 
        if(doc.data().table_name==table_name){
            unique=false;
        }
    })
    return unique;
}

istableexits("Driver Hirig Forms - DH Team").then((d)=>{
    console.log("d : ",d);
})


/**
 * this method is for get data from database.
 */
async function getdata(collection) {

    const collectionref = db.collection(collection);
    const data = await collectionref.get();

    // console.log("data : ", data);
    let dbdata = [];

    await data.forEach(doc => {

        let obj = {
            id: doc.id,
            data: doc.data()
        }
        dbdata.push(obj);
        //console.log(obj['id'])
        // print(obj)
    })
    print(dbdata.length)

}

let data = {
    'id':'3423423423423',
    'data':{
        'name':'laptop',
        'price':'3434',
        'pic':['http/url.com','http/url2.com']
    }
}

//  adddata('new_created','3423423423423',data)

// getdata('Claims')



async function print(data) {
    console.log(data);
}