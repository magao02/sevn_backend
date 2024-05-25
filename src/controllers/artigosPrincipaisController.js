exports.getArtigosPrincipais = async function (req, res) {

  try {

    const data = require('../data/artigosPrincipais.json');

    if (data.error) {
        return res.status(500).json({ message: "Erro ao carregar artigos principais.", details: data.error });
    }

    return res.json(data);

  } catch (error) {
    return res.status(500).json({ message: "Erro ao processar a solicitação.", details: error.message });
  }  
};
    