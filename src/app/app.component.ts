import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { HeaderComponent } from './Shared/Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,HeaderComponent, ProductListComponent,HeaderComponent]
})
export class AppComponent {
  title = 'ay';
}
