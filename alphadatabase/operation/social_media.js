

// Airtable.com/appTAdSTyVQUZeoDG/tblhcajqUeOknJUyG
const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let social_media_Base_Id='appTAdSTyVQUZeoDG'

let social_media_Fieldname='Social Media'

let social_media_Fileid='tblhcajqUeOknJUyG'

 getdatafromAT(social_media_Base_Id,social_media_Fileid,social_media_Fieldname)
// deleteData(Dh_Team_Fieldname)
