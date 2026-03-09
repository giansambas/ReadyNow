const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const db = new sqlite3.Database("./database.db")

db.run(`
CREATE TABLE IF NOT EXISTS reports (
id INTEGER PRIMARY KEY AUTOINCREMENT,
barangay TEXT,
disaster TEXT,
description TEXT,
time TEXT
)
`)

app.post("/report",(req,res)=>{

const {barangay, disaster, description} = req.body

db.run(
"INSERT INTO reports (barangay,disaster,description,time) VALUES (?,?,?,datetime('now'))",
[barangay, disaster, description],
function(err){
if(err){
res.status(500).send(err)
}else{
res.send({success:true})
}
})

})

app.get("/reports",(req,res)=>{

db.all("SELECT * FROM reports ORDER BY time DESC",[],(err,rows)=>{
if(err){
res.status(500).send(err)
}else{
res.send(rows)
}
})

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})