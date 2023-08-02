
import {Parcelas} from './parcelas';


class Financiamento{
    #taxaJuros; //juros
    #prazo; //em meses
    #pracelas = [];
    constructor(valor,entrada,taxaJuros,prazo) {
        this.taxaJuros = taxaJuros;
        this.#prazo =prazo;
        this.#parcelas.push(new this.#pracelas(0,0,0,0,valor - entrada));
    }

    static calcJuros(valor,taxaJuros) {
        return valor * (taxaJuros / 100);
    }

    calcParcelasMensais() {
        let saldo = this.#parcelas[this.#pracelas.length - 1].getSaldo();
        let prazo = this.#prazo - (this.#pracelas.length - 1);
        let amortizacao = saldo / prazo;
        for(let i=0; i < prazo;i++) {
            const numero = this.#pracelas.length;
            const juros = Financiamento.calcJuros(saldo,this.#taxaJuros);
            const valor = juros + amortizacao;
            saldo -= amortizacao;
            if (saldo < 0) {saldo = 0;}
            this.#pracelas.push(new Parcela(numero,valor,juros,amortizacao,saldo));
        }
    }
}