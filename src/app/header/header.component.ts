import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <div class = "navbar is-dark">
      <div class = "navbar-brand"> 
          <a class = "navbar-item"> <img src="assets/image/angular-logo.png"> </a>
      </div>

      <div class="navbar-menu">
          <div class="navbar-start"> 
              <a class="navbar-item" routerLink="/">Home</a>
              <a class="navbar-item" routerLink="/contact">Contact</a>
              <a class="navbar-item" routerLink="/users">Users</a>
          </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
