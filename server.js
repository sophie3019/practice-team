const express = require('express')
const app = express()
const PORT = 3000

app.get('add', (req,res)=>{
res.json({data: product})

})
app.listen(PORT, ()=>{
    console.log('server is running')
})