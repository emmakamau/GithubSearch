import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public queryUser:string
  public githubUser:any

  constructor(private githubSearch:SearchService){}

  public search(queryUser){
    this.githubSearch.displayUser(queryUser)
    console.log(queryUser)
  }

  ngOnInit(): void{
    this.githubUser = this.githubSearch.user
  }

}
