import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/servisi/product.service';

@Component({
  selector: 'app-jedan',
  templateUrl: './jedan.component.html',
  styleUrls: ['./jedan.component.scss']
})
export class JedanComponent {
  product:Product;
  constructor(private servis:ProductService,private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.route.params.subscribe
    (
      (data)=>
      {
        let id=+data['id'];
        this.jedan(id);
      }
    );
  }
  jedan(id:number)
  {
    this.servis.getOneByID(id).subscribe
    (
      (data)=>this.product=data
    );
  }
}
