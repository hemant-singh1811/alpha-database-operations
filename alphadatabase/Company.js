const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

let Company_Base_Id='appTAdSTyVQUZeoDG'

let Company_Fieldname='Company'

let Company_Fileid='tblDIgzUqlXHQjixQ'

let Company_Viewid='viwbG8e9ZcdVrMb9U'

 getdatafromAT(Company_Base_Id,Company_Fileid,Company_Fieldname,Company_Viewid)
//  deleteData(Company_Fieldname)
