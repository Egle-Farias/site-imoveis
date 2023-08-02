export class parcelas {
    #numero;
    #valor;
    #amortizacao;
    #saldo;
    constructor(numero,valor,juros,amortizacao,saldo) {
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = Saldo;
    }

    getSaldo() {
        return this.#saldo;
    }

    getDasosFormatados() {
       const dados = [];
       dados.push(this.#numero);
       dados.push(this.#valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})); 
       dados.push(this.#amortizacao.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
       dados.push(this.#juros.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));  
       dados.push(this.#saldo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
       return dados;
    }
}

exibeParcelas() {
    const parcelas = this.#parcelas.slice(1);
    for(const parcela of parcelas) {

    }
}