const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const appRoutes = require('./Routes/appRoutes');
const usersRoutes = require('./Routes/salesRoutes');

app.use('/', appRoutes);
app.use('/api/v1/sales', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
