import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/servisi/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() text:string;
  p:Product[];

  constructor(private servis:ProductService)
  {

  }

  ngOnInit()
  {
    this.sve();
  }

  sve()
  {
    this.servis.getAll().subscribe
    (
      (data)=>this.p=data
    );
  }
}
