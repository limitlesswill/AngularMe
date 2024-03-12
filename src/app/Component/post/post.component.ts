import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, booleanAttribute } from '@angular/core';
import { Subscription, delay, interval, retry, takeUntil } from 'rxjs';
import { PostService } from '../../Services/post/post.service';
declare var window: any;

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
          this.created_utc = this.tmpDate.getDate() + "/" + this.tmpDate.getMonth() + "/" + this.tmpDate.getFullYear();
          this.permalink = this.data.permalink;


          if (this.data.media || this.data.is_gallery) {
            console.log(post);
            console.log("title " + this.data.title);
            console.log(this.data.url);
            console.log("media " + this.data.media);
            console.log("media " + this.data.secure_media_embed.media_domain_url);
            console.log("gallery " + this.data.is_gallery);
          }

          /* fixing third-party provider issue [it still needs modification to be suitable for every existing provider] */
          if (this.data.media != null) {
            const link: string = this.data.secure_media.oembed.thumbnail_url;
            const sub = link.split('/')[3];
            const start = link.indexOf(sub);
            const end = link.indexOf('?');
            this.url = this.data.secure_media.oembed.provider_url.concat('/' + link.substring(start, end));
            console.log("New URL " + this.url);
          }

          /* fixing gallery issue*/
          if (this.data.is_gallery != null) {
            this.url = this.data.thumbnail;
          }

          this.isDone.emit(true);
        },
        error: err => {
          console.log("ssssss " + err);
          delay(500);
          //I figured out how can i simple recall a service :)
          return this.ngOnInit();
        }
      }
      );
  }

  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
