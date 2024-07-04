const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reservationRoutes = require('./routes/reservation');

const app = express();
app.use(bodyParser.json());
app.use(cors());  

app.use('/api/reservation', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
