const express = require('express');
const app = express();
const port = process.env.PORT || 3100;


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});