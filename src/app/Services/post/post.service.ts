import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, retry, retryWhen, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url1: string = 'https://www.reddit.com/r/marvel/random.json?include_over_18=off';
  private url2: string = 'https://www.reddit.com/r/aww/random.json?include_over_18=off';
  private url3: string = 'https://www.reddit.com/r/mademesmile/random.json?include_over_18=off';
  private url4: string = 'https://www.reddit.com/r/programmerhumor/random.json?include_over_18=off';

  constructor(private client: HttpClient) { }

  getAll(): Observable<string> {
    return this.client.get<string>(this.url4)
      .pipe(
        tap(
          (post: string | any) => {
            //I reject these data
            if (post[0].data.children[0].data.is_video || post[0].data.children[0].data.over_18) {
              console.log(post);
              throw Error("OH DEAR");
            }

          },
          catchError(this.errorCatching)
        )
      );
  }

  errorCatching(err: HttpErrorResponse) {
    /* this is somehow a dead code which needs to optimized out someday*/
    console.log("I got an ERROR")
    let msg = '';

    if (err.status == 0) {
      msg = err.error.message;
      console.log(msg);
    }
    else
      msg = `Server ERROR ${err.status} and error message: ${err.statusText}`

    return throwError(() => msg)
  }

}
