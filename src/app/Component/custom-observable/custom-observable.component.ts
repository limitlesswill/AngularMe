import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, merge } from 'rxjs';

@Component({
  selector: 'custom-observable',
  standalone: true,
  imports: [],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css'
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  public sub!: Subscription;


  ngOnInit(): void {
    const obs1 = new Observable((observer) => {
      observer.next("observer one")
    });
    const obs2 = new Observable((observer) => {
      observer.next("observer two")
    });

    const obs3 = merge(obs1, obs2);

    obs3.subscribe({
      next: (data) => console.log(data)
    });


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
