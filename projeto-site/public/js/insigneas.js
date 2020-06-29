function java(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 1){
                nomeImagem="./img/1.png";
                nomeInsignea="JAVA"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function react(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 2){
                nomeImagem="./img/2.png";
                nomeInsignea="React"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function phyton(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 3){
                nomeImagem="./img/3.png";
                nomeInsignea="Phyton"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function javascript(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 4){
                nomeImagem="./img/4.png";
                nomeInsignea="Javascript"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function html(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 5){
                nomeImagem="./img/51.png";
                nomeInsignea="HTML"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function css(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 6){
                nomeImagem="./img/61.png";
                nomeInsignea="CSS"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function flutter(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 7){
                nomeImagem="./img/7.png";
                nomeInsignea="Flutter"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }
  function nodejs(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 8){
                nomeImagem="./img/8.png";
                nomeInsignea="NodeJS"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }
  function angular(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 9){
                nomeImagem="./img/9.png";
                nomeInsignea="Angular"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }
  function cplus(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 10){
                nomeImagem="./img/10.png";
                nomeInsignea="C++"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function ccharp(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 11){
                nomeImagem="./img/11.png";
                nomeInsignea="C#"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function kotlin(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 12){
                nomeImagem="./img/12.png";
                nomeInsignea="Kotlin"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function php(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 13){
                nomeImagem="./img/13.png";
                nomeInsignea="PHP"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }

  function swift(){
    cards.innerHTML="";
      axios.get(`/funcionario/select4`).then(resposta =>{
        console.log(resposta);

        for(var i=0; i<resposta.data.length; i++){
            var nome = resposta.data[i].nomeFunc;
            var email = resposta.data[i].emailFunc;
            var nomeImagem = "";
            var nomeInsignea= "";

            if(resposta.data[i].fk_trofeu == 14){
                nomeImagem="./img/14.png";
                nomeInsignea="Swift"
                cards.innerHTML += `
                <div class="col-xl-3 col-md-6 mb-4">
              <div class="card shadow h-100" id="card" style="border-left: green;">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs2 font-weight-bold text-primary text-uppercase mb-1" id="nomef">${nome}</div>
                              <div class="h6 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">Conquista: ${nomeInsignea}</div><br><br>
                              
                          </div>
                          <div class="col-auto" id="trofeu">
                            <img src=${nomeImagem} style="width: 55px">
                          </div>
                        <div>
                            <div class="h8 mb-0 font-weight-bold text-gray-700" style="width: 100%; float: left;">${email}</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>`
            }}
      }).catch(erro =>{
          console.log(erro)
      })
  }
  