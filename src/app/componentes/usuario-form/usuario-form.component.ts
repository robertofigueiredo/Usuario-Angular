import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {

  @Output() onCadastrarUsuario = new EventEmitter<Usuario>();
  @Input() btnAcao! : string;
  @Input() btnTitulo! : string;
  @Input() dadosUsuario : Usuario | null = null;

  usuarioForm! : FormGroup;

  constructor() {
    
  }
  ngOnInit(): void {
    
      this.usuarioForm = new FormGroup({
            id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
            nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : '', [Validators.required]),
            sobrenome: new FormControl(this.dadosUsuario ? this.dadosUsuario.sobrenome : '', [Validators.required]),
            turno: new FormControl(this.dadosUsuario ? this.dadosUsuario.turno : '', [Validators.required]),
            departamento: new FormControl(this.dadosUsuario ? this.dadosUsuario.departamento : '', [Validators.required]),
            ativo: new FormControl(this.dadosUsuario ? this.dadosUsuario.ativo : true),
            dataDeCriacao:new FormControl(new Date()),
            dataDeAlteracao: new FormControl(new Date()),
    
      });

  }

  CadastrarUsuario(){
      this.onCadastrarUsuario.emit(this.usuarioForm.value);
  }

}
