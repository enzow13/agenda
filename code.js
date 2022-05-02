const date = new Date();

function ConfirmarAgenda() {
    let texto = document.getElementById("input-box");
    let btn_confirm = document.getElementById("btn-confirm");
    const box_afazeres = document.getElementById("box-afazeres");

    let escrever_text = document.createTextNode(`${texto.value} - ${date.getHours()}:${date.getMinutes()}`);
    let elemento_text = document.createElement("p")
    elemento_text.appendChild(escrever_text);
    box_afazeres.appendChild(elemento_text);
}