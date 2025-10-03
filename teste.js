const express = require("express")

const app = express()

app.use(express.json())

const PORT = 3001

app.get("/",(req,res)=>{
    res.status(200).json({msg: "hello henry viado"})
})


app.get("/joao",(req,res)=>{
    res.status(200).json({msg:"henry é baitola e viado"})
})


app.listen(PORT,()=>{
    console.log(`Servidor rodando em httpslocalhost:${PORT}`)

})