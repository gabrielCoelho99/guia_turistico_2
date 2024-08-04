import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'; // Assuming db.js exports the SQLite connection

const router = express.Router();

// Cadastro de usuário
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  try {
    const [result] = await db.execute(query, [username, email, hashedPassword]);
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir usuário no banco de dados:', error);
    res.status(500).json({ error: 'Erro interno ao processar o registro de usuário.' });
  }
});

// Login de usuário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  try {
    const [results] = await db.execute(query, [email]);
    if (results.length === 0) return res.status(401).json({ message: 'Email ou senha incorretos' });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return res.status(401).json({ message: 'Email ou senha incorretos' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login realizado com sucesso!', token });
  } catch (error) {
    console.error('Erro ao buscar usuário no banco de dados:', error);
    res.status(500).json({ error: 'Erro interno ao realizar login.' });
  }
});

export default router;



