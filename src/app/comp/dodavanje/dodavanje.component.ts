import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/servisi/product.service';

@Component({
  selector: 'app-dodavanje',
  templateUrl: './dodavanje.component.html',
  styleUrls: ['./dodavanje.component.scss']
})
export class DodavanjeComponent {
  forma:FormGroup;
  prod:Product;
  constructor(private servis:ProductService)
  {

  }

  ngOnInit()
  {
    this.initForms();
  }

  initForms()
  { 
    this.forma=new FormGroup
    (
      {
        id:new FormControl(1,[Validators.required]),
        title:new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required]),
        price:new FormControl(1,[Validators.required]),
        discountPercentage:new FormControl(1,[Validators.required]),
        rating:new FormControl(1,[Validators.required]),
        stock:new FormControl(1,[Validators.required]),
        brand:new FormControl('',[Validators.required]),
        category:new FormControl('',[Validators.required]),
        thumbnail:new FormControl('',[Validators.required]),
        images:new FormControl('',[Validators.required]),
      }
    )
  }

    dodaj(pr:Product)
  {
    this.servis.create(pr).subscribe
    (
      (data)=>
      {
        this.prod=data
      }
    );
  }

  submit()
  {
    let id=this.forma.get('id')?.value;
    let title=this.forma.get('title')?.value;
    let description=this.forma.get('description')?.value;
    let price=this.forma.get('price')?.value;
    let discountPercentage=this.forma.get('discountPercentage')?.value;   
    let rating=this.forma.get('rating')?.value;
    let stock=this.forma.get('stock')?.value;
    let brand=this.forma.get('brand')?.value;
    let category=this.forma.get('category')?.value;
    let thumbnail=this.forma.get('thumbnail')?.value;
    let images=this.forma.get('images')?.value;
    let product=new Product(id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images);
    this.dodaj(product);
  }
}
