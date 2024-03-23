import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  
    Listausuarios: Usuario[] = [];
    ListausuariosGeral: Usuario[] = [];

    constructor(private usuarioService : UsuarioService){}

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
}

