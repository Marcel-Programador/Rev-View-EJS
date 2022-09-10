const express = require("express");
// Variavel app executando o pacote express importado para o arquivo pela variavel express.
const app = express();

const port = 3000;

const userRoute = require("./src/routes/userRoute")

app.use(userRoute);

app.listen(port, () => {
    console.log("Estamos rodando na porta: " + port);
});
