import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstant } from '../app-constant';

@Injectable({
    providedIn: 'root'
})

export class LogInService {
    

    constructor(private http: HttpClient, private appConstant: AppConstant) {
    }

    private apiUrl = this.appConstant.baseUrlNodeProjectApi + "/user/login";
    
    public saveLogin(formData: any): Observable<any> {
        return this.http.post(this.apiUrl , formData);
    }

    
}