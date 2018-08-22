import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(private http: Http) {

    }

    getUsers() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://dev.api.fooddocs.ee/testtask', { headers: headers }).pipe(map(res => res.json()));
    }
}