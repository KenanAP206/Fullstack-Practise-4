
import {connect } from "mongoose"

connect("mongodb+srv://kananskaf206:ap123@cluster0.b0yrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
})