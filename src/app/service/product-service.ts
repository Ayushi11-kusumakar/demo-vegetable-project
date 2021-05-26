import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstant } from '../app-constant';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    

    constructor(private http: HttpClient, private appConstant: AppConstant) {
    }

    private apiUrl = this.appConstant.baseUrlNodeProjectApi + "/user";
    private api = this.appConstant.baseUrlNodeProjectApi + "/product";


    public getProductById(id: number): Observable<any> {
        return this.http.get(this.api + "/" + id);
    }

    public getProductByName(product_name: string): Observable<any> {
        return this.http.get(this.api + "/" + product_name);
    }

    public getAllProducts():Observable<any> {
        return this.http.get(this.api);
    }
    
    public saveProduct(formData: any): Observable<any> {
        return this.http.post(this.api , formData);
    }

    public updateProduct(formData:any): Observable<any> {
        return this.http.patch(this.api ,formData);
    }


    public deleteProduct(id : number): Observable<any> {
        return this.http.delete(this.api + '/'+ id);
    }
}