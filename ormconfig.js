// ormconfig.js

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '12345678',
  database: process.env.DB_NAME || 'first_blood',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  driver: 'mysql', // 指定使用 mysql2 驱动
};
