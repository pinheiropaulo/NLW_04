import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Ola Mundo' });
});

app.post('/', (req, res) => {
  return res.json({ message: 'Os dados foram salvos' });
});

app.listen(3333, () => console.log('Server is running'));
