require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const swaggerJsDoc = require('../swagger.json');
const swaggerUi    = require('swagger-ui-express');

const routes = require("./routes/routes");

require('./database');

const PORT = process.env.PORT || 3333;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

