import User from '../../models/users.js';

export const validateUser = async (req, res) => {
    const cred = req.body;
    User.findOne({'username':cred.name},(err,admin)=>{
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        else if(!admin){
            res.status(404).send("User with this username does not exist");
        }
        else{
            if(admin.password === cred.password){
                res.status(200).send("Admin validated");
            }
            else{
                res.status(401).send("Incorrect password");
            }
        }
    })
}