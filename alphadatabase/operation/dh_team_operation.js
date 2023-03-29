const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let Dh_Team_Base_Id='appTAdSTyVQUZeoDG'

let Dh_Team_Fieldname='Driver Recruitment'

let Dh_Team_Fileid='tbll9LOG6W5c3UuTf'

 getdatafromAT(Dh_Team_Base_Id,Dh_Team_Fileid,Dh_Team_Fieldname)
// deleteData(Dh_Team_Fieldname)
