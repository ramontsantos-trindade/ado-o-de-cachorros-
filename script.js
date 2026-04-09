const cpfsCadastrados = [11122233344]

const formulario = document.querySelector('.formulario-adocao');

formulario.querySelector('.select-moradia').addEventListener('change', function() {
    const tipo = this.value;
    const blocoCasa = document.querySelector('.extra-casa');
    const blocoApto = document.querySelector('.extra-apto');

    blocoCasa.classList.add('hidden');
    blocoApto.classList.add('hidden');

    if (tipo === 'casa') blocoCasa.classList.remove('hidden');
    if (tipo === 'apartamento') blocoApto.classList.remove('hidden');
});
