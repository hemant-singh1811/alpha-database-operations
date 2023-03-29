const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')


let Carriers_Base_Id='appTAdSTyVQUZeoDG'

let Carriers_Fieldname='Carriers -  DH Operations'

let Carriers_Fileid='tblBpaWRn0D4qhbPD'

 getdatafromAT(Carriers_Base_Id,Carriers_Fileid,Carriers_Fieldname)
// deleteData(Dh_Team_Fieldname)
