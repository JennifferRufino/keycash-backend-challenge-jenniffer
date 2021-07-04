const Imovel = require("../models/Imovel");
const validator = require('validator');

module.exports = {
    async index(req, res) {
        const imoveis = await Imovel.findAll(); 

        return res.json(imoveis);
    },

    async findById(req, res) {
        try {
            const {id} = req.params;

            const existeImovel = await Imovel.findByPk(id);

            if (existeImovel == null) {
                return res.status(400).json({error: "Não existe imóvel com esse ID"})
            }

            return res.status(200).json(existeImovel);
        }catch(err) {
            return res.status(500).json({'error':"Server error"});
        }

    },

    async filterProperty(req, res) {
        try {
          const filterQuery = Object.assign({}, ...Object.keys(req.query).map(obKey => {
            return {[obKey]: validator.escape(req.query[obKey])}
          }));
      
          const imoveis  = await Imovel.findAll({
            where: filterQuery
         });
      
          return res.json(imoveis);
        } catch (err) {
          res.status(500).json({'error':"Server error"});
        }
    
      },

    async store(req, res) {
        const {
            name,
            description,
            bedrooms,
            bathrooms,
            parking,
            lotSize,
        } = req.body;

        const imoveis = await Imovel.create({
            name,
            description,
            bedrooms,
            bathrooms,
            parking,
            lotSize,
        }
        );

        return res.status(200).json(imoveis);
    },

    async updateImovel(req, res) {
        try {
            const { id } = req.params;
            const { name,
                description,
                bedrooms,
                bathrooms,
                parking,
                lotSize } = req.body;

                if(name && description && bedrooms && bathrooms && parking && lotSize) {
                        await Imovel.update(
                        {
                            name,
                            description,
                            bedrooms,
                            bathrooms,
                            parking,
                            lotSize
                        },
                        {
                            where: {
                                id
                            }
                        }
                    );
                    res.status(200).json({"message":'Successfully Updated'});
                }

                res.status(400).json({"message": "Impossível atualizar pois está faltando informações!"})
        }catch(err) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    },

    async deleteImovel(req, res) {
        Imovel.destroy({
            where: {'id' : req.params.id}
        }).then(function() {
            res.status(200).send("Imóvel deletado com sucesso!")
        }).catch(function(erro){
            res.status(400).send("Imóvel não foi apagado!")
        })
    }
}