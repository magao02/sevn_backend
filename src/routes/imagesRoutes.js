const path = require('path');
module.exports = app => {
  
  app.get('/imagens/:imagemNome', (req, res) => {
    const imagemNome = req.params.imagemNome;
    res.sendFile(path.resolve('public', imagemNome));
  });
}