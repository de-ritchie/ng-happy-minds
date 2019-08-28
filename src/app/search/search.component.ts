import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit { 

  result: any

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  lookup(val){
    console.log(val);
    this.searchService.search(val)
    .subscribe(
      res => {
        console.log(res);
        if(res.name && res.definitions){
          this.result = res;
        }
      }
    )
  }

}