import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from './user.interface';
@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: Array<User>;
    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.getUsers().subscribe(res => {
            this.users = res;
        })
    }

    remove(index: number) {
        this.users.splice(index, 1);
    }
}
