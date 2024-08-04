import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '1112',
  database: process.env.DB_NAME || 'tourist_guide'
};

// Criação da conexão com o MySQL
const pool = mysql.createPool(dbConfig);

// Conectar ao banco de dados MySQL
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    throw err;
  }
  console.log('Conexão com o MySQL estabelecida com sucesso.');

  // Release the connection
  connection.release();
});

export default pool;

