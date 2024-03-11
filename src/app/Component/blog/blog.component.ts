import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  numofposts: number = 10;
  counter: number = 0;

  ready() {
    this.counter++;

    /* when all posts done successfully loading  */
    //   if (this.counter >= this.numofposts) {
    //     setTimeout(() => { location.reload() }, 1000);
    //   }
    // }
  }
}
