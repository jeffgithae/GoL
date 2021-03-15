import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-signin-tu-learn',
  templateUrl: './new-signin-tu-learn.component.html',
  styleUrls: ['./new-signin-tu-learn.component.scss']
})
export class NewSigninTuLearnComponent implements OnInit {
  form: FormGroup 
  isShowLoginForm = true;
  registerform: FormGroup
  constructor( 
    public fb: FormBuilder 
  ) { } 

 

  ngOnInit(): void { 
    this.form = this.fb.group({ 
      username: ['',  Validators.required], 
      password:['', Validators.required],
      checkbox:['', ]
    }); 
    this.registerform =this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      checkbox:['', ]
    })
  } 
 
  login(){ 
    let b = this.form.value 
    console.log(b) 
  }
  register(){ 
    let b = this.registerform.value 
    console.log(b)

  } 
}