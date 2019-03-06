import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app2';
  options = ['MEAN', 'AWS'];
  
  
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  toDashboard() {
    console.log('Welcome to Dashboard');
    this.router.navigate(['/dashboard']);
  }
  
  toFirst() {
    console.log('Welcome to First');
    this.router.navigate(['/first']);
  }
  
  toSecond() {
    console.log('Welcome to the Second');
    this.router.navigate(['/second']);
  }

  toFourth() {
    console.log('Welcome to Fourth.');
    this.router.navigate(['/fourth']);
  }
}

