import { Component } from '@angular/core';
import { SimuladorComponent } from './components/simulador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimuladorComponent],
  template: '<app-simulador></app-simulador>'
})
export class AppComponent {}
