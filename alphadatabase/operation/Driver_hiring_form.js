const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let Driver_Hiring_Base_Id='appTAdSTyVQUZeoDG'

let Driver_Hiring_Fieldname='Driver Hiring Forms - DH Team'

let Driver_Hiring_Fileid='tblenNgLeBDU4bSjX'

 getdatafromAT(Driver_Hiring_Base_Id,Driver_Hiring_Fileid,Driver_Hiring_Fieldname)
// deleteData(Dh_Team_Fieldname)
