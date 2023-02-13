import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component {
  constructor(private router: Router) {}
  mouseOver()
  {
    document.getElementById("loginContainer")?.style.setProperty('--card-color', "#f30256");
  }
  mouseLeave()
  {
    document.getElementById("loginContainer")?.style.setProperty('--card-color', "black");
  }
  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
