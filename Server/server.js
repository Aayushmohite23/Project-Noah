const express = require('express');
const dotenv = require('dotenv');
const app = express();

const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const privacyRoutes = require('./routes/privacyRoutes');
const cors = require('cors');
const routes = require('./routes');
// const index = require('./routes/index');
// const users = require('./routes/users');

// app.use(helmet({
//   dnsPrefetchControl: {
//     allow: true
//   }
// }));
// app.use(cors());
// app.use(compression());


// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use(routes);


dotenv.config();
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
// Middleware
// app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
require('./routes/index');

// Routes for Privacy Section ✅
// app.use('/api/privacy', privacyRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 app.get("/",(req, res)=>{
      res.send("This is the render page");
 })