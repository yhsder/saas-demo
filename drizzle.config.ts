import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

console.log(//在控制台检查是否正确加载了环境变量
    'DB_HOST:', process.env.DB_HOST,
    'DB_USER:', process.env.DB_USER,
    'DB_PASSWORD:', process.env.DB_PASSWORD,
    'DB_NAME:', process.env.DB_NAME,
    'DB_PORT:', process.env.DB_PORT
);

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'mysql',
    dbCredentials: {
        host: process.env.DB_HOST!,       // MySQL 主机地址
        user: process.env.DB_USER!,       // MySQL 用户名
        password: process.env.DB_PASSWORD!, // MySQL 密码
        database: process.env.DB_NAME!,   // MySQL 数据库名
        port: Number(process.env.DB_PORT), // MySQL 端口（可选，默认 3306）
    },
});
