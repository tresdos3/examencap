import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdministradorGuard implements CanActivate {
  constructor(private Router: Router, private toastr: ToastrService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(localStorage.getItem("Sesion") === "Admin" || localStorage.getItem("Sesion") === "Editor"){
        this.toastr.success('Acceso Autorizado', 'Alerta!');
        console.log("Acceso Autorizado");
        console.log("Always Admin Guard");
      }
      else{
        this.toastr.warning('Acceso No Autorizado', 'Alerta!');
        console.log("Acceso no autorizado")
        this.Router.navigate(["/"]);
      }
      
    return true;
  }
}
