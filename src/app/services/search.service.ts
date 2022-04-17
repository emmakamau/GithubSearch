import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user:User
  private queryUser: string;
  
  constructor(private http:HttpClient){
    user = new User("","","","",0,0,0,"",new Date)
  }

  search(queryUser:string){
    this.queryUser = queryUser
  }

  displayUser():Observable<any>{
    interface APiResponse{
      url:string, 
      login:string, 
      html_url:string,  
      location:string, 
      public_repos:number, 
      followers:number, 
      following:number, 
      avatar_url:string, 
      created_at:Date 
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<APiResponse>(`https://api.github.com/users/`${queryUser}).toPromise().then(response=>{
        this.user.url = response.url
        this.user.login = response.login
        this.user.html_url = response.html_url
        this.user.locations = response.locations
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.avatar_url = response.avatar_url
        this.user.created_at = response.created_at

        resolve()
      },
        error=>{
          reject(error)
        }
      )
    })

  }

}
