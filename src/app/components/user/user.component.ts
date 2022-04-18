import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Router} from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public queryUser:string
  public githubUser:any
  public repos = []

  constructor(private githubSearch:SearchService, private router:Router, private pageLoader:NgxSpinnerService){}

  goToUrl(id){
    this.router.navigate(['/repos',id])
  }


  public search(queryUser){
    this.pageLoader.show()
    this.githubSearch.displayUser(queryUser)
    console.log(queryUser)
    this.pageLoader.hide()
  }

  ngOnInit(): void{
    this.pageLoader.show()
    this.githubUser = this.githubSearch.user
    this.pageLoader.hide()
    this.repos = this.githubSearch.repoData
  }

}
