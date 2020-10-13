import express from 'express';
import jwt from 'express-jwt';
import cors  from 'cors';
import jwks  from 'jwks-rsa';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

// set all envs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// some routes 

app.listen(PORT, () => {
  console.log('Server is running on port ' +  PORT)
});