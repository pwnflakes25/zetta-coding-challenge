import { Component, OnInit, OnDestroy } from '@angular/core';
import {Movie} from './movie-model';
import {MovieService} from './movie.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditWatchListComponent } from './edit-watch-list/edit-watch-list.component';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-fourth-challenge',
  templateUrl: './fourth-challenge.component.html',
  styleUrls: ['./fourth-challenge.component.scss']
})
export class FourthChallengeComponent implements OnInit, OnDestroy {
  columns: string[] = ['title', 'episodes', 'info_url', 'watch_url', 'action'];
  movies_data = new MatTableDataSource<Movie>();
  movieSub: Subscription;


  constructor(private ms: MovieService, public dialog: MatDialog, private snackBar: MatSnackBar) {}


  ngOnInit(): void {
    this.movieSub = this.ms.movieSub().subscribe({
      next: (v: Movie[]) => {
        this.movies_data.data = v;
      }
    })
    this.ms.getMovies(); 
  }
  
  onAdd() {
    let dialogRef = this.dialog.open(EditWatchListComponent, {
      width: '550px',
    });
  }

  onEdit(id:string)  {
    let dialogRef = this.dialog.open(EditWatchListComponent, {
      data: this.movies_data.data.find(movie => movie.id == id),
      width: '550px',
    });
  }
  
  onDelete(id:string) {
    let snackBarRef = this.snackBar.open('Delete entry?', 'Confirm');
    snackBarRef.onAction().subscribe(() => {
      this.ms.deleteMovie(id);
    });
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }


}
