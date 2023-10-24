const express = require('express');
const router = express.Router();
const ProductManager = require('../ProductManager');

const productManager = new ProductManager('data/productos.json');

router.get('/', async (req, res) => {
  // Lógica para obtener todos los productos
  const products = productManager.getProducts();
  res.json(products);
});

router.get('/:pid', async (req, res) => {
  // Lógica para obtener un producto por su ID
  const productId = parseInt(req.params.pid);
  try {
    const product = productManager.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

router.post('/', async (req, res) => {
  // Lógica para agregar un nuevo producto
  try {
    const newProduct = req.body;
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: 'Datos de producto no válidos' });
  }
});

router.put('/:pid', async (req, res) => {
  // Lógica para actualizar un producto por su ID
  const productId = parseInt(req.params.pid);
  try {
    const updatedProductData = req.body;
    res.status(200).json({ message: 'Producto actualizado' });
  } catch (error) {
    res.status(400).json({ error: 'Datos de producto no válidos' });
  }
});

router.delete('/:pid', async (req, res) => {
  // Lógica para eliminar un producto por su ID
  const productId = parseInt(req.params.pid);
  try {
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = router;
