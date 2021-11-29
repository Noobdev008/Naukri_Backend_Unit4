const express = require('express');
const app = express();

const mongoose = require('mongoose');

const connect = async () => {
    mongoose.connect("mongodb://localhost:27017/employee-api")
}

app.use(express.json());

const jobschema = new mongoose.Schema({

    id: { type: Number, required: true },
    job_title: { type: String, required: true },
    workfromhome: { type: Boolean, required: true, default: false },
    noticeperiod: { type: Number, required: true },
    city: { type: String, required: true },
    rating: { type: Number, required: true },
    skills: { type: String, required: true },
    rating: { type: Number, required: true }



}, {
    versionKey: false,
    timestamp: true

})


const jobs = mongoose.model("job", jobschema);


app.get("/jobs", async (req, res) => {

    const skilljob = await jobs.find({ $or: [{ "city": { $eq: "poland" } }, { "skills": { $eq: "Node.js" } }] }).lean().exec();
    res.send({ skilljob })


})


const companyschema = new mongoose.Schema({

    id: { type: Number, required: true },
    company: { type: String, required: true },
    city: { type: String, required: true },
    skills: { type: String, required: true },
    jobtitle: { type: String, required: true },
    openjobs: { type: Number, required: true },


}, {
    versionKey: false,
    timestamp: true
})

const company = mongoose.model("company", companyschema);



app.get("/company", async (req, res) => {
    const allcompany = await company.find().lean().exec();
    res.send({ allcompany })
})


app.get("/company/:id", async (req, res) => {

    const companydetail = await company.find({ "_id": { $eq: req.params.id } }).lean().exec();

    res.send({ companydetail })


})


app.get("/company", async (req, res) => {

    const mostopenjobcompany = await company.find({ "openjobs": { $gte: req.params.no } }).sort().lean().exec();

    res.send({ mostopenjobcompany })


})



console.log("hello")

app.listen(2900, async () => {
    await connect()
    console.log("listening on the port 2900")
})