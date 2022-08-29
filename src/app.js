const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;


const router = require('./config/router');
const authMiddleware = require('./middlewares/auth.middleware');
// app.get('/',function(req,res){
//     return res.send('Hi');
// });


//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(authMiddleware);
app.use('/',router.routes);

app.listen(port, () => {
    console.log(`Article app listening on port ${port}`)
  });