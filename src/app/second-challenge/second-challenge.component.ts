import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-second-challenge',
  templateUrl: './second-challenge.component.html',
  styleUrls: ['./second-challenge.component.scss']
})
export class SecondChallengeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  showAlert(message: string) {
    let snackBarRef = this.snackBar.open(message, 'ok!', {
      duration: 2000,
    });
  }

}
