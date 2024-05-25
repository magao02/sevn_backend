const controller = require('../controllers/artigosSecundariosController');
module.exports = app => {
  app.route('/artigossecundarios')
    .get(controller.getArtigosSecundarios);
}