import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) { }
  public getmovies(){
    return this.http.get("http://localhost:8091/movie/viewall");
  }

  public getmoviebyname(moviename:any){
    return this.http.get("http://localhost:8091/movie/viewname/"+moviename);
  }

  public getmoviebylanguage(language:any){
    return this.http.get("http://localhost:8091/movie/viewlanguage/"+language);
  }

  public doinsertuser(user:any){
    return this.http.post("http://localhost:8091/user/insert",user,{responseType:'text' as 'json'}); 
  }

  public getuserbyname(username:any){
    return this.http.get("http://localhost:8091/user/view/"+username);
  }
}
