import { Component  } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  listaAutores: string[] = ['James Dashner','J.K. Rowling',
  'Veronica Roth','Gabriel García Márquez','Jane Austen'];
  constructor() { }
  //
  // ngOnInit(): void {
  // }
  habilitar: boolean = true;
  setHabilitar():void{
    this.habilitar = (this.habilitar==true)? false:true;

  }
  // Mostrar: boolean = false;
  // setMostrar():void{
  //   this.Mostrar = ("Mostrar")? false:true;
  // }

}
