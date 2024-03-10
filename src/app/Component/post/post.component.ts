import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, booleanAttribute } from '@angular/core';
import { Subscription, interval, retry, takeUntil } from 'rxjs';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnDestroy {
  @Input({
    alias: "title",
    transform: booleanAttribute,
  })
  caption: boolean = false;
  @Input({
    alias: "txt",
    transform: booleanAttribute,
  })
  description: boolean = false;
  @Input({
    alias: "btn",
    transform: booleanAttribute,
  })
  button: boolean = false;

  constructor(private postservice: PostService) { }

  sub!: Subscription;
  data: string | any;

  title: string = "";
  selftext: string = "";
  url: string = "";
  created_utc: string = "";
  permalink: string = "";
  tmpDate: any = new Date();

  @Output("Done")
  isDone = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.sub =
      this.postservice.getAll().subscribe({
        next: (post: string | any) => {

          this.data = post;
          this.data = this.data[0].data.children[0].data;
          this.title = this.data.title;
          this.selftext = this.data.selftext;
          this.url = this.data.url;

          this.tmpDate = new Date(this.data.created_utc * 1000);
          this.created_utc = this.tmpDate.getDay() + "/" + this.tmpDate.getMonth() + "/" + this.tmpDate.getFullYear();
          this.permalink = this.data.permalink;


          console.log(post);
          console.log("title " + this.data.title);
          console.log("selftext " + this.data.selftext);
          console.log(this.data.url);
          console.log("visited " + this.data.visited);
          console.log("over 18 " + this.data.over_18);
          console.log("media " + this.data.media);
          console.log("gallery " + post[0].data.children[0].data.url.includes("gallery"));


          this.isDone.emit(true);
        },
        error: err => { console.log("ssssss " + err); }
      }
      );
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
