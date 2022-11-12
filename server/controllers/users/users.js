import User from "../../models/users.js";

export const validateUser = async (req, res) => {
    const cred = req.body;
    User.findOne({'username':cred.username},(err,admin)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else if(!admin){
            res.send({result:"User with this username does not exist"});
        }
        else{
            if(admin.password === cred.password){
                res.send({result: "Admin validated", username: admin.username, id: admin._id});
            }
            else{
                res.send({result:"Incorrect password"});
            }
        }
    })
}