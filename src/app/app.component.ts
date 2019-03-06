import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app2';
  options = ['MEAN', 'AWS'];
  questions = [
    {q_num: 1, des: "What is India's official name ?", ans:'Bharat'},
    {q_num: 2, des: "What is India's national currency ?", ans:'The Rupee'},
    {q_num: 3, des: "What is India's national animal ?", ans:'The Tiger'},
    {q_num: 4, des: "What is India's national fruit ?", ans:'The Mango'},
    {q_num: 5, des: "Who founded the Indian National Army ?", ans:'Subhas Chandra Bose'},
  ]; 

  userForm = new FormGroup({  
    questions: new FormControl()
  }); 
  
  constructor(private route: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      ctrl: ['', Validators.required]
    });
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

