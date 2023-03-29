let data={
    id: 'attyGmmyUcPdulo17',
    url: 'https://v5.airtableusercontent.com/v1/15/15/1678579200000/wTqxS1E7VJ11QcEd2_ERRg/pdVtCvITjAkaKQDOpL_UPQNShcbuct9Pmka83zSkOc9W3g4EW1-iiAUjISSHL89Ti3w9fXIAuq87ziyrVmhhEbpQQVg2ft2QDZvYz1pvctOMTGGcEjm0OmTvqkAG5fa3/y6EQzRsSA6VZ9v9wbFnc3VJlJ7vVeUuzYBHtfNYCnKc',
    filename: 'PremiumFinanceAgreement.pdf',
    size: 208592,
    type: 'application/pdf',
    thumbnails: { small: [Object], large: [Object] }
}

console.log(data.hasOwnProperty("url"));

if(data.hasOwnProperty("url")){

    data['url']="fsfsdfsdf"

    console.log("data : ",data);

}
