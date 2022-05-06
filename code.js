let inputNovaTarefa = document.getElementById("NovaTarefa");
let btnAddTarefa = document.getElementById("btnAddTarefa");
let listaTarefas = document.querySelector("#ListaTarefas");

inputNovaTarefa.addEventListener("keypress", (e) => {

    if(e.key == 'Enter') {
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
    
    if (inputNovaTarefa.value == '') {
        tarefaSemText();
        
    } else {
        let li = criarTagLI(tarefa);
        listaTarefas.appendChild(li);
        inputNovaTarefa.value = '';
    }

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
        lspan = li.getElementsByClassName('textoTarefa')[0];
        console.log(lspan);
        let change_text = prompt('O que quer editar?');  
        lspan.innerText = change_text;
    }
};

function excluir(idTarefa) {
    let li = document.getElementById(idTarefa);
    if (li) {
        listaTarefas.removeChild(li);
    }
};

// Dark Mode

let icon_darkmode = document.getElementById("i-change-mode");

icon_darkmode.setAttribute('onclick', 'tornarDarkMode()');

var check_darkmode = false
function tornarDarkMode() {
    
    if (!check_darkmode) {
        // Background Color
        document.body.style.backgroundColor = '#191818';

        // Icon Moon
        icon_darkmode.style.color = '#FFF';

        // p and h1
        document.getElementById('p-name').style.color = '#FFF';
        document.getElementById('h1-title').style.color = '#FFF';

        check_darkmode = true;
    } else {
        // Background Color
        document.body.style.backgroundColor = '#FFF';

        // Icon Moon
        icon_darkmode.style.color = '#191818';

        // p and h1
        document.getElementById('p-name').style.color = '#191818';
        document.getElementById('h1-title').style.color = '#191818';

        check_darkmode = false;
    }
}

// Caso não tenha digitado nada na tarefa

function tarefaSemText() {
    let warning_text = document.getElementById('p-warning');

    warning_text.style.display = 'block';
    interval_warning = setInterval(() => {warning_text.style.display = 'none'}, 5000)
}