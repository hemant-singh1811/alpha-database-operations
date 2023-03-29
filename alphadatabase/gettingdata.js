const { db, firebase } = require('./dbconfig')



// const datasnap=  baseRef.get();
// var Db_collection='base'; 

async function getting() {

    var Db_collection = '/Base';

    const baseRef = await db.collection(Db_collection);

    await baseRef.get().then((doc) => {

        // console.log("doc : ", doc);

        doc.forEach((doc1) => {
            console.log("doc : ", doc1.data());
        })

    })

}

async function tablemetadata(table_id) {

    let path = `/Tablemetadata`;

    const baseRef = await db.collection(path);

    let data = {};

    await baseRef.get().then((doc) => {
        doc.forEach((doc1) => {
            if (doc1.id == table_id) {
                data = doc1.data();
            }
        })
    })
    return data;
}

// tablemetadata('tbl4AlOUezpUNRXtz').then((data) => {
//     console.log("data: ", data);
// })

// getting();

async function gettting1() {
    var starCountRef = firebase.database().collection('base/');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log("data : ", data);
    });
}

// gettting1();



async function gettting2() {

    const citiesRef = db.collection('/base/appTAdSTyVQUZeoDG');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });

}

// gettting2()


async function get4() {
    //   console.log(`${collection_name}/${id}`)
    await db.doc(`/base`).get().then(res => {
        console.log(res.id);
        console.log("Document adeed succesfuly");
    }).catch(err => {
        console.log(err.message);
    })
}

// get4();


async function get5() {
    const collectionRef = db.collection('chat');

    // Retrieve all documents from the collection
    collectionRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is the raw data of each document
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((error) => {
            console.log('Error getting documents: ', error);
        });
}

// get5()


async function getbasemetadata(baseid) {
    let path = `/Basemetadata`;

    const baseRef = await db.collection(path);

    let data = {};

    await baseRef.get().then((doc) => {
        doc.forEach((doc1) => {
            if (doc1.id == baseid) {
                data = doc1.data();
            }
        })
    })
    return data;
}

async function gettablemetadata(table_id) {

    let path = `/Tablemetadata`;

    const baseRef = await db.collection(path);

    let data = {};

    await baseRef.get().then((doc) => {
        doc.forEach((doc1) => {
            if (doc1.id == table_id) {
                data = doc1.data();
            }
        })
    })
    return data;
}

async function getting1xxx() {

    let data = [];

    var Db_collection = '/Base';

    const baseRef = await db.collection(Db_collection);

    // const datasnap= await
   await baseRef.get().then(querySnapshot => {
       return data = querySnapshot.docs.map(async doc => {
            let dbdata = await doc.data();
            // console.log("doc: ", doc.data());
             await func1(dbdata).then((subdata) => {
                // console.log("sub-> : ",subdata);
                // data.push(subdata);
                dbdata= subdata;
            })

            return dbdata;
        }); 
    })

    // console.log("data: ", datasnap);
    //  datasnap.forEach(async (doc1) => {

    //     //  let dbdata=await 
    //      doc1.data().then((data)=>{
    //             console.log("data  ",data);
    //      })

    //         //  func(dbdata).then((subdata)=>{
    //         //     // console.log("sub-> : ",subdata);
    //         //     data.push(subdata);
    //         //      return subdata;
    //         // })

    //         // console.log('d1 : ',d1);

    //         // data=d1;

    //         // sub=subdata;
    //         // console.log("subdata : ", subdata);

    //         // return subdata;
    //   })

    // console.log("data : ", data);
    return data;
}

function func(doc1) {
    return new Promise(async function (resolve, reject) {

        try {
            let basedata = doc1;

            let basemetadataid = basedata['metadata'];

            let tables = basedata['tables'];

            //   console.log("basemetadataid : ",basemetadataid);
            //   console.log("tables : ",tables);

            //   console.log("doc : ", doc1.data());

            let basemetadata = await getbasemetadata(basemetadataid);

            // console.log("basemetadata : ", basemetadata);

            let tables_metadata = await doop(tables);

            // console.log("tables_metadata : ", tables_metadata);

            let subdata = {
                baseid: doc1.id,
                basemetadata: basemetadata,
                tablemetadata: tables_metadata
            };

            // console.log("subdata : ", subdata);
            resolve(subdata);
        } catch (err) {
            reject(err);
        }

    })
}

async function func1(doc1) {  
            let basedata = doc1;

            let basemetadataid = basedata['metadata'];

            let tables = basedata['tables'];

            //   console.log("basemetadataid : ",basemetadataid);
            //   console.log("tables : ",tables);

            //   console.log("doc : ", doc1.data());

            let basemetadata = await getbasemetadata(basemetadataid);

            // console.log("basemetadata : ", basemetadata);

            let tables_metadata = await doop(tables);

            // console.log("tables_metadata : ", tables_metadata);

            let subdata = {
                baseid: basemetadataid,
                basemetadata: basemetadata,
                tablemetadata: tables_metadata
            };

            // console.log("subdata : ", subdata);
          return subdata;
}


async function doop(tables) {
    let tables_metadata = [];
    for (let i = 0; i < tables.length; i++) {

        let tablemetadata = await gettablemetadata(tables[i]);

        // console.log("tablemetadata : ",tablemetadata);

        tables_metadata.push(tablemetadata);
    }
    return tables_metadata;
}

async function getdata() {
    let data=await getting1xxx()
    
    // .then((data)=>{ 
        Promise.all(data).then((da)=>{
            console.log("da : ",da);
            return da;
        })
    // })
}

async function getw(){
let data1=await getdata();

console.log("data1 : ",data1);

}

// getw();



async function gettabledata(table_id){
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

gettabledata().then((data) => {
    console.log("data: " , data);
})


console.log("process ended");
