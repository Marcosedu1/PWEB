const axios = require('axios');

axios.get('https://viacep.com.br/ws/18540444/json/')
  .then((response) => {
    // Os dados da resposta da API estão em response.data
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Erro na requisição:', error);
  });