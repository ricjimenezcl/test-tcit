const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE']
  }));
app.use(express.json());
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});