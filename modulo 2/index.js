import {Cliente} from "./Conta/Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./ContaCorrente/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new contaSalario(cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);


console.log(contaSalario);
