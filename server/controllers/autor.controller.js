const Autor = require("../models/autor.model");

module.exports.get_all = (req, res) => {
  // Autor.find()
    // Autor.find().sort({nombre: 1}) //ordenar de modo ascendiente : 1, asc, acscending modo descendeiente: -1, desc, descending
    Autor.find().collation({locale: "en"}).sort({nombre: 1})
    .then(autores => res.json(autores))
    .catch(err => res.status(400).json(err));
}

module.exports.create_autor = (req, res) => {
  Autor.create(req.body)
    .then( autor => res.json(autor))
    .catch( res => res.status(400).json(err));
}

module.exports.get_autor = (req, res) => {
  Autor.findOne({_id: req.params.id})
    .then( autor => res.json(autor))
    .catch( res => res.status(400).json(err));
}

module.exports.update_autor = (req, res) => {
  Autor.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})//new: crea un nuevo formulario | runValidators -> ejecuta denuevo las validaciones
    .then( autor => res.json(autor)) 
    .catch( res => res.status(400).json(err));
}

module.exports.delete_autor = (req, res) => {
  Autor.deleteOne({_id: req.params.id})
    .then( result => res.json(result))
    .catch( res => res.status(400).json(err));
}
