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
    this.githubSearch.search(queryUser:string)
    this.githubSearch.displayUser().subscribe(results =>{
      this.githubUser = results['data']
    }, error{
      alert('not found:(')')
    })
  }

  ngOnInit(): void{
    this.githubSearch.displayUser().subscribe(response=>{
      this.githubUser=response['data']
    })
  }

}
