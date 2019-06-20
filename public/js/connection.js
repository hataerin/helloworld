import Sequelize from 'sequelize';
// local mysql DB 는 비밀번호 X
const sequelize = new Sequelize('phoenix_db', 'root', 'taerin', {
  host: 'localhost',

  // port: 3306,
  // user: 'root',
  // password: 'taerin',
  // database: 'phoenix_db'

  dialect: 'mysql'

});

sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection success.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });

export default sequelize;