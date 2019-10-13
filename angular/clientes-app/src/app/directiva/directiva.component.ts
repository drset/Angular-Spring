import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

    listaCurso: string[] = ['primero', 'segundo', 'tercero'];
    habilitar: boolean = true;

    constructor() { }

  ngOnInit() {
  }

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false:true;
  }
}
