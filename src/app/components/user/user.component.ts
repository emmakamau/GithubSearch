import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Router} from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public queryUser:string
  public githubUser:any
  public repos = []

  constructor(private githubSearch:SearchService, private router:Router){}

  goToUrl(id){
    this.router.navigate(['/repos',id])
  }


  public search(queryUser){
    this.githubSearch.displayUser(queryUser)
    console.log(queryUser)
  }

  ngOnInit(): void{
    this.githubUser = this.githubSearch.user
    this.repos = this.githubSearch.repoData
  }

}
