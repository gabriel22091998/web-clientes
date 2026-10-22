import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cadastro-cliente',
  styleUrl: './cadastro-cliente.css',
  templateUrl: './cadastro-cliente.html',
})
export class CadastroCliente {

  //Injeção de dependência
  private http = inject(HttpClient);

  //Função executada ao abrir o componente
  ngOnInit() {
    //Requisição GET para a API
    this.http.get('http://localhost:8081/api/planos')
      .subscribe((resposta) => { //Capturando a resposta
        console.log(resposta); //Exibindo a resposta no console
      });
  }
}
