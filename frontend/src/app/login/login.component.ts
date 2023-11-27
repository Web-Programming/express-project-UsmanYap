import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = 'usmantest@gmail.com';
  password = '';

  model = { email: '', password: '' };

  //reactive form
  myemail = new FormControl('');
  mypass = new FormControl('');

  //grouping form
  formLogin = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });
}
