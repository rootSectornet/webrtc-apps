const users = require("./../models").pegawais;
const bcrypt = require("bcrypt");

class User{
    constructor(){
    }
    login(body){
        return new Promise(async function(resolve,reject){
            let {email,password} = body;
            users.findOne({
                where:{email:email}
            })
            .then(async (res)=>{
                if(res){
                    await bcrypt.compare(password,res.password,(err,isMatch)=>{
                        if(!err && isMatch){
                            console.log("berhasil")
                            resolve(res)
                        }else{
                            console.log("gagal")
                            reject("Your Password Is Wrong")
                        }
                    })
                }else{
                    reject("User Not Found !");
                }
            })
            .catch((e)=>reject(e))
        })
    }
    employees(){
        return new Promise((resolve,reject)=>{
            users.findAll({where:{level:0}})
            .then((res)=>{
                resolve(res);
            })
            .catch((e)=>reject(e))
        })
    }
    create(body){
        return new Promise((resolve,reject)=>{
            const {nik,name,email,telp,level,password} = body;
            users.create({
                nik : nik,
                name : name,
                email : email,
                telp : telp,
                level : level,
                password : password
            })
            .then((result)=>{
                if(result){
                    resolve("Pegawai Berhasil Di Tambah");
                }else{
                    reject("Gagal Menambah Data Karyawa");
                }
            })
            .catch(e=>reject(e));
        })
    }
}
module.exports = User;