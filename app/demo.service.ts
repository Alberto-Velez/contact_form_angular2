import {Http, Headers,  URLSearchParams, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';  // lib is large, add only the map operator as result

import {RequestOptions} from "angular2/http";
import {Component, enableProdMode, Injectable} from 'angular2/core';

@Injectable()
export class DemoService {

  constructor(private http:Http) { }
  post(value, comment) {
      console.log('in the post? ' + JSON.stringify(value))
      const endpoint = 'http://localhost:3000/calls';
      const headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var body = JSON.stringify({"value": value,
                                  "comment": comment});
      return this.http.post(endpoint, body, options)
          .map((res: Response) => res.json()).subscribe()
  }


  // Uses http.get() to load a single JSON file
  getFoods() {
    return this.http.get('/name').map((res:Response) => res.json());

    }

  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/books.json').map((res:Response) => res.json()),
      this.http.get('/app/movies.json').map((res:Response) => res.json())
    );
  }

}
