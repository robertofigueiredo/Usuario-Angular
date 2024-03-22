import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
    usuarios: Usuario[] = [];
    usuariosGeral: Usuario[] = [];

    constructor(private usuarioService : UsuarioService){}

    ngOnInit(): void {
      
    }
}
