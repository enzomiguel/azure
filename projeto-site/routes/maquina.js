var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Maquina = require('../models').Maquina; // aqui você coloca o mapeamento do modelo que irá utilizar nessa route

/* Select na tabela do máquina*/
router.get('/select', function (req, res, next) {

  const instrucaoSql1 = `SELECT COUNT(status) as dados FROM maquina as maq, funcionario as func where func.fk_admin=3 and maq.fk_func=func.idFunc GROUP BY status`;

  sequelize.query(instrucaoSql1, {
    model: Maquina,
    mapToModel: true
  })
    .then(resultado => {
      console.log(resultado);
      res.json(resultado);
    }).catch(erro => {
      console.error(erro);
      res.status(500).send(erro.message);
    });
});

module.exports = router;
