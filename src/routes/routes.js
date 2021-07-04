const routes = require("express").Router();
const ImovelController = require("../controllers/ImovelController");

routes.get('/', (req, res) => {
    res.send("Api de Imóveis!");
})

routes.get('/imoveis', ImovelController.index);
routes.get('/imovelEspecifico/:id', ImovelController.findById);
routes.post('/imovel', ImovelController.store);
routes.get('/imovelFilter', ImovelController.filterProperty);
routes.put('/imovel/:id', ImovelController.updateImovel);
routes.delete('/removerImovel/:id', ImovelController.deleteImovel);

module.exports = routes;