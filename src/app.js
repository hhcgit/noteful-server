require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const foldersRouter = require('./folders/folders-router');
const notesRouter = require('./notes/notes-router');

const auth = require('./auth/auth');
const errorHandler = require('./error/error');
const corsOptions = require('./cors/cors');
const { NODE_ENV } = require('./config');

const app = express();
app.use(cors());

app.use('/api/folders', foldersRouter)
app.use('/api/notes', notesRouter)
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Welcome World!');
});

const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());

app.use(auth);

app.use(errorHandler);
  

module.exports = app;
