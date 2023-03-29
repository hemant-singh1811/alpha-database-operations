const crypto=require("crypto")

async function getbaseid(){

    const tableid = crypto.randomBytes(14).toString('hex');

    return baseid;
}

module.exports={
    getbaseid
}