const lista = require("./usuarios.json");

let obj = {
    "id": 0,
    "nome": "",
      "idade": 0,
      "sexo": "",
      "email": "",
      "telefone": "",
      "ativo": true

}

for(let i = 0; i < lista.length; i++){
    obj.id = lista[i].id;
    obj.nome = lista[i].nome;
    obj.idade = lista[i].idade;
    obj.sexo = lista[i].sexo;
    obj.email = lista[i].email;
    obj.telefone = lista[i].telefone;
    lista[i] = obj;
}
console.log(lista)