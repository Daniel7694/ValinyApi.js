const mysql = require('mysql2');
const db = mysql.createConnection({
 host: 'cfgo-ied.database.windows.net', 
 user: 'sasqlvaliny', 
 // Mi contraseña Root
 password: 'JHENv2024', 
 database: 'cfgo-ied',
 authPlugins : {
    mysql_clear_password: () => Buffer.from('JHENv2024','utf-8' ),
    caching_sh2_password : true,
 }
});
db.connect(function(err) {
 if (err) throw err; 
 console.log('Base de datos conectada');
 
});
module.exports = db; 