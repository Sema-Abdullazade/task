const resultDiv = document.getElementById('result');
function hesabla() {
    resultDiv.innerHTML =""
    let daxilEdilənMəbləğ = parseInt(document.getElementById('amount').value);
    let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
    let netice = [];
    let qaliq = daxilEdilənMəbləğ;


    for (let i = 0; i < pullar.length; i++) {
        let pulDərəcəsi = pullar[i];
        let pulSayı = Math.floor(qaliq / pulDərəcəsi);
        netice.push(pulSayı);
        qaliq -= pulSayı * pulDərəcəsi;
        if (pulSayı > 0) {
            resultDiv.innerHTML += '<li>' + pulSayı + ' dənə ' +  `<img class="sekil" src="./images/${pulDərəcəsi}.jpg"/></li>`;
        }
    }
}





//document.addEventListener("DOMContentLoaded", function() {
//    const board = document.getElementById("board");
//    
//    for (let i = 0; i < 64; i++) {
//        const cell = document.createElement("div");
//        cell.classList.add("cell");
//        if ((Math.floor(i / 8) + i) % 2 === 0) {
//            cell.style.backgroundColor = "#b58863"; // cüt hücrə
//        } else {
//            cell.style.backgroundColor = "#f0d9b5"; // tək hücrə
//        }
//        board.appendChild(cell);
//    }
//});