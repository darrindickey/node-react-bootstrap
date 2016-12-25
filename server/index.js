// ps aux | grep node => sudo kill -9 PORT

// docker run -d --name node-mysql -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -e MYSQL_DATABASE=node mysql
// docker stop node-mysql
// docker start node-mysql
// docker rm node-mysql
// docker ps 

require('babel-register')
require('./server')