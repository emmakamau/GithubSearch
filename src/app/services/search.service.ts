import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user:User
  
  constructor(private http:HttpClient){
    this.user = new User("","","","",0,0,0,"",new Date,"","",0,"")
  }


  displayUser(queryUser:string){
    interface APiResponse{
      url:string, 
      login:string, 
      html_url:string,  
      location:string, 
      public_repos:number, 
      followers:number, 
      following:number, 
      avatar_url:string, 
      created_at:Date,
      company:string,
      bio:string,
      public_gists:number,
      name:string
    }
    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<APiResponse>(`https://api.github.com/users/${queryUser}`).toPromise().then(response=>{
        this.user.url = response.url
        this.user.login = response.login
        this.user.html_url = response.html_url
        this.user.location = response.location
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.avatar_url = response.avatar_url
        this.user.created_at = response.created_at
        this.user.company = response.company
        this.user.bio = response.bio
        this.user.public_gists = response.public_gists
        this.user.name = response.name
        resolve()
      },
        error=>{
          reject(error)
        }
      )
    })

  }

}
