import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url =
    'https://my-json-server.typicode.com/filipemelo2002/bytebank/transferencias';
  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia> {
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
