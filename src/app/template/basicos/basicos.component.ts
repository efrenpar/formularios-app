import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miformulario')miFormulario!:NgForm;

  initForm={
    producto:'rtx',
    precio:0,
    existencias:0
  }

  constructor() { }

  ngOnInit(): void {
  }


  // miformulario:NgForm
  guardar(){
    console.log("posteo correcto")
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid
    && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido():boolean{
    // this.miFormulario?.controls['precio']?.setErrors({'precio':true})
    return this.miFormulario?.controls['precio']?.value<0
    && this.miFormulario?.controls['precio']?.touched;
  }

}
