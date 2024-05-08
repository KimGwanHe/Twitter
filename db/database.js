import mysql from 'mysql2';
import { config } from '../config.js';

const pool = mysql.createPool({
   host: config.db.host,
   port: config.db.port,
   user: config.db.user,
   database: config.db.database,
   password: config.db.password 
});

export const db = pool.promise();  // 외부에서 사용할 수 있도록 promise형태로 변환