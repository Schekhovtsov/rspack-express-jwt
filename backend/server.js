const express = require('express');
const cors = require('cors');

const app = express();

const port = 3010;

app.use(cors());
app.use(express.json());

const authRoute = require('./routes/index');

app.use('/', authRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
