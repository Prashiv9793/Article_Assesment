const md5 = require('md5');
const moment = require('moment');
let {User} = require('../models/')
const UserController = ()=>{

    const login = async (req,res)=>{
        let {username,password} = req.body;
        let u = await User.findOne({where:{username,password:md5(password)}});
        if(u){

            let token = md5(moment().unix()+'_'+u.id);
            await User.update({token:token},{where:{id:u.id}});
            return res.json({token,message:'login successful.'});
        }else{
            return res.status(400).json({message:'invalid username or password'});
        }

        
    };
    const logout =async (req, res)=>{
        await User.update({token:null},{where:{id:req.user.id}})
        return res.json({message:'logout successful.'});
    }
    const all = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        let users = await User.findAll();
        return res.json(users);
    }
    const view = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        let id = req.params.id;
        let users = await User.findOne({where:{id}});
        if(!users){
            return res.json({message:'User not found!'})
        }
        return res.json(users);
    }
    const add = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        let {username,display_name,password,type} = req.body;
        let users = await User.create({username,display_name,password,type});
        
        return res.json({message:'user successfully created',user:{id:users.id,username,display_name,password,type}});
    }
    const update = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        let user_id =req.params.id;
        let {username,display_name,password,type} = req.body;
        let u = await User.findOne({where:{id:user_id}});
        if(u){
            await User.update({username,display_name,password:md5(password),type},{where:{id:u.id}});
            return res.json({message:'user successfully updated',user:{id:user_id,username,display_name,password,type}})
        }else{
            return res.status(400).json({message:'user not found or invalid id'});
        }
    }
    const destroy = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        let user_id =req.params.id;
        let u = await User.findOne({where:{id:user_id}});
        if(u){
            await User.destroy({where:{id:u.id}});
            return res.json({message:'user successfully deleted'})
        }else{
            return res.status(400).json({message:'user not found or invalid id'});
        }
    }
    return {
        all,
        view,
        add,
        update,
        destroy,
        login,
        logout
    }
    
};

module.exports = UserController;