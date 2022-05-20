import { Component, OnInit } from '@angular/core';
import { Maravillas } from './maravillas';
import { MaravillasService } from './maravillas.service';

@Component({
    selector: 'app-maravillas',
    templateUrl: './maravillas.component.html',
    styleUrls: ['./maravillas.component.css']
  })
  export class MaravillasComponent implements OnInit {

    constructor(private maravillasService: MaravillasService) { }
    maravillas: Array<Maravillas>=[];
    pala:string="";
     numero: number = 0;
  
    getCourses() {
      this.maravillasService.getCourses().subscribe(maravillas => {
        this.maravillas = this.maravillas;
        maravillas.forEach((maravilla) => this.pala = this.pala + maravilla.name);
        this.pala=this.pala;
      });
    }
    gethola() {
      return this.numero;

    }


    ngOnInit() {
      this.getCourses();
      this.gethola();
    }
  }