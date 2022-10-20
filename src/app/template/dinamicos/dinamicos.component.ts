import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{
  id:number;
  nombre:string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  nuevoJuego:string="";
  persona:Persona={
    nombre:"efren",
    favoritos:[
      {
        id:1,
        nombre:"Metal Gear"
      },
      {
        id:2,
        nombre:"Death Note"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log("form");
  }

  eliminar(index:number){

    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){
    const nuevoJuegoFav:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    };

    this.persona.favoritos.push({...nuevoJuegoFav});
    this.nuevoJuego = "";
  }

}
