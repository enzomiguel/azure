var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Monitoramento = require('../models').Monitoramento; // aqui você coloca o mapeamento do modelo que irá utilizar nessa route

/* Select na tabela do modelo*/
router.get('/select', function (req, res, next) {

   let instrucaoSql = `select round(valorCPU,2) as cpu, valorMemoria, valorDisco from monitoramento where fk_maquina=1003; `;

  sequelize.query(instrucaoSql, {
    model: Monitoramento, // aqui voce coloca o model configurado acima
    mapToModel: true
  })
    .then(resultado => {
      console.log(`Encontrados: ${resultado.length}`);
      res.json(resultado);
    }).catch(erro => {
      console.error(erro);
      res.status(500).send(erro.message);
    });
});

module.exports = router;
