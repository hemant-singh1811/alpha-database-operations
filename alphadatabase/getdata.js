// const {db}=require('./dbconfig');
const jsonformatarr = require("./jsonformat")
const https = require("https");
const fs = require("fs");
const pdf2base64 = require('pdf-to-base64');
const { ref, uploadBytes, uploadString, listAll, getDownloadURL } = require("firebase/storage");
const { getimgurl, getpdfurl, db } = require("./dbconfig1")


async function getdata1(table_id, model) {

    
    var path = `/Tabledata/${table_id}/data/`;

    const sfRef = await db.collection(path);

    const docs = await sfRef.get();

    let i=0;
    // let data = [];

    docs.forEach(async doc => {
        if(i==0){
        let data = doc.data();
       data= await handling(table_id,doc.id, data, model);
    //    console.log("data : ",data);
        }
    })

   
}

for (let i = 0; i < jsonformatarr.length; i++) {
    let record = jsonformatarr[i];
    // console.log("record: ",record)
    let table_id='tblgW0MYMhDVcQKVb';

    if (record.table_id == table_id) {
        getdata1(table_id, record.data);
    }
}

async function handling(tableid,id, data, tablemodel) {

    let modifieddata = {

    }

    for (let j = 0; j < tablemodel.length; j++) {

        let model = tablemodel[j];

        let field_name = model.field_name;

        let val = data[field_name] || ""; 

        if (model.field_type == 'image') {

            let imgtag="https://v5";

            let size = val.length;

            for (let k = 0; k < size; k++) {

                if (val[k].hasOwnProperty('url')) {

                   if (val[k].type == 'image/png') {

                        let oldurl = val[k]['url'];

                        let result = oldurl.substring(0, 10);

                        if(result!=imgtag) continue;

                       await getimgurl(oldurl,res).then((url)=>{
                        val[k]['url'] = url
                        }).catch((err)=>{
                            console.log('err');
                        })

                    } else if (val[k].type == 'application/pdf') {

                        let oldurl = val[k]['url'];


                        let result = oldurl.substring(0, 10);

                        if(result!=imgtag) continue;

                        await getpdfurl(oldurl,res).then((url)=>{
                            val[k]['url'] = url
                        }).catch((err)=>{
                            console.log('err');
                        })

                        try{

                        let ioldurl=val[k].thumbnails.small.url;

                         result = ioldurl.substring(0, 10);

                        if(result!=imgtag) continue;

                        // console.log("thumbnail url small : ", ioldurl);      
                        
                        await getimgurl(ioldurl,res).then((url)=>{
                            val[k].thumbnails.small.url = url
                         }).catch((err)=>{
                            console.log('err');
                        })
                        
                        }catch(e){

                        }

                         try{
                        let ioldurl1=val[k].thumbnails.large.url;

                        result = ioldurl1.substring(0, 10);

                        if(result!=imgtag) continue;

                        await getimgurl(ioldurl1,res).then((url)=>{
                            val[k].thumbnails.large.url = url
                         }).catch((err)=>{
                            console.log('err');
                        })

                        }catch(e){

                        }


                         try{
                         let ioldurl2=val[k].thumbnails.full;

                        result = ioldurl2.substring(0, 10);

                        if(result!=imgtag) continue;

                        await getimgurl(ioldurl2,res).then((url)=>{
                            val[k].thumbnails.full.url = url
                         })
                         .catch((err)=>{
                            console.log('err');
                        })
                        
                         }catch(e){

                         }

                        // console.log("thumbnail url large : ", ioldurl1);      

                    }
                    // console.log("rec : ",id);
                }
            }
            data[field_name] = val;
        }

        // console.log("mod : ", modifieddata[field_name]);
    }

    // console.log("mod : ", modifieddata);
    // if(modifieddata!={})
    await adddataoftable(tableid,id,data);

    // return modifieddata;

}

async function adddataoftable(table_id, rec_id, data) {

    console.log("added : ",rec_id);

    await db.doc(`Tabledata/${table_id}/data/${rec_id}/`).set(data).then(res => {
        // console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

async function res(url,data){
    console.log("got the url : ",url);

}

// uploads(str1);