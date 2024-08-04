// Importando o dotenv e configurando as variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config();

// Importando as bibliotecas necessárias
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Criando uma instância do Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Importar rotas
import userRoutes from './routes/userRoutes.js';
import destinationRoutes from './routes/destinationRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';

// Usar rotas
app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/favorites', favoriteRoutes);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

