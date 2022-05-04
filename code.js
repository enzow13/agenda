let inputNovaTarefa = document.getElementById("NovaTarefa");
let btnAddTarefa = document.getElementById("btnAddTarefa");
let listaTarefas = document.querySelector("#ListaTarefas");

inputNovaTarefa.addEventListener("keypress", (e) => {

    if(e.key === 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);
        // Adicionar tarefa
    }
});

btnAddTarefa.addEventListener("click", (e) => {

    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa);
})

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {
    
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);
    inputNovaTarefa.value = '';
}

function criarTagLI(tarefa) {
    
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add("textoTarefa")
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('BtnAcao');
    btnEditar.innerHTML = '<i>EDIT</i>';
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')')

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('BtnAcao');
    btnExcluir.innerHTML = '<i>DEL</i>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li
}

function editar(idTarefa) {
    let li = document.getElementById(idTarefa);
    if (li) {
        
    }
};

function excluir(idTarefa) {
    let li = document.getElementById(idTarefa);
    if (li) {
        listaTarefas.removeChild(li);
    }
};