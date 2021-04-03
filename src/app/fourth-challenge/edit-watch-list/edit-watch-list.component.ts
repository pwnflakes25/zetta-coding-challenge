import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from '../movie-model';

@Component({
  selector: 'app-edit-watch-list',
  templateUrl: './edit-watch-list.component.html',
  styleUrls: ['./edit-watch-list.component.scss']
})
export class EditWatchListComponent implements OnInit {
  movieForm = new FormGroup({
    title: new FormControl(''),
    episodes: new FormControl(''),
    watchUrl: new FormControl(''),
    infoUrl: new FormControl(''),
  })
  isEdit: boolean = false;
  

  constructor(private ms: MovieService, public dialogRef: MatDialogRef<EditWatchListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie) { }


  ngOnInit(): void {
    if(this.data) {
      this.fillValues();
      this.isEdit = true;
    }
  }

  fillValues() {
    this.movieForm.get('title').setValue(this.data.title);
    this.movieForm.get('episodes').setValue(this.data.episodes);
    this.movieForm.get('watchUrl').setValue(this.data.watch_url);
    this.movieForm.get('infoUrl').setValue(this.data.info_url);
  }

  onSubmit({ value, valid }) {
    if(this.isEdit) {
      this.ms.editMovie(
        this.data.id,
        value.title,
        value.episodes,
        value.infoUrl,
        value.watchUrl,
     )
    } else {
      console.log(value)
      this.ms.addMovie(
        value.title,
        value.episodes,
        value.infoUrl,
        value.watchUrl,
     )
    }
   
    this.dialogRef.close();
  }


}
