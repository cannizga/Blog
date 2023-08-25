import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <div class = "navbar is-dark">
      <div class = "navbar-brand"> 
          <a class = "navbar-item"> <img src="assets/image/angular-logo.png"> </a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
