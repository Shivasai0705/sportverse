const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/sports_quiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log("Mongo Error", err));

/* ---------------------------- Auth App (Port 5000) ---------------------------- */
const authApp = express();
authApp.use(cors());
authApp.use(express.json());
authApp.use(express.static(path.join(__dirname, 'public')));

// User Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

// Signup Route
authApp.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Signin Route
authApp.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      'your_jwt_secret_key',
      { expiresIn: '1h' }
    );

    res.json({ 
      token, 
      userId: user._id, 
      name: user.name,
      redirect: '/dashboard.html'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve Login Page
authApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'loginpage.html'));
});

// Start Auth App on Port 5000
authApp.listen(5000, () => {
  console.log('Auth Server running on http://localhost:5000');
});

/* ---------------------------- Quiz App (Port 5001) ---------------------------- */
const quizApp = express();
quizApp.use(cors());
quizApp.use(express.json());

// Quiz Schema & Model
const quizSchema = new mongoose.Schema({
  Sport: String,
  Image: String,
  question: String,
  options: [String],
  answer: String
});
const Quiz = mongoose.model('Quiz', quizSchema);

// Quiz Route
quizApp.get('/api/quiz', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start Quiz App on Port 5001
quizApp.listen(5001, () => {
  console.log('Quiz Server running on http://localhost:5001');
});
