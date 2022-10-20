import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    condiciones:[false,Validators.requiredTrue],
  })

  persona={
    genero:"F",
    notificaciones:true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    //se usa en vez de setValue porque revienta cuando no se tiene un atributo
    this.miFormulario.reset({
      ...this.persona,
      condiciones:false
    })

    // this.miFormulario.setValue(this.persona)

    this.miFormulario.valueChanges.subscribe(form=>{
      console.log(form);
    }) //esto sirve para actualizar en tiempo real persona con el formulario

    this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>{
      console.log(newValue);
    }) //esto sirve para actualizar en tiempo real un campo
  }

  guardar(){
    const formValu = {...this.miFormulario.value};
    delete formValu.condiciones;

    this.persona = formValu;

    console.log(this.persona);
  }
  

}
