import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  constructor(private route: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      ctrl: ['', Validators.required]
    });
  }

  toQuiz2() {
    this.router.navigate(['/first']);
  }
}
