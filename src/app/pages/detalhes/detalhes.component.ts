import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from  '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterLink, 
            CommonModule,
            MatButtonModule,
            MatCardModule,
            MatInputModule,
            MatSelectModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  usuario? : Usuario; 
  
  constructor(private _usuarioService : UsuarioService, private route : ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this._usuarioService.GetUsuarioFiltro(id).subscribe((data) => {

        const dadosformat = data.dados;

        dadosformat.dataDeAlteracao = new Date(dadosformat.dataDeCriacao!).toLocaleDateString('pt-BR');
        dadosformat.dataDeCriacao = new Date(dadosformat.dataDeCriacao!).toLocaleDateString('pt-BR');


        this.usuario = data.dados;
      })
  }
}
