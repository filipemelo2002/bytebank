import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: string = '';
  constructor() {}

  ngOnInit() {}

  transferir() {
    console.log('Solicitada nova transfência!');
    this.aoTransferir.emit({
      valor: this.valor,
      destino: this.destino,
    });
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
