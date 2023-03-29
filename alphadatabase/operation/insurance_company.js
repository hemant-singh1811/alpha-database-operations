


// Airtable.com/appTAdSTyVQUZeoDG/tblVVFfr0ItCUlsD5





const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let insurance_company_Base_Id='appTAdSTyVQUZeoDG'

let insurance_company_Fieldname='Insurance Company'

let insurance_company_Fileid='tblVVFfr0ItCUlsD5'

 getdatafromAT(insurance_company_Base_Id,insurance_company_Fileid,insurance_company_Fieldname)
// deleteData(Dh_Team_Fieldname)
