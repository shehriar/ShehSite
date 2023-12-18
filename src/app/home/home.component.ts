import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  title = 'Home';
  constructor(private router: Router) {
  }
  clickButton(path: string) {
    this.router.navigateByUrl(path);
  } 
}