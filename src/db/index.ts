import {drizzle} from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import 'dotenv/config'; // 确保加载环境变量

// 创建连接池
const poolConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// 初始化 Drizzle
export const db = drizzle(poolConnection);
