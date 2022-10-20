import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  //forma basica de hacer el model del formulario
  // miFormulario:FormGroup = new FormGroup({
  //   nombre     :new FormControl('RTX 4080ti'),
  //   precio     :new FormControl(1500),
  //   existencias:new FormControl(5),
  // });

  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required,Validators.minLength(3)]],
    precio:[,[Validators.min(0),Validators.required]],
    existencias:[,[Validators.min(0),Validators.required]],
  })

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {

    //al reset se le puede quitar una key al setValue no
    this.miFormulario.reset({
      nombre:'RTX 4080ti',
      precio:1600,
    })
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
      && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid){

        this.miFormulario.markAllAsTouched();
        return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();

  }



}
