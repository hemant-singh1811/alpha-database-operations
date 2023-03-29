const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')


let Court_Claim_Base_Id='appTAdSTyVQUZeoDG'

let Court_CLaim_Fieldname='Court Claims'

let Court_Claim_Fileid='tblen9HFPaFsy03Wv'

 getdatafromAT(Court_Claim_Base_Id,Court_Claim_Fileid,Court_CLaim_Fieldname)
// deleteData(Dh_Team_Fieldname)
