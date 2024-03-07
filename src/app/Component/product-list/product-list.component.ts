import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../Services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  categories: string[] = ["laptops", "books", "glasses"];
  productlist: Iproduct[];
  Selected: string = "";
  filterText: string = "";
  COLOR = "red";


  getlist(category: string = ''): Iproduct[] {
    if (category.length <= 0) return this.productlist;
    return this.productlist.filter(x => x.category === category);
  }

  filterList(val: string) {
    return this.productlist.filter((product: Iproduct) => product.name.toLowerCase().includes(val.toLowerCase()));
  }

  resetTools() {
    this.Selected = "";
    this.filterText = "";
  }

  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.productservice.getAll().subscribe({
      next: product => {
        // this.productlist = product;
        // this.filterList = this.productlist;
      },
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private productservice: ProductService) {
    this.productlist = [
      {
        id: 0,
        name: "First",
        price: 500n,
        description: "An image description",
        quantity: 5,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/120/150",
        category: this.categories[0]
      },
      {
        id: 1,
        name: "Second",
        price: 1000n,
        description: "An image description",
        quantity: 10,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/125/150",
        category: this.categories[0]
      },
      {
        id: 2,
        name: "Third",
        price: 2000n,
        description: "An image description",
        quantity: 20,
        isAvaliable: false,
        imgUrl: "https://picsum.photos/127/150",
        category: this.categories[1]
      },
      {
        id: 3,
        name: "Fourth",
        price: 4000n,
        description: "An image description",
        quantity: 40,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/150/150",
        category: this.categories[1]
      },
      {
        id: 4,
        name: "Fifth",
        price: 8000n,
        description: "An image description",
        quantity: 80,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/150/149",
        category: this.categories[2]
      },
      {
        id: 5,
        name: "Sixth",
        price: 16000n,
        description: "An image description",
        quantity: 160,
        isAvaliable: true,
        imgUrl: "https://picsum.photos/150/130",
        category: this.categories[2]
      }
    ];
  }

}