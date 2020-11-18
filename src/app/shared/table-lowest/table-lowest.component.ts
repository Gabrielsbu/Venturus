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
  selector: 'app-table-lowest',
  templateUrl: './table-lowest.component.html',
  styleUrls: ['./table-lowest.component.css']
})
export class TableLowestComponent implements OnInit {

  displayedColumns: string[] = ['name', 'avg'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
