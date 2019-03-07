import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor(private crudService: CrudService, private httpClient: HttpClient,
    private _formBuilder: FormBuilder) { }

    isAdded=false;
    displayedColumns: string[] = ['name', 'email', 'password'];

    users: any = []

    name = new FormControl('', [Validators.required]);
    
    email = new FormControl('', [Validators.required, Validators.email])
    
    password = new FormControl('', [Validators.required, Validators.minLength(4)]);

    userForm: FormGroup = this._formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password
    });
  
  ngOnInit() {

  }

  addUser() {
    console.log(this.name)
    this.crudService.addUser({name:, email:, password:})
    console.log(this.name)
  }  

  displayUsers() {
    this.crudService.fetchAllUsers()
    .subscribe((res : any[])=>{
      this.users = res;
    });
  }

}
