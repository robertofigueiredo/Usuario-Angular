import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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

  usuarioForm! : FormGroup;

  constructor() {
    
  }
  ngOnInit(): void {
    
      this.usuarioForm = new FormGroup({
            id: new FormControl(0),
            nome: new FormControl('', [Validators.required]),
            sobrenome: new FormControl('', [Validators.required]),
            turno: new FormControl('', [Validators.required]),
            departamento: new FormControl('', [Validators.required]),
            ativo: new FormControl(true),
            dataDeCriacao:new FormControl(new Date()),
            dataDeAlteracao: new FormControl(new Date()),
    
      });

  }

  CadastrarUsuario(){
      this.onCadastrarUsuario.emit(this.usuarioForm.value);
  }

}
