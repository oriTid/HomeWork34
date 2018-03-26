import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-board',
  templateUrl: './multiple-board.component.html',
  styleUrls: ['./multiple-board.component.css']
})
export class MultipleBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  multiArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
