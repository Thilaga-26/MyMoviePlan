import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  public doinsert(movie:any){
    return this.http.post("http://localhost:8091/movie/insert",movie,{responseType:'text' as 'json'});
  }

  public getuser(){
    return this.http.get("http://localhost:8091/user/viewall")
  }

  public deleteuser(userid:any){
    return this.http.delete("http://localhost:8091/user/delete/"+userid)
  }

  public getmovies(){
    return this.http.get("http://localhost:8091/movie/viewall");
  }

  public deletemovie(movieid:any){
    return this.http.delete("http://localhost:8091/movie/delete/"+movieid);
  }

  public getadminbyname(name:any){
    return this.http.get("http://localhost:8091/admin/viewadmin/"+name)
  }
}
