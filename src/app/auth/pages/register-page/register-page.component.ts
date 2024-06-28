import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {

  private fb = inject( UntypedFormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );
  public name!: string;

  public myForm: UntypedFormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
  });

  register():void{
    const {name, email, password} = this.myForm.value;
    this.authService.register(name, email, password).subscribe(
      {
        next: () => {
          Swal.fire({title:'Registrado correctamente', text:'Puedes loguearte con tu usuario', icon:"success"})
          .then((result) => {
            if(result.isConfirmed){
              this.router.navigateByUrl('/auth/login');
            }
          })
          }
        ,
        error: (message) => {
          Swal.fire({title:'Error', text:message, icon:"error"});
        }
      }
    );
  }

  constructor() { }

  ngOnInit(): void {

    this.authService.checkAuthStatus().subscribe(resp => {
      if(resp==true){
        this.router.navigateByUrl('/recetas');
      }
    })

  }

  thisName():void {
    const {name, email, password} = this.myForm.value;
    this.name=name;
  }



}
