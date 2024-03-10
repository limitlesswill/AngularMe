import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'productdetails',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id = '';
  img = '';
  title = '';
  txt = '';

  product!: ProductListComponent;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.product = new ProductListComponent();
  }

  ngOnInit(): void {
    const ID = this.route.snapshot.paramMap.get("id");
    this.id = ID ?? "0";
    let num = Number(this.id);
    let prod = this.product.getlist('');
    this.img = prod[num].imgUrl;
    this.title = prod[num].name;
    this.txt = prod[num].description;
  }
  ngOnDestroy(): void {
  }

  back() {
    this.router.navigate(['/home']);
  }
}
