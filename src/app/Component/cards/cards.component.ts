import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CARDSComponent {
  zzz: string = "";
}
