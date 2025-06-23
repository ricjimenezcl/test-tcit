const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE']
  }));
app.use(express.json());
app.use('/api/posts', postRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }

module.exports = app;