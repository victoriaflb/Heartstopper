// Selecionar todos os elementos .HQ
let divsHQ = document.querySelectorAll('.HQ');

// Loop para adicionar os event listeners em cada div .HQ
divsHQ.forEach(function(divHQ) {
    let botaoVisualizar = divHQ.querySelector('.button');
    let mediaPDF = divHQ.querySelector('.Aparecer');
    let fecharPDF = divHQ.querySelector('.pdf-Fechado');
    let divPrincipal = divHQ.querySelector('.fechar');

    botaoVisualizar.addEventListener("click", function () {
        botaoVisualizar.style.display = 'none';
        fecharPDF.style.display = 'block';
        divPrincipal.style.display = 'block';
        mediaPDF.style.display = 'block';
    });

    fecharPDF.addEventListener("click", function () {
        botaoVisualizar.style.display = 'block';
        fecharPDF.style.display = 'none';
        divPrincipal.style.display = 'none';
        mediaPDF.style.display = 'none';
    });
});
