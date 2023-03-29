const {db}=require('./dbconfig1');

async function getmodel(table_id){
    
    let path=`Tablemodel/${table_id}/model`;
 
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

async function getd(){
 let model=await getmodel("tbl4AlOUezpUNRXtz")

model.forEach(element => { 

    let field_id=element.id;
    let {field_name}=element.data;

    console.log("field_name", field_name);

});

}

let datalog={
    "Created time":"",
    "Last modified time":"",
    "Created by":"",
    "Last modified by":"",
}

// getd();



async function getdata1(){
    let path="/Tabledata/tbl4AlOUezpUNRXtz/data/";
    const sfRef = await db.collection(path);

    const docs = await sfRef.get();

    let i=0;
    // let data = [];

    docs.forEach(async doc => {
        if(doc.id=="rec0QOZ8LhZ2sOcRX"){
        let data = doc.data();

         console.log('data : ',data.TITLE[0].thumbnails);
        }
    })

}


getdata1()