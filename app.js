function pedirNamoro() {
    let resposta = prompt("Bruna Geovana Alves Cristal aceita namorar comigo? (sim/não)");

    if (resposta.toLowerCase() === "sim") {
        alert("Achei que esse dia nunca ia chegar, te amo");
    } else {
        alert("Sério que você respondeu errado??? Tenta de novo!");
        pedirNamoro(); // Pergunta novamente
    }
}

pedirNamoro();