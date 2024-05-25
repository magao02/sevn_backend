
const controller = require('../controllers/artigoDetalhadoController');
module.exports = app => {
  
  app.route('/artigo/:id')
    .get(controller.getArtigoDetalhado);
}