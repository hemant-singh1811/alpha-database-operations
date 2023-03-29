const { db } = require('./dbconfig')
const { getbaseid } = require("./base_id_generator");


async function adddata(metadataid, data) { 
        // console.log("data ",data);
        // console.log("metadataid ",metadataid);
        await db.doc(`Basemetadata/${metadataid}/`).set(data).then(res => {
            console.log("Document adeed succesfuly");
        }, { merge: true }).catch(err => {
            console.log(err.message);
        })
}

async function pushing(name,baseid) { 

    let time = new Date();

    // console.log("time : ", time);

    let id = 'dummy user';

    let data = {
        baseid: baseid,
        name: name,
        createdAt: time,
        createdBy: id,
    }

    await adddata(baseid, data)

}

let arr = [{
            name: "Alpha Dispatch 2022",
            id:"app16x5q6jE2uqjB9",
         },
        {
         name: "Company Operations",
         id:"app3etcOfSzBVldU4",
         }
        , { 
            name: "ARRIVE LOGISTICS",
            id:"appqsHk0zUp1SvIGU", 
        }, 
        { 
            name: "Alpha Operations 2022" ,
            id:"appTAdSTyVQUZeoDG",
        }
];

for (let i = 0; i < arr.length; i++) {
    let base = arr[i]; 
    pushing(base.name, base.id);
}



