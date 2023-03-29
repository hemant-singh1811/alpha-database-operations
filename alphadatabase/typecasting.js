let frontEndFieldsType = {
    "Link to another record":'multipleRecordLinks',
    "Single line text":'singleLineText',
    "Long text":'multilineText',
    "Attachment":'multipleAttachments',
    "Checkbox":'checkbox',
    "Single Select":'singleSelect',
    "Multiple select":'multipleSelects',
    "User":'',
    "Date":'date',
    "Phone number":'phoneNumber',
    "Email":'email',
    "URL":'url',
    "Created time":'createdTime',
    "Last modified time":'lastModifiedTime',
    "Created by":'createdBy',
    "Last modified by":'lastModifiedBy',
    "Autonumber":'autoNumber',
    "button":'button',

}
 

const jsonformat=require('./json1');
const jsonformat1=require("./jsonformat")
const { db } = require('./dbconfig')


let set=new Set();

console.log("size :",jsonformat.length);
console.log("size2 :"+jsonformat1.length);

// jsonforma
    
//     let data=element.data;

    

//     data.forEach(element => {
        
//         set.add(element.field_type);

//     });

// });

// set.forEach(element => {
//    console.log("el : ",element); 
// });



async function updatedata(base_id,table_id,record_id,data)
{
    let path=`/Tabledata/${table_id}/data/${record_id}/`;
    
    await db.doc(path).set(data).then(res => {
        console.log("field added succesfuly");
    }).catch(err => {
        console.log(err.message);
    })
}

let data={

}
// update("",'tbl9nAYoaqhN58w7j','recG6ZDQjhzZ0NSME',data)

async function getRecord(){

    let path="/Tabledata/tbl9nAYoaqhN58w7j/data/";

    const Ref = db.collection(path);
    const snapshot = await Ref.get();

    await snapshot.forEach(async doc => {
        if (doc.id === "recG6ZDQjhzZ0NSME") {
            let data = doc.data();
            console.log("before  : ",data);
            data['single line text 3']="hemant";
            console.log("after  : ",data);
            await update("",'tbl9nAYoaqhN58w7j','recG6ZDQjhzZ0NSME',data)
        }
    })
}

getRecord()