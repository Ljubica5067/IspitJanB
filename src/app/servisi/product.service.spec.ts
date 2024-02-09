import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../model/product';

describe('ProductService', () => {
  describe('ProductService', () => {
    let productService: ProductService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProductService]
      });
      productService = TestBed.inject(ProductService);
    });
  
    it('should return product by ID', () => {
      const mockData = {
        id: 1,
        title: 'iPhone 9',
      };
      productService.getOneByID(1).subscribe(product => {
        expect(product.id).toBe(1);
        expect(product.title).toBe('iPhone 9');
      });
    });
  });
});