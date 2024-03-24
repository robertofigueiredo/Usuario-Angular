import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../models/Usuario';


@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {

  @Output() onCadastrarUsuario = new EventEmitter<Usuario>();

  usuarioForm! : FormGroup;

  constructor() {
    
  }
  ngOnInit(): void {
    
      this.usuarioForm = new FormGroup({
            id: new FormControl(0),
            nome: new FormControl(''),
            sobrenome: new FormControl(''),
            ativo: new FormControl(true),
            dataDeCriacao:new FormControl(new Date()),
            dataDeAlteracao: new FormControl(new Date()),
            turno: new FormControl(''),
            departamento: new FormControl(''),
    
      });

  }

  CadastrarUsuario(){
      this.onCadastrarUsuario.emit(this.usuarioForm.value);
  }

}
