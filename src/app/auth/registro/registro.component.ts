import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../shared/validator/validaciones';
import { ValidatorService } from '../../shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.vs.emailPattern)], [this.emailValid]],
    username:['',[Validators.required, this.vs.noPuedeSerStrider]],
    password1:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required, Validators.minLength(6)]]
  },{
    validators:[this.vs.camposIguales('password1','password2')]
  })

  get emailErrorMsg():string{

    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.required){
      return 'emil es obligatorio'
    }else if(errors?.pattern){
      return 'valor ingresado no tiene formato de correo'
    }else if(errors?.emailTomado){
      return 'el correo ya esta siendo usado'
    }

    return ""
  }

  constructor(private fb:FormBuilder,
              private vs:ValidatorService,
              private emailValid:EmailValidatorService
              ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Efren Parra',
      email:"test1@test.com",
      username:"efrenpar",
      password1:'123456',
      password2:'123456'

    })
  }

  campoNoValido(campo:string){

    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario);

    this.miFormulario.markAllAsTouched();
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required
  //           && this.miFormulario.get('email')?.touched
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern
  //           && this.miFormulario.get('email')?.touched
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado
  //           && this.miFormulario.get('email')?.touched
  // }



}
