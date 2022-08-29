
const allRoutes = {
    'POST /login':  'UserController.login',
    'DELETE /logout':  'UserController.logout',
    'GET /users':  'UserController.all',
    'GET /users/:id':  'UserController.view',
    'POST /users':  'UserController.add',
    'PUT /users/:id':  'UserController.update',
    'DELETE /users/:id':  'UserController.destroy',

    'GET /articles':  'ArticleController.all',
    'GET /articles/:id':  'ArticleController.view',
    'POST /articles':  'ArticleController.add',
    'PUT /articles/:id':  'ArticleController.update',
    'DELETE /articles/:id':  'ArticleController.destroy',

};

module.exports = allRoutes;