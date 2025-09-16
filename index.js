const express = require('express');
const app = express();
app.use(express.json());

app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "mi_token_secreto";
  if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));
