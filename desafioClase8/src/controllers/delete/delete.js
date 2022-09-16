const products = require('../../contenedor');

module.exports = (req, res) => {
  if (products.deleteById(req.params.id)) {
    res.status(200).json({ OK: 'Producto eliminado correctamente' });
  } else {
    res.status(404).json({ error: 'producto no encontrado' });
  }
};
