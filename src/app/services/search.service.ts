import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from '../classes/repos';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user:User
  repository:Repos
  newUserData :any = []
  repoData = []
  
  constructor(private http:HttpClient){
    this.user = new User(0,"","","","",0,0,0,"",new Date,"","",0,"","");
    this.repository = new Repos("","",new Date,new Date,"","","",0); 	
  }

  displayUser(queryUser:string){
    this.repoData.length = 0 //Sets array back to zero for new request

    //Define properties expected from the API
    interface APiResponse{
      id:number,
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
      name:string,
      email:string
    }
    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<APiResponse>(`https://api.github.com/users/${queryUser}?${environment.apiKey}`).toPromise().then(response=>{
        this.user.id = response.id
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
        this.user.email = response.email
        resolve()
      },
        error=>{
          reject(error)
        }
      )
      this.http.get<any>(`https://api.github.com/users/${queryUser}/repos?${environment.apiKey}`).toPromise().then(response=>{ 
	      for(var i=0; i<response.length; i++){
          this.newUserData = new Repos(response[i].name,
                                      response[i].description,
                                      response[i].created_at,
                                      response[i].updated_at,
                                      response[i].html_url,
                                      response[i].clone_url,
                                      response[i].language,
                                      response[i].stargazers_count);
          this.repoData.push(this.newUserData);}
        resolve()
	    },
	      error=>{
	        reject(error)
	      }
	    )
    })
    return promise
  }

}
