import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroCliente } from './components/cadastro-cliente/cadastro-cliente';

@Component({
  imports: [RouterOutlet, CadastroCliente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('web-clientes');
}
