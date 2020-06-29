function dadosFunc(){
    cards.innerHTML="";
    axios.get('funcionario/select').then(resultado =>{
      console.log(resultado);

      var todas = resultado.data.length;
      statusMaquinas.innerHTML = todas;
      var estaveis = 0;
      var criticas = 0;
      var alertas = 0;
      var desconhecidas = 0;

      for(var i=0; i < resultado.data.length; i++){
        var funcionario = resultado.data[i].nomeFunc;
        var maquina = resultado.data[i].fk_maquina;
        var status = resultado.data[i].status;
        console.log(status);


         if(status == "Estável"){
           estaveis+=1;
           statusEstavel.innerHTML = estaveis;
          cards.innerHTML += `
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-estavel shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }else if(status == "Alerta"){
          alertas+=1;
          statusAlerta.innerHTML = alertas;
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-alerta shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }else if(status == "Crítico"){
          criticas+=1;
          statusCritica.innerHTML= criticas;
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-critico shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }else{
          desconhecidas+=1;
          statusDesconhecida.innerHTML = desconhecidas;
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
        }
      }

    }).catch(erro =>{
      console.log(erro);
    })
  }
function gerarEstaveis(){
    cards.innerHTML="";
    axios.get('funcionario/select').then(resultado =>{
      console.log(resultado);

      for(var i=0; i < resultado.data.length; i++){
        var funcionario = resultado.data[i].nomeFunc;
        var maquina = resultado.data[i].fk_maquina;
        var status = resultado.data[i].status;
        console.log(status);

         if(status == "Estável"){
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-estavel shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }
      }

    }).catch(erro =>{
      console.log(erro);
    })
  }

  function gerarAlertas(){
    cards.innerHTML="";
    axios.get('funcionario/select').then(resultado =>{
      console.log(resultado);

      for(var i=0; i < resultado.data.length; i++){
        var funcionario = resultado.data[i].nomeFunc;
        var maquina = resultado.data[i].fk_maquina;
        var status = resultado.data[i].status;
        console.log(status);

         if(status == "Alerta"){
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-alerta shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }
      }

    }).catch(erro =>{
      console.log(erro);
    })
  }

  function gerarCriticos(){
    cards.innerHTML="";
    axios.get('funcionario/select').then(resultado =>{
      console.log(resultado);

      for(var i=0; i < resultado.data.length; i++){
        var funcionario = resultado.data[i].nomeFunc;
        var maquina = resultado.data[i].fk_maquina;
        var status = resultado.data[i].status;
        console.log(status);

         if(status == "Crítico"){
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-critico shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }
      }

    }).catch(erro =>{
      console.log(erro);
    })
  }

  function gerarDesconhecidos(){
    cards.innerHTML="";
    axios.get('funcionario/select').then(resultado =>{
      console.log(resultado);

      for(var i=0; i < resultado.data.length; i++){
        console.log("Entrou for" + i)
        var funcionario = resultado.data[i].nomeFunc;
        var maquina = resultado.data[i].fk_maquina;
        var status = resultado.data[i].status;
        console.log(status);

         if(status == "Desconhecido"){
          cards.innerHTML += `
              
              <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100" id="card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${funcionario}</div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Número máquina: <span id="nummaq">${maquina}</span></div>
                                    <div class="h6 mb-0 font-weight-bold text-gray-700"style="width: 100%; float: right;">Status: <span id="statusid">${status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `
          
        }
      }

    }).catch(erro =>{
      console.log(erro);
    })
  }