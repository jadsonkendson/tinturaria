function grupo() {

    var x = document.getElementById('maquina').value

    if (x == 3 || x == 4 || x == 5 || x == 6 || x == 25) {

        document.getElementById('caixa-grupo').value = 2;
    } else if (x == 1 || x == 2) {
        document.getElementById('caixa-grupo').value = 9;

    } else if (x == 7) {
        document.getElementById('caixa-grupo').value = 3;

    } else if (x == 8 || x == 23 || x == 24) {
        document.getElementById('caixa-grupo').value = 6;

    } else if (x == 9 || x == 12) {
        document.getElementById('caixa-grupo').value = 5;

    } else if (x == 10 || x == 11) {
        document.getElementById('caixa-grupo').value = 11;

    } else if (x == 13 || x == 20 || x == 21) {
        document.getElementById('caixa-grupo').value = 8;

    } else if (x == 14 || x == 15) {
        document.getElementById('caixa-grupo').value = 10;

    } else if (x == 16 || x == 17 || x == 18 || x == 19) {
        document.getElementById('caixa-grupo').value = 7;

    } else if (x == 22) {
        document.getElementById('caixa-grupo').value = 4;

    } else if (x == 26 || x == 27) {
        document.getElementById('caixa-grupo').value = 12;

    } else if (x == 28 || x == 29 || x == 30 || x == 31) {
        document.getElementById('caixa-grupo').value = 3;
    } else if (x == 34) {
        document.getElementById('caixa-grupo').value = 2;
    } else if (x == 32 || x == 33) {
        document.getElementById('caixa-grupo').value = 4;
    } else if (x == 35 || x == 36 || x == 37) {
        document.getElementById('caixa-grupo').value = 'AVI';
    }

}

function hora() {
    // Função para formatar 1 em 01
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    // Cria intervalo
    const interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date();

        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) +
            ' ' + zeroFill(now.getHours()) + 'h' + zeroFill(now.getMinutes())

        // Exibe na tela usando a div#data-hora
        document.getElementById('data-hora').innerHTML = dataHora;
    }, 1000);
}