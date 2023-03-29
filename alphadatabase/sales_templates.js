// https://airtable.com/app4NXV8qXVsAHw81/tblYAwLtuksMr6U06



const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

let sale_templates_Base_Id='app4NXV8qXVsAHw81'

let sales_templates_Fieldname='Sales Templates'

let sales_templates_Fileid='tblYAwLtuksMr6U06'

 getdatafromAT(sale_templates_Base_Id,sales_templates_Fileid,sales_templates_Fieldname)
// deleteData(Dh_Team_Fieldname)
