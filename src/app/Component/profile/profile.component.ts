import { Component } from '@angular/core';
import { CustomObservableComponent } from '../custom-observable/custom-observable.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CustomObservableComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
}
