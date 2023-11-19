const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const expenseRoutes = require('./routes/expense');

const app = express();
app.use(bodyParser.json({ extended: false }));

const cors = require('cors');
app.use(cors());

app.use('/expense', expenseRoutes);


sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => console.log(err));
