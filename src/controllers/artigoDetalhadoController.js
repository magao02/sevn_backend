exports.getArtigoDetalhado = async function (req, res) {

  try {
    
    const artigoId = parseInt(req.params.id);
    const data = require('../data/artigoDetalhados.json');
    const artigo = data.artigos.find(artigo => artigo.id === artigoId);

    if (data.error) {
        return res.status(500).json({ message: "Erro ao carregar artigos principais.", details: data.error });
    }
    if (!artigo) {
        return res.status(404).json({ message: "Artigo não encontrado." });
    }

    return res.json(artigo);

  } catch (error) {
    return res.status(500).json({ message: "Erro ao processar a solicitação.", details: error.message });
  }  
};