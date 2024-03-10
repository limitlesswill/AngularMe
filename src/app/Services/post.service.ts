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
            if (post[0].data.children[0].data.media
              || post[0].data.children[0].data.over_18
              || post[0].data.children[0].data.url === "https://reddit.com/"
              || post[0].data.children[0].data.url === "https://www.reddit.com/"
              || post[0].data.children[0].data.url === "https://www.reddit.com"
              || post[0].data.children[0].data.url == "reddit.com"
              || post[0].data.children[0].data.url == "www.reddit.com"
              || post[0].data.children[0].data.url.includes("gallery")
              ) {
                
                
                // throw new Error('I reject these data');
            }
            
          },
          catchError(this.errorCatching) && retry(1)
          )
      );
  }

  errorCatching(err: HttpErrorResponse) {
    let msg = '';

    if (err.status == 0)
      msg = err.error.message;
    else
      msg = `Server ERROR ${err.status} and error message: ${err.statusText}`

    return throwError(() => msg)
  }

}
