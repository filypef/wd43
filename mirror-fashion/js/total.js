(() => {
    var $inputQuantidade = document.querySelector('#qtd');
    var $outputTotal = document.querySelector('#total');

    console.log($inputQuantidade);
    console.log($outputTotal);
    $inputQuantidade.oninput = function (){
        debugger;
        var preco = document.querySelector('#preco').textContent;

        preco = preco.replace('R$', '');
        preco = preco.replace(',', '.');
        preco = parseFloat(preco);

        var quantidade = $inputQuantidade.value;

        var total = quantidade * preco;
        total = "R$" + total.toFixed(2);
        total = total.replace('.', ',');

        $outputTotal.value = total;
    }
})();
