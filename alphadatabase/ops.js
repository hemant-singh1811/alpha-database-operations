const { db } = require('./dbconfig')


async function adddata(collection_name, id, data) {

    await db.doc(`${collection_name}/${id}/`).set(data).then(res => {
        console.log("Document adeed succesfuly");
    }, { merge: true }).catch(err => {
        console.log(err.message);
    })

}

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

        if (doc.id == 'rec0q9p9EGISLWKVV') {
            console.log("data : ", doc.data());
            // adddata(collection,doc.data().metadata,doc.data());
        }
    })


}

getdata("/Tabledata/tblDIgzUqlXHQjixQ/data/")


let imgmodel = [
    {
        filename: "Scan.jpeg",
        id: "attpfWjTu2RvtJCPD",
        size: 2495707,
        type: "image/jpeg",

        thumbnails:{
            small: {
              width: 25,
              url: 'https://v5.airtableusercontent.com/v1/15/15/1679918400000/XAB1QG6k2kYW4YVW6G3Xlw/hgbGXXX9XLillhOrMlHGHqGV3AqRDPuFdgPF7KcI4uIusuN4PF5oBpduf6cCeZLDt-UPrrBOo2DvSihh8HBqBg/oYHuK3_TBcuIi0hbMS1wUED6YmKqoAkLoH7SCWKbBE8',
              height: 36
            },
            large: {
              width: 512,
              url: 'https://v5.airtableusercontent.com/v1/15/15/1679918400000/UGQshLIBvGyEUb4br3XarA/Jlm3HhCE_kxYu2zqvno8MkzJP0M2kVn6QMCq5UEoNiR67Ukc7yvDAlVtEyqanBrlQ-6M9sQBFiS8n9mypMjEQA/wGY8fsl-Es8X9ndIb8MoTMRLWQSKDKj4UkI8BjxSpIg',
              height: 725
            },
            full: {
              width: 3000,
              url: 'https://v5.airtableusercontent.com/v1/15/15/1679918400000/Bi8dbzZZZsorUvKqoS5Mlg/9Ddm3x7bYuLahM6GoGMkVyyFZ8R2esU8U1n3vLRxfGRtmVslhdO8h4bdSzajfZ9u2AZ5IaNF29GCzPJAvlUR6A/Bc0kzm4ri9vuyU7KDbbf9TSXBKUsYZ-cP4-KdujJZCQ',
              height: 3000
            }
          },

        url: "https://v5.airtableusercontent.com/v1/15/15/1679918400000/OQw6kppoxtGVh0hRMF3ggQ/91aDuYibnUQJnE-br7oIPLeXGIdtz-UGUrKwtQ3bP77Q0ycYbrulD__2XXY-8J3DCm9Z4ocTmIzj_m5SYBe0wPTlxf_P6EyszAGfyl1B55A/FTYMpwiSjvXhbETxBbX7FCPTYnAtn7JKIOJy-dfTAv4",

        width: 3305,
        height: 4676,
    },

    {
        filename: "Kenworth (dragged) 12.pdf",
        id: "attYIkl0K9IIpOpOO",
        size: 4912147,

        thumbnails: {
            large: {
                height: 512,
                url: "https://v5.airtableusercontent.com/v1/15/15/1679918400000/ot5E3eTvUKh6ZOpNNNadgQ/9WGPxbxt1hZn1oamHQCJV_0RwZ5kiB1q6pGKIGaJuI3mTZxwi0hus8R0FBd4z4B_rtoSOWRwmj1UJ_iErpS-Jg/Z26AiTjPEHViHVRLS7a1pz76SnEW9jSWsBeRFT3BFDo",
                width: 362
            },
            small: {
                height: 36,
                url: "https://v5.airtableusercontent.com/v1/15/15/1679918400000/Fk_uIbMDpGryY2ju6zV_CQ/EelAeDvc8DEOr0M6h1eVB-SA5PbxtZP6WeJwaNepimceKlEjlQvEs-hG4m7Cc1JNEyMQo5e8icfFiNoWKHsH5Q/naFjI88ezP2nE84t0oWoB0LX58I_FLbftcpu1W_aCLk",
                width: 25,
            },
        },
        
            type: "application/pdf",
        
            url: "https://v5.airtableusercontent.com/v1/15/15/1679918400000/YJMnjffgWJIGK8k61SXeJQ/JrA4T75CD_ad5qBf1PD5HwvrL3PwJutsQpaNHWOmL37ATxZB04ftVHQj89CUslHZJqQ_rAixqbPx5znJLaBWDMmDw3d1ADdAStv6C3ZGgAc/VHfmAUoXOuj-w5PPCXrj3YDUjXft4s92rFzDGpPWBY0"
    }
]