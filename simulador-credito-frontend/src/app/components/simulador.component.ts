import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SimuladorService,SimulacionRequest,Cuota,} from '../services/simulador.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.scss',
})
export class SimuladorComponent {
  monto = 0;
  tasa_anual = 0;
  plazo_meses = 0;
  fecha_inicio = '';

  cuota = 0;
  totalPagado = 0;
  totalIntereses = 0;
  planPagos: Cuota[] = [];

  constructor(private simuladorService: SimuladorService) {}

  displayedColumns: string[] = [
    'numero_cuota',
    'fecha_pago',
    'cuota_total',
    'interes_mes',
    'abono_capital',
    'saldo_restante',
  ];

  simular() {
    const datos: SimulacionRequest = {
      monto: this.monto,
      tasa_anual: this.tasa_anual,
      plazo_meses: this.plazo_meses,
      fecha_inicio: this.fecha_inicio,
    };

    this.simuladorService.simularCredito(datos).subscribe((respuesta) => {
      this.cuota = respuesta.cuota_mensual;
      this.totalPagado = respuesta.total_pagado;
      this.totalIntereses = respuesta.total_intereses;
      this.planPagos = respuesta.tabla_amortizacion;
    });
  }
}
