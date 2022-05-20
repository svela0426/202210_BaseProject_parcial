import { Component, Input, OnInit } from '@angular/core';
import { Maravillas } from '../maravillas';
import { MaravillasDetail } from '../maravillas-detail';

@Component({
  selector: 'app-maravillas-detail',
  templateUrl: './maravillas-detail.component.html',
  styleUrls: ['./maravillas-detail.component.css']
})
export class MaravillasDetailComponent implements OnInit {

  @Input() maravillasDetail! : Maravillas;

  constructor() { }

  ngOnInit(): void {
  }

}