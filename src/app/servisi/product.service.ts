import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://dummyjson.com/products";
  constructor(private http:HttpClient,private res:Response)
  { }

  createFromObj(p:Product)
  {
    return new Product(p.id,p.title,p.description,p.price,p.discountPercentage,p.rating,p.stock,p.brand,p.category,p.thumbnail,p.images);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<any>(this.url).pipe(
      map(response => response.products)
    );
  }

  getOneByID(id:number):Observable<Product>
  {
    return this.http.get(this.url+"/"+id).pipe
    (
      map((data:any)=>this.createFromObj(data))
    );
  }

  create(p:Product)
  {
    return this.http.post(this.url,p).pipe
    (
      map((data:any)=>this.createFromObj(data))
    );
  }

  update(p:Product)
  {
    return this.http.put(this.url+"/"+p.id,p).pipe
    (
      map((data:any)=>this.createFromObj(data))
    );
  }

  delete(id:number)
  {
    return this.http.delete(this.url+"/"+id).pipe
    (
      map((data:any)=>this.createFromObj(data))
    )
  }
}
