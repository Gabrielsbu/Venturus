import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  description: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Barcelona', description: 'Barcelona Squad', actions: 'H'},
  { name: 'Real Madrid', description: 'Real Madrid Squad', actions: 'He'},
  { name: 'Manchester United', description: 'Manchester United Squad', actions: 'Li'},

];

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css']
})
export class TableTeamsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
