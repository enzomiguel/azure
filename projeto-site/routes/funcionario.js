var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Funcionario = require('../models').Funcionario; // aqui você coloca o mapeamento do modelo que irá utilizar nessa route


router.post('/cadastrar', function(req, res, next) {
	console.log('Inserindo novo Funcionario');

	var nomeFunc = req.body.nomeFunc; // depois de .body, use o nome (name) do campo em seu formulário de login
  var emailFunc = req.body.emailFunc; // depois de .body, use o nome (name) do campo em seu formulário de login	
  var senhaFunc = req.body.senhaFunc;
  var telefoneFunc = req.body.telefoneFunc;
  var funcaoFunc = req.body.funcaoFunc;
  var dataCadastro = req.body.dataCadastro;
  
  
  let instrucaoSql = `insert into funcionario (nomeFunc, emailFunc,senhaFunc,telefoneFunc,funcaoFunc,dataCadastro,fk_empresa,fk_admin,fk_maquina) values
   ('${nomeFunc}',' ${emailFunc}',' ${senhaFunc}',' ${telefoneFunc}',' ${funcaoFunc}',' ${dataCadastro}',1,1,1);`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
    model: Funcionario,
    mapToModel: true
}).then(resultado => {
    console.log('Funcionario cadastrado');
}).catch(erro => {
    console.error(erro);
    res.status(500).send(erro.message);
  });
});


//redefinir senha
router.post('/trocarsenha', function(req, res, next) {
	console.log('Trocando senha');

	var login = req.body.emailAdmin; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senhaAdmin; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `update funcionario set senhaFunc='${senha}'  where emailFunc='${login}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
        model:Funcionario,
        mapToModel: true
    }).then(resultado => {
        console.log( "Senha redefinida com sucesso");
        res.send(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
      });
});






/* Select na tabela do modelo*/
router.get('/selectRanking', function (req, res, next) {
  
  var login = req.params.emailAdmin; // depois de .body, use o nome (name) do campo em seu formulário de login
	

  const instrucaoSql = `SELECT  f.nomeFunc, f.horasMes from administrador a inner join
   funcionario f on a.fk_empresa = f.fk_empresa where a.emailAdmin = 'yoshi@c6bank.com' order by f.horasMes desc;`;

  sequelize.query(instrucaoSql, {
    model: Funcionario, // aqui voce coloca o model configurado acima
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
