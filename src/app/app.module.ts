import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';
import { BookComponent } from './book/book.component';
import { PayComponent } from './pay/pay.component';
import { MovieserviceService } from './movieservice.service';
import { RouterModule, Routes,ROUTES } from '@angular/router';

const routes:Routes=[
{
  path:"app",component:AppComponent
},
{
  path:"home",component:HomeComponent
},
{
  path:"moviesearch",component:MoviesearchComponent
},
{
  path:"book",component:BookComponent
},
{
  path:"pay",component:PayComponent
},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesearchComponent,
    BookComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


