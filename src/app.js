const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');
const app = express();
// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
// Health check
app.get('/health', (req, res) => {
    console.log('health');
    res.json({ status: 'ok', timestamp: new Date() });
});
// Routes
app.use('/api/tasks', taskRoutes.getAllTasks());
// Error handling
// app.use(errorHandler);

app.listen(50, () => {
    console.log('server started');
})

module.exports = app;