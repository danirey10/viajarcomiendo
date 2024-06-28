import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  private fb = inject( UntypedFormBuilder );
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  public user = computed(() => this._authService.currentUser());
  public urlImage: string = '../assets/noimage.png';
  fileUpload : File = null!;
  image!: any;

  public myForm: UntypedFormGroup = this.fb.group({
    img: ['',[Validators.required]],
  });

  public myFormUser: UntypedFormGroup = this.fb.group({
    name: ['',[Validators.required]],
  });

  public myFormPass: UntypedFormGroup = this.fb.group({
    passactual: ['',[Validators.required, Validators.minLength(6)]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]],
  });

  onChange(event:any) {
    this.fileUpload = event.target.files[0];
  }

  onUploadImg() {
      const reader = new FileReader();
      reader.readAsDataURL(this.fileUpload);
      if(this.fileUpload.type == 'image/jpeg' || this.fileUpload.type == 'image/png'){
        if(this.fileUpload.size > 300000){
          Swal.fire({title:'Error', text:'Los archivos no pueden superar los 300kb', icon:"error"});
          return;
        }
        reader.onload = (resp) => {
          if(resp.target?.result){
            this.image = resp.target?.result;
            console.log(resp.target.result);
            this._authService.updateImg(this.image).subscribe();
          }
        };
      }else{
        Swal.fire({title:'Error', text:'Sólo pueden ser archivos jpg o png', icon:"error"});
        return;
      }
  }

  onUploadText(){
    this._authService.updateName(this.myFormUser.value.name)
    .subscribe({
      error: (message) => {
        Swal.fire({title:'Error', text:message, icon:"error"});
      }
    })
  }

  getImage():string|null {
    if(this.user()){
      if(this.user()!.img.length < 2){
        return this.urlImage;
      }else{
        this.urlImage = this.user()?.img!;
        return this.urlImage;
      }
    }
    return null;
  }

  changePassword(){
    const passActual = this.myFormPass.value.passactual;
    console.log(passActual);
    this._authService.checkPass(passActual).subscribe({
      next: () => {
        const pass1 = this.myFormPass.value.password;
        const pass2 = this.myFormPass.value.password2;
        if(pass1 === pass2){
          this._authService.changePassword(pass1).subscribe(resp => {
            Swal.fire({title:'Cambio de contraseña realizado', text:'Inicia sesión con tu nueva contraseña.', icon:"success"})
            .then((result) => {
              if(result.isConfirmed){
                this._authService.logout();
                this._router.navigateByUrl('/auth/login');
              }
            })
          });
        }else{
          Swal.fire({title:'Error', text:"Las contraseñas deben ser iguales", icon:"error"});  
        }
      },
      error: (message) => {
        Swal.fire({title:'Error', text:message, icon:"error"});
      }
    });


  }


}
