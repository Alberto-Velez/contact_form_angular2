
import {Component} from 'angular2/core';
import {DemoService} from './demo.service';

@Component({
  selector: 'comments ',
  template:`
  <h1>Angular2 HTTP Demo App</h1>

  <form f="postForm" (ngSubmit)="doPost()">

      <input [(ngModel)]="call_post" placeholder="0">
      <br>
      <textarea [(ngModel)]="comment"> </textarea>
<br>
       <button type="submit" class="btn btn-warning btn-lg">POST</button>
  </form>

  <h1>comments</h1>
<div class="desc">
  <div class="comment" *ngFor="#food of foods">
{{food._id}}
<h3>Comment </h3>
{{food.comment}}
  </div>
  </div>

  <form  (ngSubmit)="doPost()">
      <button type="submit" class="btn btn-warning btn-lg">POST</button>
      <input [(ngModel)]="call_post" placeholder="0">
  </form>


  <h2>Books and Movies</h2>
  <h3>Books</h3>
  <ul>
    <li *ngFor="#book of books">{{book.title}}</li>
  </ul>
  <h3>Movies</h3>
  <ul>
    <li *ngFor="#movie of movies">{{movie.title}}</li>
  </ul>
  `,

})
export class AppComponent {


      public foods;
      public books;
      public movies;
      public call_post;
      public comment;

      constructor(private _demoService: DemoService) { }

      ngOnInit() {
        this.getFoods();
        this.getBooksAndMovies();

      }

      doPost() {

        this._demoService.post(this.call_post, this.comment);

       }

      getFoods() {
        this._demoService.getFoods().subscribe(
          // the first argument is a function which runs on success
          data => { this.foods = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => console.log('done loading foods')
        );
      }

      getBooksAndMovies() {
        this._demoService.getBooksAndMovies().subscribe(
          data => {
            this.books = data[0]
            this.movies = data[1]
          }
          // No error or completion callbacks here. They are optional, but
          // you will get console errors if the Observable is in an error state.
        );
      }
}
