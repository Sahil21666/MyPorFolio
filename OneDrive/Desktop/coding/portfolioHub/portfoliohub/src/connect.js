import express from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
import pkg from 'body-parser';
const {json} =pkg

const app = express();
const PORT = 5000;

app.use(json())

// MongoDB connection
connect('mongodb+srv://Sahil21666:sahil123@igmarment.5fmfqul.mongodb.net/?retryWrites=true&w=majority&appName=iGmarment'
 
).then(() => {
  console.log('MongoDB connected!');
}).catch((err) => {
  console.error('Connection error', err);
});

// Middleware
app.use(cors());
app.use(json());

// Define a schema for form submissions
const contactSchema = new Schema({
  name: String,
  email: String,
  message: String
});

const Contact = model('Contact', contactSchema);

// API route to handle form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message
  });

  newContact.save()
    .then(() => res.status(200).json({ msg: 'Form data saved successfully!' }))
    .catch((err) => res.status(500).json({ error: 'Failed to save data' }));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});