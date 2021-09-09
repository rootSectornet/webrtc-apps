const route = require('express').Router();
let User = require("./../services/user")
User = new User();


route.post("/login", async (req,res,next)=>{
    User.login(req.body)
    .then((item)=>{
        res.status(200).send({status:true,data:item,message:"success"})
    })
    .catch((e)=>{
        res.status(200).send({status:false,data:{},message:e})
    })
});

route.get("/", (req,res,next)=>{
    User.employees(req.body)
    .then((item)=>{
        res.status(200).send({status:true,data:item,message:"success"})
    })
    .catch((e)=>{
        res.status(200).send({status:false,data:{},message:e})
    })
});

route.post("/", async (req,res,next)=>{
    User.create(req.body)
    .then((item)=>{
        res.status(200).send({status:true,data:item,message:item})
    })
    .catch((e)=>{
        res.status(200).send({status:false,data:{},message:e})
    })
});
module.exports = route