import { Component,OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {

  movies:any;
  constructor(private service:AdminserviceService){}

  public deletemovie(movieid:number){
    let response=this.service.deletemovie(movieid);
    response.subscribe((data:any)=>this.movies=data);
    alert("deleted "+this.movies.moviename+" successfully");
  }

  ngOnInit(): void {
    let response=this.service.getmovies();
    response.subscribe((data:any)=>this.movies=data);
  }

}
