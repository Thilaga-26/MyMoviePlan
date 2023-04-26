import { Component,OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
export class MoviesearchComponent implements OnInit {

  moviename:any;
  language:any;
  movies:any;
  message:any;

  constructor(private service:MovieserviceService){}

  public findbymoviename(){
    let response=this.service.getmoviebyname(this.moviename);
    response.subscribe((data:any)=>this.movies=data);
  }

  public findbylanguage(){
    let response=this.service.getmoviebylanguage(this.language);
    response.subscribe((data:any)=>this.movies=data); 
  }

  ngOnInit(): void {
    let response=this.service.getmovies();
    response.subscribe((data:any)=>this.movies=data);
  }
}
