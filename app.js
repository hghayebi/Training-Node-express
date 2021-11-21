// npm modules
const express = require('express');
const bodyParser = require('body-parser');

// Node Ccore modules
const path = require('path');

// Local modules
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const app = express();

// Parsing body
app.use(bodyParser.urlencoded({ extended: true }));

// Serveing static files
app.use(express.static(path.join(__dirname, 'public')));

// Seting templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
