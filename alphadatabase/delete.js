const {db}=require("./dbconfig1")

// let collectionsfordeletion=['chat','Assests','Assets','Driver Recruitment','Driver Hiring Forms - DH Team','Driver Hiring Instructions','Examination-Tickets','Insurance Adjuster','Insurance Claims','Insurance Company','Loss Runs','Recordable Accidents','SMS Violation Summary','Social Media','Carriers - DH Operations','Company','Court Claims','Customers',
// 'Repairs-Inventory','Repairs - Preventative Maintenance','Sales-Current-Shippers','Sales Templates','USPS Dispatch','USPS Master'];

// let collectionsfordeletion=['Test','Trailers','Trucks'];

async function deletecollection(collection,id){

 await db.collection(collection).doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});

//  await db.collection(collection)
//   .get()
//   .then(res => {
//     res.forEach(element => {
//       if(element.id==id)
//       element.ref.delete();
//     });
//   });

}

// collectionsfordeletion.forEach(async element => {
//     console.log("data : " ,element);
//     await deletecollection(element);
// });

async function gettables(){

  let path='Base';

  const baseRef = db.collection(path);
  const datasnap = await baseRef.get();

  let tables = [];

  let id='app16x5q6jE2uqjB9';
  
  datasnap.forEach(doc => { 

      if(doc.id==id && doc.data().tables)
          tables=doc.data().tables;
  })

  return tables;

}

async function call(){

  let tables=await gettables();

  tables.forEach(async (element) => {
    console.log("el : ",element);
    let p1='Tabledata';
    let p2='Tablemetadata';
    let p3='Tablemodel';

    await deletecollection(p1,element);
    await deletecollection(p2,element);
    await deletecollection(p3,element);
    
  });
}

call();