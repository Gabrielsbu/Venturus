import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Real', 'Fantasy'];

  constructor() {

  }

  ngOnInit(): void {
  }

}
