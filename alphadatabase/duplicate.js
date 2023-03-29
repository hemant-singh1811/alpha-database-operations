const jsonformatarr=require("./jsonformat")

// console.log("arr :" ,jsonformatarr.length);

let arr=[
    "tblBpaWRn0D4qhbPD",
    "tblDIgzUqlXHQjixQ",
    "tblKdC6MOIk1atK67",
    "tblRcTHdXYkenFEeO",
    "tblYs9fOVZAXsMXp4",
    "tblZbgbRBQZWEgnvI",
    "tblen9HFPaFsy03Wv",
    "tblenNgLeBDU4bSjX",
    "tblgW0MYMhDVcQKVb",
    "tblhcajqUeOknJUyG",
    "tbll9LOG6W5c3UuTf",
    "tblrFUnKnMpTrTFWv",
    "tblvLpECzEvSGftSw",
    "tblypJKFcKd0Jm5ns"
 ]

let set1=new Set();
let  set = new Set();

for(let i=0; i<arr.length; i++){
    set1.add(arr[i]);
}

for(let i=0;i<jsonformatarr.length;i++){

    let tableid=jsonformatarr[i].table_id;

    if(set.has(tableid)){
        console.log("duplicate found : ",jsonformatarr[i].table_id);
        console.log(jsonformatarr[i].field_name);
        console.log("i : ",i);
    }else
    set.add(jsonformatarr[i].table_id);


    // if(!set1.has(tableid)){
    //     console.log("not found");
    //     console.log("id : ",tableid);
    //     console.log("table_name: ",jsonformatarr[i].field_name);
    // }
    

}

// console.log("size : ",set.size);

// for (const item of set) {
//     console.log(item);
// }

// Trailer Sync
// duplicate found :  tblvLpECzEvSGftSw
// not found
// id :  tbl9dghAtt2BxuhnX
// table_name:  Recordable Accidents
// not found
// id :  tbl4AlOUezpUNRXtz
// table_name:  ASSET(TRUCKS)