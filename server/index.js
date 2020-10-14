import express from 'express';
import jwt from 'express-jwt';
import cors  from 'cors';
import jwks  from 'jwks-rsa';
import bodyParser from 'body-parser';
// Data to serve
import { courses } from './coursesData';

const app = express();
const PORT = 3001;

// set all envs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// some routes 
app.get('/', (req, res) => {
  res.send({ message: "Alles gut!" });
});

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log('Server is running on port ' +  PORT)
  // console.log(courses);
});