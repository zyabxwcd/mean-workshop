import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  attempted = false;
  questions = [
    {q_num: 1, des: "Nobel prize is awarded for which of the following disciplines ?",
     options: ['Literature, peace and economics','Medicine or Physiology','Chemistry and Physics','All the above'],
     ans:'All the above'},
    {q_num: 2, des: "Galileo was an astronomer who ?",
     options: ['developed the telescope','discovered four satellites of Jupiter',
     'discovered that the movement of pendulum produces a regular time measurement','All the above'], 
     ans:'discovered four satellites of Jupiter'},
    {q_num: 3, des: "Who is the father of geometry ?", 
     options: ['Aristotle','Euclid','Pythagoras','Kepler'],
     ans:'Euclid'},
    {q_num: 4, des: "Who is popularly called as the Iron Man of India ?", 
     options: ['Subhash Chandra Bose','Sardar Vallabhbhai Patel','Jawaharlal Nehru','Govind Ballabh Pant'], 
     ans:'Sardar Vallabhbhai Patel'},
    {q_num: 5, des: "Which of the following items was introduced by James Watt ?", 
     options: ['Hot air balloon','Steam boat','Diving bell','Rotary Steam Engine'],
     ans:'Rotary Steam Engine'},
  ]; 

  question = this.questions[0];

  back() {
    if(this.question.q_num !== 1){
      this.question = this.questions[this.question.q_num-2]
    }
  }

  next() {
    if(this.question.q_num !== this.questions.length){
      this.question = this.questions[this.question.q_num]
    }
  }

  toQuiz1() {
    this.router.navigate(['/dashboard']);
  }
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }
}
