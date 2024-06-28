import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';


@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private fb = inject( UntypedFormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  public myForm: UntypedFormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  login(){
    const {email, password} = this.myForm.value;
    this.authService.login(email,password)
    .subscribe({
      next: () => this.router.navigateByUrl('/recetas'),
      error: (message) => {
        Swal.fire({title:'Error', text:message, icon:"error"})
      }
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
