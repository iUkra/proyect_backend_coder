const express = require('express');
const passport = require('passport');

const router = express.Router();

// Ruta para obtener el usuario actual asociado al token JWT
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
