import express from 'express';
const router = express.Router();
import db from '../config/db.js'; // Alterado para importar db como módulo ES

// Adicionar destino aos favoritos
router.post('/add', (req, res) => {
  const { userId, destinationId } = req.body;
  const query = 'INSERT INTO favorites (user_id, destination_id) VALUES (?, ?)';
  db.query(query, [userId, destinationId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Destino adicionado aos favoritos' });
  });
});

// Remover destino dos favoritos
router.post('/remove', (req, res) => {
  const { userId, destinationId } = req.body;
  const query = 'DELETE FROM favorites WHERE user_id = ? AND destination_id = ?';
  db.query(query, [userId, destinationId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Destino removido dos favoritos' });
  });
});

// Buscar destinos favoritos do usuário
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT d.*
    FROM destinations d
    INNER JOIN favorites f ON d.id = f.destination_id
    WHERE f.user_id = ?;
  `;
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;

