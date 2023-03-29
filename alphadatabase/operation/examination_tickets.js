
const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let examination_tickets_Base_Id='appTAdSTyVQUZeoDG'

let examination_tickets_Fieldname='Examination-Tickets'

let examination_tickets_Fileid='tbl2u5f6FTqOp0pTO'

 getdatafromAT(examination_tickets_Base_Id,examination_tickets_Fileid,examination_tickets_Fieldname)
// deleteData(Dh_Team_Fieldname)
