const controller = require('../controllers/artigosPrincipaisController');
module.exports = app => {
  app.route('/artigosprincipais')
    .get(controller.getArtigosPrincipais);
}