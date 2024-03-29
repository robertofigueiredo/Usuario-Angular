import { Component, Inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models/Usuario';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [CommonModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit{

  inputdata : any;
  usuario!: Usuario;

  constructor( 
    private _service : UsuarioService, 
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private ref:MatDialogRef<ExcluirComponent>) {
    
  }
  ngOnInit(): void {
    this.inputdata = this.data;

    this._service.GetUsuarioFiltro(this.inputdata.id).subscribe((data)=>{
      this.usuario = data.dados;
    })
  }

  excluir(){
    this._service.ExcluirUsuario(this.inputdata.id).subscribe((data) =>{
      this.ref.close();
      window.location.reload();
    })
  }

  cancelar() {
    this.ref.close();
  }
}
