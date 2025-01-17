const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3100;

app.use(cors());
require('./routes/imagesRoutes')(app);
require('./routes/artigosprincipaisRoutes')(app);
require('./routes/artigosSecundariosRoute')(app);
require('./routes/artigoDetalhadoRoutes')(app);


app.use(express.static('../public'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

