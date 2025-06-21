import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SimulacionRequest {
  monto: number;
  tasa_anual: number;
  plazo_meses: number;
  fecha_inicio: string;
}

export interface Cuota {
  numero_cuota: number;
  fecha_pago: string;
  cuota_total: number;
  interes_mes: number;
  abono_capital: number;
  saldo_restante: number;
}

export interface SimulacionResponse {
  cuota_mensual: number;
  total_pagado: number;
  total_intereses: number;
  tabla_amortizacion: Cuota[];
}

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {
  private apiUrl = 'http://localhost:3000/api/simulador';

  constructor(private http: HttpClient) {}

  simularCredito(data: SimulacionRequest): Observable<SimulacionResponse> {
    return this.http.post<SimulacionResponse>(this.apiUrl, data);
  }
}
