const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/daily-love-calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;