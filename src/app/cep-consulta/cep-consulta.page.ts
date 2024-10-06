import { Component } from '@angular/core';

@Component({
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.page.html',
  styleUrls: ['./cep-consulta.page.scss'],
})
export class CepConsultaPage {
  cep: string = '';
  dados: any = null;
  errorMessage: string = '';

  constructor() {}

  resetResponse() {
    this.dados = null;
    this.errorMessage = '';
  }

  async consultarCep() {
    this.resetResponse(); // Reseta a resposta antes de consultar
  
    if (!this.cep) {
      this.errorMessage = 'Por favor, digite um CEP válido.';
      return;
    }
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado.');
      }
      this.dados = await response.json();
    } catch (error: any) {  // use any para o tipo de error
      this.errorMessage = error instanceof Error ? error.message : 'Erro desconhecido.';
    }
  }
  
  
}
