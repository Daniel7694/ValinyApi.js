const knex = require('knex');

const knexConfig = {
  development: {
    client: 'mysql',
    connection: {
      server: 'cfgo-ied.database.windows.net',
      user: 'sasqlvaliny',
      password: 'JHENv2024',
      database: 'cfgo-ied',
      options: {
        encrypt: true // Si tu servidor requiere conexión segura (SSL/TLS), asegúrate de habilitar esta opción
      }
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  }
};

const db = knex(knexConfig.development);

db.raw('SELECT 1')
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = knexConfig;