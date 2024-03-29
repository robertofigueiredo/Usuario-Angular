import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            RouterLink, 
            MatTableModule, 
            MatCardModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {  
  
  Listausuarios: Usuario[] = [];
  ListausuariosGeral: Usuario[] = [];

  columnsToDisplay = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir'];

  constructor(private usuarioService : UsuarioService, public matDialog: MatDialog){}

  ngOnInit(): void {
    
    this.usuarioService.GetUsuarios().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');

        this.Listausuarios = data.dados;
        this.ListausuariosGeral = data.dados;
        
      })
    });
  }
    
  SearchUsuario(event : Event){
      const target = event.target as HTMLInputElement;
      const valor = target.value.toLowerCase();

      this.Listausuarios = this.ListausuariosGeral.filter(retornousuario =>{
        return retornousuario.nome.toLowerCase().includes(valor);
      })
  }

  OpenDialog(id : number){
    this.matDialog.open(ExcluirComponent,{
      width: '450px',
      height: '45z0px',
      data: {
        id: id
      }
    })
  }
}

