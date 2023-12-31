import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  template: `
      <section class="section">
        <div class="container">

        <div class="columns is-multiline" *ngIf="users"> 
          <div class="column is-4" *ngFor="let user of users | async"> 
            <div class="card">
              <div class="card-content">
                <a routerLink="/users/{{ user.login }}"> {{ user.login }} </a>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
  `,
  styles: [
  ]
})
export class UserListComponent {
    users: any;

    constructor(private userService: UserService) {}

    ngOnInit() { 
      this.users = this.userService.getUsers();
    }
}
