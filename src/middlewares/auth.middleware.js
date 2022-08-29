const { User } = require("../app/models");

module.exports =async (req,res,next)=>{
    const currentPaths = req.path.split('/');
    const currentPath = currentPaths[currentPaths.length -1];
    console.log(currentPath);
    if(['login'].includes(currentPath)){
        return next();
    }
    if(req.header('key')){
        const key = req.header('key');
        let u = await User.findOne({where:{token:key}});
        if(u){
            req.user = {id:u.id,username:u.username,display_name:u.display_name,type:u.type};
            return next();
        }else{
            return res.status(401).json({message:'unauthorized'})
        }

    }else{
        return res.status(401).json({message:'unauthorized'})
    }
};