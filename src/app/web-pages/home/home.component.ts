import { Component,  OnInit } from '@angular/core';
import { NgForm , FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/service/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productResponseList: any;
  productView:any = {};
  filterSearchResponseList: any;
  productSearchView:any ={};
  editproductView: any={};
  productname: any;
  Productcategory: any;
  productAvailability: any;
  productPrize: any;
  productDescription: any;
  productId: any;
  selectedProductId: any;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getAllProducts().subscribe((Response) => {
      console.log(Response);
      console.log(Response['data']);
        this.productResponseList = Response['data'];
        console.log(this.productResponseList);
    });
  }

  public getFilterRecord(filterForm:NgForm) {
    console.log("submit");
    console.log(filterForm.value);
    let id = -1;

    if (filterForm.value.id !== undefined) {
      id = filterForm.value.id;
    }
   
    console.log("id : " + id);
   
    this.productService.getProductById(id).subscribe((resp) => {
     console.log(resp);
      if (resp['success'] == '1') {
        console.log("product_name success: " + id);
      
        console.log(this.filterSearchResponseList = resp['data']);
       filterForm.reset();
      } else {
        console.log("Error : " + resp['success']);

      }

    });
  }



 submitaddProductForm(productNgForm: NgForm) {
    console.log('Your form data : ', productNgForm.value);
    this.productService.saveProduct(productNgForm.value).subscribe(response => {
      if (response['success'] == "1") {
        productNgForm.reset();
        alert("Add Product Successfully!")
      }
      console.log(response)
    })
  }

  public onDelete(id:number) {
    console.log("deleted method")
    if (confirm("Are you sure you want to delete?"))
      this.productService.deleteProduct(id).subscribe((Response) => {
        if (Response['success'] == '1') {
          console.log(Response);
          alert("Data Deleted SuccessFully !")
        } else {
          console.log("Error : " + Response['success'] == '0');

        }
      });
  }

  
  public editDetail(product: any) {
    console.log(this.editproductView);
    this.editproductView = product
    this.productname = product.product_name
    this.Productcategory = product.Product_category
    this.productAvailability = product.availability
    this.productPrize = product.prize
    this.productDescription = product.description
    this.productId = product.id
  }


  onEditSave(productEditForm: NgForm) {
    console.log('data', productEditForm.value)
    this.selectedProductId = this.editproductView.id;
    this.productService.updateProduct(this.editproductView).subscribe(response => {
      if (response['success'] == "true") {
        productEditForm.reset();
        alert("Update Product Detail Successfully!");
      }
    })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
