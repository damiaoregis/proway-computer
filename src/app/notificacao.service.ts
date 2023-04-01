import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private sneckBar: MatSnackBar
  ) { }

  notificar(mensagem: string){
    this.sneckBar.open(mensagem, "OK", {
      duration:3000,
      verticalPosition: "top",
      horizontalPosition:"center"
    });
  }
}
