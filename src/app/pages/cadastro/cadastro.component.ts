import { Component } from '@angular/core';
import { UsuarioFormComponent } from "../../componentes/usuario-form/usuario-form.component";
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    imports: [UsuarioFormComponent]
})
export class CadastroComponent {

    btnAcao = "Salvar";
    btnTitulo = "Cadastrar Pedido";

    constructor(private usuarioService : UsuarioService, private router : Router) {
        
    }

    createUsuario(usuario : Usuario){
        this.usuarioService.CreateUsuario(usuario).subscribe((data) =>{
            this.router.navigate(['/']);
        });
    }
}
