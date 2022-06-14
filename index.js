const PORT=8080
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')


const app=express()
const url="https://www.theguardian.com"
axios(url)
.then(response =>{

    const html=response.data
    const $=cheerio.load(html)
    const atribute=[]
    $(".fc-item__title",html).each(function(){
      const title = $(this).text();
     const url= $(this).find("a").attr("href");

     atribute.push({
        title,
        url
     })

    });
    console.log(atribute)
    //const html=response.data
   // console.log(html)
}).catch(err=>console.log(err))

app.listen(PORT ,() =>console.log(`server running on PORT ${PORT}`))