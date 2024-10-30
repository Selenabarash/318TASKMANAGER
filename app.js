const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

app.use('/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
