const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/autoresdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=> console.log('Conectado con db'))
  .catch( err => console.log('Error al conectarse con BD '+err));