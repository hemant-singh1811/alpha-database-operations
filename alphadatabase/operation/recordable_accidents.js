// Airtable.com/appTAdSTyVQUZeoDG/tbl9dghAtt2BxuhnX




const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let Recordable_Accidents_Base_Id='appTAdSTyVQUZeoDG'

let Recordable_Accidents_Fieldname='Recordable Accidents'

let Recordable_Accidents_Fileid='tbl9dghAtt2BxuhnX'

 getdatafromAT(Recordable_Accidents_Base_Id,Recordable_Accidents_Fileid,Recordable_Accidents_Fieldname)
// deleteData(Dh_Team_Fieldname)
