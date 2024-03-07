import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // post:Ipost[];
  data: string[] = [];
  constructor(private client: HttpClient) {
    var O_O: Observable<string> = client.get<string>('https://www.reddit.com/r/programmerhumor/random.json?include_over_18=off');
    //  data[0]['data']['children'][0]['data'][$];
    O_O.forEach(x =>
      this.data.push(x)
    );

    this.data.forEach(x =>
      console.log(x.length > 0 ? x : "data is null")
    );
    console.log(this.data);
  }
}