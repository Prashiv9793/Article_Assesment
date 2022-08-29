const multer = require('multer');
const fs = require('fs-extra');
const moment = require('moment')
const {User,Article} = require('../models/');
const upload = multer({ dest: './temp' }).single('image')
const upload_path = './src/public';
const ArticleController = ()=>{
    const all = async  (req,res)=>{
        let articles = await Article.findAll();
        return res.json(articles);
    }
    const view = async  (req,res)=>{
        let id = req.params.id;
        let article = await Article.findOne({where:{id}});
        if(!article){
            return res.json({message:'article not found!'})
        }
        return res.json(article);
    }
    const add = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        upload(req, res,async function (err) {
            if (err instanceof multer.MulterError) {
              return res.status(500).json({message:'something went wrong'});
            } else if (err) {
              return res.status(500).json({message:'something went wrong'});
            }

            let file_path = '/uploads/'+moment().unix()+'_'+req.file.originalname;
            fs.moveSync(req.file.path, upload_path+file_path,{overwrite:true});
            let {title,sub_title,description,keywords} = req.body;
            image= file_path;

            let a = await Article.create({title,sub_title,description,keywords,image,author:req.user.id});

            return res.json({message:'article successfully created.',article:{id:a.id,title,sub_title,description,keywords,image,author:req.user.id,created_by:req.user}});

        
          });
    }
    const update = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        upload(req, res,async function (err) {
            if (err instanceof multer.MulterError) {
              return res.status(500).json({message:'something went wrong'});
            } else if (err) {
              return res.status(500).json({message:'something went wrong'});
            }
            const id = req.params.id;
            let file_path = '/uploads/'+moment().unix()+'_'+req.file.originalname;
            fs.moveSync(req.file.path, upload_path+file_path,{overwrite:true});
            let {title,sub_title,description,keywords} = req.body;
            image= file_path;

            let a = await Article.update({title,sub_title,description,keywords,image},{where:{id}});

            return res.json({message:'article successfully updated.',article:{id:a.id,title,sub_title,description,keywords,image,author:req.user.id,created_by:req.user}});

        
          });
    }
    const destroy = async  (req,res)=>{
        if(req.user.type != 'ADMIN'){
            return req.status(403).json({message: 'access forbidden'});
        }
        let id = req.params.id;
        let article = await Article.findOne({where:{id}});
        if(!article){
            return res.json({message:'article not found!'})
        }
        await Article.destroy({where:{id}});
        return res.json({message:'article successfully deleted'});
    }
    return {
        all,
        view,
        add,
        update,
        destroy
    }
    
};

module.exports = ArticleController;