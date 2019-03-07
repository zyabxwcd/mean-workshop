import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ReadWriteServiceService} from '../read-write-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  xyz:any =[];
 
  emailFormControl = new FormControl('', [
   Validators.required,
   Validators.email,
 ]);
 
 
 nameFormControl = new FormControl('', [
   Validators.required
 ]);
 
 passwordFormControl = new FormControl('', [
   Validators.required
 ]);
 matcher = new MyErrorStateMatcher();
   constructor(private xx:ReadWriteServiceService) { }
 
   ngOnInit() {
     this.xx.fetchUser().subscribe(res => {
       console.log(res)
       this.xyz = res;
     })
   }
   submittoDB(){
     var user1 = {'name':this.nameFormControl.value,'email':this.emailFormControl.value,'password':this.passwordFormControl.value};
     this.xx.addUser(user1).subscribe(res=>{
         console.log(res);
 
        this.nameFormControl.setValue('');
        this.emailFormControl.setValue('');
        this.passwordFormControl.setValue('');
       })
     
   
   }
  }
