import initdb from './models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'db_devSchool',
'root',
'ma12092012', {
host: 'localhost',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;