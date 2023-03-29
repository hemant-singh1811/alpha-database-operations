
// Airtable.com/appTAdSTyVQUZeoDG/tblrFUnKnMpTrTFWv

const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let sms_violation_summary_Base_Id='appTAdSTyVQUZeoDG'

let sms_violation_summary_Fieldname='SMS Violation Summary'

let sms_violation_summary_Fileid='tblrFUnKnMpTrTFWv'

 getdatafromAT(sms_violation_summary_Base_Id,sms_violation_summary_Fileid,sms_violation_summary_Fieldname)
// deleteData(Dh_Team_Fieldname)
