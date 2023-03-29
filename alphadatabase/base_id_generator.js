const crypto=require("crypto")

async function getbaseid(){

    const baseid = crypto.randomBytes(10).toString('hex');

    return baseid;
}

module.exports={
    getbaseid
}