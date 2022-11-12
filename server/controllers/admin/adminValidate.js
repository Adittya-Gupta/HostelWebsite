import Admin from '../../models/admin.js';

export const validateAdmin = async (req, res) => {
    const cred = req.body;
    Admin.findOne({'username':cred.username},(err,admin)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else if(!admin){
            res.send({result:"Admin with this username does not exist"});
        }
        else{
            if(admin.password === cred.password){
                res.send({result:"Admin validated", username: admin.username, id: admin._id});
            }
            else{
                res.status(401).send({result:"Incorrect password"});
            }
        }
    })
}