import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent {
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
