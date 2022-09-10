// Obrigatóriamente tem que se criar primeiro uma variavel que receberar as regras do
// Controller para que ao final do arquivo seja exportado para o routes e possa criar vinculo
// com as rotas em routes.

// CRUD
// create - Criar
// Read - Ler
// Update - Atualizar
// Delete - Deletar

const userControler = {
    // Read
    // Ler/Listar todos os usuários e pode filtrar eles.
    index: (req, res) => {
        const  users = [
            {
                id: 1,
                nome: "Marcel de Sousa Rocha",
            },
            {
                id: 2,
                nome: "Michelle de Souza Rocha",
            }
        ];
        res.json({data: users})
    },
    // Read
    // Ler/Listar um usuário.
    show: (req, res) => {
        const {id} = req.params;
        // res.send("Show " + id)
        res.send(`Show ${id}`)
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