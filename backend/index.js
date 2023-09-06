const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors()); // CORS is a mechanism that allows browsers to request data from 3rd party URLs (or origins)
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

dotenv.config(); // Load environment variables from .env file

// Connection with DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected with DB');
  })
  .catch((error) => {
    console.log('Error occurred during connecting with db', error);
  });

// Schema
// Collection - Keyword
const keywordSchema = new mongoose.Schema({
  val1: { type: String, required: true },
  val2: { type: String, required: true },
  val3: { type: String, required: true },
  val4: { type: String, required: true },
});

const Keyword = mongoose.model('Keyword', keywordSchema);

// Collection - Video
const videoSchema = new mongoose.Schema({
  selectedType: { type: String, required: true },
  selectedKeyword: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  link: { type: String, required: true }
});

const video = mongoose.model('Video', videoSchema);


// Routes
app.post('/add-keyword', async (req, res) => {
  console.log(req.body);
  const { val1, val2, val3, val4 } = req.body;
  try {
    const newKeyword = new Keyword({ val1, val2, val3, val4 });
    await newKeyword.save();
    res.status(200).send('Successfully added');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.get('/getAll-keyword', async (req, res) => {
  try {
    const Keyword = mongoose.model('Keyword');
    const keywords = await Keyword.find({});
    if (keywords.length > 0) {
      res.status(200).json(keywords);
    } else {
      res.status(404).json({ message: 'No keywords found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in Fetching Data' });
  }
});

app.get('/getlatest-keyword', async (req, res) => {
  try {
    const Keyword = mongoose.model('Keyword');
    const keywords = await Keyword.find({});
    if (keywords.length > 0) {
      const latestKeyword = keywords[keywords.length - 1];
      res.status(200).json(latestKeyword);
    } else {
      res.status(404).json({ message: 'No keywords found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in Fetching Data' });
  }
});

app.post('/add-video', async(req, res) => {
  console.log(req.body);
  const { selectedType, selectedKeyword, title, thumbnail, link } = req.body;
  try {
    const newVideo = new video({ selectedType, selectedKeyword, title, thumbnail, link });
    await newVideo.save();
    res.status(200).send('Successfully added');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World');
});
