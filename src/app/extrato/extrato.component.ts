import { Component, OnInit } from '@angular/core';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];
  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit() {
    this.transferenciaService
      .todas()
      .subscribe((transferencias: Transferencia[]) => {
        this.transferencias = transferencias;
      });
  }
}
