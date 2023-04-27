import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { AdminserviceService } from './adminservice.service';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[

{
  path:"",redirectTo:"movie",pathMatch:"full"
},
{
  path:"movie",component:MovieComponent
},
{
  path:"viewmovie",component:ViewmovieComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ViewmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



