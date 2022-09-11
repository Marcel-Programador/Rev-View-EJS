// Obrigatóriamente tem que se criar primeiro uma variavel que receberar as regras do
// Controller para que ao final do arquivo seja exportado para o routes e possa criar vinculo
// com as rotas em routes.

var users = require("../data/users.json");
users = users.data;
// CRUD
// create - Criar
// Read - Ler
// Update - Atualizar
// Delete - Deletar

const userControler = {
    // Read
    // Ler/Listar todos os usuários e pode filtrar eles.
    index: (req, res) => {
        return res
        .status(200)
        .json({data: users, message: "Listagem realizada com sucesso!"});
    },
    // Read
    // Ler/Listar um usuário.
    show: (req, res) => {
        const {id} = req.params;
        const result = users.find((user) => {
            // return user.id === id;
            // return user.id.toString() === id;
            return user.id === parseInt(id);
        });
        if(result === undefined){
            return res.status(400).json({message: "Nenhum usuário encontrado"});
        }
        return res
        .status(200)
        .json({data: result, message: "Usuário encontrado"});
        // res.send("Show " + id)
    },
    // Create
    // Criar um usuário.
    store: (req, res) => {
        res.send("Store")
    },
    // Update
    // Atualizar um usuário.
    update: (req, res) => {
        const {id} = req.params;
        // rres.send("Update " + id)
        res.send(`Update ${id}`)
    },
    // Delete
    // Deletar um usuário.
    delete: (req, res) => {
        const {id} = req.params;
        // rres.send("Delete " + id)
        res.send(`Delete ${id}`)
    },
    save: (req, res) => {
        const {id, name} = req.params;
        if(name){
        // rres.send("Save " + id)
        res.send(`Save ${id} e ${name}`)
        }else{
            res.send(`Save ${id}`)
        }

    },
    notFound: (req, res) => {
        res.send("404 - Not Found");
    },
};
module.exports = userControler;

// comentando para realizar o commit