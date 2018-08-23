import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kefel',
  templateUrl: './kefel.component.html',
  styleUrls: ['./kefel.component.css']
})
export class KefelComponent {

  namesArray: string[] = ['A', 'B', 'C'];

  studentsArray: string[][] = [
    ['Bob', 'Adison', 'Tel-Aviv'],
    ['Alice', 'Adis', 'Haifa'],
    ['Tom', 'Karp', 'Jerusalem']
  ];

  kefelTable: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}


