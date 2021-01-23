const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors = require ('cors');
const path = require ('path');

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const MONGODB_URI = 'mongodb+srv://asanchez325:1234@cluster0.7bkbq.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3030;

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('./client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,  'client', 'build', 'index.html'));
  })
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);