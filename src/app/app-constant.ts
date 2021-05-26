import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})

export class AppConstant {

    constructor(private router: Router) { }

    public readonly version: string = "1.0";
    public readonly projectId: string = "demo-project";
    public readonly title: string = "AngularNodeProject";

    public readonly baseUrlNodeProjectApi = 'http://localhost:3000';

    //------------- Google Oauth Start -------------

    

    //------------- Google Oauth End -------------


   

}




