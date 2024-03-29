import { Component, OnInit } from '@angular/core';
import { UsuarioFormComponent } from "../../componentes/usuario-form/usuario-form.component";
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-editar',
    standalone: true,
    templateUrl: './editar.component.html',
    styleUrl: './editar.component.css',
    imports: [UsuarioFormComponent,CommonModule]
})
export class EditarComponent implements OnInit{
    btnAcao : string = "Salvar"
    btnTitulo : string = "Editar Usuário"
    dadosUsuario! : Usuario
    $event: any;

    constructor(private _usuarioService : UsuarioService, private route : ActivatedRoute, private router : Router) {
        
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'))

        this._usuarioService.GetUsuarioFiltro(id).subscribe((data) => {
            this.dadosUsuario = data.dados;
        })
    }

    IncluirNovoUsuario(usuario : Usuario){
        this._usuarioService.EditarUsuario(usuario).subscribe((data) =>{
            this.router.navigate(['/'])
        })
    }

}
