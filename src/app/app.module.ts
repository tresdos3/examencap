import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Carpeta1Component } from './carpeta1/carpeta1.component';
import { Carpeta2Component } from './carpeta2/carpeta2.component';
import { Carpeta3Component } from './carpeta3/carpeta3.component';
import { Carpeta4Component } from './carpeta4/carpeta4.component';
import { Carpeta5Component } from './carpeta5/carpeta5.component';
import { Carpeta6Component } from './carpeta6/carpeta6.component';
import { Carpeta7Component } from './carpeta7/carpeta7.component';
import { Carpeta8Component } from './carpeta8/carpeta8.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AppRoutingModule } from "./app-routing.module";
import { Carpeta9Component } from './carpeta9/carpeta9.component';
import { AgmCoreModule } from '@agm/core';
import { MapsService } from "./service/maps.service";
import { TextPipe } from './pipe/text.pipe';
import { CortarPipe } from './pipe/cortar.pipe';
import { AdministradorGuard } from "./guard/administrador.guard";
import { EditorGuard } from "./guard/editor.guard";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCv_YyKTTfQHcefNR6bHbUs3YppakLNrjg",
    authDomain: "examen-cap.firebaseapp.com",
    databaseURL: "https://examen-cap.firebaseio.com",
    projectId: "examen-cap",
    storageBucket: "",
    messagingSenderId: "830675415086"
  }
};



@NgModule({
  declarations: [
    AppComponent,
    Carpeta1Component,
    Carpeta2Component,
    Carpeta3Component,
    Carpeta4Component,
    Carpeta5Component,
    Carpeta6Component,
    Carpeta7Component,
    Carpeta8Component,
    HomeComponent,
    NotFoundComponentComponent,
    Carpeta9Component,
    TextPipe,
    CortarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LazyLoadImageModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjh_eb4bFIFLqvbxR98tKiqXIsQK3_Nws',
      libraries: ["places"]
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
  providers: [MapsService, AdministradorGuard, EditorGuard, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
