// Get time function to do list
function getTime() {
    let dia = date.getDate();
    let horas = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return `${dia} - ${horas}:${min}:${sec}`;
}

// Live Clock Span
window.onload = displayClock();

function displayClock(){
    var data_hoje = new Date().toLocaleDateString();
    var horas_hoje = new Date().toLocaleTimeString();
    document.getElementById("span-dia").innerText = `${data_hoje} - ${horas_hoje}`;
    setTimeout(displayClock, 1000); 
  }


// Create element for list
function ConfirmarAgenda() {
    let date = new Date();
    let tempo_data = date.toLocaleTimeString();
    let texto = document.getElementById("input-box");
    const box_afazeres = document.getElementById("box-afazeres");

    let div_box = document.createElement("div");
    let p_msg_texto = document.createElement("p");
    let p_msg_tempo = document.createElement("span");
    let msg_texto = document.createTextNode(texto.value);
    let msg_tempo = document.createTextNode(tempo_data);

    p_msg_texto.appendChild(msg_texto);
    p_msg_tempo.appendChild(msg_tempo);

    div_box.appendChild(p_msg_texto);
    div_box.appendChild(p_msg_tempo);

    box_afazeres.appendChild(div_box);
    box_afazeres.appendChild(div_elemento_text);
    texto.value = " ";
}