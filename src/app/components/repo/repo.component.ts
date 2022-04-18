import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  public githubUser:any
  public repos = []

  constructor(private githubSearch:SearchService){ }

  ngOnInit(): void {
    this.githubUser = this.githubSearch.user
    this.repos = this.githubSearch.repoData
  }

}
