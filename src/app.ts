import express from 'express';
import connection from './models/connection';
import routes from './routes/index.routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', async (req, res) => {
  const [users] = await connection.query('SELECT * FROM Trybesmith.Products');
  res.status(200).json(users);
});

export default app;
