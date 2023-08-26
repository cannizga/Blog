import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section"> 
          <div class="container"> 
              <div class="card" *ngIf="user"> 
                  <img [src]="user.avatar.url">
                  <h2>{{ user.login }}</h2>
              </div>
          </div>
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent {
  user: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.route.params.subscribe(params => {
        const username = params['username'];
      
      this.userService
      .getUser(username)
      .subscribe(user => this.user = user);
    });
  }
}
