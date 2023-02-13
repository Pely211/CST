import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  mouseOver()
  {
    document.body.style.setProperty('--user-color', "#f30256");
  }
  mouseLeave()
  {
    document.body.style.setProperty('--user-color', "gray");
  }
  redirectToLandingPage() {
    this.router.navigate(['/']);
  }
}
