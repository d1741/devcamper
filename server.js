const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
// load env vars:
dotenv.config({ path: './config/config.env' });

// connect to database:
connectDB();

// route files:
const bootcamps = require('./routes/bootcamps');

//init app variable:
const app = express();

//body parser:
app.use(express.json());

// dev logging middleware:
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// mount routers:
app.use('/api/v1/bootcamps', bootcamps);

// error handler:
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.brightMagenta
	)
);

// handle unhandled promise rejections:
process.on('unhandledRejection', (error, promise) => {
	console.log(`Error: ${error.message}`.red);
	//close server and exit process with a failure:
	server.close(() => process.exit(1));
});
