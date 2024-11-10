import express from 'express';
import routes from './routes/index.js';
import db from './config/connection.js';

const cwd = process.cwd();

const PORT = 3001;
const app = express();


const socialNetwork = cwd.includes('01-social-network-api')
  ? cwd.split('01-Activities')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${socialNetwork} running on port ${PORT}!`);
    });
});