import express from 'express';
const router = express.Router();
import db from '../config/db.js'; // Alterado para importar db como módulo ES

// Buscar todos os destinos
router.get('/', (req, res) => {
  const query = 'SELECT * FROM destinations';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Buscar detalhes do destino por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT d.*, a.id AS attraction_id, a.name AS attraction_name, a.type AS attraction_type, a.description AS attraction_description, a.tips AS attraction_tips
    FROM destinations d
    LEFT JOIN attractions a ON d.id = a.destination_id
    WHERE d.id = ?;
  `;
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Destino não encontrado' });

    const destination = {
      id: results[0].id,
      name: results[0].name,
      description: results[0].description,
      imageUrl: results[0].image_url,
      location: results[0].location,
      attractions: results.map(row => ({
        id: row.attraction_id,
        name: row.attraction_name,
        type: row.attraction_type,
        description: row.attraction_description,
        tips: row.attraction_tips
      }))
    };
    res.status(200).json(destination);
  });
});

export default router;
