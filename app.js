const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const ensureAuth = require('./middlewares/ensureAuth');
const errorMiddleware = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev'));

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//Routes
app.get('/', ensureAuth, (req, res) => {
  res.send(`Your email:${req.user.email}`);
});
app.use('/items', require('./routes/items'));
app.use('/auth', require('./routes/authRoutes'));

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`listening at PORT:${port}`);
});
