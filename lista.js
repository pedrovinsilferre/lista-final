array_tarefas = [];

function listar() {
  var modelo = document.getElementById("modelo");
  var lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i of array_tarefas) {
    var item = modelo.content.cloneNode(true);
    var li = item.querySelector("li");

    var botao = li.querySelector("input[type='button']");
    botao.onclick = function () {
      remover(i);
    };

    li.append(i);
    lista.append(li);
  }
}
//Adicionar item na lista
function add_to_list() {
  var texto_escrito = document.getElementById("textoDigitado");
  if (texto_escrito.value != "") {
    array_tarefas.push(texto_escrito.value);
    listar();
    texto_escrito.value = "";
  }
}
//apagar item da lista
function remover(str) {
  for (let i = 0; i < array_tarefas.length; i++) {
    if (array_tarefas[i] === str) {
      array_tarefas.splice(i, 1);
    }
  }

  listar();
}

//adicionar com Enter
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add_to_list();
  }
});
