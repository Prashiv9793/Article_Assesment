## Article Assessment

## Installation

Install my-project with npm

```bash
  npm install 

```
then before continue setup database 
and configure database_name, username and password in **connection.js(development variable)** file located at _src/config/_  folder.

```bash
  npx sequelize-cli db:migrate 
  
  npx sequelize-cli db:seed --seed admin-user
```
the above command will create table in database and create a admin user with username **admin** and password **12345**

finally run project with 
```bash
node ./src/app.js
```
and check out the postman collection. :)