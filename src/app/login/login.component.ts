import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.scss'] 
}) 
export class LoginComponent implements OnInit { 
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
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      class: ['', Validators.required],
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