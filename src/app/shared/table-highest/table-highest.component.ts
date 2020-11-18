import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  avg: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Inter Milan', avg: 31.9},
  { name: 'Arsenal', avg: 29.9},
  { name: 'Arsenal', avg: 29.9},
  { name: 'Arsenal', avg: 29.9},
  { name: 'Arsenal', avg: 29.9},

];

@Component({
  selector: 'app-table-highest',
  templateUrl: './table-highest.component.html',
  styleUrls: ['./table-highest.component.css']
})
export class TableHighestComponent implements OnInit {

  displayedColumns: string[] = ['name', 'avg'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
