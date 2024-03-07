import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'https://www.reddit.com/r/aww/random.json?include_over_18=off';

  constructor(private client: HttpClient) { }

  getAll(): Observable<string> {
    return this.client.get<string>(this.url)
      .pipe(
        //debugger
        tap(
          (ele) => console.log(ele),
          catchError(this.errorCatching)
        )
      );
  }

  errorCatching(err: HttpErrorResponse) {
    let msg = '';

    if (err.error instanceof Error)
      msg = err.error.message;
    else
      msg = `Server ERROR ${err.status} and error message: ${err.message}`

    return throwError(() => msg)
  }

}
