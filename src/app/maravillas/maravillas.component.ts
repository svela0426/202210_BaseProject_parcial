import { Component, OnInit } from '@angular/core';
import { MaravillasService } from './maravillas.service';
import { MaravillasDetail } from './maravillas-detail';


@Component({
    selector: 'app-maravillas',
    templateUrl: './maravillas.component.html',
    styleUrls: ['./maravillas.component.css']
  })
  export class MaravillasComponent implements OnInit {

    constructor(private maravillasService: MaravillasService) { }
    maravillas : Array<MaravillasDetail> = [];

    selectedMaravillas!: MaravillasDetail;
    selected: Boolean = false;
  
  
    getMaravillas() {
      this.maravillasService.getMaravillas().subscribe(maravillas => {

        this.maravillas = maravillas;

        maravillas.sort((a,b) => a.country.localeCompare(b.country));

        
      });
    }

    onSelected(maravilla: MaravillasDetail): void {
      this.selected = true;
      this.selectedMaravillas = maravilla;
    }
  

    ngOnInit() {
      this.getMaravillas();
    }
  }