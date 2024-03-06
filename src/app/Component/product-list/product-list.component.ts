import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from '../../Shared/custom-pipe.pipe';
import { CustomDirectiveDirective } from '../../Directives/custom-directive.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomPipePipe, CustomDirectiveDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  categories: string[] = ["laptops", "books", "glasses"];
  productlist: Iproduct[];
  Selected: string = "";
  COLOR = "red";
  getlist(category: string = ''): Iproduct[] {
    if (category.length <= 0) return this.productlist;
    return this.productlist.filter(x => x.category === category);
  }
  constructor() {
    this.productlist = [
      {
        id: 0,
        name: "First",
        price: 500n,
        description: "A description of a product",
        quantity: 5,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/150/150",
        category: this.categories[0]
      },
      {
        id: 1,
        name: "Second",
        price: 1000n,
        description: "A description of a product",
        quantity: 10,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/150/100",
        category: this.categories[0]
      },
      {
        id: 2,
        name: "Third",
        price: 2000n,
        description: "A description of a product",
        quantity: 20,
        isAvaliable: false,
        imgUrl: "https://picsum.photos/151/150",
        category: this.categories[1]
      },
      {
        id: 3,
        name: "Fourth",
        price: 4000n,
        description: "A description of a product",
        quantity: 40,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/130/150",
        category: this.categories[1]
      },
      {
        id: 4,
        name: "First",
        price: 8000n,
        description: "A description of a product",
        quantity: 80,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/120/150",
        category: this.categories[1]
      },
      {
        id: 5,
        name: "First",
        price: 16000n,
        description: "A description of a product",
        quantity: 160,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/150/130",
        category: this.categories[2]
      }
    ];
  }
}