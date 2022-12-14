const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose =  require('mongoose');

dotenv.config();


const userRoutes = require('./routers/userRouter.js');
const groupRoutes = require('./routers/groupRouter.js');
const expenseRoutes = require('./routers/expenseRouter');

const Campaign = require('./models/userModel.js');
const Group = require('./models/groupModel.js');
const Expense = require('./models/expenseModel');

const app = express();
app.use(express.json());
app.use(bodyParser.json({limit: '30mb', extends: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extends: true}));
app.use(cors()); 

const users = [];

app.use('/', userRoutes);
app.use('/', groupRoutes);
app.use('/', expenseRoutes);



// app.post('/api/google-login', async (req, res) => {

// });

const uri = "mongodb+srv://Pranay:KEYYs1PXzpmdEspb@cluster0.kx27fbs.mongodb.net/?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
.catch((error) => console.log(`${error} did not connect`));
