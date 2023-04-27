import { Component,OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:Movie=new Movie();
  constructor(private service:AdminserviceService){}
  message:any
  ngOnInit(): void {
    
  }

  public insertnow(){
    let response=this.service.doinsert(this.movie);
    response.subscribe((data:any)=>this.message=data);
    alert("inserted successfully "+this.movie.moviename);
  }

}
